---
layout: post
title: React Grid - Validation | Syncfusion
description: React Grid validation supports built-in and custom rules, clear error messages, and safeguards that block invalid entries during editing.
control: Validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React Grid Component

Data validation ensures that information entered or modified in the Grid follows specific validation rules, preventing errors and maintaining accuracy. The React Grid component in Syncfusion<sup style="font-size:70%">&reg;</sup> provides built-in validation support to make this process easy and effective.

> For basic Grid editing setup and configuration, refer to the [Editing Feature Setup](../editing/edit.md#set-up-editing) section first.

## Column validation

Column validation applies validation rules to individual columns during edit operations, ensuring data accuracy before saving. Invalid data displays error messages and prevents saving. The [FormValidator](https://ej2.syncfusion.com/react/documentation/api/form-validator) component validates data using rules defined in the [validationRules](https://ej2.syncfusion.com/react/documentation/api/grid/column#validationrules) property for each column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs29/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs29/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs29/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs29" %}

## Custom validation

Custom validation rules apply specific rules to grid columns beyond standard built-in validation. The [FormValidator](https://ej2.syncfusion.com/react/documentation/api/form-validator) component applies these rules and displays error messages for invalid fields. Custom validation supports dependent field validation and numeric range validation for various application scenarios.

The following example demonstrates custom validation for the "Customer ID" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs30/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs30" %}

### Custom validation based on dropdown change

Dependent validation rules adjust based on selections in other columns, enabling linked column validation. The "Salary" column validation adjusts based on the "Role" column selection, ensuring both columns validate correctly together.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs31/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs31/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs31/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs31/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs31" %}

### Custom validation for numeric columns

Numeric column validation applies rules for numeric data such as positive values, minimum/maximum ranges, or decimal limits. This example uses "customFn" and "customFn1" functions configured through the "freightRules" object to validate numeric values. The numeric columns are bound to the `change` event, which calls the [validate](https://ej2.syncfusion.com/react/documentation/api/form-validator#validate) method to check the value and display error messages whenever the data changes.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-validation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-validation-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-validation-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-validation-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-validation-cs1" %}

## Dynamically add or remove validation rules from the form

Validation rules can be added or removed from input elements based on application scenarios or data conditions. The [addRules](https://ej2.syncfusion.com/react/documentation/api/form-validator#addrules) method adds validation rules dynamically to input elements using the name attribute.

The following example demonstrates dynamic addition or removal of validation rules for an input field based on a checkbox selection.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-validation-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-validation-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-validation-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-validation-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-validation-cs2" %}

> The [removeRules](https://ej2.syncfusion.com/react/documentation/api/form-validator#removerules) method removes existing validation rules from input elements when needed. 

## Validation error message positioning

Error message positioning customizes where validation messages appear in the grid. By default, messages display below the input field. The [customPlacement](https://ej2.syncfusion.com/react/documentation/api/form-validator#customplacement) event repositions messages to custom locations based on application needs.

The following example demonstrates moving validation messages to the top of the input field.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-validation-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-validation-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-validation-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-validation-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-validation-cs3" %}

## CRUD error handling with custom error messages

Error handling for CRUD operations in the grid displays helpful error messages when operations fail. The [actionFailure](https://ej2.syncfusion.com/react/documentation/api/grid#actionfailure) event triggers on operation failures, providing access to error messages from server responses for display.
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import './App.css';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import React, { useState } from "react";

function App() {
    const data = new DataManager({
        url: 'https://localhost:****/api/Grid', // Replace your hosted link.
        insertUrl: 'https://localhost:****/api/Grid/Insert',
        updateUrl: 'https://localhost:****/api/Grid/Update',
        removeUrl: 'https://localhost:****/api/Grid/Remove',
        adaptor: new UrlAdaptor()
    });
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbar = ['Add', 'Update', 'Delete', 'Cancel'];
    const orderIDRules = { required: true };
    const [errorMessage, setErrorMessage] = useState("");
    const onActionFailure = (args) => {
        args?.error?.[0]?.error?.json()
            .then((data) => {
                setErrorMessage(data.message);
            })
            .catch(() => {
                setErrorMessage("Error occurred, but message could not be retrieved.");
            });
    };
    return (
        <>
            <p style={{ color: "red", textAlign: "center", }}>{errorMessage}</p>
            <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar} actionFailure={onActionFailure} height={320}>
                <ColumnsDirective>
                    <ColumnDirective field="OrderID" headerText="Order ID" width="120" isPrimaryKey='true' validationRules={orderIDRules} textAlign="Right" />
                    <ColumnDirective field="CustomerID" headerText="Customer ID" width="160" />
                    <ColumnDirective field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right" />
                    <ColumnDirective field="ShipCity" headerText="Ship City" width="150" />
                </ColumnsDirective>
                <Inject services={[Edit, Toolbar]} />
            </GridComponent>
        </>
    );
};
export default App;
{% endraw %}
{% endhighlight %}

{% highlight cs tabtitle="GridController.cs" %}
{% raw %}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UrlAdaptor.Server.Models;
using Syncfusion.EJ2.Base;
using Newtonsoft.Json.Linq;

namespace UrlAdaptor.Server.Controllers
{
  public class GridController : Controller
    {
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
            // Get the total records count.
            int totalRecordsCount = DataSource.Count();
            QueryableOperation queryableOperation = new QueryableOperation(); // Initialize QueryableOperation instance.
            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
            }
            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
        /// <summary>
        /// Inserts a new data item into the data collection.
        /// </summary>
        /// <param name="addRecord">The order to be inserted.</param>
        /// <returns>It returns the newly inserted record detail.</returns>
        [HttpPost]
        [Route("api/[controller]/Insert")]
        public IActionResult Insert([FromBody] CRUDModel<OrdersDetails> value)
        {
            if (value == null)
            {
                return BadRequest(new { message = "Invalid data received." });
            }
            var existingOrder = OrdersDetails.order.FirstOrDefault(or => or.OrderID == value.value.OrderID);
            if (existingOrder == null)
            {
                OrdersDetails.order.Insert(0, value.value);
                return Ok(new { success = true, message = "Order added successfully.", data = value });
            }
            else
            {
                return BadRequest(new { success = false, message = "Duplicate values cannot be inserted." });
            }
        }

        /// <summary>
        /// Updates an existing order.
        /// </summary>
        /// <param name="updateRecord">The updated order details.</param>
        /// <returns>It returns the updated order details.</returns>
        [HttpPost]
        [Route("api/[controller]/Update")]
        public IActionResult Update([FromBody] CRUDModel<OrdersDetails> Order)
        {
            var updatedOrder = Order.value;
            if (updatedOrder.OrderID > 10010 && updatedOrder.OrderID < 10030)
            {
                return BadRequest(new { message = "The edit action was prevented for Order IDs between 10010 and 10030." });
            }
            var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
            // Update the existing record.
            data.OrderID = updatedOrder.OrderID;
            data.CustomerID = updatedOrder.CustomerID;
            data.ShipCity = updatedOrder.ShipCity;
            data.ShipCountry = updatedOrder.ShipCountry;
            return Ok(new { success = true, message = "Order updated successfully." });
        }

        /// <summary>
        /// Deletes an order.
        /// </summary>
        /// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
        /// <returns>It returns the deleted record detail.</returns>
        [HttpPost]
        [Route("api/[controller]/Remove")]
        public IActionResult Remove([FromBody] CRUDModel<OrdersDetails> value)
        {
            int orderId = int.Parse(value.key.ToString());
            if (orderId > 10031 && orderId < 10045)
            {
                return BadRequest(new { message = "The delete action was prevented for OrderIDs between 10031 and 10045" });
            }
            var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
            OrdersDetails.GetAllRecords().Remove(data);
            return Ok(new { success = true, message = "Order deleted successfully." });
        }

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
}
{% endraw %}
{% endhighlight %}

{% highlight cs tabtitle="OrderDetails.cs" %}
{% raw %}
namespace UrlAdaptor.Server.Models
{
    public class OrdersDetails
    {
      public static List<OrdersDetails> order = new List<OrdersDetails>();
      public OrdersDetails(){}
      public OrdersDetails(
      int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
      DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
      DateTime ShippedDate, string ShipAddress) {
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

      public static List<OrdersDetails> GetAllRecords()
      {
        if (order.Count() == 0)
        {
          int code = 10000;
          for (int i = 1; i < 10; i++)
          {
            order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
            order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
            order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
            order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
            order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
            code += 5;
          }
        }
        return order;
      }

      public int? OrderID { get; set; }
      public string? CustomerID { get; set; }
      public int? EmployeeID { get; set; }
      public double? Freight { get; set; }
      public string? ShipCity { get; set; }
      public bool? Verified { get; set; }
      public DateTime OrderDate { get; set; }
      public string? ShipName { get; set; }
      public string? ShipCountry { get; set; }
      public DateTime ShippedDate { get; set; }
      public string? ShipAddress { get; set; }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

The following screenshot illustrates how to retrieve and display error messages when CRUD operations fail:

![custom error message](../images/custom-error-message.png)

## Preventing duplicate entries

The Grid supports prevention of duplicate rows through custom validation logic. This ensures data integrity by restricting duplicate values in the specific columns.

Three configuration steps enable this feature:

1. **Custom Validation Logic**: The "orderIdCustomValidation" function checks whether the entered "Order ID" already exists in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource). This allows editing existing rows without triggering a duplicate error.

2. **Dynamic Rule Configuration**: The "orderIDRules" object enforces unique "Order ID" values. Add this rule dynamically to the form during the `save` action.

3. **Event-Based Validation**: The [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event triggers validation. When `requestType` equals `save`, validation runs before saving. Set `args.cancel = true` if validation fails.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs37/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs37/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs37/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs37/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs37" %}

> Server-side validation implementation details are available in the [knowledge base article](https://support.syncfusion.com/kb/article/11608/how-to-do-server-side-validation-for-grid-in-asp-net-mvc-application). To display validation tooltips instead of alerts, call `grid.editModule.formObj.validate()` in the success callback of Ajax/Fetch operations.