# Flowjomojo
**Flow-based workflow generation from the comfort of your browser to help you keep your flow, Jo.**

Flowjomojo is a ReactFlow-based web-app that generates ready-made Nextflow/WDL pipelines from drag-and-drop modules. It helps easing the process of writing bioinformatics pipelines, provide configuration settings and visualization of workflows.

## Quick Start
### 1. Searching available modules


### 2. Select / Drag and Drop modules to canvas


### 3. Build connection


### 4. Module editor

## Adding modules to Flowjomojo
### commands location
Currently we are storing our discovered commands from [cmdsaw]() in `public/cmdsaw/samtools_1.22.1` as commands.json files. For testing purpose, it's better to add modules as json elements to this file. In the future, there will be designated locations to retrieve these commands.

### commands JSON format
Our current (subject to changes) commands.json ahere to the following structure:
```
{
    "modules" : {
        "id": string,
        "name": string,
        "label": string,
        "description": string,
        "inputs": [ 
            {
                "name": string,
                "suffix": string,
                "edam": string,
                "optional": boolean
            }
        ],
        "outputs": [
            {
                "name": string,
                "suffix": string,
                "edam": string,
                "optional": boolean
            }
        ],
        "commands": string
    }
}
```


## Features

**Drag-and-drop module nodes:** Easily construct pipelines by dragging modules from the sidebar into the flow editor.

**Node editing:** Edit module names, inputs, and parameters directly in the sidebar.

**Visual connections:** Connect modules with intuitive lines to define data flow.

**Export pipelines:** Generate Nextflow or WDL scripts from your designed workflow.

**Responsive interface:** Works entirely in the browser without backend setup.