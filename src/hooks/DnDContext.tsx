import { createContext, useContext, useState } from "react";

export type DragModule = {
    name: string,
    label?: string,
    selected?: boolean
    inputs: Record<string, any>;
    outputs?: Record<string, any>;
    commands: string;
} | null;

type DnDContextType = {
    dragModule: DragModule;
    setDragModule: (mod: DragModule) => void;
    sidebarModules: DragModule[];
    setSidebarModules: React.Dispatch<React.SetStateAction<DragModule[]>>;
};

const DnDContext = createContext<DnDContextType | undefined>(undefined);

export const DnDProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dragModule, setDragModule] = useState<DragModule>(null);
    const [sidebarModules, setSidebarModules] = useState<DragModule[]>([]);
  
    return (
      <DnDContext.Provider value={{ dragModule, setDragModule, sidebarModules, setSidebarModules }}>
        {children}
      </DnDContext.Provider>
    );
};

export const useDnD = () => {
    const ctx = useContext(DnDContext);
    if (!ctx) throw new Error("useDnD must be used inside DnDProvider");
    return ctx;
}