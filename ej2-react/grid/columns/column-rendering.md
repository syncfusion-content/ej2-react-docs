---
layout: post
title: Column Rendering in React Grid component | Syncfusion
description: Learn here all about Column Rendering in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Columns
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Rendering

## Define columns manually

To define columns manually in grid, you can use the `ColumnsDirective` element to define the columns and represent each column with its respective properties such as [field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field), [headerText](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertext), [type](https://ej2.syncfusion.com/react/documentation/api/grid/column/#type), and [width](https://ej2.syncfusion.com/react/documentation/api/grid/column/#width) set accordingly. This allows you to customize the column's behavior and appearance based on the requirements.

Here's an example code snippet that demonstrates how to define columns manually in the Syncfusion React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/paging-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/paging-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs1" %}

## Auto generated columns

The Grid automatically generates columns when the [ColumnDirective](https://ej2.syncfusion.com/react/documentation/api/grid/column) declaration is empty or undefined while initializing the grid. All the columns in the **dataSource** are bound as grid columns.

You can use the following code snippet to enable auto-generated columns in the Syncfusion Grid:

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

>* When the columns are auto-generated, the column [type](https://ej2.syncfusion.com/react/documentation/api/grid/column/#type) is determined from the first record of the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource).
>* If you have a large dataset, auto-generating columns can result in performance issues. In this case, it is recommended to specify the columns manually in the columns property during initialization or else use column virtualization feature by setting [enableColumnVirtualization](https://ej2.syncfusion.com/react/documentation/api/grid/#enablecolumnvirtualization) property value as **true**.

### Set isPrimaryKey for auto generated columns when editing is enabled

When editing is enabled in the grid, you may need to set a primary key for auto-generated columns to uniquely identify each row for operations such as updating or deleting data. This can be achieved using the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey) property of the column object by using the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event.

By setting `isPrimaryKey` to **true** for an auto-generated column in the Syncfusion Grid, you can specify it as the primary key column, which uniquely identifies each row when editing is enabled.

Here is an example code snippet that shows how to set a primary key for an auto-generated column when editing is enabled:

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

If the column [field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field) name is known, the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnbyfield) method can be used to retrieve the column object. Then, the `isPrimaryKey` property can be set to **true** for that column, as demonstrated in the code snippet below:

```typescript
const dataBound = () => {
  if (grid) {
    const column: ColumnModel = this.grid.getColumnByField('OrderID');
    column.isPrimaryKey = true;
  }
}
```

### Set column options to auto generated columns

To configure column options such as [type](https://ej2.syncfusion.com/react/documentation/api/grid/column/#type), [format](https://ej2.syncfusion.com/react/documentation/api/grid/column/#format) and [width](https://ej2.syncfusion.com/react/documentation/api/grid/column/#width) for auto-generated columns in Syncfusion Grid, you can use the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event of the Grid component. This event is triggered after the data has been bound to the Grid. By handling this event, you can specify the desired column options for the auto-generated columns.

Here's an example of how you can set column options for auto-generated columns using the `dataBound` event:

In the below example, `width` is set for **OrderID** column, **date** `type` is set for **OrderDate** column and `format` is set for **Freight** and **OrderDate** column.

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

## Dynamic column generation 

The Syncfusion Grid component allows you to dynamically generate columns at runtime, based on the data provided. This feature is useful when you need to display data with varying columns based on user requirements or dynamic data sources.

### Using valueAccessor property

Dynamic column generation using value accessor allows you to access and manipulate the display data values in a grid column. By using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/column/#valueaccessor) property of a grid column, you can customize the display value of the column based on the data.

To use `valueAccessor` property, define the column with the property and provide a function that will return the formatted value. The function receives two arguments:
* **field**: represents the data field of the column.
* **data**: represents the data record for the corresponding row.

In the provided code, the **currencyFormatter** function takes the Freight value of the data object, appends the Euro symbol to it, and returns the formatted string. The **concatenateFields** function concatenates the ShipCity and ShipRegion values of the data object and returns the combined string.

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

> The `valueAccessor` function can have performance implications if it is used to access a large number of data records or to perform complex data manipulations. To avoid performance issues, you can enable the virtualization feature while using the valueAccessor property. This ensures that only the visible rows are rendered, resulting in faster rendering times.

### Display array type columns

The Grid component allows you to easily bind an array of objects to a column using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/column/#valueaccessor) property. This property allows customization of how the data is displayed in the column.

For example, consider a column named **Name** that contains an array of two objects, **FirstName** and **LastName**.  The `valueAccessor` property can be used to join these two objects and bind them to the column.

This will display the concatenated value of **FirstName** and **LastName** in the **Full Name** column of the grid. Here's an example of how this can be achieved:

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

You can achieve an expression column in the Grid by using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/column/#valueaccessor) property. The `valueAccessor` property allows you to define a function that calculates the value for the expression column based on the values of other columns.

In this example, we have a grid with columns **Food Name**, **Protein**, **Fat**, and **Carbohydrate**. We want to add an expression column called **Calories Intake** that calculates the total calories for each row based on the values of **Protein**, **Fat**, and **Carbohydrate** columns.

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

To display serial number in the grid for every rows, you can use the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdatabound) event. The `rowDataBound` event is triggered for each row in the grid when the data is bound to the grid.

Within the event handler, the [pagesize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettingsModel/#pagesize) and [currentPage](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettingsModel/#currentpage) index can be obtained from the grid's [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#pagesettings) property. Using these values, the serial number can be calculated based on the page size, current page, and row index. Finally, the calculated serial number can be set as the innerHTML of the corresponding row cell.

Here is an example code snippet that demonstrates how to display serial numbers in a Syncfusion Grid using `rowDataBound` event:

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

The Syncfusion Grid component allows you to achieve complex data binding by using the dot (.) operator in the [field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field). This feature is particularly useful when dealing with nested or complex data structures.

### Using local data

To enable complex data binding in the Grid component using local data, use the dot (.) operator in the `field` property of the column. Here is an example of how to achieve complex data binding using local data:

In the below example, we have bound the nested **Employee** object's **FirstName** and **LastName** properties using the dot (.) operator.

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

To enable complex data binding in the Grid component using remote data, add the [expand](https://ej2.syncfusion.com/documentation/api/data/query/#expand) query to the [query](https://ej2.syncfusion.com/react/documentation/api/grid/#query) property of the Grid, to eager load the complex data. Here is an example of how to achieve complex data binding using remote data:

In the below example, we have used the `expand` query to load the nested Employee object's **City** property using the dot (.) operator.

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

The Syncfusion Grid supports complex data binding with lists of arrays of objects. This feature allows you to bind complex data with multiple levels of nested objects and arrays to the Grid.

The following example shows how to set complex field for datasource having array Of objects.

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

### How to set complex column as foreign key column

The Syncfusion Grid component provides the ability to set complex columns as foreign key columns. This allows you to display related data from a foreign data source based on the complex column value.

The following example demonstrates how to set the **Employee.EmployeeID** column as a foreign key column, and display the **FirstName** column from the foreign data.

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