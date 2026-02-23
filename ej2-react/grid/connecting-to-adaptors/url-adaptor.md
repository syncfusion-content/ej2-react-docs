---
layout: post
title: React Grid - URL Adaptor | Syncfusion
description: React Grid URL adaptor explains standard REST integration, query string formats, and configuration for CRUD operations against URL endpoints.
control: Url Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom REST API Remote Data Binding in Syncfusion React Components

The [UrlAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor) in the Syncfusion<sup style="font-size:70%">&reg;</sup> React DataManager streamlines connecting the React Grid to REST API endpoints by managing request and response handling for remote data operations. It automatically converts Grid actions such as filtering, sorting, paging, and CRUD into HTTP POST requests and processes the server’s JSON response, enabling smooth remote data binding without custom request logic.

For details on configuring the backend (expected request/response format, server‑side processing), refer to the [UrlAdaptor backend setup documentation](https://ej2.syncfusion.com/react/documentation/data/adaptors/url-adaptor).

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid Component on the client side.

**Project structure:**

```
UrlAdaptor/
├── UrlAdaptor.client/           # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add url adaptor here.
│   └── package.json
└── UrlAdaptor.Server/           # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Grid frontend setup using Syncfusion UrlAdaptor

After finishing the backend setup for the **UrlAdaptor** ASP.NET Core project, next step is to integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid on the client side by following these instructions.

### Step 1: Install Syncfusion packages

Right‑click the **UrlAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **UrlAdaptor.client directory**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

### Step 2: Add CSS styles

Syncfusion Grid requires CSS for proper rendering. Add these imports to **index.css** or **App.css**:

```ts
/* Component-specific styles */
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';

/* Grid component styles - Required */
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material3.css';
```

Import the **App.css** in the application entry point(**App.jsx**).

```js
import "./App.css";
...
...

```

### Step 3: Create React Grid component with UrlAdaptor

Grid integration with backend APIs is enabled through the `UrlAdaptor`, which serves as a connector between the Syncfusion DataManager and RESTful services. It automatically converts Grid actions such as paging, sorting, filtering, searching, and grouping into structured HTTP requests that the server can interpret. This design is particularly effective for large datasets where server‑side processing is essential.

By delegating these operations to the server rather than executing them in the browser, the Grid ensures that only the required data is retrieved for each request. 

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}
{% raw %}
import React from 'react';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import './App.css';

function App() {
  // Configure DataManager with UrlAdaptor.
  const data = new DataManager({ 
    url: 'https://localhost:5001/api/data',  // Replace 5001 with the backend port.
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

> The Grid sends a `DataManagerRequest` (typically via POST), and the server must return JSON in the format { result: [...], count: N } for proper data binding and paging.

## Server-side data operations

React Grid optimizes large datasets by relying on server‑side data operations such as filtering, sorting, and paging rather than processing everything in the browser. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads. Advantages of server‑side processing:

- **Performance**: Process 100K+ records without client slowdown.
- **Scalability**: Server handles heavy lifting, not browser.
- **Bandwidth**: Transfer only needed data (e.g., 10 records instead of 10,000).
- **Security**: Sensitive filtering logic stays on server.

### Server-side operation methods

The `Syncfusion.EJ2.Base` namespace provides these methods:

| Operation | Method(s) | Purpose | Use Case |
|-----------|-----------|---------|----------|
| **Paging** | `PerformSkip`, `PerformTake` | Load specific page of data. | Show "10" records at a time from "100K" records. |
| **Filtering** | `PerformFiltering` | Apply filter conditions. | Show only orders from "Germany". |
| **Searching** | `PerformSearching` | Search across columns. | Find all records containing "ALFKI". |
| **Sorting** | `PerformSorting` | Sort by one/multiple columns. | Order by "CustomerID" ascending. |
| **Grouping** | `PerformGrouping` | Group data with aggregates | Group by "ShipCountry" with totals. |

Add the following package import to enable server‑side DataManager operations:

```csharp
using Syncfusion.EJ2.Base; // DataManagerRequest, QueryableOperation, DataOperations
using System.Collections;
using UrlAdaptorDemo.Server.Models;

namespace UrlAdaptorDemo.Server.Controllers
{
  .  .  .
  .  .  .
}
```

> It must have `Syncfusion.EJ2.AspNet.Core` NuGet package installed (covered in UrlAdaptor backend setup documentation).

### Paging

The paging feature is enabled by setting the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowpaging) property to `true` and injecting the `Page` module from `@syncfusion/ej2-react-grids` into the grid.

```js
  <GridComponent dataSource={data} allowPaging={true}>
    . . .
    . . .
    . . .
    <Inject services={[Page]}/>
  </GridComponent>
```

After enabling paging on the client side, the server processes the incoming page requests using the `PerformSkip` and `PerformTake` methods. These methods, provided by the `DataOperations` class, apply paging based on the values received in the `DataManagerRequest`. 

The following example demonstrates the server’s handling of paging requests sent from the client.

![UrlAdaptor paging](../images/url-adaptor-paging.png)

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
   IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Get the total records count.
  int totalRecordsCount = DataSource.Count();

  // Initialize DataOperation instance.
   DataOperations operation = new DataOperations(); 

  // Handling paging operation.
  if (DataManagerRequest.Skip != 0)
  {
    DataSource = operation.PerformSkip(DataSource, DataManagerRequest.Skip);
  }
  if (DataManagerRequest.Take != 0)
  {
    DataSource = operation.PerformTake(DataSource, DataManagerRequest.Take);
  }

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
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

The filtering feature is enabled by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowfiltering) property to `true` and injecting the `Filter` module from `@syncfusion/ej2-react-grids` into the grid.

```js
  <GridComponent dataSource={data} allowFiltering={true}>
    . . .
    . . .
    . . .
    <Inject services={[Filter]}/>
  </GridComponent>
```

After enabling filtering on the client side, the server processes incoming filter requests using the `PerformFiltering` method. This method, provided by the `DataOperations` class, applies filtering based on the conditions received in the `DataManagerRequest`. 

The following example demonstrates the server’s handling of filtering requests sent from the client.

**Single column filtering**
![Single column filtering](../images/url-adaptor-filtering.png)

**Multi column filtering**
![Multi column filtering](../images/url-adaptor-multi-filtering.png)

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations();

  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
  {
    // Handling filtering operation.
    DataSource = operation.PerformFiltering(DataSource, DataManagerRequest.Where, DataManagerRequest.Where[0].Condition);
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
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
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

The searching feature is enabled by configuring the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar) property with `Search` item and injecting the `Toolbar` and `Search` modules from `@syncfusion/ej2-react-grids` into the grid.

```js
  <GridComponent dataSource={data} toolbar={['Search']}>
    . . .
    . . .
    . . .
    <Inject services={[Search,Toolbar]}/>
  </GridComponent>
```

After enabling the search feature on the client side, the server processes incoming search requests using the `PerformSearching` method. This method, provided by the `DataOperations` class, applies search criteria based on the values received in the `DataManagerRequest`. 

The following example demonstrates the server’s handling of search requests sent from the client.

![UrlAdaptor searching](../images/url-adaptor-searching.png)

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations();

  // Handling searching operation.
  if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
  {
    DataSource = operation.PerformSearching(DataSource, DataManagerRequest.Search);
  }

  // Get the total records count.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

{% endhighlight %}

{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Search, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
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
      <Inject services={[Toolbar, Search]} />
    </GridComponent>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Sorting

The sorting feature is enabled by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowsorting) property to `true` and injecting the `Sort` module from `@syncfusion/ej2-react-grids` into the grid.

```js
  <GridComponent dataSource={data} allowSorting={true}>
    . . .
    . . .
    . . .
    <Inject services={[Sort]}/>
  </GridComponent>
```

After enabling sorting on the client side, the server processes incoming sort requests using the `PerformSorting` method. This method, provided by the `DataOperations` class, applies the sorting rules received in the `DataManagerRequest`.  

The following example illustrates the server’s handling of sorting requests sent from the client.

**Single column sorting**
![Single column sorting](../images/url-adaptor-sorting.png)

**Multi column sorting**
![Multi column sorting](../images/url-adaptor-multi-sorting.png)

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations();

  // Handling sorting operation.
  if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
  {
    DataSource = operation.PerformSorting(DataSource, DataManagerRequest.Sorted);
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
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
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

The grouping and aggregates feature is enabled by setting the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowgrouping) property to `true` and injecting the `Group` and `Aggregate` modules from `@syncfusion/ej2-react-grids` into the grid.

```ts
  <GridComponent dataSource={data} allowGrouping={true}>
    . . .
    . . .
    . . .
    <Inject services={[Group, Aggregate]}/>
  </GridComponent>
```

After enabling grouping and aggregates on the client side, the server processes incoming group requests using the `PerformGrouping` method. This operation, provided by the `DataOperations` class, applies grouping rules and computes aggregate values using the details received in the `DataManagerRequest`. 

The following example illustrates the server’s handling of sorting requests sent from the client.

![UrlAdaptor grouping](../images/url-adaptor-grouping.png)

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

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
import './App.css';

function App() {
  const groupSettings = {
    columns: ['ShipCountry'],
    showDropArea: true
  };
  const captionTemplate = (props) => {
    return (<span>Max: {props.Max}</span>);
  };
  const data = new DataManager({
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
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

The Grid has now been successfully created with including paging, sorting, filtering. the next step is to enabling CRUD operations.

## CRUD operations

Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid integrates CRUD (Create, Read, Update, Delete) operations with server-side controller actions through `insertUrl`, `removeUrl`, `updateUrl`, `crudUrl`, and `batchUrl` properties.

### Configure CRUD URL mapping

CRUD operations map to server-side controller actions through specific properties:

1. **insertUrl**: Specifies the URL for inserting new records.
2. **updateUrl**: Specifies the URL for updating existing records.
3. **removeUrl**: Specifies the URL for deleting records.
4. **crudUrl**: Specifies a single URL for all CRUD operations (alternative to individual URLs).
5. **batchUrl**: Specifies the URL for batch editing (multiple changes in one request).

For detailed editing setup, refer to the [editing documentation](https://ej2.syncfusion.com/react/documentation/grid/editing/edit). The following example demonstrates inline edit [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) with a [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) for action buttons.

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
    insertUrl: 'https://localhost:xxxx/api/data/Insert',
    updateUrl: 'https://localhost:xxxx/api/data/Update',
    removeUrl: 'https://localhost:xxxx/api/data/Remove',
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

The following class on the server side defines the structure of data exchanged during CRUD operations:

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
[Route("Insert")]
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
/// <param name="updatedRecord">It contains the updated record detail that needs to be updated.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("Update")]
public void Update([FromBody] CRUDModel<OrdersDetails> updatedRecord)
{
  var updatedOrder = updatedRecord.value;
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
/// <param name="deletedRecord">It contains the specific record detail that needs to be removed.</param>
/// <returns>Returns void</returns>
[HttpPost]
[Route("Remove")]
public void Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
{
  int orderId = int.Parse(deletedRecord.key.ToString());
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
  if (data != null)
  {
    // Remove the record from the data collection.
    OrdersDetails.GetAllRecords().Remove(data);
  }
}
```

### Batch CRUD

Batch operations require edit [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) set to `Batch` with `batchUrl` property in the `DataManager`. Add rows with the **Add** button, edit cells by double-clicking, and delete rows with the **Delete** button. The **Update** button submits all changes in one `POST` request.

```ts
// App.jsx
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
    batchUrl: 'https://localhost:xxxx/api/data/BatchUpdate',
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
[HttpPost]
[Route("BatchUpdate")]
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
  return new JsonResult(batchOperation);
}
```

### Single endpoint for all CRUD actions

The `crudUrl` property specifies the controller action mapping URL for all CRUD operations using a single server-side method instead of separate endpoint specifications.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const data = new DataManager({ 
    url: 'https://localhost:xxxx/api/data', // Replace with the hosted link.
    crudUrl: 'https://localhost:xxxx/api/data/CrudUpdate',
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
[Route("CrudUpdate")]
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

import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Inject, Sort, ForeignKey } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function ForeignKeyColumn() {
  // Grid data source.
  let orders = new DataManager({
    url: 'http://localhost:xxxx/api/data',
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
        <GridComponent dataSource={orders} allowFiltering={true} allowSorting={true}>
          <ColumnsDirective>
            <ColumnDirective field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey={true} ></ColumnDirective>
            <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" foreignKeyValue="CustomerName" foreignKeyField="CustomerID" dataSource={customers}></ColumnDirective>
            <ColumnDirective field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right" editType="numericedit"></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Filter, Sort, ForeignKey]} />
        </GridComponent>
      </div>
    </div>
  );
}
export default ForeignKeyColumn;
```

### Filter operation for Foreign Key Columns

Filtering foreign-key columns automatically displays related text values via the [foreignKeyValue](https://ej2.syncfusion.com/react/documentation/api/grid/column#foreignkeyvalue) property, while actual filtering uses the [foreignKeyField](https://ej2.syncfusion.com/react/documentation/api/grid/column#foreignkeyfield) property.

![ForeignKey column filtering](../images/foreign-key-filter.png)

```cs
// orders data
[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source.
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations(); 

  // Handling filtering operation.
  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
  {
   DataSource = operation.PerformFiltering(DataSource, DataManagerRequest.Where, DataManagerRequest.Where[0].Condition);
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return new { result = DataSource, count = totalRecordsCount };
}

// customers data
[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source.
  IEnumerable<OrdersDetails> DataSource = customers.AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations();

  // Handling filtering operation.
  if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
  {
   DataSource = operation.PerformFiltering(DataSource, DataManagerRequest.Where, DataManagerRequest.Where[0].Condition);
  }

  // Get the total count of records.
  int totalRecordsCount = DataSource.Count();

  // Return data based on the request.
  return DataManagerRequest.RequiresCounts ? new { result = DataSource, count = totalRecordsCount } : DataSource;
}
```
> Grid search with foreign key columns creates a filter query for each column. Foreign key columns query the associated data source to retrieve the underlying field value matching the search term.

### Sort operation for Foreign Key Columns

Foreign key column sorting orders records based on the underlying "CustomerID" field value. Foreign key value sorting requires supplying the foreign key's data source to the sorted query within the `PerformSorting` method.

![ForeignKey column Sorting](../images/foreign-key-sorting.png)

```csharp
[HttpPost]
public object Post([FromBody] DataManagerRequest DataManagerRequest)
{
  // Retrieve data from the data source (e.g., database).
  IEnumerable<OrdersDetails> DataSource = GetOrderData().AsEnumerable();

  // Initialize DataOperation instance.
  DataOperations operation = new DataOperations();

  // Handling sorting operation.
  if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0) 
  {
    for (int i = 0; i < DataManagerRequest.Sorted.Count; i++)
    {
      if (DataManagerRequest.Sorted[i].ForeignKeyValue == "CustomerName")
      {
        DataManagerRequest.Sorted[i].ForeignKeyDataSource = GetCustomerData().AsEnumerable();
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

## Run the application

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/data**, where **xxxx** is the port. Grid displays order data fetched from the backend API:

![UrlAdaptor](../images/adaptor.gif)


## Troubleshooting

| Issue             | Resolution                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Empty response** | Check if "GetAllRecords()" is populating data.                             |
| **404 Error**      | Verify controller route is `[Route("api/[controller]")]`.                  |
| **500 Error**      | Check server logs in the Visual Studio Output window.                      |
| **CORS Error**     | Ensure CORS is configured properly in **Program.cs**.                      |

## Complete sample repository

For a complete working implementation of this example, refer to the following [GitHub](https://github.com/SyncfusionExamples/ej2-react-grid-samples/tree/master/connecting-to-adaptors/UrlAdaptor) repository.

## See also
- [Using Remote Data Binding in ASP.NET Web APIs](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/webapi-adaptor)
- [Custom Remote Binding](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/custom-adaptor)
- [Hybrid data binding](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/remote-save-adaptor)
- [RESTful CRUD Operations in ASP.NET WebForms](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor)
- [Connect to OdataV4 services](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor)
- [GraphQL Integration for Syncfusion React Grids](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/graphql-adaptor)