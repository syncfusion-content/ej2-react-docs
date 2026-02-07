---
layout: post
title: Getting started with React Image Editor component | Syncfusion
description:  Check out and learn about getting started with the React Image Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the React Image Editor component

This section explains how to create and configure a simple [React Image Editor component](https://www.syncfusion.com/react-components/react-image-editor).

To get started quickly with the Image Editor component in React, watch the following video:

{% youtube "https://www.youtube.com/watch?v=1Fjuk5Dn3BU" %}

## Dependencies

The list of dependencies required to use the Image Editor component in your application is given below:

```javascript
|-- @syncfusion/ej2-react-image-editor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-dropdowns
```

## Installation and configuration

To easily set up a React application, use Vite, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusion) public registry.

To install the Image Editor component, use the following command.

```bash
npm install @syncfusion/ej2-react-image-editor --save
```

## Adding CSS reference

Import the required CSS for the Image Editor component in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

## Adding Image Editor component to the application

To include the Image Editor component in your application, import the `ImageEditorComponent` from the `ej2-react-image-editor` package in `App.tsx`.

Add the Image Editor component to the application as shown in the following example.

```ts
import React from 'react';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import './App.css';

function App() {
  return (
    <div id="container">
      <ImageEditorComponent width="550px" height="350px" />
    </div>
  );
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Image Editor component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
      
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs6" %}

> You can also explore our [React Image Editor example](https://ej2.syncfusion.com/react/demos/#/material/image-editor/getting-started) that shows how to render the Image Editor in React.
