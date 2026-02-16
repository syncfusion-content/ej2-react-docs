---
layout: post
title: React Grid - URL Adaptor | Syncfusion
description: React Grid URL adaptor explains standard REST integration, query string formats, and configuration for CRUD operations against URL endpoints.
control: Url Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote data binding with custom REST API using UrlAdaptor

The `UrlAdaptor` enables the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid to communicate with any custom REST API service. It converts grid operations (filtering, sorting, paging, CRUD) into HTTP POST requests and processes JSON responses.

For details on configuring the backend (expected request/response format, server‑side processing), refer to the [UrlAdaptor backend setup documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors#url-adaptor).

This documentation outlines the complete process for configuring the `UrlAdaptor` with the React Grid, covering frontend integration, data binding, and performing CRUD operations.

## Frontend setup (React with UrlAdaptor)

With backend API ready (either ASP.NET Core or Node.js), Syncfusion React Grid integration with `UrlAdaptor` enables data display and interaction. Frontend setup remains identical regardless of backend choice (ASP.NET Core or Node.js). `UrlAdaptor` works with any backend returning data in the correct JSON format.

### Step 1: Install Syncfusion packages

Open a terminal in the **ClientApp** folder (or project root) and install the required packages:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

### Step 2: Add CSS styles

Syncfusion Grid requires CSS for proper rendering. Add these imports to `index.css` or `App.css`:

```ts
{% tabs %}
{% highlight css tabtitle="index.css" %}

/* Base styles - Required for all Syncfusion components */
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';

/* Component-specific styles */
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';

/* Grid component styles - Required */
@import '../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}
```

**Available themes:**
- `material3.css` - Material Design (Google)
- `bootstrap5.css` - Bootstrap 5 theme
- `fluent.css` - Microsoft Fluent Design
- `tailwind.css` - Tailwind CSS theme
- `fabric.css` - Microsoft Fabric Design

To use a different theme, replace `material` with the preferred theme name in all imports.

**Minimal CSS (if file size is a concern):**
```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material3.css';
```

> **Note:** Additional CSS files are needed when enabling features like filtering, editing, or paging that use dropdowns, buttons, or date pickers.

### Step 3: Create Grid component with UrlAdaptor

Grid creation and backend API connection uses `UrlAdaptor`.

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}
{% raw %}
import React from 'react';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

function App() {
  // Configure DataManager with UrlAdaptor.
  const data = new DataManager({ 
    url: 'https://localhost:5001/api/grid',  // Replace 5001 with the backend port.
    adaptor: new UrlAdaptor()                // Specify UrlAdaptor for custom REST API.
  });

  return (
    <div className="App">
      <h2>Orders Data with UrlAdaptor</h2>
      <GridComponent dataSource={data} height={400}>
        <ColumnsDirective>
          <ColumnDirective 
            field='OrderID' 
            headerText='Order ID' 
            isPrimaryKey={true} 
            width='120' 
            textAlign='Right' 
          />
          <ColumnDirective 
            field='CustomerID' 
            headerText='Customer ID' 
            width='150' 
          />
          <ColumnDirective 
            field='ShipCity' 
            headerText='Ship City' 
            width='150' 
          />
          <ColumnDirective 
            field='ShipCountry' 
            headerText='Ship Country' 
            width='150' 
          />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Run the application

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/grid**, where **xxxx** is the port. Grid displays order data fetched from the backend API:

![UrlAdaptor](../images/adaptor.gif)

**Troubleshooting:**
-  **Empty Grid**: Check browser console for errors and verify API URL correctness.
-  **CORS error**: Backend **Program.cs** must contain CORS configuration.
-  **Network error**: Verify backend accessibility and status.
-  **Wrong data format**: API responses must return `{result: [...], count: number}` in JSON format.

> **Developer Tools**: Browser DevTools (F12) → Network tab displays actual requests and responses between Grid and API.

## Part 3: Server-side data operations

Large dataset optimization requires server-side data operations (filtering, sorting, paging) rather than browser-based processing. The `Syncfusion.EJ2.AspNet.Core` package provides built-in methods for efficient operation handling.

### Understanding server-side operations

**Why server-side processing?**
- **Performance**: Process 100K+ records without client slowdown.
- **Scalability**: Server handles heavy lifting, not browser.
- **Bandwidth**: Transfer only needed data (e.g., 10 records instead of 10,000).
- **Security**: Sensitive filtering logic stays on server.

**How it works:**
1. Grid action execution (e.g., sorting by "CustomerID").
2. `POST` request transmission with operation details to backend.
3. Backend processes request and returns filtered/sorted data.
4. Grid data display with processed results.

### Server-side operation methods

The `Syncfusion.EJ2.Base` namespace provides these methods:

| Operation | Method(s) | Purpose | Use Case |
|-----------|-----------|---------|----------|
| **Paging** | `PerformSkip`, `PerformTake` | Load specific page of data | Show 10 records at a time from 100K records |
| **Filtering** | `PerformFiltering` | Apply filter conditions | Show only orders from "Germany" |
| **Searching** | `PerformSearching` | Search across columns | Find all records containing "ALFKI" |
| **Sorting** | `PerformSorting` | Sort by one/multiple columns | Order by CustomerID ascending |
| **Grouping** | `PerformGrouping` | Group data with aggregates | Group by ShipCountry with totals |

**Required imports:**
```csharp
using Syncfusion.EJ2.Base;  // DataManagerRequest, QueryableOperation, DataOperations
```

> **Note:** It must have `Syncfusion.EJ2.AspNet.Core` NuGet package installed (covered in [Step 2](#step-2-install-required-nuget-package)).

### Paging and virtual scrolling (remote)

Paging implementation uses `PerformTake` and `PerformSkip` from `QueryableOperation` on the server to apply paging from the `DataManagerRequest`. Virtual scrolling requires `enableVirtualization` in the grid with server-side large skip handling.

![UrlAdaptor paging](../images/url-adaptor-paging.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Get the total records count.
  int totalRecordsCount = DataSource.Count();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling paging operation.
  if (DataManagerRequest.Skip != 0)
  {
    DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
  }
  if (DataManagerRequest.Take != 0)
  {
    DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
  }

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    adaptor: new UrlAdaptor()
  });
  return (
    <GridComponent dataSource={data} allowPaging={true} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Filtering

API endpoints supporting custom filtering criteria use `PerformFiltering` from `QueryableOperation` to apply filters from the `DataManagerRequest`. Complex predicates require iteration through nested conditions.

**Single column filtering**
![Single column filtering](../images/url-adaptor-filtering.png)

**Multi column filtering**
![Multi column filtering](../images/url-adaptor-multi-filtering.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
  {
    // Handling filtering operation.
    DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where);
  }

  // Get the total records count.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    adaptor: new UrlAdaptor()
  });
  return (
    <GridComponent dataSource={data} allowFiltering={true} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Searching

`PerformSearching` from `QueryableOperation` processes search criteria from the `DataManagerRequest`.

![UrlAdaptor searching](../images/url-adaptor-searching.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling searching operation.
  if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
  {
    DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
  }

  // Get the total records count.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    adaptor: new UrlAdaptor()
  });
  const toolbar = ['Search'];
  return (
    <GridComponent dataSource={data} toolbar={toolbar} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Toolbar]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Sorting

`PerformSorting` from `QueryableOperation` applies sorting from the `DataManagerRequest`.

**Single column sorting**
![Single column sorting](../images/url-adaptor-sorting.png)

**Multi column sorting**
![Multi column sorting](../images/url-adaptor-multi-sorting.png)

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling sorting operation.
  if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
  {
    DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Sort, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    adaptor: new UrlAdaptor()
  });
  return (
    <GridComponent dataSource={data} allowSorting={true} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Grouping and aggregates

Server processing of group and aggregate details from the `DataManagerRequest` computes aggregates on the full dataset and applies grouping with `PerformGrouping`.

{% tabs %}
{% highlight cs tabtitle="GridController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations(); 

  int totalRecordsCount = DataSource.Count();

  // Calculate aggregates on the entire dataset instead of just the page.
  List<string> fields = new List<string>();
  if (DataManagerRequest.Aggregates != null)
  {
    // Process the aggregates on the full dataset.
    for (var i = 0; i < DataManagerRequest.Aggregates.Count; i++)
      fields.Add(DataManagerRequest.Aggregates[i].Field);
  }
  IEnumerable<object> aggregateValue = ((IEnumerable<object>)operation.PerformSelect(DataSource, fields)).ToList();

  IEnumerable groupedData = null;
  // Handling grouping operation.
  if (DataManagerRequest.Group != null)
  {
    groupedData = operation.PerformGrouping<OrdersDetails>(DataSource, DataManagerRequest); 
  }
  // Return the result and count object.
  return DataManagerRequest.RequiresCounts ? new JsonResult(new { 
    result = (groupedData == null) ? DataSource : groupedData, 
    groupDs = groupedData, 
    aggregate = aggregateValue,  
    count = totalRecordsCount }) : new JsonResult(DataSource); 
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective, GridComponent, Inject, Group, Aggregate } from '@syncfusion/ej2-react-grids';

function App() {
  const groupSettings = {
    columns: ['ShipCountry'],
    showDropArea: true
  };
  const captionTemplate = (props) => {
    return (<span>Max: {props.Max}</span>);
  };
  const data = new DataManager({
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    adaptor: new UrlAdaptor()
  });
  return (
    <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' format='C2' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <AggregatesDirective>
        <AggregateDirective>
          <AggregateColumnsDirective>
            <AggregateColumnDirective field='Freight' type='Max' groupCaptionTemplate={captionTemplate} />
          </AggregateColumnsDirective>
        </AggregateDirective>
      </AggregatesDirective>
      <Inject services={[Group, Aggregate]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

## CRUD operations

Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid integrates CRUD (Create, Read, Update, Delete) operations with server-side controller actions through `insertUrl`, `removeUrl`, `updateUrl`, `crudUrl`, and `batchUrl` properties.

### Configure CRUD URL mapping

CRUD operations map to server-side controller actions through specific properties:

1. **insertUrl**: Specifies the URL for inserting new records.
2. **updateUrl**: Specifies the URL for updating existing records.
3. **removeUrl**: Specifies the URL for deleting records.
4. **crudUrl**: Specifies a single URL for all CRUD operations (alternative to individual URLs).
5. **batchUrl**: Specifies the URL for batch editing (multiple changes in one request).

**When to use each approach**:
- **Individual URLs** (`insertUrl`, `updateUrl`, `removeUrl`): Best for APIs with separate endpoints
- **Single endpoint** (`crudUrl`): Simpler for backend that route by action type
- **Batch URL** (`batchUrl`): Best for bulk operations (multiple changes in one request)

For detailed editing setup, refer to the [editing documentation](https://ej2.syncfusion.com/react/documentation/grid/editing/edit). The following example demonstrates inline edit [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) with a [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) for action buttons.

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    insertUrl: 'https://localhost:xxxx/api/grid/Insert',
    updateUrl: 'https://localhost:xxxx/api/grid/Update',
    removeUrl: 'https://localhost:xxxx/api/grid/Remove',
    adaptor: new UrlAdaptor()
  });
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const orderIDRules = {required: true};
  const customerIDRules = {required: true, minLength: 3};
  return (
    <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules}></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules}></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

> * Normal or inline editing represents the default [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode).
> * CRUD operations require [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property set to `true` on a unique column.

The below class is used to structure data sent during CRUD operations.

```cs
public class CRUDModel<T> where T : class
{
  public string? action { get; set; }
  public string? keyColumn { get; set; }
  public object? key { get; set; }
  public T? value { get; set; }
  public List<T>? added { get; set; }
  public List<T>? changed { get; set; }
  public List<T>? deleted { get; set; }
  public IDictionary<string, object>? @params { get; set; }
}
```

### Insert

The `insertUrl` property specifies the controller action mapping URL for insert operations. The **newRecord** parameter contains newly added record details.

![Insert record](../images/url-adaptor-insert-record.png)

```cs
/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="newRecord">It contains the new record detail that needs to be inserted.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("api/[controller]/Insert")]
public void Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
{
  if (newRecord.value != null)
  {
    OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
  }
}
```

### Update

The `updateUrl` property specifies the controller action mapping URL for update operations. The **updatedRecord** parameter contains updated record details.

![Update record](../images/url-adaptor-update-record.png)

```cs
/// <summary>
/// Update an existing data item from the data collection.
/// </summary>
/// <param name="Order">It contains the updated record detail that needs to be updated.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("api/[controller]/Update")]
public void Update([FromBody] CRUDModel<OrdersDetails> Order)
{
  var updatedOrder = Order.value;
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(existingOrder => existingOrder.OrderID == updatedOrder.OrderID);
  if (data != null)
  {
    // Update the existing record.
    data.OrderID = updatedOrder.OrderID;
    data.CustomerID = updatedOrder.CustomerID;
    data.ShipCity = updatedOrder.ShipCity;
    data.ShipCountry = updatedOrder.ShipCountry;
    // Update other properties similarly.
  }
}
```

### Delete

The `removeUrl` property specifies the controller action mapping URL for delete operations. The **deletedRecord** parameter contains the primary key value of the deleted record.

![Delete Record](../images/url-adaptor-delete-record.png)

```cs
/// <summary>
/// Remove a specific data item from the data collection.
/// </summary>
/// <param name="value">It contains the specific record detail that needs to be removed.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("api/[controller]/Remove")]
public void Remove([FromBody] CRUDModel<OrdersDetails> value)
{
  int orderId = int.Parse(value.key.ToString());
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
  if (data != null)
  {
    // Remove the record from the data collection.
    OrdersDetails.GetAllRecords().Remove(data);
  }
}
```

![UrlAdaptor CRUD operations](../images/adaptor-crud-operation.gif)

### Batch CRUD

Batch operations require edit [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) set to `Batch` with `batchUrl` property in the DataManager. Add rows with the **Add** button, edit cells by double-clicking, and delete rows with the **Delete** button. The **Update** button submits all changes in one `POST` request.

```ts
// App.jsx
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    batchUrl: 'https://localhost:xxxx/api/grid/BatchUpdate',
    adaptor: new UrlAdaptor()
  });
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const orderIDRules = {required: true};
  const customerIDRules = {required: true, minLength: 3};
  return (
    <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules}></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules}></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit]} />
    </GridComponent>
  );
};
export default App;
```

```cs
public IActionResult BatchUpdate([FromBody] CRUDModel<OrdersDetails> batchOperation)
{
  if (batchOperation.added != null)
  {
    foreach (var addedOrder in batchOperation.added)
    {
      OrdersDetails.GetAllRecords().Insert(0, addedOrder);
    }
  }
  if (batchOperation.changed != null)
  {
    foreach (var changedOrder in batchOperation.changed)
    {
      var existingOrder = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == changedOrder.OrderID);
      if (existingOrder != null)
      {
        existingOrder.CustomerID = changedOrder.CustomerID;
        existingOrder.ShipCity = changedOrder.ShipCity;
        // Update other properties as needed.
      }
    }
  }
  if (batchOperation.deleted != null)
  {
    foreach (var deletedOrder in batchOperation.deleted)
    {
      var orderToDelete = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == deletedOrder.OrderID);
      if (orderToDelete != null)
      {
        OrdersDetails.GetAllRecords().Remove(orderToDelete);
      }
    }
  }
  return Json(batchOperation);
}
```

![UrlAdaptor Batch Editing](../images/url-adaptor-batch-editing.gif)

### Single endpoint for all CRUD actions

The `crudUrl` property specifies the controller action mapping URL for all CRUD operations using a single server-side method instead of separate endpoint specifications.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/grid', // Replace with the hosted link.
    crudUrl: 'https://localhost:xxxx/api/grid/CrudUpdate',
    adaptor: new UrlAdaptor()
  });
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const orderIDRules = {required: true};
  const customerIDRules = {required: true, minLength: 3};
  return (
    <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules}></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules}></ColumnDirective>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit]} />
    </GridComponent>
  );
};
export default App;
```

```cs
[HttpPost]
[Route("api/[controller]/CrudUpdate")]
public void CrudUpdate([FromBody] CRUDModel<OrdersDetails> request)
{
  if (request.action == "update")
  {
    var orderValue = request.value;
    OrdersDetails existingRecord = OrdersDetails.GetAllRecords().Where(or => or.OrderID == orderValue.OrderID).FirstOrDefault();
    existingRecord.OrderID = orderValue.OrderID;
    existingRecord.CustomerID = orderValue.CustomerID;
    existingRecord.ShipCity = orderValue.ShipCity;
  }
  else if (request.action == "insert")
  {
    OrdersDetails.GetAllRecords().Insert(0, request.value);
  }
  else if (request.action == "remove")
  {
    OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == int.Parse(request.key.ToString())).FirstOrDefault());
  }
}
```

## Foreign key columns

Foreign key column configuration with remote data using `UrlAdaptor` requires assigning the `DataManager` instance with endpoint URL to the column data source along with foreign key field and value properties. When both grid and foreign key column use `UrlAdaptor`, grid data and foreign key data are fetched separately from respective remote endpoints. Filtering and sorting operations trigger server requests based on the foreign key field and corresponding value.

```ts
[App.jsx]
import {  GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Inject, Sort, ForeignKey, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function ForeignKeyColumn() {
  let gridInstance;
  const toolbarOptions = ['Search'];
  // Grid data source.
  let orders = new DataManager({
    url: 'http://localhost:xxxx/api/grid',
    adaptor: new UrlAdaptor(),
  });
  // Foreign key data source.
  let customers = new DataManager({
    url: 'http://localhost:xxxx/api/Customers',
    adaptor: new UrlAdaptor(),
  });

  return (
    <div className="control-pane">
      <div className="control-section">
        <GridComponent dataSource={orders} allowPaging={true} ref={(grid) => (gridInstance = grid)} allowFiltering={true} allowSorting={true} filterSettings={{ type: 'Menu' }} toolbar={toolbarOptions} >
          <ColumnsDirective>
            <ColumnDirective field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey={true} ></ColumnDirective>
            <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" foreignKeyValue="CustomerName" foreignKeyField="CustomerID" dataSource={customers}></ColumnDirective>
            <ColumnDirective field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right" editType="numericedit"></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Filter, Page, Sort, ForeignKey, Toolbar]} />
        </GridComponent>
      </div>
    </div>
  );
}
export default ForeignKeyColumn;
```

### Filter and search operation

Filtering foreign-key columns automatically displays related text values via the `foreignKeyValue` property, while actual filtering uses the `foreignKeyField` property.

![ForeignKey column filtering](../images/foreign-key-filter.png)

```cs
[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source.
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling filtering operation.
  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
  {
   DataSource = operation.PerformFiltering(DataSource, DataManagerRequest.Where, DataManagerRequest.Where[0].Operator);
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}
```
> Grid search with foreign key columns creates a filter query for each column. Foreign key columns query the associated data source to retrieve the underlying field value matching the search term.

### Sort operation

Foreign key column sorting orders records based on the underlying "CustomerID" field value. Foreign key value sorting requires supplying the foreign key's data source to the sorted query within the `PerformSorting` method.

![ForeignKey column Sorting](../images/foreign-key-sorting.png)

```csharp
[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

  // Initialize QueryableOperation instance.
  QueryableOperation queryableOperation = new QueryableOperation(); 

  // Handling sorting operation.
  if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0) 
  {
    for (int i = 0; i < DataManagerRequest.Sorted.Count; i++)
    {
      if (DataManagerRequest.Sorted[i].ForeignKeyValue == "CustomerName")
      {
        DataManagerRequest.Sorted[i].ForeignKeyDataSource = GetCustomerData().AsQueryable();
      }
    }
    DataSource = operation.PerformSorting(DataSource, DataManagerRequest.Sorted);
  }
  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}
```
> Foreign key column sorting based on foreign key value requires including the foreign key data source in the sorted query of the `DataManager` request on the server. Without the foreign key data source, sorting performs based on the column field.
