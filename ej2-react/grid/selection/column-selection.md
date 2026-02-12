---
layout: post
title: React Grid - Column selection | Syncfusion
description: Learn about column selection in Syncfusion React Grid (EJ2) to select single or multiple columns using methods and keyboard interactions.
control: Column selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Selection in React Grid Component

Column selection in the Grid allows selecting one or more columns by clicking the column header or using keyboard navigation. This feature is useful for highlighting, manipulating, or performing actions on specific columns within the Grid. Press <kbd>Esc</kbd> to clear the current column selection.

To enable column selection in the grid, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. 


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { type: 'Multiple' };
  const valueChange = (args) => {
    grid.selectionSettings.allowColumnSelection = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable column selection</label>
    <SwitchComponent change={valueChange}></SwitchComponent>
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
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.allowColumnSelection = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable column selection</label>
    <SwitchComponent change={valueChange}></SwitchComponent>
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
{% include code-snippet/grid/selection-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs1" %}

## Single column selection 

Single column selection allows selecting one column at a time within the grid. This capability is particularly useful when focusing on specific columns or performing actions on the data within a particular column.

To enable single column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. Additionally, set the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Single`. This configuration provides single column selection at a time within the grid.

**Mouse interaction:** Click on any column header to select a single column.

**Keyboard navigation:** 
* Navigate between columns using the <kbd>Left</kbd> and <kbd>Right</kbd> arrow keys when a column header is focused.
* Press the <kbd>Enter</kbd> key to select the focused column.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs6" %}

## Multiple column selection 

Multiple column selection allows selecting several columns simultaneously within the grid. This capability is particularly useful when focusing on or performing actions on multiple columns at once.

To enable multiple column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. Additionally, set the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Multiple`. This configuration provides multiple column selection within the grid.

**Mouse interactions:**
* Hold the <kbd>Ctrl</kbd> key and click on different column headers to select multiple non-consecutive columns.
* Hold the <kbd>Shift</kbd> key and click on the start column header, then click on the end column header to select a continuous range of columns.

**Keyboard navigation:** Hold the <kbd>Shift</kbd> key and use the <kbd>Left</kbd> or <kbd>Right</kbd> arrow keys to extend the selection to multiple columns.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-column-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-column-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-column-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs2" %}

## Select columns programmatically

The Grid supports externally performing single column selection, multiple column selection, and range of column selection using built-in methods. This capability allows interaction with specific columns within the grid. The following topic demonstrates how these selections can be achieved using methods.

### Selecting single column

Single column selection provides programmatic selection of a single column within the grid. This capability is particularly useful when focusing on specific columns or performing actions on the data within a particular column.

To achieve single column selection, use the [selectColumn](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcolumn) method. This method selects the column by passing the column index as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true` and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) should be `Single`.

The following example demonstrates how to select a single column within the grid. The selected column index is obtained through a textbox component and passed as an argument to the `selectColumn` method. When the button event is triggered by clicking the "Select Column" button, a single column is selected within the grid:

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
  let textBoxColumn;
  let columnIndex;
  const selectionSettings = { allowColumnSelection: true, type: 'Single' };
  const click = () => {
    columnIndex = parseInt(textBoxColumn.element.value, 10);
    if (!isNaN(columnIndex)) {
      grid.selectionModule.selectColumn(columnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the column index: </label>
      <TextBoxComponent ref={t1 => textBoxColumn = t1} width={120} ></TextBoxComponent>
    </div>
    <div style={{ padding: "10px 0 0px 5%" }}>
      <ButtonComponent id='button' onClick={click}>Select Row</ButtonComponent>
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
  let columnIndex: number;
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true, type: 'Single' };
  const click = () => {
    columnIndex = parseInt((textBoxRow as TextBoxComponent).element.value, 10);
    if (!isNaN(columnIndex)) {
      (grid as GridComponent).selectionModule.selectColumn(columnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the column index: </label>
      <TextBoxComponent ref={t1 => textBoxRow = t1} width={120} ></TextBoxComponent>
    </div>
    <div style={{ padding: "10px 0 0px 5%" }}>
      <ButtonComponent id='button' onClick={click}>Select Row</ButtonComponent>
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
{% include code-snippet/grid/selection-column-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs3" %}

### Selecting multiple columns

Multiple column selection in the grid enables programmatic selection of several columns at once, allowing operations to be performed on multiple columns simultaneously. This capability is particularly useful for scenarios that require highlighting, manipulating, or applying actions across more than one column in the grid.

To achieve multiple column selection, use the [selectColumns](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcolumns) method. This method selects columns by passing an array of column indexes as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true` and [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) should be `Multiple`.

The following example demonstrates selecting multiple columns in the grid by calling the `selectColumns` method within the button click event and passing an array of column indexes as arguments.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { allowColumnSelection: true, type: 'Multiple' };
  const buttonClick = (columns) => {
    grid.selectionModule.clearColumnSelection();
    grid.selectionModule.selectColumns(columns);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 2])}>Select [1, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2])}>Select [0, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3])}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 5])}>Select [0, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 6])}>Select [1, 6]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2, 5])}>Select [0, 2, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3, 6])}>Select [1, 3, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([2, 4, 6])}>Select [2, 4, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 3, 5])}>Select [0, 3, 5]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
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
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true, type: 'Multiple' };
  const buttonClick = (columns: number[]) => {
    (grid as GridComponent).selectionModule.clearColumnSelection();
    (grid as GridComponent).selectionModule.selectColumns(columns);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 2])}>Select [1, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2])}>Select [0, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3])}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 5])}>Select [0, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 6])}>Select [1, 6]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2, 5])}>Select [0, 2, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3, 6])}>Select [1, 3, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([2, 4, 6])}>Select [2, 4, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 3, 5])}>Select [0, 3, 5]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-column-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs4" %}

### Selecting a range of columns

Range of column selection provides selecting a group of consecutive columns within the grid. This capability is particularly useful when performing actions on a consecutive set of columns or focusing on specific column ranges.

To achieve range of column selection, use the [selectColumnsByRange](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcolumnsbyrange) method. This method selects columns by specifying the start and end column indexes.

The following example demonstrates selecting a range of columns within the grid. The selected column's start index and end index are obtained through textbox components and passed as arguments to the `selectColumnsByRange` method. When the button event is triggered by clicking the "Select Columns" button, a range of columns is selected within the grid.

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
  let textBox1;
  let textBox2;
  let startColumnIndex;
  let endColumnIndex;
  const selectionSettings = { allowColumnSelection: true, type: 'Multiple' };
  const click = () => {
    startColumnIndex = parseInt(textBox1.value, 10);
    endColumnIndex = parseInt(textBox2.value, 10);
    grid.selectionModule.clearColumnSelection();
    if (!isNaN(startColumnIndex) && !isNaN(endColumnIndex)) {
      grid.selectionModule.selectColumnsByRange(startColumnIndex, endColumnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end column index: </label>
      <TextBoxComponent ref={t2 => textBox2 = t2} width={120} ></TextBoxComponent>
    </div>
    <div>
      <ButtonComponent id='button' onClick={click}>Select Columns</ButtonComponent>
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
  let startColumnIndex: number;
  let endColumnIndex: number;
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true, type: 'Multiple' };
  const click = () => {
    startColumnIndex = parseInt((textBox1 as TextBoxComponent).value, 10);
    endColumnIndex = parseInt((textBox2 as TextBoxComponent).value, 10);
    (grid as GridComponent).selectionModule.clearColumnSelection();
    if (!isNaN(startColumnIndex) && !isNaN(endColumnIndex)) {
      (grid as GridComponent).selectionModule.selectColumnsByRange(startColumnIndex, endColumnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the end column index: </label>
      <TextBoxComponent ref={t2 => textBox2 = t2} width={120} ></TextBoxComponent>
    </div>
    <div>
      <ButtonComponent id='button' onClick={click}>Select Columns</ButtonComponent>
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
{% include code-snippet/grid/selection-column-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs5" %}

### Selecting an existing column

Select with existing column provides adding a column to the current selection without clearing the existing column selection in the Grid component. This capability is valuable when expanding the selection to include additional columns while preserving previously selected columns.

To achieve this, use the [selectColumnWithExisting](https://ej2.syncfusion.com/react/documentation/api/grid/selection#selectcolumnwithexisting) method. This method selects a column along with an existing column by specifying the column index as a parameter.

The following example demonstrates selecting a column with an existing column. The selected column index is obtained through a textbox component and passed as an argument to the `selectColumnWithExisting` method. When the button event is triggered by clicking the "Select Columns" button, the specified column is selected along with any existing selections within the grid.

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
  let textBox1;
  let startColumnIndex;
  const selectionSettings = { allowColumnSelection: true, type: 'Multiple' };
  const click = () => {
    startColumnIndex = parseInt(textBox1.value, 10);
    if (!isNaN(startColumnIndex)) {
      grid.selectionModule.selectColumnWithExisting(startColumnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <ButtonComponent id='button' onClick={click}>Select Columns</ButtonComponent>
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
  let startColumnIndex: number;
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true, type: 'Multiple' };
  const click = () => {
    startColumnIndex = parseInt((textBox1 as TextBoxComponent).value, 10);
    if (!isNaN(startColumnIndex)) {
      (grid as GridComponent).selectionModule.selectColumnWithExisting(startColumnIndex);
    }
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter the start column index: </label>
      <TextBoxComponent ref={t1 => textBox1 = t1} width={120} ></TextBoxComponent>
    </div>
    <div>
      <ButtonComponent id='button' onClick={click}>Select Columns</ButtonComponent>
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
{% include code-snippet/grid/selection-column-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs6" %}

## Clear column selection programmatically 

Clearing column selection programmatically in the Grid component is useful for removing any existing column selections. To achieve this, use the [clearColumnSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selection#clearcolumnselection) method.

> The `clearColumnSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) is set to `Multiple` or `Single`.

The following example demonstrates clearing column selection by calling the `clearColumnSelection` method in the button click event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-column-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-column-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-column-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs7" %}


## Column selection events 

The Grid provides several events related to column selection that allow responding to and customizing the behavior of column selection. The following are the available column selection events:

[columnSelecting](https://ej2.syncfusion.com/react/documentation/api/grid#columnselecting): This event is triggered before any column selection occurs. It provides an opportunity to implement custom logic or validation before a column is selected, allowing control of the selection process.

[columnSelected](https://ej2.syncfusion.com/react/documentation/api/grid#columnselected): This event is triggered after a column is successfully selected. Use this event to perform actions or updates when a column is selected.

[columnDeselecting](https://ej2.syncfusion.com/react/documentation/api/grid#columndeselecting): This event is triggered just before a selected column is deselected. It allows performing custom logic or validation to decide whether the column should be deselected or not.

[columnDeselected](https://ej2.syncfusion.com/react/documentation/api/grid#columndeselected): This event is triggered when a particular selected column is deselected. Use this event to perform actions or validations when a column is no longer selected.

In the following example, column selection is canceled when the value of `field` is equal to "CustomerID" within the `columnSelecting` event. The "headerCell" background color changes to green when the `columnSelected` event is triggered and changes to red when the `columnDeselecting` event is triggered. A notification message is displayed to indicate which event was triggered whenever a column is selected.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-column-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-column-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-column-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-column-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-column-cs8" %}

## See also
- [Selection overview](./selection)
- [Row selection](./row-selection)
- [Cell selection](./cell-selection)
- [Checkbox selection](./check-box-selection)
- [Selection API](https://ej2.syncfusion.com/react/documentation/api/grid/selection)
