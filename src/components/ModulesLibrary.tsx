import React from 'react';
import { useDnD, type DragModule } from '../hooks/DnDContext';

export default function ModulesLibrary () {
    const { sidebarModules, setDragModule } = useDnD();

    console.log(sidebarModules)

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
                    {sidebarModules.map((mod) => (
                        <div
                            key={mod?.id}
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