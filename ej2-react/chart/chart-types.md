---
layout: post
title: Chart types in React Chart component | Syncfusion
description: Learn here all about Chart types in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart types in React Chart component

Essential JS 2 Chart supports 32 types of series.

<!-- markdownlint-disable MD036 -->

## Line Charts

<!-- markdownlint-disable MD036 -->
**Line**

To render a line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Line` and inject `LineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs6" %}

**Step Line**

To render a step line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StepLine` and inject `StepLineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs7" %}

**Stacked Line**

To render a stacked line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type-string) as `StackingLine` and inject `StackingLineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs8" %}

**100% Stacked Line**

To render a 100% stacked line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type-string) as `StackingLine100` and inject `StackingLineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs9" %}

**Spline**

To render a spline series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Spline` and inject `SplineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs10" %}

**Spline Area**

To render a spline series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Spline` and inject `SplineAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs11" %}

**Multicolored Line**

To render a multicolored line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Line` and inject `LineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs12" %}

**Customization of Line Charts**

`stroke`, `stroke-width` and `dashArray` of all line type series can be customized by using [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#fill), [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#width) and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#dasharray) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs13" %}

## Area Charts

**Area**

To render a area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Area` and inject `AreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/area-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/area-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/area-cs1" %}

**Spline Range Area**

The Spline Range Area Chart is used to display continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

To render a spline range area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `SplineRangeArea` and inject `SplineRangeAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs14" %}

**Stacked Area**

To render a stacked area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingArea` and inject `StackingAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs15" %}

**100% Stacked Area**

To render a 100% stacked area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingArea100` and inject `StackingAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs16" %}

**Step Area**

To render a step area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StepArea` and inject `StepAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs17" %}

**Stacked Step Area**

To render a stacked step area series, use series `type` as `StackingStepArea` and inject `StackingStepAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs18" %}

**Multicolored area**

To render a multicolored area series, use the series type as `MultiColoredArea`, and inject the `MultiColoredAreaSeries` module into the `services`. The required `segments` of the series can be customized using the `value`, `color`, and `dashArray`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs19" %}

### Customization of the series

`fill` and `dashArray` of all area type series can be customized using [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string) and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray-string) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs20" %}

### Customization of the border

The `width` and `fill` properties in the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#border-bordermodel) can be used to customize the border of all area type series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs21" %}

## Column Charts

**Column**

To render a column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Column` and inject `ColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs22" %}

**Stacked Column**

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingColumn` and inject`StackingColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs23" %}

**100% Stacked Column**

To render a 100% stacked column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingColumn100` and inject `StackingColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs24" %}

**Range Column**

To render a range column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `RangeColumn` and inject `RangeColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/rangecolumn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/rangecolumn-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/rangecolumn-cs1" %}

**Customization of Column**

<!-- markdownlint-disable MD013 -->
`fill` and `border` of all column type series can be customized using [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#border) properties. Width of the column and space between each column can be customized using [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnspacing) properties respectively. The [`columnWidthInPixel`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnwidthinpixel) property allows to specify the column width in pixel unit. For customizing a specify point, please refer the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs25" %}

**Stacking Group**

You can use the [`stackingGroup`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#stackinggroup) property to group the stacked columns and 100% stacked columns. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs26" %}

**Grouped Column**

You can use the [`groupName`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#groupname) property to group the data points in the column type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/group-column-cs1" %}

## Bar Chart

**Bar**

To render a bar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Bar` and inject `BarSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs27" %}

**Stacked bar**

To render a stacked bar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingBar` and inject `StackingBarSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs28" %}

**100% Stacked Bar**

To render a 100% stacked bar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingBar100` and inject `StackingBarSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs29" %}

**Customization of Bar Series**

`fill` and `border` of all bar type series can be customized using [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#border). Width of the bar and space between each bar can be customized using [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnspacing) properties respectively. The [`columnWidthInPixel`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#columnwidthinpixel) property allows to specify the bar width in pixel unit. For customizing a specify point, please refer the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs30" %}

**Stacking Group**

You can use the [`stackingGroup`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#stackinggroup) property to group the stacked bar and 100% stacked bar. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs31" %}

**Grouped Bar**

You can use the [`groupName`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#groupname) property to group the data points in the Bar type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/group-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/group-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/group-bar-cs1" %}

## Scatter Charts

To render a scatter series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Scatter` and inject `ScatterSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs32" %}

## Bubble Chart

To render a bubble series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Bubble` and inject `BubbleSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs33" %}

**Bubble Size Mapping**

`size` property can be used to map the size value specified in data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs34" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
