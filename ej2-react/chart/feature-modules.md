---
layout: post
title: Feature Modules in React Chart | Syncfusion
description: Learn how to load Syncfusion React Chart feature modules on demand to keep your bundle size small and load only what you need.
control: Module
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Feature Modules in React Chart

Chart features in the Syncfusion React Chart are opt-in. To use a specific series, axis, indicator, or feature such as tooltip, legend, or zoom, the corresponding module must be injected. Modules keep the base bundle small and let you include only what your chart needs.

## Injecting modules

Import the modules you need from `@syncfusion/ej2-react-charts` and register them on the `Chart` class using the static `Inject` method. Place the `Inject` call once, outside the component function, so it runs when the module loads.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

> Tip: Importing only the modules you use enables tree-shaking and reduces the final bundle size.

The available chart modules are listed below.

## Axis Type Feature Modules

| Module | Description |
|------|-------------|
| [`Category`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) | Inject this module to use the category axis type to visualize category (string) values. |
| [`DateTime`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) | Inject this module to use the date time axis type to visualize datetime values. |
| [`Logarithmic`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) | Inject this module to use the log axis type to visualize logarithmic values. |
| [`DateTimeCategory`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) | Inject this module to use the date time category axis type to visualize datetime category values. |

## Series Type Feature Modules

| Module | Description |
|------|-------------|
| [`LineSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the line type series in the chart. |
| [`StepLineSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the step line type series in the chart. |
| [`StackingLineSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the stacking line type series in the chart. |
| [`MultiColoredLineSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the multi-colored line type series in the chart. |
| [`SplineSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the spline type series in the chart. |
| [`AreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the area type series in the chart. |
| [`RangeAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the range area type series in the chart. |
| [`RangeStepAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the range step area type series in the chart. |
| [`SplineRangeAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the spline range area type series in the chart. |
| [`StackingAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the stacking area type series in the chart. |
| [`StackingStepAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the stacking step area type series in the chart. |
| [`StepAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the step area type series in the chart. |
| [`SplineAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the spline area type series in the chart. |
| [`MultiColoredAreaSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the multi-colored area type series in the chart. |
| [`ColumnSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the column type series in the chart. |
| [`RangeColumnSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the range column type series in the chart. |
| [`StackingColumnSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the stacking column type series in the chart. |
| [`BarSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the bar type series in the chart. |
| [`StackingBarSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the stacking bar type series in the chart. |
| [`ScatterSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the scatter type series in the chart. |
| [`BubbleSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the bubble type series in the chart. |
| [`PolarSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the polar type series in the chart. |
| [`RadarSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the radar type series in the chart. |
| [`HiloSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the hilo type series in the chart. |
| [`HiloOpenCloseSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the hilo open close type series in the chart. |
| [`CandleSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the candle type series in the chart. |
| [`BoxAndWhiskerSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the box and whisker type series in the chart. |
| [`WaterfallSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the waterfall type series in the chart. |
| [`HistogramSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) | Inject this module to use the histogram type series in the chart. |
| [`ParetoSeries`](https://ej2.syncfusion.com/react/documentation/api/chart/series#paretooptions) | Inject this module to use the pareto type series in the chart. |
| [`ErrorBar`](https://ej2.syncfusion.com/react/documentation/api/chart/series#errorbar) | Inject this module to use the error bar feature in series. |

## Indicator Type Feature Modules

| Module | Description |
|------|-------------|
| [`AccumulationDistributionIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the accumulation distribution indicator. |
| [`AtrIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the average true range (ATR) indicator. |
| [`BollingerBands`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the bollinger band indicator. |
| [`EMAIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the exponential moving average (EMA) indicator. |
| [`MomentumIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the momentum indicator. |
| [`MACDIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the moving average convergence divergence (MACD) indicator. |
| [`RsiIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the relative strength index (RSI) indicator. |
| [`SmaIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the simple moving average (SMA) indicator. |
| [`StochasticIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the stochastic indicator. |
| [`TmaIndicator`](https://ej2.syncfusion.com/react/documentation/api/chart/technicalindicator) | Inject this module to use the triangular moving average indicator. |

## Other Feature Modules

| Module | Description |
|------|-------------|
| [`StripLine`](https://ej2.syncfusion.com/react/documentation/api/chart/stripline) | Inject this module to use the strip line feature. |
| [`Trendlines`](https://ej2.syncfusion.com/react/documentation/api/chart/trendline) | Inject this module to use the trendline feature. |
| [`DataLabel`](https://ej2.syncfusion.com/react/documentation/api/chart/datalabel) | Inject this module to use the data label feature. |
| [`ChartAnnotation`](https://ej2.syncfusion.com/react/documentation/api/chart/chartannotationsettings) | Inject this module to use the annotation feature. |
| [`Legend`](https://ej2.syncfusion.com/react/documentation/api/chart/legendsettings) | Inject this module to use the legend feature. |
| [`Tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipsettings) | Inject this module to use the tooltip feature. |
| [`Zoom`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomsettings) | Inject this module to use the zooming and panning feature. |
| [`DataEditing`](https://ej2.syncfusion.com/react/documentation/api/chart/dragsettings) | Inject this module to use the data editing feature. |
| [`Crosshair`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshair) | Inject this module to use the crosshair feature. |
| [`Selection`](https://ej2.syncfusion.com/react/documentation/api/chart/selection) | Inject this module to use the selection feature. |
| [`Highlight`](https://ej2.syncfusion.com/react/documentation/api/chart/highlight) | Inject this module to use the highlight feature. |
| [`Export`](https://ej2.syncfusion.com/react/documentation/api/chart/export) | Inject this module to use the export feature. |
| [`MultiLevelLabel`](https://ej2.syncfusion.com/react/documentation/api/chart/multilevellabel) | Inject this module to use the multi-level label feature. |

## See also

* [Getting Started with the React Chart](getting-started)
* [Chart Series](chart-series)
* [Chart API Reference](api)