---
layout: post
title: In line editing in React Grid component | Syncfusion
description: Learn here all about In line editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: In line editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# In line editing in React Grid component

In Normal edit mode, when you start editing the currently selected record is changed to edit state.
You can change the cell values and save edited data to the datasource.
To enable Normal edit, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) as **Normal**.

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

> Normal edit mode is default mode of editing.

## Automatically update the column based on another column edited value

You can update the column value based on another column edited value by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

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

You can prevent the CRUD operations of the Grid by using condition in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event with requestType as `beginEdit` for editing, `add` for adding and `delete` for deleting actions.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

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

Grid methods can be used to perform CRUD operations programmatically. The [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#addrecord), [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#deleterecord), and [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#startedit) methods are used to perform CRUD operations in the following demo.

* To add a new record to the Grid, use the [addRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#addrecord) method. In this method, you can pass the data parameter to add a new record to the Grid, and the index parameter to add a record at a specific index. If you call this method with no parameters, it will create an empty row in the Grid.

* To change the selected row to the edit state, use the [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid/#startedit) method.

* If you need to update the row data in the Grid’s datasource, you can use the [updateRow](https://ej2.syncfusion.com/react/documentation/api/grid/#updaterow) method. In this method, you need to pass the index value of the row to be updated along with the updated data.

* If you need to update the particular cell in the row, you can use the [setCellValue](https://ej2.syncfusion.com/react/documentation/api/grid/#setcellvalue) method. In this method, you need to pass the primary key value of the data source, field name, and new value for the particular cell.

* To remove a selected row from the Grid, use the [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid/#deleterecord) method. For both edit and delete operations, you must select a row first.

>Note: In both normal and dialog editing modes, these methods can be used.

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

## Confirmation dialog

The delete confirm dialog can be shown when deleting a record by defining the [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#showdeleteconfirmdialog) as **true**

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

> The [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#showdeleteconfirmdialog) supports all type of edit modes.

## Default column values on add new row

The grid provides an option to set the default value for the columns when adding a new record in it.
To set a default value for the particular column by defining the [columns.defaultValue](https://ej2.syncfusion.com/react/documentation/api/grid/column/#defaultvalue).

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

## Adding a new row at the bottom of the Grid

By default, a new row will be added at the top of the grid. You can change it by setting [editSettings.newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#newrowposition) as **Bottom**.

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

> Add [editSettings.newRowPosition](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#newrowposition) is supported for **Normal** and **Batch** editing modes.

## Move the focus to a particular cell instead of first cell while editing a row

The [recordDoubleClick](https://ej2.syncfusion.com/react/documentation/api/grid/#recorddoubleclick) event allows you to move the focus to the corresponding cell (the cell that you doubled-clicked to edit a row) instead of the first cell in edit form. With the help of this event, you can focus the double-clicked column in inline edit mode.

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