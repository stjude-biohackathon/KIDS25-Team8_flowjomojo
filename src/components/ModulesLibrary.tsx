import React from 'react';
import { useState } from 'react'

export default function ModulesLibrary () {
    const [ selectedNodes, setSelectedNodes ] = useState<string[]>([]);
    return (
        <div>
            <div className="sidebar-header">Modules-Library</div>
            <div className="sidebar-text">No modules selected.</div>
            <div className="library-container">
                {}
            </div>
        </div>
    )
}