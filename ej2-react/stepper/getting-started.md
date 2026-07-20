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

To get started quickly with React Stepper component, check out this video:
{% youtube "https://www.youtube.com/watch?v=6VFmox3cV0s" %}

## Dependencies

The following list of dependencies is required to use the Stepper component in an application.

```js
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-react-base

```

## Setup a development environment

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.


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

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/stepper/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

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

Now run the `npm run dev` command in the console to start the development server. This command compiles code and serves the application locally, opening it in the browser.

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

The step icon and label can be defined by setting the `iconCss` and `label` properties using the `StepDirective` tag.

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
 