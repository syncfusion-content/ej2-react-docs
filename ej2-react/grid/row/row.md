---
layout: post
title: React Grid - Row | Syncfusion
description: Learn how to manage rows in Syncfusion React Grid with conditional styling and adjustable row height for a clear, flexible layout.
control: Row 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row in React Grid Component

Each row typically represents a single record or item from a data source. Rows in a grid are used to present data in a tabular format. Each row displays a set of values representing the fields of an individual data record. Rows allow interaction with the data in the grid. Rows can be selected, edited, sorted, filtered, and configured to trigger events based on actions.

## Styling rows 

Customizing the styles of rows in a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows modification of row appearance to meet specific design requirements. This feature is useful when highlighting certain rows or changing the font style, background color, and other properties of the row to enhance the visual appeal of the grid. To customize the row styles in the grid, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides CSS, properties, methods, and event support.

### Using event

The [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#rowdatabound) event triggers for every row when it is bound to the data source. In the event handler, the [RowDataBoundEventArgs](https://ej2.syncfusion.com/react/documentation/api/grid/rowDataBoundEventArgs) object contains details of the row. This object can be used to modify the row's appearance, add custom elements, or perform other customizations.

Here's an example of customizing the rows styles based on the value of the "Freight" column using the `rowDataBound` event. This example involves checking the value of the "Freight" column for each row and adding a CSS class to the row based on the value. The CSS classes "below-30", "below-80", and "above-80" can be defined in the stylesheet to apply the desired styles to the rows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs4" %}

> The [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event can also be used to customize cells and is triggered for every cell in the grid. This is useful when customizing cells based on certain conditions or criteria.

### Using CSS

Row styles can be applied using CSS selectors. The Grid provides a class name for each row element, which can be used to apply styles to that specific row. 

**Customize alternate rows**

The appearance of alternate rows can be customized using CSS. This can be useful for improving the readability of the data and making it easier to distinguish between rows. By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides the CSS class `.e-altrow` to style the alternate rows. This default style can be customized by overriding the `.e-altrow` class with custom CSS styles. 

To change the background color of the alternate rows, add the following CSS code to the application's stylesheet:

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Here's an example of how to use the `.e-altrow` class to style alternate rows:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs1" %}

**Customize selected row**

The appearance of the selected row can be customized using CSS. This is useful when highlighting the currently selected row to improve the visual appeal of the Grid. By default, the Grid provides the CSS class `.e-selectionbackground` to style the selected row. This default style can be customized by overriding the `.e-selectionbackground` class with custom CSS styles.

To change the background color of the selected row, add the following CSS code to the application:

```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of styling the selected row using the `.e-selectionbackground` class:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs2" %}

### Using methods

The Grid provides the following methods to customize the appearance of grid rows:

| Method | Description |
|--------|-------------|
| [getRowByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getrowbyindex) | Returns the HTML element of a row at the specified index. This method applies custom styles to a specific row. |
| [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid#getrowindexbyprimarykey) | Returns the index of the row with the specified primary key. This method gets the index of a specific row and applies custom styles to it. |
| [getRows](https://ej2.syncfusion.com/react/documentation/api/grid#getrows) | Returns an array of all the row elements in the Grid. This method applies custom styles to all rows or to a specific set of rows based on conditions. |
| [getRowInfo](https://ej2.syncfusion.com/react/documentation/api/grid#getrowinfo) | Returns the data object and index of the row corresponding to the specified row element. This method applies custom styles based on the data in a row. |
| [getSelectedRowIndexes](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrowindexes) | Returns an array of the indexes of the selected rows in the Grid. This method applies custom styles to the selected rows. |
| [getSelectedRows](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrows) | Returns an array of the HTML elements representing the selected rows in the grid. This method directly loops through the selected rows and customizes their styles. |

The following example demonstrates customizing the appearance of the row using the [getRowByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyindex) method inside the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event of the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-method-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-method-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-method-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-method-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-method-cs1" %}

## Row height

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows customization of the height of rows based on needs. This feature is useful when displaying more content in a row or when reducing the height of rows to fit content. This can be achieved by using the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/grid#rowheight) property of the Grid component. This property allows changing the height of the entire grid row to a desired value.

The following example demonstrates dynamically changing the height of the rows using the `rowHeight` property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs2" %}

>* The `rowHeight` property can only be used to set the height of the entire grid row, not individual cells within a row.
>* The `rowHeight` property applies the height to all rows in the grid, including the header and footer rows.

### Customize row height for a specific row

The row height for a particular row can be customized when displaying more content in a particular row, reducing the height of a row to fit content, or making a specific row stand out from the other rows in the grid. This can be achieved by using the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/grid#rowheight) property of the Grid component along with the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#rowdatabound) event. This event triggers every time a request is made to access row information, element, or data, and before the row element is appended to the Grid element.

In the following example, the row height for the row with "OrderID" as "10249" is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs3" %}

>* In virtual scrolling mode, it is not applicable to set different row heights.
>* The row height of multiple rows can be customized by checking the relevant criteria in the `rowDataBound` event and setting the `rowHeight` property accordingly.
>* In the `rowDataBound` event handler, the current row can be accessed using the [args.row](https://ej2.syncfusion.com/react/documentation/api/grid/rowDataBoundEventArgs#row) property and the `rowHeight` property can be set for that row using the `setAttribute` method.

## Row hover

The Row Hover feature in Grid provides a visual effect when the mouse pointer hovers over the rows, making it easy to highlight and identify the selected row. This feature can also improve the readability of data in the grid. The row hover effect can be enabled or disabled using the [enableHover](https://ej2.syncfusion.com/react/documentation/api/grid#enablehover) property of the Grid component.

By default, the `enableHover` property is set to `true`, which means that the row hovering effect is enabled. To disable the row hover effect, set the `enableHover` property to `false`.

Here is an example that demonstrates enabling or disabling the Row hover feature:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [enableRowHover, setEnableRowHover] = useState(true);
  const changeValue = (() => {
    setEnableRowHover(!enableRowHover);
  });
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>
        Enable/Disable Row Hover
      </label>
      <SwitchComponent id="switch" checked={enableRowHover} change={changeValue}></SwitchComponent>
      <GridComponent dataSource={data} enableHover={enableRowHover}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [enableRowHover, setEnableRowHover] = useState(true);
  const changeValue = (() => {
    setEnableRowHover(!enableRowHover);
  });
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>
        Enable/Disable Row Hover
      </label>
      <SwitchComponent id="switch" checked={enableRowHover} change={changeValue}></SwitchComponent>
      <GridComponent dataSource={data} enableHover={enableRowHover}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-hover-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-hover-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-hover-cs1" %}

> The `enableHover` property applies to the entire grid, not individual rows or columns.

### Retrieve row information when hovering over a cell

Row information can be retrieved when hovering over a specific cell. This can be useful when displaying additional details or performing some action based on the data in the row. This can be achieved by using the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#rowdatabound) event and the [getRowInfo](https://ej2.syncfusion.com/react/documentation/api/grid#getrowinfo) method of the Grid.

* The `rowDataBound` event triggers every time a request is made to access row information, element, or data, before the row element is appended to the Grid element.
* The `getRowInfo` method retrieves the row information when hovering over a specific cell. This method takes a single parameter, which is the target element that is being hovered over.

Here's an example that demonstrates retrieving the row information when hovering over a cell using the `rowDataBound` event and `getRowInfo` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const rowDataBound = ((args) => {
    args.row.addEventListener('mouseover', (e) => {
      const rowInformation = grid.getRowInfo(e.target);
      console.log(rowInformation);
      document.getElementById('show').innerHTML = `
              <table style="border-collapse: collapse; width: 600px;">
                <tr style="border: 2px solid;">
                  <td style="padding: 2px;"><b>Row Information:</b></td>
                </tr>
                <tr style="border: 2px solid; padding: 8px;">
                  <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
                  </td>
                </tr>
                <tr style="border: 2px solid;">
                  <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
                </td>
                </tr>
               </table>`;
    });
  });
  return (
    <div>
      <div id='show' style={{ padding: "0px 0px 20px 0px" }} ></div>
      <GridComponent dataSource={data} ref={g => grid = g} rowDataBound={rowDataBound}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const rowDataBound = ((args:RowDataBoundEventArgs) => {
    args.row.addEventListener('mouseover', (e: MouseEvent) => {
      const rowInformation = (grid as GridComponent).getRowInfo(e.target as HTMLElement);
      console.log(rowInformation);
      (document.getElementById('show') as HTMLElement).innerHTML = `
              <table style="border-collapse: collapse; width: 600px;">
                <tr style="border: 2px solid;">
                  <td style="padding: 2px;"><b>Row Information:</b></td>
                </tr>
                <tr style="border: 2px solid; padding: 8px;">
                  <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
                  </td>
                </tr>
                <tr style="border: 2px solid;">
                  <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
                </td>
                </tr>
               </table>`;
    });
  });
  return (
    <div>
      <div id='show' style={{ padding: "0px 0px 20px 0px" }} ></div>
      <GridComponent dataSource={data} ref={g => grid = g} rowDataBound={rowDataBound}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs3" %}

> The `getRowInfo` method can only be used in the `rowDataBound` event. Attempting to use it elsewhere will result in an error.

## Row pinning (frozen) in React Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows freezing rows to keep them visible while scrolling vertically through large datasets. This feature enhances the experience by maintaining important information within view at all times.

The [frozenRows](https://ej2.syncfusion.com/react/documentation/api/grid#frozenrows) property in the React Grid is used to freeze a specified number of rows at the top of the grid, keeping them fixed while the rest of the content scrolls vertically. 

In the following example, the `frozenRows` property is set to "3". This configuration freezes the top three rows of the grid, and they will remain fixed in their positions while the rest of the grid can be scrolled vertically.

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
  const frozenRows = () => {
    grid.frozenRows = textBox.value;
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the frozen rows: </label>
      <NumericTextBoxComponent ref={t => textBox = t} id='frozenrows' min={0} max={5} validateDecimalOnType={true} decimals={0} value={2} format='n' width='150'></NumericTextBoxComponent>
      <ButtonComponent style={{ marginLeft: "5px" }} onClick={frozenRows}>UPDATE</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} height={315} frozenRows={2}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid: GridComponent | null;
  let textBox: NumericTextBoxComponent | null;
  const frozenRows = () => {
    (grid as GridComponent).frozenRows = (textBox as NumericTextBoxComponent).value;
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the frozen rows: </label>
      <NumericTextBoxComponent ref={t => textBox = t} id='frozenrows' min={0} max={5} validateDecimalOnType={true} decimals={0} value={2} format='n' width='150'></NumericTextBoxComponent>
      <ButtonComponent style={{ marginLeft: "5px" }} onClick={frozenRows}>UPDATE</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} height={315} frozenRows={2}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozenrow-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozenrow-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozenrow-cs1" %}

> * Frozen rows should not be set outside the grid view port.
> * Frozen Grid will support row virtualization feature, which helps to improve the Grid performance while loading a large dataset.
> * The frozen feature is supported only for the rows that are visible in the current view.
> * Both [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/grid#frozencolumns) property and `frozenRows` property can be used in the same application.

### Change default frozen rows line color

The frozen line background color of frozen rows in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component can be customized by applying custom CSS styles to the specific frozen row. This allows changing the background color of frozen rows to match the application's design and theme.

To change the default frozen rows line color, use the following CSS class:

```css
.e-grid .e-frozenrow-border {
    background-color: rgb(5, 114, 47);
}
```

By applying this CSS class, the background color of frozen rows can be set to the specified RGB color. The following example demonstrates changing the default frozen‑rows line color using CSS.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/frozenrow-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/frozenrow-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/frozenrow-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/frozenrow-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/frozenrow-cs2" %}

### Deprecated methods

| Previous | Current | Explanation |
|----------|---------|-------------|
| `getMovableRows()` gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-unfreeze') | The previous architecture used separate tables for left, right, and movable contents, returning only movable rows when calling the method, whereas the current architecture combines them into one table, returning all rows and introduces the `e-unfreeze` class for selecting movable rows |
| `getFrozenRightRows()` gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze') | In the previous architecture, it returned only the table rows from the right freeze table, but in the current architecture, all rows of the entire table are returned, introducing the `e-rightfreeze` class for selecting right freeze rows |
| `getMovableRowByIndex()` `getFrozenRowByIndex()` `getFrozenRightRowByIndex()` | `getRowByIndex()` gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') | In the previous architecture, separate methods were used to select rows from different table sections, while in the current architecture, the `getMovableRowByIndex()`, `getFrozenRightRowByIndex()`, and `getFrozenRowByIndex()` methods now return the same table row based on the given index. Additionally, class names for table cells have been separated into `e-leftfreeze`, `e-unfreeze`, and `e-rightfreeze`, making it easier to customize cells within a row |
| `getMovableCellFromIndex()` `getFrozenRightCellFromIndex()` | `getCellFromIndex()` gridInstance.getCellFromIndex(1,1) | In the previous approach, the `getMovableCellFromIndex()` method was used to choose a specific cell within the movable table, and the `getFrozenRightCellFromIndex()` method was utilized to target a particular cell within the right freeze table. However, in the current architecture, specific cells in either the movable or right freeze table can be selected by using both the `getFrozenRightCellFromIndex()` and `getMovableCellFromIndex()` methods. This new method simplifies the process of selecting and retrieving specific cells within these tables, offering more versatility and convenience |
| `getMovableDataRows()` `getFrozenRightDataRows()` `getFrozenDataRows()` | `getDataRows()` gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') | In the previous approach, there were separate methods for obtaining viewport data rows from the freeze, movable, and right tables individually. However, in the new approach, these methods have been enhanced to return the entire viewport data rows for all sections together, simplifying data retrieval. Specific cells within these rows can be extracted using selectors such as `e-leftfreeze` for the left freeze, `e-unfreeze` for the movable, and `e-rightfreeze` for the right freeze tables, providing greater flexibility in working with the data |
| `getMovableColumnHeaderByIndex()` `getFrozenRightColumnHeaderByIndex()` `getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` gridInstance.getColumnHeaderByIndex(1) | In the previous architecture, the methods selected movable, right freeze, and left freeze headers separately. However, in the new approach, when using the `getMovableColumnHeaderByIndex()`, `getFrozenRightColumnHeaderByIndex()`, and `getFrozenLeftColumnHeaderByIndex()` methods, the same results as in the previous architecture will be obtained |

> When a validation message is displayed in the frozen part (Left, Right, Fixed) of the table, scrolling is prevented until the validation message is cleared.

## Limitations

The autofill feature is not compatible with frozen rows.

## Add a new row programmatically

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a way to add a new row to the grid programmatically. This feature is useful when adding a new record to the grid without manually entering data in the grid. This can be done using the [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid#addrecord) method of the Grid.

The addRecord method takes two parameters:

* The **data** object representing the new row to be added
* The **index** at which the new row should be inserted. If no index is specified, the new row will be added at the end of the Grid.

Here’s an example that demonstrates adding a new row using the addRecord method

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs5" %}

>* When working with remote data, it is impossible to add a new row between the existing rows.
>* If adding a new record to the beginning of the data source, pass "0" as the second parameter to the `addRecord` method.
>* If no index is specified, the new row will be added at the end of the grid.

## Show or hide a row using external actions

In a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, rows can be shown or hidden based on some external action, such as a checkbox click. This can be useful in scenarios where certain rows should be hidden from the grid temporarily without removing them from the underlying data source. This can be achieved by using the [getRowByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getrowbyindex) and [getRowsObject](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#getrowsobject) methods of the grid along with the [change](https://ej2.syncfusion.com/react/documentation/api/check-box#change) event of the checkbox.

The `getRowsObject` method returns an array of row objects that represents all the rows in the grid. This method allows iteration through all the rows and access to their data and index.

The `getRowByIndex` method returns the HTML element of a row at the specified index. This method gets a specific row and applies changes to it.

In the following example, the "onCheckBoxChange" method checks whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the grid using the `getRowsObject` method. For each row, it checks whether the value in the "CustomerID" column is equal to "VINET". If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called "hiddenRows".

If the checkbox is unchecked, the method iterates through the "hiddenRows" array and shows each row by setting its display style to an empty string. The "hiddenRows" array is also cleared.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs6" %}

## Get the row data and element

Grid provides several methods to retrieve row data and elements. This feature is useful when needing to access specific rows, perform custom operations, or manipulate the data displayed in the grid.

1. [getRowByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getrowbyindex): This method returns the HTML element of a row at the specified index. It retrieves the element of a specific row in the grid.

    ```ts
    const rowElement = grid.getRowByIndex(rowIndex);
    ```

2. [getRowByPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid#getrowindexbyprimarykey): This method allows retrieval of the row index based on a specific primary key value or row data.

    ```ts
    const rowIndex = grid.getRowByPrimaryKey(primaryKey);
    ```

3. [getRowInfo](https://ej2.syncfusion.com/react/documentation/api/grid#getrowinfo): This method allows retrieval of row information based on a cell target element.

    ```ts
    const rowInformation = grid.getRowInfo(targetElement);
    ```

4. [getRows](https://ej2.syncfusion.com/react/documentation/api/grid#getrows): This method returns an array of all the row elements in the Grid. To retrieve row data and elements, the `getRows` method can be combined with the `getRowInfo` method.

    ```ts
     const rowElements = grid.getRows();
    ```

5. [getSelectedRowIndexes](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrowindexes): This method allows retrieval of the collection of indexes of the selected rows. However, it does not directly provide the row elements and associated data. To access the row elements and data of the selected rows, the `getSelectedRowIndexes` method can be combined with `getRowByIndex` and `getRowInfo` method.

    ```ts
    const selectedIndexes = grid.getSelectedRowIndexes();
    ```

6. [getSelectedRows](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrows): This method returns an array of HTML elements representing the selected rows in the grid. By iterating over this array, each row element and data can be accessed using the `getRowInfo` method. This allows access to both the row elements and their associated data for the selected rows.

    ```ts
    const selectedRowElements = grid.getSelectedRows();
    ```
