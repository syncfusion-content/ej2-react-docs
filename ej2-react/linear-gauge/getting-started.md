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

<!-- markdownlint-disable MD013 -->

This section explains the steps required to create a Linear Gauge and demonstrates the basic usage of the Linear Gauge component.

You can explore some useful features in the Linear Gauge component using the following video.

{% youtube "https://www.youtube.com/watch?v=PTBeKSNHp1k" %}

## Dependencies

Following is the list of minimum dependencies required to use the Linear Gauge.

```javascript
+-- @syncfusion/ej2-react-lineargauge
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
|-- @syncfusion/ej2-react-base
```

## Installation and configuration

To set up a React application quickly, use Vite (`npm create vite@latest`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools such as `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite supports both JavaScript and TypeScript templates and optimizes the application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install Linear Gauge package, use the following command.

```
npm install @syncfusion/ej2-react-lineargauge --save
```

### Adding Linear Gauge component to the Project

Now, the Linear Gauge component can be added in the application. To initialize the Linear Gauge control in the React application, import the Linear Gauge control in the **src/App.js** or **src/App.tsx** as per the application. Please use the below code to include the Linear Gauge component in the application.

```ts

import React from 'react';
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';

export function App() {
   return (<LinearGaugeComponent></LinearGaugeComponent>);
}

export default App;

```

### Run the application

Run the `npm run dev` command in the console to start the development server. This command compiles and serves the application locally; the browser may open automatically depending on the development server configuration.

```
npm run dev
```

## Module Injection

Linear Gauge component are segregated into individual feature-wise modules. In order to use a particular feature,
inject its feature service in the **AppModule**. Please find the feature service name and description as follows.

* `Annotations` - Inject this module in to `services` to use annotation feature.
* `GaugeTooltip` - Inject this module in to `services` to use tooltip feature.

These modules should be injected into the `services` section as follows,



 ```ts
 import * as React from "react";
 import * as ReactDOM from "react-dom";
 import { LinearGaugeComponent, Annotations, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';

 export function App(){
    return(<LinearGaugeComponent>
                <Inject services={[Annotations, GaugeTooltip]}/>
            </LinearGaugeComponent>
    );
 }
  const root = ReactDOM.createRoot(document.getElementById('container'));
  root.render(<App />);

 ```

## Adding the Linear Gauge Title

The title can be added to the Linear Gauge component using the [`title`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel#title-string) property in the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs1" %}

## Axis Range

The range of the axis can be set using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#minimum-number) and [`maximum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#maximum-number) properties in the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs2" %}

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

## Setting the value of the pointer

The pointer value is changed in the below sample using the [`value`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer#value-number) property in [`pointers`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/pointer) object of the axis.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}
 