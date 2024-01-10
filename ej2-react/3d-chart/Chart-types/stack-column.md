---
layout: post
title: Stacked Column Chart in React 3D Chart component | Syncfusion
description: Learn here all about stacked column chart in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Stacked column chart in React 3D Chart control

## Stacked column chart

To render a stacked column series, use series [`type`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#type) as `StackingColumn` and inject `StackingColumnSeries3D` module into the services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-column/stack-column-cs1" %}

## Stacking group

To group the stacked column, the [`stackingGroup`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#stackinggroup) property can be used. The columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-column/stack-column-cs2" %}

## Cylindrical stacked column chart

To render a cylindrical stacked column chart, set the [`columnFacet`](../../api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-column/stack-column-cs3" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-column/stack-column-cs4" %}