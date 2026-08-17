---
layout: post
title: Candle Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Candle series in Syncfusion React Chart to visualize stock price movements with high, low, open, and close values.
control: Candle
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Candle Chart in React Chart

## Candle

The Candle series, similar to the Hilo Open Close series, is used to represent the low, high, open, and closing prices over time. It is commonly used in financial charts to visualize stock price movements.

To render a [`candle`](https://ej2.syncfusion.com/react/demos/#/bootstrap5/chart/candle.html) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#type) as `Candle` in your chart configuration. This indicates that the data should be represented as a candle chart, providing a detailed view of stock price fluctuations by displaying the high, low, open, and close values for each time period.

2. **Inject the CandleSeries module**: Inject the `CandleSeries` module into the chart's `services` using `<Inject services={...} />`. The samples below also inject `Category` so the x-axis renders month labels correctly. Inject additional modules such as `Tooltip`, `Crosshair`, or `Zoom` if your scenario requires them.

3. **Provide high, low, open, and close values**: The `Candle` series requires five fields (x, high, low, open, and close) to accurately display the stock's high, low, open, and close prices. Ensure that your data source includes these fields to create a detailed representation of stock price movements over time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname), [`high`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#high), [`low`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#low), [`open`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#open) and [`close`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#close) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs1" %}

## Hollow candles

Hollow candles in candle charts allow you to visually compare the current price with the previous price by coloring them differently. This is the default rendering mode (when `enableSolidCandles` is **false**). The candles are filled or left hollow based on the following criteria:

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>States</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>Filled</td>
<td>Candlesticks are filled when the close value is less than the open value, indicating a price drop.</td>
</tr>
<tr>
<td>Unfilled</td>
<td>Candlesticks are unfilled when the close value is greater than the open value, indicating a price rise.</td>
</tr>
</table>

The candle color is determined by comparing the current closing value with the previous closing value. In hollow-candle mode, the candle body is filled or hollow based on the relationship between its own opening and closing values, as described in the table above.

By default, the `bullFillColor` is set to **red** and the `bearFillColor` is set to **green**.

To customize the colors, set the [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#bullfillcolor) and [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#bearfillcolor) properties on the series.

## Solid candles

The [`enableSolidCandles`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#enablesolidcandles) property is used to enable or disable solid candles. By default, it is set to **false** (hollow candles). When set to **true**, the fill color of each candle is determined by its opening and closing values:

* The [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#bearfillcolor) is applied when the opening value is less than the closing value (price rose during the period).
* The [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#bullfillcolor) is applied when the opening value is greater than the closing value (price fell during the period).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs2" %}

## Empty points

Data points with `null`, `undefined`, or `NaN` values are considered empty. By default (`Gap` mode), empty data points leave a gap and are not plotted on the chart. The behavior can be customized using the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#mode) and [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#fill) properties of `emptyPointSettings`.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#mode) property to control handling of empty points. Available modes are `Gap` (leave a break, the default), `Drop` (ignores the empty point during rendering), `Zero` (plot as zero), and `Average` (plot as the average of neighboring points).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs3" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptyPointSettingsModel#fill) property to set the fill color for the empty candle. In the following sample, the empty candle is rendered in **blue** and its `open` value is computed using `Average` mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs4" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event fires before each series is rendered. Use its event arguments to modify the series data, fill, or name dynamically before rendering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs5" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs6" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
