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

To get started with the React application, [create-react-app](https://github.com/facebookincubator/create-react-app) can be used to setup the application. To install **create-react-app** run the following command.

<div class='jsx'>

```
npm install -g create-react-app
```

</div>

To create basic React application, run the following command.

<div class='jsx'>

```
create-react-app quickstart
```

</div>

Now, the application is created in the **quickstart** folder. Run the following command one-by-one to navigate to the **quickstart** folder, and install the required **npm**  packages.

```
cd quickstart

npm install
```

> In the **quickstart** application, the Syncfusion component is added in the JavaScript file.

### Creating a React application with TypeScript

To create React application with TypeScript, use the following command.

<div class='jsx'>

```
create-react-app quickstart --template typescript
```

</div>

Now, the application is created in the **quickstart** folder. Run the following command one-by-one to navigate to the **quickstart** folder, and install the required **npm** packages.

```
cd quickstart

npm install
```

### Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install TreeMap package, use the following command.

```
npm install @syncfusion/ej2-react-treemap --save
```

### Add TreeMap to project

Now, the TreeMap component can be added in the application. To initialize the TreeMap control in the React application, import the TreeMap control in the **src/App.js**
or **src/App.tsx** as per the application. Please use the below code to include the TreeMap component in the application.

```ts

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

export function App() {
  return ( <TreeMapComponent ></TreeMapComponent> );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```

### Run the application

Since any data source has not been bound to the TreeMap, no item will be rendered. Only an empty SVG element is appended to the TreeMap container.

The TreeMap control is now included in the **quickstart** application. Use the following command to run the application.

```
npm start
```

## Module injection

The TreeMap control is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `<Inject services={} />` method. Find the modules available in TreeMap and their descriptions as follows.

* TreeMapHighlight - Inject this provider to use highlight feature.
* TreeMapSelection - Inject this provider to use selection feature.
* TreeMapLegend - Inject this provider to use legend feature.
* TreeMapTooltip - Inject this provider to use tooltip series.

In the current application, the above basic TreeMap is modified to visualize international airport count in South America.

In this demo, the TreeMap is just rendered with labels. For this, you need not to import any modules.

## Render TreeMap

This section explains how to render the TreeMap with data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}

Here, the TreeMap is created with data source and set with the weightValuePath as count. You can customize the leaf level TreeMap items using the leafItemSettings. The properties such as fill, border, and labelPosition can be changed using the leafItemSettings.

## Apply color mapping

The color mapping feature supports customization of item colors based on the underlying value of item received from bound data source. Specify the field name from the values that have to be compared for the item in the equalColorValuePath or rangeColorValuePath property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs2" %}

## Enable legend

You can show legend for the TreeMap by setting the visible property to true in legendSettings object and injecting the `TreeMapLegend` module using the `<Inject services={[TreeMapLegend]} />`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs3" %}

## Add labels

The labels are added to show additional information of the items in TreeMap. By default, the visibility of the label is true. This can be customized using the showLabels property in leafItemSettings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs4" %}

## Enable tooltip

The tooltips are used when labels cannot display information due to space constraints. Tooltips can be enabled by setting the visible property to true in tooltipSettings object and injecting the `TreeMapTooltip` module using the `<Inject services={[TreeMapTooltip]} />`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs5" %}
