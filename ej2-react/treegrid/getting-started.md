
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

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeGrid and demonstrates the basic usage of the TreeGrid control in a React application.

To get start quickly with React Tree Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=dQcIAoSgARc" %}

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


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install TreeGrid component, use the following command

```
npm install @syncfusion/ej2-react-treegrid --save
```

## Adding CSS reference

 Add components style as given below in **src/App.css**.

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

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding TreeGrid component

Now, you can start adding TreeGrid component in the application. For getting started, add the TreeGrid component in **src/App.tsx** file using following code.

Place the following treegrid code in the **src/App.tsx**.

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

TreeGrid component features are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `App`. In the current application, we are going to use paging, sorting, filtering and exporting feature of TreeGrid. Please find relevant feature service name and description as follows.

* **Page** - Inject this service to use paging feature.
* **Sort** - Inject this service to use sorting feature.
* **Filter** - Inject this service to use filtering feature.
* **ExcelExport** - Inject this service to use Excel Export feature.
* **PdfExport** - Inject this service to use PDF Export feature.

These modules should be injected into the treegrid using the **Inject** directive.

> Additional feature modules are available [`here`](./module).

## Enable Paging

The paging feature enables users to view the TreeGrid record in a paged view. It can be enabled by setting [`allowPaging`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowpaging) property to true. Inject the **Page** module in **Inject.services** as follows. If the **Page** service is not injected, the pager will not be rendered in the treegrid. Pager can be customized using [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettings) property.

We also have Root level paging mode in which paging is based on the root level rows only i.e., it ignores the child rows count and it can be enabled by using the [`pageSettings.pageSizeMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/pageSettings/#pagesizemode) property.

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

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowsorting) property as *true*. Inject the **Sort** module in the **Inject.services** as follows. If the **Sort** module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#sortsettings) property.

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

The filtering feature enables you to view reduced amount of records based on filter criteria. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering) property as true. Inject the **Filter** module in the **Inject.services** as follows. If **Filter** module is not injected, filter bar will not be rendered in TreeGrid. Filtering feature can be customized using [`filterSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed by using [`filterSettings-hierarchyMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#hierarchyMode) property.

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

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be appears as follows.

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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisiting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/react/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/react/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) or [columns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn/#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/react/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/react/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn/#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/react/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/react/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/react/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterType/) to columns within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn/#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/react/documentation/api/treegrid/treeGridColumn/#textalign) right is not applicable for tree columns in the Tree Grid. Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey`are not configured properly in the Tree Grid.

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

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue documentation](https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
