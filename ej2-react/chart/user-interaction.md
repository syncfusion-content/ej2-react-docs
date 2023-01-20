---
layout: post
title: User interaction in React Chart component | Syncfusion
description: Learn here all about User interaction in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# User interaction in React Chart component

## Tooltip

Chart will display details about the points through tooltip, when the mouse is moved over the point

To get start quickly with React Chart Tooltip, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Tooltip for Data Point**

<!-- markdownlint-disable MD012 -->
By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#enable) property to true and by injecting `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs7" %}

**Format the Tooltip**

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format '${series.name} ${point.x}' shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs8" %}

<!-- markdownlint-disable MD013 -->

**Tooltip Template**

Any HTML elements can be displayed in the tooltip by using the ‘template’ property of the tooltip. You can use the ${x} and ${y} as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs9" %}

**Customize the Appearance of Tooltip**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs10" %}

## Zooming  and Panning

To get start quickly with React Chart Zooming and Panning, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Zooming**

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enableselectionzooming)
property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablepinchzooming)
property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

 >Note: Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome and Opera browsers support multi-touch in desktop devices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs1" %}

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons. Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

**Modes of Zooming**

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#mode) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X - Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY - Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs2" %}

**Customizing Zooming Toolbar**

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show your desire tools in the toolbar using [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#toolbaritems) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs3" %}

>Note: To use zooming feature, we need to inject `Zoom` module into the `services`.

## Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

To get start quickly with React Chart Crosshair, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=nQhhLNUzyM4" %}

**Enable Crosshair**

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.



{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs4" %}

**Customization**

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel/#fill) and [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel/#textstyle) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#line) property in the crosshair.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs5" %}

>Note: To use crosshair feature, we need to inject `Crosshair` module into the `services`.

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `Crosshair` and `Tooltip` module into the `services`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettings/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/trackball-cs2" %}

## Selection

Chart provides selection support for the series and its data points on mouse click.

>When Mouse is clicked on the data points, the corresponding series legend will also be selected.

We have different type of selection mode for selecting the data. They are,

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

**Point**

 You can select a point, by setting `selectionMode` to point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs8" %}

**Series**

 You can select a series, by setting `selectionMode` to series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs9" %}

**Cluster**

You can select the points that corresponds to the same index in all the series, by setting `selectionMode` to cluster.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs10" %}

**DragXY, DragX and DragY**

To fetch the collection of data under a particular region, you have to set `selectionMode` as `DragXY`.

* DragXY - Allows us to select data with respect to horizontal and vertical axis.
* DragX - Allows us to select data with respect to horizontal axis.
* DragY - Allows us to select data with respect to vertical axis.

The selected data’s are returned as an array collection in the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#dragcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/drag-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/drag-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/drag-cs4" %}

**Selection Type**

You can select multiple points or series, by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#ismultiselect) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs11" %}

**Customizing Selection Style**

You can apply custom style to selected points or series with [`selectionStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#selectionstyle) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs12" %}

**Selection on Load**

You can able to select a point or series programmatically on a chart using [`selectedDataIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#selecteddataindexes) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/selection-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/selection-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/selection-cs13" %}

>Note: To use select feature, we need to Inject `Selection` module into the `services`.

## Data Editing

We can use the data editing through inject the `DataEditing` module in the chart. It provides drag and drop support to the rendered points. Now, we can change the location or value of the point based on its `y` value.  To enable the data editing, set the `enable` property to true in the drag settings of the series. Also, we can set color using `fill` property and set the data editing minimum and maximum range using `minY` and `maxY` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/data-editing-cs2" %}
