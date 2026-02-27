---
layout: post
title: Getting started with React Linear Gauge component | Syncfusion
description:  Checkout and learn about Getting started with React Linear Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Linear Gauge

This section explains the steps required to create a simple React Linear Gauge component and demonstrate its basic usage in a React environment.

> Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development? Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Linear Gauge, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=PTBeKSNHp1k" %}

## Dependencies

Following is the list of minimum dependencies required to use the Linear Gauge.

```
+-- @syncfusion/ej2-react-lineargauge
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
|-- @syncfusion/ej2-react-base
```

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Linear Gauge packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install the Linear Gauge component, use the following command.

```
npm install @syncfusion/ej2-react-lineargauge --save
```

> The –save will instruct NPM to include the Linear Gauge package inside of the dependencies section of the package.json.

## Adding Linear Gauge component

The React Linear Gauge component can be added to the application by following these steps. To get started, add the Linear Gauge component to the **src/App.tsx** file using the following code.

The following Linear Gauge code should be placed in the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return <LinearGaugeComponent></LinearGaugeComponent>
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return <LinearGaugeComponent></LinearGaugeComponent>
}
export default App;

{% endhighlight %}
{% endtabs %}

## Module Injection

React Linear Gauge component features are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the App. The annotation and tooltip features of the Linear Gauge are used in the current application. The relevant feature service names and descriptions are listed below.

* `Annotations` - Inject this module to use annotation feature.
* `GaugeTooltip` - Inject this module to use tooltip feature.

These modules should be injected into the Linear Gauge using the Inject directive.

## Adding the Linear Gauge Title

The title can be added to the Linear Gauge component using the [`title`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel#title-string) property in the Linear Gauge. Enable the title by setting the `title` property to display a meaningful heading for the gauge.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs1" %}

## Setting the Axis Range

The range of the axis can be set using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#minimum-number) and [`maximum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#maximum-number) properties in the Linear Gauge. This defines the start and end values that will be displayed on the gauge axis.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs2" %}

## Customizing Axis Labels

To denote the axis values with temperature units, add the °C as suffix to each label. This can be achieved by setting the **{value}°C** to the [`format`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel#format-string) property in the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#labelstyle-labelmodel) object of the axis. Here, **{value}** acts as a placeholder for each axis label.

To change the pointer value from the default value of the gauge, set the [`value`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer#value-number) property in [`pointers`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointerModel) object of the axis.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs3" %}

## Setting the Pointer Value

The pointer value is changed in the below sample using the [`value`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer#value-number) property in [`pointers`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer) object of the axis. The pointer can be customized with different colors using the `color` property to make it visually distinct.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

> Refer to the [React Linear Gauge](https://www.syncfusion.com/react-components/react-linear-gauge) feature tour page for its groundbreaking feature representations. You can also explore our [React Linear Gauge Component example](https://ej2.syncfusion.com/react/demos/#/material3/linear-gauge/default) that shows how to render the Linear Gauge in React.

## See Also

* [Linear Gauge Axis Customization](./axis)
* [Linear Gauge Pointers](./pointers)
* [Linear Gauge Ranges](./ranges)
* [Linear Gauge Annotations](./annotations)
 