---
layout: post
title: Getting started with React Bullet Chart component | Syncfusion
description: Check out and learn about getting started with the React Bullet Chart component of Syncfusion Essential JS 2 and more details.
control: Getting Started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting started with React Bullet Chart component

This section describes the steps to create a simple Bullet Chart component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

The Bullet Chart component is shipped as part of the `@syncfusion/ej2-react-charts` package. Below is the list of minimum dependencies required to use the component.

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

## Set up the React project

To create a new React application, use the Vite CLI, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command prompts you to select a framework and a variant.

![Initial_setup](../images/Initial-setup.jpg)

To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Bullet Chart Package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install the Bullet Chart package, use the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

This adds the Bullet Chart package to the `dependencies` section of `package.json`.

## Add Bullet Chart to the project

Open your entry file (`src/App.jsx` or `src/App.tsx`) and add the Bullet Chart component using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return <BulletChartComponent id="bulletChart" />;
}
export default App;
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return <BulletChartComponent id="bulletChart" />;
}
export default App;
{% endhighlight %}
{% endtabs %}

Render the `App` component in `src/main.jsx` or `src/main.tsx` as shown below.

{% tabs %}
{% highlight js tabtitle="main.jsx" %}
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="main.tsx" %}
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
{% endhighlight %}
{% endtabs %}

The example below shows a basic Bullet Chart component rendered with no data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/initialize-cs1" %}

## Module injection

The Bullet Chart component is segregated into individual feature-wise modules. To use a particular feature, inject its feature service using the `Inject` component. The following module is available:

- `BulletTooltip` - Inject this module to use the tooltip feature.

Import the required module from the chart package and inject it using the `Inject` component as follows. You can list multiple modules comma-separated inside the `services` array.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return (
      <BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]} />
      </BulletChartComponent>
    );
}
export default App;
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return (
      <BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]} />
      </BulletChartComponent>
    );
}
export default App;
{% endhighlight %}
{% endtabs %}

## Add data to Bullet Chart

This section explains how to plot the following JSON data in the Bullet Chart component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
const data = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 380 },
    { value: 500, target: 480 }
];
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
interface DataPoint {
    value: number;
    target: number;
}

const data: DataPoint[] = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 380 },
    { value: 500, target: 480 }
];
{% endhighlight %}
{% endtabs %}

Assign the local data to the `dataSource` property on the `BulletChartComponent`. Map the `value` key to the `valueField` prop and the `target` key to the `targetField` prop. Other commonly used props include `minimum`, `maximum`, and `interval` for the value axis, and `title` for the chart header.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/datasource-cs1" %}

## Run the Development Server

Run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally at `http://localhost:5173` by default. Add `--open` to the command to open the browser automatically.

```bash
npm run dev
```

> To stop the development server, press `Ctrl+C` in the terminal.

## Troubleshooting

Use the following guidance to resolve common issues when getting started with the Bullet Chart component.

- **Chart does not render (blank page)**
  - Verify that `index.html` contains a container with `id="root"`, and that `main.tsx`/`main.jsx` calls `ReactDOM.createRoot(document.getElementById("root"))` followed by `root.render(<App />)`.
  - Run `npm install` again to ensure all peer dependencies listed in the [Dependencies](#dependencies) section are installed.

- **Tooltip is not visible after setting `enable: true`**
  - The `BulletTooltip` module must be injected into the `services` array of the `Inject` component as shown in the [Module injection](#module-injection) section. The tooltip will not appear without it.

- **Values and target bars are not displayed**
  - Confirm that the `dataSource` array contains objects with numeric `value` and `target` properties, and that the property names match `valueField` and `targetField` exactly (case sensitive).

- **TypeScript errors on import**
  - Ensure `@types/react` and `@types/react-dom` are installed. The Syncfusion package ships with its own types, so no additional type packages are required.

- **Build or dev server fails to start**
  - Confirm that you are using a supported Node.js version (Node 18 or later for the latest Vite templates).
  - Delete `node_modules` and `package-lock.json`, then run `npm install` again.


## See also

Explore the following related topics:

- [Title and Subtitle](./title)
- [Ranges](./ranges)
- [Tooltip](./tool-tip)
- [Data Labels](./data-label)
- [Axis Customization](./axis-customization)
- [Working with Data](./data-binding)
- [Dimensions](./bullet-chart-dimensions)
- [Accessibility](./accessibility)
