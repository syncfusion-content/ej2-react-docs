---
layout: post
title: Histogram Chart in React Chart component | Syncfusion
description: Learn here all about Histogram in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Histogram
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Histogram in React Chart component

## Histogram Series

Histogram type charts can provide a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet form.
To render a histogram chart, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type)  as `Histogram` and
inject `HistogramSeries`  module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs3" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)