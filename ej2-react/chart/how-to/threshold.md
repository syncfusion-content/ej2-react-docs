---
layout: post
title: How to add a threshold line in React Chart | Syncfusion
description: Learn how to mark a y-axis threshold line on Syncfusion React Chart using striplines to highlight reference values.
control: Threshold
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a threshold line in React Chart

You can mark a threshold in chart by using the `stripline`.

To mark a threshold in chart, follow the given steps:

**Step 1**:

By using the start and end properties of `striplines` object in vertical axis, you can mark the threshold for y values of the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs11" %}