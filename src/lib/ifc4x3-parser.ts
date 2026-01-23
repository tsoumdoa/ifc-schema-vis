export interface Ifc4x3Node {
  id: string;
  group: number;
  details: {
    definition?: string;
    version: '4x3';
  };
}

export interface Ifc4x3Link {
  source: string;
  target: string;
  value: number;
  relationship: string;
}

export interface Ifc4x3GraphData {
  nodes: Ifc4x3Node[];
  links: Ifc4x3Link[];
}

export function parseIfc4x3Schema(content: string): Ifc4x3GraphData {
  const nodes: Ifc4x3Node[] = [];
  const links: Ifc4x3Link[] = [];
  const nodeIds = new Set<string>();

  // Process ENTITY definitions for IFC4X3
  const entityRegex = /ENTITY\s+([a-zA-Z0-9_]+)/g;
  let match;
  
  while ((match = entityRegex.exec(content)) !== null) {
    const entityName = match[1];
    
    if (!entityName.includes('Enum') && !nodeIds.has(entityName)) {
      nodes.push({ 
        id: entityName, 
        group: 1, 
        details: { 
          definition: `IFC4X3 ${entityName}`,
          version: '4x3'
        } 
      });
      nodeIds.add(entityName);
    }
  }

  // Process SUBTYPE relationships
  const subtypeRegex = /SUBTYPE\s+OF\s+\(([^)]+)\)/g;
  while ((match = subtypeRegex.exec(content)) !== null) {
    const supertype = match[1].trim();
    const entityMatch = content.substring(0, match.index).match(/ENTITY\s+([a-zA-Z0-9_]+)/g);
    if (entityMatch && entityMatch.length > 0) {
      const entityName = entityMatch[entityMatch.length - 1].replace('ENTITY ', '');
      if (!supertype.includes('Enum')) {
        links.push({ 
          source: entityName, 
          target: supertype, 
          value: 1, 
          relationship: 'subtype'
        });
      }
    }
  }

  return { nodes, links };
}