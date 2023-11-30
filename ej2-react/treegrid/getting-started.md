---
layout: post
title: Getting started with React Treegrid component | Syncfusion
description:  Checkout and learn about Getting started with React Treegrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps required to create a simple Essential JS 2 TreeGrid and demonstrates the basic usage of the TreeGrid control in a React application.

To get start quickly with React Tree Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=dQcIAoSgARc" %}

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install **create-react-app** run the following command.

```
npm install -g create-react-app
```

* To setup basic **React** sample use following commands.

```
create-react-app quickstart --template typescript

cd quickstart

npm install

```

## Adding Syncfusion TreeGrid packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install TreeGrid component, use the following command

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

> Additional feature modules are available [`here`](./module).

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

The [`create-react-app`](https://github.com/facebookincubator/create-react-app) will pre-configure the project to compile and run the application in browser. Use the following command to run the application.

```

npm start

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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
