import React, { useState, useCallback } from "react";
import { ReactFlowProvider, Background, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import FlowEditor from './components/Flow'
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import TopBar from './components/TopBar';
import { DnDProvider, useDnD } from "./hooks/DnDContext";

import './App.css';
import '@xyflow/react/dist/style.css';

const App = () => {
    const [ nodes, setNodes, onNodesChange] = useNodesState([]);
    const [ edges, setEdges, onEdgesChange ] = useEdgesState([]);
    const onConnect = useCallback(
        (params) => setEdges((els) => addEdge(params, els)),
        [],
    );

    return (
        <div className="app-container">
            <header className="app-header">
                <TopBar />
            </header>
            <div className="app-body">
                <DnDProvider>
                    <ReactFlowProvider>
                        <Sidebar />
                        <main className="app-main">
                            <SearchBar />
                                <div className="editor-container">
                                    <FlowEditor 
                                        nodes={nodes}
                                        edges={edges}
                                        onNodesChange={onNodesChange}
                                        onEdgesChange={onEdgesChange}
                                        onConnect={onConnect}
                                    />
                                    <Background />
                                </div>
                        </main>
                    </ReactFlowProvider>
                </DnDProvider>
            </div>
        </div>
    );
};

export default App;