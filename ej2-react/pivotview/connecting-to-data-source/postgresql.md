---
layout: post
title: "PostgreSQL Data Binding in React Pivot Table component | Syncfusion"
component: "Pivot Table"
platform: ej2-react
description: "Learn how to bind data from a PostgreSQL database in the Syncfusion React Pivot Table of Syncfusion Essential JS 2 and more."
control: PostgreSQL Data Binding
documentation: ug
---

# PostgreSQL in EJ2 React Pivot Table Component

This guide explains how to retrieve data from a PostgreSQL database using the [Microsoft Npgsql](https://www.npgsql.org/doc/index.html) library and bind it to the Pivot Table through a Web API controller.

## Creating a Web API Service to Fetch PostgreSQL Data

Follow these steps to create a Web API service that retrieves data from a PostgreSQL database and prepares it for the Pivot Table.

### Step 1: Create an ASP.NET Core Web Application
1. Open Visual Studio and create a new **ASP.NET Core Web App** project named **MyWebService**.
2. Follow the official [Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022) for detailed instructions on creating an ASP.NET Core Web application.

![Creating an ASP.NET Core Web App project](../images/azure-asp-core-web-service-create.png)

### Step 2: Install the Npgsql NuGet Package
To enable PostgreSQL database connectivity:
1. Open the **NuGet Package Manager** in your project solution and search for **Npgsql.EntityFrameworkCore.PostgreSQL**.
2. Install the **Npgsql.EntityFrameworkCore.PostgreSQL** package to add PostgreSQL support.

![Installing the Npgsql.EntityFrameworkCore.PostgreSQL NuGet package](../images/postgresql-data-nuget-package-install.png)

### Step 3: Create a Web API Controller
1. Under the **Controllers** folder, create a new Web API controller named **PivotController.cs**.
2. This controller facilitates data communication between the PostgreSQL database and the Pivot Table.

### Step 4: Connect to PostgreSQL and Retrieve Data
In the **PivotController.cs** file, use the [Npgsql](https://www.npgsql.org/doc/index.html) library to connect to a PostgreSQL database and retrieve data for the Pivot Table.

1. **Establish Connection**: Use **NpgsqlConnection** with a valid connection string (e.g., `Server=localhost;Database=mydb;User Id=myuser;Password=mypassword;`) to connect to the PostgreSQL database.
2. **Query and Fetch Data**: Execute a SQL query (e.g., `SELECT * FROM tablename`) using **NpgsqlCommand** to retrieve data for the Pivot Table.
3. **Structure the Data**: Use **NpgsqlDataAdapter**'s **Fill** method to populate query results into a **DataTable** for JSON serialization.

```csharp
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using Npgsql;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        public dynamic GetPostgreSQLResult()
        {
            // Replace with your own connection string.
            NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
            connection.Open();
            NpgsqlCommand cmd = new NpgsqlCommand("SELECT * FROM tablename", connection);
            NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            return dt;
        }
    }
}
```

### Step 5: Serialize Data to JSON
In the **PivotController.cs** file, define a **Get** method that calls **GetPostgreSQLResult** to retrieve data from the PostgreSQL database as a **DataTable**. Then, use **JsonConvert.SerializeObject** from the **Newtonsoft.Json** library to convert the **DataTable** into JSON format. This JSON data will be used by the Pivot Table component.

> Ensure the **Newtonsoft.Json** NuGet package is installed in your project to use **JsonConvert**.

```csharp
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using Npgsql;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetPostgreSQLResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(GetPostgreSQLResult());
        }

        public dynamic GetPostgreSQLResult()
        {
            // Replace with your own connection string.
            NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
            connection.Open();
            NpgsqlCommand cmd = new NpgsqlCommand("SELECT * FROM tablename", connection);
            NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            return dt;
        }
    }
}
```

### Step 6: Run the Web API Service
1. Build and run the application.
2. The application will be hosted at `https://localhost:44378/` (the port number may vary based on your configuration).

### Step 7: Access the JSON Data
1. Access the Web API endpoint at `https://localhost:44378/Pivot` to view the JSON data retrieved from the PostgreSQL database.
2. The browser will display the JSON data, as shown below.

![JSON data from the Web API endpoint](../images/postgresql_data.png)

## Connecting the Pivot Table to a PostgreSQL Database Using the Web API Service

This section explains how to connect the Pivot Table component to a PostgreSQL database by retrieving data from the Web API service created in the previous section.

### Step 1: Create a Pivot Table in React
1. Set up a basic React Pivot Table by following the [Getting Started](../getting-started) documentation.
2. Ensure your React project is configured with the necessary EJ2 Pivot Table dependencies.

### Step 2: Configure the Web API URL in the Pivot Table
1. In the **App.tsx** (or **App.jsx**) file, map the Web API URL (`https://localhost:44378/Pivot`) to the Pivot Table using the [url](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#url) property within the [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/).
2. Below is the sample code to configure the Pivot Table to fetch data from the Web API:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:44378/Pivot'
        // Additional configuration will be added in the next step
    };

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
        <Inject services={[FieldList]}/>
    </PivotViewComponent>);
};
export default App;
```

### Step 3: Define the Pivot Table Report
1. Configure the Pivot Table report in the **App.tsx** (or **App.jsx**) file to structure the data retrieved from the PostgreSQL database.
2. Add fields to the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows), [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns), [values](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#values), and [filters](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#filters) properties of [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/) to define the report structure, specifying how data fields are organized and aggregated in the Pivot Table.
3. Enable the field list by setting the [showFieldList](https://ej2.syncfusion.com/react/documentation/api/pivotview/#showfieldlist) property to **true** and including the `FieldList` module in the services section. This allows users to dynamically add or rearrange fields across the columns, rows, and values axes using an interactive user interface.

Here’s the updated sample code for **App.tsx** (or **App.jsx**) with the report configuration and field list support:

```typescript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
    let dataSourceSettings = {
        url: 'https://localhost:44378/Pivot',
        enableSorting: true,
        columns: [{ name: 'openinghours_practice' }, { name: 'closinghours_practice' }],
        values: [{ name: 'revenue' }],
        rows: [{ name: 'servicetype' }, { name: 'servicecategory' }],
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
2. The Pivot Table will display the data fetched from the PostgreSQL database via the Web API, structured according to the defined report.
3. The resulting Pivot Table will look like this:

![Pivot Table bound with PostgreSQL database](../images/postgresql-data-binding.png)

### Additional Resources
Explore a complete example of the React Pivot Table integrated with an ASP.NET Core Web Application to fetch data from a PostgreSQL database in this [GitHub](https://github.com/SyncfusionExamples/how-to-bind-PostgreSQL-database-to-pivot-table) repository.