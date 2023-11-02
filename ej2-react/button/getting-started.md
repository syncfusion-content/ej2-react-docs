---
layout: post
title: Getting started with React Button component | Syncfusion
description:  Checkout and learn about Getting started with React Button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Button and to configure the Button component.

To get start quickly with Button Component using React, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=93oXeCB13A0" %}

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

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

Start a new project using create-react-app command as follows

<div class='tsx'>

```bash

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

</div>

<div class='jsx'>

```bash

create-react-app quickstart

cd quickstart

```

</div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Button component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding Button component to the Application

To include the Button component in your application import the `ButtonComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the Button component in application as shown in below code example.



```ts

// Import the Button.
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';

// To render Button.
function App() {
  return (
    <ButtonComponent>Button</ButtonComponent>
  );
}
export default App;
```

```ts
// Import the Button.
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';
// To render Button.
function App() {
    return (<ButtonComponent>Button</ButtonComponent>);
}
export default App;
```

## Adding CSS Reference

Import the Button component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Button component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/default-cs1" %}

> You can refer to our [React Button](https://www.syncfusion.com/react-ui-components/react-button) feature tour page for its groundbreaking feature representations. You can also explore our [React Button example]( https://ej2.syncfusion.com/react/demos/#/material/button/default) that shows how to render the Button in React.

## See Also

* [Types of Button](./types-and-styles#button-types)