---
layout: post
title: Getting started with React MultiColumn ComboBox component | Syncfusion
description:  Checkout and learn about Getting started with React MultiColumn ComboBox component of Syncfusion Essential JS 2 and more details.
control: MultiColumn ComboBox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React MultiColumn ComboBox component

This section explains the steps required to create a simple React MultiColumn ComboBox component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Set up the Vite project

To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}

After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:

1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.

Navigate into the project directory with:

```
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

To install the React component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-multicolumn-combobox

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-multicolumn-combobox

{% endhighlight %}
{% endtabs %}
 
## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the MultiColumn ComboBox component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/multicolumn-combobox/index.css";

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Add the MultiColumn ComboBox component

Now, you can add the React MultiColumn ComboBox component to your **src/App.jsx** file by importing and defining it within your application. Then, populate the MultiColumn ComboBox with data by using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/index-default#datasource) property. To map the data for each specified column, use the `<ColumnDirective>` selector; the [fields](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/index-default#fields) property maps the data fields from the `dataSource`. Use the following code:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import './App.css';
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';

function App() {
  // defined the array of object data
  const empData = [
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "Michael", "Designation": "HR", "Country": "Russia" },
    { "EmpID": 1004, "Name": "Steven Buchanan", "Designation": "Product Manager", "Country": "Ukraine" },
    { "EmpID": 1005, "Name": "Margaret Peacock", "Designation": "Developer", "Country": "Egypt" },
    { "EmpID": 1006, "Name": "Janet Leverling", "Designation": "Team Lead", "Country": "Africa" },
    { "EmpID": 1007, "Name": "Alice", "Designation": "Product Manager", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Bob", "Designation": "Developer", "Country": "India" },
    { "EmpID": 1009, "Name": "John", "Designation": "Product Manager", "Country": "Ireland"},
    { "EmpID": 1010, "Name": "Mario Pontes", "Designation": "Team Lead", "Country": "South Africa" },
    { "EmpID": 1011, "Name": "Yang Wang", "Designation": "Developer", "Country": "Russia" },
    { "EmpID": 1012, "Name": "David", "Designation": "Product Manager", "Country": "Egypt" },
    { "EmpID": 1013, "Name": "Antonio Bianchi", "Designation": "Team Lead", "Country": "USA" },
    { "EmpID": 1014, "Name": "Laura", "Designation": "Developer", "Country": "England" },
    { "EmpID": 1015, "Name": "Carlos Hernandez", "Designation": "Developer", "Country": "Canada" },
    { "EmpID": 1016, "Name": "Lily", "Designation": "Product Manager", "Country": "France" },
    { "EmpID": 1017, "Name": "Tom Williams", "Designation": "Developer", "Country": "Ukraine" },
    { "EmpID": 1018, "Name": "Grace", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1019, "Name": "Olivia", "Designation": "Team Lead", "Country": "Ireland" },
    { "EmpID": 1020, "Name": "James", "Designation": "Developer", "Country": "China" },
  ];
  // maps the appropriate column to fields property
  const fields = { text: 'Name', value: 'EmpID' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark = 'Select a employee';

  return (
    // specifies the tag for rendering the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={empData} fields={fields} placeholder={waterMark}>
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

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/multicolumn-combobox/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/basic-cs2" %}

> Refer to the [React MultiColumn ComboBox](https://www.syncfusion.com/react-components/react-multicolumn-combobox) feature tour page for its groundbreaking feature representations. You can also explore our [React MultiColumn ComboBox component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/multicolumn-combobox/default) that shows how to render the MultiColumn ComboBox in React.