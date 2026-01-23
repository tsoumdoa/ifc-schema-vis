import fs from 'fs';
import path from 'path';

// Read IFC4X3 file
const ifc4x3Content = fs.readFileSync('./IFC4X3_ADD2.exp', 'utf-8');

const nodes = [];
const links = [];
const nodeIds = new Set();

// Process ENTITY definitions
const entityRegex = /ENTITY\s+([a-zA-Z0-9_]+)/g;
let match;

while ((match = entityRegex.exec(ifc4x3Content)) !== null) {
  const entityName = match[1];
  
  if (!entityName.includes('Enum') && !nodeIds.has(entityName)) {
    nodes.push({
      id: entityName,
      group: 1,
      details: {
        version: '4x3',
        definition: `IFC4X3 ${entityName}`
      }
    });
    nodeIds.add(entityName);
  }
}

// Process SUBTYPE relationships
const subtypeRegex = /ENTITY\s+([a-zA-Z0-9_]+)([\s\S]*?)SUBTYPE\s+OF\s+\(([^)]+)\)/g;
let subtypeMatch;

while ((subtypeMatch = subtypeRegex.exec(ifc4x3Content)) !== null) {
  const entityName = subtypeMatch[1];
  const supertype = subtypeMatch[3].trim();
  
  if (!supertype.includes('Enum') && nodeIds.has(entityName) && nodeIds.has(supertype)) {
    links.push({
      source: entityName,
      target: supertype,
      value: 1
    });
  }
}

// Write IFC4X3 data file
const ifc4x3Data = { nodes, links };
fs.writeFileSync('./src/routes/data-4x3.js', `export default ${JSON.stringify(ifc4x3Data, null, 2)}`);

console.log(`IFC4X3 data file created with ${nodes.length} nodes and ${links.length} links`);