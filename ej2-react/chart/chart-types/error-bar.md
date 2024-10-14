---
layout: post
title: Error Bar Chart in React Chart component | Syncfusion
description: Learn here all about Error Bar in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Error Bar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar in React Chart component

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set visibility**: Set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#visible) property to **true** for the error bars to be displayed.

2. **Inject the ErrorBar module**: Inject `ErrorBar` module into the `services`. This step is essential, as it ensures that the necessary functionalities for rendering error bar series are available in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs1" %}

## Error Bar Type

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalerror) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs2" %}

## Customizing error bar type

To customize the error bar type, set the error bar [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) to `Custom`, and then change the horizontal or vertical positive and negative error values for the error bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs3" %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically or on both sides. To change the error bar mode, use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#mode) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs4" %}

## Error bar direction

To change the direction of the error bars to plus, minus, or both sides, use the [`direction`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#direction) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the length, width, opacity, and fill color of the error bar caps, you can use the [`errorBarCap`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#errorbarcap) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs6" %}

## Customizing error bar color

To customize the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error, and vertical negative and positive error for an individual point using the [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#horizontalerror), [`horizontalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#horizontalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalnegativeerror), and [`verticalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalpositiveerror) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iSeriesRenderEventArgs/) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iPointRenderEventArgs/) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs9" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
