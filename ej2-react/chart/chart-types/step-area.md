---
layout: post
title: Step Area Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Step Area series in Syncfusion React Chart to display data with stepped filled regions for discrete value changes.
control: Step Area Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Step Area Chart in React Chart

## Step area

Follow these steps to render a [step area](https://www.syncfusion.com/react-components/react-charts/chart-types/step-area-chart) series, which fills the region between a baseline and a stepped line that connects data points vertically and horizontally. Use this for visualizing discrete value changes between consecutive x values.

1. **Set the series type**: Set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#type) to `StepArea` in the series configuration.

2. **Inject the StepAreaSeries module**: Add `StepAreaSeries` to the `services` array of the `Inject` component inside `ChartComponent`. This registers the functionality required to render a step area series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs17" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs17" %}

## Series customization

Customize the step area series appearance with the following properties. Defaults are taken from the standard [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) model.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) | string | `null` | Color applied to the series. Accepts a CSS color or a gradient reference. |
| [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) | number | `1` | Transparency of the fill (0 to 1). |
| [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) | [`BorderModel`](https://ej2.syncfusion.com/react/documentation/api/chart/bordermodel) | `null` | Border settings: `width`, `color`, and `dashArray`. |
| [`step`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#step) | [`StepPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/stepposition) | `Left` | Position of the steps relative to the data points. |
| [`noRisers`](https://ej2.syncfusion.com/react/documentation/api/chart/series#norisers) | boolean | `false` | When `true`, hides the vertical risers between data points. |

**Solid fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs" %}

**Gradient fill**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#fill) property can be set to a CSS gradient reference such as `url(#gradient)` to apply a gradient color that transitions across the series. Define the gradient in an SVG `<defs>` block and reference it from the `fill` prop.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs1" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#opacity) property controls the transparency of the fill (0 to 1) and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs2" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#border) property to configure the border `width`, `color`, and `dashArray` of the step area series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs3" %}

**Step**

Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#step) property to change the position of the steps in a step area series. Valid values are `Left`, `Center`, and `Right`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs4" %}

**No risers**

You can eliminate the vertical lines between points by setting the [`noRisers`](https://ej2.syncfusion.com/react/documentation/api/chart/series#norisers) property on a series to `true`. This is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparearaiser-cs/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparearaiser-cs/app/index.tsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/code-path/series/steparearaiser-cs/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparearaiser-cs" %}


## Empty points

Data points with `null` or `undefined` values are considered empty. By default (`mode: 'Gap'`), empty points leave a gap in the series; the `mode` property on `emptyPointSettings` lets you change how they are handled.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs5" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs6" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered and lets you modify series properties such as `data`, `fill`, or `name`. For a step area series, use it to vary per-series fill between renders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires before each data point is drawn, letting you customize per-point marker shape, border, or fill. For a step area series, use it to highlight specific points or apply conditional formatting along the stepped boundary.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/steparea-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/steparea-cs9" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Axis customization](../axis-customization)
* [Legend](../legend)
