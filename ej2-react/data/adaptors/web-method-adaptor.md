---
layout: post
title: React DataManager - Web Method Adaptor | Syncfusion
description: React DataManager Web Method provides server-side integration with REST APIs by detailing the backend setup and endpoint configuration required for data operations.
control: Web Method Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data Binding with Custom REST API using WebMethodAdaptor

The `WebMethodAdaptor` enables the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to communicate with remote services using web methods. It functions similarly to `UrlAdaptor` but with a key difference: it wraps all operation parameters (filtering, sorting, paging, CRUD) inside a special `value` object before sending them to the server.

## Why use WebMethodAdaptor?

The `WebMethodAdaptor` works with **custom REST APIs that expect nested parameter structures**—particularly useful for certain backend frameworks.

**Key benefits:**

1. **Backend compatibility**: Works with APIs expecting nested `value` object pattern.
2. **Server-side processing**: Handles large datasets (100K+ records) efficiently on the server.
3. **Automatic requests**: Client operations generate structured HTTP requests automatically.
4. **Full CRUD support**: Manages insert, update, delete operations seamlessly.
5. **Legacy support**: Compatible with ASP.NET Web Services and legacy web method patterns.

## Key difference from UrlAdaptor

`UrlAdaptor` sends parameters directly in the request body:
```json
{ 
  "skip": 0, 
  "take": 10, 
  "sorted": [{"name": "OrderID", "direction": "ascending"}] 
}
```

`WebMethodAdaptor` wraps parameters inside a `value` object:
```json
{ 
  "value": { 
    "skip": 0, 
    "take": 10, 
    "sorted": [{"name": "OrderID", "direction": "ascending"}] 
  } 
}
```

## When to use WebMethodAdaptor

**Best use cases:**

- Backend API expects nested parameter structure with `value` wrapper.
- Working with ASP.NET Web Services (.asmx endpoints).
- API requires parameters inside a `value` wrapper object.
- Need compatibility with legacy web method patterns.
- Backend framework expects specific nested request format.

**When to use `UrlAdaptor` instead:**

- Standard REST APIs with flat parameter structure.
- Modern ASP.NET Core APIs without nested requirements.
- APIs expecting direct parameter access.
- No specific `value` object requirement.

## Configuring WebMethodAdaptor

Install the Syncfusion data package to use the `DataManager` and `WebMethodAdaptor`.

```bash
npm install @syncfusion/ej2-data --save
```

Here is the basic configuration of the `DataManager` with `WebMethodAdaptor` to fetch data from custom API:

```ts
import { DataManager, Query, ReturnOption, WebMethodAdaptor } from '@syncfusion/ej2-data';

new DataManager({
  adaptor: new WebMethodAdaptor(),
  url: 'https://localhost:xxxx/api/grid',  // Replace xxxx with actual port number.
}).executeQuery(
  new Query()).then((
    e: ReturnOption) => {
    // e.result will contain the records.
    }
  );
```

## Understanding the required response format

Before choosing a backend technology (ASP.NET Core, Node.js, PHP, Python, or any other), understand that every API endpoint used with `WebMethodAdaptor` must return data in exactly this JSON structure:

```json
{
  "result": [
    { "OrderID": 10001, "CustomerID": "ALFKI", "ShipCity": "Berlin" },
    { "OrderID": 10002, "CustomerID": "ANATR", "ShipCity": "Madrid" },
    ...
  ],
  "count": 45
}
```

- **result**: Returns the data records for the current page/request displayed in the UI.
- **count**: Indicates the total number of records in the dataset, enabling accurate pagination.

> - Without the `count` field, paging and virtual scrolling cannot function correctly.
> - APIs returning just an array `[{...}, {...}]` instead of `{result: [...], count: ...}` will prevent proper data display. Responses must wrap in the required structure.

## Understanding the value object pattern

The key difference between `WebMethodAdaptor` and `UrlAdaptor` is how request parameters are structured.

Every request from `WebMethodAdaptor` wraps DataManager parameters inside a `value` object:

```json
{
  "value": {
    "skip": 0,
    "take": 10,
    "requiresCounts": true,
    "sorted": [{ "name": "OrderID", "direction": "ascending" }],
    "where": [{ "field": "CustomerID", "operator": "equal", "value": "ALFKI" }]
  }
}
```

A server-side wrapper class is required to access these parameters:

```csharp
public class DataManager
{
    public required DataManagerRequest Value { get; set; }
}
```

This model extracts the nested `value` object, providing access to all DataManager properties like `skip`, `take`, `sorted`, `where`, etc.

## Backend setup (ASP.NET Core API)

ASP.NET Core is a powerful backend framework that offers cross‑platform support, high performance, and built‑in dependency injection. It integrates seamlessly with Syncfusion's `DataManagerRequest` and `QueryableOperation`, enabling efficient parameter parsing, filtering, sorting, and paging with strong typing. This combination ensures scalable APIs that deliver optimized query handling and a smooth experience.

### Step 1: Create project

**Option 1: Visual Studio:**

Open **Visual Studio 2022 or later**, create a new project, search for the **ASP.NET Core with React.js** template, name the project **WebMethodAdaptorDemo**, select **.NET 8.0 or later**, and click **Create**.

For detailed setup instructions, see [Microsoft's official documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022).

**Option 2: Using terminal:**

```bash
dotnet new react -n WebMethodAdaptorDemo
cd WebMethodAdaptorDemo
```

After project creation, the folder structure will appear as follows:

```
WebMethodAdaptorDemo/
├── webmethodadaptordemo.client/     # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add WebMethodAdaptor here.
│   └── package.json
└── WebMethodAdaptorDemo.Server/     # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet packages

Syncfusion.EJ2.AspNet.Core package is required to use DataManager operations in ASP.NET Core. It provides essential server‑side helpers and classes—such as `DataManagerRequest` and `QueryableOperation`—that handle parameter parsing, filtering, sorting, and paging with strong typing and optimized performance.

In Visual Studio, navigate to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**, search for **Syncfusion.EJ2.AspNet.Core** and **Microsoft.AspNetCore.Mvc.NewtonsoftJson**, select it, and click **Install**.

**Or via package manager console:**

```bash
Install-Package Syncfusion.EJ2.AspNet.Core
Install-Package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

**Or via .NET CLI:**

```bash
dotnet add package Syncfusion.EJ2.AspNet.Core
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
```

> **Note:** Without this package, manual implementation of filtering, sorting, and paging logic is required instead of using the built-in helper methods shown in this guide.

### Step 3: Create data model

Create a **Models** folder in the project root (if it doesn't exist), then add **OrdersDetails.cs**:

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace WebMethodAdaptorDemo.Models
{
  public class OrdersDetails
  {
    // Static in-memory data store (replace with database in production).
    public static List<OrdersDetails> order = new List<OrdersDetails>();

    // Default constructor.
    public OrdersDetails()
    {
    }

    // Parameterized constructor for easy object creation.
    public OrdersDetails(int OrderID, string CustomerId, int EmployeeId, double Freight, 
      bool Verified, DateTime OrderDate, string ShipCity, string ShipName, 
      string ShipCountry, DateTime ShippedDate, string ShipAddress)
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
    /// Generates sample order data. In production, replace with database query.
    /// </summary>
    public static List<OrdersDetails> GetAllRecords()
    {
      if (order.Count() == 0)
      {
        int code = 10000;
        for (int i = 1; i < 10; i++)
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

    // Properties with validation attributes.
    [Key]
    public int? OrderID { get; set; }
    
    public string? CustomerID { get; set; }
    
    public int? EmployeeID { get; set; }
    
    public double? Freight { get; set; }
    
    // Add the remining fields.
    ...
    ...
    ...
  }
}

{% endhighlight %}
{% endtabs %}

> **Production Note:** This example uses a static in-memory list (`order`) for simplicity. In real applications, replace `GetAllRecords()` with database queries using Entity Framework Core, Dapper, or the preferred data access layer.

### Step 4: Create API controller

Create **DataController.cs** in the **Controllers** folder. This controller handles all data requests from the React component.
{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

using Microsoft.AspNetCore.Mvc;
using WebMethodAdaptorDemo.Models;
using Syncfusion.EJ2.Base;

namespace WebMethodAdaptorDemo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GridController : ControllerBase
  {
    /// <summary>
    /// Main endpoint for data requests.
    /// Handles initial load and all operations (paging, filtering, sorting, etc.)
    /// CRITICAL: Parameter is wrapped in DataManager class to access 'value' object.
    /// </summary>
    [HttpPost]
    public object Post([FromBody] DataManager dataManager)
    {
      // Extract the actual DataManagerRequest from the 'value' wrapper
      DataManagerRequest dm = dataManager.Value;

      // Retrieve data from data source (replace with the database query).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Get total records count BEFORE paging.
      int totalRecordsCount = DataSource.Count();

      // Apply server-side operations here (will be added later).
      // For now, return all data with count.

      // CRITICAL: Return in {result, count} format.
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Helper method to retrieve order data.
    /// In production, replace with database query:
    /// return _dbContext.Orders.ToList();
    /// </summary>
    [HttpGet]
    public List<OrdersDetails> GetOrderData()
    {
      return OrdersDetails.GetAllRecords().ToList();
    }
  }

  /// <summary>
  /// Wrapper class for WebMethodAdaptor requests.
  /// WebMethodAdaptor wraps DataManagerRequest inside a 'value' property.
  /// This is the key difference from UrlAdaptor which sends parameters directly.
  /// </summary>
  public class DataManager
  {
    public required DataManagerRequest Value { get; set; }
  }
}

{% endhighlight %}
{% endtabs %}

**Key Points:**

- **[FromBody] DataManager**: This parameter receives the wrapped request with `value` object containing all operation details (filters, sorts, page info).
- **DataManager.Value**: Access the actual `DataManagerRequest` from the nested `value` object.
- **IQueryable<OrdersDetails>**: Use `IQueryable` for efficient database queries.
- **count**: Must be total count before paging (not just current page count).
- **HttpPost**: Client sends `POST` requests by default for data operations.

### Step 5: Configure CORS (Cross-Origin Resource Sharing)

When React frontend (e.g., `https://localhost:3000`) and ASP.NET Core backend (e.g., `https://localhost:5001`) run on different ports, browsers block requests by default for security. CORS configuration allows these cross-origin requests.

Below is the common error without CORS:

```
Access to XMLHttpRequest at 'https://localhost:5001/api/grid' from origin 
'https://localhost:3000' has been blocked by CORS policy.
```

**Configure CORS in Program.cs:**

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy to allow frontend access.
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.AllowAnyOrigin()      // Allow requests from any origin.
          .AllowAnyMethod()       // Allow GET, POST, PUT, DELETE, etc.
          .AllowAnyHeader();      // Allow any request headers.
  });
});

// Add controllers to the service collection.
builder.Services.AddControllers();

// Configure JSON serialization (preserves property casing).
builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
  options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

var app = builder.Build();

// Enable CORS middleware (must be before UseRouting).
app.UseCors();

// Map controller routes.
app.MapControllers();

app.Run();

{% endhighlight %}
{% endtabs %}

**Production CORS configuration:**

For production, restrict CORS to specific origins:

```csharp
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.WithOrigins("https://yourdomain.com")  // Specific frontend URL.
          .AllowAnyMethod()
          .AllowAnyHeader();
  });
});
```

> **Security Note:** `AllowAnyOrigin()` provides convenience for development but production environments require restriction to specific trusted domains.

### Step 6: Test the backend API

**Run the application:**

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/grid**, where **xxxx** is the port.

**Troubleshooting:**

- **Empty response**: Check if `GetAllRecords()` is populating data.
- **404 Error**: Verify controller route is `[Route("api/[controller]")]`.
- **500 Error**: Check server logs in Visual Studio Output window.
- **CORS Error**: Ensure CORS is configured in Program.cs.

> **Note:** Keep the backend server running during React frontend setup.

To integrate the Syncfusion React DataManager with the WebMethodAdaptor, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor).
