---
layout: post
title: Getting started with React Block Editor component | Syncfusion
description: Checkout and learn about Getting started with React Block Editor component of Syncfusion Essential JS 2 and more details.
control: Block Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React Block Editor Component

This section explains how to create a simple Block Editor and configure its available functionalities in the React environment.

## Create a React Application

Run the following commands to set up a React application:

```bash
npm create vite@latest my-app -- --template react-ts
```

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![Block Editor Initial setup](images/initial_setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```
cd my-app
npm install
```

> **Note:** To set up a React application with Nextjs or Remix, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start) for more details.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Block Editor component package, use the following command:

```bash
npm install @syncfusion/ej2-react-blockeditor --save
```
## Adding CSS reference

Import the required CSS theme files for the Block Editor and its dependencies in your `src/App.css` file.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-react-blockeditor/styles/tailwind3.css";
```

## Add the Block Editor Component

Now, you can start adding Block Editor component in the application. For getting started, add the Block Editor component by using `<BlockEditorComponent>` tag directive in `src/App.tsx` file using following code. Now place the below Block Editor code in the `src/App.tsx`.

{% raw %}
```ts
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the blockeditor component
        <BlockEditorComponent id="blockeditor"></BlockEditorComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('blockeditor'));
```
{% endraw %}


## Run the application

Now, run the `npm run dev` command in your terminal to start the development server. This command compiles the code and opens the application in your default web browser.

```
npm run dev
```

The following example shows a basic Block Editor component.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/block-editor/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/block-editor/getting-started/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/block-editor/getting-started" %}