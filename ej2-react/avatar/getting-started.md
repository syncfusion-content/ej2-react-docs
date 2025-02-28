---
layout: post
title: Getting started with React Avatar component | Syncfusion
description:  Checkout and learn about Getting started with React Avatar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Avatar component

This section explains how to create a simple **Avatar** using Styles in the React Framework

## Dependencies

The Avatar Component is a pure CSS component so no specific dependencies to render the avatar.

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

```bash
npx create-react-app my-app --template typescript

cd my-app

npm start
```

To set-up a React application in JavaScript environment, run the following command.

```bash
npx create-react-app my-app

cd my-app

npm start
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Avatar` component, use the following command

```bash
npm install @syncfusion/ej2-layouts --save
```

## Adding CSS Reference

The Avatar CSS files are available in the `ej2-layouts` package folder. This can be referenced in your application using the following code in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding a simple Avatar

Add the HTML `div` element with `e-avatar` class into your `App.tsx`.

```bash
<div className="e-avatar">AJ</div>
```

## Run the application

Run the application in the browser using the following command:

```bash
npm start
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/getting-started-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/avatar/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/avatar/getting-started-cs1" %}

## See Also

[Types of Avatar](./types)
