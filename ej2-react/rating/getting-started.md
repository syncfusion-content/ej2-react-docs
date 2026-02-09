---
layout: post
title: Getting Started with React Rating | Syncfusion
description: Learn how to get started with the React Rating component in Syncfusion Essential JS 2, including installation with Vite, configuration, and required styles.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Rating Component

This section explains how to create a simple rating and demonstrate the basic usage of the Rating component in a React environment.

## Dependencies

The list of dependencies required to use the Rating component in your application is given below:

```js
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-popups
```

## Installation and Configuration

To easily set up a React application, use Vite, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to tools like Create React App. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> Note: To create a React application using Create React App, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published on the public npm registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). To install the Rating component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding Rating to the Application

To include the Rating component in your application, import the `RatingComponent` from the `ej2-react-inputs` package in `App.tsx`.

Add the Rating component to the application as shown in the following example.

```ts
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

function App() {
  return (
    <RatingComponent id='rating'></RatingComponent>
  );
}
export default App;
```

## Adding CSS Reference

Import the Rating component's required CSS in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application

## Running the application

Run the `npm run dev` command in the console to start the development server. This compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Rating component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rating/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rating/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/react/documentation/api/rating/index-default#value) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rating/value-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rating/value-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/value-cs1" %}
