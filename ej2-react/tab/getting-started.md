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

This section briefly explains about how to create a simple **Tab** component and configuring the Tab header content in React.

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

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Tab component, use the following command

```
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-navigations/styles/material.css';

```

> To refer `App.css` in the application then import it in the `src/App.tsx` file

## Initialize the Tab using JSON items collection

The Tab can be rendered by defining a JSON array. The item is rendered with [`header`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem/#header) text and [`content`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem/#content) for each Tab.

* Import the Tab component to your `src/App.tsx` file using following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}


* Run the application in the browser using the following command.

```
npm start
```

 {% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}

> In the above sample code, `element` is the `id` of the HTML element in a page to which the Tab is initialized.

## Initialize the Tab using HTML elements

The Tab component can be rendered based on the given HTML element using `<TabComponent>` tag. Header section must be enclosed with in a wrapper element using `e-tab-header` class and corresponding content must be mapped with `e-content` class.
You need to follow the below structure of HTML elements to render the Tab,

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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-container-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-container-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tab/tab-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/tab-container-cs1" %}

## See Also

* [How to load tab with DataSource](./how-to/load-tab-with-data-source)