---
layout: post
title: Sorting in React Grid component | Syncfusion
description: Learn here all about Sorting in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
 
# Sorting in React Grid component

The Grid component provides built-in support for sorting data-bound columns in ascending or descending order. To enable sorting in the grid, set the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) property to **true**.

To sort a particular column in the grid, click on its column header. Each time you click the header, the order of the column will switch between **Ascending** and **Descending**.

To use the sorting feature, you need to inject the **Sort** module in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs1" %}

> * Grid column sorted in **Ascending** order. If you click on an already sorted column, then toggles the sort direction.
> * You can apply and clear sorting by using the [sortColumn](https://ej2.syncfusion.com/react/documentation/api/grid/#sortcolumn) and [clearSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#clearsorting) methods.
> * To disable sorting for a specific column, set the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowsorting) property to **false**.

## Initial sorting

By default, the grid component does not apply any sorting to its records at initial rendering. However, you can apply initial sorting by setting the [sortSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings/#columns) property to the desired [field](https://ej2.syncfusion.com/react/documentation/api/grid/sortDescriptorModel/#field) and sort [direction](https://ej2.syncfusion.com/react/documentation/api/grid/sortDescriptorModel/#direction). This feature is helpful when you want to display your data in a specific order when the grid is first loaded.

The following example demonstrates how to set [sortSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings/#columns) for **OrderID** and **ShipCity** columns with a specified [direction](https://ej2.syncfusion.com/react/documentation/api/grid/sortDescriptorModel/#direction).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs2" %}

> The initial sorting defined in [sortSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings/#columns) will override any sorting applied through user interaction.

## Multi-column sorting

The Grid component allows to sort more than one column at a time using multi-column sorting. To enable multi-column sorting in the grid, set the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) property to **true**, and set the [allowMultiSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowmultisorting) property to **true** which enable the user to sort multiple columns by hold the **CTRL** key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

To clear multi-column sorting for a particular column, press the "Shift + mouse left click".

> * The [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) must be true while enabling multi-column sort.
> * Set [allowMultiSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs3" %}

## Prevent sorting for particular column

The Grid component provides the ability to prevent sorting for a particular column. This can be useful when you have certain columns that you do not want to be included in the sorting process. 

It can be achieved by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) property of the particular column to **false**. 

The following example demonstrates, how to disable sorting for **CustomerID** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs6" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

## Custom sorting 

The Grid component provides a way to customize the default sort action for a column by defining the [sortComparer](https://ej2.syncfusion.com/react/documentation/api/grid/column/#sortcomparer) property. The sort comparer function works similar to the [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) comparer function, and allows to define custom sorting logic for a specific column.

The following example demonstrates how to define custom sort comparer function for the **Customer ID** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs5" %}

> The customSortComparer function takes two parameters: a and b. The a and b parameters are the values to be compared. The function returns -1, 0, or 1, depending on the comparison result.

### Display null values always at bottom 

By default, null values in a Syncfusion Grid are displayed at the top when sorting in descending order and at the bottom when sorting in ascending order. However, there may be scenarios where you want to always display null values at the bottom of the grid regardless of the sort direction. This can be achieved by utilizing the [column.sortComparer](https://ej2.syncfusion.com/react/documentation/api/grid/column/#sortcomparer)  method. This feature is particularly useful when working with data sets where null values might need to be clearly separated from actual data entries.

The example below demonstrates how to display null values at the bottom of the grid while sorting the **OrderDate** column in both ascending and descending order.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-null-value/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-null-value/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-null-value/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-null-value/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-null-value" %}


## Touch interaction

When you tap grid header on touch screen devices, then the selected column header is sorted and display a popup ![Sorting](images/sorting.jpg) for multi-column sorting, tap on the popup to sort multiple columns ![Multi Sorting](images/msorting.jpg) and then tap the desired grid headers.

> The [allowMultiSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowmultisorting) and [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot represents a grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## Sort foreign key column based on text

To perform sorting based on foreign key column, the foreign key column can be enabled by using [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/column/#datasource), [foreignKeyField](https://ej2.syncfusion.com/react/documentation/api/grid/column/#foreignkeyfield) and [foreignKeyValue](https://ej2.syncfusion.com/react/documentation/api/grid/column/#foreignkeyvalue) properties.

**Sort foreign key column based on text for local data**

In the case of local data in the grid, the sorting operation will be performed based on the [foreignKeyValue](https://ej2.syncfusion.com/react/documentation/api/grid/column/#foreignkeyvalue) property of the column. The `foreignKeyValue` property should be defined in the column definition with the corresponding foreign key value for each row. The grid will sort the foreign key column based on the text representation of the `foreignKeyValue` property.

The following example demonstrates how to perform sorting by enabling a foreign key column, where the **CustomerID** column acts as a foreign column displaying the **ContactName** column from foreign data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs7" %}

> Make sure to inject the **ForeignKey** module in the grid to ensure its availability throughout your application.

**Sort foreign key column based on text for remote data**

In the case of remote data in the grid, the sorting operation will be performed based on the [foreignKeyField](https://ej2.syncfusion.com/react/documentation/api/grid/column/#foreignkeyfield) property of the column. The `foreignKeyField` property should be defined in the column definition with the corresponding foreign key field name for each row. The grid will send a request to the server-side with the `foreignKeyField` name, and the server-side should handle the sorting operation and return the sorted data to the grid.

```typescript
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data = new DataManager({
    adaptor: new ODataV4Adaptor,
    url: '/OData/Items'
  });
  const employeeData = new DataManager({
    adaptor: new ODataV4Adaptor,
    url: '/OData/Brands'
  });
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID'
        dataSource={employeeData} headerText='Employee Name' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
    </ColumnsDirective>
    <Inject services={[ForeignKey, Sort]} />
  </GridComponent>
};
export default App;
```

The following code example describes the handling of sorting operation at the server side.

```cs
public class ItemsController : ODataController
{
    [EnableQuery]
    public IQueryable<Item> Get()
    {
        List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
        List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
        let queryString = HttpContext.Current.Request.QueryString;
        let allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
        string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
        if (key != null)
        {
            if (key == "EmployeeID") {
                GridData = SortFor(key); //Only for foreignKey Column ascending
            }
            else if(key == "EmployeeID desc") {
                GridData = SortFor(key); //Only for foreignKey Column descending
            }
        }
        let count = GridData.Count();
        let data = GridData.AsQueryable();
        return data;
    }

    public List<Item> SortFor(String Sorted)
    {
        List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
        List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
        if (Sorted == "EmployeeID") //check whether ascending or descending
            empData = empData.OrderBy(e => e.FirstName).ToList();
        else if(Sorted == "EmployeeID desc")
            empData = empData.OrderByDescending(e => e.FirstName).ToList();
        List<Item> or = new List<Item>();
        for (int i = 0; i < empData.Count(); i++) {
            //Select the Field matching records
            IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
            or.AddRange(list);
        }
        return or;
    }
}
```

## Perform sorting based on its culture

Perform sorting based on culture in the Grid can be achieved by utilizing the [locale](https://ej2.syncfusion.com/react/documentation/api/grid/#locale) property. By setting the `locale` property to the desired culture code, you enable sorting based on that specific culture. This allows you to apply locale-specific sorting rules and ensure accurate ordering for different languages and regions.

In the following example, sorting is performed based on the **"ar"** locale using the [sortComparer](https://ej2.syncfusion.com/react/documentation/api/grid/column/#sortcomparer) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs8" %}

## How to customize sort icon

To customize the sort icon in the Grid, you can override the default grid classes **.e-icon-ascending** and **.e-icon-descending** with custom content using CSS. Simply specify the desired icons or symbols using the **content** property as mentioned below

```css
.e-grid .e-icon-ascending::before {
  content: '\e306';
}
	
.e-grid .e-icon-descending::before {
  content: '\e304';
}
```
In the below sample, grid is rendered with a customized sort icon.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/sort-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/sort-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs9" %}

## Sort columns externally

The Grid component in Syncfusion's React suite allows you to customize the sorting of columns and provides flexibility in sorting based on external interactions. You can sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

To sort a column externally, you can utilize the [sortColumn](https://ej2.syncfusion.com/react/documentation/api/grid/#sortcolumn) method with parameters **columnName**, **direction** and **isMultiSort** provided by the Grid component. This method allows you to programmatically sort a specific column based on your requirements.

The following example demonstrates how to add sort columns to a grid. It utilizes the **DropDownList** component to select the column and sort direction. When an external button is clicked, the [sortColumn](https://ej2.syncfusion.com/react/documentation/api/grid/#sortcolumn) method is called with the specified **columnName**, **direction**, and **isMultiSort** parameters. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortDirection, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropColumn;
  let dropdirection;
  const columns = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
  ];
  const direction = [
    { text: 'Ascending', value: 'Ascending' },
    { text: 'Descending', value: 'Descending' },
  ];
  const field = { text: 'text', value: 'value' };
  const sortingOptions = {
    columns: [{ field: 'ShipName', direction: 'Ascending' }]
  };
  const addSortColumn = () => {
    grid.sortColumn(dropColumn.value, dropdirection.value, true);
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={dc => dropColumn = dc} index={0} width='120' dataSource={columns} fields={field}></DropDownListComponent></div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Sort direction :</label>
      <DropDownListComponent ref={dd => dropdirection = dd} index={0} width='120' dataSource={direction} fields={field}></DropDownListComponent></div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={addSortColumn}>Add Sort Column</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" format='C'/>
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortDirection, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropColumn: DropDownListComponent | null;
  let dropdirection: DropDownListComponent | null;
  const columns: { [key: string]: Object; }[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
  ];
  const direction: { [key: string]: Object; }[] = [
    { text: 'Ascending', value: 'Ascending' },
    { text: 'Descending', value: 'Descending' },
  ];
  const field: Object = { text: 'text', value: 'value' };
  const sortingOptions: SortSettingsModel = {
    columns: [{ field: 'ShipName', direction: 'Ascending' }]
  };
  const addSortColumn = () => {
    (grid as GridComponent).sortColumn(((dropColumn as DropDownListComponent).value as string), ((dropdirection as DropDownListComponent).value as SortDirection), true);
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={dc => dropColumn = dc} index={0} width='120' dataSource={columns} fields={field}></DropDownListComponent></div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Sort direction :</label>
      <DropDownListComponent ref={dd => dropdirection = dd} index={0} width='120' dataSource={direction} fields={field}></DropDownListComponent></div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={addSortColumn}>Add Sort Column</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs10" %}

### Remove sort columns

To remove a sort column externally, you can use the `removeSortColumn` method provided by the Grid component. This method allows you to remove the sorting applied to a specific column.

The following example demonstrates how to remove sort columns. It utilizes the **DropDownList** component to select the column. When an external button is clicked, the `removeSortColumn` method is called to remove the selected sort column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropColumn;
  const columns = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'ShipCity', value: 'ShipCity' },
    { text: 'ShipName', value: 'ShipName' }
  ];
  const field = { text: 'text', value: 'value' };
  const sortingOptions = {
    columns: [{ field: 'CustomerID', direction: 'Ascending' }, { field: 'ShipName', direction: 'Descending' }]
  };
  const addSortColumn = () => {
    grid.removeSortColumn(dropColumn.value);
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={dc => dropColumn = dc} index={0} width='120' dataSource={columns} fields={field}></DropDownListComponent></div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={addSortColumn}>Remove Sort Column</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropColumn: DropDownListComponent | null;
  const columns: { [key: string]: Object; }[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'ShipCity', value: 'ShipCity' },
    { text: 'ShipName', value: 'ShipName' }
  ];
  const field: Object = { text: 'text', value: 'value' };
  const sortingOptions: SortSettingsModel = {
    columns: [{ field: 'CustomerID', direction: 'Ascending' }, { field: 'ShipName', direction: 'Descending' }]
  };
  const removeSortColumn = () => {
    (grid as GridComponent).removeSortColumn(((dropColumn as DropDownListComponent).value as string));
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={dc => dropColumn = dc} index={0} width='120' dataSource={columns} fields={field}></DropDownListComponent></div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={removeSortColumn}>Remove Sort Column</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs11" %}

### Clear sorting 

To clear the sorting on an external button click, you can use the [clearSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#clearsorting) method provided by the Grid component. This method clears the sorting applied to all columns in the grid. 

The following example demonstrates how to clear the sorting using `clearSorting` method in the external button click.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const sortingOptions = {
    columns: [{ field: 'CustomerID', direction: 'Ascending' }, { field: 'ShipName', direction: 'Descending' }]
  };
  const clearSorting = () => {
    grid.clearSorting();
  }
  return (<div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={clearSorting}>Clear Sorting</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const sortingOptions: SortSettingsModel = {
    columns: [{ field: 'CustomerID', direction: 'Ascending' }, { field: 'ShipName', direction: 'Descending' }]
  };
  const clearSorting = () => {
    (grid as GridComponent).clearSorting();
  }
  return (<div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={clearSorting}>Clear Sorting</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs12" %}

## Sorting events

The Grid component provides two events that are triggered during the sorting action such as [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete). These events can be used to perform any custom actions before and after the sorting action is completed.

1. **actionBegin**: [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current grid state, including the current sorting column, direction, and data.

2. **actionComplete**: [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current grid state, including the sorted data and column information.

The following example demonstrates how the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) events work when sorting is performed. The `actionBegin` event event is used to cancel the sorting of the OrderID column. The `actionComplete` event is used to display a message.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args) => {
    if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
      setMessage(args.requestType + ' action cancelled for ' + args.columnName + ' column');
      args.cancel = true;
    }
  }
  const actionComplete = (args) => {
    setMessage(args.requestType + ' action completed for ' + args.columnName + ' column');
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowSorting={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args: SortEventArgs) => {
    if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
      setMessage(args.requestType + ' action cancelled for ' + args.columnName + ' column');
      args.cancel = true;
    }
  }
  const actionComplete = (args: SortEventArgs) => {
    setMessage(args.requestType + ' action completed for ' + args.columnName + ' column');
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowSorting={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/sort-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/sort-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/sort-cs4" %}

> [args.requestType](https://ej2.syncfusion.com/react/documentation/api/grid/sortEventArgs/#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is **sorting**.

## See also

* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)