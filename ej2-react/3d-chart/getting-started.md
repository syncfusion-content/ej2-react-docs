---
layout: post
title: Getting started with React 3D Chart component | Syncfusion
description:  Checkout and learn about Getting started with React 3D Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting started

This section explains you the steps required to create a simple 3D Chart and demonstrate the basic usage of the 3D Chart control.

## Dependencies

Below is the list of minimum dependencies required to use the 3D Chart component.

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

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```
    npm install -g create-react-app
   ```

* To set-up a React application in TypeScript environment, run the following command.

    ```
     create-react-app quickstart --template typescript
     cd quickstart
     npm start
   ```
* To set-up a React application in JavaScript environment, run the following command.
   ```
    create-react-app quickstart
    cd quickstart
    npm start
   ```

* Install Syncfusion packages using below command.

   ```
    npm install @syncfusion/ej2-react-charts --save
   ```

## Add 3D Chart to the project

Now, you can start adding 3D Chart component in the application.
For getting started, add the 3D Chart component in `src/App.tsx` file using following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
  return (<Chart3DComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<Chart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```

The below example shows a basic 3D Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs1" %}

## Module injection

3D Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find the relevant feature service name and description as follows.

* `ColumnSeries3D` - Inject this module in to `services` to use column series.
* `Legend3D` - Inject this module in to `services` to use legend feature.
* `Tooltip3D` - Inject this module in to `services` to use tooltip feature.
* `DataLabel3D` - Inject this module in to `services` to use datalabel feature.
* `Category3D`  - Inject this module in to `services` to use category feature.

These modules should be injected to the `services` section as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { Category3D, Chart3DComponent, DataLabel3D, ColumnSeries3D, Legend3D, Tooltip3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return <Chart3DComponent id='charts'>
    <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D]}/>
  </Chart3DComponent>;
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { Category3D, Chart3DComponent, DataLabel3D, ColumnSeries3D, Legend3D, Tooltip3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return <Chart3DComponent id='charts'>
    <Inject services={[ColumnSeries3D, Legend3D, Tooltip3D, DataLabel3D, Category3D]}/>
  </Chart3DComponent>;
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% endtabs %}

## Populate 3D Chart with data

This section explains how to plot below JSON data to the 3D Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

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
{% highlight ts tabtitle="index.tsx" %}

export let data: any[] = [
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

Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/) property. Now map the field names `x` and `y` in the JSON data to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#valuetype)for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs2" %}

## Add 3D Chart title

You can add a title using [`title`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#visible) property to true in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#legendsettings) object and by injecting the `Legend3D` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs4" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#visible) property to true in the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#datalabel) object and by injecting `DataLabel3D` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#enable) property as true in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#tooltip) object and by injecting `Tooltip3D` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/getting-started/getting-started-cs6" %}

> You can refer to our `React 3D Charts` feature tour page for its groundbreaking feature representations. You can also explore our [React 3D Charts example](https://ej2.syncfusion.com/react/demos/#/material3/three-dimension-chart/column) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.