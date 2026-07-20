---
layout: post
title: Getting started with React Radio button component | Syncfusion
description:  Checkout and learn about Getting started with React Radio button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React RadioButton component

This section explains the steps required to create a simple React RadioButton component and demonstrate its basic usage in a React environment.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> RadioButton packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the RadioButton component, use the following command

```bash
npm install @syncfusion/ej2-react-buttons --save
```

> The --save will instruct NPM to include the RadioButton package inside of the **dependencies** section of the package.json.

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

The required styles for the RadioButton component are imported in the **src/App.css** file:

```css
@import "@syncfusion/ej2-tailwind3-theme/styles/radio-button/index.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding RadioButton component

The React RadioButton component can be added to the application by following these steps. To get started, add the RadioButton component to the **src/App.tsx** file using the following code.

The following radiobutton code should be placed in the **src/App.tsx** file.

```ts
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import './App.css';

function App() {
  return (<div>
    <RadioButtonComponent label="default" />
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

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/getting-started-cs1" %}

> Refer to the [React Radio Button](https://www.syncfusion.com/react-components/react-radio-button) feature tour page for its groundbreaking feature representations. You can also explore our [React Radio Button component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/button/radio-button) that shows how to render the ButtonGroup in React.