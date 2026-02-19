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

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
```

Once you install `@syncfusion/ej2-react-charts`, the other required dependencies will be installed automatically along with the main package.

## Installation and configuration

### Create a React application

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](./images/Initial-setup.jpg)

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Sparkline package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Sparkline package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the Sparkline package inside of the **dependencies** section of the package.json.

## Add Sparkline to the project

Add the Sparkline component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<SparklineComponent></SparklineComponent>);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<SparklineComponent></SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Since the data source has not been specified to the Sparkline, no shapes will be rendered. Only an empty SVG element is appended to the Sparkline container.

## Module injection

Sparkline components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the Sparkline component. Please find relevant feature service name and description as follows.

* `SparklineTooltip` - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned module from the chart package and inject them into the `services` section of the Sparkline component as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";

function App() {
  return (<SparklineComponent>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
function App() {
    return (<SparklineComponent>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

## Bind data source to Sparkline

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#datasource) property enables data binding for the Sparkline. It accepts a collection of values as input, such as a list of objects.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs1" %}

## Change the type of Sparkline

The Sparkline type can be configured using the [`type`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#type) property, which supports `Line`, `Column`, `WinLoss`, `Pie`, and `Area`. Here, the `Area` type is applied.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs2" %}

## Enable tooltip for Sparkline

The Sparkline provides additional information through a tooltip that appears when the mouse pointer hovers over the chart. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinetooltipsettingsmodel#visible) property to `true` in [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#tooltipsettings) and injecting `SparklineTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs3" %}