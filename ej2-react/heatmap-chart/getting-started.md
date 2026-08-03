---
layout: post
title: Getting started with React HeatMap chart component | Syncfusion
description: Check out and learn about getting started with the React HeatMap chart component of Syncfusion Essential JS 2 and more details.
control: HeatMap
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React HeatMap Chart Component

This section explains the steps required to create a HeatMap and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component using the following video.

{% youtube "https://www.youtube.com/watch?v=F5H2BMOl_6A" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React HeatMap packages

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React HeatMap package using the following command:

```bash
npm install @syncfusion/ej2-react-heatmap
```

## Add the HeatMap Chart Component to the Project

Add the HeatMap Chart component to `src/App.tsx` using the following code to create a basic HeatMap Chart component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs1" %}

## Inject Required Modules

HeatMap features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the HeatMap component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `Legend` and `Tooltip` modules are injected to enable legend and tooltip functionality in the HeatMap Chart.

* `Legend` - Inject this module into the `services` array to enable the legend feature.
* `Tooltip` - Inject this module into the `services` array to enable tooltips.

Import the required modules from the HeatMap package and register them through the `Inject` component as shown below:


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

> In React 18 and later, `createRoot` is provided by `react-dom/client`. If you are using React 17 or earlier, use `ReactDOM.render(<App />, document.getElementById('container'))` instead.

## Bind Data to the HeatMap Component

This section shows how to populate the heat map with a two-dimensional array of values using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/heatmap/index-default#datasource) property:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs2" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

- **`createRoot is not a function`** — Likely cause: `createRoot` imported from `react-dom` instead of `react-dom/client`. Fix: Import `createRoot` from `react-dom/client` (React 18+).
- **`Tooltip`/`Legend` does not show** — Likely cause: The corresponding module was not injected. Fix: Add the module to `<Inject services={...} />`.

## See also

* [HeatMap appearance](appearance)
* [HeatMap axis](axis)
* [HeatMap events](events)
* [HeatMap legend](legend)
* [HeatMap palette](palette)
* [HeatMap tooltip](tooltip)
* [HeatMap API Reference](https://ej2.syncfusion.com/react/documentation/api/heatmap)
 