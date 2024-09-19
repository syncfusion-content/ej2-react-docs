---
layout: post
title: Axis customization in React Chart component | Syncfusion
description: Learn here all about Axis customization in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Axis customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in React Chart component

## Axis Crossing

An axis can be positioned in the chart area using [`crossesAt`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#crossesat) and [`crossesInAxis`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#crossesinaxis) properties. The [`crossesAt`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#crossesat) property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected with the vertical axis or vice-versa, and the [`crossesInAxis`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#crossesinaxis) property specifies the axis name with which the axis line has to be crossed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs1" %}

## Title

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#title) property to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#titlestyle) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs2" %}

## Title Rotation

By using the [`titleRotation`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#titlerotation) property, you can rotate the axis title from 0 to 360 degree.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs3" %}

## Tick Lines Customization

You can customize the  [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/majorTickLinesModel/#width), and [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/majorTickLinesModel/#color) of the minor and major tick lines, using [`majorTickLines`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#minorticklines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs4" %}

## Grid Lines Customization

You can customize the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/majorGridLinesModel/#width), [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/majorGridLinesModel/#color) and [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/chart/majorGridLinesModel/#dasharray) of the minor and major grid lines using [`majorGridLines`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs1" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs5" %}

## Inversed Axis

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#isinversed) to true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs6" %}

## Opposed Position

To place an axis opposite from its original position, set [`opposedPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#opposedposition) property of the axis to true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs2" %}