---
layout: post
title: Line Chart in React Chart component | Syncfusion
description: Learn here all about Line Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Line Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Line Chart in React Chart component

<!-- markdownlint-disable MD036 -->

## Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Line` and inject `LineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs6" %}

## Multicolored Line

To render a multicolored line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Line` and inject `LineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs12" %}

## Series customization

The following properties can be used to customize the `line` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs13" %}

## See Also

* [Data label](./data-labels)
* [Tooltip](./tool-tip)
