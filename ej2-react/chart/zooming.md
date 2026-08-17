---
layout: post
title: Zooming in React Chart | Syncfusion
description: Learn how to enable mouse-wheel, pinch, selection, and toolbar zooming in Syncfusion React Chart, with options for pan and reset.
control: Zooming
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in React Chart

Zooming and panning let users explore a chart in more detail by focusing on a specific data range. The React Chart supports mouse-wheel, pinch, rubber-band selection, and toolbar-based zooming, with options to customize the toolbar, scrollbar, pan behavior, and axis interval handling. This guide covers all available zoom-related properties and interactions.

> Note: To use any zoom-related feature, inject the `Zoom` module into the chart's `services`. Also ensure the `@syncfusion/ej2-react-charts` package is installed.

To get started quickly with React Chart Zooming and Panning, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=6Fq99_MnpSA" %}

## Enable zooming

The chart supports zooming through the following three interaction methods. Each method is independent and can be combined.

* **Selection** – Set [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enableselectionzooming) to `true` in `zoomSettings` to zoom using a rubber-band selection. Defaults to `false`.
* **Mouse wheel** – Set [`enableMouseWheelZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablemousewheelzooming) to `true` in `zoomSettings` to zoom in and out by scrolling the mouse wheel. Defaults to `false`.
* **Pinch** – Set [`enablePinchZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablepinchzooming) to `true` in `zoomSettings` to zoom using pinch gestures on touch-enabled devices. Defaults to `false`.

> Note: Pinch zooming is supported only in browsers that support multi-touch gestures.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs4" %}

After zooming, a toolbar is displayed that includes `Zoom`, `ZoomIn`, `ZoomOut`, `Pan`, and `Reset` buttons.
Selecting `Pan` allows the chart to be panned, and selecting `Reset` restores the chart to its original zoom state.

## Zoom modes

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#mode) property in `zoomSettings` specifies whether the chart zooms along the horizontal axis, vertical axis, or both.

The supported zooming modes are:

* `X` - Allows zooming along the horizontal axis.
* `Y` - Allows zooming along the vertical axis.
* `XY` - Allows zooming along both horizontal and vertical axes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs5" %}

## Zoom toolbar

By default, the `ZoomIn`, `ZoomOut`, `Pan`, and `Reset` buttons are displayed after a zoom interaction. The toolbar contents can be customized by using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#toolbaritems) property. Available toolbar item values include:

* `Zoom` - Enables the zooming tool to select and zoom into a specific region of the chart.
* `ZoomIn` - Zooms the chart in by a fixed factor.
* `ZoomOut` - Zooms the chart out by a fixed factor.
* `Pan` - Allows you to pan the chart.
* `Reset` - Resets the zoomed chart.

Set [`showToolbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#showtoolbar) to `true` to display the toolbar during initial rendering. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs6" %}

### Toolbar customization

Use the [`toolbarPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#toolbarposition) property to customize the zoom toolbar position. The property accepts the following horizontal and vertical alignment values:

* Horizontal alignment: `Near`, `Center`, `Far`.
* Vertical alignment: `Top`, `Middle`, `Bottom`.

For precise placement, use the [`x`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel#y) properties.
Set the [`draggable`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel#draggable) property to `true` to allow the toolbar to be repositioned freely within the chart area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs11" %}

## Enable scrollbar

Set the [`enableScrollbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablescrollbar) property to `true` to display a scrollbar for the zoomed chart. The scrollbar supports both zooming and panning interactions.

Customize the scrollbar appearance using properties within [`scrollbarSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings). For example:

* [`trackColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#trackcolor) and [`trackRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#trackradius) control the track appearance.
* [`scrollbarColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#scrollbarcolor) and [`scrollbarRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#scrollbarradius) customize the scroller.
* [`enableZoom`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#enablezoom) enables or disables zooming through the scrollbar (default is `true`).
* [`gripColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#gripcolor) and [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#height) customize the grip color and scrollbar height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs7" %}

### Scrollbar position

The [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings#position) property specifies where the scrollbar is rendered. By default, both vertical and horizontal scrollbars are placed next to their respective axes.

The available positions are:

* `placeNextToAxisLine` (default) - Places the scrollbar next to the axis line.
* `Top` / `Bottom` - Positions the horizontal scrollbar above or below the chart.
* `Left` / `Right` - Positions the vertical scrollbar to the left or right of the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs12" %}

## Enable animation

Set [`enableAnimation`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enableanimation) to `true` to animate zoom operations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs10" %}

## Enable pan

Set [`enablePan`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablepan) to `true` to allow the zoomed chart to be panned without using the toolbar items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs8" %}

## Enable auto interval on zooming

Set [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#enableautointervalonzooming) on the axis (not on `zoomSettings`) to `true` so that the axis interval is recalculated automatically based on the current zoomed range.
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs9" %}

## Troubleshooting

**Zoom, pan, or scrollbar does not work**

Make sure the `Zoom` module is injected into the chart's `services`. Without it, all zoom-related properties are silently ignored.

**Pinch zoom does not trigger on desktop**

Pinch zoom requires a touch-capable device. Verify that you are testing on a real touch device or a browser emulator that supports multi-touch.

**Scrollbar overlaps the axis labels**

Customize the scrollbar position with the `position` property of `scrollbarSettings`, or increase the chart margin to provide more space.

**Axis labels are too dense after zooming**

Enable `enableAutoIntervalOnZooming` on the axis so the interval is recalculated based on the visible range.

**Toolbar appears before the user zooms**

Set `showToolbar` to `false` (the default) to keep the toolbar hidden until the chart is zoomed.