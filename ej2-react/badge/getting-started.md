---
layout: post
title: Getting started with React Badge component | Syncfusion
description:  Checkout and learn about Getting started with React Badge component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Badge component

The following section explains how to create a simple Badge component using styles and Badge’s basic usage.

## Dependencies

Install the following required dependent package to render the `Badge` component.

```javascript
|-- @syncfusion/ej2-notifications
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

```
npx create-react-app my-app --template typescript

cd my-app

npm start
```

To set-up a React application in JavaScript environment, run the following command.

```
npx create-react-app my-app

cd my-app

npm start
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Badge` component, use the following command

```bash
npm install @syncfusion/ej2-notifications --save
```

## Adding CSS Reference

Badge CSS files are available in the `ej2-notifications` package folder. Import the Badge component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
```
> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Initialize the Badge Component

Add an HTML span element with `e-badge` class inside any wrapper element (h1) into your return method.

```ts
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './App.css';

function App() {
  return (
    <h1>Badge Component <span className="e-badge e-badge-primary">New</span></h1>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/getting-started-cs1" %}

## See Also

[Types of Badge](./types)
