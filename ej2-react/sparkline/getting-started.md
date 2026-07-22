---
layout: post
title: Getting started with React Sparkline component | Syncfusion
description: Checkout and learn about Getting started with React Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Sparkline component

This section describes the steps to create a simple Sparkline and demonstrates the basic usage of the Sparkline component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

Below is the list of minimum dependencies required to use the Sparkline component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
```

Once you install `@syncfusion/ej2-react-charts`, the other required dependencies will be installed automatically along with the main package.

## Installation and configuration

### Create a React application

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](../images/Initial-setup.jpg)

To set up a React application in a TypeScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

To set up a React application in a JavaScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Sparkline package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Sparkline package, use the following command

```bash
npm install @syncfusion/ej2-react-charts
```

## Add Sparkline to the project

Add the Sparkline component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<SparklineComponent></SparklineComponent>);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<SparklineComponent></SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

Since the data source has not been specified to the Sparkline, no shapes will be rendered. Only an empty SVG element is appended to the Sparkline container.

## Module injection

Sparkline components are segregated into individual feature-wise modules. To use a particular feature, you must inject its feature service into the `services` section of the Sparkline component.

The following feature services are available:

* `SparklineTooltip` – Inject this module into `services` to use the tooltip feature.
* `SparklineRangeBand` – Inject this module into `services` to render range bands.

Import the required module from the chart package and inject it into the `services` section of the Sparkline component as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";

function App() {
  return (<SparklineComponent>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
function App() {
    return (<SparklineComponent>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

## Bind data source to Sparkline

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#datasource) property enables data binding for the Sparkline. It accepts a collection of values as input, such as a list of objects. Use [`xName`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#yname) to map the data field names to the horizontal and vertical axes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs1" %}

## Troubleshooting

If the Sparkline does not render or build errors appear, verify the following common causes before raising an issue.

* **Empty container or no shapes rendered** – Ensure `dataSource` is set and the field names referenced in `xName` and `yName` exist on each data object. Without a data source, the component renders only an empty SVG element.
* **`SparklineTooltip is not a function` or tooltip does not appear** – Confirm the `SparklineTooltip` module is imported from `@syncfusion/ej2-react-charts` and injected inside `<SparklineComponent>` using `<Inject services={[SparklineTooltip]} />`. Also set `tooltipSettings.visible` to `true`.
* **Module not found / package not installed** – Run `npm install @syncfusion/ej2-react-charts --save` from the project root and restart the dev server.
* **TypeScript errors for props such as `xName`, `yName`, or `tooltipSettings`** – Verify the installed package version supports your React version (see the [system requirements](https://ej2.syncfusion.com/react/documentation/system-requirement)) and that `@types/react` matches your React major version.

## See also

* [Sparkline types](sparkline-types.md)
* [Sparkline dimensions](sparkline-dimensions.md)
* [Sparkline appearance](appearance.md)
* [Axis customization](axis-customization.md)
* [Data labels](data-labels.md)
* [Marker](marker.md)
* [Range band](range-band.md)
* [Special points customization](special-points-customization.md)
* [User interaction](user-interaction.md)
* [Localization](localization.md)
* [Accessibility in Sparkline](accessibility.md)