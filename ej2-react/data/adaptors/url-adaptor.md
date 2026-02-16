---
layout: post
title: React DataManager - URL Adaptor | Syncfusion
description: React DataManager UrlAdaptor provides server-side integration with REST APIs by detailing the backend setup and endpoint configuration required for data operations.
control: Url Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data Binding with Custom REST API using UrlAdaptor

The `UrlAdaptor` enables the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to communicate with any custom REST API service. It converts operations (filtering, sorting, paging, CRUD) into HTTP POST requests and processes JSON responses.

This documentation outlines the complete process for configuring the `UrlAdaptor` by detailing the backend API setup and the server‑side endpoints required to support data operations.

## Why use UrlAdaptor?

The `UrlAdaptor` works with **any custom REST API**—no OData or GraphQL required.

**Key benefits:**

1. **Backend agnostic**: Works with backend server technology.
2. **Server-side processing**: Handles large datasets (100K+ records) efficiently on the server.
3. **Automatic requests**: Client operations generate structured HTTP requests automatically.
4. **Full CRUD support**: Manages insert, update, delete operations seamlessly.
5. **Extensible**: Add authentication, caching, or custom transformations easily.

## Supported databases and technologies

The `UrlAdaptor` is **completely backend-agnostic**. It connects to any database through a REST API that returns the required JSON format.

**Common database integrations:**

| Database | Use Case | Notes |
|----------|----------|-------|
| **SQL Server** | Enterprise applications | Robust querying, stored procedures support |
| **MySQL** | Web applications | Open-source, high performance |
| **PostgreSQL** | Complex data models | Advanced features, JSON support |
| **SQLite** | Embedded applications | Lightweight, serverless |
| **MongoDB** | Document databases | NoSQL, flexible schema |
| **Oracle** | Enterprise systems | High scalability, reliability |
| **Azure SQL Database** | Cloud applications | Managed service, auto-scaling |

> **Key point**: `UrlAdaptor` is **backend-agnostic**. Compatibility exists with any technology stack that:
> 1. Accepts HTTP POST requests with JSON body.
> 2. Parses request parameters (filters, sorts, page info).
> 3. Returns data in the required `{result, count}` format.

## Configuring UrlAdaptor

Install the Syncfusion data package to use the `DataManager` and `UrlAdaptor`.

```bash
npm install @syncfusion/ej2-data --save
```

Here is the basic configuration of the `DataManager` with `UrlAdaptor` to fetch data from custom API using:

```ts
import { DataManager, Query, ReturnOption, UrlAdaptor } from '@syncfusion/ej2-data';

new DataManager({
  adaptor: new UrlAdaptor(),
  url: 'https://localhost:xxxx/api/data',  // Replace xxxx with actual port number.
}).executeQuery(
  new Query()).then((
    e: ReturnOption) => { //
    // e.result will contain the records.
    }
  );
```

## Understanding the required response format

Before choosing a backend technology (ASP.NET Core, Node.js, PHP, Python, or any other), understand that every API endpoint used with `UrlAdaptor` must return data in exactly this JSON structure:

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

> * Without the `count` field, paging and virtual scrolling cannot function correctly.
> * APIs returning just an array `[{...}, {...}]` instead of `{result: [...], count: ...}` will prevent proper data display. Responses must wrap in the required structure.

## Backend setup (ASP.NET Core API)

ASP.NET Core is a powerful backend framework that offers cross‑platform support, high performance, and built‑in dependency injection. It integrates seamlessly with Syncfusion's `DataManagerRequest` and `QueryableOperation`, enabling efficient parameter parsing, filtering, sorting, and paging with strong typing. This combination ensures scalable APIs that deliver optimized query handling and a smooth experience.

### Step 1: Create project

**Option 1: Visual Studio**

Open **Visual Studio 2022 or later**, create a new project, search for the **ASP.NET Core with React.js** template, name the project **UrlAdaptorDemo**, select **.NET 8.0 or later**, and click **Create**.

For detailed setup instructions, see [Microsoft's official documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022).

**Option 2: Using terminal**

```bash
dotnet new react -n UrlAdaptorDemo
cd UrlAdaptorDemo
```

**Project structure after creation:**

```
UrlAdaptorDemo/
├── urladaptordemo.client/           # React frontend (Vite/React project).
│   ├── src/
│   │   ├── App.css
│   │   └── App.jsx                  # Add url adaptor here.
│   └── package.json
└── UrlAdaptorDemo.Server/           # ASP.NET Core backend (API).
    ├── Controllers/                 # API controllers (will be created here).
    ├── Models/                      # Data models (will be created here).
    └── Program.cs                   # Server configuration.
```

### Step 2: Install required NuGet package

**Syncfusion.EJ2.AspNet.Core** package is required to use `DataManager` operations in ASP.NET Core.  It provides essential server‑side helpers and classes—such as `DataManagerRequest` and `QueryableOperation`—that handle parameter parsing, filtering, sorting, and paging with strong typing and optimized performance. The **Microsoft.AspNetCore.Mvc.NewtonsoftJson** package provides ASP.NET Core MVC input and output formatters that use **Newtonsoft.Json** for JSON serialization, deserialization, and JSON Patch support.

In Visual Studio, navigate to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**, search for **Syncfusion.EJ2.AspNet.Core** and **Microsoft.AspNetCore.Mvc.NewtonsoftJson**, select it, and click **Install**. Make sure to install these packages into the **UrlAdaptorDemo.Server** project.

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

> **Note:** Without **Syncfusion.EJ2.AspNet.Core** package, manual implementation of filtering, sorting, and paging logic is required instead of using the built-in helper methods shown in this guide.

### Step 3: Create data model

Create a **Models** folder in the **UrlAdaptorDemo.Server** project, then add **OrdersDetails.cs** class file.

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace UrlAdaptorDemo.Server.Models
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
      // Add the remining fields.
      ...
      ...
      ...
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
          ...
          ...
          ...
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

Create **DataController.cs** file using **MVC Controller - Empty** template in the **Controllers** folder. This controller handles all data requests from the React component.

{% tabs %}
{% highlight cs tabtitle="DataController.cs" %}

using Microsoft.AspNetCore.Mvc;
using UrlAdaptorDemo.Server.Models;
using Syncfusion.EJ2.Base;

namespace UrlAdaptorDemo.Server.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DataController : ControllerBase
  {
    /// <summary>
    /// Main endpoint for data requests.
    /// Handles initial load and all operations (paging, filtering, sorting, etc.)
    /// </summary>
    [HttpPost]
    public object Post([FromBody] DataManagerRequest dm)
    {
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
}

{% endhighlight %}
{% endtabs %}

**Key Points:**
- **[FromBody] DataManagerRequest**: This parameter receives all operation details (filters, sorts, page info).
- **IQueryable<OrdersDetails>**: Use `IQueryable` for efficient database queries.
- **count**: Must be total count before paging (not just current page count).
- **HttpPost**: Client sends `POST` requests by default for data operations.

### Step 5: Configure NewtonsoftJson and CORS (Cross-Origin Resource Sharing)

In ASP.NET Core, JSON results are returned in camelCase format by default, which also converts field names to camelCase. To prevent this behavior, add **DefaultContractResolver**.

```csharp
// Configure JSON serialization (preserves property casing).
builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
  options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});
```

When React frontend (e.g., `https://localhost:3000`) and ASP.NET Core backend (e.g., `https://localhost:5001`) run on different ports, browsers block requests by default for security. CORS configuration allows these cross-origin requests.

```csharp
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

...

// Enable CORS middleware (must be before UseRouting).
app.UseCors();

```

Below is the common error without CORS:

```
Access to XMLHttpRequest at 'https://localhost:5001/api/data' from origin 
'https://localhost:3000' has been blocked by CORS policy.

```

Both configurations must be set up in the **Program.cs** file.

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

`AllowAnyOrigin()` provides convenience for development but production environments require restriction to specific trusted domains. For production, restrict CORS to specific origins:

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

### Step 6: Test the backend API

**Run the application:**

Run the application in Visual Studio, accessible on a URL like **https://localhost:xxxx**. Verify the API returns order data at **https://localhost:xxxx/api/data**, where **xxxx** is the port. For more details on port verification, see the [Verify ports](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022#verify-ports) documentation.

**Troubleshooting:**
-  **Empty response**: Check if `GetAllRecords()` is populating data.
-  **404 Error**: Verify controller route is `[Route("api/[controller]")]`.
-  **500 Error**: Check server logs in Visual Studio Output window.
-  **CORS Error**: Ensure CORS is configured in **Program.cs**.

> **Note:** Keep the backend server running during React frontend setup.

To integrate the Syncfusion React Grid with the UrlAdaptor, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor).