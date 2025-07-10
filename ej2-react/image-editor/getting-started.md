---
layout: post
title: Getting started with React Image editor component | Syncfusion
description:  Checkout and learn about Getting started with React Image editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started in the React Image Editor component

This section explains how to create and configure a simple [React Image Editor component](https://www.syncfusion.com/react-components/react-image-editor).

To get start quickly with Image Editor Component using React, you can check on this video:

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
```

## Installation and configuration

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

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Image Editor component, use the following command.

  ```bash
   npm install @syncfusion/ej2-react-image-editor --save
   ```

## Adding CSS reference

Import the Image Editor component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

```

## Adding Image editor component to the application

To include the Image Editor component in your application import the `ImageEditorComponent` from `ej2-react-image-editor` package in `App.tsx`.

Add the Image Editor component in application as shown in below code example.

```ts
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
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
