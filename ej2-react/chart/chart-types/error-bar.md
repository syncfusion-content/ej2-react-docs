---
layout: post
title: Error Bar Chart in React Chart | Syncfusion
description: Learn how to render and customize Error Bar series in Syncfusion React Chart to visualize data variability and uncertainty.
control: Error Bar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar Chart in React Chart

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Configure error bars on the series**: Add an [`errorBar`](https://ej2.syncfusion.com/react/documentation/api/chart/series#errorbar) property on the `SeriesDirective` and set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#visible) property to **true** to display the error bars. For example:

{% raw %}
   ```ts
   <SeriesDirective errorBar={{ visible: true }} />
   ```
{% endraw %}

2. **Inject the ErrorBar module**: Import `ErrorBar` from `@syncfusion/ej2-react-charts` and add it to `<Inject services={...} />` so that the error bar functionality is available.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs1" %}

## Error bar type

Use the [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#type) option to change the error bar rendering type. Available values are `Fixed`, `Percentage`, `StandardDeviation`, `StandardError`, and `Custom`. To change the error bar line length, use the [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalerror) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs2" %}

## Customizing error bar type

Set the error bar [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#type) to `Custom` and then override the per-direction error values using the horizontal/vertical and positive/negative error properties:

* [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalerror) / [`horizontalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalerror) — shorthand that sets both the positive and negative error to the same value.
* [`verticalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalpositiveerror) and [`verticalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalnegativeerror) — set the positive/negative error independently.
* [`horizontalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalpositiveerror) and [`horizontalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalnegativeerror) — set the horizontal positive/negative error independently.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs3" %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically, or on both sides. Use the [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#mode) option. Available values are `Vertical` (default), `Horizontal`, and `Both`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs4" %}

## Error bar direction

To change the direction of the error bars, use the [`direction`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#direction) property. Available values are `Plus` (positive only), `Minus` (negative only), and `Both` (default).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the appearance of the error bar caps, use the [`errorBarCap`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#errorbarcap) property. The cap object accepts `length`, `width`, `opacity`, and `color` properties, for example:

```ts
errorBarCap: { length: 10, width: 10, opacity: 1, color: 'black' }
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs6" %}

## Customizing error bar color

To customize the error bar color for individual points, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#errorbarcolormapping) property and point it to a field name in the data source. For example, with a data field named `color`, set `errorBarColorMapping: 'color'` and the chart will apply each point's `color` value as its error bar stroke.

You can also customize the per-point error values directly on the data record using these properties:

* [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalerror) and [`horizontalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalerror) — shorthand for both positive and negative.
* [`verticalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalpositiveerror) and [`verticalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#verticalnegativeerror).
* [`horizontalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalpositiveerror) and [`horizontalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorbarsettings#horizontalnegativeerror).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/react/documentation/api/chart/iseriesrendereventargs) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointrendereventargs) event provides a hook to customize each data point (for example, border or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/errorbar-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/errorbar-cs9" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
