import React, { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { useDnD, type DragModule } from '../hooks/DnDContext';

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function ModulesLibrary () {
    const { dragModule, setDragModule, sidebarModules } = useDnD();

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, module: DragModule) => {
        if (!module) return;
        setDragModule(module);
        event.dataTransfer.setData("application/reactflow", JSON.stringify(module));
        event.dataTransfer.effectAllowed = "move";
    };
    
    return (
        <div className="sidebar-content">
            <div className="sidebar-header">Modules Library</div>
            {sidebarModules.length === 0 ? (
                <div className="sidebar-text">No modules selected.</div>
            ) : (
                <div className="library-container">
                    <div className="sidebar-text">Selected modules:</div>
                    {sidebarModules.map((mod) => (
                        <div
                            key={mod?.name}
                            className="library-item"
                            draggable
                            onDragStart={(e) => onDragStart(e, mod)}
                        >
                            {mod?.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}