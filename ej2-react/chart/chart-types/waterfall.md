---
layout: post
title: Waterfall Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Waterfall series in Syncfusion React Chart to visualize cumulative effects of positive and negative values.
control: Waterfall
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Waterfall Chart in React Chart

## Waterfall Chart

Follow these steps to render a [waterfall](https://www.syncfusion.com/react-components/react-charts/chart-types/waterfall-chart) series, which visualizes the cumulative effect of sequentially introduced positive and negative values. Each bar connects to the next, making intermediate and running totals easy to follow.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `Waterfall` in the series configuration.

2. **Inject the WaterfallSeries module**: Add `WaterfallSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a waterfall series.

3. **Configure intermediate and cumulative sums**: Use the [`intermediateSumIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#intermediatesumindexes) property to mark intermediate sum values, and the [`sumIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#sumindexes) property to mark cumulative sum values. Both accept an array of zero-based `x` indices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs1" %}

## Series customization

Customize the waterfall series appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to positive (increase) and intermediate segments. |
| [`negativeFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#negativefillcolor) | string | `"#C64E4A"` | Color for negative (decrease) segments. |
| [`summaryFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#summaryfillcolor) | string | `"4E81BC"` | Color for cumulative summary segments. |
| [`intermediateSumIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#intermediatesumindexes) | `number[]` | `[]` | Indices into the `x` data at which intermediate sums are computed and visualized. |
| [`sumIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#sumindexes) | `number[]` | `[]` | Indices into the `x` data at which final cumulative sums are computed and visualized. |

The [`negativeFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#negativefillcolor) property specifies the color for negative (decrease) segments, helping visually distinguish reductions in the data. The [`summaryFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#summaryfillcolor) property specifies the color for cumulative summary segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs2" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the series; the `mode` property on `emptyPointSettings` lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs17" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs18" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs19" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as `data`, `fill`, or `name`. For a waterfall series, use it to vary per-series fill colors or to dynamically swap data sources between renders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs20" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. For a waterfall series, use it to apply conditional coloring based on whether a segment is positive, negative, intermediate, or summary.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/waterfall-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/waterfall-cs21" %}


## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)