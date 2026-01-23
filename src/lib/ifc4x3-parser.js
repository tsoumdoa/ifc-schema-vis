import { readFileSync } from 'fs';

export function parseIfc4x3Schema(ifcFilePath) {
    const content = readFileSync(ifcFilePath, 'utf-8');
    
    const nodes = [];
    const links = [];
    const nodeIds = new Set();
    
    // Process all ENTITY definitions for IFC4X3
    const entityDefinitions = [...content.matchAll(/ENTITY\s+([a-zA-Z0-9_]+)(.*?);/gs)];
    
    for (const match of entityDefinitions) {
        const entityName = match[1];
        const entityContent = match[2];
        
        // Skip enum types
        if (entityName.includes('Enum')) continue;
        
        if (!nodeIds.has(entityName)) {
            nodes.push({ 
                id: entityName, 
                group: 1, 
                details: { 
                    definition: entityContent,
                    version: 'IFC4X3'
                }
            });
            nodeIds.add(entityName);
        }
        
        // Look for SUBTYPE OF relationships
        const supertypeMatch = entityContent.match(/SUBTYPE\s+OF\s+\(([^)]+)\)/);
        if (supertypeMatch) {
            const supertype = supertypeMatch[1].trim();
            if (!nodeIds.has(supertype)) {
                nodes.push({ id: supertype, group: 1, details: { version: 'IFC4X3' } });
                nodeIds.add(supertype);
            }
            links.push({ source: entityName, target: supertype, value: 1 });
        }
    }
    
    return { nodes, links };
}