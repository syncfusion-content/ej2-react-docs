---
layout: post
title: Getting started with React Bullet chart component | Syncfusion
description:  Checkout and learn about Getting started with React Bullet chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Getting Started

This section explains you the steps required to create a simple Bullet Chart and demonstrate the basic usage of the Bullet Chart control.

## Dependencies

Below is the list of minimum dependencies required to use the Bullet Chart component.

```javascript

|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

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

Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

  ```
   npm install @syncfusion/ej2-react-charts --save
  ```

## Add Bullet Chart to the Project

Now, you can start adding Bullet Chart component in the application.
For getting started, add the Bullet Chart component in `src/App.tsx` file using following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
    return <BulletChartComponent />;
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
function App() {
    return <BulletChartComponent />;
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm start` command in the console, it will run your application and open the browser window.

   ``` 
    npm start
   ```

The below example shows a basic Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/initialize-cs1" %}

## Module Injection

Bullet Chart are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. Please find the relevant feature service name and description as follows.

* `BulletTooltip` - Inject this module in to `services` to use tooltip feature.

These modules should be injected to the `services` section as follows,


{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { BulletChartComponent, BulletTooltip } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (
      <BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]} />
      </BulletChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { BulletChartComponent, BulletTooltip } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id="bulletChart">
        <Inject services={[BulletTooltip]}/>
      </BulletChartComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endhighlight %}
{% endtabs %}


## Bullet Chart With Data

This section explains how to plot local data to the Bullet Chart.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}

const data = [
    { value: 100, target: 80 },
    { value: 200, target: 180 },
    { value: 300, target: 280 },
    { value: 400, target: 380 },
    { value: 500, target: 480 }
];

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

const data: any[] = [
  { value: 100, target: 80 },
  { value: 200, target: 180 },
  { value: 300, target: 280 },
  { value: 400, target: 380 },
  { value: 500, target: 480 }
];

{% endhighlight %}
{% endtabs %}

Now assign the local data to `dataSource` property. **value** and **target** values should be mapped with `valueField` and `targetField` respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/datasource-cs1" %}

## Add Bullet Chart Title

You can add a title using `title` property to the Bullet Chart to provide quick information to the user about the data plotted in the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/getting-started/title-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/title-cs1" %}

## Ranges

You can add a range using `BulletRangeCollectionDirective` and `BulletRangeDirective` directives of the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/getting-started/ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/ranges-cs1" %}

## Tooltip

You can use tooltip for the Bullet Chart by setting the `enable` property to true in `tooltip` object and by injecting the `BulletTooltip` module into the services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/getting-started/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/getting-started/tooltip-cs1" %}