---
layout: post
title: React TreeGrid Custom Aggregate | Syncfusion
description: Learn about implementing custom aggregates in the Angular TreeGrid, including configuration and usage of custom aggregation functions.
control: Custom aggregate
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Aggregate in React TreeGrid

Custom aggregates calculate summary values using application-defined functions. To enable custom aggregation, set [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel#type) to **Custom** and provide the aggregate function through the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel#customaggregate) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs2" %}

> To access the custom aggregate value inside a template, use the key **Custom**.