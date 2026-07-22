---
layout: post
title: Getting started with React 3D Chart component | Syncfusion
description: Check out and learn about the Getting started with the React 3D Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React 3D Chart component

This section describes the steps to create a simple 3D Chart component and demonstrates its basic usage.

A quick video overview of the React 3D Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=S3SPJYF4Fw8" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

When you install `@syncfusion/ej2-react-charts`, the following peer dependencies are installed automatically:

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data — utilities for working with data sources.
    |-- @syncfusion/ej2-react-base — base classes shared by all Syncfusion React components.
    |-- @syncfusion/ej2-pdf-export — PDF export support.
    |-- @syncfusion/ej2-file-utils — file handling for export features.
    |-- @syncfusion/ej2-compression — compression utilities used by exports.
    |-- @syncfusion/ej2-svg-base — SVG rendering base used by chart visuals.
```

## Installation and configuration

### Step 1: Create a React application with Vite

Use the [Vite CLI](https://vitejs.dev/) to create a new React application. Vite provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

Run the following command to scaffold a new project. When prompted, pick the framework and variant that match your preferred language:

* For **TypeScript**: select `React` then `TypeScript`.
* For **JavaScript**: select `React` then `JavaScript`.

```bash
npm create vite@latest my-app
```

You can also skip the interactive prompts by passing the template flag directly:

{% tabs %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

{% endhighlight %}
{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest my-app -- --template react
cd my-app
npm install

{% endhighlight %}
{% endtabs %}

For reference, the interactive prompt looks like this:

![Vite CLI framework and variant selection prompt](./images/Initial-setup.jpg)

### Step 2: Install the Syncfusion® React 3D Chart package

All Syncfusion® Essential JS 2 packages are published to the [npm registry](https://www.npmjs.com/~syncfusionorg). Install the React 3D Chart package from the project folder:

```bash
npm install @syncfusion/ej2-react-charts
```

> Installing `@syncfusion/ej2-react-charts` automatically pulls in the peer dependencies listed in the [Dependencies](#dependencies) section above. The chart component does not require any theme stylesheet import to render.

### Step 3: Add the 3D Chart component

`Chart3DComponent` is the root component for the 3D Chart. Open `src/App.tsx` (or `src/App.jsx` for the JavaScript template) and replace its contents with the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<Chart3DComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<Chart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The below example shows a basic 3D Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs1" %}

## Module injection

3D Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the 3D Chart component. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find relevant feature service name and description as follows.

* `ColumnSeries3D` - Inject this module in to `services` to use column series.
* `Legend3D` - Inject this module in to `services` to use legend feature.
* `Tooltip3D` - Inject this module in to `services` to use tooltip feature.
* `DataLabel3D` - Inject this module in to `services` to use datalabel feature.
* `Category3D`  - Inject this module in to `services` to use category feature.

Import the above-mentioned modules from the chart package and inject them into the `services` section of the 3D Chart component as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { Chart3DComponent, ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";

function App() {
  return <Chart3DComponent id='charts'>
    <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D]}/>
  </Chart3DComponent>;
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { Chart3DComponent, ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
function App() {
    return <Chart3DComponent id='charts'>
    <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D]}/>
  </Chart3DComponent>;
}
export default App;

{% endhighlight %}
{% endtabs %}

## Populate 3D Chart with data

This section explains how to plot the following JSON data to the 3D Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

export let data = [
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

- [Working with Data](./workig-with-data)
- [Chart Dimensions](./dimensions)
- [Category Axis](./category-axis)
- [Numeric Axis](./numeric-axis)
- [DateTime Axis](./datetime-axis)
- [Axis Customization](./axis-customization)
- [Data Labels](./data-label)
- [Legend](./legend)
- [Tooltip](./tool-tip)
- [Appearance](./appearance)
- [Print and Export](./print-export)
- [Accessibility](./accessibility)
