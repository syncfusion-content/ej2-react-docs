---
layout: post
title: Stacked Line Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Stacked Line series in Syncfusion React Chart to compare each series contribution to a total trend over time.
control: Stacked Line Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Line Chart in React Chart

## Stacked line

Follow these steps to render a [stacked line](https://www.syncfusion.com/react-components/react-charts/chart-types/stacked-line-chart) series, which stacks multiple line series on top of each other to compare each one's contribution to a total over time. To display proportional totals (100%), use `StackingLine100` with the same configuration.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `StackingLine` in the series configuration.

2. **Inject the StackingLineSeries module**: Add `StackingLineSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a stacked line series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs8" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs8" %}

## Series customization

Customize the stacked line series appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to the series. Accepts a CSS color or a gradient reference. |
| [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) | number | `1` | Transparency of the fill (0 to 1). |
| [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#dasharray) | string | `''` | Pattern of dashes and gaps in the series line (e.g., `"5,5"`). |
| [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#width) | number | `1` | Stroke width of the series line, in pixels. |

**Solid fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs1" %}

**Gradient fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property can be set to a CSS gradient reference such as `url(#gradient)` to apply a gradient color that transitions across the series. Define the gradient in an SVG `<defs>` block and reference it from the `fill` prop.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs2" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) property controls the transparency of the fill (0 to 1) and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs3" %}

**Dash array**

The [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#dasharray) property determines the pattern of dashes and gaps in the series line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs4" %}

**Width**

The [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#width) property specifies the stroke width of the series line, in pixels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs5" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the stack; the `mode` property on `emptyPointSettings` lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs6" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs7" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs8" %}

## Stack labels

The stack labels in stacked line, stacked area, stacked bar, and stacked column charts display cumulative total values for stack segments as inline data labels. If a stacked point has negative values, the stack labels are displayed below the point. Stack labels are independent of the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datalabel) settings within each series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs83/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs83/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs83/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs83/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs83" %}

### Stack labels customization

Stack labels have various properties for customization to enhance the visual based on your requirements:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#visible) | boolean | `false` | Specifies whether stack labels are visible. Setting to `true` displays the labels. |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#fill) | string | `transparent` | Background color of the stack labels. Accepts valid CSS color strings (hex, RGBA, etc.). |
| [`format`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#format) | string | `null` | Format string for the label text. Supports placeholders such as `{value}`. |
| [`angle`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#angle) | number | `0` | Rotation angle for stack labels in degrees. |
| [`rx`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#rx) | number | `5` | Rounded corner radius along the X-axis for the stack label background. |
| [`ry`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#ry) | number | `5` | Rounded corner radius along the Y-axis for the stack label background. |
| [`margin`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#margin) | [`MarginModel`](https://ej2.syncfusion.com/react/documentation/api/chart/marginmodel) | `null` | Margin around the stack label (`left`, `right`, `top`, `bottom`). |
| [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#border) | [`BorderModel`](https://ej2.syncfusion.com/react/documentation/api/chart/bordermodel) | `null` | Border appearance of the stack label. |
| [`font`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsettings#font) | [`StackLabelsFontModel`](https://ej2.syncfusion.com/react/documentation/api/chart/stacklabelsfontmodel) | `null` | Font customization (`size`, `color`, `fontStyle`, `fontWeight`, `fontFamily`). |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs83A/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs83A/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs83A/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs83A/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs83A" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as `data`, `fill`, or `name`. For a stacked line series, use it to vary per-series fill between renders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. For a stacked line series, use it to highlight specific points or apply conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/stackedline-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/stackedline-cs10" %}


## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)
