---
layout: post
title: React Grid - Custom Aggregate | Syncfusion
description: Learn to create custom aggregate functions in Syncfusion React Grid (EJ2) for distinct, conditional and advanced summary logic in footer and group sections.
control: Custom aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Aggregate in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports custom aggregate functions for scenarios where built-in options do not meet specific requirements. This allows for tailored logic to compute aggregate values.
To configure a custom aggregate, set the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) property to "Custom" in the `AggregateColumnDirective` and provide the custom aggregation logic using the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#customaggregate) property.

The custom aggregate function in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component is executed differently based on the aggregation context:

- Total Aggregation: The function is executed with the entire dataset and the corresponding aggregate column object.

- Group Aggregation: The function is executed with the current group details and the aggregate column object.

The following example demonstrates how to implement and use a custom aggregate function in the grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-custom-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-custom-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-custom-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-custom-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-custom-cs1" %}

> To access the custom aggregate value inside template, use the key as "Custom"

## Displaying distinct value count in aggregate row

To display the count of distinct values in an aggregate row for a column, set the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) to "Custom" and provide a custom function in the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#customaggregate) property that returns the number of unique values.

The following example demonstrates how to display the distinct count for the "ShipCountry" column using a custom aggregate.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-custom-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-custom-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-custom-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-custom-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-custom-cs2" %}

> To display the aggregate value of the current column in another column, use the [columnName](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#columnname) property. If the `columnName` property is not defined, the field name value will be assigned to the `columnName` property.

## See also
- [Aggregates overview](./aggregates)
- [Reactive aggregates](./reactive-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/react/documentation/api/grid/aggregatecolumn)