---
layout: post
title: Getting started with React Floating action button control | Syncfusion
description:  Checkout and learn about Getting started with React Floating action button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Floating Action Button Component

This section explains how to create a simple Floating Action Button and demonstrate the basic usage of the Floating Action Button component in an React environment.

To get start quickly with React Floating Action Button component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=KO9tydK2D6A" %}

## Dependencies

The list of dependencies required to use the Floating Action Button component in your application is given below:

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

To install Floating Action Button component, use the following command

   ```bash
      npm install @syncfusion/ej2-react-buttons --save
  ```

## Adding Floating Action Button Component to the Application

To include the Floating Action Button component in your application import the `FabComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the Floating Action Button component in application as shown in below code example.

```ts
{ /* Import the Floating Action Button */ }
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';

{ /* To render Floating Action Button. */ }
function App() {
    return (
        <FabComponent id='fab'></FabComponent>
    );
}
export default App;
```

## Adding CSS reference

Import the Floating Action Button component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The following example shows a basic Floating Action Button component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/getting-started-cs1" %}

## Click event

The floating action button control triggers the `onclick` event when you click on the floating action button. You can use this event to perform the required action.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/events-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/events-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/events-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs2" %}