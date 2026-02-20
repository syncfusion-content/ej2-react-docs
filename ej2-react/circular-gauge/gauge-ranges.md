---
layout: post
title: Gauge ranges in React Circular gauge component | Syncfusion
description: Learn here all about Gauge ranges in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge ranges 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Gauge ranges in React Circular gauge component

You can categories certain interval on gauge axis using [`ranges`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#properties) property.

## Start and End

Start and end value of a range in an axis can be customized by using [`start`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#start-number) and [`end`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#end-number) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs1" %}

## Customization

Color and thickness of the range can be customized by using [`color`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#color-string),
[`startWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#startwidth-number) and [`endWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#endwidth-number) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs2" %}

<!-- markdownlint-disable MD036 -->

## Radius

You can place the range inside or outside of the axis by using [`radius`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/range#radius-string) property. The radius of the range can takes value either in percentage or in pixels. By default, ranges take 100% of the axis radius.

**In Pixel**

You can set the radius of the range in pixel as demonstrated below,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs3" %}

<!-- markdownlint-disable MD036 -->

**In Percentage**

By setting value in percentage, range gets its dimension with respect to its axis radius. For example, when the radius is ‘50%’, range renders to half of the axis radius.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs4" %}

## Dragging range

The ranges can be dragged on the axis values by clicking and dragging the same. To enable or disable the range drag, use the [`enableRangeDrag`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/circularGaugeModel#enablerangedrag) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs15" %}

## Multiple Ranges

You can add multiple ranges to an axis with the above customization as demonstrated below.

*Note: You can set the range color to axis ticks and labels by enabling `useRangeColor` property in [`majorTicks`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tick), [`minorTicks`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tick) and [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/label) object.*

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs5" %}

## Rounded corner radius

You can customize the corner radius using the `roundedCornerRadius` property in `ranges`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs6" %}

## Gradient Color

Gradient support allows to add multiple colors in the ranges and pointers of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient#endvalue) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient#colorstop) property.

To apply linear gradient to the range, follow the below code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/code-path/gauge-ranges-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/code-path/gauge-ranges-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs7" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient#outerposition) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient#colorstop) property.

To apply radial gradient to the range, follow the below code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-ranges-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-ranges-cs8" %}

## See also

* [Tooltip for Ranges](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-user-interaction#tooltip-for-ranges)
