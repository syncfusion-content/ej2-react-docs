---
layout: post
title: Apply custom style to pivot cells in React | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Apply custom style to pivot cells 
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells in React Pivotview component

The React Pivot Table component allows you to alter the appearance of pivot cells using event handlers. This guide demonstrates how to apply custom styling to specific cells in your pivot table.

## Overview

You can apply custom styles to different types of cells in the pivot table:
- Use the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event to style row headers and value cells.
- Use the [`headerCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event to style column headers.

Both events are available through the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/) property of the Pivot Table component.

## Implementation example

The following example shows how to apply styles to:
- The column header **"Sold Amount"** under **"FY 2016"** using the [`headerCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event.
- The row header **"Germany"** and its aggregated values using the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event.
- Styles are applied by adding the **"e-custom"** CSS class to the cell elements.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs312/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs312/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs312/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs312/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs312" %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [`valueSortSettings`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.