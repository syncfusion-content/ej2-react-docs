---
layout: post
title: Synchronized Charts in React Chart | Syncfusion
description: Learn how to synchronize Syncfusion React Chart across multiple panels so tooltip, crosshair, and selection events move together for linked views.
control: Synchronized charts
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Synchronized Charts in React Chart

Synchronized charts allow multiple chart instances to share common interactions so that actions performed on one chart are reflected across the others. This approach is useful for comparing related datasets and analyzing trends consistently across multiple visualizations.

## Prerequisites

Before implementing synchronized charts, ensure:

* Two or more `ChartComponent` instances are rendered on the same page and are accessible via React refs.
* The required feature modules are injected into the `services` of every chart that participates in synchronization. Each sub-section below lists the modules it depends on.
* The corresponding feature (tooltip, crosshair, zoom, or selection) is enabled on each chart that should participate in the synchronization.

## Summary

| Sync type | Method / Event | Required module(s) |
| --- | --- | --- |
| Tooltip | [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#showtooltip), [`hideTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#hidetooltip) | `Tooltip` |
| Crosshair | [`showCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#showcrosshair), [`hideCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#hidecrosshair) | `Crosshair` |
| Zoom | [`zoomComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/IZoomCompleteEventArgs) event | `Zoom`, `Selection` |
| Selection | [`selectionComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/ISelectionCompleteEventArgs) event | `Zoom`, `Selection` |

## Tooltip synchronization

The tooltip can be synchronized across multiple charts by using the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#hidetooltip) methods. When the user hovers over a data point in one chart, call `showTooltip` on the other charts to display the corresponding tooltip information simultaneously.

The `showTooltip` method accepts the pointer position (in chart pixel coordinates) obtained from the source chart's mouse event:

* `x` – The x-coordinate of the pointer in chart coordinates.
* `y` – The y-coordinate of the pointer in chart coordinates.

> Note: The `Tooltip` module must be injected and `tooltip.enable` must be set to `true` on every chart that participates in the synchronization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/synchronized-cs1" %}

## Crosshair synchronization

The crosshair can be synchronized across multiple charts by using the [`showCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#showcrosshair) and [`hideCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#hidecrosshair) methods. When the user moves the pointer over one chart, call `showCrosshair` on the other charts to align the crosshair position across all synchronized charts, making data comparison easier.

The `showCrosshair` method accepts the pointer position (in chart pixel coordinates) obtained from the source chart's mouse event:

* `x` – The x-coordinate of the pointer in chart coordinates.
* `y` – The y-coordinate of the pointer in chart coordinates.

> Note: The `Crosshair` module must be injected and `crosshair.enable` must be set to `true` on every chart that participates in the synchronization. Optionally enable `primaryXAxis.crosshairTooltip.enable` to display the crosshair value label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/synchronized-cs2" %}

## Zooming synchronization

Zoom levels can be synchronized across multiple charts by using the [`zoomComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/IZoomCompleteEventArgs) event. In the `zoomComplete` event, retrieve the [`currentZoomFactor`](https://ej2.syncfusion.com/react/documentation/api/chart/IZoomCompleteEventArgs#currentzoomfactor) and [`currentZoomPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/IZoomCompleteEventArgs#currentzoomposition) values from the chart that triggered the event.
These values can then be applied to the other charts so that all synchronized charts maintain the same zoom state during user interaction.

> Note: The `Zoom` and `Selection` modules must be injected, and `zoomSettings` (for example, `enableSelectionZooming`, `enableMouseWheelZooming`, `enablePan`, and `mode`) must be configured consistently on every chart that participates in the synchronization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/synchronized-cs3" %}

## Selection synchronization

Selection can be synchronized across multiple charts by using the [`selectionComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/ISelectionCompleteEventArgs) event. In the `selectionComplete` event, retrieve the `selectedDataValues` array from the chart that triggered the event and apply the same selection state to the other charts.

The `selectedDataValues` array uses the `point` and `series` properties to identify each selection. To apply these values to another chart, remap them to `pointIndex` and `seriesIndex` and assign the result to that chart's `selectedDataIndexes` property, then call `dataBind()`.

This ensures consistent selection behavior across all synchronized charts and helps maintain a unified analysis experience.

> Note: The `Zoom` and `Selection` modules must be injected. The source chart must have `enableSelectionZooming: true` in `zoomSettings`, along with `selectionMode` and `selectionPattern` configured, so that selections can be raised and propagated.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/synchronized-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/synchronized-cs4" %}

## Troubleshooting

* Tooltip or crosshair does not appear on the target chart — verify that the corresponding module (`Tooltip` or `Crosshair`) is injected and that the feature's `enable` property is set to `true` on the target chart as well.
* Selection sync has no effect — ensure `enableSelectionZooming: true` is set in `zoomSettings` on every chart, and that `selectedDataValues` is remapped to `pointIndex`/`seriesIndex` before being assigned to `selectedDataIndexes`.
* Zoom sync drifts between charts — confirm `zoomSettings.mode` is the same on every chart (for example, `X`) and that the source event's `args.axis.name` matches the axis you intend to synchronize.
* `startMove` flag in the tooltip and crosshair samples — used internally to track active pointer movement on touch devices; do not toggle it manually.

## See also

* [Tooltip](tool-tip)
* [Crosshair and Trackball](cross-hair-and-track-ball)
* [Zooming](zooming)
* [Selection](selection)