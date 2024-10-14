---
layout: post
title: High Low Open Close Chart in React Chart component | Syncfusion
description: Learn here all about High Low Open Close Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: High Low Open Close
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close in React Chart component

## High Low Open Close

To render an [`hiloOpenClose`](https://www.syncfusion.com/react-components/react-charts/chart-types/ohlc-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as `HiloOpenClose` in your chart configuration. This indicates that the data should be represented as a hiloOpenClose chart, which displays the high, low, open, and close values for each data point, providing a comprehensive visualization of stock price movements.
2. **Inject the HiloOpenCloseSeries module**: Inject `HiloOpenCloseSeries` module into the `services`. This step is essential, as it ensures that the necessary functionalities for rendering hiloOpenClose series are available in your chart.

3. **Provide high, low, open, and close values**: The `HiloOpenClose` series requires five fields (x, high, low, open, and close) to accurately display the stock's high, low, open, and close prices. Ensure that your data source includes these fields to create a detailed representation of stock price movements over time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs1" %}


## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource), [`high`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#high), [`low`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#low), [`open`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#open) and [`close`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#close) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs1" %}

## Series customization

In the `hiloOpenClose` series, the `bullFillColor` property is used to fill the segment when the open value is greater than the close value, while the `bearFillColor` property is used to fill the segment when the open value is less than the close value. By default, `bullFillColor` is set to **#e74c3d** and `bearFillColor` is set to **#2ecd71**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs2" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/emptyPointSettingsModel/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs3" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/emptyPointSettingsModel/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs4" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iSeriesRenderEventArgs/) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs5" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iPointRenderEventArgs/) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs6" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)