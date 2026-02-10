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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a column pinning (freezing) feature that keeps selected columns visible while scrolling across large datasets. This improves readability by ensuring that important information remains accessible, even when working with wide tables.

In a frozen layout, chosen columns remain fixed on either the left or right side of the grid, while other columns continue to scroll horizontally. This makes it easier to compare and analyze data without losing sight of key details.

To enable frozen columns, the `Freeze` module must be injected into the Grid.

```ts
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Freeze } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  return (
    <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='150' freeze='Left' />
                 . . .
                 . . .
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' freeze='Right' />
      </ColumnsDirective>
      <Inject services={[Freeze]} />
    </GridComponent>
  );
}

export default App;

```

## Freeze direction

The Grid supports different freeze directions, which determine where frozen columns appear. By setting the [freeze](https://ej2.syncfusion.com/react/documentation/api/grid/column#freeze) property in a column definition, columns can be pinned to the left, right, or fixed in place. This makes it easy to keep important columns visible while scrolling and gives flexibility when designing grids with multiple frozen sections.

The Grid supports three freeze direction types:

| Direction | Description | Behavior |
|-----------|-------------|----------|
| **Left** | Freezes columns on the left side | Frozen columns remain fixed on the left while other columns scroll horizontally |
| **Right** | Freezes columns on the right side | Frozen columns remain fixed on the right while other columns scroll horizontally |
| **Fixed** | Locks columns at a specific position | Frozen columns stay fixed in their position, creating a locked section between scrollable areas |

**Combining Freeze Directions**

The following table illustrates how columns behave when different freeze directions are applied:

| Scenario | Result |
|----------|--------|
| **Only Left freeze** | Left-frozen columns stay fixed on the left; remaining columns scroll |
| **Only Right freeze** | Right-frozen columns stay fixed on the right; remaining columns scroll |
| **Left + Right freeze** | Left columns fixed on left, right columns fixed on right; middle columns scroll |
| **Left + Fixed + Right** | Creates three sections: left-frozen, middle-frozen (fixed), and right-frozen, with scrollable areas between them |

The following example demonstrates multiple freeze directions in action. The "ShipCountry" column is frozen on the left side by default. The example allows dynamically changing the freeze direction of any column using a DropDownList component. Select a column and choose a freeze direction ("Left", "Right", or "Fixed") to see how it affects the column positioning.

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

> If a column should no longer remain frozen, the `freeze` property can be set to "None" in the column definition. This action removes the frozen state and the column will behave like a normal scrollable column, moving along with the rest of the grid content.


## Freeze particular columns

The Grid provides a straightforward way to freeze individual columns on the left side using the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/grid/column#isfrozen) property in the column definition. When this property is set to "true", the chosen column is locked at the leftmost position of the Grid and remains visible while scrolling horizontally.


The following example demonstrates freezing a particular column using the `isFrozen` property. Initially, the "OrderID" column is frozen. The [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the [DropDownList](https://ej2.syncfusion.com/react/demos/#bootstrap5/drop-down-list/default) component allows dynamically changing which column is frozen. The selected column's `isFrozen` property is modified using the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyfield) method, and the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid#refreshcolumns) method updates the display.

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

> By default, when using `frozenColumns` or `isFrozen` properties, columns freeze on the left side.

## Auto-Generated columns with frozen support

When columns are not explicitly defined using `ColumnDirective`, the Grid automatically generates them based on the bound data source. Even in this scenario, the [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/grid#frozencolumns) property can be applied to lock the first n auto-generated columns on the left side of the Grid.

The `frozenColumns` property accepts a numeric value that determines how many columns remain frozen during initialization. For example, setting `frozenColumns` to "2" will freeze the first two columns created from the data source. These columns stay visible while scrolling horizontally. 

The following example demonstrates the `frozenColumns` property set to "2". This configuration freezes the first two auto-generated columns, such as OrderID and CustomerID, keeping them fixed on the left side of the Grid. The remaining columns continue to support horizontal scrolling.

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

> * The frozen column count should not exceed the total number of visible columns in the Grid.
> * Frozen columns should be within the Grid viewport for proper functionality.
> * [Column virtualization](https://ej2.syncfusion.com/react/documentation/api/grid#enablecolumnvirtualization) is supported for frozen columns, improving performance when loading large datasets.
> * The frozen feature works only with columns visible in the current view.
> * Both `frozenColumns` and [frozenRows](https://ej2.syncfusion.com/react/documentation/api/grid#frozenrows) properties can be used simultaneously in the same Grid.
> * Freeze Direction is incompatible with the `isFrozen` and `frozenColumns` properties.

## Customize frozen line color

The visual separator between frozen and scrollable columns (the "frozen line") can be customized to match application design requirements. Custom CSS styles can be applied to change the border color for left, right, and fixed frozen columns. The Grid applies specific CSS classes to frozen column borders based on their freeze direction. These classes can be targeted to customize the frozen line appearance.

The visual separator between frozen and scrollable columns, known as the **frozen line**, can be customized to align with application design requirements. Custom CSS styles can be applied to change the border color for left, right, and fixed frozen columns. The Grid applies specific CSS classes to frozen column borders based on their freeze direction. These classes can be targeted to customize the frozen line appearance.


**For left frozen columns:**

```css
.e-grid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(198, 30, 204); /* Purple border */
}
```

**For right frozen columns:**

```css
.e-grid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(19, 228, 243); /* Cyan border */
}
```

**For fixed frozen columns:**

Specify both left and right borders:

```css
.e-grid .e-fixedfreeze.e-freezeleftborder {
    border-left-color: rgb(9, 209, 9); /* Green left border */
}

.e-grid .e-fixedfreeze.e-freezerightborder {
    border-right-color: rgb(10, 224, 10); /* Green right border */
}
```

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

## Render custom editors in frozen columns

Custom edit controls, such as a [DatePicker](https://ej2.syncfusion.com/react/demos/#bootstrap5/datepicker/default), can be rendered inside frozen columns during editing. This is achieved using the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property of the column definition, which accepts an object with custom editor methods.

**Custom editor methods:**

| Method | Description | Purpose |
|--------|-------------|---------|
| `create` | Creates and returns the editor element | Initializes the custom editor control (e.g., DatePicker) |
| `read` | Retrieves the value from the editor | Extracts the current value from the editor when saving |
| `write` | Writes the value to the editor | Sets the initial or updated value in the editor |
| `destroy` | Destroys the editor instance | Cleans up resources when editing is complete |

The following example demonstrates rendering a DatePicker component in the frozen "OrderDate" column. The DatePicker allows date selection during edit mode and properly integrates with the grid's editing lifecycle.

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

The Grid's frozen column implementation has evolved to use a unified table architecture instead of separate tables for different freeze sections. This change improves performance and simplifies the API. The following methods from the previous architecture are now deprecated in favor of new methods with CSS class-based selectors.

| Deprecated Method | Current Method | Explanation |
|-------------------|----------------|-------------|
| `getMovableRows()` | `getRows()` with CSS selector | **Previous:** `gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze')`<br>**Current:** `gridInstance.getRows()[0].querySelectorAll('.e-unfreeze')`<br><br>The previous architecture used separate tables for left, right, and movable contents, returning only movable rows. The current architecture combines them into one table, returning all rows. Use the `e-unfreeze` class to select movable (non-frozen) rows. |
| `getFrozenRightRows()` | `getRows()` with CSS selector | **Previous:** `gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze')`<br>**Current:** `gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze')`<br><br>The previous architecture returned only rows from the right freeze table. The current architecture returns all rows. Use the `e-rightfreeze` class to select right-frozen rows. |
| `getMovableRowByIndex()`<br>`getFrozenRowByIndex()`<br>`getFrozenRightRowByIndex()` | `getRowByIndex()` with CSS selector | **Previous:** Three separate methods for different table sections<br>**Current:** `gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze')`<br><br>The current architecture methods return the same table row based on the given index. Use CSS class selectors to target specific cell types:<br>• `e-leftfreeze` - Left-frozen cells<br>• `e-unfreeze` - Movable cells<br>• `e-rightfreeze` - Right-frozen cells |
| `getMovableCellFromIndex()`<br>`getFrozenRightCellFromIndex()` | `getCellFromIndex()` | **Previous:** Separate methods for movable and right-frozen cells<br>**Current:** `gridInstance.getCellFromIndex(1, 1)`<br><br>The current architecture allows selecting any cell using a single method, simplifying cell selection and retrieval regardless of freeze status. |
| `getMovableDataRows()`<br>`getFrozenRightDataRows()`<br>`getFrozenDataRows()` | `getDataRows()` with CSS selector | **Previous:** Separate methods for each table section<br>**Current:** `gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze')`<br><br>The current approach returns entire viewport data rows for all sections together. Extract specific cells using:<br>• `e-leftfreeze` - Left-frozen cells<br>• `e-unfreeze` - Movable cells<br>• `e-rightfreeze` - Right-frozen cells |
| `getMovableColumnHeaderByIndex()`<br>`getFrozenRightColumnHeaderByIndex()`<br>`getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` | **Previous:** Separate methods for each header section<br>**Current:** `gridInstance.getColumnHeaderByIndex(1)`<br><br>The current approach returns the same results but through a unified method that works across all freeze sections. |

```typescript
// Get all rows and filter for movable (non-frozen) cells
const rows = gridInstance.getRows();
const movableCells = rows[0].querySelectorAll('.e-unfreeze');

// Get all rows and filter for right-frozen cells
const rightFrozenCells = rows[0].querySelectorAll('.e-rightfreeze');

// Get all rows and filter for left-frozen cells
const leftFrozenCells = rows[0].querySelectorAll('.e-leftfreeze');
```

> * Scrolling is prevented when a validation message is displayed in the frozen part (Left, Right, Fixed) of the table until the validation message is cleared or dismissed.
> * When using the new unified architecture, always use the CSS classes (`e-leftfreeze`, `e-unfreeze`, `e-rightfreeze`) to target specific column types rather than relying on deprecated methods.

## Limitations

The following features are not supported when using frozen columns:

* Detail Template
* Hierarchy Grid
* Autofill
