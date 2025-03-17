---
layout: post
title: Getting started with React Button group component | Syncfusion
description:  Checkout and learn about Getting started with React Button group component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple ButtonGroup, and configure its available functionalities in React by using the React quickstart application.

## Dependencies

The list of dependencies required to use the ButtonGroup component in your application is given below:

```javascript
|-- @syncfusion/ej2-splitbuttons
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

To install ButtonGroup component, use the following command

```bash
npm install @syncfusion/ej2-splitbuttons --save
```

## Adding CSS Reference

Import the ButtonGroup component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
```

## Adding ButtonGroup component to the Application

To include the ButtonGroup component in your application, add a HTML div tag with class name as `e-btn-group` and to render button
as react component, [`Button dependencies`](./../button/getting-started#dependencies) should be added.

Then import the `ButtonComponent` from `ej2-react-buttons` package and add button
elements that should be group inside the div in `App.tsx`.

Add the ButtonGroup component in application as shown in below code example.



```ts
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';
// Import the Button.

// To render ButtonGroup.
function App() {
  return (
    <div className='e-btn-group' style={{marginTop: '150px'}}>
      <ButtonComponent>HTML</ButtonComponent>
      <ButtonComponent>CSS</ButtonComponent>
      <ButtonComponent>Javascript</ButtonComponent>
    </div>
  );
}
export default App;

```

## Run the application

Run the application in the browser by using the following command:

  ```
    npm start
  ```

The following example shows a basic ButtonGroup component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs1" %}

## See Also

* [Initialize ButtonGroup using util function](./how-to/initialize-buttongroup-using-util-function)