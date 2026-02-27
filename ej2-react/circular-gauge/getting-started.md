---
layout: post
title: Getting started with React Circular gauge component | Syncfusion
description:  Checkout and learn about Getting started with React Circular gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Circular gauge component

This section explains the steps required to create a simple React Circular Gauge component and demonstrate its basic usage in a React environment.

> Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development? Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Dependencies

Following is the list of minimum dependencies required to use the Circular Gauge.

```
|-- @syncfusion/ej2-react-circulargauge
    |-- @syncfusion/ej2-react-base
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-paf-export
```

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> Note: To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](./images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in JavaScript environment, run the following command.

```
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Circular Gauge packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install the Circular Gauge component, use the following command.

```
npm install @syncfusion/ej2-react-circulargauge --save
```

> The –save will instruct NPM to include the Circular Gauge package inside of the dependencies section of the package.json.

## Adding Circular Gauge component

Add the Circular Gauge component to the application. To initialize the Circular Gauge control in the React application, import the component into `src/App.js` or `src/App.tsx` as appropriate. Use the example below to include the Circular Gauge component.

```ts

import React from 'react';
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';

export function App() {
    return (<CircularGaugeComponent></CircularGaugeComponent>);
}

export default App;

```

### Run the application

The Circular Gauge control is now included in the **quickstart** application. Use the following command to run the application.

```
npm start
```

The below example shows the basic Circular Gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs1" %}

## Module injection

Circular Gauge component features are segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `Inject` directive. The current application uses the Legend, Tooltip, and Annotation features of the Circular Gauge. The relevant feature module names and descriptions are listed below.

* `Legend` - Inject this module to use legend feature.
* `Tooltip` - Inject this module to use tooltip feature.
* `Annotations` - Inject this module to use annotations feature.
* `GaugeTooltip` - Inject this module to use gauge tooltip feature.

These modules should be injected into the Circular Gauge using the `Inject` directive.

> Additional feature modules are available [here](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-user-interaction).

## Set pointer value

You can change the pointer value in the above sample using the [value](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer#value-number) property in [pointers](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer). The pointer indicates the current value on the gauge scale.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs2" %}

## Adding ranges

Ranges are used to categorize the axis values into different sections with distinct colors. Add ranges to the gauge by configuring the [ranges](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range) property. Each range can have a start value, end value, and color to visually represent different sections of the gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs1" %}

## Adding annotations

Annotations provide the ability to add custom HTML content at specific locations within the gauge. Enable annotations by injecting the `Annotations` module and using the [annotations](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/annotation) property. Annotations are useful for displaying additional information, labels, or custom content on the gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-annotations-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-annotations-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-annotations-cs1" %}

## Adding legend

Legends provide information about the ranges displayed in the circular gauge. Enable legends by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/legendSettings#visible) property to `true` in [legendSettings](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/legendSettings) and injecting the `Legend` module. Without the Legend module, the legend will not render.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-legend-cs1" %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-legend-cs1" %}

> Refer to the [React Circular Gauge](https://www.syncfusion.com/react-components/react-circular-gauge) feature tour page for its groundbreaking feature representations. You can also explore our [React Circular Gauge Component example](https://ej2.syncfusion.com/react/demos/#/material3/circular-gauge/default) that shows how to render the Circular Gauge in React.

## See also

* [Getting Started with Next.js](https://ej2.syncfusion.com/react/documentation/circular-gauge/nextjs-getting-started)
* [Circular Gauge Axes](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-axes)
* [Circular Gauge Ranges](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-ranges)
* [Circular Gauge Pointers](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-pointers)
* [Circular Gauge Annotations](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-annotations)
