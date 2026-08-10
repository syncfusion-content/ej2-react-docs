---
layout: post
title: How to create a live chart in React Chart | Syncfusion
description: Learn how to create a live Syncfusion React Chart that updates with new data in real time for dynamic dashboards and monitoring.
control: Live chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a live chart in React Chart

You can update a chart with live data by using the set interval.

To update live data in a chart, follow the given steps:

**Step 1**:

Initialize the chart with series.

**Step 2**:

Update the data to series using set interval, and shift the data in the series to make the series look like moving.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs5" %}