---
layout: post
title: Data Markers in React Chart | Syncfusion
description: Learn how to add markers to Syncfusion React Chart with custom shapes, images, fill colors, borders, and per-point styling for clear data point visualization.
control: Data markers
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Markers in React Chart

Data markers are visual indicators placed at each data point on a series, helping to clearly identify and highlight individual values in your chart. Markers improve readability and accessibility, especially in line and area charts where data points may otherwise be unclear. Customize marker shape, color, size, and appearance to match your design requirements.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Enable markers for data points by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#visible) option to `true` in the marker property. Each series receives distinct markers by default, improving visual differentiation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/datalabel-cs7" %}

## Shape

Assign different shapes to markers such as `rectangle`, `circle`, `diamond`, `triangle`, and others using the [`shape`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#shape) property. Shape selection helps distinguish between multiple series and improves visual clarity.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/datalabel-cs8" %}

> Note: To know more about the marker shape type, refer to the [`shape`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#shape) property.

## Image Markers

Use custom images as markers instead of predefined shapes by setting the [`imageUrl`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#imageurl) property. This allows branded or thematic markers that enhance visual appeal and user engagement.

Use PNG or SVG images for best clarity. Control rendered size with the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#height) marker properties; if omitted, the image's intrinsic dimensions are used.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/marker-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/marker-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/marker-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/marker-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/marker-cs2" %}

## Customization

Customize marker appearance by modifying the `fill` (background color) and `border` properties. Combined with shape and image options, these customizations enable comprehensive marker styling to match your application design.

Additional marker properties include [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#width), [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#height), and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#opacity), which control the size and transparency of the marker.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/datalabel-cs9" %}

## Customizing a specific point

Use the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#pointrender) event to customize markers for individual data points. This event allows you to conditionally change shape, color, and border properties based on data values or other criteria. The handler receives an `IPointRenderEventArgs` object whose `point` and `series` properties expose the current point, series, and marker settings you can mutate before render.

```ts
const pointRender = (args: IPointRenderEventArgs) => {
  if ((args.point.y as number) > 70) {
    args.fill = 'red';
  }
};
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/datalabel-cs10" %}

## Fill Markers with Series Color

Fill markers with the series color by enabling the [`isFilled`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#isFilled) property. This creates a cohesive visual design where markers inherit the series color automatically.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/data-marker/datalabel-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/data-marker/datalabel-cs11" %}

## Troubleshooting

* **Markers are not visible.** Ensure [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings#visible) is set to `true` and that the series is a line, area, or spline type which supports markers.
* **Image marker not loading.** Verify the URL is accessible and the image uses a supported format (PNG, JPEG, SVG).
* **Customizations don't apply.** Confirm the property is set on the series' `marker` (e.g., `series.marker.fill`) and not the chart-level default.

## See Also

* [Customize the marker with different shape](./how-to/marker-customization)
* [Highlight a Marker in Multicolored Line Series](https://support.syncfusion.com/kb/article/21514/how-to-highlight-a-specific-marker-in-a-multicolored-line-series-in-react-chart)
