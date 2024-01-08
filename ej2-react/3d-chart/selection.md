---
layout: post
title: Selection in React 3D Chart component | Syncfusion
description: Learn here all about selection in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Selection in React 3D Chart control

Chart provides selection support for the series and its data points on mouse click.

>When Mouse is clicked on the data points, the corresponding series legend also will be selected.

We have different types of selection mode for selecting a data.

* None
* Point
* Series
* Cluster

## Point

To select a point, set the [`selectionMode`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Point**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs1" %}

## Series

To select a series, set the [`selectionMode`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Series**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs2" %}

## Cluster

To select the points that corresponds to the same index in all the series, set the [`selectionMode`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Cluster**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs3" %}

## Selection type

To select multiple points or series, enable the [`isMultiSelect`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#ismultiselect) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs4" %}

## Selection on load

To select a point or series programmatically on a chart use [`selectedDataIndexes`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#selecteddataindexes) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs5" %}

## Selection through on legend

To select a point or series through on legend use [`toggleVisibility`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#togglevisibility) property. Also, use [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#enablehighlight) property for highlighting the series through legend.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/selection/selection-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/selection/selection-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/selection/selection-cs6" %}