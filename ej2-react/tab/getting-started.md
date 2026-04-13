---
layout: post
title: Getting started with React Tab component | Syncfusion
description:  Checkout and learn about Getting started with React Tab component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Tab Component

This section explains how to create a simple **Tab** component and configure the Tab header content in a React application.

To get started quickly with React Tabs using Create React App, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=k1yvVlO-RN8" %}

## Dependencies

The following is the list of dependencies required to use the Tab component in your application.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-buttons
        |-- @syncfusion/ej2-popups
```

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes the application for production.

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
To install Tab component, use the following command

```
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-navigations/styles/tailwind3.css';

```

> To refer `App.css` in the application then import it in the `src/App.tsx` file

## Initialize the Tab using JSON items collection

The Tab can be rendered by defining a JSON array. The item is rendered with [`header`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#header) text and [`content`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#content) for each Tab.

*   Import the Tab component into the `src/App.tsx` file using the following code.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/tab/tab-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/tab/tab-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}


Now run the `npm run dev` command in the console to start the development server. This command compiles the code and serves the application locally in the browser.

```
npm run dev
```

 {% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}

> In the above sample code, `element` is the `id` of the HTML element in a page to which the Tab is initialized.

## Initialize the Tab using HTML elements

The Tab component can be rendered based on the given HTML element using `<TabComponent>` tag. Header section must be enclosed with in a wrapper element using `e-tab-header` class and corresponding content must be mapped with `e-content` class.

Use the following HTML structure to render the Tab:

```

  <TabComponent id='defaultTab'>   --> Root Tab element
    <div class="e-tab-header">      --> Tab header
       <div>   --> Header Item
       </div>
    </div>
    <div class="e-content">      --> Tab content
       <div>   --> Content Item
       </div>
    </div>
  </TabComponent>

```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/tab/tab-container-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/tab/tab-container-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tab/tab-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/tab-container-cs1" %}

## See Also

* [How to load tab with DataSource](./how-to/load-tab-with-data-source)