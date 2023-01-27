---
layout: post
title: Custom aggregate in React Treegrid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in React Treegrid component

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) as **Custom**, and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#customaggregate) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs2" %}

> To access the custom aggregate value inside the template, use the key as **Custom**.