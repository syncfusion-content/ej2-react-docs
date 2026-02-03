---
layout: post
title: Technical indicators in React Chart component | Syncfusion
description: Learn here all about Technical indicators in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Technical indicators 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in React Chart component

A technical indicator is a mathematical calculation based on historical price, volume, or open‑interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into services. To calculate the signal line, the [`volume`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#volume) field must be included in the `dataSource`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs1" %}

## Average True Range (ATR)

ATR measures stock volatility by comparing the current value with the previous value. To render an Average True Range (ATR) indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Atr` and inject `AtrIndicator` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs2" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `BollingerBand` and inject the `BollingerBands` module and `RangeAreaSeries` into services. Bollinger Band is represented by three lines (`upperLine`, `lowerLine`, `signalLine`). The default values of the Bollinger Band [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#standarddeviation) is 2.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs3" %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline), and the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#lowerline) properties of the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs4" %}

## Exponential Moving Average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Ema` and inject `EmaIndicator` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs5" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Momentum` and inject the `MomentumIndicator` module into services. The Momentum indicator is represented by two lines (`upperLine`, `signalLine`). In the Momentum indicator, the `upperBand` value is always rendered at 100.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs6" %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs7" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMAs. To render a MACD indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Macd` and inject the `MacdIndicator` module into services. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs8" %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color` of `macdLine` can be customized by using the [`macdLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdline) property of the indicator. The positive and negative changes of the histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdnegativecolor) properties. The [`macdType`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdtype) is used to define the type of MACD indicator. Customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#fastperiod) properties.

By default, `macdType` is `Both`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs9" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Rsi` and inject the `RsiIndicator` module into services. The RSI indicator is represented by three lines (`upperBand`, `lowerBand`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `signalLine` is calculated using the RSI formula.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs10" %}

## Simple Moving Average (SMA)

Moving average indicators are used to define the direction of the trend. To render an SMA indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Sma` and inject the `SmaIndicator` module into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs11" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Stochastic` and inject the `StochasticIndicator` module into services. The Stochastic indicator is represented by four lines (`upperLine`, `lowerLine`, `periodLine`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `periodLine` and `signalLine` are rendered based on the stochastic formula.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs12" %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline), the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#lowerline), and the `periodLine` can be customized by using [`periodLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#periodline) properties of the indicator. Customize the period used to find the average price using [`kPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#dperiod) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs13" %}

## Triangular Moving Average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) as `Tma` and inject the `TmaIndicator` module into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs14" %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of `signalLine` can be customized by using [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#fill), [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#width), and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#dasharray) properties. The [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) property defines the number of data points used for calculations. The [`field`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#field) value determines which price value to compare with the previous price. It is applicable to Bollinger Bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#showzones) property shows or hides the overbought and oversold regions. It is applicable for RSI and Stochastic indicators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs15" %}

**Data Source**

Usually, technical indicators are added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#seriesname) represents the series whose data has to be analyzed through indicators.

Technical indicators can also be added without a series by using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#datasource) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs16" %}

**Module Dependencies**  
To render an indicator, it is mandatory to inject the `LineSeries` module using `Chart.Inject(LineSeries)`. In addition, the MACD indicator requires `ColumnSeries`, and Bollinger Bands requires `RangeAreaSeries`.