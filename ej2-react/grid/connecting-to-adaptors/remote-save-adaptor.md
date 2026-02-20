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

# Hybrid Data Binding in Syncfusion React Grid

The `RemoteSaveAdaptor` in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a hybrid approach to data management that combines the best of both client-side and server-side processing. The adaptor fetches the complete dataset from the server once, and then executes operations such as filtering, sorting, paging, searching, and grouping locally in the browser without additional server requests. Only CRUD operations (Create, Update, Delete) communicate with the server to persist data changes. It reduces server load and network latency while keeping data persistence secure.

For complete server‑side configuration and additional implementation details, refer to the DataManager RemoteSaveAdaptor documentation, which explains endpoint setup, request handling, and best practices for synchronizing CRUD operations with remote services.

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component on the client side.

**Project Structure:**

```
RemoteSaveAdaptor/
├── RemoteSaveAdaptor.client/        # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add RemoteSaveAdaptor here.
│   └── package.json
└── RemoteSaveAdaptor.Server/        # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Grid setup and client-side configuration

After finishing the backend setup for the **RemoteSaveAdaptor** ASP.NET Core project, next step is to integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid on the client side by following these instructions.

### Step 1: Installing Syncfusion packages

Right‑click the **RemoteSaveAdaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command Prompt/PowerShell from the Start menu and navigate manually to the **RemoteSaveAdaptor.client** directory. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

### Step 2: Integrating Syncfusion stylesheet

Navigate to the **src** folder and open the **App.css** stylesheet file. Add the required CSS import statements to include the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid styles.

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material3.css';

{% endhighlight %}
{% endtabs %}

Import the **App.css** in the application entry point(**App.jsx**).

```js
import "./App.css";
...
...

```

For this project, the "Material 3" theme is applied. Other themes can be selected, or the existing theme can be customized to meet specific project requirements. For detailed guidance on theming and customization, refer to the [Syncfusion React Components Appearance](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

### Step 3: Implementing basic Grid component

In the React component file **App.jsx**, import `DataManager` and `RemoteSaveAdaptor` from `@syncfusion/ej2-data`. The `DataManager` serves as an abstraction layer that manages the data source configuration and coordinates data operations with the Grid.

**Configure the DataManager**

1. **Assign RemoteSaveAdaptor:** Set the `adaptor` property within the `dataSource` configuration to `new RemoteSaveAdaptor()`. This enables local filtering, sorting, and paging with server-side CRUD operations.

2. **Map CRUD operations**: CRUD operations within the Grid can be mapped to server-side controller actions using specific properties:
   - `insertUrl`: Specifies the URL for inserting new data
   - `removeUrl`: Specifies the URL for removing existing data
   - `updateUrl`: Specifies the URL for updating existing data
   - `crudUrl`: Specifies a single URL for all CRUD operations
   - `batchUrl`: Specifies the URL for batch editing

3. **Load JSON data**: Fetch initial data from the server that contains all records.

**Configure the Grid**

1. **Set dataSource:** Configure the `dataSource` property of Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid with a JSON object.

2. **Enable editing:** Use [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid#editsettings) to allow CRUD actions (allowEditing, allowAdding, allowDeleting).

3. **Add toolbar:** Configure [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) with items such as Add, Edit, Delete, Update, Cancel, and Search.

4. **Enable client-side features:**

    - [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid#allowsorting): Enables sorting.

    - [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid#allowpaging): Enables paging.

    - [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering): Enables filtering.

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
  return (
    <div>
      {data && (
        <GridComponent id="grid" dataSource={data} allowSorting={true} allowPaging={true} allowFiltering={true}>
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

The Grid has now been successfully created with full functionality, including paging, sorting, filtering, and CRUD features.

> Replace **https://localhost:xxxx/api/Orders** with the actual API endpoint that returns data in JSON format.

## CRUD operations

CRUD refers to the four fundamental data operations: **Create** (add records), **Read** (view records), **Update** (modify records), and **Delete** (remove records). Backend configuration for handling these operations is detailed in the Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager `RemoteSaveAdaptor` documentation, which covers endpoint setup, request handling, and best practices for synchronizing CRUD actions with remote services.

In this project, the "Order ID" column has already been designated as the primary key, which is essential for performing CRUD operations in the Grid. The following sections illustrate both the client‑side and server‑side code required to implement complete CRUD functionality.

```ts
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit } from "@syncfusion/ej2-react-grids";

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
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: "Top" };
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel", "Search"];
  return (
    <div>
      {data && (
        <GridComponent id="grid" dataSource={data} editSettings={editSettings} toolbar={toolbarOptions}>
          <ColumnsDirective>
            <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width="120" isPrimaryKey={true} />
            {/* Include additional columns here */}
          </ColumnsDirective>
          <Inject services={[Toolbar, Edit]} />
        </GridComponent>
      )}
    </div>
  );
};
export default App;
```

**CRUD model structure**

The following class on the server side defines the structure of data exchanged during CRUD operations:

{% tabs %}
{% highlight cs tabtitle="CRUDModel.cs" %}

using Microsoft.AspNetCore.Mvc;
using RemoteSaveAdaptorDemo.Models;

namespace RemoteSaveAdaptorDemo.Controllers
{
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
}

{% endhighlight %}
{% endtabs %}

### Insert operation

To insert a new record, utilize the `insertUrl` property to specify the controller action mapping URL for the insert operation. Implement the `Insert` method in the API controller to handle the addition of new records. The details of the newly added record are bound to the `newRecord` parameter.

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
        /// Inserts a new data item into the data collection.
        /// </summary>
        /// <param name="newRecord">The order to be inserted.</param>
        /// <returns>It returns the newly inserted record detail.</returns>
        [HttpPost]
        [Route("api/Orders/Insert")]
        public ActionResult Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
        {
            if (newRecord.value != null)
            {
                OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
            }

            return new JsonResult(newRecord.value);
        }
}
{% endhighlight %}
{% endtabs %}

### Update operation

For updating existing records, use the `updateUrl` property to specify the controller action mapping URL for the update operation. Implement the `Update` method in the API controller to handle record updates. The updated record details are bound to the `updatedRecord` parameter.

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
}

{% endhighlight %}
{% endtabs %}

### Delete operation

To delete existing records, use the `removeUrl` property to specify the controller action mapping URL for the delete operation. The primary key value of the deleted record is bound to the `deletedRecord` parameter.

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
    }
}

{% endhighlight %}
{% endtabs %}

## Application execution and verification

**Starting the application:** Run the application by pressing <kbd>F5</kbd> in Visual Studio. The browser opens and the Grid loads all orders from the service.

**Connection verification:** Open the browser Developer Tools (<kbd>F12</kbd>) and select the "Network" tab. Refresh the page to confirm a request to **https://localhost:xxxx** and verify that the response contains JSON data.

> CORS configuration is included in the [server setup](). Refer to that section for detailed CORS implementation and security considerations for production environments.

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Initial load is slow | Loading all records at once | Consider pagination or use `UrlAdaptor` for large datasets |
| Filtering not working | Data not bound correctly | Ensure `json` property has all data before creating DataManager |
| CRUD operations fail | URLs not configured | Verify `insertUrl`, `updateUrl`, `removeUrl` are correct |
| Grid shows no data | Fetch error or wrong data format | Check browser console for errors, verify API response format |
| Memory issues | Dataset too large | Reduce dataset size or switch to `UrlAdaptor` |
| Sorting/filtering slow | Too many records | Consider using `UrlAdaptor` for server-side operations |

## Complete sample repository

A complete, working sample implementation is available in the [GitHub](https://github.com/SyncfusionExamples/ej2-react-grid-samples/tree/master/connecting-to-adaptors/RemoteSaveAdaptor) repository.

## See also
- [Using Remote Data Binding in ASP.NET Web APIs](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/webapi-adaptor)
- [Connect to custom REST APIs](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor)
- [Custom Remote Binding](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/custom-adaptor)
- [RESTful CRUD Operations in ASP.NET WebForms](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor)
- [Connect to OdataV4 services](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor)
- [GraphQL Integration for Syncfusion React Grids](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/graphql-adaptor)