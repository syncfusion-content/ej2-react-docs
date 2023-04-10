---
layout: post
title: Pareto Chart in React Chart component | Syncfusion
description: Learn here all about Pareto in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Pareto
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pareto in React Chart component

## Pareto

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series.
The initial values are represented by column chart and the cumulative values are represented by Line chart.
To render a pareto chart, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as
`Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs4" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)