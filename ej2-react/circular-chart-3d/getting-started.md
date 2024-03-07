---
layout: post
title: Getting started with React Circular Chart 3D component | Syncfusion
description:  Checkout and learn about Getting started with React Circular Chart 3D component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Getting started

This section explains you the steps required to create a simple Circular Chart 3D and demonstrate the basic usage of the Circular Chart 3D control.

## Dependencies

Below is the list of minimum dependencies required to use the Circular Chart 3D component.

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

* Install Syncfusion packages using below command.

   ```
    npm install @syncfusion/ej2-react-charts --save
   ```

## Add Circular Chart 3D to the project

Now, you can start adding Circular Chart 3D component in the application.
For getting started, add the Circular Chart 3D component in `src/App.tsx` file using following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}

import { CircularChart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

import { CircularChart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

**Pie Series**

By default, the pie series will be rendered when assigning the JSON data to the series using the `dataSource` property. Map the field names in the JSON data to the `xName` and `yName` properties of the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/getting-started" %}

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```