---
layout: post
title: Range Column Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Range Column series in Syncfusion React Chart to visualize data ranges with paired high and low columns per category.
control: Range Column Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Range Column Chart in React Chart

## Range column

Follow these steps to render a [range column](https://www.syncfusion.com/react-components/react-charts/chart-types/range-column-chart) series, which renders a floating column between a high and a low value for each category. Use it to visualize data ranges, such as temperature fluctuations or stock prices.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `RangeColumn` in the series configuration.

2. **Inject the RangeColumnSeries module**: Add `RangeColumnSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a range column series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series `xName`, `high`, and `low` properties. The `RangeColumn` series requires two y-values per category: `high` defines the top of the column and `low` defines the bottom. Each data point should also have an `xName` value for the x-axis category.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs1" %}

## Series customization

Customize the range column's appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to the columns. Accepts a CSS color or a gradient reference. |
| [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) | number | `1` | Transparency of the fill (0 to 1). |
| [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) | [`BorderModel`](https://ej2.syncfusion.com/react/documentation/api/chart/bordermodel) | `null` | Border settings: `width`, `color`, and `dashArray`. |
| [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#cornerradius) | [`CornerRadiusModel`](https://ej2.syncfusion.com/react/documentation/api/chart/cornerradiusmodel) | `{ topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }` | Corner radius for each column. |

**Solid fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property determines the color applied to the columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs" %}

**Gradient fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property can be set to a CSS gradient reference such as `url(#gradient)` to apply a gradient color that transitions smoothly across the columns. Define the gradient in an SVG `<defs>` block and reference it from the `fill` prop.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs2" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs3" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) property to configure the border `width`, `color`, and `dashArray` of the range column series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs5" %}


## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the column; the `mode` property lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs6" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs7" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs8" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/series#cornerradius) property customizes the corner radius for the range column series, letting you create columns with rounded corners. Customize each corner with the `topLeft`, `topRight`, `bottomLeft`, and `bottomRight` sub-properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10A/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10A/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10A/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10A/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs10A" %}

### Point corner radius

Use the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event to set a per-point `cornerRadius` by assigning to `args.cornerRadius` (with `topLeft`, `topRight`, `bottomLeft`, `bottomRight`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10B/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10B/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10B/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10B/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs10B" %}


## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as data, fill, or name. For a range column series, use it to change column colors per render or to swap data sources on the fly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point color, border, or corner radius. For a range column series, use it to color the high and low columns differently or to apply conditional corner radius.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/rangecolumn-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/rangecolumn-cs10" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)