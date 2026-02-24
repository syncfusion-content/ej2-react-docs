---
layout: post
title: Live chart in React Chart component | Syncfusion
description: Learn here all about Live chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Live chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Live chart in React Chart component

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