---
layout: post
title: React Grid - Batch Editing | Syncfusion
description: Learn here all about Batch editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Batch editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Batch Editing in React Grid Component

Batch editing is a powerful feature in the Grid component that enables simultaneous modification and saving of multiple cells in a single action. This feature provides an efficient way to make bulk changes without saving each change individually, making it particularly useful for large datasets.

To enable batch editing mode, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to `Batch`. When activated, double-clicking a cell enters edit mode, and bulk updates can be saved via the toolbar's `Update` button or by invoking the [batchSave](https://ej2.syncfusion.com/react/documentation/api/grid/edit#batchsave) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs2" %}

> For Grid editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Automatically update the column based on another column edited value

Synchronize column values dynamically by calculating and updating dependent columns in real-time as related columns are edited. This seamless data synchronization is particularly valuable for computed fields like totals, discounts, or derived metrics that depend on other cell values. This can be achieved using the [Cell Edit Template](https://ej2.syncfusion.com/react/documentation/grid/editing/edit-types#custom-editors-using-template) feature, this approach maintains data consistency without manual recalculation.

In the following example, the "Total Cost" column value is updated based on changes to the "Unit Price" and "Units In Stock" columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs3" %}

> The [updateCell](https://ej2.syncfusion.com/react/documentation/api/grid#updatecell) property can be used update cells in batch mode.

## Cancel edit based on condition

Batch edit mode provides control over CRUD operations by allowing specific rows or cells to be protected from editing, adding, or deletion. This data integrity feature ensures only authorized modifications proceed.

The following table summarizes the events and cancellation methods available for each operation:

| Operation | Event | Trigger Point | Cancellation Method |
|-----------|-------|---------------|---------------------|
| `Edit` | `cellEdit` | When a cell enters edit mode | Set `args.cancel` to "true" |
| `Add` | `beforeBatchAdd` | Before a new record is added | Set `args.cancel` to "true" |
| `Delete` | `beforeBatchDelete` | Before a record is deleted | Set `args.cancel` to "true" |

Each event handler receives operation context, allowing condition-based logic to block or permit the action.

In the following demo, CRUD operations are prevented based on the "Role" column value. When the "Role" column contains "Admin", edit and delete actions are prevented for that row.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs4" %}

## Adding a new row at the bottom of the grid

The Grid component supports inserting new row's form at the bottom of the grid, enabling efficient addition of new records without manual repositioning. The [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property in `editSettings` controls new row's form placement by setting it to `Bottom`.

Here's an example that demonstrates how to enable adding new rows at the bottom of the grid using `newRowPosition` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const positionData = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' },
  ];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  const changePosition = (args) => {
    grid.editSettings.newRowPosition = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Select new row position:</label>
    <DropDownListComponent index={0} width="100" dataSource={positionData} change={changePosition}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={300}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightIDRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems, Grid } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const positionData: { [key: string]: Object; }[] = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' },
  ];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  const changePosition = (args: ChangeEventArgs) => {
    (grid as GridComponent).editSettings.newRowPosition = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Select new row position:</label>
    <DropDownListComponent index={0} width="100" dataSource={positionData} change={changePosition}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={300}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightIDRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-batch-add-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-batch-add-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-batch-add-cs1" %}

> - **Bottom position**: <kbd>Tab</kbd> moves between cells or rows in edit mode. Data entry in each cell with <kbd>Tab</kbd> press automatically creates new rows below the current row, allowing convenient addition of multiple rows without leaving edit mode.
> - **Top position**: Grid displays a blank row form at the top by default for new record entry. Upon saving or updating, the record inserts at the bottom of the grid, ensuring the new record appears at the end of the existing dataset.
> - **Paging behavior**: Updating a row automatically moves it to the last page based on the page size. This behavior applies to both local and remote data binding.
> - **Scrolling support**: <kbd>Tab</kbd> can add new rows even if the new row displays beyond the currently visible grid area.
> - **Editing mode compatibility**: `newRowPosition` property supports `Normal` and `Batch` editing modes.

## Confirmation dialog

Confirmation dialogs provide an additional layer of protection when performing critical actions in batch editing mode. The grid component offers built-in confirmation dialogs for the following scenarios:

| Action | Confirmation Trigger |
|--------|---------------------|
| **Save Changes** | Appears when clicking `Update` button in toolbar |
| **Cancel Changes** | Appears when clicking `Cancel` button to discard edits |
| **Delete Record** | Appears when deleting a row during batch mode |

To enable or disable save confirmation, set the [editSettings.showConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showconfirmdialog) property to "true" (default) or "false".

Here's an example that demonstrates how to enable/disable the confirmation dialog using the `showConfirmDialog` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Batch',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const [enableShowConfirmDialog, setEnableShowConfirmDialog] = useState(true);
  const orderidrules = { required: true, number: true };
  const customeridrules = { required: true };
  const freightrules = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog(grid.editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toggleShowConfirmDialog = () => {
    setEnableShowConfirmDialog(grid.editSettings.showConfirmDialog = !enableShowConfirmDialog);
  }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "20px" }}>
    <label>Enable/Disable show confirmation dialog</label>
    <SwitchComponent checked={enableShowConfirmDialog} change={toggleShowConfirmDialog}></SwitchComponent></div>
    <div style={{ padding: "20px" }}>
      <label>Enable/Disable show delete confirmation dialog</label>
      <SwitchComponent checked={enableShowDeleteConfirmDialog} change={toggleShowDeleteConfirmDialog}></SwitchComponent></div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderidrules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customeridrules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightrules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Batch',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const [enableShowConfirmDialog, setEnableShowConfirmDialog] = useState(true);
  const orderidrules: object = { required: true, number: true };
  const customeridrules: object = { required: true };
  const freightrules: object = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog((grid as GridComponent).editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toggleShowConfirmDialog = () => {
    setEnableShowConfirmDialog((grid as GridComponent).editSettings.showConfirmDialog = !enableShowConfirmDialog);
  }
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "20px" }}>
    <label>Enable/Disable show confirmation dialog</label>
    <SwitchComponent checked={enableShowConfirmDialog} change={toggleShowConfirmDialog}></SwitchComponent></div>
    <div style={{ padding: "20px" }}>
      <label>Enable/Disable show delete confirmation dialog</label>
      <SwitchComponent checked={enableShowDeleteConfirmDialog} change={toggleShowDeleteConfirmDialog}></SwitchComponent></div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderidrules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customeridrules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightrules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs5" %}

> * `editSettings.showConfirmDialog` requires [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) = `Batch`.
> * When set to "false", no confirmation dialog displays during batch editing.
> * Delete operations trigger a separate confirmation dialog when clicking delete or pressing the delete key.
> * Set `showConfirmDialog` to "false" and use [cellSaved](https://ej2.syncfusion.com/react/documentation/api/grid#cellsaved) with [batchSave](https://ej2.syncfusion.com/react/documentation/api/grid/edit#batchsave) for immediate saves.

## Single-click editing with arrow key navigation

Single-click editing and arrow key navigation enhance data entry efficiency by eliminating the double-click requirement and enabling keyboard-driven cell-to-cell movement without mouse dependency.

**Single-click editing**: Clicking a content cell activates edit mode directly without requiring a double-click. Bind the React `onClick` event handler to the grid and invoke `editCell()` when a content cell is clicked.

**Arrow key navigation**: Arrow key movement between cells enables seamless navigation without mouse interaction. Bind the React `onKeyDown` event handler to the grid. When arrow keys are pressed, identify the adjacent cell using `editCell()` to shift focus.

The example below demonstrates both features combined:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/batch-edit-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/batch-edit-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/batch-edit-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/batch-edit-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/batch-edit-cs1" %}

## Save or update the changes immediately

The Grid component provides a convenient way to save or update changes immediately in batch mode without the need for a separate Save button. This feature is particularly useful when editing data efficiently without manually triggering a save action.

To achieve immediate saving without confirmation dialogs, utilize the [cellSaved](https://ej2.syncfusion.com/react/documentation/api/grid#cellsaved) event along with the [batchSave](https://ej2.syncfusion.com/react/documentation/api/grid/edit#batchsave) method. First, set `editSettings.showConfirmDialog` to "false" to disable the confirmation dialog. For configuration details, refer to the [Confirmation dialog](#confirmation-dialog) section.

The `cellSaved` event is triggered when a cell is saved in the Grid, allowing custom logic to be executed when a cell is saved or updated. The `batchSave` method is a built-in function that saves multiple changes made to added, edited, and deleted records in batch mode.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/batch-edit-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/batch-edit-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/batch-edit-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/batch-edit-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/batch-edit-cs2" %}