---
layout: post
title: Stacked Area Chart in React Chart component | Syncfusion
description: Learn here all about Stacked Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Area in React Chart component

## Stacked Area

To render a stacked area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingArea` and inject `StackingAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs15" %}

## Series customization

The following properties can be used to customize the `stacked area` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/stackedarea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/stackedarea-cs/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/stackedarea-cs/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/stackedarea-cs/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/stackedarea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
