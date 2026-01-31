---
layout: post
title: Getting started with React Treegrid component | Syncfusion
description:  Checkout and learn about Getting started with React Treegrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React Treegrid component

This section outlines the steps to create a simple Essential JS 2 TreeGrid and demonstrates basic usage in a React application.

For a quick start with React TreeGrid, refer to this video:

{% youtube "https://www.youtube.com/watch?v=dQcIAoSgARc" %}

## Setup for Local Development

To set up a React application, choose between two popular tools: **Vite** or **create-react-app**.

**Vite is recommended** for new projects because it provides:
- **Faster development server**: Vite uses native ES modules during development, resulting in significantly faster startup times and Hot Module Replacement (HMR) compared to traditional bundler.
- **Smaller bundle sizes**: Optimized production builds with less overhead.
- **Better performance during development**: Especially valuable when working with large component libraries like Syncfusion.
- For detailed steps, refer to the [Vite installation guide](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

**create-react-app** remains a valid choice when a traditional setup is preferred, organizational requirements exist, or an existing create-react-app project is in use. For more information, refer to the [create-react-app documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application with Vite, run the following command:

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion TreeGrid packages

All Essential JS 2 packages are published in the npm public registry at [npmjs.com](https://www.npmjs.com/~syncfusionorg). Install the TreeGrid component with the following command:

```
npm install @syncfusion/ej2-react-treegrid --save
```

## Adding CSS reference

Add component styles to your application. TreeGrid requires CSS imports from multiple Syncfusion packages, depending on which features you use. Add the following imports to your **src/App.css** file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-treegrid/styles/material.css";
```

> Import **App.css** in the **src/App.tsx** file.

## Adding TreeGrid component

Add the TreeGrid component to the application. For getting started, include the TreeGrid component in **src/App.tsx** using the following code.

Place the following treegrid code in **src/App.tsx**:

```ts
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';

import { sortData } from './datasource';
function App() {
    return <TreeGridComponent dataSource={sortData} treeColumnIndex={1} childMapping= 'subtasks'>
        <ColumnsDirective>
            <ColumnDirective field='Category' headerText='Category' width='150'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='170'/>
            <ColumnDirective field='orderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='price' headerText='Price' width='100' textAlign='Right' type='number' format='C0' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;
```

## Module Injection

TreeGrid's features are organized into separate modules. Each feature (paging, sorting, filtering, exporting) is packaged as a service that must be explicitly injected into the TreeGrid component to work. Think of module injection as "registering" or "enabling" a feature.

To use a feature, inject its service using the **Inject** directive. The sample uses paging, sorting, filtering, and exporting features of TreeGrid. The relevant feature service names and their descriptions are:

* **Page** - Inject to enable paging.
* **Sort** - Inject to enable sorting.
* **Filter** - Inject to enable filtering.
* **ExcelExport** - Inject to enable Excel export.
* **PdfExport** - Inject to enable PDF export.

These modules should be injected into the TreeGrid using the **Inject** directive.

> Additional feature modules are available [here](./module).

## Enable Paging

The paging feature displays records in a paged view. Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowpaging) property to true. Inject the **Page** module in **Inject.services**. If the **Page** service is not injected, the pager controls will not render and the allowPaging property will have no effect. Customize the pager using the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettings) property.

Root-level paging mode is available, which bases paging on root-level rows only, ignoring child row count. Enable root-level paging using the [pageSettings.pageSizeMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettings#pagesizemode) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/treegrid/getting-started-cs1/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/treegrid/getting-started-cs1/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs1" %}

## Enable Sorting

The sorting feature orders records. Enable sorting by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowsorting) property to true. Inject the **Sort** module in **Inject.services**. If the **Sort** module is not injected, clicking column headers will not sort data, and sort indicators will not appear. Customize sorting using the [sortSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid#sortsettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/treegrid/getting-started-cs2/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/treegrid/getting-started-cs2/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs2" %}

## Enable Filtering

The filtering feature displays a reduced set of records based on filter criteria. Enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowfiltering) property to true. Inject the **Filter** module in **Inject.services**. If the **Filter** module is not injected, the filter bar will not render and filtering will not work. Customize filtering using the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings) property.

By default, filtered records are shown along with their parent records, preserving the parent-child hierarchy. Change this behavior using the [filterSettings.hierarchyMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings#hierarchyMode) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/treegrid/getting-started-cs3/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/treegrid/getting-started-cs3/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs3" %}

## Run the application

Run the `npm run dev` command in the console to start the development server. This command compiles the code and serves the application locally, opening it in the browser.

```
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/treegrid/getting-started-cs4/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/treegrid/getting-started-cs4/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/getting-started-cs4" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.

## Handling errors

Error handling in TreeGrid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/treegrid#actionfailure) event. When configuring the TreeGrid or enabling specific features through its API, Configuration mistakes might occur. The `actionFailure` event triggers in such cases and can be used to manage these errors. The event covers scenarios such as:

* For CRUD operations, row drag and drop, and persisting selection, map the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property to a unique data column. Otherwise, an error occurs.
* [Paging](https://ej2.syncfusion.com/react/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/react/documentation/treegrid/virtual-scroll). Enabling both results in an error.
* To render the TreeGrid, map either the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid#datasource) or [columns](https://ej2.syncfusion.com/react/documentation/api/treegrid#columns) property. Missing both results in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid#frozencolumns). Enabling both simultaneously results in an error.
* The [detailTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them together results in an error.
* The [frozenRows](https://ej2.syncfusion.com/react/documentation/api/treegrid#frozenrows) and `frozenColumns` features are not supported with [rowtemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/react/documentation/treegrid/editing/cell-editing). Combining them results in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/react/documentation/treegrid/selection/selection) is not supported when using `rowTemplate`. Enabling both simultaneously results in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/react/documentation/api/treegrid#treecolumnindex) value to display the tree structure. A value exceeding the total column count results in an error.
* For `virtualization`, do not specify height and width in percentages. Percentages result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/react/documentation/treegrid/filtering/filter-bar)) type, do not apply other [filterType](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterType) values to columns within the same tree grid; this results in an error.
* In TreeGrid, avoid enabling [idMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid#childmapping) simultaneously. Enabling both results in an error.
* The [showCheckbox](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn#showcheckbox) column should be defined only in the tree column. Defining it elsewhere results in an error.
* The [textAlign](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn#textalign) right value is not applicable for tree columns. Enabling right alignment for tree columns results in an error.

The following example shows how to use the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/treegrid#actionfailure) event in the TreeGrid to display an exception when `isPrimaryKey` is not configured properly.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/error-handling/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/error-handling/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/treegrid/error-handling/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/treegrid/error-handling/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/error-handling" %}

## See Also

* [Getting Started with Syncfusion JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)