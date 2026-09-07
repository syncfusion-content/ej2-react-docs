---
layout: post
title: React Grid Inline Editing | Syncfusion
description: Learn how to perform inline editing in React Data Grid, update records directly, customize editing behavior, and manage CRUD operations efficiently.
control: In line editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Inline Editing in React Data Grid

The Data Grid component provides an efficient inline editing feature, enabling direct modification of row or cell values within the grid. Inline editing is ideal for streamlining data entry and updates without invoking a separate form. In normal edit mode, the selected record enters an editable state, allowing updates to cell values which are then saved back to the data source.

## Enable inline editing

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

## Update column values automatically

The Cell Edit Template feature enables automatic updating of a column’s value whenever a value in another column is edited. This feature enables dynamic calculations and real-time updates to column values based on changes in related columns, streamlining data entry workflows.

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

## Set default values for new records

Preset column values streamline data entry for new records. Set [defaultValue](https://ej2.syncfusion.com/react/documentation/api/grid/column#defaultvalue) for columns in the grid configuration to ensure these fields are pre-filled in new rows.

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

## Show confirmation dialog while deleting

The built-in confirmation dialog enhances data safety by requesting confirmation before deleting records. Enable this dialog by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showdeleteconfirmdialog) in `editSettings` to `true` (default is `false`).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs24/app/App.tsx %}
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

## Delete multiple rows

Multiple row deletion is supported via the in-built toolbar or through methods.

**Using the toolbar:** Set the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property and set the [selectionSettings.type] to `Multiple`. Select rows and use the toolbar delete icon to remove them.

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

Multiple rows can be deleted programmatically using the following methods.

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

## Add new rows at the bottom of the grid

The Data Grid enables seamless addition of new rows at the bottom of the grid, inserting records at the end of the existing data set. This convenient feature proves particularly useful for intuitive record addition without requiring scroll repositioning, improving workflow efficiency.

By default, new row's form is inserted at the top of the grid for data entry. To change this behavior, set the [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property in the `editSettings` configuration to `Bottom`. This property controls the position where the new row form is inserted.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs26/app/App.tsx %}
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

## Always display an add new row in the grid

The Data Grid simplifies record addition by consistently presenting a blank "add new row" form within the grid. To enable this feature, set the [showAddNewRow](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showaddnewrow) property within the `editSettings` configuration to `true`. This enables continuous record addition. The add new row displays at either the `top` or `bottom` of the grid content, depending on the [newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#newrowposition) property of `editSettings`. By default, the add new row displays at the top of the grid content.

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

> To save newly added records, press the <kbd>Enter</kbd> key or click the "Update" button on the toolbar after filling the add form.

### Constraints

The always‑visible add new row feature is compatible with `Inline`/`Normal` editing mode only. In grids with virtual or infinite scrolling, the blank row is consistently displayed at the top for stable behavior.

## Cancel edit based on condition

The Data Grid provides the ability to cancel the edit operations for particular row or cell based on specific conditions. This feature allows controlling whether editing should be allowed or prevented for certain rows or cells in the grid. This functionality is achieved by leveraging the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event of the Grid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the grid.

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

## Perform CRUD operation programmatically

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
 
## Set focus to a specific cell during row editing

The Data Grid enables moving focus to a specific cell when editing a row, rather than the default behavior of focusing on the first cell. This feature improves the editing experience by automatically focusing on the cell requiring immediate attention.

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

Enabling single-click editing in the Data Grid's `Normal` editing mode is a valuable and intuitive feature that makes a row editable with just one click. This seamless experience is achieved by using the [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) and [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid#endedit) methods for rapid, efficient data modification.

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