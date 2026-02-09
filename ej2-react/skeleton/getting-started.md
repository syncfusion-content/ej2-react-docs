---
layout: post
title: Getting Started with the React Skeleton Component | Syncfusion
description: Learn how to quickly set up and use the Syncfusion React Skeleton component, including dependencies, installation, and configuration details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Getting Started with the React Skeleton Component

This section describes how to create a basic Skeleton component and configure its available features in a React application.

To get started quickly with the React Skeleton component, refer to the following video.

{% youtube "https://www.youtube.com/watch?v=5SvWFJ74uTk" %}


## Dependencies

The following dependencies are required to use the Skeleton component in a React application:

```js
|-- @syncfusion/ej2-react-notifications
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-base
```


## Set up your development environment

To set up a React application, use `vite` for a fast development experience, smaller bundle sizes, and optimized builds. For detailed steps, see the Vite [installation instructions](https://vitejs.dev/guide/). Vite configures your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application with TypeScript, run:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application with JavaScript, run:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Skeleton component, use the following command:

```bash
npm install @syncfusion/ej2-react-notifications --save
```

This command installs the [Skeleton dependencies](./getting-started#dependencies) required to render the component in a React environment.


## Adding style sheet to the application

Add the Skeleton component's styles in `App.css` as shown below:

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
```


## Add Skeleton to the application

You can now add the `Skeleton` component to your application. Insert the `Skeleton` component in the `src/App.tsx` file using the following code snippet:

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import './App.css';

function App() {
    return (
        <SkeletonComponent height='15px'></SkeletonComponent>
    );
}

export default App;
```


## Run the application

Run the following command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example demonstrates a basic Skeleton component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/skeleton/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
