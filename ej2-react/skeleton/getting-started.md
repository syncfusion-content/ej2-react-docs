---
layout: post
title: Getting started with React Skeleton component | Syncfusion
description:  Checkout and learn about Getting started with React Skeleton component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Skeleton, and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the Skeleton component in your application.

```js
|-- @syncfusion/ej2-react-notifications
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-notifications
      |-- @syncfusion/ej2-base
```

## Setup your development environment

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup
the applications.

To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

```bash

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

```bash

create-react-app quickstart

cd quickstart

```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Skeleton` component, use the following command

```bash
npm install @syncfusion/ej2-react-notifications --save
```

The above command installs [Skeleton dependencies](./getting-started#dependencies)
which are required to render the component in the `React` environment.

## Adding style sheet to the Application

Add Skeleton component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";

```

## Add Skeleton to the Application

Now, you can create `Skeleton` component in the application. Add `Skeleton` component in `src/App.tsx` file using the following code snippet.



```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';

function App() {

  return (
    <SkeletonComponent height='15px'></SkeletonComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Skeleton component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}

## Initialize as CSS component

The React Skeleton component can be initialized through CSS by utilizing predefined class names representing the shape, animation effect of the skeleton.

| Class | Description |
| -------- | -------- |
| e-skeleton | Base class to add the Skeleton to the element. |
| e-skeleton-`shapeName` |  Defines the Skeleton shape where `shapeName` defines the name of the shape  |
| e-shimmer-`animation` |  Defines the type of Skeleton `animation` effect where animation defines the name of the animation effect |

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <div style={{
      margin: '9px',
      width: '200px',
      height: '20px'
    }} className="content e-skeleton e-skeleton-text e-shimmer-pulse"></div>
  );
}
export default App;
```

## Visible

You can use the [`visible`](https://ej2.syncfusion.com/react/documentation/api/skeleton#visible) property which defines the visible state of Skeleton.

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Circle' width= "60px" visible={false}></SkeletonComponent>);
}
export default App;
```