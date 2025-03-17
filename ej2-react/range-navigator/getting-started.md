---
layout: post
title: Getting started with React Range navigator component | Syncfusion
description:  Checkout and learn about Getting started with React Range navigator component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple range navigator and demonstrate the basic usage of the range navigator control.

## Dependencies

The list of minimum dependencies required to use an range navigator are follows:

```javascript

|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
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

* Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

  ```
   npm install @syncfusion/ej2-react-charts --save
  ```

## Add Range Navigator to the Project

Now, you can start adding range navigator component in the application.
For getting started, add the Chart component in `src/App.tsx` file using following code.

```ts

import * as React from 'react';
import {RangeNavigatorComponent} from '@syncfusion/ej2-react-charts';

function App()  {

    return  (<RangeNavigatorComponent></RangeNavigatorComponent>);

};
export default App;

```

Now run the `npm start` command in the console, it will run your application and open the browser window.

  ```
   npm start
  ```

The below example shows a basic Range Navigator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs17" %}

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic chart to visualize sales data for a particular year. For this application we are going to use line series, tooltip, data label, category axis and legend feature of the chart. Please find the relevant feature service name and description as follows.

* `AreaSeries` - Inject this module in to `services` to use area series.
* `DateTime` - Inject this module in to `services` to use date time feature.
* `RangeTooltip` - Inject this module in to `services` to use tooltip feature.

These modules should be injected to the `services` section as follows,

 ```javascript
import { AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangeTooltip} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App()  {

    return <RangeNavigatorComponent id='charts'>
      <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
    </RangeNavigatorComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

 ```

## Populate Range Navigator with Data

Now, we are going to provide data to the range navigator. Add a [`series`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/) object to the range navigator by using series property. Now map the field names x and y in the JSON data to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/#yname) properties of the series, then set the JSON data to dataSource property.
Since the JSON contains Datetime data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorModel/#valuetype) range Navigator to `Category`. By default, the axis `valueType` is `Numeric`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs18" %}

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable the tooltip by setting the `enable` property as true in tooltip object and by injecting `RangeTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs19" %}