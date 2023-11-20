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

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

     ```bash
       npm install -g create-react-app
     ```

Start a new project using create-react-app command as follows

      ```
       create-react-app quickstart --scripts-version=react-scripts-ts
       cd quickstart
    ```
    ```
    create-react-app quickstart
    cd quickstart
    ```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Speed Dial component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

## Adding Speed Dial component to the Application

To include the Speed Dial component in your application import the `SpeedDialComponent` from `ej2-react-buttons` package in `App.tsx`.

Add the Speed Dial component in application as shown in below code example.

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

## Adding CSS Reference

Import the Speed Dial component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

```
npm start
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
