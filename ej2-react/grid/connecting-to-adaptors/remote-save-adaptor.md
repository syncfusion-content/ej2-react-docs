---
layout: post
title: Bind data & perform CRUD with RemoteSaveAdaptor in Syncfusion Grid
description: Learn here all about how to bind data and perform CRUD action using RemoteSaveAdaptor in Syncfusion React Grid.
platform: ej2-react
control: grid
keywords: Adaptors, RemoteSaveAdaptor, remotesave adaptor, remotedata 
documentation: ug
domainurl: ##DomainURL##
---

# Binding and perform CRUD operation using RemoteSaveAdaptor

The `RemoteSaveAdaptor` in Syncfusion React Grid allows efficient handling of sorting, filtering, searching, and paging primarily on the client-side, while delegating CRUD operations (Create, Read, Update, Delete) to the server-side for data persistence. This approach reduces unnecessary server interactions, improving performance and user experience.

Ensure your server-side implementation in ASP.NET Core handles CRUD operations. Here is an example of how you can set up your ASP.NET Core controller to handle these operations:

**Server-Side Implementation**

To configure a server with Syncfusion React Grid, you need to follow the below steps:

**1. Project Creation:**

Open Visual Studio and create an React and ASP.NET Core project named **RemoteSaveAdaptor**. To create an React and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022) for detailed steps.

**2. Model Class Creation:**

Create a model class named **OrdersDetails.cs** in the server-side **Models** folder to represent the order data.

```cs
using System.ComponentModel.DataAnnotations;

namespace RemoteSaveAdaptor.Server.Models
{
  public class OrdersDetails
  {
    public static List<OrdersDetails> order = new List<OrdersDetails>();
    public OrdersDetails()
    {

    }
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

    public static List<OrdersDetails> GetAllRecords()
    {
        if (order.Count() == 0)
        {
            int code = 10000;
            for (int i = 1; i <= 2000; i++)
            {
                order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                code += 5;
            }
        }
        return order;
    }
    [Key]
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public int? EmployeeID { get; set; }
    public double? Freight { get; set; }
    public string ShipCity { get; set; }
    public bool? Verified { get; set; }
    public DateTime? OrderDate { get; set; }
    public string? ShipName { get; set; }
    public string? ShipCountry { get; set; }
    public DateTime? ShippedDate { get; set; }
    public string? ShipAddress { get; set; }        
  }
}
```

**3. API Controller Creation:**

Create a file named `OrdersController.cs` under the **Controllers** folder. This controller will handle data communication with the Syncfusion React Grid.

```cs
using Microsoft.AspNetCore.Mvc;
using RemoteSaveAdaptor.Server.Models;

namespace RemoteSaveAdaptor.Server.Controllers
{
  [ApiController]
  public class OrdersController : Controller
  {
    [HttpPost]
    [Route("api/[controller]")]
    public object Post()
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Get the total records count.
      int totalRecordsCount = DataSource.Count();

      // Return data based on the request.
      return new { result = DataSource, count = totalRecordsCount };
    }

    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData()
    {
      var data = OrdersDetails.GetAllRecords().ToList();
      return data;
    }
  }
}
```

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

**Insert Operation:**

To insert a new record, utilize the `insertUrl` property to specify the controller action mapping URL for the insert operation. Implement the `Insert` method in the API controller to handle the addition of new records.  The details of the newly added record are bound to the **newRecord** parameter.

![Insert record](../images/remotesave-adaptor-insert.png)

```cs
/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="addRecord">The order to be inserted.</param>
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
```

**Update operation:**

For updating existing records, use the `updateUrl` property to specify the controller action mapping URL for the update operation. Implement the `Update` method in the API controller to handle record updates. The updated record details are bound to the **updatedRecord** parameter.

![Update record](../images/remotesave-adaptor-update.png)

```cs
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
```

**Delete operation**

To delete existing records, use the `removeUrl` property to specify the controller action mapping URL for the delete operation. The primary key value of the deleted record is bound to the **deletedRecord** parameter.

![Delete Record](../images/remotesave-adaptor-delete.png)

```cs
/// <summary>
/// Deletes an order.
/// </summary>
/// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
/// <returns>It returns the deleted record detail.</returns>
[HttpPost]
[Route("api/Orders/Remove")]
public object Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
{
  int orderId = int.Parse(deletedRecord.key.ToString()); // Get key value from the deletedRecord.
  var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
  if (data != null)
  {
    // Remove the record from the data collection.
    OrdersDetails.GetAllRecords().Remove(data);
  }
  return deletedRecord;
}
```

**4. Run the Application:**

Run the application in Visual Studio. It will be accessible on a URL like **https://localhost:xxxx**. 

After running the application, you can verify that the server-side API controller is successfully returning the order data in the URL(https://localhost:xxxx/api/Orders). Here **xxxx** denotes the port number.

**Connecting a Syncfusion React Grid to a service**

To integrate the Syncfusion Grid into your React and ASP.NET Core project using Visual Studio, follow the below steps:

**Step 1: Install syncfusion package**

Open your terminal in the project's root directory and install the required Syncfusion packages using npm:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

**Step 2: Adding CSS reference**

Include the necessary CSS files in your `App.css` file to style the Syncfusion React components:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material.css';

{% endhighlight %}
{% endtabs %}

**Step 3: Adding Syncfusion Grid**

In your component file (e.g., App.tsx), import `DataManager` and `RemoteSaveAdaptor` from `@syncfusion/ej2-data`. Create a `DataManager` instance by following these steps:

  * **Assign RemoteSaveAdaptor:** Set the `adaptor` property within the  [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) configuration to new RemoteSaveAdaptor(). This enables server-side CRUD operations for your Grid.

  * **Set dataSource Property:** Configure the `dataSource` property of your Syncfusion React Grid with a JSON object.

  * **CRUD Operations Mapping:** CRUD operations within the Grid can be mapped to server-side controller actions using specific properties:
      * **insertUrl**: Specifies the URL for inserting new data.
      * **removeUrl**: Specifies the URL for removing existing data.
      * **updateUrl**: Specifies the URL for updating existing data.
      * **crudUrl**: Specifies a single URL for all CRUD operations.
      * **batchUrl**: Specifies the URL for batch editing.

In this example, data is fetched by the server using `fetch` method and assign it to the `dataSource` property.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import React, { useEffect, useState } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit, Page, Sort, Filter } from "@syncfusion/ej2-react-grids";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";
import "./App.css";

const serviceUrl = "https://localhost:xxxx/api/Orders"; // Replace with your API URL.
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
    }, []);
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

> Replace https://localhost:xxxx/api/Orders with the actual URL of your API endpoint that provides the data in a consumable format (e.g., JSON).

Run the application in Visual Studio. It will be accessible on a URL like **https://localhost:xxxx**.

> Ensure your API service is configured to handle CORS (Cross-Origin Resource Sharing) if necessary.
  ```cs
  [program.cs]
  builder.Services.AddCors(options =>
  {
    options.AddDefaultPolicy(builder =>
    {
      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
  });
  var app = builder.Build();
  app.UseCors();
  ```
