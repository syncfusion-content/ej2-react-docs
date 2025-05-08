---
layout: post
title: Getting started with React Stepper component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Stepper and configure its available functionalities in the React environment.

To get started quickly with React Stepper component, you can check out this video:
{% youtube "https://www.youtube.com/watch?v=6VFmox3cV0s" %}

## Dependencies

The following list of dependencies is required to use the Stepper component in your application.

```js
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-react-base

```

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



## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Stepper` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS Reference

Import the Stepper component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Adding Stepper component to the application

To include the Stepper component in your application, import the `StepperComponent` from `ej2-react-navigations` package in the `App.tsx`.

To define each step, you can use the `StepDirective` tag inside the `StepsDirective` tag as shown in below code example.

{% raw %}

```ts
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
        <StepperComponent>
            <StepsDirective>
                <StepDirective/>
                <StepDirective/>
                <StepDirective/>
                <StepDirective/>
                <StepDirective/>
            </StepsDirective>
        </StepperComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```
{% endraw %}

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The following example shows a basic Stepper component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stepper/getting-started-cs1" %}

## Configure icon and label

You can define the step icon and label by setting the `iconCss` and `label` properties using the `StepDirective` tag.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/stepper/icon-with-label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/stepper/icon-with-label/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/icon-with-label/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stepper/icon-with-label" %}
 