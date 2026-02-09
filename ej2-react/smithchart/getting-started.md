---
layout: post
title: Getting started with React Smithchart component | Syncfusion
description:  Checkout and learn about Getting started with React Smithchart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Smithchart component

This section describes the steps to create a simple Smith Chart and demonstrates the basic usage of the Smith Chart component.

A quick video overview of the React Smith Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=9FVLSNIMxnU" %}

## Dependencies

Below is the list of minimum dependencies required to use the Smith Chart component.

```ts
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


* Install the Syncfusion<sup style="font-size:70%">&reg;</sup> packages using the command below.

```
npm install @syncfusion/ej2-react-charts --save
```

## Add smith chart to the project

Add the Smith Chart component to `src/App.tsx` using the following code.

```ts

import * as React from "react";
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';

function App() {
  return ( <SmithchartComponent></SmithchartComponent> );
}
export default App;

```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The below example shows a basic Smithchart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Module injection

Smithchart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic Smithchart to visualize transmission lines. For this application we are going to use tooltip, and legend feature of the Smithchart. Please find relevant feature service name and description as follows.

* `SmithchartLegend` - Inject this module in to `services` to use legend feature.
* `TooltipRender` - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned modules from the chart package and inject them into the `services` section of the Smithchart component as follows.

```ts

import * as React from "react";
import { SmithchartComponent, SmithchartLegend, TooltipRender, Inject } from '@syncfusion/ej2-react-charts';

function App() {

  return ( <SmithchartComponent>
  <Inject services={[SmithchartLegend, TooltipRender]} />
  </SmithchartComponent> );

}
export default App;

```

## Add series to smithchart

Smithchart had two type of specification for adding series.

* dataSource — Bind a data object directly by specifying resistance and reactance values; the series renders from the provided dataSource.
* points — Provide a collection of resistance and reactance value points for the series.

Below sample demonstrate adding two series to smithchart both ways.

* First series `Transmission1` shows dataSource bound series.
* Second series `Transmission2` shows points bound series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Add title to smithChart

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartmodel#title) property to the Smith Chart to provide quick information to the user about the data plotted in the Smith Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Enable marker to smithchart

You can add and customize the markers in the smith chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkermodel#visible) property to `true` in the [`marker`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#marker) object. The sample below enables markers for the first series. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs4" %}

## Enable dataLabel to smithchart marker

You can add data labels to improve the readability of the smith chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkerdatalabelmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkermodel#datalabel) object. Now, the data labels are arranged smartly based on series. The sample below enables data labels for the first series. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs5" %}

## Enable legend for smithchart

You can use legend for the Smith Chart by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartlegendsettingsmodel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartmodel#legendsettings) object and by injecting the `SmithchartLegend` module into the `services`. Following example sample shows enabling legend for smithchart. Series name can customize using series `name`. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs6" %}

## Enable tooltip for smithchart series

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriestooltipmodel#visible) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#tooltip) object and by injecting the `TooltipRender` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs7" %}
 