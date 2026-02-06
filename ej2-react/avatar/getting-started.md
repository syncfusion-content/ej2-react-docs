---
layout: post
title: Getting started with React Avatar component | Syncfusion
description:  Checkout and learn about Getting started with React Avatar component of Syncfusion Essential JS 2 and more details.
control: Avatar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Avatar component

This section explains how to create a simple **Avatar** using styles in the React framework.

## Dependencies

The Avatar component is a pure CSS-based component and does not require any JavaScript dependencies for rendering.

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools such as `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite configures the project using JavaScript or TypeScript and streamlines the build process for production environments.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Avatar` component, use the following command

```bash
npm install @syncfusion/ej2-layouts --save
```

## Adding CSS Reference

The Avatar CSS files include base styles from `@syncfusion/ej2-base` and component styles from `@syncfusion/ej2-layouts`. Add the following CSS references to the `src/App.css` file to apply the required styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
```

## Adding a simple Avatar

Add a `div` element with the `e-avatar` class in the `App.tsx` file:

```bash
<div className="e-avatar">AJ</div>
```

## Run the application

Run the `npm run dev` command to start the development server. This command compiles the application and serves it locally in the browser.

```bash
npm run dev
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/avatar/getting-started-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/avatar/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/getting-started-cs1" %}

## See Also

[Types of Avatar](./types)
