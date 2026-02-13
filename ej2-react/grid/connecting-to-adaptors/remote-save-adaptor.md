---
layout: post
title: React Grid - Remote Save Adaptor | Syncfusion
description: React Grid remote save adaptor describes server-side save workflows, configuring remote operations, and how to persist edits to backend services.
platform: ej2-react
control: grid
keywords: RemoteSaveAdaptor, client-side operations, hybrid adaptor, local filtering, server CRUD
documentation: ug
domainurl: ##DomainURL##
---

# RemoteSaveAdaptor in Syncfusion React Grid

The `RemoteSaveAdaptor` in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a hybrid approach to data management that combines the best of both client-side and server-side processing. It loads all data once from the server, then performs filtering, sorting, and paging operations locally in the browser without additional server requests. Only CRUD operations (Create, Update, Delete) communicate with the server to persist data changes.

## What is RemoteSaveAdaptor

`RemoteSaveAdaptor` is a specialized adaptor that splits data operations into two categories based on whether they modify data or simply read it.

Client-side operations (fast, no server requests):

- Filtering
- Sorting
- Searching
- Paging
- Grouping

Server-side operations (requires server requests):

- Create (Insert)
- Update (Edit)
- Delete (Remove)

Data flow:

1. Initial load: Fetches all data from server once.
2. User interactions: Filtering, sorting, and paging happen instantly in browser (no server calls).
3. Data changes: Only CRUD operations (add, edit, and delete) send requests to server.
4. Result: Fast UI with secure data persistence.

Visual comparison:

| Operation   | UrlAdaptor | RemoteSaveAdaptor |
|-------------|------------|-------------------|
| Filter      | Server     | Client            |
| Sort        | Server     | Client            |
| Page        | Server     | Client            |
| Edit        | Server     | Server            |
| Total       | 4          | 1                 |

## When to use RemoteSaveAdaptor

Best use cases:

- Medium-sized datasets (1K-50K records that fit in browser memory).
- Need instant filtering, sorting without server delay.
- Many read operations, few write operations.
- Want to reduce server load for common operations.
- Network latency is a concern.
- Users frequently switch between filters, sorts, and pages.

When NOT to use:

- Very large datasets (100K+ records) - use `UrlAdaptor` instead.
- Data changes frequently on server (real-time updates).
- Memory-constrained client devices.
- Complex server-side business logic for filtering.
- Limited bandwidth for initial data load.

This guide demonstrates setting up `RemoteSaveAdaptor` with ASP.NET Core backend and React frontend, including CRUD operations.

## Backend setup (ASP.NET Core API)

Since `RemoteSaveAdaptor` handles all read operations on the client-side, the backend only needs to:

1. Provide initial data (all records).
2. Handle CRUD operations (Insert, Update, Delete).

### Create project

Create React and ASP.NET Core project:

1. Open Visual Studio 2022.
2. Select Create a new project.
3. Choose **ASP.NET Core with React.js** template.
4. Name the project: `RemoteSaveAdaptorDemo`.
5. Select framework: .NET 6.0 or later.
6. Click Create.

For detailed instructions, see [Microsoft's documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022).

### Create data model

**Creating Models Folder:**

1. In **Solution Explorer**, right-click the **Server** project.
2. Select **Add** → **New Folder**.
3. Assign name: **"Models"**.

**Creating OrdersDetails Entity Class:**

1. Right-click the **Models** folder.
2. Select **Add** → **Class**.
3. Assign name: **"OrdersDetails.cs"**.
4. Replace default content with the implementation below:

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace RemoteSaveAdaptorDemo.Models
{
  public class OrdersDetails
  {
    // Static in-memory data store (replace with database in production).
    public static List<OrdersDetails> order = new List<OrdersDetails>();

    // Default constructor.
    public OrdersDetails()
    {
    }

    // Parameterized constructor.
    public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified, DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry, DateTime ShippedDate, string ShipAddress)
    {
      this.OrderID = OrderID;
      this.CustomerID = CustomerId;
      this.EmployeeID = EmployeeId;
      this.Freight = Freight;
      this.ShipCity = ShipCity;
      this.Verified = Verified;
      this.OrderDate = OrderDate;
      this.ShipName = ShipName;
      this.ShipCountry = ShipCountry;
      this.ShippedDate = ShippedDate;
      this.ShipAddress = ShipAddress;
    }

    /// <summary>
    /// Generates sample order data.
    /// NOTE: For RemoteSaveAdaptor, this returns ALL records at once .
    /// since filtering/paging happens on client-side.
    /// In production, this should fetch from database.
    /// </summary>
    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        // Generate 10,000 sample records (2000 iterations × 5 records).
        // RemoteSaveAdaptor can handle this as it loads all data once.
        for (int i = 1; i <= 2000; i++)
        {
          order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, 
              new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", 
              new DateTime(1996, 7, 16), "Kirchgasse 6"));
          order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, 
              new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", 
              new DateTime(1996, 9, 11), "Avda. Azteca 123"));
          order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, 
              new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", 
              new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
          order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, 
              new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", 
              new DateTime(1996, 12, 30), "Magazinweg 7"));
          order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, 
              new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", 
              new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
          code += 5;
        }
      }
      return order;
    }
    // Properties
    [Key]
    public int OrderID { get; set; }
    
    public string? CustomerID { get; set; }
    
    public int? EmployeeID { get; set; }
    
    public double? Freight { get; set; }
    
    public string? ShipCity { get; set; }
    
    public bool? Verified { get; set; }
    
    public DateTime? OrderDate { get; set; }
    
    public string? ShipName { get; set; }
    
    public string? ShipCountry { get; set; }
    
    public DateTime? ShippedDate { get; set; }
    
    public string? ShipAddress { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

> This example generates "10,000" records. `RemoteSaveAdaptor` loads all records at once, so consider dataset size. For 100K+ records, use `UrlAdaptor` or `ODataV4Adaptor` instead.

### Create API controller

Create `OrdersController.cs` in the Controllers folder. With `RemoteSaveAdaptor`, this controller only needs to:
1. Return all data on initial load (no filtering/paging logic needed)
2. Handle CRUD operations

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

using Microsoft.AspNetCore.Mvc;
using RemoteSaveAdaptorDemo.Models;

namespace RemoteSaveAdaptorDemo.Controllers
{
  [ApiController]
  public class OrdersController : ControllerBase
  {
    /// <summary>
    /// GET endpoint - Returns all records.
    /// Optional: Can be used for initial data load.
    /// </summary>
    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData()
    {
      // Return ALL records - RemoteSaveAdaptor handles filtering/paging on client.
      return OrdersDetails.GetAllRecords().ToList();
    }

    /// <summary>
    /// POST endpoint - Returns all records with count.
    /// RemoteSaveAdaptor loads ALL data once, then handles.
    /// filtering, sorting, and paging on client-side.
    /// </summary>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post()
    {
      // Retrieve ALL data from data source.
      var DataSource = GetOrderData();

      // Get total records count.
      int totalRecordsCount = DataSource.Count();

      // CRITICAL: Return ALL records (no server-side filtering/paging).
      // Client will handle these operations.
      return new { result = DataSource, count = totalRecordsCount };
    }
  }
}

{% endhighlight %}
{% endtabs %}

### CRUD model structure

The below class is used to structure data sent during CRUD operations:

{% tabs %}
{% highlight cs tabtitle="CRUDModel.cs" %}

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

{% endhighlight %}
{% endtabs %}

### Insert operation

To insert a new record, utilize the `insertUrl` property to specify the controller action mapping URL for the insert operation. Implement the `Insert` method in the API controller to handle the addition of new records. The details of the newly added record are bound to the `newRecord` parameter.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="newRecord">The order to be inserted.</param>
/// <returns>It returns the newly inserted record detail.</returns>
[HttpPost]
[Route("api/Orders/Insert")]
public ActionResult Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
{
  if (newRecord.value !=null)
  {
    OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
  }  
  return Json(newRecord.value);
}

{% endhighlight %}
{% endtabs %}

### Update operation

For updating existing records, use the `updateUrl` property to specify the controller action mapping URL for the update operation. Implement the `Update` method in the API controller to handle record updates. The updated record details are bound to the `updatedRecord` parameter.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Updates an existing order.
/// </summary>
/// <param name="updateRecord">The updated order details.</param>
/// <returns>It returns the updated order details.</returns>
[HttpPost]
[Route("api/Orders/Update")]
public object Update([FromBody] CRUDModel<OrdersDetails> updatedRecord)
{
  var updatedOrder = updatedRecord.value;
  if (updatedOrder != null)
  {
    var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
    if (data != null)
    {
      // Update the existing record.
      data.OrderID = updatedOrder.OrderID;
      data.CustomerID = updatedOrder.CustomerID;
      data.Freight = updatedOrder.Freight;
      data.ShipCity = updatedOrder.ShipCity;
      data.ShipCountry = updatedOrder.ShipCountry;
      data.Verified = updatedOrder.Verified;
      // Update other properties similarly.
    }
  }
  return updatedRecord;
}

{% endhighlight %}
{% endtabs %}

### Delete operation

To delete existing records, use the `removeUrl` property to specify the controller action mapping URL for the delete operation. The primary key value of the deleted record is bound to the `deletedRecord` parameter.


{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

/// <summary>
/// Deletes an order.
/// </summary>
/// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
/// <returns>It returns the deleted record detail.</returns>
[HttpPost]
[Route("api/Orders/Remove")]
public object Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
{
  // Get key value from the deletedRecord.
  int orderId = int.Parse(deletedRecord.key.ToString()); 
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
  if (data != null)
  {
    // Remove the record from the data collection.
    OrdersDetails.GetAllRecords().Remove(data);
  }
  return deletedRecord;
}

{% endhighlight %}
{% endtabs %}

### Run the application

Run the application in Visual Studio. It will be accessible on a URL like `https://localhost:xxxx`. 

After running the application, verify that the server-side API controller is successfully returning the order data in the URL `https://localhost:xxxx/api/Orders`. Here `xxxx` denotes the port number.

## Frontend setup (React Grid)

To integrate the Syncfusion Grid into the React and ASP.NET Core project using Visual Studio, follow the below steps:

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Open terminal in the project's root directory and install the required Syncfusion packages using npm:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

### Add CSS reference

Include the necessary CSS files in `App.css` file to style the Syncfusion React components:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

### Add Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component

In the React component file (e.g., **App.jsx**), import `DataManager` and `RemoteSaveAdaptor` from `@syncfusion/ej2-data`. The `DataManager` serves as an abstraction layer that manages the data source configuration and coordinates data operations with the Grid.

Create a `DataManager` instance by following these steps:

1. Assign RemoteSaveAdaptor: Set the `adaptor` property within the `dataSource` configuration to `new RemoteSaveAdaptor()`. This enables local filtering, sorting, and paging with server-side CRUD operations.

2. Set dataSource property: Configure the `dataSource` property of Syncfusion React Grid with a JSON object.

3. CRUD operations mapping: CRUD operations within the Grid can be mapped to server-side controller actions using specific properties:
   - `insertUrl`: Specifies the URL for inserting new data
   - `removeUrl`: Specifies the URL for removing existing data
   - `updateUrl`: Specifies the URL for updating existing data
   - `crudUrl`: Specifies a single URL for all CRUD operations
   - `batchUrl`: Specifies the URL for batch editing

In this example, data is fetched from the server using the `fetch` method and assigned to the Grid's [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property through the `DataManager` instance.

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}
{% raw %}

import React, { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit, Page, Sort, Filter } from "@syncfusion/ej2-react-grids";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";
import "./App.css";

const serviceUrl = "https://localhost:xxxx/api/Orders"; // Replace with actual backend URL.

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(serviceUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(new DataManager({
          json: result,
          adaptor: new RemoteSaveAdaptor(),
          updateUrl: `${serviceUrl}/Update`,
          insertUrl: `${serviceUrl}/Insert`,
          removeUrl: `${serviceUrl}/Remove`,
        }));
      })
      .catch((error) => console.error("Error fetching data:", error));
    }, 
  []);
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    newRowPosition: "Top",
  };
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel", "Search"];

  return (
    <div>
      {data && (
        <GridComponent id="grid" dataSource={data} editSettings={editSettings} toolbar={toolbarOptions} allowSorting={true} allowPaging={true} allowFiltering={true}>
          <ColumnsDirective>
            <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width="120" isPrimaryKey={true} />
            <ColumnDirective field="CustomerID" headerText="Customer ID" width="150" />
            <ColumnDirective field="ShipCity" headerText="Ship City" width="150" />
            <ColumnDirective field="ShipName" headerText="Ship Name" width="150" />
          </ColumnsDirective>
          <Inject services={[Toolbar, Edit, Page, Sort, Filter]} />
        </GridComponent>
      )}
    </div>
  );
};
export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

> Replace `https://localhost:xxxx/api/Orders` with the actual URL of API endpoint that provides the data in a consumable format (e.g., JSON).

---

## Configuration summary

DataManager configuration for `RemoteSaveAdaptor`:

| Property | Type | Description |
|----------|------|-------------|
| `json` | Array | Initial data loaded from server (all records). |
| `adaptor` | RemoteSaveAdaptor | Enables client-side operations with server-side CRUD. |
| `insertUrl` | string | Server endpoint for insert operation. |
| `updateUrl` | string | Server endpoint for update operation. |
| `removeUrl` | string | Server endpoint for delete operation. |

Grid configuration properties:

| Property | Type | Description |
|----------|------|-------------|
| [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) | DataManager | DataManager instance with RemoteSaveAdaptor. |
| [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid#editsettings) | EditSettingsModel | Configure CRUD operations (allowEditing, allowAdding, allowDeleting). |
| [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) | string[] | Toolbar items (Add, Edit, Delete, Update, Cancel, Search). |
| [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid#allowsorting) | boolean | Enable sorting (happens client-side). |
| [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid#allowpaging) | boolean | Enable paging (happens client-side). |
| [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering) | boolean | Enable filtering (happens client-side). |

## Run the application

Run the application in Visual Studio. It will be accessible on a URL like `https://localhost:xxxx`.

Ensure API service is configured to handle CORS (Cross-Origin Resource Sharing) if necessary:

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(builder =>
  {
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
  });
});

var app = builder.Build();
app.UseCors();

{% endhighlight %}
{% endtabs %}

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Initial load is slow | Loading all records at once | Consider pagination or use `UrlAdaptor` for large datasets |
| Filtering not working | Data not bound correctly | Ensure `json` property has all data before creating DataManager |
| CRUD operations fail | URLs not configured | Verify `insertUrl`, `updateUrl`, `removeUrl` are correct |
| Grid shows no data | Fetch error or wrong data format | Check browser console for errors, verify API response format |
| Memory issues | Dataset too large | Reduce dataset size or switch to `UrlAdaptor` |
| Sorting/filtering slow | Too many records | Consider using `UrlAdaptor` for server-side operations |
