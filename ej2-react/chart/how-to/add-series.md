---
layout: post
title: Add series in React Chart component | Syncfusion
description: Learn here all about Add series in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Add series 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add series in React Chart component

You can add or remove the chart series dynamically by using the `addSeries` or `removeSeries` method.

To add or remove the series dynamically, follow the given steps:

**Step 1**:

To add a new series to chart dynamically, pass the series value to the `addSeries` method.

To remove the new series from chart dynamically, pass the series index to the `removeSeries` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/add-series-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/add-series-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/add-series-cs1" %}