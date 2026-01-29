---
layout: post
title: Quick start with React Getting started component | Syncfusion
description:  Check out and learn about Quick start with React Getting started component of Syncfusion Essential JS 2 and more details.
control: Quick start 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components

This article provides a step-by-step introduction to getting started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Create the React application

To set up a React application, we recommend using **Vite**, which offers a faster and more optimized development environment. For detailed steps, refer to the Vite [installation instructions](https://vite.dev/guide/). Vite uses esbuild under the hood for lightning-fast builds and leverages native ES modules (ESM) during development, resulting in significantly better performance compared to traditional build tools.

### Option 1: Interactive Setup (Recommended for beginners)

To create a new React application with interactive prompts, run the following command:

```bash
npm create vite@latest my-app
```

or

```bash
yarn create vite my-app
```

Using one of the above commands will prompt you to configure your project interactively:

**Step 1:** Select `React` as the framework. This will create a React project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
  Vanilla
  Vue
> React
  Preact
  Lit
  Svelte
  Solid
  Qwik
  Angular
  Others
```

**Step 2:** Choose `TypeScript` as the framework variant to build this React project using TypeScript.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> TypeScript
  TypeScript + React Compiler
  TypeScript + SWC 
  JavaScript  
  JavaScript + React Compiler
  JavaScript + SWC
  React Router v7
  TanStack Router
  RedwoodSDK
  RSC
  Vike
```

**Step 3:** If prompted for experimental options, choose according to your needs. In this guide, **No** option is selected.
```bash
? Use rolldown-vite (Experimental)?:
  Yes
> No
```

**Step 4:** When asked whether to install dependencies and start now, choose "Yes" to install and run immediately, or "No" to install later and run the dev server manually.

```bash
? Install with npm and start now?
  > Yes /   No
```

As Syncfusion packages are not installed, as of now, **No** option is selected. Then navigate to the project directory and install its dependencies using below commands:

```bash
cd my-app
npm install
```
or

```bash
cd my-app
yarn
```

### Option 2: Direct Command-Line Setup

Alternatively, you can skip the interactive prompts and directly create your project using template flags.

**For TypeScript environment:**

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

or

```bash
yarn create vite my-app --template react-ts
cd my-app
yarn
```

**For JavaScript environment:**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

or

```bash
yarn create vite my-app --template react
cd my-app
yarn
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. So, choose the component that you want to install.

In this quick start guide, the **Grid** component is used as an example. To install the Grid component package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

or

```bash
yarn add @syncfusion/ej2-react-grids
```

> **Tip:** You can also check out the [installation section](https://ej2.syncfusion.com/react/documentation/installation/npm-package) to learn about different ways of installing packages.

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

After installing the Syncfusion<sup style="font-size:70%">&reg;</sup> component packages in your application, import the required themes based on the components used.

Syncfusion<sup style="font-size:70%">&reg;</sup> React component comes with built-in [themes](../appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components based on the application style by referring to any of the built-in themes. Let's import the `Tailwind 3` theme for the Grid component.

Import the CSS styles for the Grid component and its dependencies in the `src/App.css` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css";
```

You can check out the [Themes](../appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> component to the application

Start adding the required components to the application. Let's add the Grid component in the `src/App.tsx` file using the following code.

**Step 1:** Import the Grid component and its required directives at the top of the `src/App.tsx` file:

   ```ts
   import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
   ```

**Step 2:** Replace the entire content of the `src/App.tsx` file with the following code. This code creates a Grid component with sample data and defines five columns to display order information:

```ts

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import './App.css';

function App() {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    }
  ];
  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
    </GridComponent>
  );
}

export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

or

```bash
yarn dev
```

The output will appear as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/common/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/common/default-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs9" %}

To know more functionality about the Grid component, refer to the [Grid component](https://ej2.syncfusion.com/react/documentation/grid/getting-started) section.

## See also

[Getting Started with Create React App](../getting-started/create-app)

