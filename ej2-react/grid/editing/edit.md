---
layout: post
title: Editing in React Grid component | Syncfusion
description: Learn here all about Editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Edit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editing in React Grid component

The Grid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to seamlessly perform CRUD (Create, Read, Update, Delete) operations.

To enable editing functionality directly within the grid, you need to configure the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel/#allowediting), [allowAdding](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel/#allowadding), and [allowDeleting](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel/#allowdeleting) properties within the [editSettings](https://ej2.syncfusion.com/react/documentation/api/grid#editsettings)  to **true**.

Editing feature requires a primary key column for CRUD operations. To define the primary key, set [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit** button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar or on an external button which is bound to invoke the [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid/edit/#addrecord) method of the grid, **Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid. Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [Edit](https://ej2.syncfusion.com/react/documentation/api/grid/edit/) module into the grid.

To learn about what are all the edit modes and edit types are available in React Grid, you can check on this video

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

> * If [isIdentity](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying `allowEditing` to **false**.
>* You can use the **Insert** key to add a new row to the grid and use the **Delete** key to delete the selected row from the grid.

## Toolbar with edit option

The toolbar with edit option feature in the Grid component provides a [built-in toolbar](../../toolbar/item-configuration) that includes various items for executing editing actions. This feature allows you to easily perform edit operations on the grid data, such as modifying cell values, updating changes, and canceling edits. 

To enable this feature, you need to configure the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property of the Grid component. This property allows you to define the items that will be displayed in the grid toolbar. By including the relevant items like **Edit**, **Add**, **Delete**, **Update**, and **Cancel** within the `toolbar` property, you can enable the edit options in the toolbar.

Here's an example of how to enable the toolbar with edit option in the Grid:

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

In Grid component, you have an option to disable editing for a specific column. This feature is useful when you want to prevent editing certain columns, such as columns that contain calculated values or read-only data.

To disable editing for a particular column, you can use the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowediting)  property of the **columns** object. By setting this property to **false**, you can prevent editing for that specific column.

Here's an example that demonstrates how to disable editing for the column in the Grid:

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
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' editType='datepickeredit' />
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
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' editType='datepickeredit' />
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

>* If you have set the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey) property to **true** for a column, editing will be automatically disabled for that column.
> * You can disable the particular row using [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event. Please refer this [link](https://ej2.syncfusion.com/react/documentation/grid/editing/in-line-editing#disable-editing-for-a-particular-row).
>* You can disable the particular cell using [cellEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#celledit) event. Please refer this [link](https://ej2.syncfusion.com/react/documentation/grid/editing/batch-editing#disable-editing-for-a-particular-cell).

## Editing template column

The editing template column feature in the Grid allows you to create custom editing templates for specific columns in the grid. This feature is particularly useful when you need to customize the editing experience for certain columns, such as using custom input controls or displaying additional information during editing.

To enable the editing template column feature, you need to define the [field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field) property for the specific column in the grid's configuration. The `field` property maps the column to the corresponding field name in the data source, allowing you to edit the value of that field.

In the below demo, the **ShipCountry** column is rendered with the template.

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

Customizing the delete confirmation dialog in Grid allows you to personalize the appearance, content, and behavior of the dialog that appears when you attempts to delete an item. You can modify properties like header, showCloseIcon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the delete confirmation dialog, you can utilize the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event. This event is triggered when a toolbar item, such as the delete button, is clicked.

>* To enable the confirmation dialog for the delete operation in the Grid, you can set the [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#showdeleteconfirmdialog) property of the `editSettings` configuration to **true**.
>* You can refer the Grid [Default text](../global-local) list for more localization.

The following example that demonstrates how to customize the delete confirmation dialog using the `toolbarClick` event:

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to update a boolean column value with a single click in the normal mode of editing. This feature streamlines the process of toggling boolean values within the grid, enhancing interaction and efficiency. This can be achieved through the use of the column template feature.

In the following sample, the `CheckBox` component is rendered as a template in the **Verified** column to make it editable with a single click.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a feature that allows you to edit enum type data in a grid column. This is particularly useful when you need to edit enumerated list data efficiently.

In the following example, the `DropDownList` component is rendered within the [editTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#edittemplate) for the Employee Feedback column using **template**. The enumerated list data can be bound to the Employee Feedback column using the two-way binding (@bind-Value).

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

The edit template for complex column in Grid is used to customize the editing experience when dealing with complex data structures. This capability is particularly useful for handling nested data objects within grid columns. By default, the grid binds complex data to column fields using the dot (.) operator. However, when you render custom elements, such as input fields, in the edit template for a complex column, you must use the (___) underscore operator instead of the dot (.) operator to bind the complex object.

In the following sample, the input element is rendered in the edit template of the FirstName and LastName column. The edited changes can be saved using the `name` property of the input element. Since the complex data is bound to the FirstName  and LastName column, The `name` property should be defined as **Name___FirstName and Name___LastName**, respectively, instead of using the dot notation (**Name.FirstName and Name.LastName**).

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid offers a powerful editing feature for foreign key columns, enhancing the default rendering of the DropDownList component during editing. This flexibility is particularly useful when you need to customize the editor for foreign key columns. By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid renders the DropDownList component as the editor for foreign key columns during editing. However, you can enhance and customize this behavior by leveraging the [editTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#edittemplate) property for the column using **template**. The `editTemplate` property allows you to specify a cell edit template that serves as an editor for a particular column, accepting either a template string or an HTML element ID.

In the following code example, the Employee Name is a foreign key column. When editing, the ComboBox component is rendered instead of DropDownList.

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

Performing CRUD (Create, Read, Update, Delete) actions externally in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to manipulate grid data outside the grid itself. This can be useful in scenarios where you want to manage data operations programmatically.

### Using separate toolbar 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid enables external CRUD operations, allowing you to efficiently manage data manipulation within the grid. This capability is particularly useful when you need to manage data operations using a separate toolbar.

To perform CRUD operations externally, the following methods are available:

[addRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#addrecord) - To add a new record. If no data is passed then add form will be shown.
[startEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#startedit) - To edit the selected row.
[deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#deleterecord) - To delete a selected row.
[endEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#endedit) - If the grid is in editable state, then you can save a record by invoking this method.
[closeEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#closeedit) - To cancel the edited state.

The following example demonstrates the integration of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid with a separate toolbar for external CRUD operations. The toolbar contains buttons for Add, Edit, Delete, Update, and Cancel.

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

Performing the edit operation in a custom external form in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid is a valuable feature when you need to customize the edit operation within a separate form rather than the default in-grid editing. 

To enable the use of an external form for editing in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you can make use of the `rowSelected` property. This property specifies whether the edit operation should be triggered when a row is selected.

In the following example, it demonstrates how to edit the form using an external form by utilizing the `rowSelected` property:

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

The Editing functionalities can be performed based upon the primary key value of the selected row. If [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey) property is not defined in the grid, then edit or delete action take places the first row. To overcome this, ensure that you establish the `isPrimaryKey` property as **true** for the relevant column responsible for holding the unique identifier for each row.

## How to make a Grid column always editable

To make a Grid column always editable, you can utilize the column template feature of the Grid. This feature is useful when you want to edit a particular column's values directly within the grid.

In the following example, the textbox is rendered in the **Freight** column using a column template. The keyup event for the Grid is bound using the [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](https://ej2.syncfusion.com/react/documentation/api/grid/#updaterow) method of the Grid.

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

> * If a template column has a corresponding `field` property defined, the value entered in the template column's input field will be stored in the associated edit column of the row's data object.

## See also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list-with-grid-editing)
* [Tab Inside the Dialog Editing](../how-to/using-tab-inside-the-dialog-editing)