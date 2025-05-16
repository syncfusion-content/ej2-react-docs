---
layout: post
title: Getting started with React Progress bar component | Syncfusion
description:  Checkout and learn about Getting started with React Progress bar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps required to create the ProgressBar control using React and configure its properties.

## Dependencies

Below is the list of minimum dependencies required to use the progress bar component.

```javascript
    |-- @syncfusion/ej2-react-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Installation and configuration

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

Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

```bash
  npm install @syncfusion/ej2-react-progressbar --save
```

## Add Progressbar to the Project

Now, you can start adding Progress bar component in the application. For getting started, add the Progress bar component in `src/App.tsx` file using following code.

```ts
import {ProgressBarComponent} from '@syncfusion/ej2-react-progressbar';
import * as React from 'react';

function App() {

  return ( <ProgressBarComponent/>)

};
export default App;

```

## Run the application

Now, we might create a simple progress bar sample as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/default-cs9" %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```