---
layout: post
title: Getting started with React Toolbar component | Syncfusion
description:  Checkout and learn about Getting started with React Toolbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple Toolbar and demonstrate the basic usage of the Toolbar control.

## Dependencies

Below is the list of minimum dependencies required to use the Toolbar component.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-popups
```

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

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
To install Accordion component, use the following command

```
npm install @syncfusion/ej2-react-navigations --save
```

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

@import "@syncfusion/ej2-tailwind3-theme/styles/toolbar/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Initialize the Toolbar with commands

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/react/documentation/api/toolbar#items). An item is rendered with text by defining the default item type as a `Button`. For more information about item configuration, refer the [Item Configuration](./item-configuration) section.

* Import the Toolbar component to your `src/App.tsx` file using following code.

```ts
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";

const ReactApp = () => {
  return (
    <ToolbarComponent id='toolbar'>
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective text="Paste" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" />
        <ItemDirective text="Italic" />
        <ItemDirective text="Underline" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
export default ReactApp;

```

Now run the `npm run dev` command in the console to start the development server. This command compiles the code and serves the application locally in the browser.

```
npm run dev
```
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs2" %}

## Initialize the Toolbar using HTML elements

The Toolbar component can be rendered based on the given HTML element using `<ToolbarComponent>`. You need to follow the below structure of HTML elements to render the Toolbar inside the `<ToolbarComponent>` tag.

```
   <ToolbarComponent>   --> Root Toolbar Element
    <div>      --> Toolbar Items Container
       <div>   --> Toolbar Item Element
       </div>
    </div>
  </ToolbarComponent>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-container-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-container-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-container-cs1" %}

## See Also

* [How to add Toggle Button](./how-to/add-toggle-button)

N> Refer to the [React Toolbar](https://www.syncfusion.com/react-components/react-toolbar) feature tour page for its groundbreaking feature representations. Explore the [React Toolbar Example](https://ej2.syncfusion.com/react/demos/#/tailwind3/toolbar/default) for a demonstration of rendering the Toolbar in React.