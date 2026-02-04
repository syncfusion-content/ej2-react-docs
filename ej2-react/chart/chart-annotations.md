---
layout: post
title: Chart annotations in React Chart component | Syncfusion
description: Learn here all about Chart annotations in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart annotations 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart annotations in React Chart component

Chart annotations allow highlighting specific areas of the chart using text, shapes, images, or custom HTML elements. Annotations can be used to emphasize trends, mark thresholds, show custom notes, or display additional information directly inside the chart area.

Annotations are added using the `annotations` option. Set the [`content`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAnnotationSettingsModel#content) property to reference the element that should be rendered within the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs3" %}

> Note: To use the annotation feature, inject the `ChartAnnotation` module into the `services`.

## Region

Annotations can be positioned relative to either the overall `Chart` area or a specific `Series`. When placed relative to the chart, the annotation uses the chart’s coordinate system. When placed relative to a series, the annotation aligns with that series' data points. By default, annotations are placed with respect to the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs4" %}

## Coordinate Units

Use the `coordinateUnits` property to define how annotation coordinates are interpreted. Choose between:

- **Pixel** – The annotation is positioned using fixed pixel values within the chart area.  
- **Point** – The annotation is positioned based on chart data points (x and y values).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs5" %}

## See Also

* [Show total stacking values in data label](./how-to#show-the-total-value-for-stacking-series-in-data-label)
* [Create footer and watermark for chart](./how-to#create-footer-and-watermark-for-chart)