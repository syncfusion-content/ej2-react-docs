---
layout: post
title: Getting started with React 3D Chart component | Syncfusion
description:  Checkout and learn about Getting started with React 3D Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React 3D Chart component

This section describes the steps to create a simple 3D Chart and demonstrates the basic usage of the 3D Chart component.

A quick video overview of the React 3D Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=S3SPJYF4Fw8" %}

## Dependencies

Below is the list of minimum dependencies required to use the 3D Chart component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

Once you install `@syncfusion/ej2-react-charts`, the other required dependencies will be installed automatically along with the main package.

## Installation and configuration

### Create a React application

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](./images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Chart package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Chart package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the 3D Chart package inside of the **dependencies** section of the package.json.

## Add 3D Chart to the project

Add the 3D Chart component to `src/App.tsx` using the following code.

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

```
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

## Add 3D Chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dlegendsettingsmodel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#legendsettings) object and by injecting the `Legend3D` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs4" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3ddatalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dseriesmodel#datalabel) object and by injecting `DataLabel3D` module into the `services`. Now, the data labels are arranged smartly based on series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3dtooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#tooltip) object and by injecting `Tooltip3D` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs6" %}

> You can refer to our [React 3D Charts](https://www.syncfusion.com/react-components/react-3d-chart) feature tour page for its groundbreaking feature representations. You can also explore our [React 3D Charts example](https://ej2.syncfusion.com/react/demos/#tailwind3/three-dimension-chart/column) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.