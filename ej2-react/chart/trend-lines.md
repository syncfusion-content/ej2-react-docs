---
layout: post
title: Trend lines in React Chart | Syncfusion
description: Learn how to add linear, exponential, logarithmic, power, moving average and polynomial trend lines to Syncfusion React Chart to highlight data direction.
control: Trend lines
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Trend lines in React Chart

Trendlines help identify patterns, direction, and overall trends in numerical data. They project the general movement of data values and are widely used in analytics, forecasting, and financial charts. Trendlines can be added to Cartesian series types such as Line, Column, Scatter, Area, Candle, and Hilo (excluding bar series). Multiple trendlines can be added to a single series based on the analysis needs.

The React Chart component supports six types of trendlines:

* **Linear** - A straight, best-fit line for data with a constant rate of change.
* **Exponential** - A curved line for data that rises or falls at increasingly higher rates (requires positive y-values).
* **Logarithmic** - A best-fit curved line for data whose rate of change quickly levels out (supports positive and negative values).
* **Polynomial** - A curved line that models fluctuating data; degree is controlled by [`polynomialOrder`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#polynomialorder).
* **Power** - A curved line for datasets where measurements increase at a specific rate (requires positive y-values).
* **Moving Average** - A smoothed trendline that uses the [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#period) property to control the window size.

## Linear

A linear trendline is a straight, best-fit line used to describe data with a constant rate of change. Set the trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Linear` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`.

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

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. Exponential trendlines cannot be generated if the dataset contains zero or negative y-values.

Set the trendline [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Exponential` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`.

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

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out. A logarithmic trendline can use positive and/or negative values.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Logarithmic` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`.

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

A polynomial trendline is a curved line that is used when data fluctuates.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Polynomial` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`. Use [`polynomialOrder`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#polynomialorder) to define the degree of the polynomial. Recommended values are `2` to `6`; higher orders risk over fitting and may render slowly on large datasets.

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

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate. Power trendlines cannot be generated if the dataset contains zero or negative y-values.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `Power` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`.

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

A moving average trendline smooths fluctuations in data to show a pattern or trend more clearly. The [`period`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#period) property specifies the number of data points used to calculate each average. Choose a `period` that is at least `2` and less than the total number of data points; the first `period - 1` points will not have a moving-average value rendered.

Set [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#type) to `MovingAverage` and inject the `Trendlines` module using `<Inject services={[Trendlines]} />`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs6" %}

## Customization of Trendline

Customize the trendline appearance using the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#fill) property for color and the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#width) property for line thickness. Use [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#dasharray) to render the trendline as a dashed line.

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

Trendline forecasting extends the existing trendline to estimate future and past values. Forecasting is supported for all six trendline types: **Linear**, **Exponential**, **Logarithmic**, **Polynomial**, **Power**, and **Moving Average**. Specify a positive integer for either property to forecast that many data points beyond the chart's actual data range.

### Forward Forecasting

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

### Backward Forecasting

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

## Multiple Trendlines

Multiple trendlines can be added to a single series to compare different fits. Pass an array of trendline objects to the `trendlines` property of the series. Each trendline must specify a unique `name` so it can be identified in the legend.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
```jsx
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 18 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
  { x: 5, y: 30 },
  { x: 6, y: 28 }
];

export default class App extends React.Component {
  render() {
    return (
      <ChartComponent id="charts" primaryXAxis={{ valueType: 'Double' }}>
        <Inject services={[LineSeries, Trendlines]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Line"
            trendlines={[
              { type: 'Linear', name: 'Linear Trend', fill: '#0066CC', width: 2 },
              { type: 'Exponential', name: 'Exponential Trend', fill: '#CC0000', width: 2 },
              { type: 'MovingAverage', name: 'Moving Average', period: 3, fill: '#009933', width: 2 }
            ]}>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
}
```
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}

{% raw %}
```tsx
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

const data: Object[] = [
  { x: 1, y: 10 },
  { x: 2, y: 18 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
  { x: 5, y: 30 },
  { x: 6, y: 28 }
];

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <ChartComponent id="charts" primaryXAxis={{ valueType: 'Double' }}>
        <Inject services={[LineSeries, Trendlines]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Line"
            trendlines={[
              { type: 'Linear', name: 'Linear Trend', fill: '#0066CC', width: 2 },
              { type: 'Exponential', name: 'Exponential Trend', fill: '#CC0000', width: 2 },
              { type: 'MovingAverage', name: 'Moving Average', period: 3, fill: '#009933', width: 2 }
            ]}>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
}
```
{% endraw %}
{% endhighlight %}
{% endtabs %}

## General Properties

The following properties apply to all trendline types.

### Name

Use the [`name`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#name) property to assign a descriptive name to a trendline. The name is displayed in the chart legend and used to identify the trendline in tooltips. When multiple trendlines are added, a unique `name` is required for each.

### Marker

Customize trendline data points using the [`marker`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#marker) property. You can configure the shape, size, fill, and border of the markers.

### Tooltip

Use [`enableTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#enabletooltip) (default `true`) to control whether the trendline displays a tooltip on hover.

### Animation

Trendline rendering supports animation through the [`animation`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#animation) property. See the [AnimationModel API](https://ej2.syncfusion.com/react/documentation/api/chart/animationmodel) for general configuration options.

### Legend Shape

Use [`legendShape`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#legendshape) to customize the shape that represents the trendline in the legend.

### Intercept

Use [`intercept`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#intercept) to specify a fixed intercept value for the trendline equation.

## Show or hide a trendline

Control the visibility of a trendline by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/trendlineModel#visible) property to `true` or `false`. When set to `false`, the trendline is hidden from the chart but its legend entry is also removed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/trendlines-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/trendlines-cs10" %}