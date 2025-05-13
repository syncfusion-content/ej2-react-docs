---
layout: post
title: Polar Chart in React Charts | Syncfusion
description: Learn here all about Polar Chart in Syncfusion React Charts component of Syncfusion Essential JS 2 and more.
control: Polar Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Polar Chart in React Charts

## Polar Chart

To render a [polar](https://www.syncfusion.com/react-components/react-charts/chart-types/polar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as `Polar` in your chart configuration. This indicates that the data should be represented as a polar chart, which is ideal for plotting data points on a circular graph.

2. **Inject the PolarSeries module**: Inject `PolarSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar series are available in your chart.

To get start quickly with React Polar and Radar Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6kn9dCOla0c" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

## Draw Types

Use the [`drawType`](../../api/chart/series/#drawtype) property to change the series plotting type in a Polar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is `Line`.

### Line

To render a line draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `Line` in your chart configuration. This indicates that the data should be represented as a polar line chart, with lines connecting each data point.

2. **Inject the LineSeries Module**: Inject `LineSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar line series are available in your chart.

The [`isClosed`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#isclosed) property specifies whether to join the start and end points of a line series used in a polar chart to form a closed path. The default value of `isClosed` is **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

### Spline

To render a spline draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `Spline` in your chart configuration. This indicates that the data should be represented as a polar spline chart, with smooth, curved lines connecting each data point.

2. **Inject the SplineSeries Module**: Inject `SplineSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar spline series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs2" %}

### Area

To render an area draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `Area` in your chart configuration. This indicates that the data should be represented as a polar area chart, with filled areas below the lines connecting each data point.

2. **Inject the AreaSeries Module**: Inject `AreaSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar area series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs3" %}

### Stacked Area

To render a stacked area draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `StackingArea` in your chart configuration. This indicates that the data should be represented as a polar stacked area chart, with areas stacked on top of each other, displaying the cumulative value of multiple series.

2. **Inject the StackingAreaSeries Module**: Inject `StackingAreaSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked area series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs4" %}

### Column

To render a column draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `Column` in your chart configuration. This indicates that the data should be represented as a polar column chart, allowing for the comparison of values across categories.

2. **Inject the ColumnSeries Module**: Inject `ColumnSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar column series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs5" %}

### Stacked Column

To render a stacked column draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `StackingColumn` in your chart configuration. This indicates that the data should be represented as a polar stacked column chart, with each column consisting of multiple segments stacked on top of each other.

2. **Inject the StackingColumnSeries Module**: Inject `StackingColumnSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked column series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs6" %}

### Range Column

To render a range column draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `RangeColumn` in your chart configuration. This indicates that the data should be represented as a polar range column chart, where each column spans a range of values.

2. **Inject the RangeColumnSeries Module**: Inject `RangeColumnSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar range column series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs7" %}

### Scatter

To render a scatter draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `Scatter` in your chart configuration. This indicates that the data should be represented as a polar scatter chart.

2. **Inject the ScatterSeries Module**: Inject `ScatterSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar scatter series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs8" %}

### Spline area

To render an spline area draw type, you need to follow a few steps to configure it correctly.

1. **Set the Series Type**: Define the series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#drawtype) as `SplineArea` in your chart configuration. This indicates that the data should be represented as a polar spline area chart, where the series is drawn with smooth, curved lines connecting each data point, and the area beneath the line is filled with color.

2. **Inject the SplineAreaSeries Module**: inject `SplineAreaSeries` module into services. This step is essential, as it ensures that the necessary functionalities for rendering polar spline area series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs12" %}

## Series customization

### Start Angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs02/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs02/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs02/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs02/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs02" %}

### Radius

You can customize the radius of the polar series using [`coefficient`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs01/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs01/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs01/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs01/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs01" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#coefficient) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs13" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/emptyPointSettingsModel/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs14" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/emptyPointSettingsModel/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs15" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iSeriesRenderEventArgs/) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs16" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iPointRenderEventArgs/) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs17" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)