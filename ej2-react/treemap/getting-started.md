---
layout: post
title: Getting started with React Treemap component | Syncfusion
description:  Checkout and learn about Getting started with React Treemap component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a TreeMap control and demonstrate its basic usage.

## Dependencies

The following list of minimum dependencies are required to use the TreeMap control:

```ts
|-- @syncfusion/ej2-react-treemap
    |-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
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

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install TreeMap package, use the following command.

```
npm install @syncfusion/ej2-react-treemap --save
```

### Add TreeMap to project

Now, the TreeMap component can be added in the application. To initialize the TreeMap control in the React application, import the TreeMap control in the **src/App.js**
or **src/App.tsx** as per the application. Please use the below code to include the TreeMap component in the application.

```tsx

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

export function App() {
  return ( <TreeMapComponent 
        height= '350px'
        dataSource={[
            { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
            { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 1 },
            { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
            { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
            { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
            ]}
            weightValuePath='Count'
            leafItemSettings= { {
                labelPath: 'State'
            }}>
        </TreeMapComponent> );
}

export default App;

```

### Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

## Module injection

The TreeMap control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `<Inject services={} />` method. You can find the modules available in TreeMap and their descriptions below.

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

## Render TreeMap

This section explains how to render the TreeMap with data source. In the below example, TreeMap is modified to visualize international airport count in South America.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}

Here, the TreeMap is created with data source and the `weightValuePath` property is set to the data source's **count** field as the value. The leaf level items of TreeMap can be customized using `leafItemSettings`. `leafItemSettings` allows you to change properties such as `fill`, `border`, and `labelPosition`.

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from the values that have to be compared for the item in the equalColorValuePath or rangeColorValuePath property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treemap/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treemap/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs2" %}

## Enable legend

You can show legend for the TreeMap by setting the visible property to true in legendSettings object and injecting the `TreeMapLegend` module using the `<Inject services={[TreeMapLegend]} />`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treemap/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treemap/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs3" %}

## Add labels

The labels are added to show additional information of the items in TreeMap. By default, the visibility of the label is true. This can be customized using the showLabels property in leafItemSettings.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treemap/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treemap/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs4" %}

## Enable tooltip

The tooltips are used when labels cannot display information due to space constraints. Tooltips can be enabled by setting the visible property to true in tooltipSettings object and injecting the `TreeMapTooltip` module using the `<Inject services={[TreeMapTooltip]} />`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treemap/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treemap/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs5" %}
 