import { ReactFlow } from '@xyflow/react';
import type { Node, Edge, OnNodesChange, OnEdgesChange, OnConnect } from "@xyflow/react";
import ModuleNode from './nodes/Module.tsx';

const nodeTypes = {
    moduleNode: ModuleNode
};

type FlowEditorProps = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
};

export default function FlowEditor( { nodes, edges, onNodesChange, onEdgesChange, onConnect }: FlowEditorProps) {
    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            preventScrolling={false}
        />
    )
}