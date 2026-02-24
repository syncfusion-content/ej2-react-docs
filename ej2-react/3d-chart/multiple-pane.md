---
layout: post
title: Multiple panes in React 3D Chart component | Syncfusion
description: Learn here all about multiple panes in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in React 3D Chart control

The chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#rows) and [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#columns).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#rows) property of the 3D chart.

* The space for each row can be allocated by using the [`height`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionRowModel#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#rowindex) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/multiple-pane/multi-pane-cs1" %}

For spanning the vertical axis along multiple rows, use [`span`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#span) property of an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/multiple-pane/multi-pane-cs2" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#columns) property of the 3D chart.

* The space for each column can be allocated by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart3d/threeDimensionColumnModel#width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#columnindex) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/multiple-pane/multi-pane-cs3" %}

For spanning the vertical axis along multiple column, you can use [`span`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#span) property of an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/multiple-pane/multi-pane-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/multiple-pane/multi-pane-cs4" %}