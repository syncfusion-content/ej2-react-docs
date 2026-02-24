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

Synchronized charts allow multiple chart instances to share common interactions so that actions performed on one chart are reflected across the others. This approach is useful for comparing related datasets and analyzing trends consistently across multiple visualizations.

## Tooltip synchronization

The tooltip can be synchronized across multiple charts by using the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart#hidetooltip) methods. When the user hovers over a data point in one chart, the `showTooltip` method can be invoked for the other charts to display the corresponding tooltip information simultaneously.

In the `showTooltip` method, specify the following parameters programmatically to enable the tooltip for a specific chart:

* `x` – The x-value of the data point or the x-coordinate.
* `y` – The y-value of the data point or the y-coordinate.

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

The crosshair can be synchronized across multiple charts by using the [`showCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#showcrosshair) and [`hideCrosshair`](https://ej2.syncfusion.com/react/documentation/api/chart#hidecrosshair) methods. When the user moves the pointer over one chart, calling the `showCrosshair` method on the other charts aligns the crosshair position across all synchronized charts, making data comparison easier.

In the `showCrosshair` method, specify the following parameters to render the crosshair for a particular chart:

* `x` – Specifies the x-value of the data point or the x-coordinate.
* `y` – Specifies the y-value of the data point or the y-coordinate.

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

Zoom levels can be synchronized across multiple charts by using the [`zoomComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs) event. In the `zoomComplete` event, retrieve the [`zoomFactor`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs#currentzoomfactor) and [`zoomPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/iZoomCompleteEventArgs#currentzoomposition) values from the zoomed chart.
These values can then be applied to the other charts to ensure that all synchronized charts maintain the same zoom state during user interaction.

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

Selection can be synchronized across multiple charts by using the [`selectionComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/iSelectionCompleteEventArgs) event. In the `selectionComplete` event, retrieve the selected data values or region from the active chart and apply the same selection state to the other charts.
This ensures consistent selection behavior across all connected charts and helps maintain a unified analysis experience.

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