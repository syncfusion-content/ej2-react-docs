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

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) as **Custom**, and provide the custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for total and group aggregations.
* **Total aggregation**: The custom aggregate function will be called with the whole data and current [AggregateColumn](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/) object.
* **Group aggregation**: This will be called with the current group details and [AggregateColumn](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/) object.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs1" %}

> To access the custom aggregate value inside the template, use the key as **Custom**.