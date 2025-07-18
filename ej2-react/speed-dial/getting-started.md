---
layout: post
title: Getting started with React Speed dial component | Syncfusion
description:  Checkout and learn about Getting started with React Speed dial component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Speed Dial Control

This section explains how to create a simple Speed Dial and demonstrate the basic usage of the Speed Dial component in an React environment.

## Dependencies

The list of dependencies required to use the Speed Dial component in your application is given below:

```js
|-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Installation and Configuration

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Speed Dial component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding Speed Dial component to the Application

To include the Speed Dial component in your application import the `SpeedDialComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the Speed Dial component in application as shown in below code example.

{% raw %}
```ts
{ /* Import the Speed Dial.*/ }
import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';

{ /* To render Speed Dial. */ }
function App() {
    return (
        <SpeedDialComponent id='speeddial'></SpeedDialComponent>
    );
}
export default App;
```
{% endraw %}

## Adding CSS Reference

Import the Speed Dial component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Speed Dial component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/getting-started-cs1" %}
 