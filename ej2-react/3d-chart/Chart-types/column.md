---
layout: post
title: Column Chart in React 3D Chart component | Syncfusion
description: Learn here all about column chart in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Chart in React 3D Chart control

## Column chart

To render a column series, use series [`type`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#type) as `Column` and inject `ColumnSeries3D` module into the services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/column/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/column/column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/column/column-cs1" %}

## Column space and width

The [`columnSpacing`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#columnspacing) and [`columnWidth`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#columnwidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/column/column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/column/column-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/column/column-cs2" %}

## Grouped column

The data points can be grouped in the column type charts by using the [`groupName`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#groupname) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/column/column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/column/column-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/column/column-cs3" %}

## Cylindrical column chart

To render a cylindrical column chart, set the [`columnFacet`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/column/column-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/column/column-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/column/column-cs4" %}

## Series customization

The following properties can be used to customize the `column` series.

* [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/column/column-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/column/column-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/column/column-cs5" %}