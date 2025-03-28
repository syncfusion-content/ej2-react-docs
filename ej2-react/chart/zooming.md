---
layout: post
title: Zooming in React Chart component | Syncfusion
description: Learn here all about Zooming in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Zooming 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in React Chart component

To get start quickly with React Chart Zooming and Panning, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6Fq99_MnpSA" %}

## Enable zooming

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enableselectionzooming)
property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablepinchzooming) property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

>Note: Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11,
Chrome and Opera browsers support multi-touch in desktop devices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs4" %}

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons. Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

## Modes

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#mode) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X - Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY - Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs5" %}

## Toolbar

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show the desired options in the toolbar using the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#toolbaritems) property. Also using the [`showToolbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#showtoolbar) property, you can show toolkit for zooming and panning the chart during initial rendering itself.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs6" %}

### Toolbar customization

The zoom toolbar in the chart can be repositioned using the [`toolbarPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#toolbarposition) property, allowing flexible alignment and placement. It supports horizontal alignments (**Near**, **Center**, and **Far**) and vertical alignments (**Top**, **Middle**, and **Bottom**), with default values set to **Far** and **Top**, respectively. For precise placement, the [`x`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel/#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel/#y) properties can be used to adjust the toolbar's position within the chart area. Additionally, enabling the [`draggable`](https://ej2.syncfusion.com/react/documentation/api/chart/toolbarPositionModel/#draggable) property allows users to freely move the toolbar within the chart area, ensuring optimal usability.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs11" %}

## Enable scrollbar

Using the [`enableScrollbar`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablescrollbar) property, you can add a scrollbar to a zoomed chart. This scrollbar allows you to zoom or pan the chart. The appearance of the scrollbar can be customized using properties in [`scrollbarSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/). For example, you can use [`trackColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#trackcolor) and [`trackRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#trackradius) properties to customize the track of the scrollbar, and [`scrollbarRadius`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#scrollbarradius) and [`scrollbarColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#scrollbarcolor) properties to customize the scroller. The ability to zoom through the scrollbar can be enabled or disabled using the [`enableZoom`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#enablezoom) property in [`scrollbarSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/). Additionally, you can change the color of the grip and height of the scrollbar using the [`gripColor`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#gripcolor) and [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettingsModel/#height) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs7" %}

### Position
The [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/scrollbarSettings/#position) property allows users to specify their preferred scrollbar location. By default, both vertical and horizontal scrollbars are rendered near their respective axes. Using the customization options below, you can position the scrollbar as desired:

* Default: `placeNextToAxisLine`.
* Horizontal scrollbar: Available positions are `Top` and `Bottom`.
* Vertical scrollbar: Available positions are `Left` and `Right`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs12" %}

## Enable animation

Use the [`enableAnimation`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enableanimation) property to create smooth transitions when zooming in on the chart.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs10/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs10" %}

## Enable pan

Using [`enablePan`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomSettingsModel/#enablepan) property you can able to pan the zoomed chart without help of toolbar items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs8" %}

## Auto interval on zooming

By using [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#enableautointervalonzooming) property, the axis interval will get calculated automatically with respect to the zoomed range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/zoom-cs9" %}

>Note: To use zooming feature, we need to inject `Zoom` module into the `services`.