import React from 'react';
import { type NodeProps, type Node, NodeResizer } from '@xyflow/react';

export type ModuleNodeData = {
    name: string,
    label?: string,
    selected?: boolean,
    description?: string,
    inputs: Record<string, any>,
    outputs?: Record<string, any>,
    commands: string
}

export type ModuleNodeType = Node<ModuleNodeData, 'module'>

export default function ModuleNode(props: NodeProps<ModuleNodeType>) {
    return (
        <div className="module-container">
            <div className="module-name">
                {props.data.name}</div> 
            <div className='module-description'>
                {props.data?.description}</div>
        </div>
    )
}