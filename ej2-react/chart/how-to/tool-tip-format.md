---
layout: post
title: How to format date tooltips in React Chart | Syncfusion
description: Learn how to format date and time values in Syncfusion React Chart tooltips for clearer, locale-friendly data display.
control: Tool tip format
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to format date tooltips in React Chart

Using [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#tooltiprender) event, you can able to format the datetime value instead of rendered value.

To format the datetime value,please follow the steps below

**Step 1**:

By using [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#tooltiprender) event we can able to get the current point x value. Using this value to format the tooltip by using `formatDate` method.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs12" %}
