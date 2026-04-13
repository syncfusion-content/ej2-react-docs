---
layout: post
title: Edit in React TreeGrid component | Syncfusion
description: Learn here all about Edit in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Edit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Edit in React TreeGrid

The TreeGrid supports dynamically inserting, deleting, and updating records. Enable editing by using the [`editSettings`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editsettings) property, and define a primary key column for CRUD operations by setting [columns.isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) to **true**.

The following video provides a quick start for CRUD functionalities:
{% youtube "https://www.youtube.com/watch?v=JX8Ay-tH-WI" %}

To use CRUD, inject the [Edit](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editmodule) module in the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs8" %}

> Editing for a particular column can be disabled by setting [columns.allowEditing](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowediting) to **false**.

## Toolbar with edit option

The TreeGrid toolbar includes built-in items to execute editing actions. Configure these using the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) property.

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

Disable editing for a particular row by using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event when `requestType` is `beginEdit`.

In the following example, rows with the **Priority** value set to **Breaker** are prevented from editing.

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

The TreeGrid supports adding a new row at the top, bottom, above the selected row, below the selected row, or as a child of a row, using [`editSettings.newRowPosition`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#newrowposition). By default, a new row is added at the top.

The following example sets the new row position to *Child*.

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

Display a delete confirmation dialog by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs11" %}

> [showDeleteConfirmDialog](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) supports all edit modes.

## Default column values on add new

Set default values for columns when adding a new record by defining [columns.defaultValue](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#defaultvalue).

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

Disable editing for specific columns using [columns.allowEditing](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowediting).

In the following example, editing is disabled for the *Start Date* column.

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

Editing relies on the primary key value of the selected row. If [columns.isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) is not defined, edit or delete actions target the first row.

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour for key capabilities. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.