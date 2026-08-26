---
layout: post
title: Data Editing in React Chart | Syncfusion
description: Learn how to enable interactive data editing in Syncfusion React Chart so users can drag and drop chart points to update values within a configured range.
control: Data editing
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->
# Data Editing in React Chart

## Enable Data Editing

Data editing allows users to modify chart data points interactively by dragging and dropping the rendered points. This functionality is enabled by injecting the `DataEditing` module into the chart's `services`, which adds drag-and-drop support for data points.

Once enabled, the `y` value of a data point can be changed dynamically by dragging it. To activate data editing, set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettings#enable) property of the [`dragSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettings) to **true** on the corresponding series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/data-editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/data-editing-cs1" %}

## Customization

The appearance and value range of the editable data points can be customized using the following `dragSettings` properties:

* [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettings#fill) – Sets the color of the editable data points.
* [`minY`](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettings#miny) – Defines the minimum allowable `y` value when editing a data point.
* [`maxY`](https://ej2.syncfusion.com/react/documentation/api/chart/dragSettings#maxy) – Defines the maximum allowable `y` value when editing a data point.

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

## Events

The following events are raised while a data point is being dragged. Use them to read or persist the edited value.

The [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragstart), [`drag`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#drag), and [`dragEnd`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragend) events expose an [`IDataEditingEventArgs`](https://ej2.syncfusion.com/react/documentation/api/chart/idataeditingeventargs) payload with the following fields:

* `newValue` – The new `y` value computed from the drag.
* `oldValue` – The original `y` value before the drag.
* `point` – The [`Points`](https://ej2.syncfusion.com/react/documentation/api/chart/points) instance being dragged.
* `pointIndex` – Index of the point within its series.
* `series` – The [`Series`](https://ej2.syncfusion.com/react/documentation/api/chart/series) that contains the point.
* `seriesIndex` – Index of the series in the chart.

The [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragcomplete) event exposes an [`IDragCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/chart/idragcompleteeventargs) payload with:

* `selectedDataValues` – The selected X and Y values of the edited data.
* `name` – The name of the event.
* `cancel` – Set to **true** to cancel the operation.

| Event | Description |
| --- | --- |
| [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragstart) | Triggered when a data point drag begins. |
| [`drag`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#drag) | Triggered continuously while a data point is being dragged. |
| [`dragEnd`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragend) | Triggered when a data point drag operation ends. |
| [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragcomplete) | Triggered after a data point drag is completed. |

