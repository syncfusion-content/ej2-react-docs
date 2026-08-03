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

## Install the Syncfusion® React Bullet Chart package

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. 

To install the Bullet Chart package, use the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the Bullet Chart component to the project

Open the application entry file (`src/App.jsx` or `src/App.tsx`) and add the Bullet Chart component using the following code.

The following example demonstrates how to render a basic Bullet Chart component without binding any data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/initialize-cs1" %}

## Inject Required Modules

Bullet Chart features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Bullet Chart component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `BulletTooltip` module is injected to enable tooltip functionality in the Bullet Chart.

* `BulletTooltip` - Inject this module into the `services` array to enable tooltips in the Bullet Chart.

Import the required module from the Charts package and register it through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import { BulletChartComponent, BulletTooltip, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

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

Assign the local data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/index-default#datasource) property of the `BulletChartComponent`. Map the `value` field to the [`valueField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/index-default#valuefield) property and the `target` field to the [`targetField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/index-default#targetfield) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/datasource-cs1" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

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

* [Title and Subtitle](./title)
* [Ranges](./ranges)
* [Tooltip](./tool-tip)
* [Data Labels](./data-label)
* [Axis Customization](./axis-customization)
* [Working with Data](./data-binding)
* [Dimensions](./bullet-chart-dimensions)
* [Accessibility](./accessibility)
* [Bullet Chart API reference](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/index-default)
