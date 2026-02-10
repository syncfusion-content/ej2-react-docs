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

This section explains the steps required to create a simple React Spinner component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Spinner packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Spinner component, use the following command

```bash
npm install @syncfusion/ej2-react-popups --save
```

> The --save will instruct NPM to include the Spinner package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-popups/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Spinner component

The React Spinner component can be added to the application by following these steps. To get started, add the Spinner component to the **src/App.tsx** file using the following code.

The following spinner code should be placed in the **src/App.tsx** file.

```ts
import { createSpinner, showSpinner } from '@syncfusion/ej2-popups';
import * as React from 'react';
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    componentDidMount();
  });
  function componentDidMount() {
    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('container'),
    });
    // showSpinner() will make the spinner visible
    showSpinner(document.getElementById('container'));
  }
  return (<div className="control-pane">
    <div id="container" className="control-section col-lg-12 spinner-target"></div>
  </div>);
}
export default App;
```

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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