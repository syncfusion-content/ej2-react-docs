---
layout: post
title: Getting started with React Smithchart component | Syncfusion
description:  Checkout and learn about Getting started with React Smithchart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple Smith Chart and demonstrate the basic usage of the Smith Chart control.

To get start quickly with React Smith Chart, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=9FVLSNIMxnU" %}

## Dependencies

Below is the list of minimum dependencies required to use the Smith Chart.

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


* Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

```
npm install @syncfusion/ej2-react-charts --save
```

## Add Smith Chart to the Project

Now, you can start adding Smith Chart component in the application. For getting started, add the Smith Chart component in `src/App.tsx` file using following code.


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

The below example shows basic Smithchart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs1" %}

## Module Injection

Smithchart component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature module using `<Inject services={} />` method. In the current application, we are
going to modify the above basic smithchart to visualize transmission lines.
For this application we are going to use  tooltip and legend feature of the smithchart. Please find relevant
feature module name and description as follows.

* SmithchartLegend - Inject this provider to use legend feature.
* TooltipRender - Inject this provider to use tooltip feature.

Now import the above mentioned modules from smithchart package and inject it into the Smithchart component using
`<Inject services={} />`  method.



```ts

import * as React from "react";
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';

function App() {

  return ( <SmithchartComponent>
  <Inject services={[SmithchartLegend, TooltipRender]} />
  </SmithchartComponent> );

}
export default App;

```

## Add Series to Smithchart

Smithchart had two type of specification for adding series.
* dataSource - Using this, Data object can bind directly by specifying the resistance and reactance values, series add to smithchart.
* points - Using this, collection of resistance and reactance values can bind directly to render series.

Below sample demonstrate adding two series to smithchart both ways.
* First series Transmission1 shows dataSource bound series.
* Second series Transmission2 shows points bound series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs2" %}

## Add title to SmithChart

smithchart `title` API used to add title for smithchart. In that `text` API used to set text of the title.
API `visible` used to toggle the title.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Enable Marker to Smithchart

To use series marker and it's customization in smithchart, use series `marker`. To display marker for particular series, need to specify  `marker visible` as true. Below sample marker enabled for first series only.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs4" %}

## Enable DataLabel to Smithchart Marker

To use marker dataLabel and it's customization in smithchart, use marker `dataLabel`. To display dataLabel for particular series marker, need to specify  `dataLabel visible` as true in that series `marker`. Below sample dataLabel enabled for first series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs5" %}

## Enable Legend for Smithchart

Smithchart had a legend feature, which is used to denote the correspond series. To enable the legend, need to inject `SmithchartLegend` module using `Smithchart.Inject(SmithchartLegend)` method and smithchart `legendSettings` `visible` as true. Following example sample shows enabling legend for smithchart. Series name can customize using series `name`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs6" %}

## Enable Tooltip for Smithchart Series

Smithchart had a tooltip feature, which is used to show the current point's values. To enable the tooltip, need to inject `TooltipRender` module using `Smithchart.Inject(TooltipRender)` method and smithchart series `tooltip` `visible` as true. Following example sample shows enabling tooltip for smithchart series collection.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs7" %}
 