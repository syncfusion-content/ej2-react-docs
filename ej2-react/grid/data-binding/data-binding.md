---
layout: post
title: React Grid - Data Binding | Syncfusion
description: Data binding in React Grid connects component state, local arrays, or remote sources to grid rows, enabling dynamic updates and controlled data flow.
control: Data binding
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Grid Component

Data binding is a fundamental technique that empowers the Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid utilizes the [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started), which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

It supports two kinds of data binding methods:

- Local data
- Remote data

To learn about binding local or remote data to the React Grid, refer to this video:

{% youtube "https://www.youtube.com/watch?v=UgeX6JMoqfs" %}

## Loading indicator

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/react/documentation/api/grid/loadingIndicatorModel) property of the grid can be utilized, which supports two types of indicators:

- `Spinner` (default)
- `Shimmer`

The following example demonstrates setting the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/javascript/documentation/api/grid/loadingindicatormodel#indicatortype) property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid#refreshcolumns) method is used to apply the changes and display the updated loading indicator type.


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

Refreshing the data shown in a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid involves updating the data that the grid displays dynamically. This operation reflects changes in the underlying data without reloading the entire page or component.

To achieve this, use the [datasource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#datasource) property in conjunction with the [setProperties] method. This ensures the grid reflects changes in the `dataSource` without requiring a complete page or component reload.

For example, when adding or deleting data source records, follow these steps:

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
grid.dataSource.unshift(data); // Add a new record.
grid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:  Refresh the datasource after changes by invoking the `setProperties` method.

```ts
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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component supports dynamic modification of the data source, columns, or both. This feature refreshes the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#changedatasource) method can be utilized. This method enables updating the data source, columns, or both, based on application requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

**1. Change both data source and columns:**

To modify both the existing columns and the data source, pass both arguments to the `changeDataSource` method. The following example demonstrates changing both the data source and columns.

Assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property to bind local data to the grid. The code below provides an example creating a data source for the grid.
You can assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#datasource) property to bind local data to the grid. The code below provides an example of how to create a data source for the grid.

```ts
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

The following code demonstrates creating the [columns](https://ej2.syncfusion.com/react/documentation/grid/columns/columns) for the grid, which are based on the provided grid data source.

```ts
    const newColumn: ColumnModel[] = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 125 },
    ];
```

The following code demonstrates updating the data source and columns defined above using the `changeDataSource` method.

```ts
    gridInstance.changeDataSource(data, newColumn);
```

**2. Modify only the existing columns:**

To modify existing columns in a grid, add or remove columns or replace the entire set of columns using the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#changedatasource) method. To use this method, set the first parameter to `null` and provide the new columns as the second parameter. Note that if a column field is not specified in the `dataSource`, its corresponding column values will be empty. The following example illustrates modifying existing columns.

The following code demonstrates adding new columns to existing grid columns "newColumn" by using the `changeDataSource` method.

```ts
    const newColumn: ColumnModel[] = [
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
    ];
    let column: any = newColumn.push(...newColumn);
    gridInstance.changeDataSource(null, column);
```

**3. Modify only the data source:**


Change the entire data source in the grid using the `changeDataSource` method. Provide the data source as the first argument; the optional second argument can specify new columns for the grid. If columns are not specified, the grid auto-generates columns based on the data source. The following example demonstrates modifying the data source.

Assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of creating a new data source for the grid.

```ts
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

The following code demonstrates the use of `changeDataSource` method to bind the new **employeeData** to the grid.

```ts
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

>* The Grid state persistence feature does not support the `changeDataSource` method.
>* In this document, the above sample uses local data for the `changeDataSource` method. For remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/react/demos/#/bootstrap5/grid/flexible-data) resource.

## Setting custom headers using a custom adaptor

Custom headers in HTTP requests are used to send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, custom headers can be added when making API requests, ensuring that each request carries the necessary information for server-side validation and processing.

This method is particularly useful when integrating the Grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, extend the `WebApiAdaptor` to create a custom adaptor. The `beforeSend` method in the custom adaptor enables modification of request headers before sending them to the server, ensuring that every request from the Grid includes the required headers.

The following example demonstrates setting custom headers using the custom adaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid.

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

## Prevent conversion to local time zone for date columns

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid converts date values to the client system's local time zone. In some scenarios, it is necessary to display the original date as received from the server without timezone conversion.

To prevent timezone conversion for a date column, use the `DataUtil.serverTimezoneOffset` property. Setting this property to "0" ensures that dates remain in the original server-provided format without conversion to the local timezone.

The following example demonstrates preventing local time zone conversion for date columns by using the `DataUtil.serverTimezoneOffset` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/databinding-timezone/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/databinding-timezone/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/databinding-timezone" %}

