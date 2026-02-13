---
layout: post
title: React Grid - Inline Editing | Syncfusion
description: React Grid inline editing allows direct row edits, auto field updates, conditional control, CRUD actions, confirmations, and flexible add/delete.
control: In line editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Inline Editing in React Grid Component

The React Grid component in Syncfusion<sup style="font-size:70%">&reg;</sup> provides a powerful in-line editing feature that enables seamless direct cell value editing within the grid row. This intuitive feature proves especially useful for quickly modifying data without requiring a separate edit form. In normal edit mode, the selected record transitions to an edit state, allowing cell values to be modified and saved to the data source with minimal effort.

To enable in-line editing in the grid component, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to `Normal`. This property determines the editing mode of the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs20" %}

>* `Normal` edit mode is default mode of editing.
>* When enabling editing, it is necessary to set the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#isprimarykey) property value to `true` for the unique column.
> For basic editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Update columns automatically based on edited values

The Cell Edit Template feature enables automatic updating of a column’s value whenever a value in another column is edited. This powerful feature enables dynamic calculations and real-time updates to column values based on changes in related columns, streamlining data entry workflows. 

To enable this functionality:
- Define the [editType](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#edittype) property to specify the editor type for editing.
- Provide an object for the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#edit) property to customize editing behavior. 

In the following example, the "Total Cost" column value is updated based on changes to the "Unit Price" and "Unit In Stock" columns during editing.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs21/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs21" %}

## Cancel edit based on condition

The Grid provides the ability to cancel the edit operations for particular row or cell based on specific conditions. This feature allows controlling whether editing should be allowed or prevented for certain rows or cells in the grid. This functionality is achieved by leveraging the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event of the Grid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the grid.

This customization is useful when restricting editing for certain rows, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the grid.

To cancel the edit operation based on a specific condition, handle the `actionBegin` event of the Grid component and check the `requestType` parameter. This parameter indicates the type of action being performed:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

Apply the desired condition and cancel the operation by setting the `args.cancel` property to `true`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs22" %}

## Perform CRUD action programmatically

Programmatic CRUD operations enable creating, reading, updating, and deleting data through code rather than manual user interaction. This approach provides flexibility for advanced data manipulation workflows. The following table outlines key methods for programmatic CRUD operations:

| Method | Description | Usage |
|--------|-------------|-------|
| [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid#addrecord) | Add a new record to the grid | Pass the `data` parameter to add a record. Use the `index` parameter for a specific position. Without parameters, creates an empty row at index zero |
| [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) | Change the selected row to edit state | First select the row, then invoke this method. The selected row enters edit mode immediately. Without row selection along with default `showConfirmDialog` enabled state, "No records selected for edit operation" dialog appears |
| [updateRow](https://ej2.syncfusion.com/react/documentation/api/grid#updaterow) | Update row data in the data source | Provide the row `index` and the updated `data` as parameters. The data source updates accordingly |
| [setCellValue](https://ej2.syncfusion.com/react/documentation/api/grid#setcellvalue) | Update a particular cell in a row | Provide the primary key value, field name, and new value. Changes appear visually in the UI only (not persisted). Useful for unbound columns, auto-calculated columns, and formula columns |
| [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord) | Remove a selected row from the grid | First select the row, then invoke this method. The selected row is immediately removed. Without row selection along with default `showConfirmDialog` enabled state, "No records selected for delete operation" dialog appears |

> In both normal and dialog editing modes, these methods can be used.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs23/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs23/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs23/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs23" %}

## Show confirmation dialog while deleting

Displaying a confirmation dialog adds an extra layer of protection when deleting records from the grid. This intuitive dialog prompts for confirmation before proceeding with deletion, ensuring that accidental or undesired deletions are prevented. The Grid component provides a built-in, easy-to-implement confirmation dialog for confirming delete actions safely.

To enable the confirmation dialog for delete operations, set the [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showdeleteconfirmdialog) property of the `editSettings` configuration to `true`. By default, this property is set to `false`.

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
    mode: 'Normal',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const orderidrules = { required: true, number: true };
  const customeridrules = { required: true };
  const freightrules = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog(grid .editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "20px" }}>
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
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Edit, Inject, Toolbar, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Normal',
  };
  const [enableShowDeleteConfirmDialog, setEnableShowDeleteConfirmDialog] = useState(false);
  const orderidrules: object = { required: true, number: true };
  const customeridrules: object = { required: true };
  const freightrules: object = { min: 1, max: 1000 };
  const toggleShowDeleteConfirmDialog = () => {
    setEnableShowDeleteConfirmDialog((grid as GridComponent).editSettings.showDeleteConfirmDialog = !enableShowDeleteConfirmDialog);
  }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<div><div style={{ padding: "20px" }}>
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
{% include code-snippet/grid/editing-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs24" %}

> The [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showdeleteconfirmdialog) property supports all editing modes. To customize the built-in delete confirmation dialog, see [here](./edit#customize-delete-confirmation-dialog)

## Display default values for columns while adding

This powerful feature proves useful for pre-filling column values with defaults to streamline and accelerate data entry workflows. The Grid component allows setting default values for `ColumnDirective` when adding new records, reducing manual input and improving user experience.

To set a default value for a specific column, use the [defaultValue](https://ej2.syncfusion.com/react/documentation/api/grid/column#defaultvalue) property of the `ColumnDirective` configuration. By providing a default value, the grid automatically populates that value in the corresponding column when a new row is added.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs25/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs25/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs25/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs25" %}

## Add new rows at the bottom of the grid

The Grid component enables seamless addition of new rows at the bottom of the grid, inserting records at the end of the existing data set. This convenient feature proves particularly useful for intuitive record addition without requiring scroll repositioning, improving workflow efficiency.

By default, new row's form is inserted at the top of the grid for data entry. To change this behavior, set the [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property in the `editSettings` configuration to `Bottom`. This property controls the position where the new row form is inserted.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
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
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const positionData: Object[] = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' },
  ];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
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
{% include code-snippet/grid/editing-cs26/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs26/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs26" %}

>* The [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property is supported for `Normal` and `Batch` editing modes.
>* When [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) is set to `Bottom`, the grid displays a blank row form at the bottom by default for data entry. However, when the data is saved or updated, it is inserted at the top of the grid.

## Show add new row always in grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid simplifies record addition by consistently presenting a blank "add new row" form within the grid. To enable this feature, set the [showAddNewRow](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showaddnewrow) property within the `editSettings` configuration to `true`. This enables continuous record addition. The add new row displays at either the `top` or `bottom` of the grid content, depending on the [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property of `editSettings`. By default, the add new row displays at the top of the grid content.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs36/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs36/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs36/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs36/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs36" %}

> To save newly added records, press the <kbd>Enter</kbd> key or click the **Update** button on the toolbar after filling the add form.

### Limitations

* This feature is supported only for `Inline`/`Normal` editing mode and is not compatible with other edit modes.
* The new blank add row form will always be displayed at the top, even when the new row position is set to the bottom for Virtual Scrolling and Infinite Scrolling enabled grids.
* This feature is not compatible with the column virtualization feature.

## Delete multiple rows from the grid

The delete multiple rows feature enables efficient and easy removal of multiple rows from the grid at once. This powerful feature proves useful for simultaneous deletion of multiple records, saving time in bulk operations. Two flexible approaches enable this feature: using the inbuilt toolbar delete option or using a programmatic method.

**Using the inbuilt toolbar delete option**

The Grid component provides a user-friendly interface for performing various actions, including row deletion using the inbuilt toolbar. To enable delete multiple rows using the toolbar, configure the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property and set the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property to `Multiple` to enable multiple row selection.

To delete multiple selected records, first select multiple rows by highlighting or checking the corresponding checkboxes. Once desired rows are selected, the delete icon on the toolbar initiates deletion and removes the selected records from the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-toolbar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-toolbar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-toolbar-cs1" %}

> The <kbd>Delete</kbd> keyboard shortcut key also removes selected records.

**Using method**

Delete multiple rows programmatically using the following methods:

| Method | Description | Usage |
|--------|-------------|-------|
| [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord) | Delete a record with given options | When `fieldname` (primary key column field name) and `data` parameters are not provided, the grid deletes selected records. Invoke `grid.deleteRecord()` without parameters to delete the currently selected record |
| [deleteRow](https://ej2.syncfusion.com/react/documentation/api/grid#deleterow) | Delete any visible row by providing the row element | Selected rows are retrieved using `getSelectedRows()`, then each row is iterated and passed to the `deleteRow()` method as an HTMLRowElement parameter |

> The [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#type) property is set to `Multiple` to enable multiple row selection.
> To prevent accidental deletions, enable the [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showdeleteconfirmdialog) property of the `editSettings` configuration.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-multiple-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-multiple-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-multiple-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-multiple-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-multiple-cs1" %}
 
## Move focus to a specific cell while editing a row

The Grid component enables moving focus to a specific cell when editing a row, rather than the default behavior of focusing on the first cell. This feature improves the editing experience by automatically focusing on the cell requiring immediate attention.

To achieve this functionality, leverage the [recordDoubleClick](https://ej2.syncfusion.com/react/documentation/api/grid#recordDoubleClick) event of the Grid component. The `recordDoubleClick` event is triggered when a row is double-clicked, indicating intent to edit. Handle this event and programmatically move focus to the desired cell within the row.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs27/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs27" %}

## Enable editing in single click

Enabling single-click editing in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid's `Normal` editing mode is a valuable and intuitive feature that makes a row editable with just one click. This seamless experience is achieved by using the [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) and [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid#endedit) methods for rapid, efficient data modification.

To implement this feature, bind the `onMouseUp` React event for the grid and, within the event handler, call the `startEdit` and `endEdit` methods based on the clicked target element. This ensures that the editing mode is triggered when clicking on a specific element within the grid.

The following sample demonstrates enabling editing in a single click using the `onMouseUp` event with grid methods:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs32/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs32/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs32/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs32" %}