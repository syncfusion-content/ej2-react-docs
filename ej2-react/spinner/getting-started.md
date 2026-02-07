---
layout: post
title: Getting started with React Spinner component | Syncfusion
description:  Checkout and learn about Getting started with React Spinner component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Spinner component

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages


All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can select the specific component you want to install. For this application, the Spinner component will be used.


To install the Spinner component, use the following command:

```bash
npm install @syncfusion/ej2-react-popups --save
```

## Adding CSS Reference

To render the Spinner component, need to import Spinner and its dependent component's styles as given below in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding Spinner to the application

Initialize the Spinner using the `createSpinner` method.


You can show or hide the Spinner by using the `showSpinner` and `hideSpinner` methods. The `target` property must be set to specify where the Spinner should be rendered.


The following steps explain how to create and show or hide your Spinner.


*Import the `createSpinner` method from the `ej2-popups` library into your file as shown below:

```
import { createSpinner } from '@syncfusion/ej2-popups';
```


*Show and hide the spinner by using the `showSpinner` and `hideSpinner` methods for loading in your page. Import them into your file as shown below:

```
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```


## Create the Spinner globally

The Spinner can be rendered globally on a page using the public exported functions of the `ej2-popups` package.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/intro-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/intro-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/intro-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spinner/intro-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spinner/intro-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spinner/intro-cs2" %}