import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ModuleType {
    data: any,
    isConnectable: boolean
}
export default memo(({ data, isConnectable }: ModuleType) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                onConnect={(params) => console.log('handle onConnect', params )}
                isConnectable={isConnectable}
            />
            <div>
                <strong>{data.name}</strong>
            </div>
            <input
                className="nodrag"
                type="color"
                onChange={data.onChange}
                defaultValue={data.color}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </>
    );
});