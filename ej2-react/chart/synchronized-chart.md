---
layout: post
title: Synchronized Charts in React Chart component | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Synchronized charts
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Synchronized Charts in React Chart component

## Tooltip synchronization

The tooltip can be synchronized across multiple charts using the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#hidetooltip) methods. When we hover over a data point in one chart, we call the `showTooltip` method for the other charts to display related information in other connected charts simultaneously.

In the `showTooltip` method, specify the following parameters programmatically to enable tooltip for a particular chart:

* `x` - Data point x-value or x-coordinate value.
* `y` - Data point y-value or y-coordinate value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/synchronized-cs1" %}

## Crosshair synchronization

The crosshair can be synchronized across multiple charts using the [`showCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#showcrosshair) and [`hideCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#hidecrosshair) methods. When we hover over one chart, we call the `showCrosshair` method for the other charts to align with data points in other connected charts, simplifying data comparison and analysis.

In the `showCrosshair` method, specify the following parameters programmatically to enable crosshair for a particular chart:

* `x` - Specifies the x-value of the point or x-coordinate.
* `y` - Specifies the y-value of the point or y-coordinate.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/synchronized-cs2" %}

## Zooming synchronization

You can maintain constant zoom levels across multiple charts using the [`zoomComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs/) event. In the `zoomComplete` event, obtain the [`zoomFactor`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs/#currentzoomfactor) and [`zoomPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs/#currentzoomposition) values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/synchronized-cs3" %}

## Selection synchronization

You can select the data across multiple charts using the [`selectionComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/iSelectionCompleteEventArgs/) event. In the `selectionComplete` event, obtain the selected values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/synchronized-cs4" %}