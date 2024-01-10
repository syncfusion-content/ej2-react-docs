---
layout: post
title: Axis customization in React 3D Chart component | Syncfusion
description: Learn here all about axis customization in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in React 3D Chart control

## Title

The title for the axis can be added by using the [`title`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#title) property. It helps to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#titlestyle) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs1" %}

## Title rotation

The title can be rotated from 0 to 360 degree by using the [`titleRotation`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#titlerotation) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs2" %}

## Tick lines customization

The [`width`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/majorTickModel/#width), [`color`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/majorTickModel/#color) and [`height`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/majorTickModel/#height) of the minor and major tick lines can be customized by using the [`majorTickLines`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#majorticklines) and [`minorTickLines`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minorticklines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs3" %}

## Grid lines customization

The [`width`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/minorGridModel/#width) and [`color`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/minorGridModel/#color) of the minor and major grid lines can be customized by using the [`majorGridLines`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#majorgridlines) and [`minorGridLines`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs4" %}

## Multiple axis

In addition to primary X and Y axis, n number of axis can be added to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs5" %}

## Inversed axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner, set the [`isInversed`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#isinversed) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs6" %}

## Opposed position

To place an axis opposite from its original position, set the [`opposedPosition`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#opposedposition) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/axis-customization/axis-cs7" %}