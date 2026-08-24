---
layout: post
title: Chart Series in React Chart | Syncfusion
description: Learn how to render multiple or combination of chart series in Syncfusion React Chart to compare distinct datasets in a single chart area.
control: Chart series
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart Series in React Chart

## Multiple Series

Multiple series can be added to a chart by using the [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel) property. Each series represents a distinct set of data, and all configured series are rendered in the same chart area for easy comparison.

The series are rendered in the same order in which they are defined in the `series` collection. This ordering controls the draw order of the series when they overlap; it does not, by itself, cause stacking. To stack series, use a stacking-compatible series type (for example, `StackingColumn`) and assign a common `stackingGroup` value to the related series. See the [`SeriesModel`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel) API for the full list of available series options such as [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname), [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#yname), [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource), and [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#type).

> Note: When configuring multiple series, make sure to inject the corresponding modules (for example, `ColumnSeries`, `LineSeries`, `Category`) into the `services` array. The sample below uses the [`Category`](https://ej2.syncfusion.com/react/documentation/api/chart/index-default#categorymodule) axis, so the `Category` module is required. For project setup, refer to the [Getting Started](getting-started) documentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs12" %}

## Combination Series

A combination chart allows different series types, such as Column, Line, Spline, Area, and StackingColumn, to be rendered together in a single chart. This is useful for comparing multiple datasets that have different visual encodings on a shared set of category values.

For combined series to align properly, all series must share a common `xName` (and corresponding X values) on the primary X axis. When the series have different value ranges, consider using a [Multiple Panes](multiple-panes) or a secondary Y axis.

> Note: Bar series cannot be combined with other series types because Bar uses a transposed axis (`isTransposed: true`), which is incompatible with the standard axis orientation of the other series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/combination-cs1" %}

## See also

* [Category Axis](category-axis) - Configure the X axis when sharing category values across series.
* [Markers](data-markers) - Customize the appearance of points on combined series.
* [Legend](legend) - Identify each series in a multi-series or combination chart.
* [Multiple Panes](multiple-panes) - Render series with different value ranges on separate axes.