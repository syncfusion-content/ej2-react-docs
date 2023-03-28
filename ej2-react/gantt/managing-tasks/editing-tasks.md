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

## Sections or tabs in dialog

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

## Limiting data fields in general tab

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