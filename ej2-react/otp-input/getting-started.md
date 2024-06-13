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

## Dependencies

The list of dependencies required to use the OTP Input component in your application is given below:

```js
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```bash 
      npm install -g create-react-app
   ```

Start a new project using create-react-app command as follows

    ```
     create-react-app quickstart --scripts-version=react-scripts-ts
     cd quickstart
    ```
    ```
    create-react-app quickstart
    cd quickstart
    ```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

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

Run the application in the browser using the following command:

   ```
   npm start
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
