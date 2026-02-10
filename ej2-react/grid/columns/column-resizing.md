---
layout: post
title: Column resizing in React Grid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in React Grid Component

Column resizing in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows adjusting column widths dynamically to fit content and improve data readability. This feature provides flexibility in customizing the grid layout based on data requirements and screen size.

To enable column resizing, set the [allowResizing](https://ej2.syncfusion.com/react/documentation/api/grid#allowresizing) property to "true" and inject the `Resize` module into the Grid component. Once enabled, columns can be resized by clicking and dragging the right edge of the column header. The column width updates immediately during the drag operation, providing real-time visual feedback.

**Key features:**

- Interactive resizing via mouse drag or touch
- Minimum and maximum width constraints
- Column-specific resize control
- Multiple resizing modes (Normal and Auto)
- External programmatic resizing
- Touch device support

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs15" %}

> * Resizing can be disabled for a particular column by setting the [allowResizing](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowresizing) property to "false".
> * In RTL mode, the left edge of the header cell can be clicked and dragged to resize the column.
> * The `width` property defines the default column width. When column resizing is enabled, the default width can be overridden by manually resizing the columns.

## Set column resizing limits

Column resizing can be limited to a specific range by defining minimum and maximum widths. This ensures that columns remain readable and do not shrink too small or expand too wide during resize actions. The [minWidth](https://ej2.syncfusion.com/react/documentation/api/grid/column#minwidth) and [maxWidth](https://ej2.syncfusion.com/react/documentation/api/grid/column#maxwidth) properties control these boundaries for each column. Both properties accept numeric values that represent pixel widths.

**How it works:**

| Property | Description | Example |
|----------|-------------|---------|
| **minWidth** | Defines the minimum width (in pixels). The column cannot be resized smaller than this value. | `minWidth='100'` keeps the column width at "100px" or more.  |
| **maxWidth** | Defines the maximum width (in pixels). The column cannot be resized larger than this value | `maxWidth='250'` keeps the column width at "250px" or less.  |

In the following example, resize constraints are applied to multiple columns:

- "OrderID" column: minimum width of "100px", maximum width of "250px".
- "Ship Name" column: minimum width of "150px", maximum width of "300px".
- "Ship Country" column: minimum width of "120px", maximum width of "280px".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs16" %}

> * The `minWidth` and `maxWidth` properties are enforced only during manual column resizing operations. Window or container resizing does not apply these constraints as columns are not re-rendered during window resize events.
> * Choose appropriate `minWidth` and `maxWidth` values based on data content and layout requirements to ensure optimal display.
> * Specified `minWidth` and `maxWidth` values take precedence over any resize attempts that fall outside the defined range, providing reliable column size control.

## Prevent resizing for specific columns

In some scenarios, certain columns may need to maintain a fixed width to preserve data consistency or layout structure. The Grid provides column-level control to prevent resizing for specific columns while allowing others to be resized freely. To disable resizing for a particular column, set the [allowResizing](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowresizing) property of that column to "false". This property overrides the grid-level `allowResizing` setting for the specified column.

The following example demonstrates disabling resize functionality for the "Customer ID" column while keeping other columns resizable:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/resize-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/resize-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/resize-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/resize-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/resize-cs1" %}

> Resizing can also be prevented by setting `args.cancel` to "true" in the [resizeStart](https://ej2.syncfusion.com/react/documentation/api/grid#resizestart) event.

## Resize stacked header columns

The Grid supports resizing stacked header columns, which are columns grouped under a parent header. When resizing a stacked column, the behavior differs from standard column resizing.

**Stacked column resize behavior:**

- Dragging the right edge of a stacked header resizes all child columns together.
- The total width of the child columns adjusts to match the new stacked header width.
- Each child column keeps its proportional width during the resize.
- Resizing can be disabled for specific child columns by setting their `allowResizing` property to "false".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs17" %}

## Resizing modes

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides flexible column resizing behavior through the [ResizeSettingsModel](https://ej2.syncfusion.com/react/documentation/api/grid/resizeSettingsModel#resizesettingsmodel) interface. The [mode](https://ej2.syncfusion.com/react/documentation/api/grid/resizeSettings#mode) property determines how the Grid handles space distribution when columns are resized.

**Available resize modes:**

The [ResizeMode](https://ej2.syncfusion.com/react/documentation/api/grid/resizeMode) enum provides two distinct resizing behaviors:

| Mode    | Description                                                                 | Behavior                                                                                          | When to Use                                                                                   |
|---------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Normal** | Keeps fixed column widths without automatic adjustment.                    | - If total column width < grid width: Empty space appears to the right.<br>- If total column width > grid width: A horizontal scrollbar appears. | Use when exact column widths are required and extra space or scrolling is acceptable.        |
| **Auto**   | Dynamically adjusts columns to fill available space.                       | - If total column width < grid width: Columns expand proportionally to fill space.<br>- If total column width > grid width: Columns shrink proportionally to fit within the grid. | Use when the grid should always fill its container without empty space or scrollbars.        |


The following example demonstrates dynamically switching between "Normal" and "Auto" resize modes using a DropDownList. The `resizeSettings.mode` property is updated in the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event handler:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const alignmentData = [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
    ];
    const changeValue = ((args) => {
        grid.resizeSettings.mode = args.value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the resize mode:</label>
            <DropDownListComponent style={{ padding: "20px 0 0 0" }} dataSource={alignmentData} index={0} width="100" change={changeValue}></DropDownListComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                    <Inject services={[Resize]} />
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    const alignmentData: Object[] = [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
    ];
    const changeValue = ((args: any) => {
        (grid as GridComponent).resizeSettings.mode = args.value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the resize mode:</label>
            <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeValue}></DropDownListComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                    <Inject services={[Resize]} />
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/resize-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/resize-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/resize-cs2" %}

> When the [autoFit](https://ej2.syncfusion.com/react/documentation/api/grid#autofit) property is set to "true", column widths automatically adjust based on their content. In "Normal" resize mode, empty space remains after resizing. In "Auto" resize mode, columns expand to eliminate empty space.

## Touch interaction

The Grid provides full touch support for column resizing on mobile and tablet devices. Touch-based resizing offers an intuitive interface for adjusting column widths on touchscreen devices.

**Resizing columns on touch devices:**

Touch-based column resizing follows a slightly different interaction pattern compared to mouse-based resizing to accommodate touch precision:

1. **Tap the column edge**: Tap the right edge of the header cell for the column to resize.
2. **Handler appears**: A floating resize handler appears over the right border of the column, making it easier to grab with touch.
3. **Drag to resize**: Tap and drag the floating handler left or right to adjust the column width to the desired size.
4. **Release to apply**: Release finger to apply the new column width.

**Additional touch features:**

- The floating handler provides a larger touch target for better usability.
- Column menu on touch devices includes an autofit option to automatically size columns.
- Smooth scrolling during resize operations.
- Visual feedback during the resize process.

The following screenshot illustrates column resizing on a touch device:

![Touch Interaction](../images/column-resizing.jpg)

> * Touch resizing works identically across iOS, Android, and Windows touch devices.
> * In RTL mode, the floating handler appears on the left edge of columns.

## Resizing columns programmatically

The Grid supports programmatic column resizing through external controls or application logic. This enables creating custom interfaces for column width management, implementing preset column layouts, or responding to application state changes.

**How to resize columns externally:**

Programmatic column resizing involves two steps:

1. **Update column width**: Modify the [width](https://ej2.syncfusion.com/react/documentation/api/grid/column#width) property of the target column using the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyfield) or [getColumnByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyuid) method.

2. **Refresh display**: Call the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid#refreshcolumns) method to apply the width changes and update the grid display.

The following example demonstrates implementing external controls for column resizing. A DropDownList selects the column to resize, a TextBox inputs the desired width, and a Button applies the changes:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    let dropDown;
    let textBox;
    const field = { text: 'text', value: 'value' };
    const alignmentData = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
    ];

    const onExternalResize = (() => {
        const colsWidth = grid.getColumnByField(dropDown.value);
        colsWidth.width = textBox.value;
        grid.refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 26px 0' }}>Change the resize mode:</label>
            <DropDownListComponent style={{ padding: "20px 0 0 0" }} dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br />
            <label style={{ padding: '30px 17px 0 0' }}>Enter the width:</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter the width" width='200' />
            <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: Grid | null;
    let dropDown: DropDownListComponent |null;
    let textBox:any;
    const field: Object = { text: 'text', value: 'value' };
    const alignmentData: Object[] = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
    ];

    const onExternalResize = (() => {
        const colsWidth:any = (grid as any).getColumnByField((dropDown as any).value);
        colsWidth.width = textBox.value;
        (grid as any).refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 26px 0' }}>Change the resize mode:</label>
            <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br />
            <label style={{ padding: '30px 17px 0 0' }}>Enter the width:</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter the width" width='200' /><br/>
            <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/resize-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/resize-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/resize-cs3" %}

> The `refreshColumns` method is essential for applying width changes made through the column object. Without calling this method, width changes will not be reflected in the grid display.

## Resizing events

The Grid provides three events that trigger during column resize operations. These events enable custom logic, validation, and status updates throughout the resize process, giving complete control over the resizing lifecycle.

**Available resize events:**

| Event | Timing | Usage | Cancelable |
|-------|--------|-------|-------------|
| [resizeStart](https://ej2.syncfusion.com/react/documentation/api/grid#resizestart) | Triggered when column resize begins (on initial mouse/touch down) | Validate resize action, prevent specific columns from resizing, initialize custom logic | Yes (set `args.cancel = true`) |
| [resizing](https://ej2.syncfusion.com/react/documentation/api/grid#resizing) | Triggered continuously while dragging the resize handle | Display real-time feedback, track width changes, update related UI | No |
| [resizeStop](https://ej2.syncfusion.com/react/documentation/api/grid#resizestop) | Triggered when column resize ends (on mouse/touch release) | Save resize preferences, apply post-resize styles, log resize actions | No |

The following example demonstrates practical use of resize events:

- `resizeStart`: Prevents resizing of the "OrderID" column.
- `resizing`: Displays a message indicating active resize operation.
- `resizeStop`: Applies custom styling to the resized column and its cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Resize, Inject } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const [message, setMessage] = useState('');
    const resizeStart = ((args) => {
        setMessage('resizeStart event triggered');
        if (args.column.field === 'OrderID') {
            args.cancel = true;
        }
    })
    const resizeStop = ((args) => {
        setMessage('resizeStop event triggered');
        const headerCell = grid.getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');
        const columnCells = grid.getContentTable().querySelectorAll(`[data-colindex="${args.column.index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i];
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    })
    const resizing = (() => {
        setMessage('resizing event triggered');
    })
    return (
        <div>
            <div style={{ marginLeft: '180px' }}><p style={{ color: 'red' }}>{message}</p></div>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true} enableHover={false} resizeStart={resizeStart} resizeStop={resizeStop} resizing={resizing}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                </ColumnsDirective>
                <Inject services={[Resize]} />
            </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Resize, Inject } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const [message, setMessage] = useState('');
    const resizeStart = ((args: any) => {
        setMessage('resizeStart event triggered');
        if (args.column.field === 'OrderID') {
            args.cancel = true;
        }
    })
    const resizeStop = ((args: any) => {
        setMessage('resizeStop event triggered');
        const headerCell = (grid as any).getColumnHeaderByField(args.column.field);
        headerCell.classList.add('customcss');
        const columnCells = (grid as any).getContentTable().querySelectorAll(`[data-colindex="${(args as any).column.index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i] as HTMLElement;
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    })
    const resizing = ((args: any) => {
        setMessage('resizing event triggered');
    })
    return (
        <div>
            <div style={{ marginLeft: '180px' }}><p style={{ color: 'red' }}>{message}</p></div>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true} enableHover={false} resizeStart={resizeStart} resizeStop={resizeStop} resizing={resizing}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                </ColumnsDirective>
                <Inject services={[Resize]} />
            </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs18" %}

> * The `ResizeArgs` object provides comprehensive information such as the current column width, new column width, column index, and the original DOM event.
> * The `resizing` event is triggered continuously during drag operations, potentially triggering dozens of times per second. Avoid heavy computations or DOM manipulations in this event handler to maintain smooth performance.
