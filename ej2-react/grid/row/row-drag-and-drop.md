---
layout: post
title: Row drag and drop in React Grid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row drag and drop 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in React Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides built-in support for row drag and drop functionality. This feature allows you to easily rearrange rows within the grid by dragging and dropping them to new positions. Additionally, you can also drag and drop rows from one grid to another grid, as well as drag and drop rows to custom components.

To use the row drag and drop feature in Grid component, you need to inject the **RowDD** module in the grid. The **RowDD** is responsible for handling the row drag and drop functionality in the grid component. Once you have injected the **RowDD**, you can then use the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#allowrowdraganddrop) and [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/#targetid) properties to enable and configure the row drag and drop feature in the Grid.

## Drag and drop within grid 

The drag and drop feature allows you to rearrange rows within the grid by dragging them using a drag icon. This feature can be enabled by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#allowrowdraganddrop) property to **true**. This property is a boolean value that determines whether row drag and drop is enabled or not. By default, it is set to **false**, which means that row drag and drop is disabled.

Here's an example of how to enable drag and drop within the Grid:

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

## Drag and drop to grid 

The grid row drag and drop allows you to drag grid rows and drop to another grid. This feature can be enabled by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#allowrowdraganddrop) property to **true** in the Grid component. This property specifies whether to enable or disable the row drag and drop feature in the Grid. By default, this property is set to **false**, which means that row drag and drop functionality is not enabled.

To specify the target component where the grid rows should be dropped, use the [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/) object. The `targetID` property takes the ID of the target component as its value.

Here's an example code snippet that demonstrates how to enable Row drag and drop another Grid component:

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

> * The row drag and drop feature is not supported in virtual scrolling and frozen rows and columns mode.
> * In order to use row drag and drop, you need to inject the **RowDD** module in the grid.

## Drag and drop to custom component 

The Grid provides the feature to drag and drop grid rows to any custom component. This feature allows you to easily move rows from one component to another without having to manually copy and paste data. To enable row drag and drop, you need to set the [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#allowrowdraganddrop) property to **true** and defining the custom component ID in the [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/#targetid) property of the `rowDropSettings` object. The ID provided in `targetID` should correspond to the ID of the target component where the rows are to be dropped.

In the below example, the selected grid row is dragged and dropped in to the `TreeView` component by using [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdrop) event. Once the row is dropped into the `TreeView` component, we have removed the corresponding grid row from grid and its data inserted in custom component. 

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

> * The `rowDrop` event is fired when a row is dropped onto a custom component, regardless of whether the drop is successful or not. You can use the `args.cancel` property to prevent the default action.

## Drag and drop rows without drag icons

By default, when performing a drag and drop operation in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, drag icons are displayed. However, in some cases, you may want to hide these drag icons. This can be achieved by setting the [targetID](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/react/documentation/api/grid/rowDropSettings/) object to the current Grid's ID.

By setting the `targetID`, the Grid will render without a helper icon for row dragging. You can then customize the drag and drop action by binding to the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdrop) event of the Grid. In the `rowDrop` event, you can prevent the default action by setting `args.cancel` to **true**, and reorder the rows using the [reorderRows](https://ej2.syncfusion.com/react/documentation/api/grid/#reorderrows) method of the Grid.

Here's an example of how to hide the drag and drop icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

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

> * The selection feature must be enabled in the Grid to allow users to select rows before performing the drag and drop operation.
> * Multiple rows can be selected by clicking and dragging inside the grid. For multiple row selection, the [type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#type) property must be set to **Multiple**.

## Drag and drop events

The Grid component provides a set of events that are triggered during drag and drop operations on grid rows. These events allow you to customize the drag element, track the progress of the dragging operation, and perform actions when a row is dropped on a target element. The following events are available:

1. [rowDragStartHelper](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdragstarthelper): This event is triggered when a click occurs on the drag icon or a grid row. It allows you to customize the drag element based on specific criteria.

2. [rowDragStart](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdragstart): This event is triggered when the dragging of a grid row starts.

3. [rowDrag](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdrag): This event is triggered continuously while the grid row is being dragged.

4. [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdrop): This event is triggered when a drag element is dropped onto a target element.

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
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
        <ColumnDirective field='CustomerID' headerText='Customer Name' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' format='yMd' />
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
                        <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
                        <ColumnDirective field='CustomerID' headerText='Customer Name' width='140' />
                        <ColumnDirective field='Freight' headerText='Freight' width='150' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' format='yMd' />
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

* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with row template, detail template and hierarchy grid features of grid.

## See also

[Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](../sorting)
[Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](../filtering/filtering)