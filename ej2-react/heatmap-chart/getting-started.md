---
layout: post
title: Getting started with React HeatMap chart component | Syncfusion
description: Check out and learn about getting started with the React HeatMap chart component of Syncfusion Essential JS 2 and more details.
control: HeatMap
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React HeatMap chart component

This section explains the steps required to create a HeatMap and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component using the following video.

{% youtube "https://www.youtube.com/watch?v=F5H2BMOl_6A" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

The following list shows the package dependencies for the HeatMap component.

```ts
|-- @syncfusion/ej2-react-heatmap
     |-- @syncfusion/ej2-heatmap
     |-- @syncfusion/ej2-base
     |-- @syncfusion/ej2-data
     |-- @syncfusion/ej2-svg-base
     |-- @syncfusion/ej2-react-base
```

## Installation and configuration

To easily set up a React application, use `create-vite`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new Vite React application, run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application in TypeScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

To set up a React application in JavaScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install the HeatMap package, run the following command in your project directory:

```bash
npm install @syncfusion/ej2-react-heatmap
```

Installing `@syncfusion/ej2-react-heatmap` automatically pulls in all required transitive dependencies.

## Adding HeatMap to the project

Add the HeatMap component to the application. For a basic example, add the component in `src/App.tsx` (or `src/App.jsx`) using the following code, then mount it into the `#container` element with `createRoot`:

```ts
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HeatMapComponent } from '@syncfusion/ej2-react-heatmap';

export function App() {
  return (<HeatMapComponent id='heatmap'></HeatMapComponent>);
}

export default App;

const root = createRoot(document.getElementById('container')!);
root.render(<App />);
```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The following example shows a complete basic HeatMap. It includes the data source used in the later sections of this guide:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs1" %}

## Module injection

HeatMap features are segregated into individual feature-wise modules. To use a feature, inject its service into the HeatMap component using the `<Inject>` child element with the `services` prop. The following modules are used in the examples in this guide:

- **Legend** - Provides the legend feature by injecting it.
- **Tooltip** - Provides the tooltip feature by injecting it.
 
> **Note:** Injecting a module is required only for the features you use. For example, if you do not inject the `Tooltip` module, the `showTooltip` property will have no effect.

Import the modules from the HeatMap package and inject them as shown below. Note that `createRoot` is imported from `react-dom/client` (React 18+):

```ts
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HeatMapComponent, Inject, Legend, Tooltip } from '@syncfusion/ej2-react-heatmap';

export function App() {
  return (
    <HeatMapComponent id='heatmap'>
      <Inject services={[Legend, Tooltip]} />
    </HeatMapComponent>
  );
}

export default App;

const root = createRoot(document.getElementById('container')!);
root.render(<App />);
```

> **Note:** In React 18 and later, `createRoot` is provided by `react-dom/client`. If you are using React 17 or earlier, use `ReactDOM.render(<App />, document.getElementById('container'))` instead.

For a complete list of injectable HeatMap modules, see the [HeatMap API reference](https://ej2.syncfusion.com/react/documentation/api/heatmap).

## Populate heat map with data

This section shows how to populate the heat map with a two-dimensional array of values using the `dataSource` property:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs2" %}

## Troubleshooting

- **`createRoot is not a function`** — Likely cause: `createRoot` imported from `react-dom` instead of `react-dom/client`. Fix: Import `createRoot` from `react-dom/client` (React 18+).
- **`Tooltip`/`Legend` does not show** — Likely cause: The corresponding module was not injected. Fix: Add the module to `<Inject services={...} />`.

## See also

* [HeatMap appearance](appearance.md)
* [HeatMap axis](axis.md)
* [HeatMap events](events.md)
* [HeatMap legend](legend.md)
* [HeatMap palette](palette.md)
* [HeatMap tooltip](tooltip.md)
* [HeatMap API reference](https://ej2.syncfusion.com/react/documentation/api/heatmap)
 