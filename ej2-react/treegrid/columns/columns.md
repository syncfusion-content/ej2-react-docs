---
layout: post
title: Columns in React Treegrid component | Syncfusion
description: Learn here all about Columns in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React Treegrid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid#dataSource) schema in the TreeGrid. This plays a vital role in rendering column values in the required format. The treegrid operations such as sorting, filtering and searching etc. are performed based on column definitions. The [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#field) property of the [`columns`](https://ej2.syncfusion.com/react/documentation/api/treegrid#column) is necessary to map the data source values in TreeGrid columns.

> 1. If the column [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) name contains “dot” operator, it is considered as complex binding.

[`treeColumnIndex`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#treecolumnindex) property denotes the column that is used to expand and collapse child rows.

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property. The TreeGrid uses [Internalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) library to format [`number`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) and [`date`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime)
values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs10" %}

> By default, the [`number`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting)
and [`date`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) values are formatted in **en-US** locale.

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property as string   (Example: `yMd`). Please refer to the link to know more about [`Date formatting`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

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

You can lock columns by using [`column.lockColumn`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, duration column is locked and its reordering functionality is disabled.

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

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format)  is defined for a column, the column uses [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) to select the appropriate format option ([number](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) or [date](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime).

TreeGrid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#datasource).

## Checkbox Column

To render checkboxes in existing column, you need to set [`columns.showCheckbox`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#showcheckbox) property as **true**

It is also possible to select the rows hierarchically using checkboxes in TreeGrid by enabling [`autoCheckHierarchy`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autocheckhierarchy) property. When we check on any parent record checkbox then the child record checkboxes will get checked.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs12" %}

> For hierarchy selection between the records, we need to enable the [`autoCheckHierarchy`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autocheckhierarchy) property.

## Controlling TreeGrid actions

You can enable or disable treegrid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowfiltering), and [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowsorting) properties.

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

You can show or hide treegrid columns dynamically using external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumns) or [`hideColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidecolumns) method.

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

The [`valueAccessor`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor).

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

You can bind an array of objects in a column by using the [`valueAccessor`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor) property. In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the [`valueAccessor`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor).

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

You can achieve the expression column by using the [`valueAccessor`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#valueaccessor)property.

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

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs18/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs18" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
