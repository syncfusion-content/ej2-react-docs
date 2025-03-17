---
layout: post
title: Quick start with React Getting started component | Syncfusion
description:  Checkout and learn about Quick start with React Getting started component of Syncfusion Essential JS 2 and more details.
control: Quick start 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Component.

This article provides a step-by-step introduction to get started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Create the React application

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. So, choose the component that you want to install.

In this quick start article, the Grid component used as an example. To install the Grid component package, use the following command.

```bash
npm install @syncfusion/ej2-react-grids --save
```

or

```bash
yarn add @syncfusion/ej2-react-grids
```

You can also checkout the [installation section](https://ej2.syncfusion.com/react/documentation/installation/npm-package) to know the different ways of installing the packages.

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

After installing the Syncfusion<sup style="font-size:70%">&reg;</sup> component packages in your application, import the required themes based on the components used.

Syncfusion<sup style="font-size:70%">&reg;</sup> React component comes with built-in [themes](../appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components based on the application style by referring to any of the built-in themes. Let's import the `Material` theme for the Grid component.

Import the CSS styles for the Grid component and it's dependencies in the `src/App.css.` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
```

You can checkout the [Themes topic](../appearance/theme) to know more about built-in themes and different ways to refer themes in React application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> component to the application

Start adding the required components to the application. Let's add the Grid component in the `src/App.js` file using the following code.

1.Before adding the Grid component to your markup, import the Grid component in the `src/App.js` file.

   ```bash
    import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
   ```

2.Then, to display the Grid with records, add the Grid component and bind the `dataSource` to it. Here, we have mapped the simple data as the `dataSource`.



```js

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
    return (<GridComponent dataSource={data}>
          <ColumnsDirective>
              <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='100'/>
              <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
              <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
              <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
        </GridComponent>);
}
export default App;
```

## Run the application

All are set. Now, run the application using the following command.

```bash
npm start
```

or

```bash
 yarn start
```

The output will appears as follows.

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

To know more functionality about the Grid component, refer to the [Grid component](https://ej2.syncfusion.com/react/documentation/grid/getting-started/) section.