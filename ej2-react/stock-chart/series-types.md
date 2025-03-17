---
layout: post
title: Series types in React Stock chart component | Syncfusion
description: Learn here all about Series types in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Series types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Series types in React Stock chart component

Essential<sup style="font-size:70%">&reg;</sup> JS 2 StockChart supports 6 major types of series namely `Line`, `Spline`, `Hilo`, `HiloOpenClose`, `Hollow Candle` and `Candle` . By using the series dropdown button you can navigate between the above listed series types.

<!-- markdownlint-disable MD036 -->

## Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `Line` and inject `LineSeries` module using `<Inject services={[LineSeries]}>` method.

## Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `Spline` and inject `SplineSeries` module using `<Inject services={[SplineSeries]}>` method.

## Hilo

To render a hilo series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `Hilo` and inject `HiloSeries` module using `<Inject services={[HiloSeries]}>` method.

## HiloOpenClose

To render a hiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `HiloOpenClose` and inject `HiloOpenCloseSeries` module using `<Inject services={[HiloOpenCloseSeries]}>` method.

## HollowCandle

To render a hollowcandle series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `Candle` and set `enableSolidCandle` as false. Now inject `CandleSeries` module using `<Inject services={[CandleSeries]}>` method.

## Candle

To render a candle series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel/#type) as `Candle` and inject `CandleSeries` module using `<Inject services={[CandleSeries]}>` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/series-types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/series-types-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/series-types-cs1" %}