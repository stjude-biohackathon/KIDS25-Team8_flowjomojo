// import React from 'react';
import { NodeToolbar, Position, useNodesState } from '@xyflow/react'
import { useCallback, useState, useEffect } from 'react';
import { useDnD } from '../hooks/DnDContext.tsx';
import { useReactFlow } from '@xyflow/react';
import { type ModuleNodeType } from './nodes/Module.tsx';

export default function NodesAndEdges () {
    const { getNodes, updateNodeData } = useReactFlow();
    const nodes = getNodes() as ModuleNodeType[];
    const [ selectedNodeId, setSelectedNodeId ] = useState<string | null>(null);

    const selectedNode = nodes.find((n) => n.id === selectedNodeId);
    const [ nodeName, setNodeName ] = useState('');

    console.log("Selected node", selectedNode);
    const handleSelect = (id: string) => {
        setSelectedNodeId(id);
        const node = nodes.find((n) => n.id === id);
        setNodeName(node?.data.name ?? '');
    };
    const handleNameChange = (value: string) => {
        setNodeName(value); // update input immediately
        if (selectedNodeId) {
          updateNodeData(selectedNodeId, { name: value }); // use value directly
        }
    };
      
    return (
        <div className="sidebar-content">
            <div className="sidebar-header">Modules and Dependencies</div>
            <div className="sidebar-subsection">
                <div className='sidebar-subsection-header'>Modules format:</div>
                <div className="modules-format-container">
                    <div className="module-format-block">
                        <div className='module-format-header'>Select Module:</div>
                        <select className='format-box' value={selectedNodeId ?? ""}
                            onChange={(e) => handleSelect(e.target.value)}
                        >
                        <option value="">-- None --</option>
                            {nodes.map((node) => (
                                <option key={node.id} value={node.id}>
                                    {node.data.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedNode && (
                        <div className="module-format-block">
                        <div className='module-format-header'>Module Name:</div>
                        <input className='format-box'
                            type="text"
                            value={nodeName}
                            onChange={(e) => handleNameChange(e.target.value)}
                        />
                        {/* <button onClick={applyChanges}>Set</button> */}
                        </div>
                    )}
                </div>
            </div>
            <div className="sidebar-subsection">
                <div className='sidebar-subsection-header'>Module editor:</div>
                <div className="modules-editor-container">
                    <div className="module-editor-block">
                    </div>
                </div>
            </div>
        </div>
    )
}