---
layout: post
title: Category axis in React 3D Chart component | Syncfusion
description: Learn here all about category axis in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in React 3D Chart control

The category axis is the horizontal axis of a 3D chart that shows text values rather than numerical values. Compared to the vertical axis, this axis has fewer labels. The following sample shows to render the 3D chart using category axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/category-axis/category-axis-cs1" %}

>Note: To use category axis, we need to inject `Category3D` module into the services and set the [`valueType`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#valuetype) of axis to **Category**.

## Labels placement

By default, category axis labels are placed between ticks in an axis. It can also be placed on ticks using the [`labelPlacement`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#labelplacement) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-c2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/category-axis/category-axis-cs2" %}

## Range

The range of the category axis can be customized using [`minimum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minimum), [`maximum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#maximum) and [`interval`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#interval) properties of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-c3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/category-axis/category-axis-cs3" %}

## Indexed category axis

The category axis also can be rendered based on the index values of the data source. This can be achieved by defining the [`isIndexed`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#isindexed) property to **true** in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/category-axis/category-axis-c4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/category-axis/category-axis-cs4" %}