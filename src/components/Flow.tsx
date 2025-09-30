import { ReactFlow } from '@xyflow/react';
import ModuleNode from './nodes/Module.tsx';

const nodeTypes = {
    moduleNode: ModuleNode
};

export default function FlowEditor() {
    return <ReactFlow nodeTypes={nodeTypes} />
}