import { type ModuleNodeType } from '../components/nodes/Module';

type CommandsFile = {
    modules: {
        id: string,
        name: string,
        label?: string, 
        description?: string,
        inputs: Record<string, any>,
        outputs?: Record<string, any>,
        commands: string,
    }[];
};

export async function retrieveModules(): Promise<ModuleNodeType[]> {
    const res = await fetch(import.meta.env.BASE_URL + "/cmdsaw/samtools_1.22.1/commands.json");
    if (!res.ok) throw new Error("Failed to fetch commands.json");

    const parsed: CommandsFile = await res.json()

    return parsed.modules.map(module => ({
        id: module.id,
        type: "module",
        position: { x: 0, y: 0},
        data: {
            name: module.name,
            label: module.label,
            selected: false,
            description: module.description,
            inputs: module.inputs,
            outputs: module.outputs ?? {},
            commands: module.commands
        },
    }));
}