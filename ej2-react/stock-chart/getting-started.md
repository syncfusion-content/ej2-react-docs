---
layout: post
title: Getting Started with React Stock Chart Component | Syncfusion
description:  Checkout and learn about getting started with Syncfusion Essentiall React Stock Chart component, it's elements, and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting Started with React Stock Chart

This section explains you the steps required to create a simple Stock Chart and demonstrate the basic usage of the Stock Chart control.

To get start quickly with React Stock Chart, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=LdTuxkJFfJI" %}

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
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons

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

## Add Stock Chart to the Project

Now, you can start adding Chart component in the application.
For getting started, add the Chart component in `src/App.tsx` file using following code.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import {StockChartComponent} from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App()  {

    return  (<StockChartComponent />);

}
export  default  App;

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { StockChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<StockChartComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```

he below example shows a basic Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/getting-started/initialize-cs1" %}

## Module Injection

Stock Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic chart to visualize stock value of a company.
For this application we are going to use candle series, tooltip, data label, DateTime axis
feature of the chart. Please find the relevant feature service name and description as follows.

* `CandleSeries` - Inject this module in to `services` to use candle series.
* `Tooltip` - Inject this module in to `services` to use tooltip feature.
* `DataLabel` - Inject this module in to `services` to use datalabel feature.
* `DateTime`  - Inject this module in to `services` to use DateTime feature.

These modules should be injected to the `services` section as follows,


{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { DateTime, StockChartComponent, DataLabel, CandleSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {

    return <StockChartComponent id='stockcharts'>
      <Inject services={[CandleSeries, Tooltip, DataLabel, Category]} />
    </StockChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { StockChartComponent, DataLabel, CandleSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return <StockChartComponent id='stockcharts'>
      <Inject services={[CandleSeries, Tooltip, DataLabel, Category]}/>
    </StockChartComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% endtabs %}

## Populate Chart with Data

This section explains how to plot below JSON data to the  Stock Chart.Please find the below imported datasource.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}

export let data = [{
        "x": new Date('2012-04-02T00:00:00.000Z'),
        "open": 320.705719,
        "high": 324.074066,
        "low": 317.737732,
        "close": 323.783783,
        "volume": 45638000
    }, {
        "x": new Date('2012-04-03T00:00:00.000Z'),
        "open": 323.028015,
        "high": 324.299286,
        "low": 319.639648,
        "close": 321.631622,
        "volume": 40857000
    }, {
        "x": new Date('2012-04-04T00:00:00.000Z'),
        "open": 319.544556,
        "high": 319.819824,
        "low": 315.865875,
        "close": 317.892883,
        "volume": 32519000
    }, {
        "x": new Date('2012-04-05T00:00:00.000Z'),
        "open": 316.436432,
        "high": 318.533539,
        "low": 314.599609,
        "close": 316.476471,
        "volume": 46327000
    }];

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

export let data: any[] = [{
            "x": new Date('2012-04-02T00:00:00.000Z'),
            "open": 320.705719,
            "high": 324.074066,
            "low": 317.737732,
            "close": 323.783783,
            "volume": 45638000
        }, {
            "x": new Date('2012-04-03T00:00:00.000Z'),
            "open": 323.028015,
            "high": 324.299286,
            "low": 319.639648,
            "close": 321.631622,
            "volume": 40857000
        }, {
            "x": new Date('2012-04-04T00:00:00.000Z'),
            "open": 319.544556,
            "high": 319.819824,
            "low": 315.865875,
            "close": 317.892883,
            "volume": 32519000
        }, {
            "x": new Date('2012-04-05T00:00:00.000Z'),
            "open": 316.436432,
            "high": 318.533539,
            "low": 314.599609,
            "close": 316.476471,
            "volume": 46327000
        }]

{% endhighlight %}
{% endtabs %}


 Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries/) property and then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries/#datasource) property.

Since the JSON contains DateTime data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxis/#valuetype)for horizontal axis to `DateTime`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/getting-started/datasource-cs1" %}

## Add Stock Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel/#title) property to the Stock Chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/getting-started/datasource-cs2" %}

## Add Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/getting-started/crosshair-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/getting-started/crosshair-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/getting-started/crosshair-cs1" %}

## Add Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `Crosshair` and `Tooltip` module into the `services`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/getting-started/trackball-cs1" %}

> You can refer to our [React Stock Chart](https://www.syncfusion.com/react-components/react-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [React Stock Chart example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/stock-chart/default) that shows you how to present and manipulate data.