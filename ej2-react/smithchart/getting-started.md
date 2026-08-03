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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React Smith Chart Package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Smith Chart package using the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add Smith Chart to the project

Replace the contents of `src/App.tsx` (for a TypeScript project) or `src/App.jsx` (for a JavaScript project) with the following code. The example below registers a basic Smith Chart and renders it inside the application's root element defined in `index.html`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Inject Required Modules

Smith Chart features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Smith Chart component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `SmithchartLegend` and `TooltipRender` modules are injected to enable legend and tooltip functionality in the Smith Chart.

* `SmithchartLegend` - Inject this module into the `services` array to enable the legend feature.
* `TooltipRender` - Inject this module into the `services` array to enable tooltips.

Import the required modules from the Charts package and register them through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import {
  SmithchartComponent,
  SmithchartLegend,
  TooltipRender,
  Inject
} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <SmithchartComponent id="smithchart">
      <Inject services={[SmithchartLegend, TooltipRender]} />
    </SmithchartComponent>
  );
}

export default App;
{% endhighlight %}
{% endtabs %}

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

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

If you encounter issues while setting up or running the Smith Chart, refer to the common problems and solutions below.

* **Blank chart with no series visible** — Ensure the `series` array is passed to `SmithchartComponent` and that the injected modules (such as `SmithchartLegend` or `TooltipRender`) match the features you have enabled.
* **License warning in the console** — Register a Syncfusion license key as described in the [licensing documentation](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).
* **`Module not found` errors during build** — Confirm that `@syncfusion/ej2-react-charts` is listed under `dependencies` in `package.json` and that `npm install` has finished successfully.
* **Markers, legend, or tooltip not appearing** — Verify that the corresponding module (`SmithchartLegend`, `TooltipRender`, etc.) is included in the `services` array passed to `Inject`.

## See also

* [Title and subtitle](title-subtitle)
* [Smith Chart axis](smithchart-axis)
* [Smith Chart dimensions](smithchart-dimensions)
* [Working with data](working-with-data)
* [Smith Chart series](smithchart-series)
* [Smith Chart marker](smithchart-marker)
* [Smith Chart legend](smithchart-legend)
* [Smith Chart tooltip](smithchart-tooltip)
* [Smith Chart print and export](smithchart-print)
* [Accessibility in Smith Chart](accessibility)
* [Smith Chart API Reference](https://ej2.syncfusion.com/react/documentation/api/smithchart/index-default)