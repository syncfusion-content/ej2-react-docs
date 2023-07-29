---
layout: post
title: Apply custom style to pivot cells in React Pivotview component | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in React Pivotview component

The [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event in [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings) can be used to apply custom style to row and value cells, and the [`headerCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event in [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings) can be used to apply custom styles to column cells.

In the following example, a custom style has been applied to the column header **"Sold Amount"** under **"FY 2016"** via the [`headerCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event and to the row header **"Germany"** and its aggregated value via the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event by adding the **"e-custom"** class to the cell element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs312/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs312/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs312" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [`valueSortSettings`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.