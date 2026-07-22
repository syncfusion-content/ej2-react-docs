---
layout: post
title: Getting started with React 3D Circular Chart component | Syncfusion
description: Check out and learn about getting started with the React 3D Circular Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React 3D Circular Chart component

This section describes the steps to create a simple 3D Circular Chart and demonstrates the basic usage of the 3D Circular Chart component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Node.js 18 or later.
- A modern code editor such as Visual Studio Code.

## Dependencies

When you install `@syncfusion/ej2-react-charts`, the following peer dependencies are installed automatically:
```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data — utilities for working with data sources.
    |-- @syncfusion/ej2-react-base — base classes shared by all Syncfusion React components.
    |-- @syncfusion/ej2-pdf-export — PDF export support.
    |-- @syncfusion/ej2-file-utils — file handling used by export features.
    |-- @syncfusion/ej2-compression — compression utilities used by exports.
    |-- @syncfusion/ej2-svg-base — SVG rendering base used by chart visuals
```

## Installation and configuration

### Step 1: Create a React application with Vite

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command. The command will prompt you for a few settings, such as selecting a framework and a variant.

```bash
npm create vite@latest my-app
```

For reference, the interactive prompt looks like this:

![Vite CLI framework and variant selection prompt](./images/Initial-setup.jpg)

You can also skip the interactive prompts by passing the template flag directly. Pick the template that matches your preferred language and run the matching block:

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

### Step 2: Install the Syncfusion® React 3D Circular Chart package

All Syncfusion® Essential JS 2 packages are published to the [npm registry](https://www.npmjs.com/~syncfusionorg). Install the React 3D Circular Chart package from the project folder:

```bash
npm install @syncfusion/ej2-react-charts
```

> Installing `@syncfusion/ej2-react-charts` automatically pulls in the peer dependencies listed in the [Dependencies](#dependencies) section above. The 3D Circular Chart does not require any theme stylesheet import to render.

### Step 3: Add the 3D Circular Chart to the project

`CircularChart3DComponent` is the root component for the 3D Circular Chart. Open `src/App.tsx` (or `src/App.jsx` for the JavaScript template) and replace its contents with the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { CircularChart3DComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { CircularChart3DComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Then, update `src/main.tsx` (or `src/main.jsx`) to mount the App component using React 18's [`createRoot`](https://react.dev/reference/react-dom/client/createRoot) API.

```ts
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## Module injection

3D Circular Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in the `services` of the `Inject` component. The following services are commonly used to extend the 3D Circular Chart's basic functionality.

* `PieSeries3D` - Inject this module in to `services` to use the pie series.
* `Legend3D` - Inject this module in to `services` to use the legend feature.
* `Tooltip3D` - Inject this module in to `services` to use the tooltip feature.
* `DataLabel3D` - Inject this module in to `services` to use the data label feature.

Import the modules from the chart package and inject them into the `services` section of the 3D Circular Chart component as follows.

```javascript
import { CircularChart3DComponent, PieSeries3D, Legend3D, Tooltip3D, DataLabel3D, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (
    <CircularChart3DComponent id="charts">
      <Inject services={[PieSeries3D, Legend3D, Tooltip3D, DataLabel3D]} />
    </CircularChart3DComponent>
  );
}

export default App;
```

## Add data (pie series)

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

## Troubleshooting

Use the following guidance to resolve common issues when getting started with the 3D Circular Chart component.

- **3D Circular Chart does not render (blank page)**
  - Verify that `index.html` contains a container with `id="root"`, and that `main.tsx`/`main.jsx` calls `ReactDOM.createRoot(document.getElementById("root"))` followed by `root.render(<App />)`.
  - Run `npm install` again to ensure all peer dependencies listed in the [Dependencies](#dependencies) section are installed.

- **Series is not rendered or appears empty**
  - Confirm that the `dataSource` array contains objects with property names matching `xName` and `yName` (case sensitive).
  - Confirm that the `PieSeries3D` module is included in the `services` array of the `Inject` component as shown in the [Module injection](#module-injection) section.

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

- [Pie and Donut](./pie-donut-chart)
- [Data Label](./data-label)
- [Empty Points](./empty-points)
- [Legend](./legend)
- [Tooltip](./tooltip)
- [Title and Subtitle](./title-and-subtitle)
- [Print and Export](./print-and-export)
