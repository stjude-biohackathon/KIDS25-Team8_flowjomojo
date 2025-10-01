import { ReactFlow, addEdge, applyNodeChanges, applyEdgeChanges, useReactFlow } from '@xyflow/react';
import type { Node, Edge, OnNodesChange, OnEdgesChange, OnConnect } from '@xyflow/react';
import React, { useState, useCallback } from 'react';
import ModuleNode, { type ModuleNodeType } from './nodes/Module.tsx';
import { useDnD } from '../hooks/DnDContext.tsx';

const nodeTypes = {
    module: ModuleNode
};

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function FlowEditor() {
    const { screenToFlowPosition } = useReactFlow();
    const { dragModule } = useDnD();
    const [nodes, setNodes ] = useState<Node[]>([]);
    const [edges, setEdges ] = useState<Edge[]>([]);

    console.log( dragModule )

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges],
    );
    const onDragOver = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },
        [],
    );
    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            if (!dragModule) {
                return;
            }
            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode: ModuleNodeType = {
                id: getId(),
                type: 'module',
                position,
                data: dragModule,
            };
            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition, dragModule],
    )

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDragOver={onDragOver}
            onDrop={onDrop}
            preventScrolling={false}
        />
    )
}