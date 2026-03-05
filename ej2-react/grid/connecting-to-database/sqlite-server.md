---
layout: post
title: React Grid connected to SQLite Database | Syncfusion
description: Bind SQLite data to Syncfusion React Grid using Entity Framework with complete CRUD, filtering, sorting and advanced data operations.
platform: ej2-react
control: grid
keywords: adaptors, customadaptor, urladaptor, sqlite, remotedata
documentation: ug
domainurl: ##DomainURL##
---

# Connecting SQLite database to React Grid Using Entity Framework

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports binding data from a SQLite database using Entity Framework Core (EF Core). This approach provides a lightweight, server less database solution ideal for mobile applications, desktop applications, and small-to-medium scale web applications.

**What is Entity Framework Core?**

Entity Framework Core (EF Core) is a software tool that simplifies database operations in .NET applications. It serves as a bridge between C# code and databases like SQLite.

**Key Benefits of Entity Framework Core**

- **Automatic SQL Generation**: Entity Framework Core generates optimized SQL queries automatically, eliminating the need to write raw SQL code.
- **Type Safety**: Work with strongly-typed objects instead of raw SQL strings, reducing errors.
- **Built-in Security**: Automatic parameterization prevents SQL injection attacks.
- **Version Control for Databases**: Manage database schema changes version-by-version through migrations.
- **Familiar Syntax**: Use LINQ (Language Integrated Query) syntax, which is more intuitive than raw SQL strings.

**What is SQLite?**

**SQLite** is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. Unlike other database management systems, SQLite is not a client-server database engine. Rather, it is embedded into the end program.

## Prerequisites

Ensure the following software and packages are installed before proceeding:

| Software/Package | Version | Purpose |
|-----------------|---------|---------|
| Visual Studio 2022 | 17.0 or later | Development IDE with ASP.NET Core workload |
| .NET SDK | net9.0 or compatible | Runtime and build tools |
| SQLite database | 3.0 or later | Embedded Database engine |
| Microsoft.EntityFrameworkCore | 9.0.0 or later | Core framework for database operations |
| Microsoft.EntityFrameworkCore.Tools | 9.0.0 or later | Tools for managing database migrations |
| Microsoft.EntityFrameworkCore.Sqlite | 9.0.0 or later | SQLite provider for Entity Framework Core |

## Key topics

| # | Topics | Link |
|---|---------|-------|
| 1 | Create an ASP.NET Core with React project | [View](#step-2-create-a-new-aspnet-core-with-react-project) |
| 2 | Create a SQLite database with asset records | [View](#step-1-create-the-database-and-table-in-sqlite) |
| 3 | Install necessary NuGet packages for Entity Framework Core and Syncfusion | [View](#step-3-install-required-nuget-packages) |
| 4 | Create data models and DbContext for database communication | [View](#step-4-create-the-data-model) |
| 5 | Configure connection strings and register services | [View](#step-6-configure-connection-string-in-appsettingsjson) |
| 6 | Create a React Grid component that supports searching, filtering, sorting, paging, and CRUD operations | [View](#integrating-syncfusion-react-grid) |
| 7 | Handle bulk operations and batch updates | [View](#step-9-perform-crud-operations) |

## Setting Up the SQLite Environment for Entity Framework Core

### Step 1: Create the database and table in SQLite

First, the **SQLite database** structure must be created to store asset records. Unlike server-based databases, a SQLite database is a single file on disk.

**Instructions:**

1. To view or edit the database, use **DB Browser for SQLite** or the `sqlite3` command-line tool.
2. Create a new database file named **asset.db**.
3. Define an "asset" table with the specified schema.
4. Insert sample data for testing.

Run the following SQL script:

```sql
-- Create Database asset.db
-- Create the IT Assets table (matches Asset entity)
CREATE TABLE IF NOT EXISTS asset (
    Id              INTEGER PRIMARY KEY AUTOINCREMENT,
    AssetID         TEXT NOT NULL UNIQUE,
    AssetName       TEXT NOT NULL,
    AssetType       TEXT NOT NULL,
    Model           TEXT,
    SerialNumber    TEXT NOT NULL,
    InvoiceID       TEXT,
    AssignedTo      TEXT,
    Department      TEXT,
    PurchaseDate    DATE,
    PurchaseCost    REAL,
    WarrantyExpiry  DATE,
    Condition       TEXT CHECK(Condition IN ('New', 'Good', 'Fair', 'Poor')) DEFAULT 'New',
    LastMaintenance DATE,
    Status          TEXT CHECK(Status IN ('Active', 'In Repair', 'Retired', 'Available')) DEFAULT 'Available'
);

-- Insert sample data
INSERT INTO asset (Id, AssetID, AssetName, AssetType, Model, SerialNumber, InvoiceID, AssignedTo, Department, PurchaseDate, PurchaseCost, WarrantyExpiry, Condition, LastMaintenance, Status) VALUES
('1', 'AST-001', 'Dell Latitude Laptop', 'Laptop', 'Latitude 5520', 'SN-DEL-2024-001', 'INV-2023-0015', 'John Smith', 'IT', '2023-01-15', 1250.00, '2026-01-15', 'Good', '2024-06-10', 'Active'),
('2', 'AST-002', 'HP ProBook Laptop', 'Laptop', 'ProBook 450 G8', 'SN-HP-2024-002', 'INV-2023-0042', 'Sarah Johnson', 'Finance', '2023-03-20', 1100.00, '2026-03-20', 'Good', '2024-05-15', 'Active'),
```

After executing this script, the asset records are stored in the "asset" table within the **asset.db** database. The database is now ready for integration with the Syncfusion components.

### Step 2: Create a New ASP.NET Core with React project

Before installing NuGet packages, a new ASP.NET Core Web Application with React must be created. This template creates a full-stack application with both the ASP.NET Core backend server and React frontend client in a single solution.

**Instructions:**

1. Open **Visual Studio 2022**.
2. Click **Create a new project**.
3. Search for **ASP.NET Core with React and TypeScript**.
4. Select the template and click **Next**.
5. Configure the project:
  - **Project name**: **Grid_SQLite** (or a preferred name)
  - **Location**: Choose the desired folder
  - **Solution name**: **Grid_SQLite**
6. Click **Next**.
7. Configure additional options:
   - **Framework**: Select .NET 9.0 (or latest available)
   - **Authentication type**: None
   - **Configure for HTTPS**: Checked (recommended)
8. Click **Create**.

Visual Studio will create a solution with two projects:
- **Grid_SQLite.Server**: The ASP.NET Core backend with Controllers, Data folders, and configuration files
- **grid_sqlite.client**: The React + Vite frontend client application

### Step 3: Install required NuGet packages

NuGet packages are software libraries that add functionality to the application. These packages enable Entity Framework Core, SQLite connectivity, and Syncfusion Grid integration.

**Method 1: Using .NET CLI (Recommended)**

1. Open a terminal in Visual Studio 2022 (View → Terminal).
2. Navigate to your project directory.
3. Run the following commands in sequence:

```bash
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.0
dotnet add package Syncfusion.EJ2.AspNet.Core --version 32.2.3
```

**Method 2: Using Package Manager Console**

1. Open Visual Studio 2022.
2. Navigate to **Tools → NuGet Package Manager → Package Manager Console**.
3. Run the following commands:

```powershell
Install-Package Microsoft.EntityFrameworkCore -Version 9.0.0
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 9.0.0
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 9.0.0
Install-Package Syncfusion.EJ2.AspNet.Core -Version 32.2.3
```

**Method 3: Using NuGet Package Manager UI**

1. Open **Visual Studio 2022 → Tools → NuGet Package Manager → Manage NuGet Packages for Solution**.
2. Search for and install each package individually:
   - **Microsoft.EntityFrameworkCore** (version 9.0.0)
   - **Microsoft.EntityFrameworkCore.Sqlite** (version 9.0.0)
   - **Microsoft.EntityFrameworkCore.Tools** (version 9.0.0)
   - **Syncfusion.EJ2.AspNet.Core** (version 32.2.3)

All required packages are now installed. Verify the installation by checking the project's **.csproj** file or using `dotnet list package` command.


### Step 4: Create the data model

A data model is a C# class that represents the structure of a database table. This model defines the properties that correspond to the columns in the "asset" table.

**Instructions:**

1. Create a new folder named **Data** in the server application project.
2. Inside the **Data** folder, create a new file named **Asset.cs**.
3. Define the **Asset** class with the following code:

```csharp
using System.ComponentModel.DataAnnotations;

namespace Grid_SQLite.Server.Data
{
 /// <summary>
    /// Represents an asset record mapped to the 'asset' table in the database.
    /// This model defines the structure of asset-related data used throughout the application.
    /// </summary>
    public class Asset
    {
        /// <summary>
        /// Gets or sets the unique identifier for the Asset record.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the unique asset reference generated by the system.
        /// Format: AST-XXXXX (e.g., AST-001, AST-002)
        /// </summary>
        public string AssetID { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the Name/description of the asset
        /// </summary>
        public string AssetName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the Type/category of the asset (Laptop, Desktop, Monitor, Printer, etc.)
        /// </summary>
        public string AssetType { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the Model/specification of the asset
        /// </summary>
        public string? Model { get; set; }

        /// <summary>
        /// Gets or sets the Serial number/unique identifier from manufacturer
        /// </summary>
        public string SerialNumber { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the Invoice/purchase order number
        /// </summary>
        public string? InvoiceID { get; set; }

        /// <summary>
        /// Gets or sets the Name/person the asset is assigned to
        /// </summary>
        public string? AssignedTo { get; set; }

        /// <summary>
        /// Gets or sets the Department that owns/uses the asset
        /// Values: IT, Finance, Marketing, HR, Design, Sales, Operations, Executive, Training
        /// </summary>
        public string? Department { get; set; }

        /// <summary>
        /// Gets or sets the Date when the asset was purchased
        /// </summary>
        public DateTime? PurchaseDate { get; set; }

        /// <summary>
        /// Gets or sets the Purchase cost in currency units
        /// Stored with 2 decimal places
        /// </summary>
        public decimal? PurchaseCost { get; set; }

        /// <summary>
        /// Gets or sets the Date when the warranty expires
        /// </summary>
        public DateTime? WarrantyExpiry { get; set; }

        /// <summary>
        /// Gets or sets the Current condition of the asset
        /// Values: New, Good, Fair, Poor
        /// </summary>
        public string? Condition { get; set; } = "New";

        /// <summary>
        /// Gets or sets the Date of the last maintenance performed
        /// </summary>
        public DateTime? LastMaintenance { get; set; }

        /// <summary>
        /// Gets or sets the Current status of the asset
        /// Values: Active, In Repair, Retired, Available
        /// </summary>
        public string Status { get; set; } = "Available";
    }
}
```

**Explanation:**

- The `[Key]` attribute marks the "Id" property as the primary key (a unique identifier for each record).
- Each property represents a column in the database table.
- The `?` symbol indicates that a property is nullable (can be empty).

The data model has been successfully created.

### Step 5: Create the DbContext class

A `DbContext` is a special class that manages the connection between the application and the SQLite database. It handles all database operations such as saving, updating, deleting, and retrieving data.

**Instructions:**

1. Inside the **Data** folder, create a new file named **AssetDbContext.cs**.
2. Define the **AssetDbContext** class with the following code:

```csharp
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace Grid_SQLite.Server.Data
{
    /// <summary>
    /// DbContext for Asset entity
    /// Manages database connections and entity configurations for SQLite
    /// </summary>
    public class AssetDbContext : DbContext
    {
        public AssetDbContext(DbContextOptions<AssetDbContext> options)
            : base(options)
        {
        }

        /// <summary>
        /// DbSet for Asset entities
        /// </summary>
        public DbSet<Asset> Assets => Set<Asset>();

        /// <summary>
        /// Configures the entity mappings and constraints
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Asset>(entity =>
            {
                // Primary Key
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.AssetID)
                    .HasMaxLength(20)
                    .IsRequired(true);

                entity.Property(e => e.AssetName)
                    .HasMaxLength(255)
                    .IsRequired(true);

                entity.Property(e => e.AssetType)
                    .HasMaxLength(100)
                    .IsRequired(true);

                entity.Property(e => e.Model)
                    .HasMaxLength(150)
                    .IsRequired(false);

                entity.Property(e => e.SerialNumber)
                    .HasMaxLength(100)
                    .IsRequired(true);

                entity.Property(e => e.InvoiceID)
                    .HasMaxLength(100)
                    .IsRequired(false);

                entity.Property(e => e.AssignedTo)
                    .HasMaxLength(150)
                    .IsRequired(false);

                entity.Property(e => e.Department)
                    .HasMaxLength(50)
                    .IsRequired(false);

                entity.Property(e => e.PurchaseDate)
                    .HasColumnType("DATE")
                    .IsRequired(false);

                entity.Property(e => e.PurchaseCost)
                    .HasPrecision(12, 2)
                    .IsRequired(false);

                entity.Property(e => e.WarrantyExpiry)
                    .HasColumnType("DATE")
                    .IsRequired(false);

                entity.Property(e => e.Condition)
                    .HasMaxLength(50)
                    .IsRequired(false)
                    .HasDefaultValue("New");

                entity.Property(e => e.LastMaintenance)
                    .HasColumnType("DATE")
                    .IsRequired(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .HasDefaultValue("Available");

                entity.ToTable("asset");
            });
        }
    }
}
```

**Explanation:**

- The `DbContext` class inherits from Entity Framework's `DbContext` base class.
- The `Assets` property represents the "asset" table in the database.
- The `OnModelCreating` method configures how the database columns should behave (maximum length, required/optional, default values, etc.).

The **AssetDbContext** class is required because:

- It **connects** the application to the database.
- It **manages** all database operations.
- It **maps** C# models to actual database tables.
- It **configures** how data should look inside the database.

Without this class, Entity Framework Core will not know where to save data or how to create the assets table. The `DbContext` has been successfully configured.

### Step 6: Configure connection string in appsettings.json

A connection string contains the information needed to connect the application to the SQLite database, which is typically the path to the database file.

**Instructions:**

1. Open the `appsettings.json` file in the project root.
2. Add or update the `ConnectionStrings` section with the SQLite connection details:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=D:\\Database\\asset.db"
  }
}
```

> Ensure the path to **asset.db** is correct for the environment.

The database connection string has been configured successfully.

### Step 7: Register services in Program.cs file

The **Program.cs** file is the entry point for configuring and bootstrapping the ASP.NET Core application. This is where all required services and middleware are registered, including CORS (Cross-Origin Resource Sharing), Entity Framework Core `DbContext`, JSON serialization, and controllers.

**Instructions:**

1. Open the **Program.cs** file in the project root.
2. Replace the existing content with the following configuration:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// CORS (dev)
builder.Services.AddCors(options =>
{
    options.AddPolicy("cors", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

// Controllers with System.Text.Json configured to KEEP PascalCase
builder.Services.AddControllers()
    .AddJsonOptions(o =>
    {
        // Keep property names as declared in C# (PascalCase)
        o.JsonSerializerOptions.PropertyNamingPolicy = null;
        // Keep dictionary keys as-is too
        o.JsonSerializerOptions.DictionaryKeyPolicy = null;
        // Allow case-insensitive reads (accept camelCase or PascalCase on input)
        o.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    });

// Get connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Register DbContext with SQLite provider
builder.Services.AddDbContext<AssetDbContext>(options =>
{
    options.UseSqlite(connectionString);

    // Enable detailed error messages in development
    if (builder.Environment.IsDevelopment())
    {
        options.EnableSensitiveDataLogging();
    }
});

var app = builder.Build();
app.UseCors("cors");
app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

```

## Integrating Syncfusion React Grid

The Syncfusion React Grid is a robust, high‑performance component built to efficiently display, manage, and manipulate large datasets. It provides advanced features such as sorting, filtering, and paging. Follow these steps to render the grid and integrate it with a SQLite database.

> The React client application **grid_sqlite.client** is already created as part of the ASP.NET Core with React template.

### Step 1: Adding Syncfusion packages

Install the necessary Syncfusion packages in the React client project.

**Instructions:**

1. Open a terminal in Visual Studio 2022 (View → Terminal).
2. Navigate to the **grid_sqlite.client** directory:

```bash
cd grid_sqlite.client
```

3. Install the Syncfusion packages:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

After installation, the necessary CSS files are available in the (**../node_modules/@syncfusion**) directory. Add the required CSS references to the (**src/index.css**) file to ensure proper styling of the Grid component.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/bootstrap5.3.css';

```

For this project, the "Bootstrap 5" theme is applied. Other themes can be selected, or the existing theme can be customized to meet specific project requirements. For detailed guidance on theming and customization, refer to the [Syncfusion React Components Appearance](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio) documentation.

### Step 2: Add Syncfusion React Grid

The React Grid component can be added to the application by following these steps. To get started, add the Grid component to the (**grid_sqlite.client/src/App.tsx**) file using the following code.

```ts
import React, { useMemo } from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Inject} from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: `https://localhost:7116/api/asset/url`,
    insertUrl: `https://localhost:7116/api/asset/insert`,
    updateUrl: `https://localhost:7116/api/asset/update`,
    removeUrl: `https://localhost:7116/api/asset/remove`,
    batchUrl: `https://localhost:7116/api/asset/batch`,
    adaptor: new CustomAdaptor()
  }), []);

  return (
    <div>
      <GridComponent
        dataSource={dataManager}
      >
        <ColumnsDirective>
          <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
          {/* Include additional columns here */}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default App;
```

### Step 3: Implement the CustomAdaptor

The Syncfusion React Grid can bind data from a **SQLite database** using [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started) and set the `adaptor` property to `CustomAdaptor` for scenarios that require full control over data operations.

The `CustomAdaptor` (client-side) is a bridge between the React Grid and the ASP.NET Core backend. It extends the `UrlAdaptor` and handles all data operation requests by constructing HTTP POST calls to corresponding server endpoints. When the Grid performs operations like reading, searching, filtering, sorting, paging, and CRUD operations, the CustomAdaptor intercepts these actions and formats them into HTTP requests. These requests are sent to the ASP.NET Core Web API controller on the server, which processes the `DataManagerRequest` using Entity Framework Core to query the SQLite database and return the results.

**Instructions:**

1. Create a new **CustomAdaptor.ts** file in the (**grid_sqlite.client/src**) folder.
2. Add the following code inside this file:

```ts
import { type BatchChanges } from "@syncfusion/ej2-react-grids";
import { DataManager, UrlAdaptor, type ReturnOption, type DataResult } from "@syncfusion/ej2-data";

export class CustomAdaptor extends UrlAdaptor {
  public override processResponse(data: DataResult): ReturnOption {
    const original = data as any;
    if (original && original.result) {
      let i = 0;
      original.result.forEach((item: any) => (item.SNo = ++i));
    }
    return original;
  }

  public override beforeSend(
    dm: DataManager,
    request: Request,
    settings?: any,
  ): void {
    super.beforeSend(dm, request, settings);
  }

  public override insert(dm: DataManager, data: DataResult) {
    return {
      url: `${dm.dataSource["insertUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value: data }),
    };
  }

  public override update(dm: DataManager, _keyField: string, value: any) {
    return {
      url: `${dm.dataSource["updateUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value }),
    };
  }

  public override remove(dm: DataManager, keyField: string, value: any) {
    const keyValue =
      value && typeof value === "object" ? value[keyField] : value;
    return {
      url: `${dm.dataSource["removeUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ key: keyValue }),
    };
  }

  public override batchRequest(dm: DataManager, changes: BatchChanges) {
    return {
      url: `${dm.dataSource["batchUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        added: changes.addedRecords,
        changed: changes.changedRecords,
        deleted: changes.deletedRecords,
      }),
    };
  }
}
```

The `CustomAdaptor` class has been successfully implemented with all data operations.

### Step 4: Add Toolbar with CRUD and search options

The toolbar provides buttons for adding, editing, deleting records, and searching the data.

**Instructions:**

1. Open the (**grid_sqlite.client/src/App.tsx**) file.
2. Inject the `Toolbar` modules in the Grid component.
3. Update the Grid component to include the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar) property with CRUD and search options:

```ts
import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: 'https://localhost:7116/api/asset/url',
    adaptor: new CustomAdaptor(),
  }), []);

  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

  return (
    <GridComponent
      dataSource={dataManager}
      toolbar={toolbar}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
      <Inject services={[Toolbar]} />
    </GridComponent>
  );
};

export default App;
```

**Toolbar items explanation:**

| Item | Function |
| ------ | ---------- |
| `Add` | Opens a form to add a new record. |
| `Edit` | Enables editing of the selected record. |
| `Delete` | Deletes the selected record from the database. |
| `Update` | Saves changes made to the selected record. |
| `Cancel` | Cancels the current edit or add operation. |
| `Search` | Displays a search box to find records. |

The toolbar has been successfully added.

### Step 5: Implement paging feature

The paging feature allows efficient loading of large data sets through on‑demand loading.

**Instructions:**

1. Paging in the Grid is enabled by setting the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowpaging) property to `true`.
2. And injecting the `Page` module in the Grid component.

```ts
import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: 'https://localhost:7116/api/asset/url',
    adaptor: new CustomAdaptor(),
  }), []);

  return (
    <GridComponent
        dataSource={dataManager}
        allowPaging={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  );
};

export default App;
```

On the server side, create a file **AssetController.cs** in the (**Grid_SQLite.Server/Controllers**) folder and add the "UrlDatasource" method provided below:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_SQLite.Server.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly AssetDbContext _db;

        public AssetController(AssetDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Asset> query = _db.Assets.AsNoTracking();
            var op = new DataOperations();

            var count = query.Count();

            if (dm.Skip > 0)
                query = query.Skip(dm.Skip);

            if (dm.Take > 0)
                query = query.Take(dm.Take);

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}
```

**Paging details:**

- The Grid sends page size `take` and skip count `skip` parameters to the server.
- The `operation.PerformSkip()` method skips the specified number of records.
- The `operation.PerformTake()` method retrieves only the required number of records for the current page.
- The total count is calculated before paging to display the total number of records.
- Results are returned and displayed in the Grid with pagination controls.

When paging is performed in the Grid, a request is sent to the server with the following payload.

![Paging Operation Payload](../images/sqlite_page.png)

### Step 6: Implement searching feature

Searching allows finding records by entering keywords in the search box.

**Instructions:**

1. Ensure the toolbar includes the `Search` item.
2. Inject the `Toolbar` module in the Grid component.

```ts
import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: 'https://localhost:7116/api/asset/url',
    adaptor: new CustomAdaptor(),
  }), []);
  const toolbar = ['Search'];
  return (
    <GridComponent
        dataSource={dataManager}
        toolbar={toolbar}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
      <Inject services={[Toolbar]} />
    </GridComponent>
  );
};

export default App;
```

Update the "UrlDatasource" method in the **AssetController.cs** file to handle searching:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_SQLite.Server.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly AssetDbContext _db;

        public AssetController(AssetDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Asset> query = _db.Assets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Search?.Count > 0)
                query = op.PerformSearching(query, dm.Search).Cast<Asset>().AsQueryable();

            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}
```

**Searching details:**

- When text is entered in the search box and Enter is pressed, the Grid sends a search request to the server.
- The "UrlDatasource" method receives the search criteria in `search` parameter.
- The `operation.PerformSearching()` method filters the data based on the search term.
- Results are returned and displayed in the Grid.

When searching is performed in the Grid, a request is sent to the server with the following payload.

![Searching Operation Payload](../images/sqlite_search.png)

### Step 7: Implement filtering feature

Filtering allows restricting data based on column values using a menu interface.

**Instructions:**

1. Filtering is enabled by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowfiltering) property to `true`.
2. Inject the `Filter` module in the Grid component.

```ts

import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Filter } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
    const dataManager = useMemo(() => new DataManager({
    url: 'https://localhost:7116/api/asset/url',
    adaptor: new CustomAdaptor(),
  }), []);
  return (
    <GridComponent
        dataSource={dataManager}
        allowFiltering={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
        <Inject services={[Filter]} />
    </GridComponent>
  );
};

export default App;

```

Update the "UrlDatasource" method in the **AssetController.cs** file to handle filtering:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_SQLite.Server.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly AssetDbContext _db;

        public AssetController(AssetDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Asset> query = _db.Assets.AsNoTracking();
            var op = new DataOperations();
            if (dm.Where?.Count > 0)
                query = op.PerformFiltering(query, dm.Where, dm.Where[0].Operator)
                    .Cast<Asset>()
                    .AsQueryable();

            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}
```

**Filtering details:**

- Open the filter menu from any of the column header.
- Select filtering criteria (equals, contains, greater than, less than, etc.).
- Click the "Filter" button to apply the filter.
- The "UrlDatasource" method receives the filter criteria in `Where` property.
- Results are filtered accordingly and displayed in the Grid.

When filtering is performed in the Grid, a request is sent to the server with the following payload.

![Filtering Operation Payload](../images/sqlite_filter.png)

### Step 8: Implement sorting feature

Sorting enables arranging records in ascending or descending order based on column values.

**Instructions:**

1. Sorting can be enabled by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#allowsorting) property to `true`.
2. Inject the `Sort` module in the Grid component.

```ts
import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: 'https://localhost:7116/api/asset/url',
    adaptor: new CustomAdaptor(),
  }), []);
  return (
    <GridComponent
        dataSource={dataManager}
        allowSorting={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
        <Inject services={[Sort]} />
    </GridComponent>
  );
};

export default App;
```

Update the "UrlDatasource" method in the **AssetController.cs** file to handle sorting:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_SQLite.Server.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly AssetDbContext _db;

        public AssetController(AssetDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Asset> query = _db.Assets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Sorted?.Count > 0)
                query = op.PerformSorting(query, dm.Sorted).Cast<Asset>().AsQueryable();
            else
                query = query.OrderBy(a => a.Id);

            var count = query.Count();

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }
    }
}
```

**Sorting details:**

- Click on the column header to sort in ascending order.
- Click again to sort in descending order.
- The "UrlDatasource" method receives the sort criteria in `Sorted`.
- Records are sorted accordingly and displayed in the Grid.

When sorting is performed in the Grid, a request is sent to the server with the following payload.

![Sorting Operation Payload](../images/sqlite_sort.png)

### Step 9: Perform CRUD operations

CRUD operations allow adding new records, modifying existing records, and removing items that are no longer relevant. The `DataManager` posts a specific action for each operation so that the server can route to the appropriate handler.

Editing operations in the Grid are enabled through configuring the [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#editsettings) properties ([allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/gridModel#allowediting), [allowAdding](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowadding), and [allowDeleting](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowdeleting)) to `true`. Inject the `Edit` and `Toolbar` modules in the Grid component.

```ts
import React, { useMemo } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit, Sort, Filter, Page } from '@syncfusion/ej2-react-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

const App: React.FC = () => {
  const dataManager = useMemo(() => new DataManager({
    url: `https://localhost:7116/api/asset/url`,
    insertUrl: `https://localhost:7116/api/asset/insert`,
    updateUrl: `https://localhost:7116/api/asset/update`,
    removeUrl: `https://localhost:7116/api/asset/remove`,
    batchUrl: `https://localhost:7116/api/asset/batch`,
    adaptor: new CustomAdaptor()
  }), []);

  const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };

  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];

  return (
    <GridComponent
      dataSource={dataManager}
      editSettings={editSettings}
      toolbar={toolbar}
    >
      <ColumnsDirective>
        <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />
        {/* Include additional columns here */}
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit, Sort, Filter, Page]} />
    </GridComponent>
  );
};

export default App;
```

**Insert:**

Record insertion allows new record to be added directly through the Grid component. The adaptor processes the insertion request, performs any required business‑logic validation, and saves the newly created record to the SQLite database.

Implement the `insert` method in (**grid_sqlite.client/src/CustomAdaptor.ts**) to handle record insertion within the `CustomAdaptor` class:

```ts
  public override insert(dm: DataManager, data: DataResult) {
    return {
      url: `${dm.dataSource["insertUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value: data }),
    };
  }
```

In (**Grid_SQLite.Server/Controllers/AssetController.cs**), implement the "Insert" method:

```csharp
        // CREATE
        [HttpPost("insert")]
        public IActionResult Insert([FromBody] CRUDModel<Asset> value)
        {
            var asset = value.Value;

            // Identity handled automatically
            asset.Id = 0;

            _db.Assets.Add(asset);
            _db.SaveChanges();

            return Ok(asset);
        }
```

**What happens behind the scenes:**

1. The form data is collected and validated in the CustomAdaptor's `insert` method.
2. The `Insert` method in **AssetController.cs** file is called.
3. The new record is added to the "Asset" collection.
4. The Grid automatically refreshes to display the new record.

When a new record added in the Grid, a request is sent to the server with the following payload.

![Insert Operation Payload](../images/sqlite_add.png)

**Update:**

Record modification allows asset details to be updated directly within the Grid. The adaptor processes the edited row, validates the updated values, and applies the changes to the SQLite database while ensuring data integrity is preserved.

Implement the `update` method in (**grid_sqlite.client/src/CustomAdaptor.ts**) to handle record update within the `CustomAdaptor` class:

```ts
  public override update(dm: DataManager, _keyField: string, value: any) {
    return {
      url: `${dm.dataSource["updateUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ value }),
    };
  }
```

In (**Grid_SQLite.Server/Controllers/AssetController.cs**), implement the update method:

```csharp
        // UPDATE
        [HttpPost("update")]
        public IActionResult Update([FromBody] CRUDModel<Asset> value)
        {
            var asset = value.Value;

            _db.Entry(asset).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok(asset);
        }
```

**What happens behind the scenes:**

1. The modified data is collected and validated in the CustomAdaptor's `update` method.
2. The `Update` method in **AssetController.cs** file is called.
3. The existing record is retrieved from the database by "ID".
4. All properties are updated with the new values.
5. The Grid refreshes to display the updated record.

When a record updated is in the Grid, a request is sent to the server with the following payload.

![Update Operation Payload](../images/sqlite_edit.png)

**Delete:**

Record deletion allows assets to be removed directly from the Grid. The adaptor captures the delete request, executes the corresponding SQL DELETE operation, and updates both the database and the grid to reflect the removal.

Implement the `remove` method in (**grid_sqlite.client/src/CustomAdaptor.ts**) to handle record deletion within the `CustomAdaptor` class:

```ts
  public override remove(dm: DataManager, keyField: string, value: any) {
    const keyValue =
      value && typeof value === "object" ? value[keyField] : value;
    return {
      url: `${dm.dataSource["removeUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ key: keyValue }),
    };
  }
```

In (**Grid_SQLite.Server/Controllers/AssetController.cs**), implement the delete method:

```csharp
        // DELETE
        [HttpPost("remove")]
        public IActionResult Remove([FromBody] CRUDModel<Asset> value)
        {
            int key;
            if (value.Key is System.Text.Json.JsonElement jsonElement)
            {
                key = jsonElement.GetInt32();
            }
            else
            {
                key = Convert.ToInt32(value.Key);
            }
            var asset = _db.Assets.First(a => a.Id == key);

            _db.Assets.Remove(asset);
            _db.SaveChanges();

            return Ok(value);
        }
```

**What happens behind the scenes:**

1. A record is selected and `Delete` button is clicked.
2. The CustomAdaptor's `remove` method is called.
3. The `Remove` method in **AssetController.cs** file is called.
4. The record is located in the database by its ID.
5. The record is removed from the `_db.Assets` collection.
6. The Grid refreshes to remove the deleted record from the UI.

When a record is deleted in the Grid, a request is sent to the server with the following payload.

![Delete Operation Payload](../images/sqlite_delete.png)

**Batch update:**

Batch operations combine multiple insert, update, and delete actions into a single request, minimizing network overhead by applying all changes atomically to the SQLite database.

Implement the `batchRequest` method in (**grid_sqlite.client/src/CustomAdaptor.ts**) to handle multiple record updates in a single request within the `CustomAdaptor` class:

```ts
  public override batchRequest(dm: DataManager, changes: BatchChanges) {
    return {
      url: `${dm.dataSource["batchUrl"]}`,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        added: changes.addedRecords,
        changed: changes.changedRecords,
        deleted: changes.deletedRecords,
      }),
    };
  }
```

In (**Grid_SQLite.Server/Controllers/AssetController.cs**), implement the batch method:

```csharp
// BATCH
[HttpPost("batch")]
public IActionResult Batch([FromBody] CRUDModel<Asset> value)
{
    if (value.Changed != null)
    {
        foreach (var asset in value.Changed)
        {
            _db.Assets.Attach(asset);
            _db.Entry(asset).State = EntityState.Modified;
        }
    }

    if (value.Added != null)
    {
        foreach (var asset in value.Added)
        {
            asset.Id = 0;
            _db.Assets.Add(asset);
        }
    }

    if (value.Deleted != null)
    {
        foreach (var asset in value.Deleted)
        {
            var existing = _db.Assets.Find(asset.Id);
            if (existing != null)
                _db.Assets.Remove(existing);
        }
    }

    _db.SaveChanges();
    return Ok(value);
}
```

> This method is triggered when the Grid is operating in [Batch](https://ej2.syncfusion.com/react/documentation/grid/editing/batch-editing) edit mode.

**What happens behind the scenes:**

- The Grid collects all added, edited, and deleted records in Batch Edit mode.
- The combined batch request is passed to the CustomAdaptor’s `batchRequest` method.
- Each modified record, added and deleted records are processed using `BatchUpdate` method in **AssetController.cs** file.
- All repository operations persist changes to the SQLite database.
- The Grid refreshes to display the updated, added, and removed records in a single response.

When a batch update is performed in the Grid, a request is sent to the server with the following payload.

![Update Operation Payload](../images/sqlite_batch.png)

Now the adaptor supports bulk modifications with atomic database synchronization. All CRUD operations are now fully implemented, enabling comprehensive data management capabilities within the Grid.

### Step 10: Complete code

Here is the complete and final (**grid_sqlite.client/src/App.tsx**) component with all features integrated:

```ts
import React, { useMemo } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Edit,
  Toolbar,
  Page,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { DataManager } from "@syncfusion/ej2-data";
import "./App.css";
import { CustomAdaptor } from "./CustomAdaptor";

// Define the Asset interface
interface Asset {
  Id: number;
  AssetID: string;
  AssetName: string;
  AssetType: string;
  Model: string;
  SerialNumber: string;
  InvoiceID: string;
  AssignedTo: string;
  Department: string;
  PurchaseDate: Date;
  PurchaseCost: number;
  WarrantyExpiry: Date;
  Condition: string;
  LastMaintenance: Date;
  Status: string;
}

const App: React.FC = () => {
  const toolbarOptions = useMemo(
    () => ["Add", "Edit", "Delete", "Update", "Cancel", "Search"],
    [],
  );
  const editSettings: any = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: "Normal",
  };

  const filterSettings: any = { type: "Excel" };

  const dataManager = useMemo(
    () =>
      new DataManager({
        url: `https://localhost:7116/api/asset/url`,
        insertUrl: `https://localhost:7116/api/asset/insert`,
        updateUrl: `https://localhost:7116/api/asset/update`,
        removeUrl: `https://localhost:7116/api/asset/remove`,
        batchUrl: `https://localhost:7116/api/asset/batch`,
        adaptor: new CustomAdaptor(),
      }),
    [],
  );

  // Condition template with badges
  const conditionTemplate = (props: Asset) => {
    const condition = props.Condition as string;
    const badgeClasses: Record<string, string> = {
      New: "badge bg-success",
      Good: "badge bg-primary",
      Fair: "badge bg-warning",
      Poor: "badge bg-danger",
    };
    const badgeClass = badgeClasses[condition] || "badge bg-secondary";

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span className={badgeClass}>{condition}</span>
      </div>
    );
  };

  // Status template with badges
  const statusTemplate = (props: Asset) => {
    const status = props.Status as string;
    const badgeClasses: Record<string, string> = {
      Active: "badge bg-success",
      "In Repair": "badge bg-warning",
      Retired: "badge bg-secondary",
      Available: "badge bg-info",
    };
    const badgeClass = badgeClasses[status] || "badge bg-secondary";

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span className={badgeClass}>{status}</span>
      </div>
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <GridComponent
        dataSource={dataManager}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        toolbar={toolbarOptions}
        editSettings={editSettings}
        filterSettings={filterSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="Id" isPrimaryKey={true} visible={false} />

          <ColumnDirective field="AssetID" headerText="Asset ID" width="120" />

          <ColumnDirective
            field="AssetName"
            headerText="Asset Name"
            width="180"
            textAlign="Left"
            validationRules={{ required: true }}
          />

          <ColumnDirective
            field="AssetType"
            headerText="Type"
            width="130"
            textAlign="Left"
            validationRules={{ required: true }}
          />

          <ColumnDirective
            field="Model"
            headerText="Model"
            width="150"
            textAlign="Left"
            validationRules={{ required: true }}
          />

          <ColumnDirective
            field="SerialNumber"
            headerText="Serial Number"
            width="160"
          />

          <ColumnDirective
            field="InvoiceID"
            headerText="Invoice ID"
            width="130"
            textAlign="Left"
          />

          <ColumnDirective
            field="AssignedTo"
            headerText="Assigned To"
            width="150"
            textAlign="Left"
          />

          <ColumnDirective
            field="Department"
            headerText="Department"
            width="130"
            textAlign="Left"
            editType="dropdownedit"
          />

          <ColumnDirective
            field="PurchaseDate"
            headerText="Purchase Date"
            width="140"
            textAlign="Center"
            type="date"
            format="yyyy-MM-dd"
            editType="datepickeredit"
            validationRules={{ required: true }}
          />

          <ColumnDirective
            field="PurchaseCost"
            headerText="Cost"
            width="120"
            textAlign="Right"
            format="C0"
            editType="numericedit"
          />

          <ColumnDirective
            field="WarrantyExpiry"
            headerText="Warranty Expiry"
            width="150"
            textAlign="Center"
            type="date"
            format="yyyy-MM-dd"
            editType="datepickeredit"
          />

          <ColumnDirective
            field="Condition"
            headerText="Condition"
            width="120"
            textAlign="Center"
            editType="dropdownedit"
            template={conditionTemplate}
          />

          <ColumnDirective
            field="LastMaintenance"
            headerText="Last Maintenance"
            width="150"
            textAlign="Center"
            type="date"
            format="yyyy-MM-dd"
            editType="datepickeredit"
          />

          <ColumnDirective
            field="Status"
            headerText="Status"
            width="120"
            textAlign="Center"
            editType="dropdownedit"
            template={statusTemplate}
          />
        </ColumnsDirective>

        <Inject services={[Edit, Toolbar, Page, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default App;

```

> - Set [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) to `true` for a column that contains unique values.
> - The [editType](https://ej2.syncfusion.com/react/documentation/api/grid/column#edittype) property can be used to specify the desired editor for each column.(https://ej2.syncfusion.com/react/documentation/grid/editing/edit-types)
> - [type](https://ej2.syncfusion.com/react/documentation/api/grid/columnmodel#type) property of the Grid columns specifies the data type of a grid column.

Here is the complete Controller (**Grid_SQLite.Server/Controllers/AssetController.cs**) file:

```csharp
using Grid_SQLite.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Syncfusion.EJ2.Base;

namespace Grid_SQLite.Server.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly AssetDbContext _db;

        public AssetController(AssetDbContext db)
        {
            _db = db;
        }

        // READ
        [HttpPost("url")]
        public IActionResult UrlDataSource([FromBody] DataManagerRequest dm)
        {
            IQueryable<Asset> query = _db.Assets.AsNoTracking();
            var op = new DataOperations();

            if (dm.Search?.Count > 0)
                query = op.PerformSearching(query, dm.Search).Cast<Asset>().AsQueryable();

            if (dm.Where?.Count > 0)
                query = op.PerformFiltering(query, dm.Where, dm.Where[0].Operator)
                    .Cast<Asset>()
                    .AsQueryable();

            if (dm.Sorted?.Count > 0)
                query = op.PerformSorting(query, dm.Sorted).Cast<Asset>().AsQueryable();
            else
                query = query.OrderBy(a => a.Id);

            var count = query.Count();

            if (dm.Skip > 0)
                query = query.Skip(dm.Skip);

            if (dm.Take > 0)
                query = query.Take(dm.Take);

            return dm.RequiresCounts
                ? Ok(new { result = query.ToList(), count })
                : Ok(query.ToList());
        }

        // CREATE
        [HttpPost("insert")]
        public IActionResult Insert([FromBody] CRUDModel<Asset> value)
        {
            var asset = value.Value;

            // Identity handled automatically
            asset.Id = 0;

            _db.Assets.Add(asset);
            _db.SaveChanges();

            return Ok(asset);
        }

        // UPDATE
        [HttpPost("update")]
        public IActionResult Update([FromBody] CRUDModel<Asset> value)
        {
            var asset = value.Value;

            _db.Entry(asset).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok(asset);
        }

        // DELETE
        [HttpPost("remove")]
        public IActionResult Remove([FromBody] CRUDModel<Asset> value)
        {
            int key;
            if (value.Key is System.Text.Json.JsonElement jsonElement)
            {
                key = jsonElement.GetInt32();
            }
            else
            {
                key = Convert.ToInt32(value.Key);
            }
            var asset = _db.Assets.First(a => a.Id == key);

            _db.Assets.Remove(asset);
            _db.SaveChanges();

            return Ok(value);
        }

        // BATCH
        [HttpPost("batch")]
        public IActionResult Batch([FromBody] CRUDModel<Asset> value)
        {
            if (value.Changed != null)
            {
                foreach (var asset in value.Changed)
                {
                    _db.Assets.Attach(asset);
                    _db.Entry(asset).State = EntityState.Modified;
                }
            }

            if (value.Added != null)
            {
                foreach (var asset in value.Added)
                {
                    asset.Id = 0;
                    _db.Assets.Add(asset);
                }
            }

            if (value.Deleted != null)
            {
                foreach (var asset in value.Deleted)
                {
                    var existing = _db.Assets.Find(asset.Id);
                    if (existing != null)
                        _db.Assets.Remove(existing);
                }
            }

            _db.SaveChanges();
            return Ok(value);
        }
    }
}
```

## Running the application

Since the project is created using the ASP.NET Core with React template, both the backend and frontend are configured to run together automatically. Visual Studio handles the build and launch process for both projects.

**Step 1: Open the solution:**

1. Open **Visual Studio 2022**.
2. Open the **Grid_SQLite.slnx** file.

**Step 2: Set startup project:**

1. Ensure **Grid_SQLite.Server** is set as the startup project (it should be by default).
2. The solution is configured to automatically launch both the backend server and the React development server.

**Step 3: Run the application:**

1. Press <kbd>F5</kbd> or click the **Start** button in Visual Studio.
2. Visual Studio will:
   - Build the **Grid_SQLite.Server** project
   - Start the ASP.NET Core backend server (typically on **https://localhost:7116**)
   - Automatically start the React development server in the background
   - Open a browser window with the application

**Step 4: Verify the application is running:**

- The application should open automatically in your default browser
- The React frontend will be served through the ASP.NET Core server
- All API calls to **https://localhost:7116/api/asset/** will be handled by the backend

The asset management application is now running and ready to use.

**Available features:**

- **View Data**: All assets from the SQLite database are displayed in the Grid.
- **Search**: Use the search box to find assets by any field.
- **Filter**: Click on column headers to apply filters.
- **Sort**: Click on column headers to sort data in ascending or descending order.
- **Pagination**: Navigate through records using page numbers.
- **Add**: Click the "Add" button to create a new asset.
- **Edit**: Click the "Edit" button to modify existing assets.
- **Delete**: Click the "Delete" button to remove assets.

## Complete sample repository

A complete, working sample implementation is available in the [GitHub repository](https://github.com/SyncfusionExamples/ej2-react-grid-samples/tree/master/connecting-to-database/syncfusion-react-grid-SQLite).

## See also

- [Types of Edit](https://ej2.syncfusion.com/react/documentation/grid/editing/edit-types)
- [Validation Rules](https://ej2.syncfusion.com/react/documentation/grid/editing/validation)