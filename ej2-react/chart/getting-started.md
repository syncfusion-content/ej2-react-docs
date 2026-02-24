---
layout: post
title: Getting started with React Chart component | Syncfusion
description:  Checkout and learn about Getting started with React Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Charts of Syncfusion

This section describes the steps to create a simple Chart and demonstrates the basic usage of the Chart component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

A quick video overview of the React Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=w1xHn0CceqE" %}

## Dependencies

Below is the list of minimum dependencies required to use the Chart component.

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Chart package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Chart package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the Chart package inside of the **dependencies** section of the package.json.

## Add Chart to the project

Add the Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<ChartComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { ChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<ChartComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The below example shows a basic Chart.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/initialize-cs1" %}

## Module injection

Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the Chart component. In the current application, we are going to modify the above basic Chart to visualize sales data for a particular year. For this application we are going to use line series, tooltip, data label, category axis and legend feature of the Chart. Please find the relevant feature service name and description as follows.

* `LineSeries` - Inject this module in to `services` to use line series.
* `Legend` - Inject this module in to `services` to use legend feature.
* `Tooltip` - Inject this module in to `services` to use tooltip feature.
* `DataLabel` - Inject this module in to `services` to use datalabel feature.
* `Category`  - Inject this module in to `services` to use category feature.

Import the above-mentioned modules from the Chart package and inject them into the `services` section of the Chart component as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ChartComponent, LineSeries, Legend, Tooltip, DataLabel, Category, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";

function App() {
  return <ChartComponent>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
  </ChartComponent>;
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { ChartComponent, LineSeries, Legend, Tooltip, DataLabel, Category, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
function App() {
    return <ChartComponent>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
  </ChartComponent>;
}
export default App;

{% endhighlight %}
{% endtabs %}

## Populate Chart with data

This section explains how to plot the following JSON data to the Chart.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

export let data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

export let data: Object[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% endtabs %}

Add [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel) to the Chart using the `<SeriesCollectionDirective>` and `<SeriesDirective>` components. Map the JSON fields `month` and `sales` to the series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/datasource-cs3" %}

The sales data are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting the `${value}K` to the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#labelformat) property of axis. Here, `{value}` act as a placeholder for each axis label.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datasource-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/datasource-cs4" %}

## Add Chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#title) property to the Chart to provide quick information to the user about the data plotted in the Chart.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/title-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/title-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/title-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/title-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/title-cs1" %}

## Enable legend

You can use legend for the Chart by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#legendsettings) object and by injecting the `Legend` module into the `services`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/legend-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/legend-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/legend-cs1" %}

## Add data label

You can add data labels to improve the readability of the Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/datalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/chart/markersettingsmodel#datalabel) object and by injecting `DataLabel` module into the `services`. Now, the data labels are arranged smartly based on series. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/datalabel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/datalabel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/datalabel-cs1" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#tooltip) object and by injecting `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/getting-started/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/getting-started/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/getting-started/tooltip-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/getting-started/tooltip-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/getting-started/tooltip-cs2" %}

> You can refer to our [React Charts](https://www.syncfusion.com/react-components/react-charts) feature tour page for its groundbreaking feature representations. You can also explore our [React Charts example](https://ej2.syncfusion.com/react/demos#/bootstrap5/chart/line) that shows various Chart types and how to represent time-dependent data, showing trends in data at equal intervals.