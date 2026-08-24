---
layout: post
title: Dynamic Data Update in React Chart | Syncfusion
description: Learn how to dynamically add, remove, or replace data points in Syncfusion React Chart without re-rendering the entire chart.
control: Dynamic Data Update
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic Data Update in React Chart

The [React Charts](https://www.syncfusion.com/react-components/react-charts) component provides methods to dynamically modify data without requiring a full chart refresh. This enables real-time data visualization, interactive features, and responsive user experiences. Common scenarios include adding sensor readings, removing outdated data points, replacing entire datasets, and enabling click-based data manipulation.

These methods (`addPoint`, `removePoint`, and `setData`) are called on a [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) instance — not on the chart itself — and are accessible via `chart.series[seriesIndex]`. The chart instance is typically obtained by assigning a `ref` to the `<ChartComponent>` element.

## Adding a new data point

Use the [`addPoint`](https://ej2.syncfusion.com/react/documentation/api/chart/series#addpoint) method to dynamically append a new data point to a series. This is useful for real-time data streams, user interactions, or incremental data loading. The method accepts the following parameters:

* **Data point** (required): The new data object to append to the series (must match the datasource structure)
* **Animation duration** (optional): Duration in milliseconds for the entry animation

The method returns `void` and mutates the series in place. For the complete signature (including the optional `isNew` flag and overloads), see the [`addPoint` API reference](https://ej2.syncfusion.com/react/documentation/api/chart/series#addpoint).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/add-point" %}

## Removing an existing data point

Use the [`removePoint`](https://ej2.syncfusion.com/react/documentation/api/chart/series#removepoint) method to dynamically delete a data point from a series by its index. This is useful for filtering data, removing outliers, or responding to user actions. The method accepts the following parameters:

* **Point index** (required): The zero-based index of the data point to remove. The index refers to the data point's position in the series — **not** its data value. To remove a point by a specific value, find its index first.
* **Animation duration** (optional): Duration in milliseconds for the exit animation

The method returns `void` and mutates the series in place. See the [`removePoint` API reference](https://ej2.syncfusion.com/react/documentation/api/chart/series#removepoint) for the full signature.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/remove-point" %}

## Replacing the dataset of a series

Use the [`setData`](https://ej2.syncfusion.com/react/documentation/api/chart/series#setdata) method to replace all data points in a series with a new dataset. This is useful for category switching, time range changes, or complete data refreshes. The method accepts the following parameters:

* **New data source** (required): The complete new dataset array to display (must match the existing datasource structure — same `xName` and `yName` fields)
* **Animation duration** (optional): Duration in milliseconds for the transition animation

The method returns `void` and mutates the series in place. See the [`setData` API reference](https://ej2.syncfusion.com/react/documentation/api/chart/series#setdata) for the full signature.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/set-data" %}

## Click to add or remove a data point

Enable users to add or remove data points by clicking on the chart. Listen to the [`chartMouseClick`](https://ej2.syncfusion.com/react/documentation/api/chart/iChartMouseEventArgs) event to capture click coordinates and point information. When a user clicks within the chart area, the event arguments expose `args.axisData` (the x and y axis values) which you can use to determine what was clicked.

The example below implements click-to-add and click-to-remove with a **pixel-tolerance match** against existing data points. Because the click coordinates are pixel values but the data points are in axis units, the sample iterates the series' points and compares them with a tolerance equal to half the marker's width. If a match is found, `removePoint` is called with that index; otherwise `addPoint` is called with the rounded axis values. This creates an intuitive interface for data exploration and editing.

> Note: The point-matching algorithm in the sample is intentionally simple. For production use, you may need to adjust the tolerance, account for axis scale (linear vs. logarithmic), and handle edge cases such as overlapping points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/click-add-point" %}

## See also

* [Series API reference](https://ej2.syncfusion.com/react/documentation/api/chart/series)
* [Selection in React Charts](./selection)
* [Crosshair and trackball in React Charts](./cross-hair-and-track-ball)
* [Live data update patterns](https://ej2.syncfusion.com/react/documentation/chart/getting-started)
