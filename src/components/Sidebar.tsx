import React, { useState } from 'react';
import { useNodes } from '@xyflow/react';
import ModulesLibrary from './ModulesLibrary.tsx';
import NodesAndEdges from './NodesAndEdges.tsx';
import ShareOptions from './ShareOptions.tsx';

// type SidebarContext = {
//     state: "expanded" | "collapsed";
//     open: "boolean";
//     active_panel: "modules-library" | "nodes-and-edges" | "share-options"
// }
type ActivePanel = "modules-library" | "nodes-and-edges" | "share-options"

export default function Sidebar() {
    const [ active, setActive ] = useState<ActivePanel>("modules-library")

    return (
        <div>
            <aside className="w-64 bg-gray-100 border-r h-full p-4">
                <div className="space-y-2 mb-4">
                    <ul>
                        <li>
                            <button onClick={() => setActive("modules-library")}></button>
                        </li>
                        <li>
                            <button onClick={() => setActive("nodes-and-edges")}></button>
                        </li>
                        <li>
                            <button onClick={() => setActive("share-options")}></button>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-content"></div>
                <main>
                    { active == "modules-library" && <ModulesLibrary/> }
                    { active == "nodes-and-edges" && <NodesAndEdges/> }
                    { active == "share-options" && <ShareOptions/>}
                </main>
            </aside>
        </div>
    )
}