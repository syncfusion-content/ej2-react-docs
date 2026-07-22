---
layout: post
title: Getting started with React Sankey Chart component | Syncfusion
description: Check out and learn about getting started with the React Sankey Chart component of Syncfusion Essential JS 2 and more details.
control: Getting Started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting started with React Sankey Chart component

This section describes how to integrate the Syncfusion React Sankey Chart component into a new React application. You'll learn about dependencies, installation steps, and how to create your first Sankey Chart visualization.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.
- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

Below is the list of minimum dependencies required to use the Sankey Chart component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base

```

## Installation and Configuration

### Setting Up the React Development Environment

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides:

- Faster development environment with instant hot module replacement (HMR)
- Smaller bundle sizes
- Optimized production builds
- Better performance compared to traditional tools like `create-react-app`

For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](../images/Initial-setup.jpg)

Choose **React** from the framework list, then select either the `TypeScript` or `JavaScript` variant. The next two sections show the exact commands for each variant.

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

After the project is created, start the development server with:

```bash
npm run dev
```

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Sankey Chart Package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Sankey Chart package, run the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

> The package is added to the `dependencies` section of the `package.json` file automatically. The `--save` flag is no longer required for npm 5 and later.

## Add Sankey Chart to the project

Add the Sankey Chart component to your entry file (`src/App.jsx` or `src/App.tsx`):

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/getting-started/initialize-cs1" %}

## Add data to Sankey Chart

Now you can add data to the Sankey Chart control by defining nodes and links. Nodes represent the categories, and links represent the flow between them.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/getting-started/data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/getting-started/data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/getting-started/data-cs1" %}

## Module injection

Sankey Chart component provides support for tooltip and legend interactions. To enable these features, you need to inject the required modules into the component.

- `SankeyTooltip` - Inject this module to enable tooltip feature.
- `SankeyLegend` - Inject this module to enable legend feature.

These modules are tree-shakable; only the ones you inject are added to the bundle. Import the modules from the chart package and inject them into the component as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/getting-started/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/getting-started/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/getting-started/tooltip-cs1" %}

## Run the Development Server

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally in your browser at `http://localhost:5173` by default.

```bash
npm run dev
```

> To stop the development server, press `Ctrl+C` in the terminal.

## Troubleshooting

| Issue | Likely cause | Fix |
| --- | --- | --- |
| `Module not found: Can't resolve '@syncfusion/ej2-react-charts'` | Package not installed or wrong working directory | Run `npm install @syncfusion/ej2-react-charts` inside the project root. |
| Tooltip/legend don't appear | Modules not injected | Ensure `SankeyTooltip` and/or `SankeyLegend` are passed to the `Inject` service as shown in the "Module injection" step. |
| `ERESOLVE` peer-dependency errors | Mismatched React version | Install a supported React version (18 or 19) and rerun `npm install`. |

## See also

- Explore the full SankeyChart [API reference](https://ej2.syncfusion.com/angular/documentation/api/sankey/index-default) for all props, events, and methods.