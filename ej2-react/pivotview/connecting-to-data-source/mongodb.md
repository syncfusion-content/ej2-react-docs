---
layout: post
title: MongoDB data binding in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table retrieves data from a MongoDB database through a Web API controller and binds it as the pivot data source.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# MongoDB data binding in React Pivot Table

This guide explains how to retrieve data from a MongoDB database using the [MongoDB.Driver](https://www.nuget.org/packages/MongoDB.Driver) and [MongoDB.Bson](https://www.nuget.org/packages/MongoDB.Bson) libraries and bind it to the Pivot Table through a Web API controller.

> **Sample dataset:** The pivot report below uses the `sample_training` database with a `ProductDetails` collection. If you don't already have this collection, you can load the public [sample datasets](https://docs.atlas.mongodb.com/sample-data/available-sample-datasets/) into your local MongoDB or MongoDB Atlas cluster, or replace the database/collection names with your own. Make sure the collection contains the fields referenced in the pivot report (`Country`, `Products`, `Sold`, `Amount`, `Year`).

## Creating a Web API Service to Fetch MongoDB Data

Follow these steps to create a Web API service that retrieves data from a MongoDB database and prepares it for the Pivot Table.

### Step 1: Create an ASP.NET Core Web Application
1. Open Visual Studio and create a new **ASP.NET Core Web App** project named **MyWebService**.
2. Follow the official [Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022) for detailed instructions on creating an ASP.NET Core Web application.

![Create ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

### Step 2: Install the MongoDB NuGet Packages
To enable MongoDB database connectivity:
1. Open the **NuGet Package Manager** in your project solution and search for the packages [MongoDB.Driver](https://www.nuget.org/packages/MongoDB.Driver/) and [MongoDB.Bson](https://www.nuget.org/packages/MongoDB.Bson).
2. Install both packages to add MongoDB support.

```bash
dotnet add package MongoDB.Driver
dotnet add package MongoDB.Bson
dotnet add package Newtonsoft.Json
```

![Add the NuGet package MongoDB.Driver to the project](../images/mongodb-data-nuget-package-install.png)

### Step 3: Create a Web API Controller
1. Under the **Controllers** folder, create a new Web API controller named **PivotController.cs**.
2. This controller facilitates data communication between the MongoDB database and the Pivot Table.

### Step 4: Connect to MongoDB and Retrieve Data
In the **PivotController.cs** file, use the [MongoDB.Driver](https://www.nuget.org/packages/MongoDB.Driver/) and [MongoDB.Bson](https://www.nuget.org/packages/MongoDB.Bson) libraries to connect to a MongoDB database and retrieve data for the Pivot Table.

1. **Establish Connection**: Use **MongoClient** with a valid connection string (e.g., `<Enter your valid connection string here>`) to connect to the MongoDB database. For MongoDB Atlas, the connection string is in the format `mongodb+srv://user:password@cluster.mongodb.net/`.
2. **Access the Database and Collection**: Use the **GetDatabase** method to access the specified database (e.g., `sample_training`) and the **GetCollection** method to target the desired collection (e.g., `ProductDetails`).
3. **Retrieve and Structure Data**: Use the **Find** method of the **IMongoCollection** interface with an empty **BsonDocument** to retrieve data from the collection. The **ToList** method then converts the retrieved data into a **List** for JSON serialization.

> **Important:** The `Id` property of type `ObjectId` must be decorated with the `[BsonId]` attribute. Without it, MongoDB.Driver will throw `FormatException` when reading documents whose `_id` field is an ObjectId. The Pivot Table will also reject the JSON response because `ObjectId` does not serialize to a primitive type by default.

```csharp
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using Newtonsoft.Json;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetMongoDbResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchMongoDbResult());
        }

        private static List<ProductDetails> FetchMongoDbResult()
        {
            // Replace with your own connection string.
            string connectionString = "<Enter your valid connection string here>";
            MongoClient client = new MongoClient(connectionString);
            IMongoDatabase database = client.GetDatabase("sample_training");
            var collection = database.GetCollection<ProductDetails>("ProductDetails");
            return collection.Find(new BsonDocument()).ToList();
        }

        public class ProductDetails
        {
            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string? Id { get; set; }
            public int Sold { get; set; }
            public double Amount { get; set; }
            public string? Country { get; set; }
            public string? Products { get; set; }
            public string? Year { get; set; }
            public string? Quarter { get; set; }
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

### Step 6: Run the Web API Service
1. Build and run the application.
2. The application will be hosted at `https://localhost:7147/` by default (the port number is defined in **Properties/launchSettings.json** and may vary based on your configuration).

### Step 7: Access the JSON Data
1. Access the Web API endpoint at `https://localhost:7147/Pivot` to view the JSON data retrieved from the MongoDB database.
2. The browser will display the JSON data, as shown below.

![Hosted Web API URL](../images/mongodb-data.png)

## Connecting the Pivot Table to a MongoDB Database Using the Web API Service

This section explains how to connect the Pivot Table component to a MongoDB database by retrieving data from the Web API service created in the previous section.

### Step 1: Create a Pivot Table in React
1. Set up a basic React Pivot Table by following the [Getting Started](../getting-started) documentation.
2. Ensure your React project is configured with the necessary EJ2 Pivot Table dependencies.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **App.tsx** (or **App.jsx**) file, map the Web API URL (`https://localhost:7147/Pivot`) to the Pivot Table using the [url](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings).
2. Below is the sample code to configure the Pivot Table to fetch data from the Web API:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:7147/Pivot'
        // Additional configuration will be added in the next step
    };

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
        <Inject services={[FieldList]}/>
    </PivotViewComponent>);
};

export default App;
```

### Step 3: Define the Pivot Table Report
1. Configure the Pivot Table report in the **App.tsx** (or **App.jsx**) file to structure the data retrieved from the MongoDB database.
2. Add fields to the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#rows), [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#columns), [values](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#values), and [filters](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings) to define the report structure, specifying how data fields are organized and aggregated in the Pivot Table.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#showfieldlist) property to **true** and including the `FieldList` module in the services section. This allows users to dynamically add or rearrange fields across the columns, rows, and values axes using an interactive user interface.

Here’s the updated sample code for **App.jsx** with the report configuration and field list support:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:7147/Pivot',
        enableSorting: true,
        columns: [
            { name: 'Year' }
        ],
        values: [
            { name: 'Sold', caption: "Units Sold"},
            { name: 'Amount', caption: "Sold Amount"}
        ],
        rows: [
            { name: 'Country' },
            { name: 'Products' }
        ]
    };

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
        <Inject services={[FieldList]}/>
    </PivotViewComponent>);
};

export default App;
```

### Step 4: Run and Verify the Pivot Table
1. Run the React application.
2. The Pivot Table will display the data fetched from the MongoDB database via the Web API, structured according to the defined report.
3. The resulting Pivot Table will look like this:

![PivotTable bound with MongoDB database](../images/mongodb-data-binding.png)

### Additional Resources
Explore a complete example of the React Pivot Table integrated with an ASP.NET Core Web Application to fetch data from a MongoDB database in this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-MongoDB-to-pivot-table) repository.