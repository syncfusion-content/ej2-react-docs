---
layout: post
title: React Grid - OData v4 Adaptor | Syncfusion
description: React Grid OData v4 adaptor supports integration with OData v4 services, applying query options, and configuring filtering, sorting, and paging operations.
control: ODataV4 Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# ODataV4 in Syncfusion React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports integration with OData V4 services, enabling standardized querying and manipulation of remote data through RESTful APIs. This guide provides a step‑by‑step process for configuring and using OData V4 with the Syncfusion React Grid to perform efficient server‑side operations such as paging, sorting, filtering, and CRUD.

## Understanding OData protocol

OData (Open Data Protocol) is an open standard for building and consuming RESTful APIs. It defines a consistent format for requests and responses, making it easier to query, filter, sort, and manage data across different platforms and technologies.

### REST vs OData Query comparison

When exposing data through APIs, two common styles are used:

- **Traditional REST APIs**: Use custom query parameters that differ between implementations (e.g., ?country=, ?sort=, ?page=).

- **OData**: An open standard (OASIS) built on REST that provides a consistent query syntax using "$‑prefixed" parameters.

**Quick comparison of REST and OData**:

| Goal                          | Traditional REST API Style                                      | OData Standard Query                                                                 |
|-------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Get all orders                | `/api/orders`                                               | `/odata/Orders`                                                                      |
| Filter by country             | `/api/orders?country=Denmark`                               | `/odata/Orders?$filter=ShipCountry eq 'Denmark'`                                     |
| Sort by ID descending         | `/api/orders?sort=-orderId` or `sort=orderId desc`          | `/odata/Orders?$orderby=OrderID desc`                                                |
| Page 2 (10 items per page)    | `/api/orders?page=2&size=10`                                | `/odata/Orders?$skip=10&$top=10`                                                     |
| All together                  | `/api/orders?country=Denmark&sort=-id&page=2&size=10`       | `/odata/Orders?$filter=ShipCountry eq 'Denmark'&$orderby=OrderID desc&$skip=10&$top=10` |

**OData protocol benefits:**
- **Standardization**: Uniform query syntax across all OData services.
- **Reduced complexity**: Eliminates need for custom filtering and sorting logic.
- **Client flexibility**: Clients control data retrieval requirements.
- **Efficiency**: Minimizes data transfer by requesting only necessary fields and rows.

> This guide provides a step‑by‑step process for configuring and using OData V4 with the Syncfusion React Grid.

## Connect ODataV4 to the data grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid connects to remote data sources through [DataManager](https://ej2.syncfusion.com/react/documentation/data/getting-started), which provides different adaptors to integrate with various backend APIs. For OData V4 services, the connection is established using the `ODataV4Adaptor`, a specialized adaptor that enables seamless communication between the React Grid and OData V4 endpoints. It automatically converts Grid operations such as filtering, sorting, paging, and editing into OData‑compliant queries and processes the responses into a format the Grid can easily consume.

**Adaptor workflow:**

ODataV4Adaptor translation of Grid actions into OData queries:

1. Filter operation triggered from Grid → Adaptor generates: `GET /Orders?$filter=ShipCountry eq 'Denmark'`.
2. Pagination requested → Adaptor generates: `GET /Orders?$skip=20&$top=20`.
3. Record edit initiated → Adaptor generates: `PATCH /Orders/10001` with modified data.
4. Record deletion triggered → Adaptor generates: `DELETE /Orders/10001`.

**Automated functionality:**
- URL construction and query string formatting.
- OData query syntax parsing and validation.
- HTTP verb handling for CRUD operations (GET, POST, PATCH, DELETE).
- Request-response transformation between Grid and OData service.

**Integration benefits:**
- Eliminates manual request construction.
- Ensures OData V4 protocol compliance.
- Reduces boilerplate code.
- Provides seamless Grid-to-OData communication.

## Prerequisites and system requirements

**Development environment:**

1. **Visual Studio 2022** (Community, Professional, or Enterprise)
   - Download: https://visualstudio.microsoft.com/
   
2. **Node.js** version 14.0 or later
   - Download: https://nodejs.org/
   - Verification command: `node --version`

## Implementation overview

**Server-side components:**
- ASP.NET Core OData V4 service endpoint (https://localhost:xxxx).
- Entity Data Model (EDM) defining data structure and relationships.
- OData Controller handling HTTP operations (GET, POST, PATCH, DELETE).
- In-memory data store with 45 sample order records.

**Client-side components:**
- React application with Syncfusion Grid component.
- `DataManager` configured with `ODataV4Adaptor` instance.
- Complete CRUD interface (Create, Read, Update, Delete).
- Advanced features: filtering, sorting, pagination, and global search.

## Configure OData V4 service in ASP.NET Core (Server-Side)

This section covers the complete configuration of an ASP.NET Core OData V4 service for data operations.

### Project creation

**Creating ASP.NET Core with React project:**

1. Launch **Visual Studio 2022**
2. Select **Create a new project**
3. Search for **"ASP.NET Core with React.js"** template
4. Click **Next**
5. Configure project settings:
   - Project name: **ODataV4Adaptor**
   - Location: Select appropriate directory
6. Click **Create**
7. Select framework: **.NET 6.0** or later
8. Confirm by clicking **Create**

> **Reference**: For detailed React and ASP.NET Core integration guidance, consult the [official Microsoft documentation](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022).

**Project structure:**
- **Server folder**: Contains ASP.NET Core API implementation (OData service backend)
- **Client folder**: Contains React application implementation (Grid UI frontend)
- **Communication**: HTTP-based request-response pattern between client and server

### NuGet package installation

**Installing Microsoft.AspNetCore.OData:**

1. Navigate to **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**.
2. Select the **Browse** tab.
3. Search for **"Microsoft.AspNetCore.OData"**.
4. Select the package from results.
5. Mark the server project checkbox in the right panel.
6. Click **Install**.
7. Accept license terms when prompted.

**Package functionality:**
The `Microsoft.AspNetCore.OData` package provides essential libraries for implementing OData V4 endpoints in ASP.NET Core applications, including:
- OData query string parsing and validation.
- Entity Data Model (EDM) construction.
- OData response formatting and serialization.
- Query option processing ($filter, $orderby, $select, etc.).

### Data model definition

**Creating models folder:**

1. In **Solution Explorer**, right-click the **Server** project.
2. Select **Add** → **New Folder**.
3. Assign name: **"Models"**.

**Creating OrdersDetails Entity Class:**

1. Right-click the **Models** folder.
2. Select **Add** → **Class**.
3. Assign name: **"OrdersDetails.cs"**.
4. Replace default content with the implementation below:

{% tabs %}
{% highlight cs tabtitle="OrdersDetails.cs" %}

using System.ComponentModel.DataAnnotations;

namespace ODataV4Adaptor.Server.Models
{
    public class OrdersDetails
    {
        public static List<OrdersDetails> order = new List<OrdersDetails>();
        public OrdersDetails()
        {

        }
        public OrdersDetails(
        int OrderID, string CustomerId, int EmployeeId, string ShipCountry)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.ShipCountry = ShipCountry;
        }   

        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10000;
                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, "Denmark"));
                    order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, "Brazil"));
                    order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, "Germany"));
                    order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, "Austria"));
                    order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, "Switzerland"));
                    code += 5;
                }
            }
            return order;
        }
        [Key]
        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public string? ShipCountry { get; set; }
    }
}

{% endhighlight %}
{% endtabs %}

**Model components explained:**
- `[Key]` attribute: Designates **OrderID** as the primary key, required for OData entity identification and CRUD operations.
- `GetAllRecords()`: Static method generating 45 sample order records across multiple countries for demonstration purposes.
- Nullable properties (`?`): Enable optional field values, allowing null assignments.
- **Production Implementation**: Replace in-memory data store with actual database integration using Entity Framework Core or similar ORM.


### OData service configuration

This step configures ASP.NET Core middleware to support OData protocol and defines the Entity Data Model.

**Locating Program.cs:**

Open the **Program.cs** file in the server project. This file serves as the main configuration entry point for ASP.NET Core applications.

**Entity data model (EDM) construction:**

Add the following configuration code in **Program.cs** before the `builder.Build()` statement:

**Entity data model overview:**
The EDM serves as a metadata blueprint describing the data structure exposed by the OData service. It defines available entities (data types), their properties, relationships, and query capabilities. 

```cs
// Create an ODataConventionModelBuilder to build the OData model.
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder.
// "Orders" will be the name used in URLs (e.g., /odata/Orders)
modelBuilder.EntitySet<OrdersDetails>("Orders");
```

**Implementation details:**
- `ODataConventionModelBuilder`: Utilizes convention-based configuration to automatically map entity properties and relationships
- `EntitySet<OrdersDetails>("Orders")`: Exposes the OrdersDetails class as an OData entity set accessible via the "Orders" endpoint
- Entity set name "Orders" becomes part of the API URL path (e.g., `/odata/Orders`)

**OData service registration:**

After constructing the Entity Data Model, register OData services and configure query capabilities in the ASP.NET Core service collection.

```cs
// Add controllers with OData support to the service collection.
builder.Services.AddControllers().AddOData(
    options => options
        .Select()    // Enables $select to choose specific fields
        .Filter()    // Enables $filter for filtering data
        .OrderBy()   // Enables $orderby for sorting
        .Expand()    // Enables $expand for related data
        .Count()     // Enables $count to get total record count
        .SetMaxTop(100) // Limits maximum records per request
        .AddRouteComponents("odata", modelBuilder.GetEdmModel())); // Maps routes with "odata" prefix
```

**Configuration details:**
- `AddControllers()`: Registers MVC controller services in the dependency injection container.
- `AddOData()`: Integrates OData middleware and service infrastructure.
- `.Select()`: Enables `$select` query option for column projection.
- `.Filter()`: Enables `$filter` query option for data filtering.
- `.OrderBy()`: Enables `$orderby` query option for result ordering.
- `.Expand()`: Enables `$expand` query option for navigating related entities.
- `.Count()`: Enables `$count` query option for total record count retrieval.
- `.SetMaxTop(100)`: Establishes maximum record limit per request (prevents server overload).
- `AddRouteComponents("odata", ...)`: Configures "odata" as the URL prefix for all OData endpoints.
- `modelBuilder.GetEdmModel()`: Provides the previously constructed Entity Data Model.

**Best practice:** Enable only required query options based on application requirements to optimize security and performance.

**Complete Program.cs implementation:**

The complete **Program.cs** file should resemble the following structure:

```cs
using Microsoft.AspNetCore.OData;
using ODataV4Adaptor.Server.Models;
using Microsoft.OData.ModelBuilder;

var builder = WebApplication.CreateBuilder(args);

// Build OData Model
var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add services
builder.Services.AddControllers().AddOData(
    options => options
        .Select()
        .Filter()
        .OrderBy()
        .Expand()
        .Count()
        .SetMaxTop(100)
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

// Add CORS support (required for React app to call API)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();
```

### OData controller implementation

Controllers process incoming HTTP requests and generate appropriate data responses for OData operations.

**Creating OrdersController:**

1. Right-click the **Controllers** folder.
2. Select **Add** → **Controller**.
3. Choose **API Controller - Empty** template.
4. Assign name: **"OrdersController.cs"**.
5. Replace generated content with the implementation below:

```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ODataV4Adaptor.Server.Models;

namespace ODataV4Adaptor.Server.Controllers
{
    public class OrdersController : ODataController
    {
        /// <summary>
        /// Retrieves all orders with OData query support.
        /// </summary>
        /// <returns>The collection of orders.</returns>
        [HttpGet]
        [EnableQuery] // This attribute enables OData query options
        public IActionResult Get()
        {
            var data = OrdersDetails.GetAllRecords().AsQueryable();
            return Ok(data);
        }
    }
}
```

**Implementation analysis:**
- Inheritance from `ODataController`: Provides OData-specific controller capabilities and conventions.
- Routing configuration: OData routing handled automatically via Program.cs configuration; `[Route]` attribute unnecessary.
- Controller behavior: ODataController inherits functionality similar to `[ApiController]` attribute.
- `[HttpGet]`: Designates method to handle HTTP GET requests.
- `[EnableQuery]`: **Essential attribute** - enables OData query processing for `$filter`, `$orderby`, `$select`, and other query options.
- `AsQueryable()`: Converts collection to IQueryable interface, enabling deferred execution and OData query composition.
- `Ok(data)`: Returns HTTP 200 (OK) status with serialized data payload.

> **Critical note**: The `[EnableQuery]` attribute is mandatory for OData query functionality. Without this attribute, manual implementation of filtering, sorting, pagination, and projection logic would be required.

### OData service verification

**Application execution:**

1. In Visual Studio, press **F5** or select the **Run** button
2. The application launches and opens in the default browser
3. Note the assigned URL and port number (example: https://localhost:****)

**OData endpoint verification:**

1. Open a web browser
2. Navigate to: **https://localhost:xxxx/odata/Orders** (replace **xxxx** with the actual port number)
3. Expected result: JSON response containing all 45 order records

**OData query testing:**

Test the following URLs to verify OData query functionality:

- **Get all orders**: `https://localhost:xxxx/odata/Orders`
- **Get top 5 orders**: `https://localhost:xxxx/odata/Orders?$top=5`
- **Filter by country**: `https://localhost:xxxx/odata/Orders?$filter=ShipCountry eq 'Denmark'`
- **Sort by OrderID**: `https://localhost:xxxx/odata/Orders?$orderby=OrderID desc`
- **Count records**: `https://localhost:xxxx/odata/Orders/$count`
- **Select specific columns**: `https://localhost:xxxx/odata/Orders?$select=OrderID,CustomerID`

**OData query syntax reference:**

| Query Option | Purpose | Example |
|--------------|---------|---------|
| `$top=5` | Get first 5 records | `?$top=5` |
| `$skip=10` | Skip first 10 records | `?$skip=10` |
| `$filter=` | Filter records | `?$filter=OrderID gt 10005` |
| `$orderby=` | Sort records | `?$orderby=CustomerID desc` |
| `$select=` | Choose specific fields | `?$select=OrderID,CustomerID` |
| `$count` | Get total count | `/$count` or `?$count=true` |

**Filter operator reference:**
- `eq` - equals: `ShipCountry eq 'Denmark'`
- `ne` - not equals: `ShipCountry ne 'Denmark'`
- `gt` - greater than: `OrderID gt 10005`
- `lt` - less than: `OrderID lt 10010`
- `and` - logical AND: `ShipCountry eq 'Denmark' and OrderID gt 10005`
- `or` - logical OR: `ShipCountry eq 'Denmark' or ShipCountry eq 'Germany'`

> **Troubleshooting checklist**: If errors occur, verify the following:
> - `Microsoft.AspNetCore.OData` NuGet package installation
> - CORS configuration presence in **Program.cs**.
> - `[EnableQuery]` attribute applied to **Get** method.
> - Correct "odata" prefix inclusion in route configuration



## React grid setup and client-side configuration

With the OData service operational, the next phase involves configuring the React Grid component to consume and display data from the service.

### Syncfusion package installation

**Opening terminal in client directory:**

1. In **Solution Explorer**, right-click the **ClientApp** folder (or React project root).
2. Select **Open in Terminal**.
3. Verify current directory contains `package.json` file.

**Installing required dependencies:**

Execute the following npm commands in the terminal:

```bash
npm install @syncfusion/ej2-react-grids --save
npm install @syncfusion/ej2-data --save
```

**Package descriptions:**
- `@syncfusion/ej2-react-grids`: Complete React Grid component library with comprehensive UI features.
- `@syncfusion/ej2-data`: Data management library containing `DataManager` and adaptors including `ODataV4Adaptor`.

### Syncfusion stylesheet integration

**Locating stylesheet file:**

1. Navigate to the **src** folder in the React project
2. Open the **styles.css** file or create a new stylesheet (alternate: **App.css**)

**Importing Syncfusion CSS:**

Add the following CSS import statements to apply proper Grid component styling:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

**Stylesheet component breakdown:**
- `ej2-base`: Foundation styles required by all Syncfusion components
- `ej2-buttons`, `ej2-inputs`, `ej2-calendars`, etc.: Feature-specific styles utilized by Grid functionality
- `ej2-react-grids`: Grid component-specific styling definitions

> **Theme customization**: Alternative themes available include `bootstrap5.css`, `fluent.css`, `tailwind.css`, and others. All theme files maintain consistent path structure with only the filename varying.

**Stylesheet import in application:**

Import the stylesheet in the **main.jsx** or **index.jsx** application entry point:

```javascript
import './styles.css';
```

### Basic grid component implementation

This section demonstrates creating a React Grid component with OData service integration.

**Opening or creating App.jsx:**

1. Navigate to the **src** folder
2. Open the **App.jsx** file or create a new file if absent

**Grid component implementation:**

Create the React Grid component with OData service integration:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

function App() {
    // Create DataManager with ODataV4Adaptor
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/odata/Orders', // Replace xxxx with actual port number
      adaptor: new ODataV4Adaptor(), // Handles all OData communication
      crossDomain: true // Enables cross-domain requests
    });
    
    return (
      <div style={{ margin: '20px' }}>
        <h2>Orders Grid</h2>
        <GridComponent dataSource={data}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' /> 
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          </ColumnsDirective>
        </GridComponent>
      </div>
    );
}

export default App;

{% endhighlight %}
{% endtabs %}

**Implementation analysis:**

**DataManager configuration:**
- `url`: Specifies OData service endpoint URL.
- `adaptor: new ODataV4Adaptor()`: Configures `DataManager` to utilize OData V4 protocol.
- Request pattern: Generates HTTP requests such as `GET https://localhost:xxxx/Orders`.
- `crossDomain: true`: Enables cross-origin requests.

**Grid component configuration:**
- `dataSource={data}`: Binds Grid component to OData service via `DataManager`.
- `ColumnsDirective`: Defines visible column configuration.

**Column properties:**
- `field`: Maps to corresponding property name in "OrdersDetails" entity model.
- `headerText`: Specifies column header display text.
- `isPrimaryKey`: Designates column as unique identifier (mandatory for CRUD operations).
- `width`: Defines column width in pixels.
- `textAlign`: Controls text alignment (options: Left, Right, Center).

### Application execution and verification

**Starting the application:**

1. In Visual Studio, press **F5** to execute.
2. Application launches in default browser.
3. Expected result: Grid displays all 45 orders retrieved from OData service.

**Connection verification:**

- Open the browser **Developer Tools** (keyboard shortcut: F12).
- Navigate to the **Network** tab.
- Refresh the page to capture network traffic.
- Observe requests to `https://localhost:xxxx/odata/Orders`.
- Verify the response contains a JSON data payload.

**Network tab verification checklist:**

- **Request URL**: Confirms endpoint `https://localhost:xxxx/odata/Orders`.
- **Request Method**: Confirms HTTP method `GET`.
- **Status Code**: Confirms success status `200 OK`.
- **Response Body**: Contains JSON array with order objects.

**Common issues and resolutions:**

| Issue | Resolution |
|-------|----------|
| **CORS Error** | Verify CORS configuration in **Program.cs** (see server setup section) |
| **404 Not Found** | Confirm URL and port number match server configuration |
| **Empty Grid** | Inspect browser console for errors, verify server data response |
| **Styles Missing** | Confirm styles.css import in main application file |

> **Note**: CORS configuration is included in the **Complete Program.cs Implementation** section during server setup. Refer to that section for detailed CORS implementation and security considerations for production environments.

## Performing data operations

This section covers implementation of advanced Grid features including filtering, sorting, pagination, and complete CRUD operations.

### Filtering

Filtering enables data refinement by applying conditional criteria. Examples include displaying only orders from Denmark or orders with OrderID greater than "10005".

**Filtering workflow:**
1. Filter criteria entered in Grid column header.
2. `ODataV4Adaptor` converts criteria to OData query syntax: `$filter=ShipCountry eq 'Denmark'`.
3. Server processes filter query and returns matching records.
4. Grid renders filtered result set.

**Implementation steps:**

**Server-side filtering configuration:**

Verify **Program.cs** includes `.Filter()` method in OData configuration (configured in previous steps):

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}
// Create a new instance of the web application builder.
var builder = WebApplication.CreateBuilder(args);

// Create an ODataConventionModelBuilder to build the OData model.
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder.
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add services to the container.

// Add controllers with OData support to the service collection.
builder.Services.AddControllers().AddOData(
    options => options
        .Count()
        .Filter() // Enable filtering support.
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}

import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
      url:'https://localhost:xxxx/odata/Orders', // Replace with the actual API endpoint URL.
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    return <GridComponent dataSource={data} allowFiltering={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Filter]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Implementation details:**
- `allowFiltering={true}`: Activates filtering capability in Grid component
- `Filter`: Syncfusion service providing filtering infrastructure
- `Inject services={[Filter]}`: Registers Filter service with Grid instance
- `crossDomain: true`: Permits cross-origin resource requests

**Filter usage:**
1. Execute the application.
2. Click the filter icon in the column header.
3. Enter the filter value (example: "Denmark" in ShipCountry column).
4. Press Enter to apply the filter.
5. Grid displays records matching the filter criteria.

**Column types with corresponding filter operators:**
- **String columns**: Contains, Equals, Starts With, Ends With operators
- **Number columns**: Equals, Greater Than, Less Than operators
- **Date columns**: Equals, Before, After operators

**Single column filtering:**

![Filtering query](../images/odatav4-adaptor-filtering.png)

**Multi-column filtering:**

Multiple columns can be filtered simultaneously. Example: Apply filter criteria ShipCountry = "Denmark" AND OrderID > 10005.

![Filtering query](../images/odatav4-adaptor-multi-column-filtering.png)

### Searching

The search feature provides a global search interface that queries across all columns simultaneously. Unlike column-specific filtering, searching performs keyword matching across the entire data set.

**Filtering vs. Searching:**
- **Filtering**: Column-specific with precise conditional logic (example: ShipCountry = "Denmark")
- **Searching**: Global keyword matching across all columns (example: "Denmark" matches any column containing the term)

**Search workflow:**
1. Search term entered in search box.
2. `ODataV4Adaptor` constructs composite `$filter` query checking all columns.
3. Server returns records with matches in any column.
4. Grid displays aggregated search results.

**Implementation steps:**

**Server-side configuration:**

Search functionality requires `Filter()` method support (previously configured in Program.cs during OData setup).

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

// Create a new instance of the web application builder.
var builder = WebApplication.CreateBuilder(args);

// Create an ODataConventionModelBuilder to build the OData model.
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder.
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add services to the container.

// Add controllers with OData support to the service collection.
builder.Services.AddControllers().AddOData(
    options => options
        .Count()
        .Filter() // Enable filter for search functionality.
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}

import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
      url:'https://localhost:xxxx/odata/Orders', // Replace with the actual API endpoint URL.
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    const toolbar = ['Search'];
    return <GridComponent dataSource={data} toolbar={toolbar}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Implementation details:**
- `toolbar={toolbar}`: Adds toolbar component to Grid
- `toolbar: ToolbarItems[] = ['Search']`: Configures toolbar to display search interface exclusively
- `Toolbar`: Syncfusion service providing toolbar infrastructure
- `Inject services={[Toolbar]}`: Registers Toolbar service with Grid

**Search usage:**
1. Execute the application.
2. The search box appears in the top-right Grid corner.
3. Enter a search keyword (examples: "Denmark", "ALFKI", "10005").
4. Grid displays matching records from any column.
5. Clear the search box to restore the complete data set.

![Searching query](../images/odatav4-adaptor-searching.png)

**Search behavior characteristics:**
- Searches all columns simultaneously
- Case-insensitive matching
- Partial string matching (example: "Den" matches "Denmark")
- Real-time result updates during input

### Sorting 

Sorting arranges records in ascending or descending order based on column values. Both single-column and multi-column sorting are supported.

**Sorting workflow:**
1. Column header clicked
2. First click: Ascending sort applied (A→Z, 0→9)
3. Second click: Descending sort applied (Z→A, 9→0)
4. Third click: Sort removed
5. `ODataV4Adaptor` generates OData query: `$orderby=ColumnName asc/desc`

**Multi-column sorting:**
Hold **Ctrl** key (Windows) or **Cmd** key (Mac) and click multiple column headers to establish multi-column sort priority.

**Implementation steps:**

**Server-side sorting configuration:**

Verify **Program.cs** includes `.OrderBy()` method in OData configuration (configured in previous steps).

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

// Create a new instance of the web application builder .
var builder = WebApplication.CreateBuilder(args);

// Create an ODataConventionModelBuilder to build the OData model.
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder.
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add controllers with OData support to the service collection.
builder.Services.AddControllers().AddOData(
    options => options
        .Count()
        .OrderBy() // Enable sorting support.
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}

import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Sort, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
      url:'https://localhost:xxxx/odata/Orders', // Replace with the actual API endpoint URL.
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    return <GridComponent dataSource={data} allowSorting={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Sort]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Implementation details:**
- `allowSorting={true}`: Activates sorting capability in Grid component.
- `Sort`: Syncfusion service providing sorting infrastructure.
- `Inject services={[Sort]}`: Registers Sort service with Grid instance.

**Sorting usage:**
1. Execute the application.
2. Click the column header to apply sort.
3. Click again to toggle between ascending and descending order.
4. Click a third time to remove the sort.
5. For multi-column sorting, hold the Ctrl/Cmd key and click additional column headers.

**Single column sorting:**

Click "Order ID" column header to sort by OrderID field.

![Single column sorting query](../images/odatav4-adaptor-sorting.png)

**Multi-column sorting:**

Hold Ctrl key and click "Ship Country" followed by "Order ID" to establish hierarchical sort (primary sort by country, secondary sort by ID within each country group).

![Multi column sorting query](../images/odatav4-adaptor-multi-column-sorting.png)

**Sort indicator legend:**
- ↑ (Up arrow): Indicates ascending sort direction
- ↓ (Down arrow): Indicates descending sort direction
- Numeric indicator (1, 2, 3): Displays sort priority in multi-column sorting scenarios

### Pagination

**Pagination overview:**

Pagination divides large datasets into manageable pages, enhancing performance and usability. Instead of loading all 45 orders simultaneously, pagination displays a subset (e.g., 10 orders per page).

**Pagination workflow:**
1. Page navigation triggered (Next Page button or page number selection)
2. `ODataV4Adaptor` generates query with `$skip` and `$top` parameters
3. Example query for page 2 with 10 records per page: `$skip=10&$top=10`
4. Server returns requested page data only
5. Grid renders current page data

**Pagination benefits:**
- Accelerated initial page load (fetches first page only)
- Reduced client-side memory consumption
- Improved user experience with large datasets
- Decreased server resource utilization

**Implementation steps:**

**Server-side pagination configuration:**

Utilize `SetMaxTop()` method in **Program.cs** to establish maximum records per request limit (previously configured with `SetMaxTop(100)`). 

{% tabs %}
{% highlight cs tabtitle="Program.cs" %}

// Paging is already configured in Program.cs with:
builder.Services.AddControllers().AddOData(
    options => options
        .Select()
        .Filter()
        .OrderBy()
        .Expand()
        .Count()           // Required for paging to show total count
        .SetMaxTop(100)    // Maximum 100 records per page
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

{% endhighlight %}
{% highlight js tabtitle="App.jsx" %}

import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';

function App() {
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/odata/Orders', // Replace with the actual API endpoint URL.
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    const pageSettings = { pageSize: 10, pageSizes: true };
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Implementation details:**
- `allowPaging={true}`: Activates pagination capability.
- `pageSettings`: Configuration object controlling pagination behavior.
- `pageSize: 10`: Specifies 10 records per page display.
- `pageSizes: true`: Enables page size selector dropdown (options: 10, 20, 50, etc.).
- `Page`: Syncfusion service providing pagination infrastructure.
- `Inject services={[Page]}`: Registers Page service with Grid instance.

**Pagination usage:**
1. Execute the application
2. Grid displays the first 10 records initially
3. Navigate using pager controls at the bottom:
   - **First**: Move to the first page
   - **Previous**: Move to the previous page
   - **Page numbers**: Direct access to a specific page
   - **Next**: Move to the next page
   - **Last**: Move to the last page
4. Modify records per page using the page size dropdown

**Custom page configuration:**

```typescript
const pageSettings: PageSettingsModel = {
    pageSize: 20,        // Records displayed per page
    pageCount: 5,        // Number of page number buttons visible
    pageSizes: [10, 20, 50, 100], // Available page size options
    currentPage: 1       // Initial page number
};
```

![paging query](../images/odatav4-adaptor-paging.png)

**Pager information display:**
The pager displays contextual information such as "1-10 of 45 items" to indicate current position within the complete dataset.

### CRUD operations

CRUD stands for Create, Read, Update, Delete—the four basic operations for managing data:
- **Create**: Add new records
- **Read**: View existing records (we've already done this!)
- **Update**: Edit existing records
- **Delete**: Remove records

**CRUD works with OData:**

| Operation | HTTP Method | URL Example | Description |
|-----------|-------------|-------------|-------------|
| **Read** | GET | `/odata/Orders` | Get all records |
| **Create** | POST | `/odata/Orders` | Add a new record |
| **Update** | PATCH | `/odata/Orders(10001)` | Update record with key 10001 |
| **Delete** | DELETE | `/odata/Orders(10001)` | Delete record with key 10001 |

**Implementation steps:**

### Step 1: Complete server-Side controller

Add all CRUD methods to the **OrdersController.cs**. Replace the entire controller with this complete version:

{% tabs %}
{% highlight cs tabtitle="OrdersController.cs - Complete CRUD Implementation" %}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ODataV4Adaptor.Server.Models;

namespace ODataV4Adaptor.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ODataController
    {
        // READ: Get all orders
        [HttpGet]
        [EnableQuery]
        public IActionResult Get()
        {
            var data = OrdersDetails.GetAllRecords().AsQueryable();
            return Ok(data);
        }

        // READ: Get single order by key
        [HttpGet("{key}")]
        [EnableQuery]
        public IActionResult Get(int key)
        {
            var order = OrdersDetails.GetAllRecords().FirstOrDefault(o => o.OrderID == key);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        // CREATE: Insert new order
        [HttpPost]
        [EnableQuery]
        public IActionResult Post([FromBody] OrdersDetails addRecord)
        {
            if (addRecord == null)
            {
                return BadRequest("Order cannot be null");
            }

            // Add to the beginning of the list
            OrdersDetails.GetAllRecords().Insert(0, addRecord);
            return Created(addRecord);
        }

        // UPDATE: Modify existing order
        [HttpPatch("{key}")]
        public IActionResult Patch(int key, [FromBody] OrdersDetails updatedOrder)
        {
            if (updatedOrder == null)
            {
                return BadRequest("Order data cannot be null");
            }

            var existingOrder = OrdersDetails.GetAllRecords().FirstOrDefault(o => o.OrderID == key);
            if (existingOrder == null)
            {
                return NotFound();
            }

            // Update properties (null-coalescing handles partial updates)
            existingOrder.CustomerID = updatedOrder.CustomerID ?? existingOrder.CustomerID;
            existingOrder.EmployeeID = updatedOrder.EmployeeID ?? existingOrder.EmployeeID;
            existingOrder.ShipCountry = updatedOrder.ShipCountry ?? existingOrder.ShipCountry;

            return Ok(existingOrder);
        }

        // DELETE: Remove order
        [HttpDelete("{key}")]
        public IActionResult Delete(int key)
        {
            var order = OrdersDetails.GetAllRecords().FirstOrDefault(o => o.OrderID == key);
            if (order == null)
            {
                return NotFound();
            }

            OrdersDetails.GetAllRecords().Remove(order);
            return NoContent(); // 204 No Content is standard for successful DELETE
        }
    }
}

{% endhighlight %}
{% endtabs %}

**Controller method breakdown:**

- **Get()**: Returns all orders; `[EnableQuery]` allows OData filtering/sorting.
- **Get(int key)**: Returns specific order by ID.
- **Post()**: Creates new order; `Created()` returns 201 status with new record.
- **Patch()**: Updates existing order; only changes specified fields.
- **Delete()**: Removes order; `NoContent()` returns 204 status.

### Step 2: client-side grid configuration

Now configure the React Grid to enable editing:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/odata/Orders', // Here xxxx represents the port number.
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    
    // Configure editing options
    const editSettings = { 
      allowEditing: true,   // Enable edit button
      allowAdding: true,    // Enable add button
      allowDeleting: true,  // Enable delete button
      mode: 'Normal',       // Inline editing mode
      showDeleteConfirmDialog: true  // Enable confirmation dialog
    };
    
    // Configure toolbar buttons
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    
    // Validation rules
    const orderIDRules = { required: true };
    const customerIDRules = { required: true, minLength: 3 };
    
    return <GridComponent 
      dataSource={data} 
      editSettings={editSettings} 
      toolbar={toolbar} 
      height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules} />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Code explanation:**

**EditSettings properties:**
- `allowEditing`: Shows Edit button in rows.
- `allowAdding`: Shows Add button in toolbar.
- `allowDeleting`: Shows Delete button in rows.
- `mode: 'Normal'`: Inline editing (edit in-place). Other options: 'Dialog', 'Batch'.

**Toolbar items:**
- `'Add'`: Button to add new record.
- `'Edit'`: Button to edit selected record.
- `'Delete'`: Button to delete selected record.
- `'Update'`: Save button (appears during editing).
- `'Cancel'`: Cancel button (appears during editing).
- `'Search'`: Search box.

**Validation rules:**
- `required: true`: Field cannot be empty.
- `minLength: 3`: Minimum 3 characters required.
- Other options: `maxLength`, `email`, `number`, `date`, etc.

**Critical:** `isPrimaryKey={true}` is **required** on OrderID for CRUD to work!

### Step 3: Using CRUD features

**Adding a new record:**
1. Click the **Add** button in the toolbar.
2. A new empty row appears.
3. Fill in the required fields.
4. Click **Update** to save or **Cancel** to discard.
5. Grid sends a POST request to the server.

![ODataV4Adaptor-Insert-record](../images/odatav4-adaptor-insert-record.png)

**Editing an existing record:**
1. Select the record.
2. Click the **Edit** button in the toolbar.
3. Fields become editable.
4. Modify the values.
5. Click **Update** to save or **Cancel** to discard.
6. Grid sends a PATCH request to the server.

![ODataV4Adaptor-Update-record](../images/odatav4-adaptor-update-record.png)

**Deleting a record:**
1. Select the record.
2. Click the **Delete** button in the toolbar.
3. A confirmation dialog appears.
4. Click **OK** to confirm the deletion.
5. Grid sends a DELETE request to the server.

![ODataV4Adaptor-Delete-record](../images/odatav4-adaptor-delete-record.png)

### Edit modes comparison

| Mode | Description | When to Use |
|------|-------------|-------------|
| **Normal** | Edit inline in the row | Quick edits, simple forms |
| **Dialog** | Edit in popup dialog | Complex forms, many fields |
| **Batch** | Edit multiple rows, save all at once | Bulk editing operations |

**To use dialog mode:**

```typescript
const editSettings: EditSettingsModel = { 
  allowEditing: true, 
  allowAdding: true, 
  allowDeleting: true, 
  mode: 'Dialog' 
};
```

**To use batch mode:**

```typescript
const editSettings: EditSettingsModel = { 
  allowEditing: true, 
  allowAdding: true, 
  allowDeleting: true, 
  mode: 'Batch' 
};
```

### Custom URLs for CRUD operations

By default, `ODataV4Adaptor` uses standard OData conventions:
- Create: `POST /odata/Orders`.
- Update: `PATCH /odata/Orders(10001)`.
- Delete: `DELETE /odata/Orders(10001)`.

Custom URLs become necessary in these scenarios:
- Existing non-OData endpoints cannot be modified.
- CRUD operations must route to different controllers.
- Custom business logic requires special routing.
- Third-party API integration is required.

**Custom URL implementation:**

Explicitly specify which URL `DataManager` uses for each operation instead of relying on OData routing conventions.

**Configuring custom URLs:**

`DataManager` supports these custom URL properties:

| Property | Purpose | Default Behavior |
|----------|---------|------------------|
| `url` | Read (GET) operations. | `/odata/Orders` |
| `insertUrl` | Create (POST) operations. | Uses `url`. |
| `updateUrl` | Update (PATCH/PUT) operations. | Uses `url/{key}`. |
| `removeUrl` | Delete (DELETE) operations. | Uses `url/{key}`. |
| `batchUrl` | Batch operations. | Uses `url/$batch`. |

### Example 1: Separate URLs for each operation

**Scenario:** Different controllers handle different operations.

{% tabs %}
{% highlight js tabtitle="App.jsx - Custom URLs" %}
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/odata/Orders',              // GET: Read operations
      insertUrl: 'https://localhost:xxxx/odata/Orders/Insert', // POST: Create operations
      updateUrl: 'https://localhost:xxxx/odata/Orders/Update', // PATCH: Update operations
      removeUrl: 'https://localhost:xxxx/odata/Orders/Delete', // DELETE: Delete operations
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    
    const editSettings = { 
      allowEditing: true, 
      allowAdding: true, 
      allowDeleting: true, 
      mode: 'Normal' 
    };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const orderIDRules = { required: true };
    const customerIDRules = { required: true, minLength: 3 };
    
    return <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules} />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Important:**  Server routes must be created to handle these custom URLs.

### Example 2: Batch editing with custom URL

**Scenario:** Multiple changes are processed in a single request for improved efficiency.

{% tabs %}
{% highlight js tabtitle="App.jsx - Batch Editing" %}
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
    const data = new DataManager({ 
      url: 'https://localhost:xxxx/odata/Orders',
      batchUrl: 'https://localhost:xxxx/odata/Orders/Batch',  // All CRUD operations go here
      adaptor: new ODataV4Adaptor(),
      crossDomain: true
    });
    
    const editSettings = { 
      allowEditing: true, 
      allowAdding: true, 
      allowDeleting: true, 
      mode: 'Batch'  // Important: Use Batch mode
    };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const orderIDRules = { required: true };
    const customerIDRules = { required: true, minLength: 3 };
    
    return <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} height={320}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='150' textAlign='Right' validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' validationRules={customerIDRules} />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>
};
export default App;

{% endhighlight %}
{% endtabs %}

**Batch mode benefits:**
- Edit multiple rows before saving.
- All changes sent in one request.
- Reduces server calls.
- Improves performance.
- Better user experience.

**Note:** Custom URL server endpoints must be configured with proper routing in the ASP.NET Core application.

## Troubleshooting common issues

### Issue 1: CORS errors

**Symptom:** Browser console displays "Access-Control-Allow-Origin" error.

**Solution:** Verify CORS configuration in Program.cs:
```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

// Important: Add this BEFORE app.MapControllers()
app.UseCors();
```

### Issue 2: 404 not found

**Symptom:** Network tab displays 404 error on OData endpoint.

**Solutions:**
- Verify port number matches the server configuration.
- Confirm URL includes "odata" prefix: `/odata/Orders`.
- Ensure controller name matches entity set name.
- Verify server is running.

### Issue 3: empty grid

**Symptom:** Grid displays but no data appears.

**Solutions:**
1. Check browser console for errors.
2. Verify Network tab shows successful response with data.
3. Ensure `GetAllRecords()` returns data.
4. Check `[EnableQuery]` attribute is present on controller.

### Issue 4: CRUD operations not working

**Symptom:** Add/Edit/Delete buttons malfunction or throw errors.

**Solutions:**
- Verify `isPrimaryKey={true}` is set on key column.
- Check controller has POST, PATCH, DELETE methods.
- Ensure server allows these HTTP methods (check CORS).
- Verify validation rules aren't blocking operations.

### Issue 5: Styles not applied

**Symptom:** Grid appears plain without Syncfusion styling.

**Solutions:**
- Import styles.css in main.jsx/index.jsx.
- Verify CSS paths match the node_modules location.
- Clear browser cache.
- Check console for CSS import errors.

## Summary and next steps

- **OData fundamentals**: Understanding the OData protocol and its powerful benefits.
- **Server setup**: Creating a robust ASP.NET Core OData V4 service from scratch.
- **Data modeling**: Defining entities and configuring the Entity Data Model (EDM).
- **Client setup**: Installing and configuring Syncfusion React Grid efficiently.
- **Data binding**: Seamlessly connecting Grid to OData service with `ODataV4Adaptor`.
- **Filtering**: Enabling column-specific filtering for data refinement.
- **Searching**: Implementing powerful global search across all columns.
- **Sorting**: Flexible single and multi-column sorting capabilities.
- **Paging**: Efficient data pagination for enhanced performance.
- **CRUD operations**: Complete Create, Read, Update, Delete functionality.
- **Custom URLs**: Advanced routing options for specialized CRUD scenarios.

## See also

- [OData V4 Official Documentation](https://www.odata.org/documentation/)
- [Syncfusion React Grid Documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started)
- [Editing in React Grid](../editing/edit.md)
- [ASP.NET Core OData Documentation](https://learn.microsoft.com/en-us/odata/webapi/getting-started)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
