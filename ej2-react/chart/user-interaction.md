---
layout: post
title: User interaction in React Chart | Syncfusion
description: Learn how Syncfusion React Chart responds to user interactions including tooltips, zooming, panning, crosshair, trackball, selection, and data editing.
control: User interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# User interaction in React Chart
## Tooltip

The chart displays details about a point through a tooltip when the mouse hovers over the point.

To get started quickly with the React Chart Tooltip, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Tooltip for Data Point**

<!-- markdownlint-disable MD012 -->
By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) to `true` and by injecting the `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs7" %}

**Format the Tooltip**

By default, the tooltip shows the x and y values of points. You can show additional information in the tooltip by setting the `format` property on [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel). For example, the format `'${series.name} ${point.x}'` shows the series name and the x value of the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs8" %}

<!-- markdownlint-disable MD013 -->

**Tooltip Template**

Any HTML element can be displayed in the tooltip by using the `template` property of the tooltip. You can use placeholders such as `${x}` and `${y}` in the HTML element to display the corresponding data point values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs9" %}

**Customize the Appearance of Tooltip**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs10" %}

## Zooming and Panning

To get started quickly with React Chart Zooming and Panning, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Zooming**

The chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enableselectionzooming) to `true` in `zoomSettings`, you can zoom the chart by using rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablemousewheelzooming) to `true` in `zoomSettings`, you can zoom in and zoom out the chart by scrolling the mouse wheel.
* Pinch - By setting [`enablePinchZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#enablepinchzooming) to `true` in `zoomSettings`, you can zoom the chart through pinch gestures on touch-enabled devices.

> Note: Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome, and Opera browsers support multi-touch on desktop devices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs1" %}

After zooming the chart, a zooming toolbar appears with `Zoom`, `ZoomIn`, `ZoomOut`, `Pan`, and `Reset` buttons. Selecting the Pan option allows you to pan the chart, and selecting the Reset option resets the zoomed chart.

**Modes of Zooming**

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#mode) property in `zoomSettings` specifies whether the chart is allowed to scale along the horizontal axis or the vertical axis. The default value of the mode is `XY` (both axes).

There are three modes:

* `X` - Allows you to zoom the chart horizontally.
* `Y` - Allows you to zoom the chart vertically.
* `XY` - Allows you to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs2" %}

**Customizing Zooming Toolbar**

By default, `zoomin`, `zoomout`, `pan`, and `reset` buttons are displayed for the zoomed chart. You can customize the toolbar to show your desired tools by using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel#toolbaritems) property. Available toolbar item values include:

* `Zoom` - Enables the rectangular zoom selection.
* `ZoomIn` - Zooms the chart in by a fixed factor.
* `ZoomOut` - Zooms the chart out by a fixed factor.
* `Pan` - Allows you to pan the chart.
* `Reset` - Resets the zoomed chart.

You can also enable panning without entering zoom mode by setting `enablePan` to `true` in `zoomSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/zoom-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/zoom-cs3" %}

> Note: To use the zooming feature, inject the `Zoom` module into the `services`.

## Crosshair

A crosshair displays vertical and horizontal lines that indicate the value of an axis at the current mouse or touch position.

To get started quickly with React Chart Crosshair, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Crosshair**

To use the crosshair feature, inject the `Crosshair` module into the chart's `services`. Crosshair lines can be enabled by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) to `true` in the `crosshair` settings. Similarly, the tooltip label for an axis can be enabled by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel#enable) to `true` on `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs4" %}

**Customization**

* The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel#fill) property of `crosshairTooltip` customizes the background color of the crosshair label.
* The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel#textstyle) property of `crosshairTooltip` customizes the font style of the crosshair label.
* The color, width, and dash array of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#line) property in the crosshair settings. Refer to the [CrosshairLine API](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairLine) for the full list of supported properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs5" %}

> Note: To use the crosshair feature, inject the `Crosshair` module into the `services`.

## Trackball

The trackball is used to track the data point closest to the current mouse or touch position. A marker indicates the closest point, and a trackball tooltip displays the information about that point. To use the trackball feature, inject both the `Crosshair` and `Tooltip` modules into the chart's `services`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) property of the crosshair to `true` and the [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettings#shared) property in `tooltip` to `true` in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/trackball-cs2" %}

## Selection

The chart provides selection support for series and their data points on mouse click.

> When the mouse is clicked on a data point, the corresponding series legend item is also selected.

The supported selection modes are listed below. `None` is the default mode and disables selection.

* [`Point`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#point) - Selects an individual data point.
* [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#series) - Selects an entire series.
* [`Cluster`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#cluster) - Selects points at the same index across all series.
* [`DragXY`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#dragxy) - Selects data along both axes by dragging a rectangular region.
* [`DragX`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#dragx) - Selects data along the horizontal axis by dragging.
* [`DragY`](https://ej2.syncfusion.com/react/documentation/api/chart/selectionMode#dragy) - Selects data along the vertical axis by dragging.

**Point**

You can select a point by setting `selectionMode` to `Point`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs8" %}

**Series**

You can select a series by setting `selectionMode` to `Series`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs9" %}

**Cluster**

You can select the points that correspond to the same index in all the series by setting `selectionMode` to `cluster`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs10" %}

**DragXY, DragX, and DragY**

To fetch the collection of data within a particular region, set `selectionMode` to `DragXY` (or `DragX` / `DragY` to restrict the selection along a single axis).

* `DragXY` - Selects data along the horizontal and vertical axes.
* `DragX` - Selects data along the horizontal axis only.
* `DragY` - Selects data along the vertical axis only.

The selected data points are returned as an array collection in the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/drag-cs4" %}

**Selection Type**

You can select multiple points or series (depending on the active `selectionMode`) by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#ismultiselect) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs11" %}

**Customizing Selection Style**

You can apply a custom style to selected points or series with the [`selectionStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/series#selectionstyle) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs12" %}

**Selection on Load**

You can select a point or series programmatically on a chart using the [`selectedDataIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#selecteddataindexes) property. Provide an array of `{ series: number, point: number }` objects where `series` is the series index and `point` is the data point index within that series; for example, `[{ series: 0, point: 1 }, { series: 1, point: 3 }]`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs13" %}

> Note: To use the selection feature, inject the `Selection` module into the `services`.

## Data Editing

The data editing feature provides drag-and-drop support for rendered points so that the y value of a point can be changed interactively. To use data editing, inject the `DataEditing` module into the chart's `services`.

Configure the following properties on the series-level `dragSettings`:

* `enable` - Set to `true` to enable drag editing for the series.
* `fill` - Sets the color of the drag handle.
* `minY` / `maxY` - Defines the minimum and maximum range of y values that a point can be moved to.

For the full list of supported properties (including `minX`, `maxX`, and the `dragComplete` event), see the [Series DragSettings API](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/data-editing-cs2" %}
