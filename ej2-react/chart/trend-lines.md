---
layout: post
title: Trend lines in React Chart component | Syncfusion
description: Learn here all about Trend lines in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Trend lines 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Trend lines in React Chart component

Trendlines help identify patterns, direction, and overall trends in numerical data. They project the general movement of data values and are widely used in analytics, forecasting, and financial charts. Trendlines can be added to Cartesian series types such as Line, Column, Scatter, Area, Candle, and Hilo (excluding bar series). Multiple trendlines can be added to a single series based on the analysis needs.

Charts support six types of trendlines: **Linear**, **Exponential**, **Logarithmic**, **Polynomial**, **Power**, and **Moving Average**.

## Linear

A linear trendline is a straight, best‑fit line used to describe data with a constant rate of increase or decrease. Set the trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Linear` and inject the `Trendlines` module using `Chart.Inject(Trendlines)`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs1" %}

## Exponential

An exponential trendline displays a curved pattern useful when data rises or falls at increasing rates. Exponential trendlines cannot be generated if the dataset includes zero or negative values.

Set the trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Exponential` and inject the `Trendlines` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs2" %}

## Logarithmic

A logarithmic trendline is a best‑fit curved line suitable when the data increases or decreases quickly and then stabilizes. It supports both positive and negative values.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Logarithmic` and inject the `Trendlines` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs3" %}

## Polynomial

A polynomial trendline is useful when data fluctuates. It uses a curved line that can model more complex datasets.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Polynomial` and inject the `Trendlines` module. Use [`polynomialOrder`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#polynomialorder) to define the degree of the polynomial.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs4" %}

## Power

A power trendline is ideal for datasets where measurements increase at a constant rate. It displays a curved line that best fits exponential growth or decay patterns.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Power` and inject the `Trendlines` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs5" %}

## Moving Average

A moving average trendline smooths fluctuations to reveal overall trends more clearly. The [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#period) property specifies the number of data points used to calculate each average.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `MovingAverage` and inject the `Trendlines` module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs6" %}

**Customization of Trendline**

Customize trendline appearance using the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#fill) property for color and the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#width) property for line thickness.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs7" %}

## Forecasting

Trendline forecasting extends the existing trendline to estimate future and past values.

## Forward Forecasting

Use the [`forwardForecast`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#forwardforecast) property to extend the trendline into the future.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs8" %}

## Backward Forecasting

Use the [`backwardForecast`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#backwardforecast) property to extend the trendline into past data points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs9" %}

## Show or hide a trendline

Control visibility using the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#visible) property of the trendline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs10" %}