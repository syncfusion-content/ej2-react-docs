---
layout: post
title: Getting started with React Context menu component | Syncfusion
description:  Checkout and learn about Getting started with React Context menu component of Syncfusion Essential JS 2 and more details.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Context menu component

This section explains how to create a simple ContextMenu and configure its core functionalities in a React application.

## Dependencies

The following dependencies are required to use the ContextMenu component:

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

## Setup a development environment

To quickly set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

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

To install `ContextMenu` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [ContextMenu dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/context-menu/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Add ContextMenu to the project

Create the `ContextMenu` component in the application. Add the ContextMenu component to the `src/App.tsx` file. The component uses items for `menu` options and a `target` property to specify where the ContextMenu will open.

**App.tsx**

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
**App.jsx**

```ts
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import './App.css';
function App() {
    let menuItems = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }
    ];
    return (
    // specifies the tag to render the ContextMenu component
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ContextMenuComponent target="#target" items={menuItems}/>
      </div>);
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic ContextMenu component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/context-menu/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/context-menu/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs1" %}

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multi-level nesting](./template-and-multilevel-nesting)