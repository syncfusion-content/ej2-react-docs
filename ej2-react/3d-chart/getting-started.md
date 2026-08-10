---
layout: post
title: Getting Started with React 3D Chart | Syncfusion
description: Learn how to get started with the Syncfusion React 3D Chart Component. Explore setup, features, examples, and customization options.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React 3D Chart

This section describes the steps to create a simple 3D Chart component and demonstrates its basic usage.

A quick video overview of the React 3D Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=S3SPJYF4Fw8" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

When you install `@syncfusion/ej2-react-charts`, the following dependent packages are installed automatically:

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
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

## Install the Syncfusion® React 3D Chart package

All Syncfusion Essential® JS 2 packages are published to the [npm registry](https://www.npmjs.com/~syncfusionorg).

Install the React 3D Chart package using the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the 3D Chart component to the project

Add the 3D Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs1" %}

> Running `npm run dev` at this point renders an empty 3D Chart area. Continue with the next steps to inject modules, add data, and configure a series so the 3D Chart can render the data.

## Inject Required Modules

3D Chart features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the 3D Chart component. Injecting only the modules you need helps keep the application bundle size smaller.

In this example, the `Tooltip3D` module is injected to enable tooltip functionality for the 3D Chart.

* `Tooltip3D` - Inject this module into the `services` array to enable tooltips for the 3D Chart.

Import the required module from the Chart package and register it through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import { Chart3DComponent, Tooltip3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
  return (
    <Chart3DComponent id="charts">
      <Inject services={[Tooltip3D]} />
    </Chart3DComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

> At this stage, no series are rendered because the 3D Chart component has not yet been configured with a data source.

## Populate 3D Chart with data

This section explains how to plot the following JSON data to the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

export let data: Object[] = [
    { x: 'Tesla', y: 137429 },
    { x: 'Aion', y: 80308 },
    { x: 'Wuling', y: 76418 },
    { x: 'Changan', y: 52849 },
    { x: 'Geely', y: 47234 },
    { x: 'Nio', y: 31041 },
    { x: 'Neta', y: 22449 },
    { x: 'BMW', y: 18733 }
];

{% endhighlight %}
{% endtabs %}

Add [`series`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dseriesmodel) to the 3D Chart using the `<Chart3DSeriesCollectionDirective>` and `<Chart3DSeriesDirective>` components. Map the JSON fields `x` and `y` to the series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dseriesmodel#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3daxismodel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs2" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

Use the following guidance to resolve common issues when getting started with the 3D Chart component.

- **Chart does not render (blank page)**
  - Verify that `index.html` contains a container with `id="root"`, and that `main.tsx`/`main.jsx` calls `ReactDOM.createRoot(document.getElementById("root"))` followed by `root.render(<App />)`.
  - Run `npm install` again to ensure all peer dependencies listed in the [Dependencies](#dependencies) section are installed.

- **Tooltip, legend, or data labels are not visible after enabling them**
  - The corresponding modules must be injected into the `services` array of the `Inject` component as shown in the [Module injection](#module-injection) section. For example, tooltip will not appear without `Tooltip3D`, and data labels will not render without `DataLabel3D`.

- **Series data is not plotted or appears empty**
  - Confirm that the `dataSource` array contains objects with the property names set in `xName` and `yName` (case sensitive).
  - If the `x` field contains string categories, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3daxismodel#valuetype) of `primaryXAxis` to `Category`; otherwise points will not be mapped correctly.

- **Build or dev server fails to start**
  - Confirm that you are using a supported Node.js version (Node 18 or later for the latest Vite templates).
  - Delete `node_modules` and `package-lock.json`, then run `npm install` again.

## See also

Explore the following related topics:

* [Working with Data](./workig-with-data)
* [Chart Dimensions](./dimensions)
* [Category Axis](./category-axis)
* [Numeric Axis](./numeric-axis)
* [DateTime Axis](./datetime-axis)
* [Axis Customization](./axis-customization)
* [Data Labels](./data-label)
* [Legend](./legend)
* [Tooltip](./tool-tip)
* [Appearance](./appearance)
* [Print and Export](./print-export)
* [Accessibility](./accessibility)
* [3D Chart API reference](https://ej2.syncfusion.com/react/documentation/api/chart3d/index-default)
