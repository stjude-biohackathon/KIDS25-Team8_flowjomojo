import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import ModuleNode from './nodes/Module.tsx';

const nodeTypes = {
    moduleNode: ModuleNode
};

export default function FlowEditor() {
    const [ nodes, setNodes, onNodesChange] = useNodesState([]);

    return (
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
            fitView
            preventScrolling={false}
        />
    )
}