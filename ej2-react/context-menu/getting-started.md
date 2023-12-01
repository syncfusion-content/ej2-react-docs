---
layout: post
title: Getting started with React Context menu component | Syncfusion
description:  Checkout and learn about Getting started with React Context menu component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Getting Started

This section explains how to create a simple ContextMenu, and configure its available functionalities in React

## Dependencies

The following list of dependencies are required to use the ContextMenu component in your application.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setup your development environment

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.

To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

<div class='tsx'>

```
npx create-react-app my-app --template typescript

cd my-app

npm start

```

</div>

To set-up a React application in JavaScript environment, run the following command.

<div class='jsx'>

```
npx create-react-app my-app

cd my-app

npm start

```

</div>

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `ContextMenu` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [ContextMenu dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add ContextMenu component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

/* Context Menu target */

#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}

```

## Add ContextMenu to the project

Now, you can add `ContextMenu` component in the application. For getting started, add `ContextMenu` component in `src/App.tsx` file and the options contain `menuItems` and `target` in which ContextMenu will be opened. Using the following code snippet.



```ts

import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import './App.css';

function App() {
  let menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

    return (
      // specifies the tag to render the ContextMenu component
      <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ContextMenuComponent target="#target" items={menuItems} />
      </div>
    );
}
export default App;  
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic ContextMenu component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs1" %}

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multi-level nesting](./template#multilevel-nesting)