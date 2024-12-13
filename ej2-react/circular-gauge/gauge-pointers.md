---
layout: post
title: Gauge pointers in React Circular gauge component | Syncfusion
description: Learn here all about Gauge pointers in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge pointers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Gauge pointers in React Circular gauge component

Pointers are used to indicate values on the axis. Value of the pointer can be modified using the [`value`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#value-number) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs1" %}

Gauge supports 3 types of pointers such as `Needle`, `RangeBar` and `Marker`. You can choose any one of the pointer by using [`type`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#type-string) property.

## Needle Pointers

A needle pointer contains three parts, a needle, a cap / knob and a tail. The length of the needle can be customized by using [`radius`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#radius-string) property.
The length of the tail can be customized by using [`length`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/needleTailModel/#length-string)property.
The radius of the cap can be customized by using [`radius`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/capModel/#radius-number)
in cap object. The needle and tail length takes value either in `percentage` or `pixel`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs2" %}

<!-- markdownlint-disable MD036 -->

**Customization**

Needle color and width can be customized by using [`color`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#color-string) and [`pointerWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#pointerwidth-number) property.
Cap and tails can be customized by using [`cap`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#cap-capmodel) and [`needleTail`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#needletail-needletailmodel) object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs3" %}

The appearance of the needle pointer can be customized by using [`needleStartWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#needlestartwidth) and [`needleEndWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#needleendwidth).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs4" %}

## RangeBar Pointer

RangeBar pointer is like ranges in an axis, that can be placed on gauge to mark the pointer value. RangeBar starts from the beginning of the gauge and ends at the pointer value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs5" %}

**Customization**

RangeBar can be customized in terms of color, border and thickness by using [`color`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#color-string), [`border`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#border-bordermodel) and [`pointerWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#pointerwidth-number) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs6" %}

## Rounded corner for range bar pointer

The start and end pointers of range bar in the circular gauge are rounded to form arc gauges.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs7" %}

## Marker Pointer

Different type of marker shape can be used to mark the pointer value in axis. You can change the marker shape using [`markerShape`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#markershape-string) property in pointer. Gauge marker supports `Circle`, `Rectangle`, `Triangle`, `InvertedTriangle` and `Diamond` shape.

We can use image instead of rendering marker shape to denote the pointer value. It can be achieved by setting [`markerShape`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#markershape-string) to Image and assigning  image path to [`imageUrl`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#imageurl-string) in pointer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs8" %}

**Customization**

The marker can be customized in terms of color, border, width and height by using [`color`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#color-string), [`border`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#border-bordermodel), [`markerWidth`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#markerwidth-number) and [`markerHeight`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#markerheight-number) property in [`pointer`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs9" %}

## Dragging pointer

The pointers can be dragged along the axis line by clicking and dragging them. To enable or disable the drag functionality for all pointers across all axes, use the [enablePointerDrag](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/circularGaugeModel/#enablepointerdrag) property. When this property is set to **true**, all pointers can be dynamically adjusted by dragging. Setting it to **false** keeps all pointers fixed in their specified positions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs10" %}

### Enabling drag functionality for a specific pointer

To enable or disable the drag functionality for specific pointers along the axis line, use the `enableDrag` property in the required pointer model.

>When the `enableDrag` property is enabled for any individual pointer model, the `enablePointerDrag` property becomes ineffective.

The following example demonstrates how to enable the drag functionality for multiple pointers individually.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-drag-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-drag-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-drag-cs1    " %}

## Multiple Pointers

In addition to the default pointer, you can add n number of pointer to an axis by using `pointers` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs11" %}

## Animation

Pointer will get animate on loading the gauge, this can be handled by using [`animation`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/#animation-animationmodel) property in pointer.
The [`enable`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/animationModel/#enable-boolean) property in animation allows you to enable or disable the animation.
The [`duration`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/animationModel/#duration-number) property specify the duration of the animation in milliseconds.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs12" %}

## Gradient Color

Gradient support allows to add multiple colors in the ranges and pointers of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [`startValue`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient/#endvalue) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/linearGradient/#colorstop) property.

The linear gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs13" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient/#outerposition) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/radialGradient/#colorstop) property.

The radial gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-pointers-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-pointers-cs14" %}