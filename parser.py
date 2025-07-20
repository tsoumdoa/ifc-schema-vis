import re
import json

def parse_ifc_schema(ifc_file_path):
    with open(ifc_file_path, 'r') as f:
        content = f.read()

    nodes = []
    links = []
    node_ids = set()

    # Process all ENTITY definitions
    entity_definitions = re.findall(r"ENTITY(.*?)END_ENTITY;", content, re.DOTALL)
    for entity_content in entity_definitions:
        entity_body_cleaned = entity_content.strip()
        entity_name_match = re.match(r"\s*([a-zA-Z0-9_]+)", entity_body_cleaned)
        if not entity_name_match:
            continue
        entity_name = entity_name_match.group(1)
        
        if entity_name not in node_ids:
            nodes.append({"id": entity_name, "group": 1, "details": {"definition": entity_content}})
            node_ids.add(entity_name)

        # Look for SUBTYPE OF
        supertype_match = re.search(r"SUBTYPE\s+OF\s+\((.+?)\)", entity_content)
        if supertype_match:
            supertypes_str = supertype_match.group(1).strip()
            supertype_names = [s.strip() for s in supertypes_str.split(',')]
            for supertype_name in supertype_names:
                if supertype_name:
                    if supertype_name not in node_ids:
                        nodes.append({"id": supertype_name, "group": 1, "details": {}})
                        node_ids.add(supertype_name)
                    links.append({"source": entity_name, "target": supertype_name, "value": 1})

        # Look for attribute types
        main_definition = re.split(r'\b(INVERSE|DERIVE|WHERE)\b', entity_content)[0]
        attribute_lines = main_definition.split(';')
        for line in attribute_lines:
            line = line.strip()
            if not line or ":" not in line:
                continue
            
            parts = line.split(':')
            if len(parts) < 2:
                continue

            attr_type = parts[1].strip()
            
            attr_type = re.sub(r'^(OPTIONAL|SET|LIST|ARRAY|BAG)\s*\[.*?\]\s*OF\s+', '', attr_type)
            attr_type = attr_type.split(' ')[0]
            attr_type = attr_type.strip()

            if attr_type and attr_type.startswith("Ifc"):
                if attr_type not in node_ids:
                    nodes.append({"id": attr_type, "group": 2, "details": {}})
                    node_ids.add(attr_type)
                links.append({"source": entity_name, "target": attr_type, "value": 1})

    return {"nodes": nodes, "links": links}

def main():
    ifc_file_path = '/Users/tomohirosugeta/repo/ifc-schema-vis/IFC2x3.exp'
    data = parse_ifc_schema(ifc_file_path)
    
    node_ids = {node['id'] for node in data['nodes']}
    valid_links = [link for link in data['links'] if link['source'] in node_ids and link['target'] in node_ids]
    data['links'] = valid_links

    output_file_path = '/Users/tomohirosugeta/repo/ifc-schema-vis/src/routes/data.js'
    with open(output_file_path, 'w') as f:
        f.write("export default ")
        json.dump(data, f, indent=2)

if __name__ == '__main__':
    main()
