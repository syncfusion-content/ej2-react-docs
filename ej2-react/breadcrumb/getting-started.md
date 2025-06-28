---
layout: post
title: Getting started with React Breadcrumb component | Syncfusion
description:  Checkout and learn about Getting started with React Breadcrumb component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Breadcrumb, and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the Breadcrumb component in your application.

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

To install `Breadcrumb` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [Breadcrumb dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add Breadcrumb component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

```

## Add Breadcrumb to the project

Now, you can create `Breadcrumb` component in the application. Add `Breadcrumb` component in `src/App.tsx` file using the following code snippet.



```ts

import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App() {

    return (<BreadcrumbComponent enableNavigation={false} > </BreadcrumbComponent>);
}
export default App;
```

```ts
import { BreadcrumbComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    return (<BreadcrumbComponent enableNavigation={false}> </BreadcrumbComponent>);
}
export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The following example shows a basic Breadcrumb component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs5" %}

## Add Items to the Breadcrumb Component

Use `items` property to bind items for Breadcrumb component. The below example demonstrates the basic rendering of Breadcrumb with items support.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs6" %}

## Enable or Disable Navigation

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting `Url` property. To prevent breadcrumb item navigation, set `enableNavigation` property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/enable-navigation-cs1" %}