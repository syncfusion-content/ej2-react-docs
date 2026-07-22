---
layout: post
title: Getting started with React Smith Chart component | Syncfusion
description: Check out and learn about Getting started with React Smith Chart component of Syncfusion Essential JS 2 and more details.
control: Getting Started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Smith Chart component

This section describes the steps to create a simple Smith Chart and demonstrates the basic usage of the Smith Chart component.

A quick video overview of the React Smith Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=9FVLSNIMxnU" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

Below is the list of minimum dependencies required to use the Smith Chart component. The package under `@syncfusion/ej2-react-charts` is the only package you need to install explicitly; the rest are installed automatically as transitive dependencies.

```
  |-- @syncfusion/ej2-react-charts
      |-- @syncfusion/ej2-charts
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-data
      |-- @syncfusion/ej2-svg-base
      |-- @syncfusion/ej2-pdf-export
      |-- @syncfusion/ej2-compression
      |-- @syncfusion/ej2-file-utils
      |-- @syncfusion/ej2-react-base
```

## Installation and configuration

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Smith Chart Package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
From inside the newly created project directory, install the Syncfusion<sup style="font-size:70%">&reg;</sup> Smith Chart package using the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add Smith Chart to the project

Replace the contents of `src/App.tsx` (for a TypeScript project) or `src/App.jsx` (for a JavaScript project) with the following code. The example below registers a basic Smith Chart and renders it inside the application's root element defined in `index.html`.

```ts

import * as React from "react";
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';

function App() {
  return ( <SmithchartComponent></SmithchartComponent> );
}
export default App;

```

The complete sample below renders a basic Smith Chart with the configuration above.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## Module injection

Smith Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service into the component's `services`. In the current application, we are going to modify the above basic Smith Chart to visualize transmission lines. For this application we are going to use the tooltip and legend features of the Smith Chart. The relevant feature services are listed below.

* `SmithchartLegend` - Inject this module into `services` to use the legend feature.
* `TooltipRender` - Inject this module into `services` to use the tooltip feature.

Import the above-mentioned modules from the chart package and inject them into the `services` section of the Smith Chart component.

```ts

import * as React from "react";
import { SmithchartComponent, SmithchartLegend, TooltipRender, Inject } from '@syncfusion/ej2-react-charts';

function App() {

  return ( <SmithchartComponent id="smithchart" >
      <Inject services={[SmithchartLegend, TooltipRender]} />
    </SmithchartComponent> );

}
export default App;

```

## Add series to Smith Chart

The Smith Chart has two types of specifications for adding series.

* [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#datasource) — Bind a data object directly by specifying [`resistance`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#resistance) and [`reactance`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#reactance) values; the series renders from the provided dataSource.
* [`points`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#points) — Provide a collection of resistance and reactance value points for the series. Each point must be an object of the shape `{ resistance: number, reactance: number }`, for example `[{ resistance: 0, reactance: 0.5 }, { resistance: 1, reactance: 0 }]`.

The samples below demonstrate adding two series to the Smith Chart, one for each approach.

* First series `Transmission1` shows a `dataSource`-bound series.
* Second series `Transmission2` shows a `points`-bound series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Troubleshooting

If you encounter issues while setting up or running the Smith Chart, refer to the common problems and solutions below.

* **Blank chart with no series visible** — Ensure the `series` array is passed to `SmithchartComponent` and that the injected modules (such as `SmithchartLegend` or `TooltipRender`) match the features you have enabled.
* **License warning in the console** — Register a Syncfusion license key as described in the [licensing documentation](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).
* **`Module not found` errors during build** — Confirm that `@syncfusion/ej2-react-charts` is listed under `dependencies` in `package.json` and that `npm install` has finished successfully.
* **Markers, legend, or tooltip not appearing** — Verify that the corresponding module (`SmithchartLegend`, `TooltipRender`, etc.) is included in the `services` array passed to `Inject`.

## See also

* [Title and subtitle](title-subtitle.md)
* [Smith Chart axis](smithchart-axis.md)
* [Smith Chart dimensions](smithchart-dimensions.md)
* [Working with data](working-with-data.md)
* [Smith Chart series](smithchart-series.md)
* [Smith Chart marker](smithchart-marker.md)
* [Smith Chart legend](smithchart-legend.md)
* [Smith Chart tooltip](smithchart-tooltip.md)
* [Smith Chart print and export](smithchart-print.md)
* [Accessibility in Smith Chart](accessibility.md)


