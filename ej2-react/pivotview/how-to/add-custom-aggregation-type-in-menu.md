---
layout: post
title: Add custom aggregation type to the menu in React | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Add custom aggregation type to the menu 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to the menu in React Pivotview component

The React Pivot Table component allows you to extend its functionality by adding custom aggregation types to the built-in aggregation menu. This enables you to implement specific calculation methods beyond the standard options like Sum, Average, Min, and Max.

## Adding custom aggregation types

You can use the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#databound) event to add your own custom aggregate types to the pivot table's aggregate menu. This event fires after the pivot table has been fully rendered, making it the perfect spot to modify the component's UI elements.

In the following example, we have added two custom aggregation types **CustomAggregateType 1** (which calculates a weighted average) and **CustomAggregateType 2** (which calculates the percentage of total) to the aggregate menu.

The calculation logic for these custom aggregation types is implemented using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#aggregatecellinfo) event. This event provides parameters including:
- [`fieldName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#fieldname) - Holds the current cell's field name.
- [`row`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#row) - Holds the current cell's row value.
- [`column`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#column) - Holds the current cell's column value.
- [`value`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#value) - Holds the value of the current cell.
- [`cellSets`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#cellsets) - Holds raw data for the aggregated value cell.
- [`rowCellType`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#rowcelltype) - Holds the row cell type value.
- [`columnCellType`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#columncelltype) - Holds the column cell type value.
- [`aggregateType`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#aggregatetype) - Holds the aggregate type of the cell.
- [`skipFormatting`](https://ej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#skipformatting) - Boolean property that allows skipping formatting if applied.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs317/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs317/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs317/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs317/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs317" %}