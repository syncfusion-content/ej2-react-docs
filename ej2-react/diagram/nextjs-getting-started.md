---
layout: post
title: React Diagram getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Getting Started with React Diagram Component in Next.js

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Diagram component.

## What is Next.js?

[Next.js](https://nextjs.org) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

| Requirement | Version |
| --- | --- |
| React | Matches the React version bundled with the installed Next.js release |
| Node.js | 18.18.0 or later |
| Operating system | Windows, macOS, or Linux |

N> For the full React-version compatibility matrix with the Syncfusion® Diagram package, refer to the [React supported versions](./getting-started.md#react-supported-versions) section in the main getting-started guide.

## Before You Begin

This guide uses the Next.js App Router with TypeScript and a `src` directory.

The main files used in this guide are:

* `src/app/page.tsx` — Defines the page that renders the Diagram component (Next.js App Router convention).
* `src/app/globals.css` — Contains the Syncfusion® theme reference.

N> The Diagram component depends on browser APIs. Therefore, the page that renders it must be a Client Component and include the `'use client';` directive.

## Step 1: Create a Next.js application

Create a new Next.js application using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest my-diagram-app

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app my-diagram-app

{% endhighlight %}
{% endtabs %}

Choose the required configuration. For this guide, use the following options:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... No / `Yes`
√ Which linter would you like to use? » ESLint
√ Would you like to use React Compiler? ... `No` / Yes
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like your code inside a `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the import alias (`@/*` by default)? ... `No` / Yes 
√ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? ... `No` / Yes

{% endhighlight %}
{% endtabs %}

Navigate to the project folder:

```
cd my-diagram-app
```

## Step 2: Install the Syncfusion® React Diagram package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Diagram package using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-diagrams

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-diagrams

{% endhighlight %}
{% endtabs %}

N> Installing `@syncfusion/ej2-react-diagrams` automatically installs the required dependency packages.

N> A Syncfusion® license key is not required for local development. However, a valid Syncfusion® license key must be registered before deploying the application to production. For details, see [Registering a Syncfusion® license key](https://ej2.syncfusion.com/react/documentation/licensing/overview).

## Step 3: Add the required styles

The Diagram component needs Syncfusion® theme styles to display correctly. Syncfusion® theme packages include ready-to-use styles for supported components.

Install the Tailwind 3 theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

Add the following import to the `src/app/globals.css` file:

```
@import '../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/diagram/index.css';
```

For the list of available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

N> Syncfusion® provides multiple built-in themes. If the application uses a different theme, replace the `@syncfusion/ej2-tailwind3-theme/styles/diagram/index.css` reference with the corresponding theme path, such as `@syncfusion/ej2-material3-theme/styles/diagram/index.css`.

N> The default App Router layout imports `globals.css`. If the import was removed, add `import './globals.css';` to `src/app/layout.tsx`.

N> If you created the project without the `--src-dir` option, `globals.css` lives at `app/globals.css` and the relative path becomes `../node_modules/@syncfusion/ej2-tailwind3-theme/...` (one level, not two).

## Step 4: Add the Diagram component

Import `DiagramComponent` from `@syncfusion/ej2-react-diagrams` and add it to the page.

Update the `src/app/page.tsx` file as follows:

```
'use client';

import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';

export default function Home() {
  return (
    <DiagramComponent
      id="diagram"
      width="100%"
      height="580px"
    />
  );
}
```

At this stage, the Diagram component renders an empty canvas. The next step replaces this code with a complete flowchart example.

N> The Diagram component must have a valid height. If the height is not set, the Diagram canvas may not be visible.

## Step 5: Create your first Diagram with nodes and connectors

This section explains how to create a simple flowchart by adding nodes, customizing their appearance, and connecting them using connectors.

The following example creates a flowchart with four nodes: **Start**, **Process**, **Decision**, and **End**. It also applies common node and connector settings using the `getNodeDefaults` and `getConnectorDefaults` callback bindings.

Replace the entire contents of `src/app/page.tsx` with the following code:

```
'use client';

import {
  DiagramComponent,
  type ConnectorModel,
  type FlowShapeModel,
  type NodeModel
} from '@syncfusion/ej2-react-diagrams';

const terminator: FlowShapeModel = {
  type: 'Flow',
  shape: 'Terminator'
};

const process: FlowShapeModel = {
  type: 'Flow',
  shape: 'Process'
};

const decision: FlowShapeModel = {
  type: 'Flow',
  shape: 'Decision'
};

const nodes: NodeModel[] = [
  {
    id: 'node1',
    offsetX: 300,
    offsetY: 100,
    shape: terminator,
    annotations: [{ content: 'Start' }]
  },
  {
    id: 'node2',
    offsetX: 300,
    offsetY: 200,
    shape: process,
    annotations: [{ content: 'Process' }]
  },
  {
    id: 'node3',
    offsetX: 300,
    offsetY: 300,
    shape: decision,
    annotations: [{ content: 'Decision?' }]
  },
  {
    id: 'node4',
    offsetX: 300,
    offsetY: 400,
    shape: terminator,
    annotations: [{ content: 'End' }]
  }
];

const connectors: ConnectorModel[] = [
  { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
  { id: 'connector2', sourceID: 'node2', targetID: 'node3' },
  { id: 'connector3', sourceID: 'node3', targetID: 'node4' }
];

function nodeDefaults(node: NodeModel): NodeModel {
  node.width = 140;
  node.height = 50;
  node.style = {
    fill: '#E8F4FF',
    strokeColor: '#357BD2'
  };
  return node;
}

function connectorDefaults(connector: ConnectorModel): ConnectorModel {
  connector.type = 'Orthogonal';
  connector.targetDecorator = {
    shape: 'Arrow',
    width: 10,
    height: 10
  };
  return connector;
}

export default function Home() {
  return (
    <DiagramComponent
      id="diagram"
      width="100%"
      height="580px"
      nodes={nodes}
      connectors={connectors}
      getNodeDefaults={nodeDefaults}
      getConnectorDefaults={connectorDefaults}
    />
  );
}
```

In this example:

* [`offsetX`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodemodel#offsetx) and [`offsetY`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodemodel#offsety) define the position of each node.
* [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodemodel#shape) defines the node shape configuration, and [`FlowShapeModel.shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/flowshapemodel#shape) specifies flowchart shapes such as `Terminator`, `Process`, or `Decision`.
* The [`annotations`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationmodel) property adds text inside each node using the [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationmodel#content) field.
* [`sourceID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectormodel#sourceid) and [`targetID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectormodel#targetid) define the connection between nodes.
* [`getNodeDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#getnodedefaults) applies common width, height, fill color, and stroke color to all nodes.
* [`getConnectorDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#getconnectordefaults) applies common connector settings, such as orthogonal routing and target arrows.

## Step 6: Run the application

Run the application using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn dev

{% endhighlight %}
{% endtabs %}

Open the generated local URL, typically `http://localhost:3000`, in the browser. The application displays the diagram as shown below:

![Rendered flowchart with four nodes connected vertically by arrows](./images/Getting-started.png)

N> To stop the development server, press `Ctrl + C` in the terminal where it is running.

N> To create a production build, run `npm run build` (or `yarn build`). The generated output is placed in the `.next` folder.

## Next steps

To explore the Diagram component in more depth, refer to the following topics:

* [Nodes](https://ej2.syncfusion.com/react/documentation/diagram/nodes)
* [Connectors](https://ej2.syncfusion.com/react/documentation/diagram/connectors)
* [Annotations](https://ej2.syncfusion.com/react/documentation/diagram/labels)