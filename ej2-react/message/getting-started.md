---
layout: post
title: Getting started with React Message component | Syncfusion
description:  Checkout and learn about Getting started with React Message component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This article provides a step-by-step introduction to get started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Message component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Dependencies

The following list of dependencies are required to use the `Message` component in the application.

```javascript
|-- @syncfusion/ej2-react-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
  |-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-react-base
```

## Create the React application

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Message component package, use the following command.

```bash
npm install @syncfusion/ej2-react-notifications --save
```

or

```bash
yarn add @syncfusion/ej2-react-notifications
```

Also, check out the [installation section](https://ej2.syncfusion.com/react/documentation/installation/npm-package) to know the different ways of installing the packages.

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

After installing the Syncfusion<sup style="font-size:70%">&reg;</sup> component packages in the application, import the required themes based on the components used.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React component comes with built-in [themes](../appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components based on the application style by referring to any of the built-in themes. Import the `Material` theme for the Message component.

Import the CSS styles for the Message component and its dependencies in the `src/App.css` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-notifications/styles/material.css';
```

Check out the [Themes topic](../appearance/theme) to know more about built-in themes and different ways to refer to themes in React applications.

## Add Message component to the application

Start adding the required components to the application. Add the Message component in the `src/App.js` or `src/App.tsx` file using the following code.

* Before adding the Message component to the markup, import the Message component in the `src/App.js` or `src/App.tsx` file.

     ```bash
        import { MessageComponent } from '@syncfusion/ej2-react-notifications';
     ```

* Then, add the `Message` component in the application using the following code sample.

```ts
import './App.css';
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (<MessageComponent content="Please read the comments carefully"></MessageComponent>);
}

export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

or

```bash
 yarn dev
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/message/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/message/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs1" %}