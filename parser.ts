import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

interface Node {
	id: string;
	group: number;
	details: {
		definition?: string;
	};
}

interface Link {
	source: string;
	target: string;
	value: number;
}

interface GraphData {
	nodes: Node[];
	links: Link[];
}

export function parseIfcSchema(ifcFilePath: string): GraphData {
	const content = readFileSync(ifcFilePath, 'utf-8');

	const nodes: Node[] = [];
	const links: Link[] = [];
	const nodeIds: Set<string> = new Set();

	// Process all ENTITY definitions
	const entityDefinitions = [...content.matchAll(/ENTITY(.*?)END_ENTITY;/gs)];
	for (const match of entityDefinitions) {
		const entityContent = match[1];
		const entityBodyCleaned = entityContent.trim();
		const entityNameMatch = entityBodyCleaned.match(/^\s*([a-zA-Z0-9_]+)/);

		if (!entityNameMatch) {
			continue;
		}

		const entityName = entityNameMatch[1];

		// IGNORE nodes that contain "Enum"
		if (entityName.includes('Enum')) {
			continue;
		}

		if (!nodeIds.has(entityName)) {
			nodes.push({ id: entityName, group: 1, details: { definition: entityContent } });
			nodeIds.add(entityName);
		}

		// Look for SUBTYPE OF
		const supertypeMatch = entityContent.match(/SUBTYPE\s+OF\s+\((.+?)\)/);
		if (supertypeMatch) {
			const supertypesStr = supertypeMatch[1].trim();
			const supertypeNames = supertypesStr.split(',').map((s) => s.trim());
			for (const supertypeName of supertypeNames) {
				if (supertypeName) {
					// IGNORE supertypes that contain "Enum"
					if (supertypeName.includes('Enum')) {
						continue;
					}

					if (!nodeIds.has(supertypeName)) {
						nodes.push({ id: supertypeName, group: 1, details: {} });
						nodeIds.add(supertypeName);
					}
					links.push({ source: entityName, target: supertypeName, value: 1 });
				}
			}
		}

		// Look for attribute types
		const mainDefinition = entityContent.split(/\b(INVERSE|DERIVE|WHERE)\b/)[0];
		const attributeLines = mainDefinition.split(';');
		for (let line of attributeLines) {
			line = line.trim();
			if (!line || !line.includes(':')) {
				continue;
			}

			const parts = line.split(':');
			if (parts.length < 2) {
				continue;
			}

			let attrType = parts[1].trim();

			attrType = attrType.replace(/^(OPTIONAL|SET|LIST|ARRAY|BAG)\s*\[.*?\]\s*OF\s+/, '');
			attrType = attrType.split(' ')[0];
			attrType = attrType.trim();

			if (attrType && attrType.startsWith('Ifc')) {
				// IGNORE attribute types that contain "Enum"
				if (attrType.includes('Enum')) {
					continue;
				}

				if (!nodeIds.has(attrType)) {
					nodes.push({ id: attrType, group: 2, details: {} });
					nodeIds.add(attrType);
				}
				links.push({ source: entityName, target: attrType, value: 1 });
			}
		}
	}

	return { nodes, links };
}

function main() {
	const ifcFilePath = '/Users/tomohirosugeta/repo/ifc-schema-vis/IFC2x3.exp';
	let data = parseIfcSchema(ifcFilePath);

	const nodeIds = new Set(data.nodes.map((node) => node.id));
	const validLinks = data.links.filter(
		(link) => nodeIds.has(link.source) && nodeIds.has(link.target)
	);
	data.links = validLinks;

	const outputFilePath = '/Users/tomohirosugeta/repo/ifc-schema-vis/src/routes/data.js';
	writeFileSync(outputFilePath, `export default ${JSON.stringify(data, null, 2)}`);
}

main();
