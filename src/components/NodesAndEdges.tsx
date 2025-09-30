import React from 'react';
import { useState } from 'react'

export default function NodesAndEdges () {
    const [ selectedNodes, setSelectedNodes ] = useState<string[]>([]);
    return (
        <div>
            <div className="sidebar-header">Modules and Dependencies</div>
            <div className="sidebar-subsection">
                <div>Modules Fromat</div>
                <div className="modules-format-container">
                    
                </div>
            </div>
            <div className="sidebar-subsection">
                <div>Module Editor</div>
                <div className="modules-editor-container">

                </div>
            </div>
        </div>
    )
}