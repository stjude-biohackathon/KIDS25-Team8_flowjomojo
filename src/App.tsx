import React, { useState, useEffect } from "react";
import { ReactFlowProvider, Background } from "@xyflow/react";
import FlowEditor from './components/Flow'
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import TopBar from './components/TopBar';
import './App.css';
import '@xyflow/react/dist/style.css';

// import { shallow } from 'zustand/shallow';
// import { useStore } from './utils/store';

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <TopBar />
            </header>
            <div className="app-body">
                <Sidebar />
                <main className="app-main">
                    <SearchBar />
                    <div className="editor-container">
                        <ReactFlowProvider>
                            <FlowEditor />
                            <Background />
                        </ReactFlowProvider>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;