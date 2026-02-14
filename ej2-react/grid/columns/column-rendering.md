---
layout: post
title:  React Grid - Column Rendering | Syncfusion
description: React Grid column rendering allows custom cell and header layouts, templates, and flexible options for complex content and interactive elements.
control: Columns
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Rendering in React Grid Component

## Define columns manually

Columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can be manually defined using the [ColumnDirective](https://ej2.syncfusion.com/react/documentation/api/grid/column) element. Each column is configured with properties such as `field`, `headerText`, `type`, and `width`, allowing precise control over the column's behavior and appearance to meet specific layout and data requirements.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs42/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs42/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs42/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs42/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs42" %}

## Auto-generated columns

Columns are automatically created when the `columns` option is not defined during Grid initialization. In this case, the Grid generates columns based on the fields in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource). Each field in the data source is displayed as a column, and the field name appears in the column header.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs2" %}

>* When the columns are auto-generated, the column `type` is determined from the first record of the `dataSource`.
>* Auto-generating columns for large datasets can affect performance. To improve efficiency, columns can be defined manually in the `columns` option during initialization. Alternatively, the column virtualization feature can be enabled by setting [enableColumnVirtualization](https://ej2.syncfusion.com/react/documentation/api/grid#enablecolumnvirtualization) to `true`.

### Set primary key for auto-generated columns in editing

Primary key configuration for auto-generated columns is necessary when editing is enabled in the Grid to uniquely identify each row for operations such as updating or deleting data. This can be achieved by setting the `isPrimaryKey` property to `true` for the column object through the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs3" %}

If the column `field` name is known, the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyfield) method can be used to retrieve the column object. Then, the `isPrimaryKey` property can be set to "true" for that column, as demonstrated in the code snippet below:

```typescript
const dataBound = () => {
  if (grid) {
    const column: ColumnModel = this.grid.getColumnByField('OrderID');
    column.isPrimaryKey = true;
  }
}
```

### Defining column properties for auto-generated columns

Auto-generated columns can be customized to meet specific requirements by modifying properties such as `type`, `format`, and `width`. These changes are applied within the `dataBound` event. The event is triggered after data has been loaded into the Grid, ensuring that all columns are created and available. At this point, the necessary options for the auto-generated columns can be configured.

In the below example, `width` is set for the "OrderID" column, `type` is set for the "OrderDate" column and `format` is set for the "Freight" and "OrderDate" columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs4" %}

## Custom cell display text

The Grid allows dynamic customization of cell display text at runtime. This is particularly useful when column values need to be formatted or combined based on specific requirements.

### Cell text formatting

In the Grid, the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/column#valueaccessor) property is used to customize the data displayed in a column. It allows formatting or transforming the cell content without modifying the original data source.

To implement `valueAccessor`, define a function for the column that returns the desired display value. This function receives two parameters:

* `field`: The name of the current column's field.
* `data`: The complete data object for the current row.

**Example:**

* **Currency Formatting**: A function like "currencyFormatter" can take the "Freight" value from the data object, append a Euro(€) symbol, and return a formatted string such as "€100".
* **Combining Fields**: A function such as "concatenateFields" can merge the "ShipCity" and "ShipRegion" fields into a single string like "Berlin, BE".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs19" %}

> It is recommended to enable the [Virtual Scrolling](https://ej2.syncfusion.com/react/documentation/api/grid#enablevirtualization) or [Paging](https://ej2.syncfusion.com/react/documentation/api/grid#allowpaging) feature when binding large datasets to the Grid.

### Display array type columns

Array of objects binding to a column in the Grid component can be achieved using the `valueAccessor` property. This allows combining multiple values from an array into a single, readable string for display.

For example, consider a column named "Name" that contains an array of two objects, "FirstName" and "LastName". The `valueAccessor` property can be used to join these two objects and bind them to the column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/array-of-string-cs1" %}

### Expression column

An expression column displays a calculated value based on other fields in the same row. This can be implemented using the `valueAccessor` property, which allows defining a custom function to compute the value dynamically.

For example, consider an expression column named "Calories Intake". This column calculates the total calories for each row using values from the "Protein", "Fat", and "Carbohydrate" columns. The `valueAccessor` function can perform the necessary calculation—such as applying a formula like:

```ts
const Calories = (Protein × 4) + (Fat × 9) + (Carbohydrate × 4);
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/expression-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/expression-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/expression-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/expression-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/expression-cs1" %}

### Display serial number

Serial number display in the Grid for every row can be achieved using the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#rowdatabound) event. The `rowDataBound` event is triggered for each row in the Grid when the data is bound to the Grid. Inside the `rowDataBound` event handler, a serial number can be calculated using the current page number, page size, and the row's index on that page. These values are available from the Grid's [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid#pagesettings) property:

* `pageSize`: Number of rows shown per page.
* `currentPage`: The current page number.
* `rowIndex`: The index of the row within the current page.

This formula ensures that serial numbers continue correctly across pages. Once calculated, the serial number can be set as the content of the desired cell in the row using `innerHTML`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs38/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs38/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs38/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs38/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs38" %}

## Complex data binding

Complex data binding in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component can be achieved using the dot (.) operator in the `field` property. This feature is particularly useful when dealing with nested or complex data structures.

### Using local data

When binding local data that contains nested objects, the dot (.) operator in the column's `field` property allows access to specific properties within those nested objects.

In the below example, the nested "Employee" object's "FirstName" and "LastName" properties are bound using the dot (.) operator.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs1" %}

### Using remote data

To enable complex data binding in the Grid component using remote data, add the [expand](https://ej2.syncfusion.com/documentation/api/data/query#expand) query to the Grid’s [query](https://ej2.syncfusion.com/react/documentation/api/grid#query) property. This ensures that related or nested data is eagerly loaded from the server, allowing direct access to complex fields using dot (.) notation in the column definitions.

In the below example, the `expand` query loads the nested "Employee" object's "City" property using the dot (.) operator.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/complex-binding-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/complex-binding-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs3" %}

### Complex data binding with list of array of objects

Complex data binding with lists of arrays of objects is supported in the Grid. This feature allows binding complex data with multiple levels of nested objects and arrays to the Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/complex-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/complex-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/complex-binding-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/complex-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs2" %}

### Setting a complex column as a foreign key column

The Grid component provides the ability to set complex columns as foreign key columns. This allows related data from a foreign data source to be displayed based on a nested field value.

The following example demonstrates how to set the "Employee.EmployeeID" column as a foreign key column and display the "FirstName" column from the foreign data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs6" %}
