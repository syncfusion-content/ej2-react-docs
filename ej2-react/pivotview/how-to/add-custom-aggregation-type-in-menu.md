---
layout: post
title: Add custom aggregation type to the menu in React Pivotview component | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Add custom aggregation type to the menu 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to the menu in React Pivotview component

By using the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview#databound) event, you can add your own custom aggregate type(s) to the pivot table's aggregate menu.

In the following example, we have added the aggregation types **CustomAggregateType 1** and **CustomAggregateType 2** to the aggregate menu. The calculation for those aggregated types can be done using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview#aggregatecellinfo) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs317/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs317/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs317" %}