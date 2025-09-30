import { useState, useEffect } from 'react';
import { ReactFlow } from '@xyflow/react';
import ModuleNode from './nodes/Module.tsx';
import { type ModuleNodeType } from "./nodes/Module";
import { retrieveModules } from "../utils/retrieveModules";

const nodeTypes = {
    moduleNode: ModuleNode
};

export default function FlowEditor() {
    const [nodes, setNodes ] = useState<ModuleNodeType[]>([]);

    useEffect(() => {
        retrieveModules().then(setNodes);
    }, []);

    console.log(nodes.map(node => node.data.name))

    return <ReactFlow 
        nodeTypes={nodeTypes} 
    />
}