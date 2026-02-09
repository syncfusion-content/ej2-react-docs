---
layout: post
title: Getting started with React Sparkline component | Syncfusion
description:  Checkout and learn about Getting started with React Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Sparkline component

This section describes the steps to create a simple Sparkline and demonstrates the basic usage of the Sparkline component.

## Dependencies

Below is the list of minimum dependencies required to use the Sparkline component.

```ts
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
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

## Add sparkline to the project

Add the Sparkline component to `src/App.tsx` using the following code.

```ts

import * as React from 'react';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

class App extends React.Component {
render() {
  return ( <SparklineComponent></SparklineComponent> );
 }
}
export default App;

```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Since the data source has not been specified to the sparkline, no shapes will be rendered. Only an empty SVG element is appended to the sparkline container.

## Module injection

Sparkline component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. Please find relevant feature service name and description as follows.

* SparklineTooltip - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned module from the chart package and inject them into the `services` section of the Sparkline component as follows.

```ts

import * as React from 'react';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

class App extends React.Component {
render() {
  return ( <SparklineComponent><Inject services={[SparklineTooltip]} /></SparklineComponent> );
 }
}
export default App;

```

## Bind data source to sparkline

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#datasource) property enables data binding for the sparkline. It accepts a collection of values as input, such as a list of objects.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs1" %}

## Change the type of sparkline

The sparkline type can be configured using the [`type`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#type) property, which supports `Line`, `Column`, `WinLoss`, `Pie`, and `Area`. Here, the `area` type is applied.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs2" %}

## Enable tooltip for sparkline

The sparkline provides additional information through a tooltip that appears when the mouse pointer hovers over the chart. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinetooltipsettingsmodel#visible) property to `true` in [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#tooltipsettings) and injecting `SparklineTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs3" %}