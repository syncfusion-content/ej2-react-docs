---
layout: post
title: Getting started with React Progress button component | Syncfusion
description:  Checkout and learn about Getting started with React Progress button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple ProgressButton and to configure it.

## Dependencies

The list of dependencies required to use the ProgressButton component in your application is given as follows:

```js
|-- @syncfusion/ej2-react-splitbuttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
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

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in
[`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install.

To install ProgressButton component, use the following command

```bash
npm install @syncfusion/ej2-react-splitbuttons --save

```

## Adding CSS reference

Import the ProgressButton component required CSS references as follows in `src/App.css`.

```css
/* import the ProgressButton dependency styles */
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

```

## Adding ProgressButton component

Now, you can start adding ProgressButton component in the application. For getting started, add the
ProgressButton component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the ProgressButton.

```ts
import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

// To render ProgressButton.
function App() {

  return (<div style={{marginTop: '150px'}}>
      <ProgressButtonComponent content='Spin Left'/>
    </div>
  );
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Progress button component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs2" %}

> ProgressButton supports different styles, types and sizes like [`Button`](https://ej2.syncfusion.com/react/documentation/button/). In addition, it also supports `top` and `bottom` icon positions.

## See Also

* [Spinner and Progress options](spinner-and-progress#spinner)