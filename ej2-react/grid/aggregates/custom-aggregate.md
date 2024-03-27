---
layout: post
title: Custom aggregate in React Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in React Grid component

The custom aggregate feature in Syncfusion's React Grid component allows you to calculate aggregate values using your own aggregate function. This feature can be useful in scenarios where the built-in aggregate functions do not meet your specific requirements. To use the custom aggregate option, follow the steps below:

* Set the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) property to **Custom** in the [AggregateDirective -> AggregateColumnDirective](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/).

* Provide your custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked differently for total and group aggregations:

**Total Aggregation:** The custom aggregate function will be called with the whole dataset and the current aggregate column object as arguments.

**Group Aggregation:** The custom aggregate function will be called with the current group details and the aggregate column object as arguments.

Here's an example that demonstrates how to use the custom aggregate feature in the React Grid component:

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

> To access the custom aggregate value inside template, use the key as **Custom**

## Show the count of distinct values in aggregate row

You can calculate the count of distinct values in an aggregate row by using custom aggregate functions. By specifying the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) as **Custom** and providing a custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#customaggregate) property, you can achieve this behavior.

Here's an example that demonstrates how to show the count of distinct values for the **ShipCountry** column using a custom aggregate.

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

> To display the aggregate value of the current column in another column, you can use the [columnName](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#columnname) property. If the `columnName` property is not defined, the field name value will be assigned to the `columnName` property.