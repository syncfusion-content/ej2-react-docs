---
layout: post
title: React Grid - Row Drag and Drop | Syncfusion
description: React Grid row drag and drop explains enabling row reorder, drag behavior, drop targets, and handling events to update underlying data accordingly.
control: Row drag and drop 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Drag and Drop in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides built-in support for seamless row drag and drop functionality. This feature enables effortless row rearrangement within the grid by dragging and dropping rows to new positions. Additionally, rows can be transferred between grids, as well as dragged and dropped to custom components, providing powerful flexibility for complex data management scenarios.

To use the row drag and drop feature in Grid component, inject the `RowDD` module in the grid. The `RowDD` service handles the row drag and drop functionality within the Grid component. Once the `RowDD` service is injected, use the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid#allowrowdraganddrop) and [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings#targetid) properties to enable and configure the row drag and drop feature in the Grid.


## Drag and drop within the grid

The drag and drop feature allows rearranging rows within the grid by dragging them using a drag icon. To activate this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid#allowrowdraganddrop) property to `true`.

The following example demonstrates drag and drop within the Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-drag-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-drag-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="dataSource.jsx" %}
{% include code-snippet/grid/row-drag-cs2/app/dataSource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="dataSource.tsx" %}
{% include code-snippet/grid/row-drag-cs2/app/dataSource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-drag-cs2" %}

> * Selection feature must be enabled in the Grid to allow row selection before drag and drop operations. 
>* Dragging multiple rows simultaneously requires multiple selection to be active. This is enabled by setting the [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Multiple`.

## Drag and drop to another grid

The grid row drag and drop allows drag grid rows and drop to another grid. To enable this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid#allowrowdraganddrop) property to `true` in the source Grid component.

To specify the target Grid component where rows should be dropped, configure the [rowDropSettings.targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings#targetid) property. The `targetID` property references the ID of the destination Grid component.

The following example demonstrates row drag and drop between different Grid components:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-drag-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-drag-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="dataSource.jsx" %}
{% include code-snippet/grid/row-drag-cs1/app/dataSource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="dataSource.tsx" %}
{% include code-snippet/grid/row-drag-cs1/app/dataSource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-drag-cs1" %}

## Drag and drop to custom components

The Grid provides the feature to drag and drop grid rows to any custom component. This capability enables seamless data movement between the Grid and external components without manual copy-paste operations. To enable row drag and drop grid rows to custom components, set the `allowRowDragAndDrop` property to `true` and define the custom component ID in the `targetID` property of the `rowDropSettings` object. The ID provided in `targetID` should correspond to the ID of the target component where the rows are to be dropped.

Follow these steps to implement row drag and drop from Grid to `TreeGrid` component:

**Step 1: Configure grid component**

Import and inject the `RowDD` and `Edit` modules for the Grid, and configure [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings) to enable deleting rows from the Grid when dropping to the target component.

```js
import { GridComponent, Inject, RowDD, Edit } from '@syncfusion/ej2-react-grids';

const gridEditSettings = { allowDeleting: true };

<GridComponent editSettings={gridEditSettings}>
  <Inject services={[RowDD, Edit]} />
</GridComponent>

```
**Step 2: Configure treeview component**

Import and inject the `Edit` module for the TreeGrid, and configure [editSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/editsettings) to enable adding rows to the TreeGrid.

```js
import { TreeGridComponent, Edit as TreeEdit } from '@syncfusion/ej2-react-treegrid';

const treeGridEditSettings = { allowAdding: true };

<TreeGridComponent editSettings={treeGridEditSettings}>
  <Inject services={[TreeEdit]} />
</TreeGridComponent>

```

**Step 3: Enable drag and drop with target configuration**

Set the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid#allowrowdraganddrop) property to `true` and specify the target component ID in [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings). Configure [selectionSettings](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings) to enable multiple row selection.

```js
const rowDropOptions = { targetID: 'treeGrid' };
const selectionOptions = { type: 'Multiple' };

<GridComponent 
  allowRowDragAndDrop={true}
  rowDropSettings={rowDropOptions}
  selectionSettings={selectionOptions}>
</GridComponent>
```

**Step 4: Handle the rowDrop event**

Implement the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid#rowdrop) event to manage data transfer. Cancel the default behavior, add records to the target component using [addRecord](https://ej2.syncfusion.com/react/documentation/api/treegrid#addrecord), and remove them from the Grid using [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord).

```js
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let grid;
let treeGrid;

const onRowDrop = (args) => {
  if (args.target.closest('.e-treegrid')) {
    args.cancel = true;
    var rowIndex = !isNullOrUndefined(args.target.closest('.e-row')) 
      ? args.target.closest('.e-row').rowIndex 
      : 0;
    
    for (var i = 0; i < args.data.length; i++) {
      treeGrid.addRecord(args.data[i], rowIndex);
      grid.deleteRecord('taskID', args.data[i]);
    }
  }
}

<GridComponent ref={g => grid = g} rowDrop={onRowDrop}>
<TreeGridComponent ref={t => treeGrid = t}>
```

The following example demonstrates transferring selected Grid rows to a `TreeGrid` component. When a row is dropped into the `TreeGrid` component, the corresponding Grid row is removed and its data is inserted into the target component at the specified position. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-drag-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-drag-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="dataSource.jsx" %}
{% include code-snippet/grid/row-drag-cs3/app/dataSource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="dataSource.tsx" %}
{% include code-snippet/grid/row-drag-cs3/app/dataSource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-drag-cs3" %}

> The `rowDrop` event fires when a row is dropped onto a custom component, regardless of drop success. Set the `args.cancel` property to `true` to prevent the default drop action.

## Hide drag and drop icons

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid displays drag icon in each row when enabling the row drag and drop feature. To hide these icons, set the [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings) object to the current Grid's ID.

When `targetID` references the Grid's own ID, the Grid renders without drag helper icons. Customize drag and drop behavior by binding to the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid#rowdrop) event. Within the event handler, prevent the default action by setting `args.cancel` to `true`, then reorder rows using the [reorderRows](https://ej2.syncfusion.com/react/documentation/api/grid#reorderrows) method.

The following example demonstrates hide drag and drop icons in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs9" %}

## Drag and drop events

The Grid component provides powerful events that trigger during row drag and drop operations. These events enable customization of drag elements, tracking of drag progress, and execution of actions when rows are dropped on target elements. The following events are available:

1. [rowDragStartHelper](https://ej2.syncfusion.com/react/documentation/api/grid#rowdragstarthelper): Triggered when a click occurs on the drag icon or a Grid row; enables customization of the drag element based on specific criteria.

2. [rowDragStart](https://ej2.syncfusion.com/react/documentation/api/grid#rowdragstart): Triggered when row dragging begins.

3. [rowDrag](https://ej2.syncfusion.com/react/documentation/api/grid#rowdrag): Triggered continuously while a Grid row is being dragged.

4. [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid#rowdrop): Triggered when a drag element is dropped onto a target element.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDD } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionOptions = { type: 'Multiple' };
  const [message, setMessage] = useState('');
  const rowDragStartHelper = (args) => {
    setMessage('rowDragStartHelper event triggered');
    if (args.data[0].OrderID === 10248) {
      args.cancel = true;
    }
  }
  const rowDragStart = (args) => {
    setMessage('rowDragStart event triggered');
    args.cancel = true;
  }
  const rowDrag = (args) => {
    setMessage('rowDrag event triggered');
    args.rows.forEach((row) => {
      row.classList.add('drag-limit');
    });
  }
  const rowDrop = (args) => {
    setMessage('rowDrop event triggered');
    const value = [];
    for (let i = 0; i < args.rows.length; i++) {
      value.push(args.fromIndex + i);
    }
    if (grid) {
      grid.reorderRows(value, args.dropIndex);
    }
  }
  return (<div><div style={{ textAlign: "center" }}>
    <p style={{ color: "red" }} id="message">{message}</p>
  </div>
    <GridComponent ref={g => grid = g} dataSource={data} height={315} allowRowDragAndDrop={true} rowDrop={rowDrop} rowDragStartHelper={rowDragStartHelper} rowDrag={rowDrag} rowDragStart={rowDragStart} selectionSettings={selectionOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='Customer Name' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
      </ColumnsDirective>
      <Inject services={[RowDD]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, RowDD, Grid, RowDragEventArgs } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
      let grid: GridComponent | null;
      const selectionOptions: SelectionSettingsModel = { type: 'Multiple' };
      const [message, setMessage] = useState('');
      const rowDragStartHelper = (args) => {
            setMessage('rowDragStartHelper event triggered');
            if (args.data[0].OrderID === 10248) {
                  args.cancel = true;
            }
      }
      const rowDragStart = (args) => {
            setMessage('rowDragStart event triggered');
            args.cancel = true;
      }
      const rowDrag = (args: RowDragEventArgs) => {
            setMessage('rowDrag event triggered');
            args.rows.forEach((row: HTMLElement) => {
                  row.classList.add('drag-limit');
            });
      }
      const rowDrop = (args) => {
            setMessage('rowDrop event triggered');
            const value = [];
            for (let r = 0; r < args.rows.length; r++) {
                  value.push(args.fromIndex + r);
            }
            if (grid) {
                  (grid as GridComponent).reorderRows(value, args.dropIndex);
            }
      }
      return (<div><div style={{ textAlign: "center" }}>
            <p style={{ color: "red" }} id="message">{message}</p>
      </div>
        <GridComponent ref={g => grid = g} dataSource={data} height={315} allowRowDragAndDrop={true} rowDrop={rowDrop} rowDragStartHelper={rowDragStartHelper} rowDrag={rowDrag} rowDragStart={rowDragStart} selectionSettings={selectionOptions}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer Name' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
            <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
          </ColumnsDirective>
          <Inject services={[RowDD]} />
        </GridComponent>
      </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="dataSource.jsx" %}
{% include code-snippet/grid/row-drag-cs4/app/dataSource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="dataSource.tsx" %}
{% include code-snippet/grid/row-drag-cs4/app/dataSource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-drag-cs4" %}

## Limitations

The row drag and drop feature offers focused functionality, working seamlessly with a curated set of Grid features. The features listed below are not part of its supported set of features:

* Row template
* Detail template
* Hierarchy grid
* Row pinning
* Virtual scrolling beyond the grid viewport

## See also

* [Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](../sorting)
* [Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](../filtering/filtering)