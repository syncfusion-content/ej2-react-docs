---
layout: post
title: Getting started with React Sparkline component | Syncfusion
description:  Checkout and learn about Getting started with React Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a sparkline and demonstrate its basic usage.

## Dependencies

The following list of minimum dependencies are required to use the sparkline:

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

## Installation and Configuration

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```
    npm install -g create-react-app
   ```

* To set-up a React application in TypeScript environment, run the following command.

    ```
     create-react-app quickstart --template typescript
     cd quickstart
     npm start
   ```
* To set-up a React application in JavaScript environment, run the following command.
   ```
    create-react-app quickstart
    cd quickstart
    npm start
   ```
* Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

    ```
    npm install @syncfusion/ej2-react-charts --save
    ```

## Add Sparkline to the Project

Now, you can start adding Sparkline component in the application. For getting started, add the Sparkline component in `src/index.tsx` file using following code.



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

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```

Since the data source has not been specified to the sparkline, no shape will be rendered. Only an empty SVG element is appended to the sparkline container.

## Module Injection

The sparkline component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `<Inject services={} />` method. The module available in sparkline and its descriptions is as follows.

* SparklineTooltip - Inject this provider to use tooltip series.

In the current application, the above basic sparkline is modified to visualize the types of sparkline.

In this application, tooltip feature of the sparkline is used. Now, import the SparklineTooltip module from the sparkline package, and inject it into the sparkline control using the `Sparkline.Inject` method.



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

## Bind data source to Sparkline

The dataSource property is used for binding data source to the sparkline. This property takes the collection value as input. For example, the list of objects can be provided as input.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs1" %}

## Change the type of Sparkline

You can change the sparkline type by setting the [`type`] property to [`Line`], [`Column`], [`WinLoss`], [`Pie`], or [`Area`]. Here, the sparkline type has been set to [`area`].

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs2" %}

## Enable tooltip for Sparkline

The sparkline displays additional information through tooltip when the mouse is hovered over the sparkline. You can enable tooltip by setting the [`visible`] property to true in [`tooltipSettings`] and injecting `SparklineTooltip` module using the `Sparkline.Inject(SparklineTooltip )` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs3" %}