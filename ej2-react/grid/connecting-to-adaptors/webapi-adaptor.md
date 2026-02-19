---
layout: post
title: React Grid - Web API Adaptor | Syncfusion
description: React Grid Web API adaptor supports integration with ASP.NET Web API endpoints, mapping request parameters, and handling server operations for grid data.
control: WebApi Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# ASP.NET Web API Remote Data Binding in Syncfusion React Components

The `WebApiAdaptor` integrates the React Grid with Web API endpoints that support OData‑style querying. It is derived from the `ODataAdaptor`, meaning the target Web API must accept OData‑formatted query parameters for operations such as filtering, sorting, paging, and searching. When the React Grid performs any data action, the `WebApiAdaptor` generates OData‑compliant query strings, sends them to the Web API endpoint, and processes the returned JSON to populate the Grid. This ensures seamless remote data binding with OData-capable Web API services.

For details on configuring the backend (expected request/response format, server‑side processing), refer to the WebApiAdaptor backend setup documentation.

Once the project creation and backend setup are complete, the next step is to render the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid Component on the client side.

**Project structure:**

```
WebApiAdaptor/
├── WebApiAdaptor.client/           # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add WebApiAdaptor here.
│   └── package.json
└── WebApiAdaptor.Server/            # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

## React Grid frontend setup using Syncfusion WebAPIAdaptor

After finishing the backend setup for the **WebApiAdaptorDemo** ASP.NET Core project, next step is to integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid on the client side by following these instructions.

### Step 1: Install Syncfusion packages

Right‑click the **Webapiadaptor.client** folder in **Solution Explorer** and select **Open in Terminal** (available in newer Visual Studio versions), or open a Developer Command prompt/PowerShell from the Start menu and navigate manually to the **Webapiadaptor.client directory**. Once inside the folder, confirm that **package.json** is present, then run the following commands to install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

### Step 2: Add CSS styles

Syncfusion Grid requires CSS for proper rendering. Add these imports to **index.css** or **App.css**:

```css
/* Base styles - Required for all Syncfusion components */
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';

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

### Step 3: Create React Grid component with WebAPIAdaptor

Grid integration with backend APIs is enabled through the `WebApiAdaptor`, which acts as a bridge between the Syncfusion `DataManager` and RESTful Web API endpoints. It converts Grid actions into OData‑compliant query parameters and is well‑suited for APIs that follow OData conventions, providing server‑side paging, filtering, sorting, and searching without the need for custom request logic.

By delegating these operations to the server rather than executing them in the browser, the Grid ensures that only the required data is retrieved for each request.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

function App() {
    // Create DataManager with WebApiAdaptor
    const data = new DataManager({ 
        url: 'https://localhost:xxxx/api/Orders', // Replace xxxx with your port number.
        adaptor: new WebApiAdaptor(), // This handles Web API communication.
        crossDomain: true // Allow cross-domain requests.
    });
    
    return (
        <div style={{ margin: '20px' }}>
            <h2>Orders Grid</h2>
            <GridComponent dataSource={data} height={320}>
                <ColumnsDirective>
                    <ColumnDirective 
                        field='OrderID' 
                        headerText='Order ID' 
                        isPrimaryKey={true} 
                        width='150' 
                        textAlign='Right'>
                    </ColumnDirective>
                    <ColumnDirective 
                        field='CustomerID' 
                        headerText='Customer ID' 
                        width='150'>
                    </ColumnDirective>
                    <ColumnDirective 
                        field='ShipCity' 
                        headerText='Ship City' 
                        width='150'>
                    </ColumnDirective>
                    <ColumnDirective 
                        field='ShipCountry' 
                        headerText='Ship Country' 
                        width='150'>
                    </ColumnDirective>
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
}

export default App;

{% endhighlight %}
{% endtabs %}

> When using the `WebApiAdaptor`, the server must return a JSON response containing both the data collection (`Items`) and the total record count (`Count`) so the React `DataManager` can correctly process paging and data binding.

## Server-side data operations

React Grid optimizes large datasets by relying on server‑side data operations such as filtering, sorting, and paging rather than processing everything in the browser. The `Syncfusion.EJ2.AspNet.Core` package supports this approach by providing built‑in methods that efficiently handle these operations on the server, ensuring smooth performance even with heavy data loads.

### Paging

The paging feature is enabled by setting the `allowPaging` property to `true` and injecting the `Page` module from `@syncfusion/ej2-react-grids` into the grid.

```ts
  <GridComponent dataSource={data} allowPaging={true}>
    . . .
    . . .
    . . .
    <Inject services={[Page]}/>
  </GridComponent>
```

After enabling paging, the `WebApiAdaptor` includes OData‑style paging parameters `$skip` and `$top` in each request based on the Grid's current page and page size. These parameters allow the server to return only the required subset of data, enabling efficient server‑side paging. The Grid then renders the corresponding page using the paged dataset and the total record count provided by the API.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

[HttpGet]

public object Get()
{
    var queryString = Request.Query;
    var data = Orders.GetAllRecords().ToList();
    int skip = Convert.ToInt32(queryString["$skip"]);
    int take = Convert.ToInt32(queryString["$top"]);
    return take != 0 ? new { Items = data.Skip(skip).Take(take).ToList(), Count = data.Count() } : new { Items = data, Count = data.Count() };
}

{% endhighlight %}

{% highlight js tabtitle="App.jsx" %}

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
        url: 'https://localhost:xxxx/api/Orders', // Replace with the actual endpoint URL.
        adaptor: new WebApiAdaptor()
    });
    return <GridComponent dataSource={data} allowPaging={true} height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

![paging query](../images/webapiadaptor-paging.png)

### Filtering

The filtering feature is enabled by setting the `allowFiltering` property to `true` and injecting the `Filter` module from `@syncfusion/ej2-react-grids` into the grid.

```js
  <GridComponent dataSource={data} allowFiltering={true}>
    . . .
    . . .
    . . .
    <Inject services={[Filter]}/>
  </GridComponent>
```

After enabling filtering on the client side, the `WebApiAdaptor` translates the Grid's filter conditions into OData‑style `$filter` query parameters. It builds a filter expression based on the selected field, operator, and value, and sends it to the server. The backend processes this `$filter` expression, applies the corresponding filtering logic, and returns only the records that match the criteria for the Grid to display.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}

using Microsoft.AspNetCore.Mvc;
using WebApiAdaptor.Server.Models;

namespace WebApiAdaptor.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// Retrieves orders with filtering support.
        /// Handles OData-style $filter query parameter.
        /// </summary>
        [HttpGet]
        public object Get()
        {
            var queryString = Request.Query;
            var data = OrdersDetails.GetAllRecords().ToList();
            string filter = queryString["$filter"];

            if (!string.IsNullOrEmpty(filter))
            {
                filter = filter.Trim();
                
                // Remove one level of outer parentheses if present.
                if (filter.StartsWith("(") && filter.EndsWith(")"))
                {
                    int openCount = filter.Count(c => c == '(');
                    int closeCount = filter.Count(c => c == ')');

                    if (openCount == closeCount && openCount > 0)
                    {
                        filter = filter.Substring(1, filter.Length - 2).Trim();
                    }
                }
                
                // Split multiple filter conditions (AND logic).
                var filters = filter.Split(new string[] { " and " }, StringSplitOptions.RemoveEmptyEntries);
                
                foreach (var filterItem in filters)
                {
                    var filterfield = "";
                    var filtervalue = "";
                    
                    // Parse filter expression.
                    var filterParts = filterItem.Split('(', ')', '\'');
                    
                    if (filterParts.Length != 9)
                    {
                        // Simple filter: field eq 'value'.
                        var filterValueParts = filterParts[1].Split();
                        filterfield = filterValueParts[0];
                        filtervalue = filterValueParts[2];
                    }
                    else
                    {
                        // Function filter: substringof('value', field).
                        filterfield = filterParts[3];
                        filtervalue = filterParts[5];
                    }
                    
                    // Apply filter based on field.
                    switch (filterfield)
                    {
                        case "OrderID":
                            data = data.Where(x => x.OrderID.ToString() == filtervalue).ToList();
                            break;
                        case "CustomerID":
                            data = data.Where(x => x.CustomerID.ToLower().Contains(filtervalue.ToLower())).ToList();
                            break;
                        case "ShipCity":
                            data = data.Where(x => x.ShipCity.ToLower().Contains(filtervalue.ToLower())).ToList();
                            break;
                        case "ShipCountry":
                            data = data.Where(x => x.ShipCountry.ToLower().Contains(filtervalue.ToLower())).ToList();
                            break;
                        // Add more cases for other filterable fields.
                    }
                }
            }
            
            return new { Items = data, Count = data.Count() };
        }
    }
}

{% endhighlight %}

{% highlight js tabtitle="App.jsx" %}

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
        url: 'https://localhost:xxxx/api/Orders', // Replace with actual endpoint URL.
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    
    return <GridComponent dataSource={data} allowFiltering={true} height={320}>
        <ColumnsDirective>
            <ColumnDirective 
                field='OrderID' 
                headerText='Order ID' 
                isPrimaryKey={true} 
                width='150' 
                textAlign='Right'>
            </ColumnDirective>
            <ColumnDirective 
                field='CustomerID' 
                headerText='Customer ID' 
                width='150'>
            </ColumnDirective>
            <ColumnDirective 
                field='ShipCity' 
                headerText='Ship City' 
                width='150'>
            </ColumnDirective>
            <ColumnDirective 
                field='ShipCountry' 
                headerText='Ship Country' 
                width='150'>
            </ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Filter]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

![Filtering query](../images/webapiadaptor-filtering.png)

> **Key difference from OData:**
> - **OData:** Framework automatically handles filtering with `[EnableQuery]`.
> - **WebApi:** Manual parsing and filtering logic required in controller.

### Searching

The searching feature is enabled by configuring the `toolbar` property with `Search` item and injecting the `Toolbar` and `Search` modules from `@syncfusion/ej2-react-grids` into the grid.

```ts
  <GridComponent dataSource={data} toolbar={['Search']}>
    . . .
    . . .
    . . .
    <Inject services={[Search,Toolbar]}/>
  </GridComponent>
```

After enabling the search feature, the `WebApiAdaptor` generates an OData‑style `$filter` expression that performs a keyword search across all searchable fields. It builds a combined OR‑based condition using the search term and sends it to the server. 

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs - With Search Support" %}

using Microsoft.AspNetCore.Mvc;
using WebApiAdaptor.Server.Models;

namespace WebApiAdaptor.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// Retrieves orders with filtering and searching support.
        /// </summary>
        [HttpGet]
        public object Get()
        {
            var queryString = Request.Query;
            var data = OrdersDetails.GetAllRecords().ToList();
            string filter = queryString["$filter"];

            if (!string.IsNullOrEmpty(filter))
            {
                filter = filter.Trim();
                
                // Remove outer parentheses.
                if (filter.StartsWith("(") && filter.EndsWith(")"))
                {
                    int openCount = filter.Count(c => c == '(');
                    int closeCount = filter.Count(c => c == ')');

                    if (openCount == closeCount && openCount > 0)
                    {
                        filter = filter.Substring(1, filter.Length - 2).Trim();
                    }
                }
                
                var filters = filter.Split(new string[] { " and " }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var filterItem in filters)
                {
                    if (filterItem.Contains("substringof"))
                    {
                        // Handle SEARCH operation (global search across all columns).
                        var searchParts = filterItem.Split('(', ')', '\'');
                        var searchValue = searchParts[3].ToLower();

                        // Search across all searchable fields.
                        data = data.Where(x =>
                            (x.OrderID?.ToString().Contains(searchValue) ?? false) ||
                            (x.CustomerID?.ToLower().Contains(searchValue) ?? false) ||
                            (x.ShipCountry?.ToLower().Contains(searchValue) ?? false) ||
                            (x.ShipCity?.ToLower().Contains(searchValue) ?? false) ||
                            (x.ShipName?.ToLower().Contains(searchValue) ?? false)
                        ).ToList();
                    }
                    else
                    {
                        // Handle FILTER operation (column-specific filtering).
                        var filterfield = "";
                        var filtervalue = "";
                        var filterParts = filterItem.Split('(', ')', '\'');
                        
                        if (filterParts.Length != 9)
                        {
                            var filterValueParts = filterParts[1].Split();
                            filterfield = filterValueParts[0];
                            filtervalue = filterValueParts[2];
                        }
                        else
                        {
                            filterfield = filterParts[3];
                            filtervalue = filterParts[5];
                        }
                        
                        switch (filterfield)
                        {
                            case "OrderID":
                                data = data.Where(x => x.OrderID.ToString() == filtervalue).ToList();
                                break;
                            case "CustomerID":
                                data = data.Where(x => x.CustomerID.ToLower().Contains(filtervalue.ToLower())).ToList();
                                break;
                            case "ShipCity":
                                data = data.Where(x => x.ShipCity.ToLower().Contains(filtervalue.ToLower())).ToList();
                                break;
                            case "ShipCountry":
                                data = data.Where(x => x.ShipCountry.ToLower().Contains(filtervalue.ToLower())).ToList();
                                break;
                        }
                    }
                }
            }
            
            return new { Items = data, Count = data.Count() };
        }
    }
}

{% endhighlight %}

{% highlight js tabtitle="App.jsx" %}

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, ToolbarItems, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
        url: 'https://localhost:xxxx/api/Orders', // Replace with actual endpoint URL
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    
    const toolbar = ['Search'];
    
    return <GridComponent dataSource={data} height={320} toolbar={toolbar}>
        <ColumnsDirective>
            <ColumnDirective 
                field='OrderID' 
                headerText='Order ID' 
                isPrimaryKey={true} 
                width='150' 
                textAlign='Right'>
            </ColumnDirective>
            <ColumnDirective 
                field='CustomerID' 
                headerText='Customer ID' 
                width='150'>
            </ColumnDirective>
            <ColumnDirective 
                field='ShipCity' 
                headerText='Ship City' 
                width='150'>
            </ColumnDirective>
            <ColumnDirective 
                field='ShipCountry' 
                headerText='Ship Country' 
                width='150'>
            </ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

![Searching query](../images/webapiadaptor-searching.png)

### Sorting

The sorting feature is enabled by setting the `allowSorting` property to `true` and injecting the `Sort` module from `@syncfusion/ej2-react-grids` into the grid.

```ts
  <GridComponent dataSource={data} allowSorting={true}>
    . . .
    . . .
    . . .
    <Inject services={[Sort]}/>
  </GridComponent>
```

After enabling sorting on the client side, the `WebApiAdaptor` generates an OData‑style `$orderby` expression based on the selected column and sort direction. This expression is sent to the server, which applies the sorting logic and returns the ordered data. The Grid then renders the sorted result set returned by the API.

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs" %}
  // GET: api/Orders.
  [HttpGet]

  public object Get()
  {
    var queryString = Request.Query;
    var data = Orders.GetAllRecords().ToList();
    string sort = queryString["$orderby"];     
    if (!string.IsNullOrEmpty(sort))
    {
      var sortConditions = sort.Split(',');
      var orderedData = data.OrderBy(x => 0); // Start with a stable sort.
      foreach (var sortCondition in sortConditions)
      {
        var sortParts = sortCondition.Trim().Split(' ');
        var sortBy = sortParts[0];
        var sortOrder = sortParts.Length > 1 && sortParts[1].ToLower() == "desc";
        switch (sortBy)
        {
          case "OrderID":
              orderedData = sortOrder ? orderedData.ThenByDescending(x => x.OrderID) : orderedData.ThenBy(x => x.OrderID);
              break;
          case "CustomerID":
              orderedData = sortOrder ? orderedData.ThenByDescending(x => x.CustomerID) : orderedData.ThenBy(x => x.CustomerID);
              break;
          case "ShipCity":
              orderedData = sortOrder ? orderedData.ThenByDescending(x => x.ShipCity) : orderedData.ThenBy(x => x.ShipCity);
              break;
          case "ShipCountry":
              orderedData = sortOrder ? orderedData.ThenByDescending(x => x.ShipCountry) : orderedData.ThenBy(x => x.ShipCountry);
              break;
          // Add more cases for other sort fields if needed.
        }
      }
      data = orderedData.ToList();
    }
    return new { Items = data, Count = data.Count() };
  }

{% endhighlight %}

{% highlight js tabtitle="App.jsx" %}

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
        url: 'https://localhost:xxxx/api/Orders', // Replace with the actual endpoint URL.
        adaptor: new WebApiAdaptor()
    });
    return <GridComponent dataSource={data} allowSorting={true} height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Sort]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

![Sorting query](../images/webapiadaptor-sorting-asc.png)

The Grid has now been successfully created with including paging, sorting, filtering. the next step is to enabling CRUD operations.

### CRUD operations

CRUD refers to the four essential data operations: **Create** (add records), **Read** (view records), **Update** (modify records), and **Delete** (remove records).

To manage CRUD (Create, Read, Update, Delete) operations using the `WebApiAdaptor`, follow the provided guide for configuring the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid for [editing](https://ej2.syncfusion.com/react/documentation/grid/editing/edit) and utilize the sample implementation of the **OrdersController** in the server application. This controller handles HTTP requests for CRUD operations such as `GET`, `POST`, `PUT`, and `DELETE`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, EditSettingsModel, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App() {
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/api/Orders', // Replace with the actual endpoint URL.
      adaptor: new WebApiAdaptor()
    });
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const orderIDRules = {required: true};
    const customerIDRules = {required: true, minLength: 3};
    return <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules}></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules}></ColumnDirective>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>
};

export default App;

{% endhighlight %}
{% endtabs %}

> Normal/Inline editing is the default edit [mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) for the Grid component. To enable CRUD operations, ensure that the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property is set to **true** for a specific Grid column, ensuring that its value is unique.

**Insert record**

To insert a new record into the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, utilize the `HttpPost` method in the server application. Below is a sample implementation of inserting a record using the **OrdersController**:

![WebApiAdaptor-Insert-record](../images/webapiadaptor-insert-record.png)

```cs
// POST: api/Orders
[HttpPost]
/// <summary>
/// Inserts a new data item into the data collection.
/// </summary>
/// <param name="newRecord">It holds new record detail which is need to be inserted.</param>
/// <returns>Returns void</returns>
public void Post([FromBody] OrdersDetails newRecord)
{
  // Insert a new record into the OrdersDetails model.
  OrdersDetails.GetAllRecords().Insert(0, newRecord);
}
```

**Update record**

To update a record in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, utilize the `HttpPut` method in the controller. Below is a sample implementation:

![WebApiAdaptor-Update-record](../images/webapiadaptor-update-record.png)

```cs
// PUT: api/Orders
[HttpPut]
/// <summary>
/// Update a existing data item from the data collection.
/// </summary>
/// <param name="updatedOrder">It holds updated record detail which is need to be updated.</param>
/// <returns>Returns void</returns>
public void Put([FromBody] OrdersDetails updatedOrder)
{
  // Find the existing order by ID
  var existingOrder = OrdersDetails.GetAllRecords().FirstOrDefault(o => o.OrderID == updatedOrder.OrderID);
  if (existingOrder != null)
  {
    // If the order exists, update its properties.
    existingOrder.OrderID = updatedOrder.OrderID;
    existingOrder.CustomerID = updatedOrder.CustomerID;
    existingOrder.ShipCity = updatedOrder.ShipCity;
    existingOrder.ShipCountry = updatedOrder.ShipCountry;
    // Update other properties similarly.
  }
}
```

**Delete record**

To delete a record from the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, utilize the `HttpDelete` method in the controller. Below is a sample implementation:

![WebApiAdaptor-Delete-record](../images/webapiadaptor-delete-record.png)

```cs
// DELETE: api/5
[HttpDelete("{key}")]
/// <summary>
/// Remove a specific data item from the data collection.
/// </summary>
/// <param name="key">It holds specific record detail id which is need to be removed.</param>
/// <returns>Returns void</returns>
public void Delete(int key)
{
  // Find the order to remove by ID.
  var orderToRemove = OrdersDetails.GetAllRecords().FirstOrDefault(order => order.OrderID == key);
  // If the order exists, remove it.
  if (orderToRemove != null)
  {
    OrdersDetails.GetAllRecords().Remove(orderToRemove);
  }
}
```

## Troubleshooting

| Issue | Resolution |
|-------|----------|
| **CORS error** | Verify CORS configuration in **Program.cs** (already covered above). |
| **404 not found** | Confirm URL and port number match server configuration. |
| **Empty Grid** | Inspect browser console for errors; verify server data response format. |
| **Styles missing** | Confirm styles.css import in main application file. |
| **Incorrect response format** | Ensure server returns `{ Items: [], Count: number }` format. |


## Run the application

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/Orders**, where **xxxx** is the port. Grid displays order data fetched from the backend API:

![WebApiAdaptor](../images/adaptor.gif)

## Complete sample repository

For the complete working implementation of this example, refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-react-grid-samples/tree/master/connecting-to-adaptors/WebApiAdaptor) repository.

## See also
- [Custom Remote Binding](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/custom-adaptor)
- [Connect to custom REST APIs](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor)
- [Hybrid data binding](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/remote-save-adaptor)
- [RESTful CRUD Operations in ASP.NET WebForms](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor)
- [Connect to OdataV4 services](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor)
- [GraphQL Integration for Syncfusion React Grids](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/graphql-adaptor)
