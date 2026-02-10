---
layout: post
title: Getting started with React MultiColumn ComboBox component | Syncfusion
description:  Checkout and learn about Getting started with React MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
control: MultiColumn Combobox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React MultiColumn Combobox component

This section explains the steps required to create a simple React MultiColumn Combobox component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> MultiColumn Combobox packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the MultiColumn Combobox component, use the following command

```bash
npm install @syncfusion/ej2-react-multicolumn-combobox --save
```

> The --save will instruct NPM to include the MultiColumn Combobox package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-multicolumn-combobox/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding MultiColumn Combobox component

The React MultiColumn Combobox component can be added to the application by following these steps. To get started, add the MultiColumn Combobox component to the **src/App.tsx** file using the following code.

The following multicolumn combobox code should be placed in the **src/App.tsx** file.
`[Class-component]`

```ts
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the MultiColumn ComboBox component
        <MultiColumnComboBoxComponent id="multicolumn"></MultiColumnComboBoxComponent>
    );
  }
}
```

`[Functional-component]`
```ts
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import './App.css';

function App() {
    return (
        // specifies the tag for render the MultiColumn ComboBox component
        <MultiColumnComboBoxComponent id="multicolumn"></MultiColumnComboBoxComponent>
    );
}
export default App;
```

## Binding data source with fields and columns

After initializing, populate the MultiColumn ComboBox with data by using the `dataSource` property, to map the data for each specified columns use the `<ColumnDirective>` selector and the `fields` property to map the data fields from the dataSource.

`[Class-component]`

```ts
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import './App.css';

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
```

`[Functional-component]`

```ts
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import './App.css';

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
export default App;
```

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

> Refer to the [React MultiColumn Combobox](https://www.syncfusion.com/react-components/react-multicolumn-combobox) feature tour page for its groundbreaking feature representations. You can also explore our [React MultiColumn Combobox component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/multicolumn-combobox/default) that shows how to render the MultiColumn Combobox in React.