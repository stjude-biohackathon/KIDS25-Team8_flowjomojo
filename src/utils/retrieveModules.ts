import { type ModuleNodeType } from '../components/nodes/Module';

type CommandsFile = {
    modules: {
        id: string,
        name: string,
        label?: string, 
        inputs: Record<string, any>,
        outputs?: Record<string, any>,
        commands: string,
    }[];
};

export async function retrieveModules(): Promise<ModuleNodeType[]> {
    const res = await fetch("/cmdsaw/samtools_1.22.1/commands.json");
    if (!res.ok) throw new Error("Failed to fetch commands.json");

    const parsed: CommandsFile = await res.json()

    // console.log(parsed.modules)

    return parsed.modules.map(module => ({
        id: module.id,
        types: "moduleNode",
        position: { x: 0, y: 0},
        data: {
            id: module.id,
            name: module.name,
            label: module.label,
            selected: false,
            inputs: module.inputs,
            outputs: module.outputs ?? {},
            commands: module.commands
        },
    }));
}