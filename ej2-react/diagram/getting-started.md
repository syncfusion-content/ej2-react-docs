---
layout: post
title: Getting Started with React Diagram Component | Syncfusion®
description: Learn how to get started with the Syncfusion® React Diagram component, explore its elements, and create a simple diagram.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Diagram Component

This section explains how to create a React application from scratch and build a simple diagram using the Syncfusion® Diagram component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/mcp-server/ai-coding-assistant/getting-started)

## Prerequisites

Ensure that the system meets the requirements for Syncfusion<sup style="font-size:70%">®</sup> React UI components:

- [System requirements](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Installation and configuration

This section explains how to create and run a React application using Vite.

### Step 1: Open terminal

Open a terminal (Command Prompt, PowerShell, or Terminal) on the system.

### Step 2: Create a React application

Run the following command:

```bash
npm create vite@latest
```

### Step 3: Configure project settings

Follow the prompts shown in the terminal.

**Enter the Project Name**

```bash
? Project name: » react-diagram-app
```

**Select the Framework**

Use the arrow keys and select **React**:

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
  Vanilla
  Vue
> React
  Preact
  Lit
  Svelte
  Solid
  Qwik
  Angular
  Others
```
This configures the project as a React application.

**Select the Variant**

Select **TypeScript**:

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> TypeScript
  TypeScript + React Compiler
  TypeScript + SWC 
  JavaScript  
  JavaScript + React Compiler
  JavaScript + SWC
  React Router v7
  TanStack Router
  RedwoodSDK
  RSC
  Vike
```

This enables TypeScript support for better code quality and type checking.

When prompted:

```bash
? Install with npm and start now?
  > Yes /   No
```

Select **No**.

### Step 4: Install dependencies

Run the following commands:

```bash
cd react-diagram-app
```

Moves into the project directory.

```bash
npm install
```

Installs all required packages for the application.


### Step 5: Install Syncfusion® package

Run the following command:

```bash
npm install @syncfusion/ej2-react-diagrams --save
```

This installs the Syncfusion Diagram component.

### Step 6: Add stylesheet

Add the following CSS to the **src/App.css** file:

```css
@import "../node_modules/@syncfusion/ej2-react-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css"; 
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
```

These styles are required for rendering the Diagram component.

Import the stylesheet in the **src/App.tsx** file:

```ts
import './App.css';
```

## Create a simple diagram

This section explains how to add the Diagram component to the application, create an empty diagram, and build a simple flowchart using nodes and connectors.

### Step 7: Import required modules

Add the following import in the **src/App.tsx** file:

```ts
import { DiagramComponent, type NodeModel, type ConnectorModel } from '@syncfusion/ej2-react-diagrams';
```

These modules are used to create diagrams, nodes, and connectors.

### Step 8: Create an empty diagram

Add the following code in the **src/App.tsx** file below the imports:

```ts
function App() {
  return (
    <div className="App">
        <DiagramComponent 
        id="diagram"
        width={'100%'}
        height={'500px'}></DiagramComponent>
    </div>
  );
}
export default App;
```

This renders an empty diagram in the application.

### Step 9: Define nodes

Add the following code above the `App` function:

```ts
const nodes: NodeModel[] = [
  {
    id: 'Start',
    offsetX: 300,
    offsetY: 100,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Start' }]
  },
  {
    id: 'Process',
    offsetX: 300,
    offsetY: 220,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Process' },
    annotations: [{ content: 'Process' }]
  },
  {
    id: 'End',
    offsetX: 300,
    offsetY: 340,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'End' }]
  }
];

```
Nodes represent elements in the diagram.

### Step 10: Define connectors

Add the following:

```ts
const connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Process',
    type: 'Orthogonal'
  },
  {
    id: 'connector2',
    sourceID: 'Process',
    targetID: 'End',
    type: 'Orthogonal'
  }
];

```
Connectors are used to link nodes together.

### Step 11: Bind nodes and connectors

Update the DiagramComponent:

```ts
function App() {
  return (
    <div className="App">
        <DiagramComponent 
        id="diagram"
        width={'100%'}
        height={'500px'}
        nodes={nodes}
        connectors={connectors}></DiagramComponent>
    </div>
  );
}
export default App;
```
This displays the complete diagram.

### Final code

Copy and paste the following code into the **src/App.tsx** file and run the application.

`[src/App.tsx]`

```ts
import './App.css';
import { DiagramComponent, type NodeModel, type ConnectorModel } from '@syncfusion/ej2-react-diagrams';

const nodes: NodeModel[] = [
  {
    id: 'Start',
    offsetX: 300,
    offsetY: 100,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Start' }]
  },
  {
    id: 'Process',
    offsetX: 300,
    offsetY: 220,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Process' },
    annotations: [{ content: 'Process' }]
  },
  {
    id: 'End',
    offsetX: 300,
    offsetY: 340,
    width: 200,
    height: 80,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'End' }]
  }
];

const connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Process',
    type: 'Orthogonal'
  },
  {
    id: 'connector2',
    sourceID: 'Process',
    targetID: 'End',
    type: 'Orthogonal'
  }
];

function App() {
  return (
    <div className="App">
        <DiagramComponent 
        id="diagram"
        width={'100%'}
        height={'500px'}
        nodes={nodes}
        connectors={connectors}></DiagramComponent>
    </div>
  );
}
export default App;

```

### Step 12: Run the application

Run:

```bash
npm run dev
```

### Step 13: View output

Open the URL shown in the terminal:

```bash
http://localhost:5173/
```

The output will appear as follows:

 ![Getting started](./images/Getting-started.png)