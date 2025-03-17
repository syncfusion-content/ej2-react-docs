---
layout: post
title: Group and caption aggregate in React Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Group and caption aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in React Grid component

Group footer and caption aggregates in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allow you to calculate aggregate values based on the current group items. These aggregate values can be displayed in the group footer cells and group caption cells, respectively. To achieve this, you can use the [groupFooterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#groupfootertemplate) and [groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) properties of the [AggregateColumnDirective](https://helpej2.syncfusion.com/react/documentation/api/grid/aggregateColumn).

> When working with group aggregates in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, it is important to set the property [allowGrouping](https://helpej2.syncfusion.com/react/documentation/api/grid/column/#allowgrouping) of the [column](https://helpej2.syncfusion.com/react/documentation/api/grid/column) to **true**. 
> To maintain grouped columns in the grid after grouping, set [showGroupedColumn](https://helpej2.syncfusion.com/react/documentation/api/grid/groupSettings/#showgroupedcolumn) to **true**.

## Group footer aggregates

Group footer aggregates are displayed in the footer cells of each group. These cells appear at the bottom of each group and provide aggregate values based on the grouped data. To display group footer aggregates, you need to provide a template using the `groupFooterTemplate` property. The template will be used to render the aggregate values in the group footer cells.

Here's an example that demonstrates how to use group footer aggregates in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component:

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

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) name.

## Group caption aggregates

Group caption aggregates are displayed in the caption cells of each group. These cells appear at the top of each group and provide a summary of the grouped data. To display group caption aggregates, you can use the [groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) property. This property allows you to define a template that will be used to display the aggregate values in the group caption cells.

Here's an example that demonstrates how to use group and caption aggregates in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component:

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

> The group total summary in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid is calculated based on the current page records for each group by default.
> If you require aggregates for all the data in the grid, you can enable the [disablePageWiseAggregates](https://helpej2.syncfusion.com/documentation/api/grid/groupSettings/#disablepagewiseaggregates) property.

## Disable page wise aggregates for grouping

In some cases, you may want to disable the page-wise aggregates for grouping in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component. By default, when grouping is enabled with paging, the grid calculates the aggregates for each page separately. However, you can choose to disable this behavior and calculate aggregates for the entire grouped data instead. This can be achieved by setting the [disablePageWiseAggregates](https://helpej2.syncfusion.com/documentation/api/grid/groupSettings/#disablepagewiseaggregates) property to **true**.

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

* [How to format aggregate value in React grid](footer-aggregate.md#format-the-aggregate-value)