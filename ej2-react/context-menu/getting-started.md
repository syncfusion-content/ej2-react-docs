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

This section explains how to create a simple Context Menu and configure its core functionalities in a React application.

## Dependencies

The following dependencies are required to use the Context Menu component:

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

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Set up the Vite project

To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}

After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:

1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.

Navigate into the project directory with:

```
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

To install the React Context Menu component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-navigations

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-navigations

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include default styles in the `src/index.css` and `src/App.css` files. These default styles may conflict with Syncfusion component styles. Clear all content from both files to prevent style conflicts.

The required styles for the Context Menu component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Add Context Menu component

Replace the existing boilerplate content in `src/App.jsx` with the following code to add the Context Menu component to the application.

The `target` prop accepts a CSS selector string that specifies the element on which the Context Menu opens (on right-click or touch hold). The `items` prop accepts an array of menu item objects — each item supports `text`, `iconCss`, and nested `items` for sub-menus. For a full list of supported properties, see the [ContextMenuComponent API reference](https://ej2.syncfusion.com/react/documentation/api/context-menu).

**App.jsx**

```js
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
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ContextMenuComponent target="#target" items={menuItems}/>
      </div>);
}
export default App;
```

## Run the application

To run the project, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs1" %}

 > Refer to the [React Context Menu](https://www.syncfusion.com/react-components/react-context-menu) feature tour page for its groundbreaking feature representations. You can also explore our [React Context Menu component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/context-menu/default) that shows how to render the Context Menu in React.

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multi-level nesting](./template-and-multilevel-nesting)