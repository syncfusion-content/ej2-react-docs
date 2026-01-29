---
layout: post
title: React getting started with create app | Syncfusion
description: Check out and learn how to create an application with Syncfusion React UI components using Create React App
control: Getting started with create react app
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components using Create React App

This article provides a step-by-step guide for setting up a React application using Create React App and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Create the React application

The recommended approach is to use the [Create React App](https://github.com/facebook/create-react-app) tool for initializing your project. This tool sets up a development environment and optimizes the build for production.

To create a new application using JavaScript:

```bash
npx create-react-app my-app
cd my-app
```

or

```bash
yarn create react-app my-app
cd my-app
```

To create a React application in `TypeScript` environment, run the following command:

```bash
npx create-react-app my-app --template typescript
cd my-app
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

After creating the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages. All packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

This guide uses the **Grid** component as an example. To install the Grid package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

or

```bash
yarn add @syncfusion/ej2-react-grids
```

> **Tip:** Additional information on package installation methods is available in the [installation section](https://ej2.syncfusion.com/react/documentation/installation/npm-package).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with built-in [themes](../appearance/theme). Import the CSS styles for the Grid component and its dependent components in the `src/App.css` file. The example below demonstrates importing the `Tailwind 3` theme:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css';
```

For more details on built-in themes and usage, refer to the [Themes topic](../appearance/theme).

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> component to the application

Begin adding required Syncfusion<sup style="font-size:70%">&reg;</sup> components to your application. The following example demonstrates how to add the Grid component in the `src/App.js` file.

1. Import the necessary components in the `src/App.js` file:

   ```js
    import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
   ```

2. Then, to display the Grid with records, add the Grid component and bind the `dataSource` to it.

```js

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import './App.css';

function App() {
  const data = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: true
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: false
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: true
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

Start the development server with the following command:

```bash
npm start
```

or

```bash
yarn start
```

The output appears as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/default-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/default-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/default-cs9" %}

For more options and features, see the [Grid component documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started).