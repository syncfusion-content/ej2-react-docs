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

To get started quickly with the React Skeleton component, you can check out this video.

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

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

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
        <SkeletonComponent height='15px'></SkeletonComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev

```

The following example shows a basic Skeleton component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
