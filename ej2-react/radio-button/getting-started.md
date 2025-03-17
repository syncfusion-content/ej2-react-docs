---
layout: post
title: Getting started with React Radio button component | Syncfusion
description:  Checkout and learn about Getting started with React Radio button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple RadioButton, and configure its available functionalities in React using React quickstart application.

## Dependencies

The following list of dependencies are required to use the RadioButton component in your application.

```javascript
|-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
  npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

```bash
npx create-react-app my-app --template typescript

cd my-app

npm start

```

To set-up a React application in JavaScript environment, run the following command.

```bash
npx create-react-app my-app

cd my-app

npm start

```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install RadioButton component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding CSS Reference

Import the RadioButton component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Adding RadioButton component to the Application

To include the RadioButton component in your application import the `RadioButtonComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the RadioButton component in application as shown in below code example.

```ts

// Import the RadioButton.
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';

// To render RadioButton.
function App() {
  return (<div style={{marginTop: '150px'}}>
    <RadioButtonComponent label="default" />
  </div>);
}
export default App;
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic RadioButton component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/getting-started-cs1" %}

> You can refer to our [React Radio Button](https://www.syncfusion.com/react-components/react-radio-button) feature tour page for its groundbreaking feature representations. You can also explore our [React Radio Button Example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/button/radio-button) that shows you how to render the Radio Button in React.