---
layout: post
title: Custom aggregate in React Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in React Grid component

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#type) as **Custom**, and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for total and group aggregations.
* **Total aggregation**: The custom aggregate function will be called with the whole data and current [`AggregateColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/) object.
* **Group aggregation**: This will be called with the current group details and [`AggregateColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/) object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/aggregate-cs1" % }

> To access the custom aggregate value inside the template, use the key as **Custom**.