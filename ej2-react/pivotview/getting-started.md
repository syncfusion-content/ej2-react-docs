---
layout: post
title: Getting started with React Pivotview component | Syncfusion
description:  Checkout and learn about Getting started with React Pivotview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React Pivotview component

This section guides you through the steps to create a simple [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) in a React application. It demonstrates how to set up and use the Pivot Table component to display and analyze data effectively.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistants. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistants](https://ej2.syncfusion.com/react/documentation/ai-coding-assistants/overview)

To get started quickly with the React [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table), watch this video:

{% youtube "https://www.youtube.com/watch?v=vwoijhliTAI" %}

## Prerequisites

Before you begin, ensure your system meets the requirements for using Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components. You need a compatible browser and a supported React version to work with the Pivot Table component. For details on supported browsers and React versions, refer to the [system requirements](../system-requirement).

## Dependencies

Understanding the dependency structure helps you identify the required packages for implementing the Pivot Table component effectively in your React application. The Pivot Table component relies on a structured hierarchy of dependencies that provide essential functionality for data processing, user interface elements, and export capabilities.

The following dependency tree shows the required packages for the React Pivot Table component:

```javascript
|-- @syncfusion/ej2-react-pivotview
    |-- @syncfusion/ej2-pivotview
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts
        |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
|-- @syncfusion/ej2-react-base
```

The main package `@syncfusion/ej2-react-pivotview` serves as the primary React wrapper for the Pivot Table component. This package automatically includes all the necessary sub-dependencies shown in the tree structure above. When you install the main package, npm will automatically resolve and install these dependencies, ensuring your Pivot Table component functions properly with all its supported operations, including data binding, user interactions, and export options.

## Setup for Local Development

To set up a React application for using the Pivot Table component, use `create-vite-app`. This tool offers a fast and efficient development environment with smaller bundle sizes and optimized builds compared to other tools like `create-react-app`. For detailed steps, refer to the Vite [installation guide](https://vitejs.dev/guide/). By following these steps, you can create a React application ready for development and production.

> **Note:** To create a React application using `create-react-app`, refer to this [guide](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, open your terminal and run the following command:

```bash
npm create vite@latest my-app
```

To set up a React application with TypeScript, use this command:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

This command creates a TypeScript-based React application, navigates to the project folder, and starts the development server.

To set up a React application with JavaScript, use this command:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

This command creates a JavaScript-based React application, navigates to the project folder, and starts the development server.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

To use the Pivot Table component in your React project, you need to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages. These packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. Run the following command to install the Pivot Table package:

```bash
npm install @syncfusion/ej2-react-pivotview --save
```

> The `--save` option ensures that the Pivot Table package is added to the `dependencies` section of your `package.json` file.

## Adding CSS reference

To style the [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table), include the necessary CSS files for the Pivot Table and its [dependent](#dependencies) components in the **src/App.css** file. For this example, we use the **material** theme to ensure a consistent and modern appearance. Add the following code to import the required styles:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-pivotview/styles/material.css';
```

These styles ensure the [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) and its related components, such as buttons and dropdowns, display correctly. You can also use other themes like **bootstrap**, **fabric**, or **high-contrast** to match your application's look. For details on individual component styles, refer to the [Syncfusion theme documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio).

Next, import the **App.css** file into your application by adding the following line in the **src/App.js** file:

```js
import './App.css';
```

This import applies the CSS styles to your React application, enabling the [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) to render with the **material** theme.

## Browser compatibility

The Pivot Table works smoothly across modern browsers. For Internet Explorer 11, you need to include polyfills to ensure proper functionality. For more details, refer to the [browser support documentation](https://ej2.syncfusion.com/react/documentation/browser/?no-cache=1#browser-support).

## Adding Pivot Table Component

To integrate the Pivot Table component into your React application, follow these steps to initialize it and populate it with sample data for meaningful data analysis.

### 1. Import the Pivot Table Component
In your `App.js` file, import the `PivotViewComponent` from the `@syncfusion/ej2-react-pivotview` package.

### 2. Initialize the Component
Set up the `<PivotViewComponent/>` in your application using the following code:

```js
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    return (<PivotViewComponent/>)
};

export default App;
```

### 3. Populate with Sample Data
To enable users to perform meaningful analysis and generate actionable insights, the Pivot Table component requires a well-structured data source. This data source contains the information you want to analyze and visualize.

For demonstration purposes, we'll use a collection of objects containing sales details for various products across different periods and regions. This sample data is assigned to the Pivot Table component through the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#datasource) property under the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/) configuration. For more details on relational data binding, refer [here](./data-binding).

Here’s the complete code to initialize the Pivot Table with sample data:

```js
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './App.css';

let pivotData = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }
];

function App() {

    const dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    }
    let pivotObj;
    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
```

## Adding fields to row, column, value, and filter axes

Organizing fields into appropriate axes transforms raw data into a structured, meaningful Pivot Table that enables users to analyze patterns and trends effectively. With the Pivot Table now initialized and populated with sample data, the next logical step involves organizing the appropriate fields into row, column, value, and filter axes to create a functional data analysis tool.

In the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/) configuration, four primary axes play a crucial role in defining and organizing fields from the bound data source to render the Pivot Table component in the desired format.

**Understanding the four axes:**

- [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows) – Collection of fields that will be displayed along the row axis of the Pivot Table.
- [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns) – Collection of fields that will be displayed along the column axis of the Pivot Table.
- [`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) – Collection of fields that will be displayed as aggregated numeric values within the Pivot Table.
- [`filters`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#filters) – Collection of fields that act as master filters over the data bound to the row, column, and value axes of the Pivot Table.

**Essential field properties:**

To define each field in its respective axis, configure the following basic properties:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#name): Sets the field name from the bound data source. The casing must match exactly as it appears in the data source, otherwise the Pivot Table will not render correctly.
* [`caption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#caption): Sets the field caption, which serves as the display name for the field in the Pivot Table.
* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#type): Sets the summary type for the field. By default, the **Sum** aggregation is applied.

In this example, "Date" and "Product" are positioned in the column axis, "Country" and "State" are placed in the row axis, and "Sold" and "Quantity" are configured as values respectively.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs1" %}

## Applying Formatting to a Value Field

Formatting enhances the readability and presentation of numerical data in a Pivot Table, making it more user-friendly and professional. For instance, you can display values with currency symbols or control the number of decimal places for better clarity.

To apply formatting to value fields in the Pivot Table, use the [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/) property. This property accepts an array of format objects, where each object defines formatting rules for a specific field in your data.

Within each format object in the [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/) array, set the [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#name) property to match the exact field name from your value section. Then, specify the desired display format using the [`format`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#format) property. In the example below, the **Amount** field is configured to display values in currency format using the "C0" pattern, which shows currency symbols without decimal places.

> **Note:** Formatting can only be applied to numeric fields in the value section of the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs2" %}

This approach allows you to apply different formatting patterns to multiple value fields by adding additional objects to the [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/) array. Each object in the array can target a different field, providing complete control over how numerical data is displayed in the Pivot Table.

## Module Injection

Module injection enhances the Pivot Table by enabling additional functionality through specialized modules. To incorporate specific features into your Pivot Table, inject the required modules into your React application.

The following modules are available to extend the basic Pivot Table functionality:

* `GroupingBar` - Inject this module to enable the grouping bar, which allows users to drag and drop fields between different axes of the Pivot Table.
* `FieldList` - Inject this module to enable the field list, providing an interactive interface for users to add, remove, and rearrange fields dynamically.
* `CalculatedField` - Inject this module to enable calculated fields, allowing users to create custom formulas and expressions for data analysis.

To make these modules available, inject them into the PivotView using the `Inject` component within your `App.tsx` file, as shown below. By injecting only the modules you need, your application loads faster and uses fewer resources, as unnecessary module code is excluded from the final bundle.

```ts
import * as React from 'react';
import { PivotViewComponent, Inject, GroupingBar, FieldList, CalculatedField } from '@syncfusion/ej2-react-pivotview';

function App() {
    return (
        <PivotViewComponent>
            <Inject services={[GroupingBar, FieldList, CalculatedField]}/>
        </PivotViewComponent>
    );
}
export default App;
```

> **Note:** Only inject the modules that you plan to use in your application. This approach helps maintain optimal bundle size and application performance.

## Enable Field List

The field list enhances user interaction by allowing you to dynamically add, remove, and rearrange fields across different axes **including column, row, value, and filter axes**. This user-friendly interface also provides sorting and filtering options that can be applied at runtime without requiring code changes.

To enable the field list, set the [`showFieldList`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#showfieldlist) property to **true** and inject the `FieldList` module into your component. This combination activates the field list interface, making it accessible to users to modify PivotTable report settings. For comprehensive details about field list functionality, [`refer`](./field-list) to the dedicated field list documentation.

> The `FieldList` module must be injected for the field list to render properly with the Pivot Table component. Without this module, the field list will not be available.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs3" %}

## Enable Grouping Bar

The grouping bar allows users to easily manage and modify the report settings of the Pivot Table directly through the user interface. With the grouping bar, users can instantly move fields between columns, rows, values, and filters by dragging them, allowing for quick arrangement and analysis of the data.

Users can also use the grouping bar to sort, filter, or remove fields quickly without needing to write any code. To enable the grouping bar, set the [`showGroupingBar`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#showgroupingbar) property to **true**, and make sure to inject the `GroupingBar` module in your application. For more details about using the grouping bar, see the [Grouping Bar documentation](./grouping-bar).

> The `GroupingBar` module must be injected for the grouping bar to render properly with the Pivot Table component. Without this module, the grouping bar will not be available.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs4" %}

## Exploring Filter Axis

The filter axis helps users display only the most relevant information in the Pivot Table for easier analysis. Users can add fields to the filter axis, which act as a master filter over the data displayed in the [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns), and [`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) axes. You can set these fields and their filter items in two ways: by configuring them in your [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/) through code, or by simply dragging and dropping fields from other axes to the filter axis using the grouping bar or the field list at runtime. This makes it easier to analyze targeted subsets of data without modifying the underlying structure of the Pivot Table.

The following example shows how to add fields to the filter axis in a React Pivot Table:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs5" %}

## Calculated Field

The calculated field feature enables users to create custom value fields using mathematical formulas and existing fields from their data source. Users can perform complex calculations with basic arithmetic operators and seamlessly integrate these custom fields into their pivot table for enhanced data visualization and reporting.

Users can add calculated fields in two ways:
- **Using code:** Set up calculated fields through the [`CalculatedFieldSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/calculatedFieldSettings/) property when configuring the Pivot Table.
- **Using the user interface:** Alternatively, calculated fields can be added at runtime through a built-in dialog by setting the [`allowCalculatedField`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#allowcalculatedfield) property to **true** and by injecting the **CalculatedField** module. When enabled, a button appears in the Field List UI. Clicking this button opens a dialog that allows users to create, edit, or remove calculated fields at runtime. To learn more about calculated fields, [`refer`](./calculated-field) here.

> To use the calculated field dialog, make sure the **CalculatedField** module is injected. If it is not injected, the popup dialog will not be shown with the Pivot Table.

> By default, calculated fields created through code-behind are only added to the field list and calculated field dialog UI. To display a calculated field in the Pivot Table UI, you must add it to the [`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) property, as shown in the code below. Additionally, calculated fields can only be added to the value axis.

Below is a sample code that shows how to set up calculated fields both through code-behind and using the popup dialog:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs6" %}

## Run the application

Running the Pivot Table application allows you to see your changes and data in real time directly in the browser, making it easy to check your results.

To start the application, open a command prompt in your project folder and run the following command. This will compile the project and automatically open it in your browser.

```sh
npm run dev
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/getting-started-cs7" %}

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-react-pivot-table-component)

> You can also explore our [React Pivot Table example](https://ej2.syncfusion.com/react/demos/#/material/pivot-table/default) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.

## See Also

* [Tips and Tricks to Quickly Render the Pivot Table for Web](https://www.syncfusion.com/blogs/post/tips-and-tricks-to-quickly-render-the-pivot-table)

