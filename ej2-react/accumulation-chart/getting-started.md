---
layout: post
title: Getting started with React Accumulation chart component | Syncfusion
description:  Checkout and learn about Getting started with React Accumulation chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting started with React Accumulation charts of Syncfusion

This section describes the steps to create a simple Accumulation Chart and demonstrates the basic usage of the Accumulation Chart component. The dependencies for accumulation chart is same as chart control.

A quick video overview of the React Accumulation Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=VHYoL3gVmHA" %}

## Dependencies

Below is the list of minimum dependencies required to use the Accumulation Chart component.

```javascript

|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-buttons
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

## Add accumulation chart to the project

Add the Accumulation Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import {AccumulationChartComponent} from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
    return  (<AccumulationChartComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { AccumulationChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<AccumulationChartComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}


**Pie series**

By default, a pie series is rendered when JSON data is assigned to the series [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#datasource) property. Map JSON fields to the series [`xName`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#yname) properties to bind data correctly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/series/pie-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/series/pie-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs4" %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```