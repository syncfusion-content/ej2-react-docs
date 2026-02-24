---
layout: post
title: Getting started with React 3D Circular Chart component | Syncfusion
description:  Checkout and learn about Getting started with React 3D Circular Chart component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React 3D Circular Chart component

This section describes the steps to create a simple 3D Circular Chart and demonstrates the basic usage of the 3D Circular Chart component.

## Dependencies

Below is the list of minimum dependencies required to use the 3D Circular Chart component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

Once you install `@syncfusion/ej2-react-charts`, the other required dependencies will be installed automatically along with the main package.

## Installation and configuration

### Create a React application

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like [`create-react-app`](https://github.com/facebook/create-react-app). For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using [`create-react-app`](https://github.com/facebook/create-react-app) instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](./images/Initial-setup.jpg)

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart package, use the following command

```bash
npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the 3D Circular Chart package inside of the **dependencies** section of the package.json.

## Add 3D Circular Chart to the project

Add the 3D Circular Chart component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { CircularChart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}

import { CircularChart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
  return (<CircularChart3DComponent />);
}
export default App;

{% endhighlight %}
{% endtabs %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

## Pie series

By default, the pie series will be rendered when assigning the JSON data to the series using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/circular3d/circular3dseriesmodel#yname) properties of the series.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/circular-chart/code-path/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/circular-chart/code-path/getting-started/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/preview-sample/getting-started" %}

