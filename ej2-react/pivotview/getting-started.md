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

This section explains you the steps required to create a simple [**Pivot Table**](https://www.syncfusion.com/react-components/react-pivot-table) and demonstrate the basic usage of the Pivot Table component in React environment.

To get start quickly with React Pivot Table, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=vwoijhliTAI" %}

## Prerequisites

[System requirements for Syncfusion React UI components](../system-requirement)

## Dependencies

The following list of dependencies are required to use the pivot table component in your application.

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

## Setup for Local Development

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

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install pivot table component, use the following command.

```
npm install @syncfusion/ej2-react-pivotview --save
```

> The **--save** will instruct NPM to include the pivot table package inside the `dependencies` section of the `package.json`.

## Adding CSS reference

Add pivot table and its [dependent](#dependencies) components styles as given below in **src/App.css** file. In this illustration, we have referred **material** theme.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-pivotview/styles/material.css';
```

> You can also refer other themes like bootstrap, fabric, high-contrast etc. To know about individual component CSS, please refer [here](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio).

Next we need to refer **App.css** in the application by importing it in the **src/App.js** file as follows.

```js
import './App.css';
```

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/react/documentation/browser/?no-cache=1#browser-support) for more details.

## Adding pivot table component

You can initialize pivot table component in the application using following steps.

* Import the **PivotViewComponent** (aka, PivotTable) component from the **@syncfusion/ej2-react-pivotview** package in **App.js** file.
* Then you can initialize pivot table component (`<PivotViewComponent/>`) using following code.

```js
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    return (<PivotViewComponent/>)
};

export default App;
```

After initialization, add the the following code in **src/App.js** file to populate pivot table with a sample relational data source. Refer [here](./data-binding) to know the more details about relational data binding.

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
ReactDOM.render(<App />, document.getElementById("root"));
```

## Adding fields to row, column, value and filter axes

Now that pivot table is initialized and assigned with sample data, will further move to showcase the component by organizing appropriate fields in row, column, value and filter axes.

In [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/), four major axes -  [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns), [`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) and [`filters`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#filters) plays a vital role in defining and organizing fields from the bound data source, to render the entire pivot table component in a desired format.

[`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows) – Collection of fields that needs to be displayed in row axis of the pivot table.

[`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns) – Collection of fields that needs to be displayed in column axis of the pivot table.

[`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) – Collection of fields that needs to be displayed as aggregated numeric values in the pivot table.

[`filters`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#filters) - Collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table.

In-order to define each field in the respective axis, the following basic properties should be set.

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#name): It allows to set the field name from the bound data source. It’s casing should match exactly like in the data source and if not set properly, the pivot table will not be rendered.
* [`caption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptions/#caption): It allows to set the field caption, which is the alias name of the field that needs to be displayed in the pivot table.
* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#type): It allows to set the summary type of the field. By default, **Sum** is applied.

In this illustration, "Year" and "Quarter" are added in column, "Country" and "Products" in row, and "Sold" and "Amount" in value section respectively.

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

## Applying formatting to a value field

Formatting defines a way in which values should be displayed. For example, format **"C"** denotes the values should be displayed in currency pattern. To do so, define the [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/) with its [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#name) and [`format`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#format) properties and add it to [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#formatsettings). In this illustration, the [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#name) property is set as **Amount**, a field from value section and its format is set as currency. Likewise, we can set format for other value fields as well and add it to [`formatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/formatSettings/#formatsettings).

> Only fields from value section, which is in the form of numeric data values are applicable for formatting.

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

## Module Injection

To create pivot table with additional features, inject the required modules. The modules that are available with basic functionality are as follows.

* `GroupingBar` - Inject this module to access grouping bar.
* `FieldList` - Inject this module to access pivot field list.
* `CalculatedField` - Inject this module to access calculated field.

These modules should be injected into the PivotView using the `Inject` method within the `app.tsx` file as shown below. On doing so, only the injected views will be loaded and displayed along with pivot table.

```ts
<Inject services={[GroupingBar]} />
```

## Enable Field List

The field list allows to add or remove fields and also rearrange the fields between different axes, including column, row, value, and filter along with filter and sort options dynamically at runtime. It can be enabled by setting the [`showFieldList`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#showfieldlist) property to **true** and by injecting the **FieldList** module as follows. To know more about field list, [`refer`](./field-list) here.

> If the **FieldList** module is not injected, the Field List will not be rendered with the pivot table component.

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

The grouping bar feature automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and alter pivot table at runtime. It also provides option to sort, filter and remove fields. It can be enabled by setting the [`showGroupingBar`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#showgroupingbar) property to **true** and by injecting the **GroupingBar** module as follows. To know more about grouping bar, [`refer`](./grouping-bar) here.

> If the **GroupingBar** module is not injected, the grouping bar will not be rendered with the pivot table component.

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

The filter axis contains collection of fields that would act as master filter over the data bound in [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows), [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns) and [`values`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values) axes of the pivot table. The fields along with filter members could be set to filter axis either through report via code behind or by dragging and dropping fields from other axes to filter axis via grouping bar or field list at runtime.

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

The calculated field feature allows user to insert or add a new calculated field based on the available fields from the bound data source using basic arithmetic operators. The calculated field can be included in pivot table using the [`CalculatedFieldSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/calculatedFieldSettings/)  from code behind. Or else, calculated fields can be added at run time through the built-in dialog by just setting the [`allowCalculatedField`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#allowcalculatedfield) property to **true** and by injecting the **CalculatedField** module as follows in pivot table. You will see a button enabled in the Field List UI automatically to invoke the calculated field dialog and perform necessary operation. To know more about calculated field, [`refer`](./calculated-field) here.

> If the **CalculatedField** module is not injected, the calculated field dialog will not be rendered with the pivot table component. Moreover calculated measure can be added only in value axis.

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

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
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

> You can also explore our [React Pivot Table example](https://ej2.syncfusion.com/react/demos/#/material/pivot-table/default) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.