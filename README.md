# Flowjomojo
**Flow-based workflow generation from the comfort of your browser to help you keep your flow, Jo.**

Flowjomojo is a ReactFlow-based web-app that generates ready-made Nextflow/WDL pipelines from drag-and-drop modules. It helps easing the process of writing bioinformatics pipelines, provide configuration settings and visualization of workflows.


## Quick Start
### 1. Searching available modules
Modules can be searched using the main search bar.

<p align="center">
  <img src="/src/assets/step1.png" alt="step 1" width="400" />
</p>

### 2. Select / Drag and Drop modules to canvas
Then we can select / unselect modules to be used. Selected modules will appear under modules library section.
They can then be dragged and dropped to the main canvas.

<p align="center">
  <img src="/src/assets/step2.png" alt="step 2" width="400" />
</p>

### 3. Build connection
By default, the Top Handle of a Module Node is the target, and the Bottom Handle is the source. Connect source to target to create a connection between modules.

<p align="center">
  <img src="/src/assets/step3.png" alt="step 3" width="400" />
</p>

### 4. Module editor
Module's attributes can be changed in the Modules & Dependencies section.

<p align="center">
  <img src="/src/assets/step4.png" alt="step 4" width="400" />
</p>


## Adding modules to Flowjomojo
### commands location
Currently we are storing our discovered commands from [cmdsaw](https://github.com/stjude-biohackathon/KIDS25-Team8_cmdsaw) in `public/cmdsaw/samtools_1.22.1` as commands.json files. For testing purpose, it's better to add modules as elements to this file. In the future, there will be designated locations to retrieve these commands in the future.

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


**Under development for the St. Jude Biohackathon 2025**