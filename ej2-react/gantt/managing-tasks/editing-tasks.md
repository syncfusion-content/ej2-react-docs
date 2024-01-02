---
layout: post
title: Editing tasks in React Gantt component | Syncfusion
description: Learn here all about Editing tasks in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Editing tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editing tasks in React Gantt component

The editing feature can be enabled in the Gantt component by enabling the [`editSettings.allowEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in the Gantt chart:
* Cell
* Dialog
* Taskbar
* Dependency links

To get start quickly with CRUD functionalities, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=JXTtlAdcXJ4" %}

## Cell editing

By setting the edit mode to auto using the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#mode) property, the tasks can be edited by double-clicking the TreeGrid cells.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through TreeGrid cells.

The following code example shows you how to enable the cell editing in Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs2" %}

`Note:` When the edit mode is set to `Auto`, double-clicking on the TreeGrid side changes the cells to editable mode. Double-clicking on the chart side opens the edit dialog for editing the task details.

## Dialog editing

Modify the task details through the edit dialog by setting the edit [`mode`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#mode).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/dialogedit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/dialogedit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/dialogedit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/dialogedit-cs2" %}

`Note:` In dialog editing mode, the edit dialog appears when the TreeGrid or Gantt chart sides are double-clicked.

### Sections or tabs in dialog

In the Gantt dialog, you can define the required tabs or editing sections using the [`addDialogFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#adddialogfields) and [`editDialogFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editdialogfields) properties. Every tab is defined using the [`type`](https://ej2.syncfusion.com/react/documentation/api/gantt/dialogFieldType/) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/editingdialog-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/editingdialog-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editingdialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editingdialog-cs1" %}

### Limiting data fields in general tab

In the Gantt dialog, you can make only specific data source fields visible for editing by using the [`addDialogFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#adddialogfields) and [`editDialogFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editdialogfields) properties. The data fields are defined with [`type`](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/#type) and [`fields`] (https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/#fields) properties.

`Note:` You can also define the custom fields in the add/edit dialog General tab using the [`fields`](https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/#fields) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/editingdialog-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/editingdialog-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/editingdialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/editingdialog-cs2" %}

## Capture the modified records in React Gantt component

In the EJ2 Gantt chart, modified records can be conveniently retrieved after adding, editing, or deleting data by utilizing the [`actionComplete`] (https://ej2.syncfusion.com/react/documentation/api/gantt/actionCompleteArgs/) event.

The following code example serves as a practical illustration of how to effectively capture the modified records within the Gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/capturerecords-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/capturerecords-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/capturerecords-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/capturerecords-cs1" %}

The following screenshots represent sample add, edit, and delete record actions using the gantt `args`.

The data of the newly added record can be obtained from actionComplete event by requestType of [`args.requestType`] (https://ej2.syncfusion.com/react/documentation/api/gantt/iActionBeginEventArgs/#requesttype) to the action `add` and the following screenshot shows that the added record's data is available in [`args.newTaskData`] (../../api/gantt/actionCompleteArgs/#newtaskdata) property.

![Add action](images/add-action.png)

The data of the edited record can be obtained from actionComplete event by requestType of [`args.requestType`] (../../api/gantt/iActionBeginEventArgs/#requesttype) to the action `save` and the following screenshot shows that the edited record's data is available in [`args.modifiedTaskData`] (../../api/gantt/iActionBeginEventArgs/#modifiedtaskdata) property.

![Edit action](images/edit-action.png)

The data of the deleted record can be obtained from actionComplete event by requestType of [`args.requestType`] (../../api/gantt/iActionBeginEventArgs/#requesttype) to the action `delete` and the following screenshot shows that the deleted record's data is available in [`args.modifiedRecords`] (../../api/gantt/iActionBeginEventArgs/#modifiedrecords) property.

![Delete action](images/delete-action.png)

## Task dependencies

In the Gantt component, you can update the dependencies between tasks and link the tasks interactively. The task dependencies can be mapped from the data source using the [`dependency`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#dependency) property.

You can update the task dependencies using the following ways:

* Mouse interactions: Using connector points in the taskbar, you can perform drag and drop action to create task dependency links.
* Edit dialog: Create or remove the task dependencies using the `Dependency` tab in the edit dialog.
* Cell editing: Create or remove the task links using cell editing.

The following code example demonstrates how to enable task dependency editing in the Gantt chart using the [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/dependencyedit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/dependencyedit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/dependencyedit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/dependencyedit-cs2" %}

![Alt text](images/user-interaction.png)

Updating with mouse interaction action

![Alt text](images/cell-edit.png)

Updating with cell Edit

![Alt text](images/dialog.png)

Updating with Dialog

`Note:` When the edit mode is set to `Auto`, on performing double-click action on TreeGrid side, the cells will be changed to editable mode and on performing double-click action on chart side, the edit dialog will appear for editing the task details.

## Update task values using method

Tasks' value can be dynamically updated by using the [`updateRecordById`](https://ej2.syncfusion.com/react/documentation/api/gantt/#updaterecordbyid) method. You can call this method on any custom action. The following code example shows how to use this method to update a task.

>NOTE: Using the [`updateRecordById`](https://ej2.syncfusion.com/react/documentation/api/gantt/#updaterecordbyid) method, you cannot update the task ID value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/updaterecord-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/updaterecord-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/updaterecord-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/updaterecord-cs1" %}
