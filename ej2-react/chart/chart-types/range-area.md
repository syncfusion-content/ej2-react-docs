---
layout: post
title: Range Area Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Range Area series in Syncfusion React Chart to visualize value ranges between high and low with smooth filled regions.
control: Range Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Range Area Chart in React Chart

## Range area

Follow these steps to render a [range area](https://www.syncfusion.com/react-components/react-charts/chart-types/range-area-chart) series, which fills the area between an upper and lower bound for each data point. Use it to visualize data with a value range, such as temperature or stock prices.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `RangeArea` in the series configuration.

2. **Inject the RangeAreaSeries module**: Add `RangeAreaSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a range area series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs2" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName`, `high`, and `low` properties. The `RangeArea` series requires two y-values per point: `high` defines the upper bound and `low` the lower bound of the filled area. Each data point should also have an `xName` value for the x-axis category.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs2" %}

## Series customization

Customize the range area's appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to the area. Accepts a CSS color or a gradient model. |
| [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) | number | `1` | Transparency of the fill (0 to 1). |
| [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) | [`BorderModel`](https://ej2.syncfusion.com/react/documentation/api/chart/bordermodel) | `null` | Border settings: `width`, `color`, and `dashArray` (e.g., `'5 5'`). |

**Solid fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property determines the color applied to the area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs1" %}

**Gradient fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property can be set to a CSS gradient reference such as `url(#gradient)` to apply a gradient color that transitions smoothly across the area. Define the gradient in an SVG `<defs>` block and reference it from the `fill` prop.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs3" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs4" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) property to configure the border `width`, `color`, and `dashArray` of the range area series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs5" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the area; the `mode` property lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs6" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs7" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs8" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as data, fill, or name. For a range area series, use it to change the area color or to swap data sources on the fly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. For a range area series, use it to color the upper and lower bounds differently.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangearea-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangearea-cs10" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)
