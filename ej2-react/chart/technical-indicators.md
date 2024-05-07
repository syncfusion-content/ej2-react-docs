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

A technical indicator is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock. To render a Accumulation Distribution Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into services. To calculate the signal line [`volume`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#volume) field is additionally added with `dataSource`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs1" %}

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value.
To render a Average True Range (ATR) Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Atr` and inject `AtrIndicator` into services

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs2" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices.
To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `BollingerBand` and inject `BollingerBands` module and `RangeAreaSeries` into services.
Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).
The default values of the Bollinger Band [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#period) is 14 and[`standardDeviations`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#standarddeviation) is 2.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs3" %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#upperline), and the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#lowerline) properties of indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs4" %}

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Ema` and inject `EmaIndicator` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs5" %}

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Momentum`and inject `MomentumIndicator` module into services. Momentum indicator will be represented by two lines (upperLine, signalLine). In momentum indicator the upperBand value is always renders at the value 100.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs6" %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#upperline) property of indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs7" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Macd` and inject `MacdIndicator` module using into services. MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs8" %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color`of macdLine can be customized by using,[`macdLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#macdline), property of indicator. The positive and negative changes of histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#macdnegativecolor) properties. The [`macdType`] is used to define the type of MACD indicator. To customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#fastperiod)properties.

By default `macdType` as 'Both'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs9" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Rsi` and inject `RsiIndicator` module into services. RSI indicator will be represented by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#oversold) properties of indicator and the signalLine is calculated by RSI formula.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs10" %}

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Sma` and inject `SmaIndicator` module into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs11" %}

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Stochastic` and inject `StochasticIndicator` module into services.
stochastic indicator will be represented by four lines (upperLine, lowerLine, periodLine, signalLine).
In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#oversold)properties of indicators and the periodLine and signalLine is render based on stochastic formula.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs12" %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#upperline), the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#lowerline) and the periodLine can be customized by using [`periodLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#periodline) properties of indicator. To customize the period to find the average price using [`kPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#dperiod) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs13" %}

## Triangular Moving Average (TMA)

Moving average Indicators are used to define the direction of the trend. To render a TMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#type) as `Tma` and inject `TmaIndicator` module into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs14" %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of signalLine can be customized by using,[`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#fill), [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#width) and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#dasharray) properties. and the [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#period) property is used to predict the data forecast calculations. The [`field`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#field) value is used to the compare the current price with previous price. It is applicable to Bollinger bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#showzones) property is used to shows/Hides the overBought and overSold regions. It is applicable for RSI and stochastic indicators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs15" %}

**Data Source**

Usually technical indicators are added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#seriesname) represents the series, the data of which has to be analysed through indicators.

Technical indicators can also be added without series using [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel/#datasource) property of indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/technical-indicators-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/technical-indicators-cs16" %}

**Module Dependencies**
To render a Indicator, it is mandatory to inject `LineSeries` module using `Chart.Inject(LineSeries)`.
In addition to that, MACD Indicator requires `ColumnSeries` and BollingerBands requires `RangeAreaSeries`.
