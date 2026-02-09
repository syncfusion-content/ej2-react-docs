---
layout: post
title: Getting started with React Bullet chart component | Syncfusion
description:  Checkout and learn about Getting started with React Bullet chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting started with React Bullet Chart component

This section describes the steps to create a simple Bullet Chart and demonstrates the basic usage of the Bullet Chart component.

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart component.

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


Install the Syncfusion<sup style="font-size:70%">&reg;</sup> packages using the command below.

  ```
   npm install @syncfusion/ej2-react-charts --save
  ```

## Add bullet chart to the project

Add the Bullet Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return <BulletChartComponent />;
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
function App() {
    return <BulletChartComponent />;
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

   ``` 
    npm run dev
   ```

The below example shows a basic Bullet Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/initialize-cs1" %}

## Module injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to use tooltip feature of the chart.

* `BulletTooltip` - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned module from the chart package and inject them into the `services` section of the Bullet Chart component as follows.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (
      <BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]} />
      </BulletChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]}/>
      </BulletChartComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% endtabs %}


## Bullet chart with data

This section explains how to plot the following JSON data to the Bullet Chart.

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

const data: Object[] = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 380 },
    { value: 500, target: 480 }
];

{% endhighlight %}
{% endtabs %}

Now assign the local data to `dataSource` property. `value` and `target` values should be mapped with `valueField` and `targetField` respectively.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/datasource-cs1" %}

## Add bullet chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletchartmodel#title) property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using `BulletRangeCollectionDirective` and `BulletRangeDirective` directives of the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/ranges-cs1" %}

## Tooltip

You can use tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipsettingsmodel#enable) property to `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#tooltip) object and by injecting the `BulletTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/tooltip-cs1" %}