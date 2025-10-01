---
layout: post
title: Columns in React TreeGrid component | Syncfusion
description: Learn here all about Columns in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React TreeGrid

The column definitions act as the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/#dataSource) schema in the TreeGrid. They play a vital role in rendering column values in the desired format. TreeGrid operations such as sorting, filtering, and searching are performed based on the column definitions. The [field](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) property of the [columns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#column) configuration is required to map data source values to TreeGrid columns.

> 1. If the column `field` is not present in the data source, the column displays empty values.
> 2. If the `field` name contains a dot (.), it is treated as complex binding.

The [treeColumnIndex](https://ej2.syncfusion.com/react/documentation/api/treegrid/#treecolumnindex) property denotes the column used to expand and collapse child rows.

## Format

To format cell values based on culture, use the [columns.format](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property. The TreeGrid uses the [Internationalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) library to format [number](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs10" %}

> By default, [number](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) values are formatted using the en-US locale.

### Number formatting

Use the following format strings for numeric and integer values.

Format |Description |Remarks
-----|-----|-----
N | Numeric format | Append an integer to set precision (for example, N2, N3).
C | Currency format | Append an integer to set precision (for example, C2, C3).
P | Percentage format | Expects input from 0 to 1 (for example, 0.2 is shown as 20%). Append an integer to set precision (for example, P2, P3).

For more information, see [Number formatting](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting).

### Date formatting

Date values can be formatted using built-in or custom format strings.

For built-in date formats, assign a string to the [columns.format](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property (for example, `yMd`). For more information, see [Date formatting](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime).

Custom format examples:

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs11" %}

## Lock Columns

Lock columns using the [column.lockColumn](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#lockcolumn) property. Locked columns are moved to the first position and cannot be reordered.

In the following example, the Duration column is locked and its reordering is disabled.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/lock-column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/lock-column-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/lock-column-cs1" %}

## Column Type

Specify the column data type using the [columns.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) property. This ensures appropriate formatting and behavior.

If a [format](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) is defined, the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) helps select the correct formatting (for example, [number](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) or [date](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime)).

TreeGrid columns support the following types:
* string
* number
* boolean
* date
* datetime

> If the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) is not set, it is inferred from the first record of the [dataSource](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#datasource).

## Checkbox Column

To render checkboxes in an existing column, set the [columns.showCheckbox](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#showcheckbox) property to true.

Rows can be selected hierarchically using checkboxes by enabling the [autoCheckHierarchy](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autocheckhierarchy) property. Selecting a parent record checkbox selects its child records.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs12" %}

> For hierarchical selection between records, enable the [autoCheckHierarchy](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autocheckhierarchy) property.

## Autofit columns 

The [autoFitColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autofitcolumns) method resizes a column to fit the widest cell content without wrapping. You can autofit a specific column during initial rendering by invoking `autoFitColumns` method in the [dataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

To use `autoFitColumns` method, inject the **Resize** module into the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs1" %}

> To autofit all columns, invoke the `autoFitColumns` method without specifying a column name.

## Controlling TreeGrid actions

Enable or disable TreeGrid actions for a specific column by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowfiltering) and [allowSorting](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowsorting) properties.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs13/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs13" %}

## Show/Hide Columns by External Button

Show or hide TreeGrid columns dynamically using external buttons by invoking the [showColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumns) or [hideColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidecolumns) methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs14" %}

## ValueAccessor

The [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor) is used to access or manipulate display values. Use it to implement custom value formatting.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs15" %}

### Display Array type Columns

Bind an array of objects to a column using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor) property. In the following example, the name field contains two objects, FirstName and LastName. These values are joined and displayed via `valueAccessor`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs16" %}

### Expression Column

An expression column can be achieved using the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs17/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs17" %}

## Render boolean value as checkbox

To render boolean values as checkboxes in columns, set the [displayAsCheckBox](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#displayascheckbox) property to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs18/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs18" %}

## Responsive columns

The Syncfusion React TreeGrid provides a built-in feature to toggle column visibility based on media queries using the [hideAtMedia](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#hideatmedia) property of the column object. The `hideAtMedia` property accepts valid [media queries](http://cssmediaqueries.com/what-are-css-media-queries.html).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs22/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs22" %}

> Refer to our [React TreeGrid](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. Explore our [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/treegrid/treegrid-overview) to knows how to present and manipulate data.