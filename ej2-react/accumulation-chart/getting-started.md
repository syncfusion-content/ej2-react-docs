---
layout: post
title: Getting started with React Accumulation Chart component | Syncfusion
description:  Checkout and learn about Getting started with React Accumulation Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Accumulation Charts of Syncfusion

This section describes the steps to create a simple Accumulation Chart and demonstrates the basic usage of the Accumulation Chart component. The dependencies for Accumulation Chart is same as chart control.

A quick video overview of the React Accumulation Charts setup is available:

{% youtube "https://www.youtube.com/watch?v=VHYoL3gVmHA" %}

## Dependencies

Below is the list of minimum dependencies required to use the Accumulation Chart component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-react-base
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

Otherwise, you can directly set up our project with TypeScript or JavaScript environment based on the following commands

To set up a React application in **TypeScript** environment:

```bash
npm create vite@latest my-app -- --template react-ts
```

To set up a React application in **JavaScript** environment:

```bash
npm create vite@latest my-app -- --template react
```

To navigate and run your project:
```bash
cd my-app
npm run dev
```

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Accumulation Chart package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Accumulation Chart package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the Accumulation Chart package inside of the **dependencies** section of the package.json.

## Add Accumulation Chart to the project

Add the Accumulation Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import {AccumulationChartComponent} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<AccumulationChartComponent />);
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

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

## Module injection

Accumulation Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic chart to visualize data in a pie chart. For this application we are going to use pie series. Please find relevant feature service name and description as follows.

* `PieSeries` - Inject this module in to `services` to use pie series.

Import the above-mentioned modules from the chart package and inject them into the `services` section of the Accumulation Chart component as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { AccumulationChartComponent, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
    return (
        <AccumulationChartComponent>
            <Inject services={[PieSeries]} />
        </AccumulationChartComponent>
    );
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { AccumulationChartComponent, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
    return (
        <AccumulationChartComponent>
            <Inject services={[PieSeries]} />
        </AccumulationChartComponent>
    );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Pie series

By default, a pie series is rendered when JSON data is assigned to the series [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#datasource) property. Map JSON fields to the series [`xName`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#yname) properties to bind data correctly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/chart/code-path/series/pie-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/chart/code-path/series/pie-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/pie-cs4" %}
