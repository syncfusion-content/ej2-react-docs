---
layout: post
title: Editing in React Pivot Table component | Syncfusion
description: Learn here all about Editing in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Editing in React Pivot Table component

> This feature is applicable only for the relational data source.

The cell editing option allows users to directly change data in the pivot table by adding, updating, or deleting raw data items within any value cell. When you double-click a value cell, the raw items appear in a data grid within a new window. In this data grid, you can perform CRUD operations by double-clicking cells or using toolbar options. After you finish editing the raw items, the pivot table automatically updates the aggregated values. To enable this option, set the [`allowEditing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowediting) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **true**.

The [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) property provides comprehensive control over editing behavior through the following options:

* [`allowAdding`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowadding): Enables adding new rows to the data grid.
* [`allowEditing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowediting): Allows editing existing records in the data grid.
* [`allowDeleting`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowdeleting): Enables deleting records directly from the data grid.
* [`allowCommandColumns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowcommandcolumns): Displays built-in command buttons (edit, delete, save, cancel) in the data grid.
* [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#mode): Sets the editing mode.
* [`allowEditOnDblClick`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#alloweditondbclick): Enables users to start editing a cell by double-clicking it.
* [`showConfirmDialog`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#showconfirmdialog): Shows a confirmation dialog before saving changes.
* [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#showdeleteconfirmdialog): Shows a confirmation dialog before deleting a record.
* [`allowInlineEditing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowinlineediting): Allows users to edit content directly in the cell.

The CRUD operations available in the data grid toolbar and command column are:

| Toolbar Button | Actions |
|----------------|---------|
| Add | Add a new row.|
| Edit | Edit the current row or cell.|
| Delete | Delete the current row.|
| Update | Update the edited row or cell.|
| Cancel | Cancel the edited state. |

The following are the supported edit types in the data grid:

* Normal
* Dialog
* Batch
* Command Columns

To learn about how to work with Editing options, you can check on this video for React Pivot Table.

{% youtube "https://www.youtube.com/watch?v=Z3vb_MY4pjo" %}

## Normal

Normal edit mode allows users to edit one row at a time in the editing dialog with simple data changes and updates. In normal edit mode, when editing begins, the selected row changes to edit state. Cell values can be modified and saved to the data source by clicking the "Update" toolbar button. To enable normal edit mode, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **Normal**.

> The normal edit mode **Normal** is set as the default mode for editing.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs55/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs55/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs55/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs55/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs55" %}

## Dialog

The dialog edit mode provides a focused editing environment by displaying the selected row data in an exclusive dialog window, ensuring clear visibility and controlled data modification. In dialog edit mode, when editing begins, the currently selected row data appears in a dedicated dialog. Cell values can be modified and saved to the data source by clicking the "Save" button in the dialog. To enable dialog editing, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **Dialog**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs56/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs56/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs56/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs56/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs56" %}

## Batch

Batch editing enables users to make multiple changes to data grid cells and save them all at once, improving efficiency for bulk updates. When a user double-clicks any data grid cell in batch mode, the target cell changes to edit state. Users can perform multiple changes and save all modifications (added, changed, and deleted data) to the data source by clicking the **Update** toolbar button. To enable batch editing, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **Batch**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs57/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs57/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs57/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs57/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs57" %}

## Command column

The command column option provides dedicated action buttons within the data grid for streamlined CRUD operations as an alternative to using toolbar options. An additional column appears in the data grid layout containing command buttons to perform the CRUD operations. To enable the command columns, set the [`allowCommandColumns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettingsModel/#allowcommandcolumns) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **true**.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs58/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs58/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs58/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs58/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs58" %}

## Inline Editing

The inline editing option provides streamlined data modification by allowing direct editing of value cells without opening an external dialog, improving workflow efficiency for quick data updates. This editing mode applies only when a single raw data item corresponds to the value of the cell and works with all editing modes including normal, batch, dialog, and column commands. Enable inline editing by setting the [`allowInlineEditing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellEditSettings/#allowinlineediting) property in [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editsettings) to **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs59/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs59/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs59/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs59/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs59" %}

## Editing using the pivot chart

Pivot chart editing provides an alternative way to conveniently update, add, or remove underlying data associated with any chart data point. This empowers users to perform CRUD (Create, Read, Update, Delete) operations on the underlying raw items linked to visualized data points for enhanced analysis.

Clicking a data point in the pivot chart displays the underlying raw items in a data grid within a popup window. Users can then add, update, or delete these items using any of the supported edit types (normal, dialog, batch, or command column), following the same steps as for pivot table cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs60/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs60/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs60/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs60/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs60" %}

## Events

### EditCompleted

The event [`editCompleted`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#editcompleted) triggers when values cells are edited completely. The event provides edited cell(s) information along with its previous cell value. It also helps to do the CRUD operation by manually updating the data source which is connected to the component. It has the following parameters.

* [`currentData`](https://ej2.syncfusion.com/react/documentation/api/pivotview/editCompletedEventArgs/#currentdata) - It holds the current raw data of the edited cells.
* [`previousData`](https://ej2.syncfusion.com/react/documentation/api/pivotview/editCompletedEventArgs/#previousdata) - It holds the previous raw data of the edited cells.
* [`previousPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/editCompletedEventArgs/#previousposition) - It holds the index of the raw data whose values are edited.
* [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/editCompletedEventArgs/#cancel) - It is a boolean property and if it is set as **true**, the editing won’t be reflected in the pivot table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs61/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs61/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs61/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs61/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs61" %}

### DrillThrough

For more information [`refer`](./drill-through#drillthrough) here.

### BeginDrillThrough

For more information [`refer`](./drill-through#begindrillthrough) here.

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event triggers when editing actions such as add, edit, save, or delete are started through the UI (either by dialog or inline editing). This event lets users monitor the editing workflow and take action before the operation completes. The following parameters are available in the event:

- [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#datasourcesettings): Contains the current data source settings, including all input data, rows, columns, values, filters, and format settings.
- [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#actionname): Shows the name of the editing action that has started. The following are the UI actions and their names:

   | Action  | Action Name         |
   |---------|--------------------|
   | Editing | Edit record        |
   | Save    | Save edited records|
   | Add     | Add new record     |
   | Delete  | Remove record      |

- [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#cancel): Allows users to stop (cancel) the action by setting this option to **true**.

For example, you can restrict add and save actions by setting **args.cancel** to **true** in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs62/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs62/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs62/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs62/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs62" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actioncomplete) event triggers whenever a UI action, such as add, update, remove, or save (using dialog or inline editing), is finished. This lets users know exactly what kind of action has just been completed. The event provides the following details:

* [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#datasourcesettings): Contains the current data source settings, including input data, rows, columns, values, filters, format settings, and more.
* [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#actionname): It holds the name of the current action completed. The following are the UI actions and their names:

   | Action | Action Name            |
   |--------|------------------------|
   | Save   | Edited records saved   |
   | Add    | New record added       |
   | Delete | Record removed         |
   | Update | Records updated        |

* [`actionInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#actioninfo): It holds the unique information about the current UI action. For example, if save action is completed, the event argument contains information such as mode of editing and saved records.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs63/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs63/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs63/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs63/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs63" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionfailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

* [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionFailureEventArgs/#actionname): It holds the name of the current action failed. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | Editing| Edit record|
   | Save| Save edited records|
   | Add| Add new record|
   | Delete| Remove record|

* [`errorInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionFailureEventArgs/#errorinfo): It holds the error information of the current UI action.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs64/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs64/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs64/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs64/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs64" %}

## See Also

* [Configure data grid-options on editing](./how-to/configure-data-grid-options-on-editing-mode)