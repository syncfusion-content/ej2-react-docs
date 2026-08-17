---
layout: post
title: Bar Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Bar series in Syncfusion React Chart for comparing values across categories with adjustable width and spacing.
control: Bar Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bar Chart in React Chart

## Bar

To render a [bar](https://www.syncfusion.com/react-components/react-charts/chart-types/bar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#type) as `Bar` in your chart configuration. This indicates that the data should be represented as a bar chart, which makes it easy to compare values across categories.

2. **Inject the BarSeries module**: Inject the `BarSeries` module into the `services`. This step is essential, as it ensures that the necessary functionalities for rendering bar series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs27" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs27" %}

## Series customization

The following properties can be used to customize the `bar` series.

**Solid fill**

The [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#fill) property determines the color applied to the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs30/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs30" %}

**Gradient fill**

The [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#fill) property accepts an SVG gradient reference, allowing you to apply a smooth color transition to the bar series. Define the gradient with a unique ID, and assign it to the `fill` property using the `url(#gradientId)` syntax. The bar fill then transitions between the gradient stops.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs52/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs52/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs52/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs52/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs52" %}

**Opacity**

The [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs53/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs53/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs53/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs53/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs53" %}

**Border**

Use the [border](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#border) property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs55/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs55/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs55/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs55/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs55" %}

## Bar spacing and width

### Bar spacing

Use the [`columnSpacing`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#columnspacing) property in the series to adjust the space between bars. The value must be between `0` and `1` and represents the spacing between bars as a fraction of the bar width. For example, `columnSpacing=0.5` applies spacing equal to half the bar width. 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs37/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs37/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs37/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs37/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs37" %}

### Bar width

Use the [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#columnwidth) property in the series to adjust the width of the bars. The value must be between `0` and `1` and determines the relative width of each bar within the space allocated to its category. For example, `columnWidth=0.8` uses 80% of the available category width.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs59/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs59/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs59/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs59/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs59" %}

### Bar width in pixels

Use the [`columnWidthInPixel`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#columnwidthinpixel) property in the series to define the exact width of the bars in pixels. This property ensures that each bar maintains the specified width, providing a uniform appearance throughout the chart. For example, `columnWidthInPixel={50}` renders each bar 50 pixels wide.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs60/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs60/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs60/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs60/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs60" %}

## Grouped bars

Use the [`groupName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#groupname) property to group the data points in bar type charts. Data points with the same group name will be grouped together in the chart, making it easy to compare different sets of data. For example, two series that both set `groupName='A'` are rendered side-by-side within the same group, while a series with `groupName='B'` is rendered in a separate group.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/group-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/group-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/group-bar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/group-bar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/group-bar-cs1" %}

## Cylindrical bar chart

To render a cylindrical bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#columnfacet) property to `Cylinder` in the chart series. This property transforms the regular bars into cylindrical shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs39/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs39/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs39/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs39/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs39" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#mode) property of `emptyPointSettings` to control how empty points are rendered. Available modes are `Gap` (leave a break, the default), `Drop` (Ignores the empty point during rendering), `Zero` (plot as zero), and `Average` (plot as the average of neighboring points).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs56/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs56/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs56/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs56/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs56" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#fill) property of `emptyPointSettings` to set the fill color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs57/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs57/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs57/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs57/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs57" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#border) property of `emptyPointSettings` to customize the border width and color for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs58/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs58/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs58/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs58/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs58" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/series#cornerradius) property in the chart series is used to customize the corner radius for bar series. This allows you to create bars with rounded corners, giving your chart a more polished appearance. You can customize each corner of the bars using the `topLeft`, `topRight`, `bottomLeft`, and `bottomRight` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61A/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61A/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61A/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61A/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs61A" %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iPointRenderEventArgs) event by setting the `cornerRadius` property on its event argument, for example `args.cornerRadius = { topLeft: 8, topRight: 8, bottomLeft: 0, bottomRight: 0 }`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61B/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61B/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61B/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61B/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs61B" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered. Use its event arguments to modify the series data, fill, or name dynamically before rendering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs62/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs62/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs62/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs62/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs62" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event fires for each data point before it is drawn. Use its event arguments to customize the appearance of individual points before they are rendered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs61/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs61/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs61" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Color a Particular Bar](https://support.syncfusion.com/kb/article/21515/how-to-color-a-particular-bar-in-react-chart-component)