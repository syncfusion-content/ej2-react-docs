---
layout: post
title: Managing tasks in React Gantt component | Syncfusion
description: Learn here all about Managing tasks in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Managing tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Managing tasks in React Gantt component

The Gantt component has options to dynamically insert, delete, and update tasks in a project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) property to `true` in the column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module into the Gantt component.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through TreeGrid cells.

The following code example shows you how to enable the cell editing in Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs3" %}

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#edittype) is used to define the edit type for any particular column.
You can set the [`columns.editType`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](../numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](../textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](../drop-down-list) component to show all unique values related to that field.

* `booleanedit` - [`CheckBox`](../check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](../datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Edit Type |Component |Example
-----|-----|-----
`numericedit` | [`NumericTextBox`](../numerictextbox) | params: { decimals: 2, value: 5 }
`dropdownedit` | [`DropDownList`](../drop-down-list) | params: { value: 'Germany' }
`booleanedit` | [`Checkbox`](../check-box) | params: { checked: true}
`datepickeredit` | [`DatePicker`](../datepicker) | params: { format:'dd.MM.yyyy' }
`datetimepickeredit` | [`DateTimePicker`](../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/cellEditType-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/cellEditType-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/cellEditType-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/cellEditType-cs1" %}

## Cell edit template

The cell edit template is used to create a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/editParams-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/editParams-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editParams-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editParams-cs1" %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [`columns.allowEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#allowediting) property.

In the following demo, editing is disabled for the `TaskName` column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/editColumns-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/editColumns-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editColumns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editColumns-cs1" %}


## Read-only Gantt

In Gantt, all create, update, delete operations can be disabled by setting the `readOnly` property as `true`. The following sample demonstrates, rendering the Gantt chart as read only.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/readOnly-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/readOnly-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/readOnly-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/readOnly-cs1" %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations.
While defining columns in Gantt using the [`columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs2" %}

## Customize control in add/edit dialog

In Gantt Chart, the controls such as form elements, grid and RTE in add and edit dialog can be customized by using [additionalParams](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property.

### Customize general tab of dialog

The form element in the `General` tab of the add/edit dialog can be added or removed by using the [fields](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/#fields) property within the [addDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/editDialogFieldSettings/) settings respectively.

The controls of the `fields` can be customized by using the [edit](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/managing-tasks#cell-edit-template) template feature.

In the below sample, `General` tab is customized using the `fields` property. The fields **TaskID**, **TaskName** and **newInput** are added in both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs3" %}
  
### Customize dependency, segments and resources tab of dialog

You can customize the dependency, segments, and resource tabs of the dialog box using the [additionalParams](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/editDialogFieldSettings/) settings respectively. This customization involves defining properties from the [grid](https://ej2.syncfusion.com/react/documentation/api/grid/) within the `additionalParams` property.

In the example below:
* The `dependency` tab enables [sorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) and [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) options. 
* The `segments` tab enables `sorting` and `toolbar` options and includes a new column `newData` defined with a specified [field](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel/#field).
* The `resources` tab defines a new column `Segment Task`  with specific properties such as `field`, [width](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel/#width) and [headerText](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel/#headertext).
These customizations are applied to both `addDialogFields` and `editDialogFields` settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs4" %}

### Customize note dialog tab

 You can customize the note dialog tab using the [additionalParams](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettingsModel/#additionalParams) property within the [addDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/) and [editDialogFields](https://ej2.syncfusion.com/react/documentation/api/gantt/editDialogFieldSettings/) settings respectively. This customization involves defining properties from the [RTE](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/) module within the `additionalParams` property.

In the following example, the `notes` tab is customized with the [inlinemode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#inlinemode) property enabled, allowing for in-place editing. Additionally, the `OnSelection` property is enabled, which opens the toolbar inline upon selecting text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs5" %}

## Touch interaction

The Gantt control editing actions can be achieved using the double tap and tap and drag actions on a element.

The following table describes different types of editing modes available in Gantt.

Action |Description
-----|-----
[`Cell editing`](managing-tasks/#cell-editing) | To perform `double tap` on a specific cell, initiate the cell to be in edit state.
[`Dialog editing`](managing-tasks/#dialog-editing) | To perform `double tap` on a specific row, initiate the edit dialog to be opened.
[`Taskbar editing`](managing-tasks/#taskbar-editing) | Taskbar editing action is initiated using the `tap` action on the taskbar. <br> **Parent taskbar** : Once you tap on the parent taskbar, it will be changed to editing state. Perform only dragging action on parent taskbar editing. <br>
![Alt text](../images/editing-parent.PNG) <br> **Child taskbar** : Once you tap the child taskbar, it will be changed to editing state. <br>
![Alt text](../images/editing-state.PNG) <br> **Dragging taskbar** : To drag a taskbar to the left or right in editing state. <br> <br> **Resizing taskbar** : To resize a taskbar, drag the left/right resize icon. <br> <br> **Progress resizing** : To change the progress, drag the progress resize icon to the left or right direction.

### Task dependency editing

You can `tap` the left/right connector point to initiate [`task dependencies`](managing-tasks/#task-dependencies) edit mode and again tap another taskbar to establish the dependency line between two taskbars.

The following table explains the taskbar state in dependency edit mode.

![Taskbar states](images/taskbar-states.PNG)

Taskbar state |Description
-----|-----
`Parent taskbar` | You cannot create dependency relationship to parent tasks. <br> ![Parent taskbar](images/parent-taskbar.PNG)
`Taskbar without dependency` |  If you tap a valid child taskbar, it will create `FS` type dependency line between tasks, otherwise exits from task dependency edit mode. <br> ![Valid taskbar](images/valid-taskbar.PNG)
`Taskbar with dependency` | If you tap the second taskbar, which has already been directly connected, it will ask to remove it. <br> ![Invalid taskbar](images/invalid-taskbar.PNG)
`Removing dependency` | Once you tap the taskbar with direct dependency, then confirmation dialog will be shown for removing dependency. <br> ![Confirm dialog](images/confirm-dialog.PNG)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/touch-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/touch-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/touch-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/touch-cs1" %}

>Note: In mobile device, you cannot create dependency other than `FS` by taskbar editing. By using cell/dialog editing, you can add all type of dependencies.

## Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs6" %}

