---
layout: post
title: Selection in React Chart | Syncfusion
description: Learn how to select points, series, or rectangular and lasso regions in Syncfusion React Chart using Point, Series, Cluster, Drag, and Lasso selection modes.
control: Selection
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Selection in React Chart

The Chart component provides selection support for both series and individual data points via click or tap interactions.

> When selection is enabled with the `Series` or `Cluster` mode, clicking a data point also selects the corresponding series legend item.

## Prerequisites

Before using the selection features, ensure the [React Chart getting started](getting-started.md) steps are complete and the `Selection` module is injected into the chart's `services`.

```ts
import { ChartComponent, Inject, Selection, LineSeries } from '@syncfusion/ej2-react-charts';

<ChartComponent>
  <Inject services={[LineSeries, Selection]} />
</ChartComponent>
```

## Selection modes

Multiple selection modes are available. The supported `selectionMode` values are:

| Mode | Description |
|---|---|
| None | Disables selection. |
| Point | Selects a single data point. |
| Series | Selects an entire series. |
| Cluster | Selects all data points that share the same index across series. |
| DragXY | Selects data points within a rectangular region (both axes). |
| DragX | Selects data points within a rectangular region (horizontal axis). |
| DragY | Selects data points within a rectangular region (vertical axis). |
| Lasso | Selects data points inside a freehand-drawn region. |

## Point

A single data point can be selected by setting the `selectionMode` property to `Point`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs1" %}

## Series

An entire series can be selected by setting the `selectionMode` property to `Series`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs2" %}

## Cluster

Cluster selection allows selection of data points that share the same index across all series. This can be enabled by setting the `selectionMode` property to `Cluster`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs3" %}

## Lasso selection

Lasso selection allows users to draw a freehand shape on the chart to select data points within that region. Set the `selectionMode` property to `Lasso` to enable this feature. Multiple regions can be selected on the same chart using this mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/drag-cs2" %}

## Multi-selection

Multiple data points or series can be selected simultaneously by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#ismultiselect) property. The `isMultiSelect` property accepts a boolean value and defaults to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs4" %}

## Multi-region selection

Multiple regions can be selected on the chart by setting the `allowMultiSelection` property to **true**. The `allowMultiSelection` property accepts a boolean value and defaults to `false`, and applies to rectangular (`DragXY`, `DragX`, `DragY`) and `Lasso` selection modes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/drag-cs3" %}

## Rectangular selection

**DragXY, DragX, and DragY**

Rectangular selection enables users to select a group of data points within a defined region by setting the `selectionMode` property accordingly.

* **DragXY** – Selects data points along both the horizontal and vertical axes.
* **DragX** – Selects data points along the horizontal axis.
* **DragY** – Selects data points along the vertical axis.

The selected data points are returned as an array collection through the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/iDragCompleteEventArgs) event. The `dragComplete` event payload includes the selected data points and the rectangular region (x and y range).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/drag-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/drag-cs1" %}

## Selection on load

Data points or series can be selected programmatically when the chart is loaded by using the [`selectedDataIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#selecteddataindexes) property. The `selectedDataIndexes` value is an array of `{ seriesIndex, pointIndex }` objects.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs5" %}

## Selection through legend

Points or series can also be selected through the legend by enabling the [`toggleVisibility`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#togglevisibility) property.  
To visually emphasize the selected series, use the [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#enablehighlight) property.

> When [`highlightMode`](https://ej2.syncfusion.com/react/documentation/api/chart/highlightmode) is set to `Series`, `Cluster`, or `Point`, legend highlighting occurs even if [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#enablehighlight) is set to **false**. In this case, `highlightMode` takes precedence, and hovering over legend items highlights the corresponding series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs6" %}

## Customization for selection

Custom styles can be applied to selected points or series by using the [`selectionStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/series#selectionstyle) property. The `selectionStyle` property accepts a string value (for example, a CSS color) and applies to the selected point or series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/selection-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/selection-cs7" %}

> Note: To use the selection feature, inject the `Selection` module into the chart's `services` as shown in the [Prerequisites](#prerequisites) section.

## Troubleshooting

* If selection has no effect, confirm the `Selection` module is injected via `<Inject services={[Selection]} />`.
* For drag-based selection, ensure the chart receives `pointer` events (no overlapping elements blocking the chart area).
* If `isMultiSelect` or `allowMultiSelection` does not behave as expected, verify the `selectionMode` is set to a compatible value.

## See also

* [Getting started with React Chart](getting-started)
* [Selected data grid in React Chart](how-to/selected-data-grid)
