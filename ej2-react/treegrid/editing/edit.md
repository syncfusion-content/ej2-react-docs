---
layout: post
title: Edit in React Treegrid component | Syncfusion
description: Learn here all about Edit in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Edit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Edit in React Treegrid component

The TreeGrid component has options to dynamically insert, delete and update records. Editing feature is enabled by using [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editsettings) property and it requires a primary key column for CRUD operations. To define the primary key, set [`columns.isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) to **true** in particular column.

To get start quickly with CRUD functionalities, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=JX8Ay-tH-WI" %}

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editmodule) module in treegrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs8" %}

> * You can disable editing for a particular column, by specifying [`columns.allowEditing`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowediting) to **false**.

## Toolbar with edit option

The treegrid toolbar has the built-in items to execute Editing actions. You can define this by using the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs9" %}

## Disable editing for particular row cell

You can disable the editing for a particular row by using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event of TreeGrid based on **requestType** as **beginEdit**.

In the below demo, the rows which are having the value for **Priority** column as **Breaker** is prevented from editing.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs2" %}

## Adding row position

The TreeGrid control provides the support to add the new row in the top, bottom, above selected row, below selected row and child position of tree grid content using [`editSettings.newRowPosition`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#newrowposition) property. By default, a new row will be added at the top of the treegrid.

The following examples shows how to set new row position as *Child* in tree grid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs10" %}

## Confirmation messages

### Delete confirmation

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) as **true**

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs11" %}

> The [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) supports all type of edit modes.

## Default column values on add new

The treegrid provides an option to set the default value for the columns when adding a new record in it. To set a default value for the particular column by defining the [`columns.defaultValue`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#defaultvalue).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs12" %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowediting).

In the following demo, editing is disabled for the *Start Date* column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs13/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs13" %}

## Troubleshoot: Editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If [`column.primaryKey`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) is not defined in the treegrid, then edit or delete action take places the first row.

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
