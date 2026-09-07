---
layout: post
title: React Grid Data Binding | Syncfusion
description: Learn how to bind local and remote data sources in React Data Grid, enable dynamic updates, and manage data flow efficiently.
control: Data binding
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in React Data Grid

Data binding is a fundamental technique that empowers the Data Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The [Data Grid](https://www.syncfusion.com/react-components/react-data-grid) utilizes the [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started), which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

The Data Grid enables data binding through the following approaches:

* [Local data](./local-data)
* [Remote data](./remote-data)
* [Custom API](./custom-binding)

To learn about binding local or remote data to the React Grid, refer to this video:

{% youtube "https://www.youtube.com/watch?v=R2wPzeRxT2k" %}

## Loading indicator

The Data Grid provides a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/react/documentation/api/grid/loadingIndicatorModel) property of the grid can be utilized, which supports two types of indicators:

- `Spinner` (default)
- `Shimmer`

The following example demonstrates setting the `loadingIndicator.indicatorType` property based on changing the dropdown value using the  [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid#refreshcolumns) method is used to apply the changes and display the updated loading indicator type.

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
    url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
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
    url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
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

## Refresh the data source using the dataSource property

Refreshing the data shown in an Data Grid involves updating the data that the grid displays dynamically. This operation reflects changes in the underlying data without reloading the entire page or component.

To achieve this, use the  [datasource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#datasource) property in conjunction with the `setProperties` method. This ensures the grid reflects changes in the `dataSource` without requiring a complete page or component reload.

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

## Change the data source or columns dynamically

The Data Grid component supports dynamic modification of the data source, columns, or both. This feature refreshes the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#changedatasource) method allows updating the grid's data source dynamically. This method enables updating the data source, columns, or both, based on application requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

### Change both data source and columns

To modify both the existing columns and the data source, pass both arguments to the `changeDataSource` method. The following example demonstrates changing both the data source and columns.

Assign a JavaScript object array to the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property to bind local data to the grid. The code below provides an example of creating a data source for the grid.

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

### Change only columns

To modify existing columns in a grid, add or remove columns or replace the entire set of columns using the [changeDataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#changedatasource) method. To use this method, set the first parameter to `null` and provide the new columns as the second parameter. Note that if a column field is not specified in the `dataSource`, its corresponding column values will be empty. The following example illustrates modifying existing columns.

The following code demonstrates adding new columns with existing grid columns "newColumn" using the `changeDataSource` method:

```ts
const newColumn: ColumnModel[] = [
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
];
let column: any = newColumn.push(...newColumn);
gridInstance.changeDataSource(null, column);
```

### Change only the data source

The `changeDataSource` method provides an option to change the entire data source in the grid by passing the new data source as the first argument. The optional second argument can specify new columns for the grid. If columns are not specified, the grid auto-generates columns based on the data source.

The following code demonstrates creating a new data source for the `changeDataSource` method:

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

The following code demonstrates the use of `changeDataSource` method to bind the new "employeeData" to the grid.

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

> * The Data Grid state persistence feature does not support the `changeDataSource` method.
> * The sample above uses local data for the `changeDataSource` method. For remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/react/demos/#/bootstrap5/grid/flexible-data) resource.

## Add custom HTTP headers using a custom adaptor

Custom headers in HTTP requests are used to send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the Data Grid, custom headers can be added when making API requests, ensuring that each request carries the necessary information for server-side validation and processing.

This method is particularly useful when integrating the grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, extend the `WebApiAdaptor` to create a custom adaptor. The `beforeSend` method in the custom adaptor enables modification of request headers before sending them to the server, ensuring that every request from the grid includes the required headers.

The following example demonstrates setting custom headers using the custom adaptor in Data Grid.

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

## Prevent local time zone conversion for date columns

By default, the Data Grid automatically converts date values to the local time zone of the client system. However, in some scenarios, it may be necessary to display the original date as received from the server without timezone conversion.

To prevent timezone conversion for date columns, use the `serverTimezoneOffset` property from `DataUtil`. Setting this property to "0" ensures dates remain in the original format received from the server without conversion to the local timezone.

The following example demonstrates preventing local time zone conversion for date columns in the grid using the `DataUtil.serverTimezoneOffset` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { DataUtil } from "@syncfusion/ej2-data";

function App() {
  let grid;
  let selectedTimezone = -12;
  let timezoneCheckboxRef;
  const hostUrl = "https://services.syncfusion.com/react/production/";
  const data = new DataManager({ url: hostUrl + 'api/Orders', adaptor: new WebApiAdaptor });
  const field = { text: 'text', value: 'value' };
  const timeZones = [
    { value: -12, text: "-12:00 UTC" },
    { value: -11, text: "-11:00 UTC" },
    { value: -10, text: "-10:00 UTC" },
    { value: -9, text: "-09:00 UTC" },
    { value: -8, text: "-08:00 UTC" },
    { value: -7, text: "-07:00 UTC" },
    { value: -6, text: "-06:00 UTC" },
    { value: -5, text: "-05:00 UTC" },
    { value: -4, text: "-04:00 UTC" },
    { value: -3, text: "-03:00 UTC" },
    { value: -2, text: "-02:00 UTC" },
    { value: -1, text: "-01:00 UTC" },
    { value: 0, text: "+00:00 UTC" },
    { value: 1, text: "+01:00 UTC" },
    { value: 2, text: "+02:00 UTC" },
    { value: 3, text: "+03:00 UTC" },
    { value: 4, text: "+04:00 UTC" },
    { value: 5, text: "+05:00 UTC" },
    { value: 5.5, text: "+05:30 UTC" },
    { value: 6, text: "+06:00 UTC" },
    { value: 7, text: "+07:00 UTC" },
    { value: 8, text: "+08:00 UTC" },
    { value: 9, text: "+09:00 UTC" },
    { value: 10, text: "+10:00 UTC" },
    { value: 11, text: "+11:00 UTC" },
    { value: 12, text: "+12:00 UTC" },
    { value: 13, text: "+13:00 UTC" },
    { value: 14, text: "+14:00 UTC" },
  ];

  const onTimezoneChange = (event) => {
    selectedTimezone=(Number(event.itemData.value));
    grid.freezeRefresh();
  };
  
  const onCheckboxChange = (event) => {
    grid.freezeRefresh();
  };

  const load= (event) => {
    DataUtil.serverTimezoneOffset = timezoneCheckboxRef.checked ? 0 : selectedTimezone;
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Select Timezone:</label>
        <DropDownListComponent
          id="timezone"
          width="150px"
          dataSource={timeZones}
          value={selectedTimezone}
          change={onTimezoneChange}
          fields={field}
          index={0}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <CheckBoxComponent
          ref ={checkbox=>timezoneCheckboxRef=checkbox}
          label="Prevent Timezone Conversion"
          change={onCheckboxChange}
        />
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} load={load} height={280}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width={120} />
          <ColumnDirective field="CustomerID" headerText="Customer ID" width={140} />
          <ColumnDirective field="Freight" headerText="Freight" textAlign="Right" format="C" width={120} />
          <ColumnDirective field="OrderDate" headerText="Order Date" textAlign="Right" width={140} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { DataUtil } from "@syncfusion/ej2-data";
function App() {
  let grid: GridComponent | null;
  let selectedTimezone: number = -12;
  let timezoneCheckboxRef: CheckBoxComponent| null;
  const hostUrl = "https://services.syncfusion.com/react/production/";
  const data = new DataManager({ url: hostUrl + 'api/Orders', adaptor: new WebApiAdaptor });
  const field = { text: 'text', value: 'value' };
  const timeZones = [
    { value: -12, text: "-12:00 UTC" },
    { value: -11, text: "-11:00 UTC" },
    { value: -10, text: "-10:00 UTC" },
    { value: -9, text: "-09:00 UTC" },
    { value: -8, text: "-08:00 UTC" },
    { value: -7, text: "-07:00 UTC" },
    { value: -6, text: "-06:00 UTC" },
    { value: -5, text: "-05:00 UTC" },
    { value: -4, text: "-04:00 UTC" },
    { value: -3, text: "-03:00 UTC" },
    { value: -2, text: "-02:00 UTC" },
    { value: -1, text: "-01:00 UTC" },
    { value: 0, text: "+00:00 UTC" },
    { value: 1, text: "+01:00 UTC" },
    { value: 2, text: "+02:00 UTC" },
    { value: 3, text: "+03:00 UTC" },
    { value: 4, text: "+04:00 UTC" },
    { value: 5, text: "+05:00 UTC" },
    { value: 5.5, text: "+05:30 UTC" },
    { value: 6, text: "+06:00 UTC" },
    { value: 7, text: "+07:00 UTC" },
    { value: 8, text: "+08:00 UTC" },
    { value: 9, text: "+09:00 UTC" },
    { value: 10, text: "+10:00 UTC" },
    { value: 11, text: "+11:00 UTC" },
    { value: 12, text: "+12:00 UTC" },
    { value: 13, text: "+13:00 UTC" },
    { value: 14, text: "+14:00 UTC" },
  ];

  const onTimezoneChange = (event: ChangeEventArgs) => {
    selectedTimezone=(Number(event.itemData.value));
    grid.freezeRefresh();
  };
  
  const onCheckboxChange = (event: ChangeEventArgs) => {
    grid.freezeRefresh();
  };

  const load= (event: object) => {
    DataUtil.serverTimezoneOffset = timezoneCheckboxRef.checked ? 0 : selectedTimezone;
  }
  
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Select Timezone:</label>
        <DropDownListComponent
          id="timezone"
          width="150px"
          dataSource={timeZones}
          value={selectedTimezone}
          change={onTimezoneChange}
          fields={field}
          index={0}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <CheckBoxComponent
          ref ={checkbox=>timezoneCheckboxRef=checkbox}
          label="Prevent Timezone Conversion"
          change={onCheckboxChange}
        />
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} load={load} height={280}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width={120} />
          <ColumnDirective field="CustomerID" headerText="Customer ID" width={140} />
          <ColumnDirective field="Freight" headerText="Freight" textAlign="Right" format="C" width={120} />
          <ColumnDirective field="OrderDate" headerText="Order Date" textAlign="Right" width={140} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/databinding-timezone" %}

## See also

* [Local data binding](./local-data)
* [Remote data binding](./remote-data)
* [Custom data binding](./custom-binding)