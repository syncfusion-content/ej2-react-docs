---
layout: post
title: Stacked Bar Chart in React 3D Chart component | Syncfusion
description: Learn here all about stacked bar chart in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked bar chart in React Chart component

## Stacked bar chart

To render a stacked bar series, use series [`type`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#type) as `StackingBar` and inject `StackingBar3D` module into the services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-bar/stack-bar-cs1" %}

## Stacking group

To group the stacked bar, the [`stackingGroup`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#stackinggroup) property can be used. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-bar/stack-bar-cs2" %}

## Cylindrical stacked bar chart

To render a cylindrical stacked bar chart, set the [`columnFacet`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-bar/stack-bar-cs3" %}

## Series customization

The following properties can be used to customize the `stacked bar` series.

* [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/stack-bar/stack-bar-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/stack-bar/stack-bar-cs4" %}