---
layout: post
title: Getting started with React MultiColumn ComboBox component | Syncfusion
description:  Checkout and learn about Getting started with React MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
control: MultiColumn Combobox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React MultiColumn ComboBox component

This section explains how to create a simple **MultiColumn Combobox** component and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the `MultiColumn ComboBox` component in your application.

```javascript
|-- @syncfusion/ej2-react-multicolumn-combobox
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup for Local Development

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

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install MultiColumn ComboBox component, use the following command

```bash
npm install @syncfusion/ej2-react-multicolumn-combobox --save
```

## Adding MultiColumn ComboBox component

Now, you can start adding MultiColumn ComboBox component in the application. For getting started, add the MultiColumn ComboBox component by using `<<MultiColumnComboBoxComponent>` selector in `src/App.tsx` file using following code.Now place the below MultiColumn ComboBox code in the `src/App.tsx`.

`[Class-component]`

```ts

import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the MultiColumn ComboBox component
        <MultiColumnComboBoxComponent id="multicolumn"></MultiColumnComboBoxComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('multicolumn'));
```

`[Functional-component]`

```ts
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the MultiColumn ComboBox component
        <MultiColumnComboBoxComponent id="multicolumn"></MultiColumnComboBoxComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('multicolumn'));
```

## Adding CSS reference

Import the ComboBox component required CSS references as follows in `src/App.css`.

```css

/* import the MultiColumn ComboBox dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-multicolumn-combobox/styles/material.css";

```

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data by using the `dataSource` property, to map the data for each specified columns use the `<ColumnDirective>` selector and the `fields` property to map the data fields from the dataSource.

`[Class-component]`

```ts

import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the array of object data
  private employeeData: Object[] = [ 
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
    { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
    { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
    { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
    { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
    { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }
  ];
  // maps the appropriate column to fields property
  private fields: Object = { text: 'Name', value: 'EmpID' };
  public render() {
    return (
        // specifies the tag for render the MultiColumn ComboBox component
        <MultiColumnComboBoxComponent id="multicolumn" dataSource={this.employeeData} fields={this.fields}>
            <ColumnsDirective>
                <ColumnDirective field='EmpID' header='Employee ID' width={120}></ColumnDirective>
                <ColumnDirective field='Name' header='Name' width={120}></ColumnDirective>
                <ColumnDirective field='Designation' header='Designation' width={120}></ColumnDirective>
                <ColumnDirective field='Country' header='Country' width={100}></ColumnDirective>
            </ColumnsDirective>
        </MultiColumnComboBoxComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
```

`[Functional-component]`

```ts

import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // define the array of object data
  const employeeData: Object[] = [ 
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "John", "Designation": "Tester", "Country": "Germany" },
    { "EmpID": 1004, "Name": "Robert King", "Designation": "Product Manager", "Country": "India" },
    { "EmpID": 1005, "Name": "Steven Buchanan", "Designation": "Developer", "Country": "Italy" },
    { "EmpID": 1006, "Name": "Jane Smith", "Designation": "Developer", "Country": "Europe" },
    { "EmpID": 1007, "Name": "James Brown", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Laura Callahan", "Designation": "Developer", "Country": "Africa" },
    { "EmpID": 1009, "Name": "Mario Pontes", "Designation": "Developer", "Country": "Russia" }
  ];
  // maps the appropriate column to fields property
  const fields: Object = { text: 'Name', value: 'EmpID' };
  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={employeeData} fields={fields}>
        <ColumnsDirective>
            <ColumnDirective field='EmpID' header='Employee ID' width={120}></ColumnDirective>
            <ColumnDirective field='Name' header='Name' width={120}></ColumnDirective>
            <ColumnDirective field='Designation' header='Designation' width={120}></ColumnDirective>
            <ColumnDirective field='Country' header='Country' width={100}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

`[Class-componnet]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multicolumn-combobox/basic-cs1" %}

`[Functional-componnet]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multicolumn-combobox/basic-cs2" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiColumn ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the `popupHeight` and `popupWidth` properties respectively.

In the following sample, popup list's width and height are configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multicolumn-combobox/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multicolumn-combobox/basic-cs4" %}