---
layout: post
title: Getting started with React HeatMap chart component | Syncfusion
description:  Checkout and learn about Getting started with React HeatMap chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps required to create a heat map and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component using the following video.

{% youtube "https://www.youtube.com/watch?v=F5H2BMOl_6A" %}

## Dependencies

For using heat map, the following minimum requirements are needed.

```ts
|-- @syncfusion/ej2-react-heatmap
    |-- @syncfusion/ej2-heatmap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
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

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install Heatmap package, use the following command.

```
npm install @syncfusion/ej2-react-heatmap --save
```

## Adding HeatMap to the project

Now, you can start adding HeatMap component in the application. For getting started, add the HeatMap component in `src/App.tsx` file using following code.

  ```ts

  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { HeatMapComponent } from '@syncfusion/ej2-react-heatmap';

   export function App() {
    return ( <HeatMapComponent id='heatmap'></HeatMapComponent> );
  }

  export default App;

 ```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

  ``` 
  npm run dev
  ```

The below example shows a basic HeatMap.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs1" %}

## Module injection

The heat map components are segregated into individual feature-wise modules. To use its feature, you need to inject its feature service in the AppModule. In the current application,the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used. Find the relevant feature modules and descriptions as follows.

  * Legend - Provides the legend feature by injecting it.
  * Tooltip - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into `services`.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HeatMapComponent, Inject, Legend, Tooltip} from '@syncfusion/ej2-react-heatmap';

export function App() {
  return(<HeatMapComponent id='heatmap'>
        <Inject services={[Legend, Tooltip]}/>
        </HeatMapComponent>
        );
}

const root = ReactDOM.createRoot(document.getElementById('heatmap'));
root.render(<App />);

```

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs2" %}

## Enable axis labels

You can add axis labels to the heat map and format those labels using the [xAxis](https://ej2.syncfusion.com/react/documentation/api/heatmap/#xaxis) and [yAxis](https://ej2.syncfusion.com/react/documentation/api/heatmap/#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs3" %}

## Add heat map title

Add a title using the [titleSettings](https://ej2.syncfusion.com/react/documentation/api/heatmap/#titlesettings) property to the heat map to provide quick information to the user about the data populated in the heat map.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs4" %}

## Enable legend

Use a legend for the heat map in the [legendSettings](https://ej2.syncfusion.com/react/documentation/api/heatmap/#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/heatmap/legendSettings/#visible) property to **true** and injecting the `Legend` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs5" %}

## Add data label

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/react/documentation/api/heatmap/#cellsettings) object.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs6" %}

## Add custom cell palette

The default palette settings of the heat map cells can be customized by using the [paletteSettings](https://ej2.syncfusion.com/react/documentation/api/heatmap/#palettesettings) property. Using the [palette](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to fixed or gradient mode using the [type](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteSettings/#type) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs7" %}

## Enable tooltip

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/react/documentation/api/heatmap/#showtooltip) property to **true** and injecting the `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/getting-started-cs8" %}
 