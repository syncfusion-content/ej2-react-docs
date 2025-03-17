---
layout: post
title: Getting started with React Query builder component | Syncfusion
description:  Checkout and learn about Getting started with React Query builder component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create and configure a simple [React Query Builder component](https://www.syncfusion.com/react-components/react-query-builder).

## Dependencies

The list of dependencies required to use the Query Builder component in your application is given below:

```javascript
|-- @syncfusion/ej2-react-querybuilder
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-querybuilder
    |-- @syncfusion/ej2-datamanager
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calenders
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

To set-up a React application in TypeScript environment, run the following command.

```bash
npx create-react-app my-app --template typescript

cd my-app

npm start

```

To set-up a React application in JavaScript environment, run the following command.

```bash
npx create-react-app my-app

cd my-app

npm start

```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Query Builder component, use the following command.

```bash
npm install @syncfusion/ej2-react-querybuilder --save
```

## Adding CSS Reference

Import the Button component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-querybuilder/styles/material.css";
```

## Adding Query Builder component to the Application

To include the Query Builder component in your application import the `QueryBuilderComponent` from `ej2-react-querybuilder` package in `App.tsx`.

Add the Query Builder component in application as shown in below code example.


```ts
import { ColumnsModel, QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';

function App() {

    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];

    return (
        <QueryBuilderComponent width='100%' columns={columnData}/>
    );
}
export default App;
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Query Builder component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs9" %}

> You can also explore our [React Query Builder example](https://ej2.syncfusion.com/react/demos/#/material/query-builder/getting-started) that shows how to render the Query Builder in React.