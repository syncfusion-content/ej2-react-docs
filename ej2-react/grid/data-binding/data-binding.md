---
layout: post
title: Data binding in React Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Grid component

Data binding is a fundamental technique that empowers the Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The Syncfusion Grid utilizes the **DataManager**, which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

It supports two kinds of data binding methods:

* Local data
* Remote data

To learn about how to bind local or remote data to React Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=UgeX6JMoqfs" %}

## Loading indicator

The Syncfusion React Grid offers a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, you can utilize the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/react/documentation/api/grid/loadingIndicatorModel/) property of the grid, which supports two types of indicators:

* Spinner (default indicator)
* Shimmer

The following example demonstrates how to set the `loadingIndicator.indicatorType` property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshcolumns) method is used to apply the changes and display the updated loading indicator type. 


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
  let grid;
  let dropDown;
  const data = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new UrlAdaptor
  });
  const pageOptions = { pageSize: 5, pageCount: 5 };
  const loadingIndicator = { indicatorType: 'Spinner' };
  const ddlData = [
    { id: 'Spinner', value: 'Spinner' },
    { id: 'Shimmer', value: 'Shimmer' }
  ]
  const fields = { text: 'value', value: 'id' };
  const valueChange = () => {
    if (dropDown.value === 'Shimmer') {
      grid.loadingIndicator.indicatorType = 'Shimmer';
      grid.refreshColumns();
    } else {
      grid.loadingIndicator.indicatorType = 'Spinner';
      grid.refreshColumns();
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}> Change the loading indicator type: </label>
    <DropDownListComponent ref={d => dropDown = d} index={0} width={120} dataSource={ddlData} fields={fields} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowPaging={true} pageSettings={pageOptions} height={315} allowFiltering={true} allowSorting={true} loadingIndicator={loadingIndicator}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='Employees' headerText='Employees' width='150' />
        <ColumnDirective field='Designation' headerText='Designation' width='150' />
        <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='150' />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new UrlAdaptor
  });
  const pageOptions: PageSettingsModel = { pageSize: 5, pageCount: 5 };
  const loadingIndicator = { indicatorType: 'Spinner' };
  const ddlData: Object[] = [
    { id: 'Spinner', value: 'Spinner' },
    { id: 'Shimmer', value: 'Shimmer' }
  ]
  const fields: object = { text: 'value', value: 'id' };
  const valueChange = (args: ChangeEventArgs) => {
    if ((dropDown as DropDownListComponent).value === 'Shimmer') {
      (grid as GridComponent).loadingIndicator.indicatorType = 'Shimmer';
      (grid as GridComponent).refreshColumns();
    } else {
      (grid as GridComponent).loadingIndicator.indicatorType = 'Spinner';
      (grid as GridComponent).refreshColumns();
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}> Change the loading indicator type: </label>
    <DropDownListComponent ref={d => dropDown = d} index={0} width={120} dataSource={ddlData} fields={fields} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowPaging={true} pageSettings={pageOptions} height={315} allowFiltering={true} allowSorting={true} loadingIndicator={loadingIndicator}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='Employees' headerText='Employees' width='150' />
        <ColumnDirective field='Designation' headerText='Designation' width='150' />
        <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='150' />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/loading-indicator-cs1" %}

## Refresh the datasource using property

Refreshing the data source in a Syncfusion Grid involves updating the data that the grid displays dynamically. This operation is essential when you need to reflect changes in the underlying data without reloading the entire page or component.

To achieve this, you can make use of the [datasource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property in conjunction with the [setProperties](https://ej2.syncfusion.com/react/documentation/api/grid/#refresh) method. This ensures that the grid reflects the changes in the data source without requiring a complete page or component reload.

For example, if you add or delete data source records, follow these steps:

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
grid.dataSource.unshift(data); // Add a new record.
grid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:  Refresh the datasource after changes by invoking the `setProperties` method.

```typescript
(grid as GridComponent).setProperties({ dataSource:  (grid as GridComponent).dataSource as object[] });

```
The following example demonstrates adding a new record to the data source through an external button:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs1" %}

## Dynamically change the datasource or columns or both

The Grid component in Syncfusion allows dynamic modification of the data source, columns, or both . This feature is particularly valuable when you need to refresh the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, you can utilize the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#changedatasource) method. This method enables you to update the data source, columns, or both, based on your application's requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset.The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

**1. Change both data source and columns:**

To modify both the existing columns and the data source, you need to pass the both arguments to the `changeDataSource` method. The following example demonstrates how to change both the data source and columns.

You can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property to bind local data to the grid. The code below provides an example of how to create a data source for the grid.

```typescript
    export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', Freight: 32.38,
        ShipCity: 'Reims'
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61,
        ShipCity: 'Münster'
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Freight: 61.34,
        ShipCity: 'Rio de Janeiro'
    }];
```

The following code demonstrates how to create the [columns](https://ej2.syncfusion.com/react/documentation/grid/columns/columns) for the grid, which are based on the provided grid data source.

```typescript
    const newColumn: ColumnModel[] = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 125 },
    ];
```

The following code demonstrates updating the data source and columns defined above using the `changeDataSource` method.

```typescript
    gridInstance.changeDataSource(data, newColumn);
```

**2. Modify only the existing columns:**

To modify the existing columns in a grid, you can either add or remove columns or change the entire set of columns using the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#changedatasource) method. To use this method, you should set the first parameter to null and provide the new columns as the second parameter. However, please note that if a column field is not specified in the data source, its corresponding column values will be empty. The following example illustrates how to modify existing columns.

The following code demonstrates how to add new columns with existing grid columns ('newColumn') by using `changeDataSource` method.

```typescript
    const newColumn1: ColumnModel[] = [
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
    ];
    let column: any = newColumn.push(...newColumn1);
    gridInstance.changeDataSource(null, column);
```

**3. Modify only the data source:**

You can change the entire data source in the grid using the `changeDataSource` method. To use this method, you should provide the data source as the first argument, and  the second argument which is optional can be used to specify new columns for the grid. If you are not specifying the columns, the grid will generate the columns automatically based on the data source. The following example demonstrates how to modify the data source.

You can assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of how to create a new data source for the grid.

```typescript
     export let employeeData: Object[] = [
    {
        FirstName: 'Nancy', City: 'Seattle', Region: 'WA',
        Country: 'USA'
    },
    {
        FirstName: 'Andrew', City: 'London', Region: null,
        Country: 'UK',
    },
    {
        FirstName: 'Janet', City: 'Kirkland', Region: 'WA',
        Country: 'USA'
    }];
```

The following code demonstrates, how to use the `changeDataSource` method to bind the new **employeeData** to the grid.

```typescript
    gridInstance.changeDataSource(employeeData);
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/data-datasource/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/data-datasource/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/data-datasource/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/data-datasource/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/data-datasource" %}

>* The Grid state persistence feature does not support the  `changeDataSource` method.
>* In this document, the above sample uses the local data for `changeDataSource` method. For those using a remote data source, refer to the [FlexibleData](https://ej2.syncfusion.com/react/demos/#/bootstrap5/grid/flexible-data) resource.

## How to set custom headers using a custom adaptor in Syncfusion React Grid

Custom headers in HTTP requests are used to send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the Syncfusion React Grid, custom headers can be added when making API requests, ensuring that each request carries the necessary information for server-side validation and processing.

This method is particularly useful when integrating the Grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, the `WebApiAdaptor` can be extended to create the custom adaptor. The `beforeSend` method in the custom adaptor allows modifying request headers before sending them to the server. This ensures that every request from the Grid includes the required headers.

The following example demonstrates how to set custom headers using the custom adaptor in Syncfusion React Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/custom-headers-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/custom-headers-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="CustomAdaptor.jsx" %}
{% include code-snippet/grid/custom-headers-cs1/app/CustomAdaptor.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="CustomAdaptor.tsx" %}
{% include code-snippet/grid/custom-headers-cs1/app/CustomAdaptor.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-headers-cs1" %}