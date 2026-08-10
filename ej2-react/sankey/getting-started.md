---
layout: post
title: Getting Started with React Sankey Chart | Syncfusion
description: Learn how to get started with the Syncfusion React Sankey Chart Component. Explore setup, features, examples, and customization options.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting Started with React Sankey Chart

This section describes how to integrate the Syncfusion React Sankey Chart component into a new React application. You'll learn about dependencies, installation steps, and how to create your first Sankey Chart visualization.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

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

## Set up a development environment

To set up a React application quickly, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> As an alternative, you can create a React application using [`create-react-app`](https://github.com/facebook/create-react-app). For detailed instructions, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run one of the following commands based on your preferred language:

**React with JavaScript**

```
npm create vite@latest my-app -- --template react
```

**React with TypeScript**

```
npm create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```
cd my-app
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Sankey Chart Package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Sankey Chart package, run the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the Sankey Chart to the project

Open the application entry file (`src/App.jsx` or `src/App.tsx`) and the Sankey Chart component using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/getting-started/initialize-cs1" %}

## Inject Required Modules

Sankey Chart component provides support for tooltip and legend interactions. To enable these features, you need to inject the required modules into the component.

- `SankeyTooltip` - Inject this module in to `services` to use the tooltip feature.
- `SankeyLegend` - Inject this module in to `services` to use the legend feature.

Import the required module from the Chart package and register it through the `Inject` component as shown below.

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

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

- **`Module not found: Can't resolve '@syncfusion/ej2-react-charts'`** — Package not installed or wrong working directory. Run `npm install @syncfusion/ej2-react-charts` inside the project root.
- **Tooltip/legend don't appear** — Modules not injected. Ensure `SankeyTooltip` and/or `SankeyLegend` are passed to the `Inject` service as shown in the "Module injection" step.
- **`ERESOLVE` peer-dependency errors** — Mismatched React version. Install a supported React version (18 or 19) and rerun `npm install`.

## See also

* [Labels](./labels)
* [Legend](./legend)
* [Tooltip](./tool-tip)
* [Sankey Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/sankey/index-default)