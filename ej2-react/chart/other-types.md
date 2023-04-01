---
layout: post
title: Other types in React Chart component | Syncfusion
description: Learn here all about Other types in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Other types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Other types in React Chart component

To render a box and whisker chart, use series[`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as `BoxAndWhisker` and inject `BoxAndWhiskerSeries` services. The field y requires n number of data or it should contains minimum of five values to plot a segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/box-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/box-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/box-cs1" %}

## Customization of Box and Whisker series

### boxPlotMode

You can change the rendering mode of the Box and Whisker series using the `boxPlotMode` property.
The default boxPlotMode is `exclusive`.The other boxPlotMode available are `inclusive` and `normal`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/box-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/box-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/box-cs2" %}

### showMean

In Box and Whisker series  `showMean` property is used to show the box and whisker average value. The default value of `showMedian` is false.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/box-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/box-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/box-cs3" %}

## Waterfall chart

To render a waterfall series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as `Waterfall` and inject `WaterfallSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs1" %}

**Customization of Waterfall Series**

The negative changes of waterfall series is represented by using [`negativeFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#negativefillcolor) and the summary changes are represented by using [`summaryFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#summaryfillcolor) properties.

By default, the negativeFillColor as ‘#E94649’ and the summaryFillColor as ‘#4E81BC’.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs2" %}

## Error Bar Chart

Error bars are graphical representations of the variability of data and used on graphs to indicate the error or uncertainty in a reported measurement. To render the error bar for the series, set [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#visible) as `true` and inject `ErrorBar` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs1" %}

**Error Bar Type**

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalerror) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs2" %}

**Custom Error Bar**

To customize the error bar type, set error bar [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) as `Custom` and then change the horizontal/vertical positive and negative error of error bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs3" %}

**Changing Error Bar Mode**

Error bar mode is used to define whether the error bar line has to be drawn horizontally, vertically or in both side. To change the error bar mode use [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#mode) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs4" %}

**Changing Error Bar Direction**

To change the error bar direction to plus, minus or both side using [`direction`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#direction) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs5" %}

**Customizing Error Bar Cap**

To customize the error bar cap length, width and fill color, you can use [`errorBarCap`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#errorbarcap) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs6" %}

**Customizing Error Bar Color**

To customize the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error and vertical negative and positive error for an individual point using [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalerror), [`horizoontalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalnegativeerror) and [`verticalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalpositiveerror) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs7" %}

## Vertical chart

In EJ2 chart, you can draw a chart in vertical manner by changing orientation of the axis. All series types support this feature. You can use `isTransposed` property in chart to render a chart in vertical manner.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs35/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs35/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs35" %}

## Histogram Series

Histogram type charts can provide a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet form.
To render a histogram chart, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type)  as `Histogram` and
inject `HistogramSeries`  module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs3" %}

## Pareto chart

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series.
The initial values are represented by column chart and the cumulative values are represented by Line chart.
To render a pareto chart, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as
`Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/waterfall-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/waterfall-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs4" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
