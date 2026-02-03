---
layout: post
title: Financial types in React Chart component | Syncfusion
description: Learn here all about Financial types in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Financial types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Financial types in React Chart component

Financial charts are used to illustrate the movements in the price of a financial instrument over time.

To get start quickly with React Financial Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nxcMqkfI-nA" %}

Chart supports the following financial series

<!-- markdownlint-disable MD036 -->

## Hilo

To render a Hilo series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) as `Hilo` and inject `HiloSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hilo-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hilo-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hilo-cs1" %}

## High Low Open Close

To render a HiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) as `HiloOpenClose` and inject `HiloOpenCloseSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs1" %}

## Customization of HiloOpenClose Series

In HiloOpenClose series, [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullfillcolor) is used to fill the segment when the open value is greater than the close value and [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bearfillcolor) is used to fill the segment when the open value is less than the close value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs2" %}

## Candle

To render a Candle series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) as `Candle` and inject `CandleSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/candle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/candle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/candle-cs1" %}

### Hollow Candles

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

### Solid Candles

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/candle-cs2" %}