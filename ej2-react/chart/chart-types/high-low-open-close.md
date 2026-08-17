---
layout: post
title: High Low Open Close Chart in React Chart | Syncfusion
description: Learn to render, customize, and bind Hilo Open Close series in Syncfusion React Chart to visualize stock price movements with high, low, open, and close values.
control: High Low Open Close
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close Chart in React Chart

## High Low Open Close

The Hilo Open Close series is used to represent the low, high, open, and closing prices over time. It is commonly used in financial charts to visualize stock price movements.

To render a Hilo Open Close series in your chart, follow these steps:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series#type) as `HiloOpenClose` in your chart configuration. This displays the high, low, open, and close values for each data point.

2. **Inject the HiloOpenCloseSeries module**: Import `HiloOpenCloseSeries` from `@syncfusion/ej2-react-charts` and add it to `<Inject services={...} />` so the Hilo Open Close functionality is available. The sample below also injects `Tooltip`, `Category`, `Crosshair`, and `Zoom`.

3. **Provide high, low, open, and close values**: The `HiloOpenClose` series requires five fields (`x`, `high`, `low`, `open`, and `close`) in each data record.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/series#datasource) property on the `SeriesDirective`. The `dataSource` accepts either a plain JSON array or a Syncfusion [`DataManager`](https://ej2.syncfusion.com/react/documentation/api/data/dataManager) instance for remote endpoints.

Each data record must contain a category field plus the four price fields. Map them to the series using [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/react/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/react/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/react/documentation/api/chart/series#open), and [`close`](https://ej2.syncfusion.com/react/documentation/api/chart/series#close).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs1" %}

## Series customization

In the Hilo Open Close series, the [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullfillcolor) property is used to fill the segment when the open value is greater than the close value, while the [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bearfillcolor) property is used to fill the segment when the open value is less than the close value. These properties accept any valid CSS color string and can be set directly on the `SeriesDirective`, for example:

```tsx
<SeriesDirective bearFillColor="#e56590" bullFillColor="#f8b883" />
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs2" %}

## Empty points

A Hilo Open Close data point is considered empty when any of its `open`, `high`, `low`, or `close` values is `null`, `undefined`, or `NaN`. By default (`Gap` mode) the empty point is skipped and leaves a gap on the chart; the `mode` and `fill` properties of `emptyPointSettings` let you override this behavior.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#mode) property to control handling of empty points. Available modes are `Gap` (leave a break, the default), `Drop` (ignores the empty point during rendering), `Zero` (plot as zero), and `Average` (plot as the average of neighboring points). The following sample uses `Average` mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs3" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property to set the fill color for empty points. The following sample renders the empty point in **blue**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs4" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iSeriesRenderEventArgs) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources. For Hilo Open Close, the event handler can also override `bullFillColor` and `bearFillColor` per render via `args.series`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs5" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iPointRenderEventArgs) event provides a hook to customize each data point (for example, border or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/hiloOpenClose-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/hiloOpenClose-cs6" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)