---
layout: post
title: Getting Started with React 3D Circular Chart Component | Syncfusion
description: Learn how to get started with the Syncfusion React 3D Circular Chart control. Explore setup, features, examples, and customization options.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React 3D Circular Chart

This section describes the steps to create a simple 3D Circular Chart and demonstrates the basic usage of the 3D Circular Chart component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

When you install `@syncfusion/ej2-react-charts`, the following peer dependencies are installed automatically:

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

## Install the Syncfusion® React 3D Circular Chart package

All Syncfusion® Essential JS 2 packages are published to the [npm registry](https://www.npmjs.com/~syncfusionorg). Install the React 3D Circular Chart package from the project folder:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the 3D Circular Chart to the project

Open the application entry file (`src/App.jsx` or `src/App.tsx`) and add the 3D Circular Chart component using the following code.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}

import { CircularChart3DComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

## Inject Required Modules

3D Circular Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in the `services` of the `Inject` component. The following services are commonly used to extend the 3D Circular Chart's basic functionality.

* `PieSeries3D` - Inject this module in to `services` to use the pie series.
* `CircularChartLegend3D` - Inject this module in to `services` to use the legend feature.
* `CircularChartTooltip3D` - Inject this module in to `services` to use the tooltip feature.
* `CircularChartDataLabel3D` - Inject this module in to `services` to use the data label feature.

Import the required module from the Chart package and register it through the `Inject` component as shown below.

```javascript
import { CircularChart3DComponent, PieSeries3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartDataLabel3D, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (
    <CircularChart3DComponent id="charts">
      <Inject services={[ PieSeries3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartDataLabel3D,]} />
    </CircularChart3DComponent>
  );
}

export default App;
```

## Add data to 3D Circular Chart

By default, the pie series will be rendered when assigning the JSON data to the series using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#yname) properties of the series.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/circular-chart/code-path/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/circular-chart/code-path/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/preview-sample/getting-started" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

Use the following guidance to resolve common issues when getting started with the 3D Circular Chart component.

- **3D Circular Chart does not render (blank page)**
  - Verify that `index.html` contains a container with `id="root"`, and that `main.tsx`/`main.jsx` calls `ReactDOM.createRoot(document.getElementById("root"))` followed by `root.render(<App />)`.
  - Run `npm install` again to ensure all peer dependencies listed in the [Dependencies](#dependencies) section are installed.

- **Series is not rendered or appears empty**
  - Confirm that the `dataSource` array contains objects with property names matching `xName` and `yName` (case sensitive).
  - Confirm that the `PieSeries3D` module is included in the `services` array of the `Inject` component as shown in the [Module injection](#inject-required-modules) section.

- **Tooltip, legend, or data labels are not visible after enabling them**
  - The corresponding modules must be injected into the `services` array of the `Inject` component. For example, tooltip will not appear without `Tooltip3D`, and data labels will not render without `DataLabel3D`.

- **TypeScript errors on import**
  - Ensure `@types/react` and `@types/react-dom` are installed. The Syncfusion package ships with its own types, so no additional type packages are required.

- **`Module not found: Can't resolve '@syncfusion/ej2-react-charts'`**
  - The package was not installed in the current project. Run `npm install @syncfusion/ej2-react-charts` from the project root.

- **`ERESOLVE` peer-dependency errors during installation**
  - A React or Node.js version mismatch is the most common cause. Install a supported React version (18 or 19) and Node.js 18 or later, then delete `node_modules` and `package-lock.json` and run `npm install` again.

- **Build or dev server fails to start**
  - Confirm that you are using a supported Node.js version (Node 18 or later for the latest Vite templates).
  - Delete `node_modules` and `package-lock.json`, then run `npm install` again.

- **3D effect looks flat or rotation is disabled**
  - The 3D rotation, depth, tilt, and perspective are configured through the [`tilt`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3DModel), [`depth`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3DModel), and related properties on the `CircularChart3DComponent`. Ensure these are set as expected for a true 3D appearance.

## See also

Explore the following related topics:

* [Pie and Donut](./pie-donut-chart)
* [Data Label](./data-label)
* [Empty Points](./empty-points)
* [Legend](./legend)
* [Tooltip](./tooltip)
* [Title and Subtitle](./title-and-subtitle)
* [Print and Export](./print-and-export)
* [3D Circular Chart API reference](https://ej2.syncfusion.com/react/documentation/api/circularchart3d)
