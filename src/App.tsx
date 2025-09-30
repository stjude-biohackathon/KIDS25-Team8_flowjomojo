import React, { useState } from "react";
import { ReactFlowProvider, ReactFlow, Background, useStore } from "@xyflow/react";
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import TopBar from './components/TopBar';
import './App.css';

const App = () => {

    return (
        <div className="app-container">
            <header className="app-header">
                <TopBar />
            </header>
            <div className="app-body">
                <Sidebar />
                <main className="app-main">
                    <div className="searchbar-container">
                        <div className="searchbar-inner">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="editor-container">
                        <ReactFlowProvider>
                            <ReactFlow />
                            <Background />
                        </ReactFlowProvider>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;