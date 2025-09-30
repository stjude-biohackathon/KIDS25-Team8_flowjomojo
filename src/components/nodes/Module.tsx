import React, { useState } from 'react';
import { type NodeProps, type Node } from '@xyflow/react';

export type ModuleNodeData = {
    id: string,
    name: string,
    label?: string,
    selected: boolean,
    inputs: Record<string, any>,
    outputs?: Record<string, any>
}

export type ModuleNodeType = Node<ModuleNodeData>

export default function ModuleNode(props: NodeProps<ModuleNodeType>) {
    console.log("Rendering node:", props.data.id, props.data.label);
    return (
        <div className="module-container">
            <div className="module-name">{props.data.name}</div>
            <div className="module-content"></div>
        </div>
    )
}