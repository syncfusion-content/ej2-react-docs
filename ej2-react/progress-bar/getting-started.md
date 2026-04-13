---
layout: post
title: Getting started with React Progress Bar component | Syncfusion
description:  Checkout and learn about Getting started with React Progress Bar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Progress Bar Component

This section explains the steps required to create the Progress Bar component using React and configure its properties.

## Prerequisites

Before getting started, ensure you have:

- [Node.js](https://nodejs.org/en) version 14 or later installed

## Dependencies

Below is the list of minimum dependencies required to use the Progress Bar component.

```javascript
  |-- @syncfusion/ej2-react-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

These dependencies will be installed automatically when you install the main package.

## Installation and Configuration

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Progress Bar Package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Progress Bar package, use the following command

```bash
npm install @syncfusion/ej2-react-progressbar --save
```

> The –save will instruct NPM to include the Progress Bar package inside of the dependencies section of the package.json.

## Add the Progress Bar Component

Now you can add the Progress Bar component to your application. Update the `src/App.tsx` (or `src/App.jsx`) file with the following code to create a basic linear Progress Bar.

**TypeScript (src/App.tsx):**

```ts
import {ProgressBarComponent} from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <ProgressBarComponent id="linear" value={40}>
    </ProgressBarComponent>
  )
};
export default App;
createRoot(document.getElementById('root')).render(<App />);
```

## Run the Application

Run the following command to start the development server:

```bash
npm run dev
```

This command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

### Complete Code Example

The following demonstrates a complete implementation with the entry file and component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/default-cs9" %}
