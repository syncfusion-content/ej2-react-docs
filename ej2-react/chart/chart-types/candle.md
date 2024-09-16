---
layout: post
title: Candle Chart in React Chart component | Syncfusion
description: Learn here all about Candle in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Candle
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Candle in React Chart component

## Candle

To render a Candle series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Candle` and inject `CandleSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/candle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/candle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/candle-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/candle-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/candle-cs1" %}

## Hollow candles

Candle charts allow to visually compare the current price with previous price by coloring them.

Candles are filled/left as hollow based on the following criteria.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>candle sticks are filled when the close value is lesser than the open value</td>
</tr>
<tr>
<td>Unfilled</td>
<td>candle sticks are unfilled when the close value is greater than the open value</td>
</tr>
</table>

The color of the candle will be defined by comparing with previous values. Bear color will be applied when the current closing value is greater than the previous closing value. Bull color will be applied when the current closing value is less than the previous closing value.

By default, bullFillColor is set as red and bearFillColor is set as green.

## Solid candles

[`enableSolidCandles`](https://ej2.syncfusion.com/react/documentation/api/chart/series#enableSolidCandles-string) is used to enable/disable the solid candles. By default is set to be false. The fill color of the candle will be defined by its opening and closing values.

[`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bearFillColor-string) will be applied when the opening value is less than the closing value.
[`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullFillColor-string) will be applied when the opening value is greater than closing value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/candle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/candle-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/candle-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/candle-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/candle-cs2" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
