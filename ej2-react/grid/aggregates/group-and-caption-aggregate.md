---
layout: post
title: React Grid - Group and Caption Aggregate | Syncfusion
description: Display group footer and caption aggregates in Syncfusion React Grid (EJ2) using template, and disable page-wise summaries for full data calculations.
control: Group and caption aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group and Caption Aggregate in React Grid Component

Group footer and caption aggregates display summary values calculated from the records within each group.

To configure this in the grid, use the following properties on the `AggregateColumnDirective`:

- [groupFooterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#groupfootertemplate): Display aggregate values in the group footer section.
- [groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#groupcaptiontemplate): Renders aggregate values in the group caption section.

> - Set [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowgrouping) to "true" in the grid to enable column grouping.
> - Set [showGroupedColumn](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#showgroupedcolumn) to "true" in `groupSettings` to display grouped columns in the grid.

## Group footer aggregates

Group footer aggregates appear in the footer row of each group and display summary values calculated from that group's records. To render values in the group footer, use the `groupFooterTemplate` property in the `AggregateColumnDirective`.

The following example displays the sum of the "Freight" field in the footer of each group using the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-group-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-group-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-group-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-group-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-group-cs1" %}

>  Inside the template, access each aggregate value using its [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) name. For example, use `props.Sum` to read the sum aggregate.

## Group caption aggregates

Group caption aggregates are displayed in the caption cells at the top of each group, providing a quick summary of the grouped data. To render these aggregates, use the [groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#groupcaptiontemplate) property, which allows to display aggregate values in the group caption cells.

The following example displays the max of the "Freight" field in the each group caption cell using the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-group-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-group-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-group-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-group-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-group-cs2" %}

> By default, the group total summary is calculated for the current page records within each group. Set [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#disablepagewiseaggregates) to "true" to calculate aggregates using all records in the grouped dataset.

## Disable page wise aggregates for grouping

In some cases, disabling the page-wise aggregates for grouping is necessary. By default, when grouping is enables with pagination, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid calculates group aggregates only for the current page.

To calculate aggregates across the entire grouped data, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#disablepagewiseaggregates) property to "true".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-group-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-group-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-group-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-group-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-group-cs3" %}

## See also

- [Aggregates overview](./aggregates)
- [Footer aggregates](./footer-aggregate)
- [Custom aggregates](./custom-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [How to format aggregate value in React grid](./footer-aggregate#format-aggregate-value)
- [Aggregates API](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn)