---
layout: post
title: Getting started with React BlockEditor component | Syncfusion
description: Checkout and learn about Getting started with React BlockEditor component of Syncfusion Essential JS 2 and more details.
control: BlockEditor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React BlockEditor Component

This section explains how to create a simple BlockEditor and configure its available functionalities in the React environment.

## Dependencies

The following list of dependencies is required to use the BlockEditor component in your application.

```js
|-- @syncfusion/ej2-react-blockeditor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
```

## Setup for Local Development

To easily set up a React application, use `create-Vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

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

To install BlockEditor component, use the following command

```bash
npm install @syncfusion/ej2-react-blockeditor --save
```

## Adding BlockEditor component

Now, you can start adding BlockEditor component in the application. For getting started, add the BlockEditor component by using `<BlockEditorComponent>` tag directive in `src/App.tsx` file using following code. Now place the below BlockEditor code in the `src/App.tsx`.

`[Class-component]`

```ts

import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the Speech to text component
        <BlockEditorComponent id='blockeditor'></BlockEditorComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blockeditor'));
```

`[Functional-component]`

```ts
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the Speech to text component
        <BlockEditorComponent id="blockeditor"></BlockEditorComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('blockeditor'));
```

## Adding CSS Reference

Import the BlockEditor component required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-blockeditor/styles/material.css";
```
## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic BlockEditor component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/block-editor/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/block-editor/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/block-editor/getting-started/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/block-editor/getting-started/index" %}