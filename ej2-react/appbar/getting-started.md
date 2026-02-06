---
layout: post
title: Getting started with React Appbar component | Syncfusion
description:  Checkout and learn about Getting started with React Appbar component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React AppBar component

This section explains how to create a simple AppBar, and configure its available functionalities in React.

## Dependencies

The following dependencies are required to use the AppBar component in an application. These packages provide core functionalities and UI controls for the AppBar.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
```

## Setup your development environment

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

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

To install `AppBar` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
npm install @syncfusion/ej2-react-buttons --save

```

The above command installs [AppBar dependencies](./getting-started#dependencies)
which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add AppBar component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
```

## Add AppBar to the project

Create the `AppBar` component in the application by adding the following code snippet to the `src/App.tsx` file.



```ts
import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";

const App = () => {
  return (
    <div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass='e-inherit menu' iconCss='e-icons e-menu'></ButtonComponent>
        <span className="regular">React AppBar</span>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass='e-inherit login'>FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>
  );
}

export default App;
```

## Run the application

Run the `npm run dev` command in the console to start the development server. This command compiles code and serves the application locally, opening it in the browser.

```
npm run dev
```

 {% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs1" %}