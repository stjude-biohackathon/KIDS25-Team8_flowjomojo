import React, { useState } from 'react';
import ModulesLibrary from './ModulesLibrary.tsx';
import NodesAndEdges from './NodesAndEdges.tsx';
import ShareOptions from './ShareOptions.tsx';
import library from '../assets/library.png';
import nodes_img from '../assets/nodes.png';
import share from '../assets/share.png';

type ActivePanel = "modules-library" | "nodes-and-edges" | "share-options"

export default function Sidebar() {
    const [ active, setActive ] = useState<ActivePanel>("modules-library")

    return (
        <aside className="sidebar-container">
            <div className="sidebar-nav">
                <button onClick={() => setActive("modules-library")}>
                    <img src={library} alt="library" className="sidebar-icon"></img>
                </button>
                <button onClick={() => setActive("nodes-and-edges")}>
                    <img src={nodes_img} alt="nodes" className="sidebar-icon"></img>
                </button>
                <button onClick={() => setActive("share-options")}>
                    <img src={share} alt="share" className="sidebar-icon"></img>
                </button>
            </div>
            <div className="sidebar-container">
                { active == "modules-library" && <ModulesLibrary/> }
                { active == "nodes-and-edges" && <NodesAndEdges/> }
                { active == "share-options" && <ShareOptions/>}
            </div>
        </aside>
    )
}