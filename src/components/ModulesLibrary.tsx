import React, { useState } from 'react';
import { useDnD } from '../hooks/DnDContext';
import ModuleNodeType from './nodes/Module';

export default function ModulesLibrary () {
    const [ selectedNodes, setSelectedNodes ] = useState<string[]>([]);
    const [_, setType ] = useDnD();

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
        setType(nodeType);
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="sidebar-content">
            <div className="sidebar-header">Modules Library</div>
            <div className="sidebar-text">No modules selected.</div>
            <div className="library-container">
                {}
            </div>
        </div>
    )
}