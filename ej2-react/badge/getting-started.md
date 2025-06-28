---
layout: post
title: Getting started with React Badge component | Syncfusion
description:  Checkout and learn about Getting started with React Badge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Badge component

The following section explains how to create a simple Badge component using styles and Badge’s basic usage.

## Dependencies

Install the following required dependent package to render the `Badge` component.

```javascript
|-- @syncfusion/ej2-notifications
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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Badge` component, use the following command

```bash
npm install @syncfusion/ej2-notifications --save
```

## Adding CSS Reference

Badge CSS files are available in the `ej2-notifications` package folder. Import the Badge component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
```
> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Initialize the Badge Component

Add an HTML span element with `e-badge` class inside any wrapper element (h1) into your return method.

```ts
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './App.css';

function App() {
  return (
    <h1>Badge Component <span className="e-badge e-badge-primary">New</span></h1>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/badge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/badge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="app.css" %}
{% include code-snippet/badge/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/getting-started-cs1" %}

## See Also

[Types of Badge](./types)
