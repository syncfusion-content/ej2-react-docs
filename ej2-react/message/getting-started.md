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

This article provides a step-by-step introduction to get started with the Syncfusion React Message component.

## Prerequisites

[System requirements for Syncfusion React UI components](../system-requirement)

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

To set-up, a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up the development environment in JavaScript and improvises the application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of the `create-react-app.`

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

To set-up a React application in the `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init.` To begin with the `npm init,` upgrade the `npm` version to `npm 6+.`

```bash
npm init react-app my-app
cd my-app
npm start
```

## Add Syncfusion React packages

Once you have created the React application, install the required Syncfusion React component package in the application. All Syncfusion React (Essential JS 2) packages are published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Message component package, use the following command.

```bash
npm install @syncfusion/ej2-react-notifications --save
```

or

```bash
yarn add @syncfusion/ej2-react-notifications
```

Also, check out the [installation section](https://ej2.syncfusion.com/react/documentation/installation-and-upgrade/installation/) to know the different ways of installing the packages.

## Import the Syncfusion CSS styles

After installing the Syncfusion component packages in the application, import the required themes based on the components used.

The Syncfusion React component comes with built-in [themes](../appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion React components based on the application style by referring to any of the built-in themes. Import the `Material` theme for the Message component.

Import the CSS styles for the Message component and its dependencies in the `src/App.css.` file.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-notifications/styles/material.css';
```

Check out the [Themes topic](../appearance/theme) to know more about built-in themes and different ways to refer to themes in React applications.

## Add Message component to the application

Start adding the required components to the application. Add the Message component in the `src/App.tsx` file using the following code.

* Before adding the Message component to the markup, import the Message component in the `src/App.tsx` file.

```bash
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
```

* Then, add the `Message` component in the application using the following code sample.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (<MessageComponent content="Please read the comments carefully"></MessageComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

All are set. Now, run the application using the following command.

```bash
npm start
```

or

```bash
 yarn start
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/message/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/message/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs1" %}