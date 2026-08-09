---
layout: post
title: Snowflake data binding in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table retrieves data from a Snowflake database through a Web API controller and binds it as the pivot data source.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Snowflake data binding in React Pivot Table

This guide explains how to retrieve data from a Snowflake database using the [Snowflake.Data](https://www.nuget.org/packages/Snowflake.Data/) library and bind it to the Pivot Table through a Web API controller.

## Creating a Web API Service to Fetch Snowflake Data

Follow these steps to create a Web API service that retrieves data from a Snowflake database and prepares it for the Pivot Table.

### Step 1: Create an ASP.NET Core Web Application
1. Open Visual Studio and create a new **ASP.NET Core Web App** project named **MyWebService**.
2. Follow the official [Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022) for detailed instructions on creating an ASP.NET Core Web application.

![Creating an ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

### Step 2: Install the Snowflake NuGet Package
To enable Snowflake database connectivity:
1. Open the **NuGet Package Manager** in your project solution and search for [Snowflake.Data](https://www.nuget.org/packages/Snowflake.Data/).
2. Install the [Snowflake.Data](https://www.nuget.org/packages/Snowflake.Data/) package to add Snowflake support.

![Installing the Snowflake.Data NuGet package](../images/snowflake-data-nuget-package-install.png)

### Step 3: Create a Web API Controller
1. Under the **Controllers** folder, create a new Web API controller named **PivotController.cs**.
2. This controller facilitates data communication between the Snowflake database and the Pivot Table.

### Step 4: Connect to Snowflake, Retrieve Data, and Serialize to JSON
In the **PivotController.cs** file, use the [Snowflake.Data](https://www.nuget.org/packages/Snowflake.Data/) library to connect to a Snowflake database, retrieve data, and return it as JSON for the Pivot Table.

1. **Establish Connection**: Use **SnowflakeDbConnection** with a valid connection string. Snowflake requires `account=`, `warehouse=`, `db=`, and `schema=`. Example: `account=myaccount;user=myuser;password=mypassword;db=SAMPLE_DB;schema=PUBLIC;warehouse=COMPUTE_WH;role=PUBLIC;`
2. **Authentication:** Password authentication is shown above. For SSO, add `authenticator=externalbrowser`. For key-pair authentication, omit `password=` and add `authenticator=snowflake_jwt` plus `private_key_file=...` and `private_key_file_pwd=...`.
3. **Query and Fetch Data**: Execute a SQL query using **SnowflakeDbDataAdapter** to retrieve data for the Pivot Table.
4. **Structure the Data**: Use **SnowflakeDbDataAdapter**'s **Fill** method to populate query results into a **DataTable**.
5. **Serialize to JSON**: Use **JsonConvert.SerializeObject** to convert the **DataTable** into a JSON string for the Pivot Table.

> **Sample dataset:** The query below uses the `CALL_CENTER` table from Snowflake's `SNOWFLAKE_SAMPLE_DATA.TPCDS_SF10TCL` shared database. If your account does not have the sample data shared, replace the database/schema/table with your own.

```csharp
using Microsoft.AspNetCore.Mvc;
using Snowflake.Data.Client;
using Newtonsoft.Json;
using System.Data;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetSnowflakeResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchSnowflakeResult());
        }

        public static DataTable FetchSnowflakeResult()
        {
            using (SnowflakeDbConnection snowflakeConnection = new SnowflakeDbConnection())
            {
                // Replace with your own connection string.
                snowflakeConnection.ConnectionString = "<Enter your valid connection string here>";
                snowflakeConnection.Open();
                SnowflakeDbDataAdapter adapter = new SnowflakeDbDataAdapter("select * from CALL_CENTER", snowflakeConnection);
                DataTable dataTable = new DataTable();
                adapter.Fill(dataTable);
                snowflakeConnection.Close();
                return dataTable;
            }
        }
    }
}
```

> Ensure the **Newtonsoft.Json** NuGet package is installed in your project to use `JsonConvert`.

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
2. The application will be hosted at `https://localhost:7150/` by default (the port number is defined in **Properties/launchSettings.json** and may vary based on your configuration).

### Step 7: Access the JSON Data
1. Access the Web API endpoint at `https://localhost:7150/Pivot` to view the JSON data retrieved from the Snowflake database.
2. The browser will display the JSON data, as shown below.

![JSON data from the Web API endpoint](../images/snowflake-code-web-app.png)

## Connecting the Pivot Table to a Snowflake Database Using the Web API Service

This section explains how to connect the Pivot Table component to a Snowflake database by retrieving data from the Web API service created in the previous section.

### Step 1: Create a Pivot Table in React
1. Set up a basic React Pivot Table by following the [Getting Started](../getting-started) documentation.
2. Ensure your React project is configured with the necessary EJ2 Pivot Table dependencies.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **App.tsx** (or **App.jsx**) file, map the Web API URL (`https://localhost:7150/Pivot`) to the Pivot Table using the [url](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings).
2. Below is the sample code to configure the Pivot Table to fetch data from the Web API:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:7150/Pivot'
        // Additional configuration will be added in the next step
    };

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
        <Inject services={[FieldList]}/>
    </PivotViewComponent>);
};
export default App;
```

### Step 3: Define the Pivot Table Report
1. Configure the Pivot Table report in the **App.tsx** (or **App.jsx**) file to structure the data retrieved from the Snowflake database.
2. Add fields to the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#rows), [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#columns), [values](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#values), and [filters](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings) to define the report structure, specifying how data fields are organized and aggregated in the Pivot Table.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#showfieldlist) property to **true** and including the `FieldList` module in the services section. This allows users to dynamically add or rearrange fields across the columns, rows, and values axes using an interactive user interface.

Here’s the updated sample code for **App.jsx** with the report configuration and field list support:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:7150/Pivot',
        enableSorting: true,
        expandAll: false,
        columns: [
            { name: 'CC_COUNTRY', caption: 'Country' }
        ],
        rows: [
            { name: 'CC_STATE', caption: 'State' },
            { name: 'CC_CITY', caption: 'City' }
        ],
        values: [
            { name: 'CC_COMPANY', caption: 'Company' },
            { name: 'CC_EMPLOYEES', caption: 'Employees' },
            { name: 'CC_TAX_PERCENTAGE', caption: 'Percentage' }
        ],
        filters: []
    };

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
        <Inject services={[FieldList]}/>
    </PivotViewComponent>);
};
export default App;
```

### Step 4: Run and Verify the Pivot Table
1. Run the React application.
2. The Pivot Table will display the data fetched from the Snowflake database via the Web API, structured according to the defined report.
3. The resulting Pivot Table will look like this:

![Pivot Table bound with Snowflake database](../images/snowflake-data-binding.png)

### Additional Resources
Explore a complete example of the React Pivot Table integrated with an ASP.NET Core Web Application to fetch data from a Snowflake database in this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-Snowflake-database-to-pivot-table) repository.