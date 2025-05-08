---
layout: post
title: Getting started with React Spinner component | Syncfusion
description:  Checkout and learn about Getting started with React Spinner component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

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


# Getting Started

Initialize the Spinner using `createSpinner` method.

You can show/hide Spinner by using `showSpinner` and `hideSpinner` methods accordingly. You need to set target to render based on specific target.

The following steps explains you on how to create and how to show/hide your Spinner.

*Import the `createSpinner` method from `ej2-popups` library into your file as shown in below.

```
import { createSpinner } from '@syncfusion/ej2-popups';
```

*Show and hide this spinner by using `showSpinner` and `hideSpinner` methods for loading in your page and import them in your file as shown in below.

```
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
```

## Create the Spinner globally

The Spinner can be render globally in a page using public exported functions of the `ej2-popups` package.

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