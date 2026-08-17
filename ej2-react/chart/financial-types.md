---
layout: post
title: Financial Types in React Chart | Syncfusion
description: Learn how to render Hilo, candle, and Hilo Open-Close financial chart types in Syncfusion React Chart for market data visualization.
control: Financial types
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Financial Types in React Chart

Financial charts illustrate the price movements of a financial instrument over time.

To get started quickly with React financial charts, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=nxcMqkfI-nA" %}

The Chart component supports the following financial series:

<!-- markdownlint-disable MD036 -->

## Hilo

To render a Hilo series, set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) to `Hilo` and inject the `HiloSeries` module via the `services` prop of `<Inject>`.

**Required data fields:** The data source must contain an `x` value, a `low` value, and a `high` value. Map the `xName`, `low`, and `high` properties of the `SeriesDirective` to the corresponding fields in your data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hilo-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hilo-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hilo-cs1" %}

## Hilo Open Close

To render a Hilo Open Close series, set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) to `HiloOpenClose` and inject the `HiloOpenCloseSeries` module via the `services` prop of `<Inject>`.

**Required data fields:** The data source must contain `x`, `low`, `high`, `open`, and `close` values. Map the `xName`, `low`, `high`, `open`, and `close` properties of the `SeriesDirective` to the corresponding fields in your data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs1" %}

### Customization of Hilo Open Close Series

In the Hilo Open Close series, the [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullfillcolor) is used to fill the segment when the open value is greater than the close value, and the [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bearfillcolor) is used to fill the segment when the open value is less than the close value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs2" %}

## Candle

To render a Candle series, set the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) to `Candle` and inject the `CandleSeries` module via the `services` prop of `<Inject>`.

**Required data fields:** The data source must contain `x`, `low`, `high`, `open`, and `close` values. Map the `xName`, `low`, `high`, `open`, and `close` properties of the `SeriesDirective` to the corresponding fields in your data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs1" %}

### Hollow Candles

Candle charts allow you to visually compare the current price with the previous price by coloring them.

Candles are filled or left as hollow based on the following criteria:

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>Filled</td>
<td>Candles are filled when the close value is lesser than the open value.</td>
</tr>
<tr>
<td>Unfilled</td>
<td>Candles are unfilled when the close value is greater than the open value.</td>
</tr>
</table>

The color of each candle is determined by comparing it with the previous value. The **bull** color is applied when the current closing value is greater than the previous closing value. The **bear** color is applied when the current closing value is less than the previous closing value.

By default, `bullFillColor` is set to red and `bearFillColor` is set to green.

### Solid Candles

The [`enableSolidCandles`](https://ej2.syncfusion.com/react/documentation/api/chart/series#enablesolidcandles) property is used to enable or disable solid candles. By default, it is set to `false`. When enabled, the fill color of each candle is defined by its opening and closing values.

The [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bearfillcolor) is applied when the opening value is less than the closing value. The [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullfillcolor) is applied when the opening value is greater than the closing value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/candle-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/candle-cs2" %}

## See also

* [Technical Indicators](./technical-indicators)
* [Tooltip](./tool-tip)
* [Chart Series in React Chart](./chart-series)