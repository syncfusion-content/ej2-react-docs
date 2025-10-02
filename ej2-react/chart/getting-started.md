---
layout: post
title: Getting started with React Chart component | Syncfusion
description:  Checkout and learn about Getting started with React Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting Started with React Charts of Syncfusion

This section explains you the steps required to create a simple chart and demonstrate the basic usage of the chart control.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Developer Tools. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Developer Tools](https://ej2.syncfusion.com/react/documentation/ai-developer-tools/overview)

To get start quickly with React Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=w1xHn0CceqE" %}

## Dependencies

Below is the list of minimum dependencies required to use the chart component.

```javascript

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

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

* Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

   ```
    npm install @syncfusion/ej2-react-charts --save
   ```

## Add Chart to the Project

Now, you can start adding Chart component in the application.
For getting started, add the Chart component in `src/App.tsx` file using following code.

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
{% include code-snippet/chart/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/initialize-cs1" %}

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic chart to visualize sales data for a particular year. For this application we are going to use line series, tooltip, data label, category axis and legend feature of the chart. Please find the relevant feature service name and description as follows.

* `LineSeries` - Inject this module in to `services` to use line series.
* `Legend` - Inject this module in to `services` to use legend feature.
* `Tooltip` - Inject this module in to `services` to use tooltip feature.
* `DataLabel` - Inject this module in to `services` to use datalabel feature.
* `Category`  - Inject this module in to `services` to use category feature.

These modules should be injected to the `services` section as follows,

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { Category, ChartComponent, DataLabel, LineSeries, Legend, Tooltip, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return <ChartComponent id='charts'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
  </ChartComponent>;
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { Category, ChartComponent, DataLabel, LineSeries, Legend, Tooltip, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return <ChartComponent id='charts'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
  </ChartComponent>;
}
export default App;

{% endhighlight %}
{% endtabs %}

## Populate Chart with Data

This section explains how to plot below JSON data to the chart.

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

export let data: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

{% endhighlight %}
{% endtabs %}

Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#valuetype)for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs3" %}

The sales data are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting the `${value}K` to the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelformat) property of axis. Here, `{value}` act as a placeholder for each axis label.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs4" %}

## Add Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#title) property to the chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/tooltip-cs1" %}

## Enable Legend

You can use legend for the chart by setting the `visible` property to true in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel/#visible) object and by injecting the `Legend` module into the `services`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/legend-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/legend-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/legend-cs1" %}

## Add Data Label

You can add data labels to improve the readability of the chart. This can be achieved by setting the visible property to true in the `dataLabel` object  and by injecting `DataLabel` module into the `services`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/datalabel-cs1" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the enable property as true in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#enable) object and by injecting `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/getting-started/tooltip-cs2" %}

> You can refer to our [React Charts](https://www.syncfusion.com/react-components/react-charts) feature tour page for its groundbreaking feature representations. You can also explore our [React Charts example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/chart/line) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.