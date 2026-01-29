---
layout: post
title: Webpack externals with React Getting started component | Syncfusion
description:  Check out and learn about Webpack externals with React Getting started component of Syncfusion Essential JS 2 and more details.
control: Webpack externals 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React Components using Webpack Externals

This article provides a step-by-step guide for configuring a React application to use Syncfusion<sup style="font-size:70%">&reg;</sup> React components with [Webpack Externals](https://webpack.js.org/configuration/externals/). Webpack Externals instruct Webpack to treat specified dependencies as external, loading them via CDN or global variables instead of bundling them into your app.

This approach helps reduce bundle sizes and allows for sharing libraries via CDN script references.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Create a React application

* Open a terminal and create a new application folder:

    ```bash
    mkdir Syncfusion-react-demo

    cd Syncfusion-react-demo
    ```

* Use the following commands to create a `package.json` file. Then install the [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) packages in the application.

     ```bash
     npm init -y

     npm install react react-dom
     ```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

In this article, the **Grid component** is used as an example. To install the Grid component package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

## Add babel packages

Install the required babel preset packages in the application using the following command:

```bash
npm install babel-loader @babel/preset-react @babel/preset-env @babel/core --save-dev
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component

* Create an `src` folder in the application repository. Then create an `index.html`, `index.js` entry and `App.js` component files inside the `src` folder location. Start adding the required components to the application.

* Open the `src/App.js` file and add the Grid component as follows.



    ```javascript
    import React from "react";
    import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

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

*  Open the `src/index.js` file and add the app component as follows.

``` js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
```

## Install and configure the webpack

* Install the webpack packages using the following command:

    ```bash
     npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
    ```

* Create a `webpack.config.js` file in the application root repository using the following code sample.

```js
const path =  require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundles.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
        ]
    }
}
```

## Configure Webpack externals

* The Syncfusion<sup style="font-size:70%">&reg;</sup> React externals naming convention is `SyncfusionReact[PackageName]`, where `PackageName` is PascalCase (e.g., `SyncfusionReactGrids`).

* Open the `webpack.config.js` file and add the Syncfusion<sup style="font-size:70%">&reg;</sup> react packages in the externals option as follows.

   ``` js
    module.exports = {
    ...
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@syncfusion/ej2-react-grids": "SyncfusionReactGrids"
     },
     ...
    }
  ```

* Find the Syncfusion<sup style="font-size:70%">&reg;</sup> external CDN script `[package-name].min.js` file inside `dist` folder of the packages.

    ![Syncfusion External CDN](images/external-cdn.png)

* Add the [React](https://reactjs.org/docs/cdn-links.html) and Syncfusion<sup style="font-size:70%">&reg;</sup> react Grid CDN references in the `src/index.html` file. The order of individual Syncfusion<sup style="font-size:70%">&reg;</sup> control package loading should be in line with its dependency graph. The CDN of the Dependency Packages should be included manually before the intended individual Syncfusion<sup style="font-size:70%">&reg;</sup> control package CDN.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- React and ReactDom scripts -->
    <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

    <!-- Syncfusion React controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" />

    <!-- Syncfusion React controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-base/dist/ej2-base.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-data/dist/ej2-data.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-buttons/dist/ej2-buttons.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-popups/dist/ej2-popups.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-navigations/dist/ej2-navigations.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-inputs/dist/ej2-inputs.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-calendars/dist/ej2-calendars.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-lists/dist/ej2-lists.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-excel-export/dist/ej2-excel-export.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-compression/dist/ej2-compression.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-grids/dist/ej2-grids.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-react-base/dist/ej2-react-base.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/32.1.19/ej2-react-grids/dist/ej2-react-grids.min.js"></script>
    <title>Syncfusion Webpack Externals Demo</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

> Refer to the [Script Dependency](../common/script-dependency) section to discover the correct script reference sequence and its dependencies for a certain Syncfusion<sup style="font-size:70%">&reg;</sup> React component.

## Configure the package JSON

Open the `package.json` file and configure the application scripts as follows:

```
{
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  }
}
```

## Run the application

Run the application using the following command:

```bash
npm start
```

Your browser should automatically open. The application displays a Syncfusion Grid component as shown below:

![Grid component](images/grid-component.png)

>[View Sample in GitHub.](https://github.com/SyncfusionExamples/ej2-react-webpack-externals)