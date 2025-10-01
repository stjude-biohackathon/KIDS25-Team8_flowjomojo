import { type NodeProps, type Node, Handle, Position, NodeResizer } from '@xyflow/react';

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
        <>  
            { props.selected &&
                <NodeResizer minWidth={100} minHeight={30} 
                    color="#ff0071"
                    lineClassName="border border-dashed border-gray-400"
                    handleClassName="w-2 h-2 bg-gray-600 rounded"
                />
            }
            <Handle type="target" position={Position.Top} />
            <div className="module-container">
                <div className="module-name">
                    {props.data.name}</div> 
                <div className='module-description'>
                    {props.data?.description}</div>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </>
        
    )
}