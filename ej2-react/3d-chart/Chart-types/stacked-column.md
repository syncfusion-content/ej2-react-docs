---
layout: post
title: 100% Stacked Column Chart in React 3D Chart | Syncfusion
description: Learn how to render a 100% stacked 3D column chart in Syncfusion React 3D Chart to show the relative share of each category as a full vertical bar.
control: Stack Column Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Column Chart in React 3D Chart

## 100% Stacked column chart

To render a `100% stacked column` series, use series [`type`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#type) as `StackingColumn100` and inject `StackingColumnSeries3D` module into the services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stacked-column/stacked-column-cs1" %}

## 100% Cylindrical stacked column chart

To render a 100% cylindrical stacked column chart, set the [`columnFacet`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stacked-column/stacked-column-cs2" %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

* [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#fill) – Specifies the color of the series.
* [opacity](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#opacity) – Specifies the opacity of the [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#fill) color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stacked-column/stacked-column-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stacked-column/stacked-column-cs3" %}