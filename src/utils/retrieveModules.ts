import { type ModuleNodeType } from '../components/nodes/Module';

type CommandsFile = {
    modules: {
        id: string,
        name: string,
        inputs: Record<string, any>,
        outputs?: Record<string, any>
    }[];
};

export async function retrieveModules(): Promise<ModuleNodeType[]> {
    const res = await fetch("../../public/cmdsaw/samtools_1.22.1/commands.json");
    if (!res.ok) throw new Error("Failed to fetch commands.json");

    const parsed: CommandsFile = await res.json()

    return parsed.modules.map(module => ({
        id: module.id,
        type: "module",
        position: { x: 0, y: 0},
        data: {
            id: module.id,
            name: module.name,
            selected: false,
            inputs: module.inputs,
            outputs: module.outputs ?? {},
        },
    }));
}