---
layout: post
title: Series label in React Chart | Syncfusion
description: Learn how to add labels to the series in Syncfusion React Chart to make every series self-describing without relying on the legend.
control: Series label
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Series label in React Chart

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

The series label is supported by Line, Column, Area, Spline, and Stacked variants. Before using this feature, make sure the chart is set up by following the [Getting Started](./getting-started) page.

> Note: To use the series label feature, import the `SeriesLabel` module from `@syncfusion/ej2-react-charts` and include it in the `services` array of the `Inject` component.

## Enable series label

Enable series labels using the [`labelSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#labelsettings) property within the series configuration. Set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#visible) property to **true** to display the label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/series-label/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/series-label" %}

## Customization

Customize the appearance and behavior of series labels using the following properties:

* [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#visible) – Enables or disables the series label. Default: **false**.
* [`text`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
* [`font`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#font) – Font customization options including `color`, `size`, `fontFamily`, `fontStyle`, and `fontWeight`.
* [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#background) – Background color of the label.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#border) – Border of the label, configured with `width` and `color`.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#opacity) – Label transparency. Default: **1**.
* [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#position) – Label placement relative to the end of the series (for example, `Near`, `Middle`, `Far`).
* [`margin`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#margin) – Spacing around the label with `left`, `right`, `top`, and `bottom` values.
* [`rx`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#rx) and [`ry`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#ry) – Corner radii for the label background. Require a non-null `border`.
* [`showOverlapText`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#showoverlaptext) – Controls whether labels that overlap other labels are shown. Default: **true**.
* [`connectorLine`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#connectorline) – Properties of the line drawn between the last data point and the label, including `width`, `color`, and `dashArray`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/series-label-customization/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/series-label-customization" %}

## Troubleshooting

* **Series label is not visible.** Confirm the `SeriesLabel` module is registered in the `Inject` `services` array and that `labelSettings.visible` is set to **true** on each series.
* **Label does not appear at the end of the series.** The label is anchored to the last visible data point. If the last point is filtered or null, the label will not render.
* **Label text overlaps with another label.** Set [`showOverlapText`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel#showoverlaptext) to **false** to hide overlapping labels.
* **Customizations do not apply.** Ensure properties are set inside the series' `labelSettings` (e.g., `series.labelSettings.background`), not on the chart-level default.

## See Also

* [Modules in React Chart component](./feature-modules)
* [Data labels in React Chart component](./data-labels)
* [SeriesLabelSettingsModel API reference](https://ej2.syncfusion.com/react/documentation/api/chart/seriesLabelSettingsModel)
