---
layout: post
title: Waterfall Chart in React Chart component | Syncfusion
description: Learn here all about Waterfall in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Waterfall
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Waterfall in React Chart component

## Waterfall chart

To render a waterfall series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as `Waterfall` and inject `WaterfallSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs1" %}

## Series customization

The negative changes of waterfall series is represented by using [`negativeFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#negativefillcolor) and the summary changes are represented by using [`summaryFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#summaryfillcolor) properties.

By default, the negativeFillColor as ‘#E94649’ and the summaryFillColor as ‘#4E81BC’.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs2" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)