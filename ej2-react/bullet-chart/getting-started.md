---
layout: post
title: Getting started with React Bullet Chart component | Syncfusion
description:  Checkout and learn about Getting started with React Bullet Chart component of Syncfusion Essential JS 2 and more details.
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

## Installation and configuration

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](../images/Initial-setup.jpg)

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Bullet Chart Package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Bullet Chart package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the Bullet Chart package inside of the dependencies section of the package.json.

## Add Bullet Chart to the project

Add the Bullet Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <BulletChartComponent />;
}
export default App;
const root = createRoot(document.getElementById("root"));
root.render(<App />);

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <BulletChartComponent />;
}
export default App;
const root = createRoot(document.getElementById("root"));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

   ``` 
    npm run dev
   ```

The below example shows a basic Bullet Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/initialize-cs1" %}

## Module injection

Bullet Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to use tooltip feature of the chart.

* `BulletTooltip` - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned module from the chart package and inject them into the `services` section of the Bullet Chart component as follows.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
      <BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]} />
      </BulletChartComponent>
    );
}
export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { BulletChartComponent, BulletTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (<BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]}/>
      </BulletChartComponent>);
}
export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);

{% endhighlight %}
{% endtabs %}


## Bullet Chart with data

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

Now assign the local data to `dataSource` property. `value` and `target` values should be mapped with `valueField` and `targetField` respectively.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/datasource-cs1" %}

## Add Bullet Chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletchartmodel#title) property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/title-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/title-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/title-cs1" %}

## Ranges

You can add ranges to the Bullet Chart using the `BulletRangeCollectionDirective` and `BulletRangeDirective` components, which should be imported from the `@syncfusion/ej2-react-charts` package. Ranges provide visual context by dividing the chart into qualitative bands (e.g., poor, satisfactory, good).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/ranges-cs1" %}

## Tooltip

You can use tooltip for the Bullet Chart by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipsettingsmodel#enable) property to `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#tooltip) object and by injecting the `BulletTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/bullet-chart/code-path/getting-started/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/getting-started/tooltip-cs1" %}