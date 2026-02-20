---
layout: post
title: Ranges in React Linear gauge component | Syncfusion
description: Learn here all about Ranges in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Ranges 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ranges in React Linear gauge component

<!-- markdownlint-disable MD013 -->
Range is the set of values in the axis. The range can be defined using the [`start`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#start) and [`end`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#end) properties in the [`RangeDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel). Any number of ranges can be added to the Linear Gauge using the [`RangesDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel#ranges).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs1" %}

## Customizing the range

Ranges can be customized using the following properties in [`RangeDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel).

* [`startWidth`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#startwidth) - Customize the range thickness at the start axis value.
* [`endWidth`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#endwidth) - Customize the range thickness at the end axis value.
* [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#color) - Customize the range color.
* [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#position) - To place the range. By default, the range is placed outside of the axis. To change the position, this property can be set as "**Inside**", "**Outside**", "**Cross**", or "**Auto**".
* [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#offset) - To place the range with specified distance from the axis.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel#border) - Customize color and width of range border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/ranges-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/ranges-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs2" %}

## Setting the range color for the labels

To set the color of the labels like the range color, set the [`useRangeColor`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel#userangecolor) property as **true** in the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis#labelstyle).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/ranges-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/ranges-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs3" %}

## Multiple ranges

Multiple ranges can be added to the Linear Gauge by adding collections of [`RangeDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel) in the [`RangesDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel#ranges) and customization of ranges can be done with [`RangeDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/rangeModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/ranges-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/ranges-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs4" %}

## Gradient Color

Gradient support allows the addition of multiple colors in the range. The following gradient types are supported in the Linear Gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear-gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient#endvalue) property. The color stop values such as [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#color), [`opacity`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#opacity), and [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#offset) to be defined in [`colorStop`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient#colorstop).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/code-path/ranges-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/code-path/ranges-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs5" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/radialGradient#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/radialGradient#outerposition) property. The color stop values such as [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#color), [`opacity`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#opacity) and [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/colorStopModel#offset) to be defined in[`colorStop`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/radialGradient#colorstop).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/ranges-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/ranges-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/ranges-cs6" %}

>If we set both gradients for the range, only the linear gradient gets rendered. If we set the [`startValue`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient#startvalue) and [`endValue`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient#endvalue) of the [`linearGradient`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGradient) as empty strings, then the radial gradient gets rendered in the range of the Linear Gauge.
