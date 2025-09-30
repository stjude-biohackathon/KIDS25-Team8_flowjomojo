import React from 'react';
import { useState } from 'react'

export default function ShareOptions () {
    const [ selectedNodes, setSelectedNodes ] = useState<string[]>([]);
    return (
        <div>
            <div className="sidebar-header">Share Options</div>
        </div>
    )
}