---
layout: post
title: Column pinning (Frozen) in React Grid component | Syncfusion
description: Learn here all about Column pinning (Frozen) in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column pinning (Frozen)
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Pinning (Frozen) in React Grid component

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, you have the capability to **freeze** columns, ensuring they remain visible as you scroll through extensive datasets. This functionality significantly improves user experience by keeping critical information constantly within view, even when navigating through large volumes of data. This means that important columns remain fixed in their positions, making it easier to access and reference key data points while working with the grid.

In the following example, the [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#frozencolumns) property is set to **2**. This configuration freezes the left two columns of the grid, and they will remain fixed in their positions while the rest of the columns grid can be scrolled horizontally.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    let textBox;
    const frozenColumn = (() => {
        grid.frozenColumns = textBox.value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen columns:</label>
            <NumericTextBoxComponent id='frozencolums' ref={t => textBox = t} min={0} max={3} validateDecimalOnType={true} decimals={0} format='n' value={2} width={100}></NumericTextBoxComponent>
            <ButtonComponent style={{ marginLeft: '5px' }} onClick={frozenColumn}>UPDATE</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} frozenColumns={2}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='150' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                        <ColumnDirective field='Freight' headerText='Freight' width='120' />
                        <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                        <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                    </ColumnsDirective>
                    <Inject services={[Freeze]} />
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: Grid | null;
    let textBox: NumericTextBoxComponent | null;
    const frozenColumn = (() => {
        (grid as any).frozenColumns = (textBox as any).value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen columns:</label>
            <NumericTextBoxComponent id='frozencolums' ref={t => textBox = t} min={0} max={3} validateDecimalOnType={true} decimals={0} format='n' value={2} width={100}></NumericTextBoxComponent>
            <ButtonComponent style={{ marginLeft: '5px' }} onClick={frozenColumn}>UPDATE</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} frozenColumns={2}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='150' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                        <ColumnDirective field='Freight' headerText='Freight' width='120' />
                        <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                        <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                    </ColumnsDirective>
                    <Inject services={[Freeze]} />
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozen-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozen-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozen-column-cs1" %}

> * Frozen columns should not be set outside the grid view port.
> * Frozen Grid support column virtualization feature, which helps to improve the Grid performance while loading a large dataset.
> * The frozen feature is supported only for the columns that are visible in the current view.
> * You can use both `frozenColumns` property and [frozenRows](https://ej2.syncfusion.com/react/documentation/api/grid/#frozenrows) property in the same application.

## Freeze particular columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a valuable feature that enables you to freeze specific columns, significantly enhancing data visibility and improving your overall user experience. This functionality allows you to select particular columns and freeze them by positioning them at the leftmost side of the grid, ensuring they remain fixed in place while the remaining grid columns can still be scrolled horizontally. While the `frozenColumns` property freezes columns in the order they are initialized in the grid, you can also use the `isFrozen` property at the column level to freeze a specific column at any desired index on the left side, offering flexibility in managing which columns are frozen.

To freeze a particular column in the grid, you can utilize the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isfrozen) property of the grid component as **true**.

The following example demonstrates how to freeze particular column in grid using `isFrozen` property. This is achieved by the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#change) event of the `DropDownList` component. Within the change event, you can modify the `isFrozen` property of the selected column using the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnbyfield) method. Afterward, you can use the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshcolumns) method to update the displayed columns based on your interaction.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const field = { text: 'text', value: 'value' };
    const ddlData = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'OrderDate', value: 'OrderDate' },
        { text: 'ShipName', value: 'ShipName' },
        { text: 'ShipCity', value: 'ShipCity' },
        { text: 'ShipCountry', value: 'ShipCountry' },
        { text: 'ShipRegion', value: 'ShipRegion' },
        { text: 'ShipAddress', value: 'ShipAddress' },
        { text: 'Freight', value: 'Freight' },
    ]
    const columnChange = ((args) => {
        const selectedColumn = grid.getColumnByField(args.value);
        // Iterate through all columns and unfreeze any previously frozen columns
        grid.columns.forEach((column) => {
            if (column.isFrozen) {
                column.isFrozen = false;
            }
        });
        // Freeze the newly selected column, if it exists
        if (selectedColumn) {
            selectedColumn.isFrozen = true;
        }
        // Refresh the columns
        grid.refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen column:</label>
            <DropDownListComponent id='dropdown' index={0} width={150} fields={field} dataSource={ddlData} change={columnChange}></DropDownListComponent>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' isFrozen={true} />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                    <ColumnDirective field='Freight' headerText='Freight' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                    <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                    <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                </ColumnsDirective>
                <Inject services={[Freeze]} />
            </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const field: any = { text: 'text', value: 'value' };
    const ddlData: any = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'OrderDate', value: 'OrderDate' },
        { text: 'ShipName', value: 'ShipName' },
        { text: 'ShipCity', value: 'ShipCity' },
        { text: 'ShipCountry', value: 'ShipCountry' },
        { text: 'ShipRegion', value: 'ShipRegion' },
        { text: 'ShipAddress', value: 'ShipAddress' },
        { text: 'Freight', value: 'Freight' },
    ]
    const columnChange = ((args: ChangeEventArgs) => {
        const selectedColumn = (grid as any).getColumnByField(args.value as string);
        // Iterate through all columns and unfreeze any previously frozen columns
        ((grid as any).columns).forEach((column: any) => {
            if (column.isFrozen) {
                column.isFrozen = false;
            }
        });
        // Freeze the newly selected column, if it exists
        if (selectedColumn) {
            selectedColumn.isFrozen = true;
        }
        // Refresh the columns
        (grid as any).refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen column:</label>
            <DropDownListComponent id='dropdown' index={0} width={150} fields={field} dataSource={ddlData} change={columnChange}></DropDownListComponent>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' isFrozen={true} />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                    <ColumnDirective field='Freight' headerText='Freight' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                    <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                    <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                </ColumnsDirective>
                <Inject services={[Freeze]} />
            </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozen-column-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozen-column-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozen-column-cs2" %}

## Freeze direction

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, the "freeze direction" feature serves to reposition frozen columns either to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally movable. This feature is designed to optimize user experience by ensuring that critical information remains visible even during horizontal scrolling. By default, when you set the `frozenColumns` property of the grid or the `isFrozen` property of individual columns, it results in freezing those columns on the left side of the grid. This helps in keeping important data readily accessible as you navigate through your dataset.

To achieve this, you can utilize the [freeze](https://ej2.syncfusion.com/react/documentation/api/grid/column/#freeze) property. This property is used to specify the freeze direction for individual columns. The grid will adjust the column positions based on the `freeze` value.

The types of the `freeze` directions:

* **Left**: When you set the `freeze` property to **Left**, specific columns will be frozen on the left side of the grid. The remaining columns will be movable.

* **Right**: When you set the `freeze` property to **Right**, certain columns will be frozen on the right side of the grid, while the rest of the columns remain movable.

* **Fixed**: The Fixed direction locks a column at a fixed position within the grid. This ensures that the column is always visible during horizontal scroll.

In the following example, the **ShipCountry** column is frozen on the left side, the **CustomerID** column is frozen on the right side and the **Freight** column is frozen on the fixed of the content table. Additionally, you can modify the `freeze` property to **Left**, **Right** and **Fixed** based on the selected column by utilizing the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#change) event of the `DropDownList` component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  let columnDropDown;
  let directionDropDown;
  const field = { text: 'name', value: 'id' };
  const columnData = [
    { id: 'OrderID', name: 'OrderID' },
    { id: 'CustomerID', name: 'CustomerID' },
    { id: 'OrderDate', name: 'OrderDate' },
    { id: 'ShipName', name: 'ShipName' },
    { id: 'ShipCity', name: 'ShipCity' },
    { id: 'ShipCountry', name: 'ShipCountry' },
    { id: 'ShipRegion', name: 'ShipRegion' },
    { id: 'ShipAddress', name: 'ShipAddress' },
    { id: 'Freight', name: 'Freight' },
  ]
  const directionData = [
    { id: 'Left', name: 'Left' },
    { id: 'Right', name: 'Right' },
    { id: 'Fixed', name: 'Fixed' },
  ]
  const freezeColumnfn = (() => {
    grid.getColumnByField(columnDropDown.value).freeze = directionDropDown.value
    grid.refreshColumns();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change column:</label>
      <DropDownListComponent id='columnData' ref={c => columnDropDown = c} index={5} width={120} fields={field} dataSource={columnData}></DropDownListComponent>
      <label style={{ padding: "10px 10px 26px 0", marginLeft: "5px" }}>Change freeze direction:</label>
      <DropDownListComponent id='directionData' ref={c => directionDropDown = c} index={0} width={100} fields={field} dataSource={directionData}></DropDownListComponent>
      <ButtonComponent style={{ marginLeft: '5px' }} onClick={freezeColumnfn}>Update</ButtonComponent>
      <GridComponent dataSource={data} height={315} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' freeze='Left' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, freezeDirection, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid: Grid | null;
  let columnDropDown: DropDownListComponent | null;
  let directionDropDown: DropDownListComponent | null;
  const field: object = { text: 'name', value: 'id' };
  const columnData: any = [
    { id: 'OrderID', name: 'OrderID' },
    { id: 'CustomerID', name: 'CustomerID' },
    { id: 'OrderDate', name: 'OrderDate' },
    { id: 'ShipName', name: 'ShipName' },
    { id: 'ShipCity', name: 'ShipCity' },
    { id: 'ShipCountry', name: 'ShipCountry' },
    { id: 'ShipRegion', name: 'ShipRegion' },
    { id: 'ShipAddress', name: 'ShipAddress' },
    { id: 'Freight', name: 'Freight' },
  ]
  const directionData: any = [
    { id: 'Left', name: 'Left' },
    { id: 'Right', name: 'Right' },
    { id: 'Fixed', name: 'Fixed' },
  ]
  const freezeColumnfn = (() => {
    (grid as any).getColumnByField((columnDropDown as DropDownListComponent).value as string).freeze = (directionDropDown as DropDownListComponent).value as freezeDirection
    (grid as any).refreshColumns();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change column:</label>
      <DropDownListComponent id='columnData' ref={c => columnDropDown = c} index={5} width={120} fields={field} dataSource={columnData}></DropDownListComponent>
      <label style={{ padding: "10px 10px 26px 0", marginLeft: "5px" }}>Change freeze direction:</label>
      <DropDownListComponent id='directionData' ref={c => directionDropDown = c} index={0} width={100} fields={field} dataSource={directionData}></DropDownListComponent>
      <ButtonComponent style={{ marginLeft: '5px' }} onClick={freezeColumnfn}>Update</ButtonComponent>
      <GridComponent dataSource={data} height={315} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' freeze='Left' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozen-column-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozen-column-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozen-column-cs3" %}


> * Freeze Direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#frozencolumns) properties.

## Change default frozen line color

You can customize the frozen line borders of frozen columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component by applying custom CSS styles to the specific frozen column. This allows you to change the border color of the left frozen columns, right frozen columns, and fixed frozen columns to match your application's design and theme.

To change default frozen line color, use the following class name and apply the border color based on your requirement.

For left frozen columns: 

```css
.e-grid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(198, 30, 204);
}
```
For right frozen columns:

```css
.e-grid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(19, 228, 243);
}
```
For fixed frozen columns, you need to specify both left and right border as mentioned below

```css
.e-grid .e-fixedfreeze.e-freezeleftborder{
    border-left-color: rgb(9, 209, 9); 
}

.e-grid .e-fixedfreeze.e-freezerightborder{
    border-right-color: rgb(10, 224, 10);
}
```
The following example demonstrates how to change the default frozen line color using CSS.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/frozen-column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/frozen-column-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozen-column-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozen-column-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozen-column-cs4" %}

## Render DatePicker in frozen columns in Grid

The Syncfusion React Grid allows rendering a [DatePicker](https://ej2.syncfusion.com/react/demos/#/bootstrap5/datepicker/default) inside frozen columns during editing. This is achieved using the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/column/#edit) property, where a custom editor (DatePicker) is assigned to the specific column. 

To integrate a `DatePicker` in a frozen column, configure the column’s `edit` property with custom `create`, `write`, `read`, and `destroy` methods. These methods ensure that the `DatePicker` initializes, retrieves, and destroys correctly within the frozen column.

The following example demonstrates how to render the `DatePicker` in the **OrderDate** column while keeping it frozen. Here the datepicker object is appended to the corresponding input element in the editing row.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/frozen-column-cs5/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/frozen-column-cs5/app/App.tsx %}
{% endhighlight %}

{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozen-column-cs5/app/datasource.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozen-column-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/frozen-column-cs5" %}

## Deprecated methods 

Previous | Current | Explanation 
 ---  | --- | --- 
`getMovableRows()` gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-unfreeze') | The previous architecture used separate tables for left, right, and movable contents, returning only movable rows when calling the method, whereas the current architecture combines them into one table, returning all rows and introduces the `e-unfreeze` class for selecting movable rows
`getFrozenRightRows()` gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze') | In the previous architecture, it returned only the table rows from the right freeze table, but in the current architecture, all rows of the entire table are returned, introducing the `e-rightfreeze` class for selecting right freeze rows. 
`getMovableRowByIndex()` <br> `getFrozenRowByIndex()` <br> `getFrozenRightRowByIndex()` | `getRowByIndex()` gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') | In the previous architecture, separate methods were used to select rows from different table sections, while in the current architecture, the `getMovableRowByIndex()`, `getFrozenRightRowByIndex()`, and `getFrozenRowByIndex()` methods now return the same table row based on the given index. Additionally, class names for table cells (td's) have been separated into `e-leftfreeze`, `e-unfreeze`, and `e-rightfreeze`, making it easier to customize cells within a row.
`getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` | `getCellFromIndex()` gridInstance.getCellFromIndex(1,1) | In the previous approach, the `getMovableCellFromIndex()` method was used to choose a specific cell within the movable table, and the `getFrozenRightCellFromIndex()` method was utilized to target a particular cell within the right freeze table. However, in the current architecture, you have the flexibility to select a specific cell in either the movable or right freeze table by using both the `getFrozenRightCellFromIndex()` and `getMovableCellFromIndex()` methods. This new method simplifies the process of selecting and retrieving specific cells within these tables, offering more versatility and convenience.
`getMovableDataRows()` <br> `getFrozenRightDataRows()` <br> `getFrozenDataRows()` | `getDataRows()` gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') | In the previous approach, there were separate methods (`getMovableDataRows()`, `getFrozenRightDataRows()`, and `getFrozenDataRows()`) for obtaining viewport data rows from the freeze, movable, and right tables individually. However, in the new approach, these methods have been enhanced to return the entire viewport data rows for all sections together, simplifying data retrieval. You can now extract specific cells within these rows using selectors such as `e-leftfreeze` for the **left freeze**, `e-unfreeze` for the **movable**, and `e-rightfreeze` for the **right freeze** tables, providing greater flexibility in working with the data.
`getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` gridInstance.getColumnHeaderByIndex(1) | In the previous architecture, the methods selected movable, right freeze, and left freeze headers separately. However, in the new approach, when using the `getMovableColumnHeaderByIndex()`, `getFrozenRightColumnHeaderByIndex()`, and `getFrozenLeftColumnHeaderByIndex()` methods, you will still obtain the same results as in the previous architecture.

> When a validation message is displayed in the frozen part (Left, Right, Fixed) of the table, scrolling is prevented until the validation message is cleared.

## Limitations

While freezing columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides enhanced visibility and scrolling capabilities, there are certain limitations to consider. The following features are not supported when using frozen columns:

* Detail Template
* Hierarchy Grid
* Autofill