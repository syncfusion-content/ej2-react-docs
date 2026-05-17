---
layout: post
title: Getting started with React Treegrid component | Syncfusion
description:  Checkout and learn about Getting started with React Treegrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TreeGrid

This section outlines the steps to create a simple Essential JS 2 TreeGrid and demonstrates basic usage in a React application.

For a quick start with React TreeGrid, refer to this video:

{% youtube "https://www.youtube.com/watch?v=dQcIAoSgARc" %}

## Setup for local development

To set up a React application, choose between two popular tools: **Vite** or **create-react-app**.

**Vite is recommended** for new projects because it provides:
- **Faster development server**: Vite uses native ES modules during development, resulting in significantly faster startup times and Hot Module Replacement (HMR) compared to traditional bundler.
- **Smaller bundle sizes**: Optimized production builds with less overhead.
- **Better performance during development**: Especially valuable when working with large component libraries like Syncfusion.
- For detailed steps, refer to the [Vite installation guide](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

**create-react-app** remains a valid choice when a traditional setup is preferred, organizational requirements exist, or an existing create-react-app project is in use. For more information, refer to the [create-react-app documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application with Vite, run the following command:

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```
To set up a React application in a JavaScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeGrid packages

To install the TreeGrid component, use the following command:

```
npm install @syncfusion/ej2-react-treegrid --save
```

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-treegrid/styles/tailwind3.css";
```

## Adding TreeGrid component

The treegrid code should be placed in the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/treegrid/getting-started/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/treegrid/getting-started/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/treegrid/getting-started/app/App.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs1" %}

## Run the application

```
npm run dev
```

## See Also

* [Grid Feature Modules](./module)
* [Getting Started with Syncfusion JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)