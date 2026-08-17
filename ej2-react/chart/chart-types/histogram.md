---
layout: post
title: Histogram Chart in React Chart | Syncfusion
description: Learn to render and customize Histogram series in Syncfusion React Chart to display large data distributions with automatic binning and bin intervals.
control: Histogram
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Histogram Chart in React Chart

## Histogram Series

Follow these steps to render a [histogram](https://www.syncfusion.com/react-components/react-charts/chart-types/histogram-chart) series, which displays the distribution of large datasets by automatically grouping values into bins.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `Histogram` in the series configuration.

2. **Inject the HistogramSeries module**: Add `HistogramSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a histogram series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs3" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as data, fill, or name. Use it to change a series color or to swap its data source on the fly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs6" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. Use it to apply conditional formatting based on the point's value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs7" %}

## Histogram-specific properties

The histogram series supports the following properties in addition to the standard series options:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`binInterval`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bininterval) | number | `null` | Width of each bin along the x-axis. When omitted, the chart calculates an interval automatically based on the data range. |
| [`showNormalDistribution`](https://ej2.syncfusion.com/react/documentation/api/chart/series#shownormaldistribution) | boolean | `false` | When `true`, overlays a normal distribution curve on the bins. |
| [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/series#columnwidth) | number | `null` (histogram default `1`) | Width of each bin column as a ratio of the bin interval. Use values close to `1` so adjacent bins touch. |

Provide the data as a flat array of numeric values and map only `yName` (for example, `yName='y'`); do not set `xName`.

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)