---
layout: post
title: Getting started with React Switch component | Syncfusion
description:  Checkout and learn about Getting started with React Switch component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Switch, and configure its available functionalities in React, using React quickstart application.

## Dependencies

The following list of dependencies are required to use Switch component in your application.

```javascript
|-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Installation and Configuration

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
  npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

<div class='tsx'>

```
npx create-react-app my-app --template typescript

cd my-app

npm start

```

</div>

To set-up a React application in JavaScript environment, run the following command.

<div class='tsx'>

```
npx create-react-app my-app

cd my-app

npm start

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Switch component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding CSS Reference

Import the Switch component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Adding Switch component to the Application

To include Switch component in your application import the `SwitchComponent` from `ej2-react-buttons` package in `App.tsx`.

Add Switch component in application as shown in below code example.

```ts
// Import the Switch.
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';
// To render Switch.
function App() {
    return ( <div style={{marginTop: '150px'}}><SwitchComponent /></div>);
}
export default App;
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Switch component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/getting-started-cs1" %}

## See Also

* [How to customize the switch appearance](./how-to/customize-the-appearance-of-a-switch)