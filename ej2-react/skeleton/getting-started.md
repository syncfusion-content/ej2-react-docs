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

To get start quickly with React Skeleton, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=5SvWFJ74uTk" %}

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

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (<SkeletonComponent height='15px'></SkeletonComponent>);
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