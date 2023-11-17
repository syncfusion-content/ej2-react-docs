---
layout: post
title: Getting started with React Checkbox Component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion Essential React Checkbox component, its elements and more.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Checkbox Component

This section explains how to create a simple CheckBox, and configure its available functionalities in React, using React quickstart application.

## Dependencies

The following list of dependencies are required to use the CheckBox component in your application.

```javascript
|-- @syncfusion/ej2-react-buttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

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

To install CheckBox component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding CheckBox component to the Application

To include the CheckBox component in your application import the `CheckBoxComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the CheckBox component in application as shown in below code example.



```ts
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';
// Import the CheckBox.

// To render CheckBox.
function App() {
  render() {
    return (
      <CheckBoxComponent label="Default" />
    );
  }
}
export default App;

```

```ts
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';
// Import the CheckBox.
// To render CheckBox.
function App() {
    render();
    {
        return (<CheckBoxComponent label="Default"/>);
    }
}
export default App;
```

## Adding CSS Reference

Import the CheckBox component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

   ```
    npm start
   ```

The following example shows a basic CheckBox component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/getting-started-cs1" %}