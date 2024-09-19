---
layout: post
title: Scatter in React Chart component | Syncfusion
description: Learn here all about Scatter Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Scatter Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Scatter in React Chart component

## Bubble

To render a bubble series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Bubble` and inject `BubbleSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs33/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs33/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs33/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs33" %}

## Size mapping

`size` property can be used to map the size value specified in data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs34/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs34/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs34/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs34" %}

## Series customization

The following properties can be used to customize the `bubble` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/bubble-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/bubble-cs/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/bubble-cs/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/bubble-cs/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
