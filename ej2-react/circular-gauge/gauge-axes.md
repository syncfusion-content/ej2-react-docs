---
layout: post
title: Gauge axes in React Circular gauge component | Syncfusion
description: Learn here all about Gauge axes in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge axes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Gauge axes in React Circular Gauge component

By default, gauge will be displayed with an axis. Each axis contains its own ranges, pointers and annotation.

The video below demonstrates how to add and customize axis in the Circular Gauge component.

{% youtube "https://www.youtube.com/watch?v=8hUwWI842ho" %}

<!-- markdownlint-disable MD036 -->

## Axis Customization

You can customize the width and color of an axis line by using [`lineStyle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/line) property.
Background for an axis can be customized by using [`background`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#background-string) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs1" %}
<!-- markdownlint-disable MD036 -->

## Angles and Direction

Circular gauge axis can sweep from 0 to 360 degrees. By default start angle of an axis is 200 degree and end angle is 160 degree and you can customize this option by using [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#startangle-number) and [`endAngle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#endangle-number) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs2" %}
<!-- markdownlint-disable MD036 -->

The [`direction`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#direction-string) property enables you to render the gauge axis either in `ClockWise` or in `AntiClockWise` direction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs3" %}
<!-- markdownlint-disable MD036 -->

## Axis Radius

By default, radius of an axis is calculated based on the available size. You can customize this, by using [`radius`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#radius-string) property. It takes value either in `percentage` or in `pixel`.

**In Pixel**

You can set the radius of the gauge in pixel as demonstrated below,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs4" %}
<!-- markdownlint-disable MD036 -->

**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its available size. For example, when the radius is ‘50%’, gauge renders to half of the available size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs5" %}
<!-- markdownlint-disable MD036 -->

## Ticks

You can customize the [`height`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#color-string), [`color`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#color-string) and [`width`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#width-number) of major ticks and minor ticks by
using [`majorTicks`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#majorticks-tickmodel) and [`minorTicks`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#minorticks-tickmodel) property.
By default, [`interval`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#interval-number) for `majorTicks`  will be calculated automatically and also you can customize the interval for major and minor ticks using `interval` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs6" %}

**Tick Position**

Both minor and major ticks can be moved by using [`offset`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#offset-number) and
[`position`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#position-string) property. The [`offset`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#offset-number) defines the distance between the axis and ticks. By default, offset value is 0.
The [`position`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/tickModel#position-string) will place the ticks either inside or outside of the axis.

By default, ticks will be placed `inside` the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs7" %}

## Labels

Labels of an axis can be customized by using [`font`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#font-fontmodel) property in
[`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#labelstyle-labelmodel) options.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/code-path/gauge-axes-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/code-path/gauge-axes-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs8" %}

**Label Position**

Labels can be moved by using [`offset`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#offset-number) or [`position`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#position-string) property.
The [`offset`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#offset-number) defines the distance between the labels and ticks.
By default, offset value is 0. 
The [`position`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#position-string) will place the labels either inside or outside of the axis. By default, labels will be placed `inside` the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs9" %}

**Auto Angle**

Labels can be swept along the axis angle by enabling [`autoAngle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#autoangle-boolean) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs10" %}

**Smart Labels**

When an axis makes a complete circle, then the first and last label of the axis will get overlap with each other.
In this scenario, you can either hide 1st or last label using [`hiddenLabel`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#hiddenlabel-string) property.
When `hiddenLabel` value is `First`, then the 1st label will be hidden and when the `hiddenLabel` value is 'Last',
then the last label will be hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs11" %}

**Label Format**

Axis labels can be formatted by using [`format`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/labelModel#format-string) property in [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/label) and its supports all globalize format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs12" %}

The following table describes the result of applying some commonly used label formats on numeric values.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1,000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1,000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

**Custom Label Format**

Axis labels support custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/code-path/gauge-axes-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/code-path/gauge-axes-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs13" %}

**Hide intersecting axis labels**

When the axis labels overlap with each other, you can hide the intersected labels by setting the `hideIntersectingLabel` property to true in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs14" %}

## Minimum and Maximum

The [`minimum`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#minimum-number) and [`maximum`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/axis#maximum-number) properties enables you to customize the start and end values of an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs15" %}

## Multiple Axes

In addition to the default axis, you can add n number of axis to a gauge. Each axis will have its own ranges, pointers, annotations and customization options.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-axes-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-axes-cs16" %}
