 ---
layout: post
title: Technical indicators in React Chart | Syncfusion
description: Learn how to overlay technical indicators on Syncfusion React Chart to enhance financial analysis, visualize trends, and support informed decisions.
control: Technical indicators
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in React Chart

A technical indicator is a mathematical calculation based on historical price, volume, or open‑interest information that aims to forecast financial market direction.

The React Chart component supports the following 10 types of technical indicators:

- [Accumulation Distribution](#accumulation-distribution)
- [Average True Range (ATR)](#average-true-range-atr)
- [Bollinger Bands](#bollinger-bands)
- [Exponential Moving Average (EMA)](#exponential-moving-average-ema)
- [Momentum](#momentum)
- [Moving Average Convergence Divergence (MACD)](#moving-average-convergence-divergence-macd)
- [Relative Strength Index (RSI)](#relative-strength-index-rsi)
- [Simple Moving Average (SMA)](#simple-moving-average-sma)
- [Stochastic](#stochastic)
- [Triangular Moving Average (TMA)](#triangular-moving-average-tma)

## Data Source

Technical indicators are usually added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#seriesname) property represents the series whose data has to be analyzed through the indicator. The linked series must provide OHLC (and where required, `volume`) fields.

Technical indicators can also be added without a series by using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#datasource) property of the indicator. When `dataSource` is set, it overrides the data of the series referenced by `seriesName`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs16" %}

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into services. The [`volume`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#volume) field is required in the `dataSource` to compute the indicator.

**Required modules:** `LineSeries`, `AccumulationDistributionIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs1" %}

## Average True Range (ATR)

ATR measures stock volatility by computing the True Range (the greatest of: high minus low, absolute high minus previous close, and absolute low minus previous close) and applying Wilder smoothing over the period. To render an ATR indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Atr` and inject `AtrIndicator` into services. The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14.

**Required modules:** `LineSeries`, `AtrIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs2" %}

## Bollinger Bands

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render Bollinger Bands, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `BollingerBand` and inject the `BollingerBands` module and `RangeAreaSeries` into services. Bollinger Bands are represented by three lines: `upperLine`, `lowerLine`, and `middleLine` (the basis/SMA). The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14 and the default [`standardDeviation`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#standarddeviation) is 2. The `period` accepts positive integers; the `standardDeviation` typically ranges from 1 to 3.

**Required modules:** `LineSeries`, `BollingerBands`, `RangeAreaSeries`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs3" %}

### Customization of Bollinger Bands

The `fill`, `width`, and `dashArray` of the `upperLine` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline) property, and the `lowerLine` can be customized by using the [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#lowerline) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs4" %}

## Exponential Moving Average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Ema` and inject `EmaIndicator` into services. The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14.

**Required modules:** `LineSeries`, `EmaIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs5" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Momentum` and inject the `MomentumIndicator` module into services. The Momentum indicator is represented by two lines: `upperBand` and `signalLine`. The `upperBand` value is always rendered at 100. The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14.

**Required modules:** `LineSeries`, `MomentumIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs6" %}

### Customization of Momentum

The `fill`, `width`, and `dashArray` of the `upperBand` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline) property of the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs7" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMAs. To render a MACD indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Macd` and inject the `MacdIndicator` module into services. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line. The default `slowPeriod` is 26, the default `fastPeriod` is 12, and the default `period` is 9.

**Required modules:** `LineSeries`, `ColumnSeries`, `MacdIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs8" %}

### Customization of MACD

The `fill`, `width`, and `dashArray` of the `macdLine` can be customized by using the [`macdLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdline) property of the indicator. The positive and negative changes of the histogram can be customized by the [`macdPositiveColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdnegativecolor) properties. The [`macdType`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#macdtype) is used to define the type of MACD indicator. Valid values are `Both`, `Line`, and `Histogram`. By default, `macdType` is set to `Both`. Customize the MACD period using the [`slowPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#fastperiod) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs9" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Rsi` and inject the `RsiIndicator` module into services. The RSI indicator is represented by three lines: `upperBand`, `lowerBand`, and `signalLine`. The `upperBand` and `lowerBand` values are customized by the [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `signalLine` is calculated using the RSI formula. The defaults are `overBought` = 70, `overSold` = 30, and `period` = 14. Use the [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#showzones) property to show or hide the overbought and oversold regions.

**Required modules:** `LineSeries`, `RsiIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs10" %}

## Simple Moving Average (SMA)

Moving average indicators are used to define the direction of the trend. To render an SMA indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Sma` and inject the `SmaIndicator` module into services. The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14.

**Required modules:** `LineSeries`, `SmaIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs11" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Stochastic` and inject the `StochasticIndicator` module into services. The Stochastic indicator is represented by four lines: `upperLine`, `lowerLine`, `kLine` (%K), and `signalLine` (%D). The `upperBand` and `lowerBand` values are customized by the [`overBought`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `kLine` and `signalLine` are rendered based on the stochastic formula. The defaults are `overBought` = 80, `overSold` = 20, `kPeriod` = 14, and `dPeriod` = 3. Use the [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#showzones) property to show or hide the overbought and oversold regions.

**Required modules:** `LineSeries`, `StochasticIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs12" %}

### Customization of Stochastic

The `fill`, `width`, and `dashArray` of the `upperLine` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#upperline) property, the `lowerLine` can be customized by using the [`lowerLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#lowerline) property, and the `kLine` can be customized by using the [`periodLine`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#periodline) property of the indicator. Customize the period used to find the average price using the [`kPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#dperiod) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs13" %}

## Triangular Moving Average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA indicator, set indicator [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#type) to `Tma` and inject the `TmaIndicator` module into services. TMA requires OHLC fields in the `dataSource`. The default [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) is 14.

**Required modules:** `LineSeries`, `TmaIndicator`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs14" %}

## General Customization

The `fill`, `width`, and `dashArray` of the `signalLine` can be customized by using the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#fill), [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#width), and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#dasharray) properties. The [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#period) property defines the number of data points used for calculations. The [`field`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#field) value determines which price value is used for the calculation. It is applicable to Bollinger Bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#showzones) property shows or hides the overbought and oversold regions. It is applicable to RSI and Stochastic indicators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/technical-indicators-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/technical-indicators-cs15" %}

## Module Dependencies

To render any indicator, inject the `LineSeries` module using `Chart.Inject(LineSeries)`. The following additional modules are required per indicator:

| Indicator | Additional required modules |
| --- | --- |
| Accumulation Distribution | `AccumulationDistributionIndicator` |
| ATR | `AtrIndicator` |
| Bollinger Bands | `BollingerBands`, `RangeAreaSeries` |
| EMA | `EmaIndicator` |
| Momentum | `MomentumIndicator` |
| MACD | `ColumnSeries`, `MacdIndicator` |
| RSI | `RsiIndicator` |
| SMA | `SmaIndicator` |
| Stochastic | `StochasticIndicator` |
| TMA | `TmaIndicator` |

For the full list of chart modules, see [Chart feature modules](feature-modules.md).

## Troubleshooting

- **Indicator does not render** — Ensure both `LineSeries` and the indicator-specific module are injected via `Chart.Inject(...)`.
- **Volume-required indicators (Accumulation Distribution) show no data** — Verify the [`volume`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#volume) field is present in your `dataSource`.
- **RSI/Stochastic lines are clipped** — Adjust the Y-axis range so the overbought/oversold bands fit, or set [`showZones`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel#showzones) to `false`.
- **MACD histogram missing** — Inject `ColumnSeries` in addition to `MacdIndicator`.

## Accessibility

For information on building accessible charts (keyboard navigation, screen reader labels, and high-contrast support), see [Accessibility in React Charts](accessibility.md).

## See also

- [Chart series](chart-series.md)
- [Financial chart types](financial-types.md)
- [API reference: technicalIndicatorModel](https://ej2.syncfusion.com/react/documentation/api/chart/technicalIndicatorModel)
