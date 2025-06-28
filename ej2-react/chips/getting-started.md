---
layout: post
title: Getting started with React Chips component | Syncfusion
description:  Checkout and learn about Getting started with React Chips component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Chips component

This section explains how to create a simple Chip and to configure the Chip component.

To get start quickly with React Chips, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=KH_Bi3yTOZ4" %}

## Dependencies

The list of dependencies required to use the Chip component in your application is given below:

```javascript
|-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-react-base
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

To install Chip component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding CSS Reference

Import the Chip component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
```

## Adding Chip component to the Application

To include the Chip component in your application import the `ChipListComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the Chip component in application as shown in below code example.


```ts
import * as React from 'react';
import './App.css';
// Import the Button.
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';

// To render Button.
function App() {
  return (
    <ChipListComponent text="Janet Leverling"></ChipListComponent>
  );
}
export default App;
```

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Chip component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs2/index.css %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/chips/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chips/default-cs2" %}