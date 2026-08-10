---
layout: post
title: Elasticsearch data binding in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table retrieves data from an Elasticsearch database through a Web API controller and binds it as the pivot data source.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Elasticsearch data binding in React Pivot Table

This guide explains how to connect an Elasticsearch database to the Pivot Table component using the [NEST](https://www.nuget.org/packages/Nest) client (Elasticsearch 7.x) and a Web API controller to fetch and bind data to the Pivot Table.

> **Note:** NEST is the official .NET client for Elasticsearch 7.x. For Elasticsearch 8.x and later, use the new [Elastic.Clients.Elasticsearch](https://www.nuget.org/packages/Elastic.Clients.Elasticsearch/) package. The code below targets NEST 7.x.

## Create a Web API service to fetch Elasticsearch data

Follow these steps to create a Web API service that retrieves data from an Elasticsearch database and prepares it for the Pivot Table.

### Step 1: Create an ASP.NET Core Web Application
1. Open Visual Studio and create a new **ASP.NET Core Web App** project named **MyWebService**.
2. Follow the instructions in the [Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022) to set up the project.

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

### Step 2: Install the NEST NuGet Package
1. Open the **NuGet Package Manager** in your project solution.
2. Search for the **NEST** package and install it to enable connectivity with the Elasticsearch server.

![Add the NuGet package NEST to the project](../images/next-nuget-package-install.png)

### Step 3: Create a Web API Controller
1. In the **Controllers** folder, create a new Web API controller named **PivotController.cs**.
2. This controller will facilitate data communication between the Elasticsearch database and the Pivot Table.

### Step 4: Configure Connection and Implement Data Retrieval
In the **PivotController.cs** file, use the **ElasticClient** class from the NEST library to establish a connection to the Elasticsearch database, then expose a **Get()** method that returns the documents as JSON. Replace the index name (`product`) and field names with those that match your schema.

> **Authentication:** If your Elasticsearch cluster requires authentication, append the credentials to the URI (for example, `https://elastic:your_password@localhost:9200`) or pass them via `ConnectionSettings(new Uri(...).SetBasicAuthentication("user", "password"))`. For Elasticsearch 8.x with security enabled, an API key or username/password is required.

> **Schema dependency:** The pivot report below references the fields `Product`, `Quantity`, `Amount`, `Country`, and `State`. Make sure your `product` index has documents that contain these fields with matching names, otherwise the Pivot Table will be empty.

Here’s the sample code for the **PivotController.cs** file:

```csharp
using Microsoft.AspNetCore.Mvc;
using Nest;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetElasticSearchData")]
        public object Get()
        {
            // Return the documents directly so the response is raw JSON,
            // not a JSON-encoded string wrapped in quotes.
            return FetchElasticsearchData();
        }

        private static object FetchElasticsearchData()
        {
            // Replace with your Elasticsearch connection string.
            var connectionString = "<Enter your valid connection string here>";
            var uri = new Uri(connectionString);
            var connectionSettings = new ConnectionSettings(uri);
            var client = new ElasticClient(connectionSettings);
            var searchResponse = client.Search<object>(s => s
                .Index("product")
                .Size(1000)
            );
            return searchResponse.Documents;
        }
    }
}
```

### Step 5: Enable CORS in the Web API
React (typically `http://localhost:3000` or `http://localhost:5173`) running on a different origin than the Web API will be blocked by CORS unless the API explicitly allows it. In **Program.cs**, register and apply a CORS policy:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AllowReactApp"); // Must be called before MapControllers.
app.MapControllers();

app.Run();
```

### Step 6: Run the Web Application
1. Build and run the web application.
2. The application will be hosted at the URL `https://localhost:44323`.

### Step 7: Verify the Data
1. Access the Web API endpoint at `https://localhost:44323/Pivot` to view the JSON data retrieved from the Elasticsearch database.
2. The browser will display the JSON data, as shown below.

![Hosted Web API URL](../images/elasticsearch-data.png)

## Connecting the Pivot Table to an Elasticsearch Database Using the Web API Service

This section explains how to connect the Pivot Table component to an Elasticsearch database by retrieving data from the Web API service created in the previous section.

### Step 1: Create a Pivot Table in React
1. Set up a basic React Pivot Table by following the [Getting Started](../getting-started) documentation.
2. Ensure your React project is configured with the necessary EJ2 Pivot Table dependencies.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **App.tsx** or **App.jsx** file, map the Web API URL (`https://localhost:44323/Pivot`) to the Pivot Table using the [url](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings).
2. Below is the sample code to configure the Pivot Table to fetch data from the Web API:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
    url: 'https://localhost:44323/Pivot'
    // Additional configuration will be added in the next step
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
```

### Step 3: Define the Pivot Table Report
1. Configure the Pivot Table report in the **App.tsx** or **App.jsx** file to structure the data retrieved from the Elasticsearch database.
2. Add fields to the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#rows), [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#columns), [values](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#values), and [filters](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings) to define the report structure, specifying how data fields are organized and aggregated in the Pivot Table.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#showfieldlist) property to **true** and including the `FieldList` module in the services section. This allows users to dynamically add or rearrange fields across the columns, rows, and values axes using an interactive user interface.

Here’s the updated sample code for **App.jsx** with the report configuration and field list support:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
    url: 'https://localhost:44323/Pivot',
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Product' }],
    values: [
      { name: 'Quantity' },
      { name: 'Amount', caption: 'Sold Amount' }
    ],
    rows: [
      { name: 'Country' },
      { name: 'State' }
    ],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
```

### Step 4: Run and Verify the Pivot Table
1. Run the React application.
2. The Pivot Table will display the data fetched from the Elasticsearch database via the Web API, structured according to the defined report.
3. The resulting Pivot Table will look like this:

![Pivot Table bound with Elasticsearch database](../images/elasticsearch-data-binding.png)

### Additional Resources
Explore a complete example of the React Pivot Table integrated with an ASP.NET Core Web Application to fetch data from an Elasticsearch database in this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-Elasticsearch-database-to-pivot-table) repository.