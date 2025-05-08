---
layout: post
title: Getting started with React OTP Input component | Syncfusion
description: Checkout and learn about Getting started with React OTP Input component of Syncfusion Essential JS 2 and more details.
control: OTP Input
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React OTP Input component

This section explains how to create a simple OTP Input and demonstrate the basic usage of the OTP Input component in an React environment.

To get started quickly with React OTP Input component, you can check out this video:
{% youtube "https://www.youtube.com/watch?v=MAs2MfwFNhE" %}

## Dependencies

The list of dependencies required to use the OTP Input component in your application is given below:

```js
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
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


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install OTP Input component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

## Adding OTP Input component to the application

To include the OTP Input component in your application import the `OTPInputComponent` from `ej2-react-inputs` package in `App.tsx`.

Add the OTP Input component in application as shown in below code example.

```ts
{ /* Import the OTP Input.*/ }
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import './App.css';

{ /* To render OTP Input. */ }
function App() {
    return (
        <OtpInputComponent id='otpinput'></OtpInputComponent>
    );
}
export default App;
```

## Adding CSS Reference

Import the OTP Input component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
```

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

   ```
   npm run dev
   ```

The following example shows a basic OTP Input component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/getting-started-cs1" %}
