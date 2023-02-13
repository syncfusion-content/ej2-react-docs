---
layout: post
title: Task bar editing in React Gantt component | Syncfusion
description: Learn here all about Task bar editing in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Task bar editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Task bar editing in React Gantt component

Modify the task details through user interaction, such as resizing and dragging the taskbar, by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowtaskbarediting) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/taskbaredit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/taskbaredit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskbaredit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/taskbaredit-cs2" %}

## Prevent editing for specific tasks

On taskbar edit action, the [`taskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarediting) event will be triggered. You can prevent the taskbar from editing using the [`taskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarediting) event. This can be done by setting cancel property of [`taskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarediting) event argument to true. And we can hide the taskbar editing indicators like taskbar resizer, progress resizer and connector points by using [`queryTaskbarInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/#querytaskbarinfo) event.  The following code example shows how to achieve this.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/preventtaskbaredit-cs1" %}

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

## Cell Edit Template

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