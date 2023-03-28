---
layout: post
title: Trend lines in React Stock chart component | Syncfusion
description: Learn here all about Trend lines in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Trend lines 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Trend lines in React Stock chart component

Trendlines are used to show the direction and speed of price.

StockChart supports 6 types of trendlines namely `Linear`,`Exponential`,`Logarithmic`,`Polynomial`,`Power`,`Moving Average`. By using trendline dropdown button you can add or remove the required trendline type.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Linear` and inject `Trendlines` module using `<Inject services={[Trendlines]}>`.

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Exponential` and inject `Trendlines` module using `<Inject services={[Trendlines]}>`.

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out. A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Logarithmic` and inject
`Trendlines` module using `<Inject services={[Trendlines]}>`.

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Polynomial` and inject `Trendlines` module using `<Inject services={[Trendlines]}>`.

`polynomialOrder` used to define the polynomial value.

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Power` and inject` Trendlines` module using `<Inject services={[Trendlines]}>`.

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `MovingAverage` and inject `Trendlines` module using `<Inject services={[Trendlines]}>`.

`period` property defines the period to find the moving average.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/trend-lines-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/trend-lines-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/trend-lines-cs1" %}