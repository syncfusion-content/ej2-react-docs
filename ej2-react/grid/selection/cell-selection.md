---
layout: post
title: Cell selection in React Grid component | Syncfusion
description: Learn here all about Cell selection in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Cell selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection in React Grid component 

Cell selection in the Grid component allows you to interactively select specific cells or ranges of cells within the grid. This selection can be done effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when you want to highlight, manipulate, or perform actions on specific cell within the Grid.

> To enable cell selection, you should set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#mode) property to either **Cell** or **Both**. This property determines the selection mode of the grid.

## Single cell selection 

Single cell selection allows you to select a single cell within a Grid. This feature is useful when you want to focus on a specific cell or perform actions on individual cells within the grid.

To enable single cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#mode) property to **Cell** and the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single cell at a time within the grid.

In the following example demonstrates how to enable single cell selection using property:

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

Multiple cell selection allows you to select multiple cells within a Grid. This feature is beneficial when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To enable multiple cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#mode) property to **Cell** and the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select and interact with multiple cells within the grid.

In the following example demonstrates how to enable multiple cell selection using property:

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

The cell selection mode allows you to interactively select specific cells or ranges of cells within the grid. This feature is particularly useful when you want to perform actions on specific cells or obtain data from selected cells.

The grid supports three types of cell selection mode which can be set by using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#cellselectionmode). These modes are:

* **Flow** - This is the default mode. It allows you to select a range of cells between the start index and end index, including all cells in between the rows. It provides a continuous flow of cell selection.
* **Box** - In this mode, you can select a range of cells within the start and end column indexes, including all cells in between the rows within the specified range. This mode is useful when you need to select cells within specific columns.
* **BoxWithBorder**:  This mode is similar to the Box mode, but it adds borders to the selected range of cells. This visual distinction makes it easy to identify the selected cells within the grid.

> Cell Selection requires the `selectionSettings.mode` to be **Cell** or  **Both** and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) should be **Multiple**.

In the following example demonstrates how to dynamically enable and change the `cellSelectionMode` using the `DropDownList` component:

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

## Select cells externally 

You can perform single cell selection, multiple cell selection, and range of cell selection externally in a Grid using built-in methods. This feature allows you to interact with specific cells within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single cell selection 

The React Grid allows you to select a single cell within a grid. This feature is useful when you want to focus on a specific cell or perform actions on individual cells within the grid.

To achieve single cell selection, you can use the [selectCell](https://ej2.syncfusion.com/react/documentation/api/grid/selection/#selectcell) method. This method selects a cell based on the given index.

The following example demonstrates how to select a single cell within the Grid by obtaining the selected row index and cell index through a textbox component and passing these row and cell indexes as arguments to the `selectCell` method. When the button event is triggered by clicking the **Select cell** button, a single cell is selected within the Grid:

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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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

Multiple cell selection allows you to select multiple cells within a Grid. This feature is beneficial when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To achieve multiple cell selection, you can use the [selectCells](https://ej2.syncfusion.com/react/documentation/api/grid/selection/#selectcells) method. This method allows you to select a collection of cells based on their row and column indexes.

In the following example, it demonstrates how to select multiple cells in the Grid by calling the `selectCells` method within the button click event and passing an collection of row and column indexes as arguments.

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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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

> Cell Selection requires the `selectionSettings.mode` to be **Cell** or  **Both** and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) should be **Multiple**.

### Range of cell selection 

Range of cell selection in the Grid allows you to select multiple cells in a continuous range. This capability is particularly useful when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To achieve range of cell selection, you can use the [selectCellsByRange](https://ej2.syncfusion.com/react/documentation/api/grid/selection/#selectcellsbyrange) method. This method selects a range of cells based on the specified start and end indexes.

>* Range cell selection allows you to select multiple cells in box mode when `cellSelectionMode` is set to **Box**. However, if you set `cellSelectionMode` to **Flow**, it will select the range of cells between the start and end indexes, including other cells of the selected rows.
> * Cell Selection requires the `selectionSettings.mode` to be **Cell** or  **Both** and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) should be **Multiple**.

The following example demonstrates how to select a range of cells within the Grid by obtaining the selected cells start index and end index through textbox components. Then, pass these row and cell indexes as arguments to the `selectCellsByRange` method. When you trigger the button event by clicking the **Select Cells** button, a range of cells is selected within the Grid.

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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
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

##  How to get selected row cell indexes

You can retrieve the collection of selected row and cell indexes of the currently selected cells in the Grid component. This is useful for performing various actions or manipulations on the selected cells within the grid. To achieve this, you can utilize the [getSelectedRowCellIndexes](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrowcellindexes) method. 

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

##  Clear cell selection programmatically 

Clearing cell selection programmatically in the Grid component is a useful feature when you want to remove any existing cell selections. To achieve this, you can use the [clearCellSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selection/#clearcellselection) method.

> The `clearCellSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) is set to **Multiple** or **Single**.

The following example demonstrates how to clear cell selection by calling the `clearCellSelection` method in the button click event.

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

The Grid provides several events related to cell selection, allowing you to respond to and customize the behavior of cell selection. Here are the available cell selection events:

[cellSelecting](https://ej2.syncfusion.com/react/documentation/api/grid/#cellselecting): This event is triggered before any cell selection occurs. It provides an opportunity to implement custom logic or validation before a cell is selected, allowing you to control the selection process.

[cellSelected](https://ej2.syncfusion.com/react/documentation/api/grid/#cellselected): This event is triggered after a cell is successfully selected. You can use this event to perform actions or updates when a cell is selected.

[cellDeselecting](https://ej2.syncfusion.com/react/documentation/api/grid/#celldeselecting): This event is triggered just before a selected cell is deselected. It allows you to perform custom logic or validation to decide whether the cell should be deselected or not.

[cellDeselected](https://ej2.syncfusion.com/react/documentation/api/grid/#celldeselected): This event is triggered when a particular selected cell is deselected. You can use this event to perform actions or validations when a cell is no longer selected.

In the following example, cell selection is canceled when the value of **ShipCountry** is equal to **France** within the `cellSelecting` event. The background color changes to green when the `cellSelected` event is triggered, and it changes to red when the `cellDeselecting` event is triggered. Furthermore, the text color switches to white when the `cellDeselected` event is triggered. A notification message is displayed to indicate which event was triggered whenever a cell is selected.

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