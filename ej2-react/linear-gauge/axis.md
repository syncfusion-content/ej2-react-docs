---
layout: post
title: Axis in React Linear gauge component | Syncfusion
description: Learn here all about Axis in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis in React Linear gauge component

<!-- markdownlint-disable MD013 -->

Axis is used to indicate the numeric values in the linear scale. The Linear Gauge component can have any number of axes. The sub-elements of an axis are line, ticks, labels, ranges, and pointers.

## Setting the start value and end value of the axis

The start value and end value for the Linear Gauge can be set using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/#minimum) and [`maximum`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/#maximum) properties in the [`AxisDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis/) respectively. By default, the start value of the axis is **0** and the end value of the axis is **100**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs1" %}

## Line Customization

The following properties in the [`line`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/lineModel/) can be used to customize the axis line in the Linear Gauge.

* [`height`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/lineModel/#height) - To set the length of the axis line.
* [`width`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/lineModel/#width) - To set the thickness of the axis line.
* [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/lineModel/#color) - To set the color of the axis line.
* [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/lineModel/#offset) - To render the axis line with the specified distance from the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs2" %}

## Ticks Customization

Ticks are used to specify the interval in the axis. Ticks are of two types, major ticks and minor ticks. The following properties in the [`majorTicks`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/#majorticks) and [`minorTicks`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/#minorticks) can be used to customize the major ticks and minor ticks respectively.

* [`height`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#height) - To set the length of the major and minor ticks in pixel values.
* [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#color) - To set the color of the major and minor ticks of the Linear Gauge.
* [`width`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#width) - To set the thickness of the major and minor ticks in pixel values.
* [`interval`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#interval) - To set the interval for the major ticks and minor ticks in the Linear Gauge.

<!-- markdownlint-disable MD036 -->

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs3" %}

### Positioning the ticks

The minor and major ticks can be positioned by using the [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#offset) and [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#position) properties. The [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#offset) is used to render the ticks with the specified distance from the axis. By default, the offset value is **0**. The possible values of the [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/tickModel/#position) property are **Inside**, **Outside**, **Cross**, and **Auto**. By default, the ticks will be placed inside the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs4" %}

## Labels Customization

The style of the labels can be customized using the following properties in the [`font`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#font) property in [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/).

* [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#color) - To set the color of the axis label.
* [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontfamily) - To set the font family of the axis label.
* [`fontStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontstyle) - To set the font style of the axis label.
* [`fontWeight`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontweight) - To set the font weight of the axis label.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#opacity) -  To set the opacity of the axis label.
* [`size`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#size) - To set the size of the axis label.

<!-- markdownlint-disable MD036 -->

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs5" %}

### Positioning the axis label

Labels can be positioned by using [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#offset) and [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#position) properties in the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/). The [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#offset) defines the distance between the labels and ticks. By default, the offset value is **0**. The possible values of the [`position`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#position) property are **Inside**, **Outside**, **Cross**, and **Auto**. By default, labels will be placed inside the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs6" %}

### Customizing the display of the last label

If the last label is not in the visible range, it will be hidden by default. The last label can be made visible by setting the [`showLastLabel`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis/#showlastlabel) property as **true** in the [`AxisDirective`](api/linear-gauge/axis/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs7" %}

<!-- markdownlint-disable MD036 -->

### Label Format

Axis labels in the Linear Gauge control can be formatted using the [`format`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/labelModel/#format) property in the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis/#labelstyle). It is used to render the axis labels in a certain format or to add a user-defined unit in the label. It works with the help of placeholder like **{value}°C**, where **value** represents the axis value. For example, 20°C.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs8" %}

### Displaying numeric format in labels

The numeric formats such as currency, percentage, and so on can be displayed in the labels of the Linear Gauge using the [`format`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel/#format) property in the [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel/). The following table describes the result of applying some commonly used label formats on numeric values.

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
<td>The number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The number is rounded to 2 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The number is rounded to 3 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The number is converted to percentage with 1 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The number is converted to percentage with 2 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The number is converted to percentage with 3 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1,000.0</td>
<td>The currency symbol is appended to number and number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1,000.00</td>
<td>The currency symbol is appended to number and number is rounded to 2 decimal place.</td>
</tr>
</table>

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs9" %}

## Orientation

By default, the Linear Gauge is rendered vertically. To change its orientation, the [`orientation`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel/#orientation) property must be set to **Horizontal**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs10" %}

## Inverted Axis

The axis of the Linear Gauge component can be inversed by setting the [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis/#isinversed) property to **true** in the [`AxisDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs11" %}

## Opposed Axis

To place an axis opposite from its original position, [`opposedPosition`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axis/#opposedposition) property in the [`AxisDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/) must be set as **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs12" %}

## Multiple Axes

Multiple axes can be added to the Linear Gauge by adding multiple [`AxisDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/) in the [`AxesDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/linearGaugeModel/#axes) and customization can be done with the [`AxisDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/axisModel/). Each axis can be customized separately as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/axis-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/axis-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/axis-cs13" %}