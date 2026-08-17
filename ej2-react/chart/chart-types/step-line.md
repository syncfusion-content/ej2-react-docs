---
layout: post
title: Step Line Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Step Line series in Syncfusion React Chart to display data with stepped horizontal and vertical lines.
control: Step Line Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Step Line Chart in React Chart

## Step line

Follow these steps to render a [step line](https://www.syncfusion.com/react-components/react-charts/chart-types/stepline-chart) series, which connects data points with horizontal and vertical lines to create a staircase effect. Use this for visualizing data that changes at distinct points rather than transitioning continuously.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `StepLine` in the series configuration.

2. **Inject the StepLineSeries module**: Add `StepLineSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a step line series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs7" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs7" %}

## Series customization

Customize the step line series appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to the series. Accepts a CSS color or a gradient reference. |
| [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) | number | `1` | Transparency of the fill (0 to 1). |
| [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#dasharray) | string | `''` | Pattern of dashes and gaps in the series line (e.g., `"5,5"`). |
| [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#width) | number | `1` | Stroke width of the series line, in pixels. |
| [`step`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#step) | [`StepPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/stepposition) | `Left` | Position of the steps relative to the data points. |
| [`noRisers`](https://ej2.syncfusion.com/react/documentation/api/chart/series#norisers) | boolean | `false` | When `true`, hides the vertical risers between data points. |

**Solid fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs1" %}

**Gradient fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property can be set to a CSS gradient reference such as `url(#gradient)` to apply a gradient color that transitions across the series. Define the gradient in an SVG `<defs>` block and reference it from the `fill` prop.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs2" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) property controls the transparency of the fill (0 to 1) and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs3" %}

**Dash array**

The [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#dasharray) property determines the pattern of dashes and gaps in the series line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs4" %}

**Width**

The [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#width) property specifies the stroke width of the series line, in pixels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs5" %}

**Step**

Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#step) property to change the position of the steps in a step line series. Valid values are `Left`, `Center`, and `Right`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs6" %}

**No risers**

You can eliminate the vertical lines between points by setting the [`noRisers`](https://ej2.syncfusion.com/react/documentation/api/chart/series#norisers) property on a series to `true`. This is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepraiser-cs/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepraiser-cs/app/index.tsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/code-path/series/stepraiser-cs/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepraiser-cs" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the series; the `mode` property on `emptyPointSettings` lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs7" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs8" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs9" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as `data`, `fill`, or `name`. For a step line series, use it to vary per-series fill between renders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs10" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. For a step line series, use it to highlight specific points or apply conditional formatting along the stepped boundary.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stepline-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stepline-cs11" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)
