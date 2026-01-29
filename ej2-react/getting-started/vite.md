---
layout: post
title: React getting started with Vite | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in Vite project.
control: Vite
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React Components in a Vite Project

This article provides a step-by-step guide for setting up a [Vite](https://vite.dev/guide/) project with JavaScript and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> React components.

`Vite` is a fast, modern build tool and development server optimized for projects using technologies such as ES modules, TypeScript, JSX, and CSS modules. Its development server leverages native ES modules in modern browsers, providing rapid project startup and efficient feedback during development.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Set up the Vite project

To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

**Step 1: Define the project name** - You can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

**Step 2: Select the framework** - Select `React` as the framework. This will create a React project.

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

**Step 3: Choose the framework variant** - Select `JavaScript` as the framework variant to build this Vite project using JavaScript.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
  TypeScript
  TypeScript + React Compiler
  TypeScript + SWC 
> JavaScript  
  JavaScript + React Compiler
  JavaScript + SWC
  React Router v7
  TanStack Router
  RedwoodSDK
  RSC
  Vike
```

**Step 4:** If prompted for experimental options, choose according to your needs. In this guide, **No** option is selected.
```bash
? Use rolldown-vite (Experimental)?:
  Yes
> No
```

**Step 5:** When asked whether to install dependencies and start now, choose "Yes" to install and run immediately, or "No" to install later and run the dev server manually.

```bash
? Install with npm and start now?
  > Yes /   No
```

As Syncfusion packages are not installed, as of now, **No** option is selected. Then navigate to the project directory and install its dependencies using below commands:

```bash
cd my-project
npm install
```
or

```bash
cd my-project
yarn
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

This guide uses the [React Grid component](https://www.syncfusion.com/react-components/react-grid) as an example. To install the React Grid component package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

or

```bash
yarn add @syncfusion/ej2-react-grids
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied with CSS files supplied by the npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

In this example, the `Tailwind 3` theme styles for the Grid component and its dependencies are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Grid component to the Vite project:

1. Before adding the Grid component to your markup, import the Grid component in the **src/App.jsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

{% endhighlight %}
{% endtabs %}

2.Then, define the Grid component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property and column definitions. Declare the values for the `dataSource` property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import './App.css'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

function App() {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83
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

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vite](../appearance/images/vite.png)

## See also

[Getting Started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Component](../getting-started/quick-start)
