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

An axis can be positioned dynamically within the chart area using the [`crossesAt`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#crossesat) and [`crossesInAxis`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#crossesinaxis) properties. The [`crossesAt`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#crossesat) property specifies the value (datetime, numeric, or logarithmic) at which the axis line intersects another axis, while the [`crossesInAxis`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#crossesinaxis) property defines the name of the axis with which the current axis should intersect. This customization is useful for emphasizing specific reference points or thresholds in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs1" %}

## Title

A title can be added to an axis using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#title) property. Axis titles provide context and help users quickly understand the data represented along the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs2" %}

## Title Rotation

The orientation of the axis title can be adjusted using the [`titleRotation`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#titlerotation) property. This property supports rotation values from 0 to 360 degrees, allowing better alignment based on the chart layout and available space.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs3" %}

## Tick Lines Customization

The appearance of both major and minor tick lines can be customized using the [`majorTickLines`](https://ej2.syncfusion.com/react/documentation/api/chart/majorTickLines) and [`minorTickLines`](https://ej2.syncfusion.com/react/documentation/api/chart/minorTickLines) properties. These properties allow customization of the `width`, `color`, and `size` of tick lines to enhance chart readability.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs4" %}

## Grid Lines Customization

Grid lines can be styled using the [`majorGridLines`](https://ej2.syncfusion.com/react/documentation/api/chart/majorGridLines) and [`minorGridLines`](https://ej2.syncfusion.com/react/documentation/api/chart/minorGridLines) properties. These options support customization of `width`, `color`, and `dashArray`, helping users distinguish data points and scales more effectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs1" %}

## Multiple Axis

In addition to the primary X and Y axes, multiple additional axes can be added to a chart. Each series can be associated with a specific axis by mapping it to the axis using a unique axis name. This is useful for visualizing datasets with different units or scales within the same chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs5" %}

## Inversed Axis

When an axis is inversed, the highest value is displayed closer to the origin, and the lowest value appears farther away. This behavior can be enabled by setting the [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#isinversed) property to `true`. Inversed axes are commonly used in scenarios such as ranking or inverted value representations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs6" %}

## Opposed Position

An axis can be placed on the opposite side of its default position by setting the [`opposedPosition`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#opposedposition) property to `true`. This option is useful when displaying multiple axes or when optimizing space usage in complex chart layouts.
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs2" %}