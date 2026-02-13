---
layout: post
title: React Grid - Editing | Syncfusion
description: Explore Syncfusion React Grid editing features including CRUD operations, edit modes, templates, and external editing options.
control: Edit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editing in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component includes built-in editing features for creating, reading, updating, and deleting data directly in the grid. This eliminates the need for separate forms and allows data modification within a single interface. The grid editing provides powerful options through multiple edit modes, customizable triggers, and flexible data handling.

## Set up editing

Before using editing in the grid, understand that the component needs the [Edit](https://ej2.syncfusion.com/react/documentation/api/grid/edit) module to unlock all editing features. The `Edit` module is a service that powers all create, read, update, and delete operations. Without it, editing features cannot work.

Inject the `Edit` module into the Grid component's `Inject` services array to enable editing:

```ts
import { Inject, Edit } from '@syncfusion/ej2-react-grids';

<GridComponent>
  <Inject services={[Edit]} />
</GridComponent>
```

The `Inject` component tells the grid to load the `Edit` module when the component initializes. This happens automatically when the page loads.

## Enable editing

To enable editing functionality directly within the grid, configure the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowediting), [allowAdding](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowadding), and [allowDeleting](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid#editsettings) to `true`.

| Property | Purpose |
|----------|---------|
| `allowEditing` | Enable editing of existing records |
| `allowAdding` | Enable adding new records |
| `allowDeleting` | Enable deleting records |

Editing functionality requires a **primary key column** for CRUD operations. A primary key is a column that contains a unique identifier for each row. The grid uses this identifier to know which row to update or delete. To define the primary key, set [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) to `true` in the relevant column.

## Edit actions and triggers

Edit operations can be triggered through multiple methods. Each method offers a different way to start editing, allowing flexibility to choose the most appropriate interaction pattern for the application:

- **Double-click a row**: Initiate editing by double-clicking a row. This behavior is enabled by default and can be disabled by setting the [editSettings.allowEditOnDblClick](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to `false` in editSettings.
- **Toolbar buttons**: Use Edit, Add, or Delete buttons in a toolbar to control editing actions. These buttons appear at the top of the grid and provide clear visual control. Requires toolbar setup (see [Toolbar with edit option](#toolbar-with-edit-option) section).
- **Keyboard shortcuts**: Use keyboard keys to quickly trigger actions. Press <kbd>Insert</kbd> to add a new row, press <kbd>F2</kbd> to edit the selected row, and press <kbd>Delete</kbd> to remove the selected row from the grid.
- **External methods**: Call methods from outside the grid (from custom buttons or code) to control editing actions. Refer to the [How to perform CRUD action externally](#how-to-perform-crud-action-externally) section, which documents methods like `addRecord`, `startEdit`, `deleteRecord`, `endEdit`, and `closeEdit`.

## Edit modes

The Grid component supports multiple editing modes through the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property. Each mode provides a different way to edit data. The appropriate mode should be selected based on application requirements and editing workflow needs.

| Mode | Behavior | Characteristics |
|---|---|---|
| `Inline` | Single row enters edit state. Cells become editable inline within the grid | Fast single-row edits with minimal grid view disruption. Changes take effect directly within the grid, providing immediate visual feedback |
| `Batch` | Multiple rows or cells can be edited simultaneously. All changes saved together in one operation | Enables simultaneous editing before submission. Prevents accidental saves and allows reviewing all changes before committing to the data source |
| `Dialog` | Row data opens in a dialog box that blocks the grid until closed | Consolidates data into a focused form interface for organized multi-field editing. Ensures focused editing and enforced validation before submission |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

// Inline editing.
<GridComponent editSettings={{ mode: 'Inline', allowEditing: true }}>

// Batch editing.
<GridComponent editSettings={{ mode: 'Batch', allowEditing: true }}>

// Dialog editing.
<GridComponent editSettings={{ mode: 'Dialog', allowEditing: true }}>

{% endraw %}
{% endhighlight %}
{% endtabs %}

For a comprehensive overview of edit modes and [edit types](./edit-types.md) available in React Grid, refer to the following video:

{% youtube "https://www.youtube.com/watch?v=vedri_WN0ug" %}

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs16" %}

> * If [isIdentity](https://ej2.syncfusion.com/react/documentation/api/grid/column#isidentity) is enabled, the column is considered read-only when editing and adding records.
> * Disable editing for a particular column by setting [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowediting) to `false`.
> * When [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) is set to `true`, the column is automatically made read-only during editing and is editable only when adding a new record. This is because primary key columns must remain unchanged to maintain row identification.

## Toolbar with edit option

The toolbar with edit option feature in the Grid component provides a [built-in toolbar](../tool-bar/tool-bar-items.md) with various items for executing editing actions. This feature enables efficient edit operations on grid data, such as modifying cell values, updating changes, and canceling edits.

Configure the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property of the Grid component to enable this feature. The toolbar property defines the items displayed in the grid toolbar. Include relevant items like `Edit`, `Add`, `Delete`, `Update`, and `Cancel` within the `toolbar` property to enable edit options in the toolbar.

The following example demonstrates how to enable the toolbar with edit option in the grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs17" %}

## Disable editing for particular column

The Grid component provides the option to disable editing for specific columns. This is useful when certain columns should remain read-only, such as columns containing calculated values, IDs, or system-generated data.

### Static column disabling

To permanently disable editing for a column, set the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowediting) property to `false` on the column. This prevents editing for that column across all rows:

```js
<ColumnDirective field='OrderID' allowEditing={false} />
```

### Dynamic column disabling

To disable editing for a column based on application interaction or conditions, use the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowediting) property of the `columns` object. Set this property to `false` to prevent editing for that specific column. The following example demonstrates how to disable editing for selected columns dynamically in the Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let currentColumn;
  const pageSettings = { pageSize: 6 };
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const freightRules = { required: true, min: 1, max: 1000 };
  const editparams = { params: { popupHeight: '300px' } };
  const alignmentData = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'Order Date', value: 'OrderDate' },
    { text: 'Ship Country', value: 'ShipCountry' },
  ];
  const dropdownFields = { text: 'text', value: 'value' };
  const changeAlignment = (args) => {
    // Reset the allowEditing property of the previously selected column
    if (currentColumn) {
      currentColumn.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    currentColumn = grid.getColumnByField(args.value);
    currentColumn.allowEditing = false;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Select column to disable editing:</label>
    <DropDownListComponent index={0} width={150} dataSource={alignmentData} fields={dropdownFields} change={changeAlignment}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={315} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} editType='numericedit' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Edit, Page, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { Column, ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, Toolbar, ToolbarItems, Page } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let currentColumn: Column;
  const pageSettings: PageSettingsModel = { pageSize: 6 };
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true };
  const freightRules: Object = { required: true, min: 1, max: 1000 };
  const editparams = { params: { popupHeight: '300px' } };
  const alignmentData: { [key: string]: Object; }[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'Order Date', value: 'OrderDate' },
    { text: 'Ship Country', value: 'ShipCountry' },
  ];
  const dropdownFields: Object = { text: 'text', value: 'value' };
  const changeAlignment = (args: ChangeEventArgs) => {
    // Reset the allowEditing property of the previously selected column
    if (currentColumn) {
      currentColumn.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    currentColumn = (grid as GridComponent).getColumnByField(args.value) as Column;
    currentColumn.allowEditing = false;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Select column to disable editing:</label>
    <DropDownListComponent index={0} width={150} dataSource={alignmentData} fields={dropdownFields} change={changeAlignment}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={315} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} editType='numericedit' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Edit, Page, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs18" %}

> * To disable editing for a specific row using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event, refer to [Disable editing for a particular row](./in-line-editing#cancel-edit-based-on-condition).
> * To disable editing for a particular cell using the [cellEdit](https://ej2.syncfusion.com/react/documentation/api/grid#celledit) event, refer to [Disable editing for a particular cell](./batch-editing#cancel-edit-based-on-condition).

## Editing a template column

By default, template columns in the grid do not require field properties. However, to leverage built-in grid editing functionality instead of implementing custom CRUD operations, define the `field` property for specific columns.

The [field](https://ej2.syncfusion.com/react/documentation/api/grid/gridcolumn#field) property maps the column to the corresponding field in the data source, enabling built-in edit options such as `editType`. The following example demonstrates a column template with built-in `DropDownList` `editType` implementation for the "Ship Country" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs35/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs35/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs35/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs35" %}

## Customize delete confirmation dialog

By default, the Grid shows a confirmation dialog when attempting to delete a row. The appearance and content of this dialog can be customized to match application requirements. Customization can include changing the dialog header, icons, or button text.

To customize the delete confirmation dialog, utilize the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event. This event is triggered when a toolbar action is performed and allows modification of dialog properties.

Before customizing the delete dialog, ensure that the [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#showdeleteconfirmdialog) property of the `editSettings` configuration is set to `true` to enable the confirmation dialog. Additionally, refer to the grid [Default text](../global-local.md) list for localization options if custom button text is needed.

The following example demonstrates how to customize the delete confirmation dialog using the `toolbarClick` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-delete-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-delete-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-delete-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-delete-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-delete-cs1" %}

## Update boolean column value with a single click

Boolean columns (`true`/`false` values) can be toggled directly in the grid without opening an edit form. This provides a faster editing experience for simple yes/no data. This is achieved by rendering a checkbox component as a column template that updates the value immediately when clicked.

The following example demonstrates how to render a `CheckBox` component as a template in the "Verified" column to enable single-click editing:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-single-click/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-single-click/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-single-click/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-single-click/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-single-click" %}

## Edit enum column

Enum columns contain predefined list values (enumerated data). Instead of allowing free-form text input, using a dropdown editor ensures data consistency and prevents invalid entries. The [editTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#edittemplate) property enables custom editors for enum data.

The following example demonstrates how to render a `DropDownList` component as an edit template for the "Employee Feedback" column, binding it to a predefined list of enum values:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-enum/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-enum/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-enum/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-enum/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-enum" %}

## Edit complex column

Complex columns contain nested data objects (such as "Name.FirstName"). When editing complex data with custom input elements, the binding syntax differs from simple columns. Use the underscore operator (`___`) instead of the dot operator (`.`) to correctly bind nested properties in edit templates.

The following example demonstrates how to edit complex nested data. The "FirstName" and "LastName" properties (nested under "Name") are edited using input elements with names defined as "Name___FirstName" and "Name___LastName":

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-complex/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-complex/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-complex/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-complex/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-complex" %}

## Edit foreign key column

Foreign key columns display values from a related table. By default, the Grid renders a `DropDownList` editor for foreign key columns. However, this can be customized to use other components like `ComboBox` to enable search and filtering capabilities (e.g., for enhanced data discovery).

Use the [editTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#edittemplate) property to customize the editor component for foreign key columns. The following example demonstrates how to render a `ComboBox` component instead of `DropDownList` for the "Employee Name" foreign key column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-foreign-key/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-foreign-key/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-foreign-key/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-foreign-key/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-foreign-key" %}

## How to perform CRUD action externally

By default, the Grid provides built-in editing through toolbars and inline editing. However, CRUD operations can also be triggered programmatically from external controls (custom buttons, forms, or panels outside the grid). This allows full control over when and how data operations occur.

### Using separate toolbar

To perform CRUD operations externally, use the following methods:

| Method | Purpose |
|--------|---------|
| [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid#addrecord) | Add a new record (shows edit form if no data provided) |
| [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) | Begin editing the selected row |
| [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord) | Delete the selected row |
| [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid#endedit) | Save changes when grid is in edit state |
| [closeEdit](https://ej2.syncfusion.com/react/documentation/api/grid#closeedit) | Cancel editing without saving |

The following example demonstrates external CRUD operations with a custom toolbar.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-toolbar/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-toolbar/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-toolbar/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-toolbar/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-toolbar" %}

### Using external form

Instead of editing data in the Grid itself, custom forms can be used to edit selected rows. When a row is selected in the Grid, the corresponding data is populated in an external form. Changes made in the external form update the Grid data.

The `rowSelected` event can be used to capture row selection and populate external form fields with the selected row's data. The following example demonstrates editing using an external form.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-form/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-form/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-form/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-form/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-form" %}

## Troubleshoot editing works only for first row

If editing or deleting only works for the first row in the grid, the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property is likely not configured. The primary key is essential for identifying which row to edit or delete. Without it, the grid cannot distinguish between rows.

**Solution**: Set [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) to `true` on the column that contains unique identifiers:

```ts
<ColumnDirective field='OrderID' headerText='Order ID' width='100' isPrimaryKey={true} />
```

## How to make a Grid column always editable

By default, editing happens when a row enters edit mode (double-click or Edit button). However, some columns may need to be editable at all times without requiring an edit action. Achieve this using column templates with input controls that save changes automatically.

The following example demonstrates how to render a textbox in the "Freight" column that is always editable. Value changes are captured through the Grid component’s React `onKeyUp` event handler and persisted to the underlying grid row data using the [updateRow](https://ej2.syncfusion.com/react/documentation/api/grid#updaterow) method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs19" %}

> * When a template column has a corresponding `field` property defined, the value entered in the template column's input field is stored in the associated edit column of the row's data object.