---
layout: post
title: Getting started with React Breadcrumb component | Syncfusion
description:  Checkout and learn about Getting started with React Breadcrumb component of Syncfusion Essential JS 2 and more details.
control: Breadcrumb  
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Breadcrumb component

This section explains how to create a simple Breadcrumb and configure its available functionalities in React.

## Dependencies

The following dependencies are required to use the Breadcrumb component in an application. These packages provide core functionalities for component rendering and navigation.

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

## Set up a development environment

To set up a React application quickly, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> **Note:** To create a React application using `create-react-app`, see this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

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

@import "@syncfusion/ej2-tailwind3-theme/styles/breadcrumb/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Add Breadcrumb to the project

Now, the `Breadcrumb` component can be created in the application. Add the `Breadcrumb` component in `src/App.tsx` file using the following code snippet.

```ts

import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App() {

    return (<BreadcrumbComponent enableNavigation={false} > </BreadcrumbComponent>);
}
export default App;
```

## Run the application

Run the following command to start the development server. This compiles code and serves the application locally.

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

## Add items to the Breadcrumb component

Use the [`items`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb#items) property to bind items for the Breadcrumb component. The example below demonstrates basic rendering with items support.

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

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting [`url`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb#url) property. To prevent breadcrumb item navigation, set [`enableNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb#enablenavigation) property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/enable-navigation-cs1" %}