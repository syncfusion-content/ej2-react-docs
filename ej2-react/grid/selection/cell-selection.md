---
layout: post
title: React Grid - Cell selection | Syncfusion
description: React Grid cell selection covers selecting single or multiple cells, selection APIs, and keyboard interactions for fine-grained selection control.
control: Cell selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection in React Grid Component

Cell selection in the Grid component allows interactive selection of specific cells or ranges of cells within the grid. Selection can be performed through mouse clicks or arrow keys (up, down, left, and right). This functionality allows highlighting, manipulating, or performing actions on specific cells within the grid.

> To enable cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#mode) property to either `Cell` or `Both`. This property determines the selection mode of the grid.

## Single cell selection 

Single cell selection provides selection of a single cell within a grid. This functionality focuses on a specific cell or allows actions on individual cells within the grid.

To configure single cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#mode) property to `Cell` and the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Single`. This configuration allows selection of a single cell at a time within the grid.

The following example demonstrates single cell selection:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cell-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cell-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs1" %}

## Multiple cell selection 

Multiple cell selection provides selection of multiple cells within a grid. This feature is useful for performing actions on multiple cells simultaneously or focusing on specific areas of data.

To configure multiple cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#mode) property to `Cell` and the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Multiple`. This configuration allows selection and interaction with multiple cells within the grid.

The following example demonstrates multiple cell selection:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cell-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cell-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs2" %}

## Cell selection mode 

The cell selection mode allows interactive selection of specific cells or ranges of cells within the grid. This feature is particularly useful for performing actions on specific cells or obtaining data from selected cells.

The Grid supports three types of cell selection mode which can be configured using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#cellselectionmode). These modes are:

* `Flow`: This is the default mode. It allows selection of a range of cells between the start index and end index, including all cells in between the rows. It provides a continuous flow of cell selection.
* `Box`: In this mode, selection of a range of cells is possible within the start and end column indexes, including all cells in between the rows within the specified range. This mode is useful for selecting cells within specific columns.
* `BoxWithBorder`: This mode is similar to the `Box` mode, but it adds borders to the selected range of cells. This visual distinction makes it easy to identify the selected cells within the grid.

> Cell Selection requires the `selectionSettings.mode` to be `Cell` or  `Both` and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) should be `Multiple`.

> To select a range of cells in the UI using the keyboard, hold the **Shift key** and click on the start cell, then click on the end cell to complete the selection. This will apply the currently configured `cellSelectionMode` (Flow, Box, or BoxWithBorder) to the selected range.

The following example demonstrates how to dynamically enable and change the `cellSelectionMode` using the `DropDownList` component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { type: 'Multiple', mode: 'Cell' };
  const dropdownData = [
    { text: 'Flow', value: 'Flow' },
    { text: 'Box', value: 'Box' },
    { text: 'BoxWithBorder', value: 'BoxWithBorder' }
  ];
  const valueChange = (args) => {
    grid.selectionSettings.cellSelectionMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Choose cell selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple', mode: 'Cell' };
  const dropdownData: { [key: string]: Object; }[] = [
    { text: 'Flow', value: 'Flow' },
    { text: 'Box', value: 'Box' },
    { text: 'BoxWithBorder', value: 'BoxWithBorder' }
  ];
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.cellSelectionMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Choose cell selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs1" %}

## Select cells programmatically 

Single cell selection, multiple cell selection, and range of cell selection can be performed externally in a grid using built-in methods. This feature allows interaction with specific cells within the grid. The following section demonstrates achieving cell selection using methods.

### Single cell selection

The [selectCell](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcell) method allows selection of a single cell based on row and cell index values. This method-based approach provides programmatic control for selecting specific cells within the grid.

The following example demonstrates programmatic single cell selection by passing row and cell index values to the `selectCell` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let textBoxRow;
  let textBoxCell;
  let rowIndex;
  let cellIndex;
  const selectionSettings = { mode: 'Cell', type: 'Single' };
  const click = () => {
    rowIndex = parseInt(textBoxRow.element.value, 10);
    cellIndex = parseInt(textBoxCell.element.value, 10);
    if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
      grid.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex });
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the row index: </label>
      <TextBoxComponent ref={t1 => textBoxRow = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the cell index: </label>
      <TextBoxComponent ref={t2 => textBoxCell = t2} width={120} ></TextBoxComponent>
    </div>
    <div style={{ padding: "10px 0 0px 5%" }}>
      <ButtonComponent id='button' onClick={click}>Select Cell</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBoxRow: TextBoxComponent | null;
  let textBoxCell: TextBoxComponent | null;
  let rowIndex: number;
  let cellIndex: number;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Single' };
  const click = () => {
    rowIndex = parseInt((textBoxRow as TextBoxComponent).element.value, 10);
    cellIndex = parseInt((textBoxCell as TextBoxComponent).element.value, 10);
    if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
      (grid as GridComponent).selectCell({ rowIndex: rowIndex, cellIndex: cellIndex });
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the row index: </label>
      <TextBoxComponent ref={t1 => textBoxRow = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the cell index: </label>
      <TextBoxComponent ref={t2 => textBoxCell = t2} width={120} ></TextBoxComponent>
    </div>
    <div style={{ padding: "10px 0 0px 5%" }}>
      <ButtonComponent id='button' onClick={click}>Select Cell</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs6" %}

### Multiple cell selection

The [selectCells](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcells) method allows selection of multiple cells based on a collection of row and column indexes. This method provides programmatic control for selecting multiple cells simultaneously within the grid.

The following example demonstrates how to select multiple cells in the grid by calling the `selectCells` method within the button click event and passing a collection of row and column indexes as arguments:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { mode: 'Cell', type: 'Multiple' };
  const buttonClick = (rowIndex, columnIndex) => {
    grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex] }]);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(1, 3)}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(2, 2)}>Select [2, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 0)}>Select [0, 0]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(4, 2)}>Select [4, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(5, 1)}>Select [5, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(3, 3)}>Select [3, 3]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 3)}>Select [0, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 1)}>Select [8, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 2)}>Select [8, 2]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const buttonClick = (rowIndex, columnIndex) => {
    (grid as GridComponent).selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex] }]);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(1, 3)}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(2, 2)}>Select [2, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 0)}>Select [0, 0]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(4, 2)}>Select [4, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(5, 1)}>Select [5, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(3, 3)}>Select [3, 3]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 3)}>Select [0, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 1)}>Select [8, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 2)}>Select [8, 2]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs4" %}

> Cell Selection requires the `selectionSettings.mode` to be `Cell` or `Both` and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) should be `Multiple`.

### Range of cell selection

The [selectCellsByRange](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcellsbyrange) method allows selection of a continuous range of cells based on start and end index values. This method provides programmatic control for selecting multiple cells within a defined range.

>* Range cell selection allows selection of multiple cells in box mode when `cellSelectionMode` is set to `Box`. However, when `cellSelectionMode` is set to `Flow`, it will select the range of cells between the start and end indexes, including other cells of the selected rows.
> * Cell Selection requires the `selectionSettings.mode` to be `Cell` or `Both` and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) should be `Multiple`.

The following example demonstrates programmatic range selection by passing start and end row/cell index values to the `selectCellsByRange` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let textBox1;
  let textBox2;
  let textBox3;
  let textBox4;
  let startRowIndex;
  let startColumnIndex;
  let endRowIndex;
  let endColumnIndex;
  const selectionSettings = { mode: 'Cell', type: 'Multiple' };
  const click = () => {
    startRowIndex = parseInt(textBox1.value, 10);
    startColumnIndex = parseInt(textBox2.value, 10);
    endRowIndex = parseInt(textBox3.value, 10);
    endColumnIndex = parseInt(textBox4.value, 10);
    grid.clearCellSelection();
    if (!isNaN(startRowIndex) && !isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex)) {
      grid.selectCellsByRange({ rowIndex: startRowIndex, cellIndex: startColumnIndex }, { rowIndex: endRowIndex, cellIndex: endColumnIndex });
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start row index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t2 => textBox2 = t2} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end row index: </label>
      <TextBoxComponent ref={t3 => textBox3 = t3} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end column index: </label>
      <TextBoxComponent ref={t4 => textBox4 = t4} width={120} ></TextBoxComponent>
      <ButtonComponent id='button' onClick={click}>Select range of cell</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox1: TextBoxComponent | null;
  let textBox2: TextBoxComponent | null;
  let textBox3: TextBoxComponent | null;
  let textBox4: TextBoxComponent | null;
  let startRowIndex: number;
  let startColumnIndex: number;
  let endRowIndex: number;
  let endColumnIndex: number;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const click = () => {
    startRowIndex = parseInt((textBox1 as TextBoxComponent).value, 10);
    startColumnIndex = parseInt((textBox2 as TextBoxComponent).value, 10);
    endRowIndex = parseInt((textBox3 as TextBoxComponent).value, 10);
    endColumnIndex = parseInt((textBox4 as TextBoxComponent).value, 10);
    (grid as GridComponent).clearCellSelection();
    if (!isNaN(startRowIndex) && !isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex)) {
      (grid as GridComponent).selectCellsByRange({ rowIndex: startRowIndex, cellIndex: startColumnIndex }, { rowIndex: endRowIndex, cellIndex: endColumnIndex });
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start row index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t2 => textBox2 = t2} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end row index: </label>
      <TextBoxComponent ref={t3 => textBox3 = t3} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end column index: </label>
      <TextBoxComponent ref={t4 => textBox4 = t4} width={120} ></TextBoxComponent>
      <ButtonComponent id='button' onClick={click}>Select range of cell</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs5" %}

## Get selected row cell indexes

The collection of selected row and cell indexes of the currently selected cells in the Grid component can be retrieved. This is useful for performing various actions or manipulations on the selected cells within the grid. To achieve this, the [getSelectedRowCellIndexes](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrowcellindexes) method can be utilized. 

The following example demonstrates how to obtain the selected row cell indexes using the `getSelectedRowCellIndexes` method and display them in a dialog when a button is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cell-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cell-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs3" %}

## Clear cell selection programmatically 

Clearing cell selection programmatically in the Grid component is a useful feature for removing any existing cell selections. To achieve this, the [clearCellSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selection#clearcellselection) method can be used.

> The `clearCellSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) is set to `Multiple` or `Single`.

The following example demonstrates how to clear cell selection by calling the `clearCellSelection` method in the button click event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cell-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cell-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs7" %}

## Cell selection events 

The Grid provides several events related to cell selection, allowing customization of the cell selection behavior. The following are the available cell selection events:

[cellSelecting](https://ej2.syncfusion.com/react/documentation/api/grid#cellselecting): This event is triggered before any cell selection occurs. It provides an opportunity to implement custom logic or validation before a cell is selected, allowing control of the selection process.

[cellSelected](https://ej2.syncfusion.com/react/documentation/api/grid#cellselected): This event is triggered after a cell is successfully selected. This event can be used to perform actions or updates when a cell is selected.

[cellDeselecting](https://ej2.syncfusion.com/react/documentation/api/grid#celldeselecting): This event is triggered just before a selected cell is deselected. It allows implementation of custom logic or validation to decide whether the cell should be deselected or not.

[cellDeselected](https://ej2.syncfusion.com/react/documentation/api/grid#celldeselected): This event is triggered when a particular selected cell is deselected. This event can be used to perform actions or validations when a cell is no longer selected.

In the following example, cell selection is canceled when the value of "Ship Country" is equal to "France" within the `cellSelecting` event. The background color changes to green when the `cellSelected` event is triggered, and it changes to red when the `cellDeselecting` event is triggered. Furthermore, the text color switches to white when the `cellDeselected` event is triggered. A notification message is displayed to indicate which event was triggered whenever a cell is selected:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cell-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cell-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cell-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cell-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cell-cs8" %}

## See also
- [Selection overview](./selection)
- [Row selection](./row-selection)
- [Column selection](./column-selection)
- [Checkbox selection](./check-box-selection)
- [Selection API](https://ej2.syncfusion.com/react/documentation/api/grid/selection)
