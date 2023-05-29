---
layout: post
title: Getting started with React Rating component | Syncfusion
description:  Checkout and learn about Getting started with React Rating component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Rating Control

This section explains how to create a simple Rating and demonstrate the basic usage of the Rating component in an React environment.

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

To install Rating component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding Rating component to the Application

To include the Rating component in your application import the `RatingComponent` from `ej2-react-inputs` package in `App.tsx`.

Add the Rating component in application as shown in below code example.

```ts

{/* Import the Rating.*/}
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

{/* To render Rating. */}
function App() {
  
    return (
        <RatingComponent id='rating'></RatingComponent>
    );
}
export default App;

```

```ts
{ /* Import the Rating.*/ }
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';
{ /* To render Rating. */ }
function App() {
    return (<RatingComponent id='rating'></RatingComponent>);
}
export default App;
```

## Adding CSS Reference

Import the Rating component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
```

## Running the application

Run the application in the browser using the following command:

   ```
   npm start
   ```

The following example shows a basic Rating component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](https://ej2.syncfusion.com/react/documentation/api/rating#value) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/value-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/value-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/value-cs1" %}
