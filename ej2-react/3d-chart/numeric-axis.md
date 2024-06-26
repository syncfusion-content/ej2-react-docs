---
layout: post
title: Numeric axis in React 3D Chart component | Syncfusion
description: Learn here all about numeric axis in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Numeric axis in React 3D Chart control

The numeric axis can be used to represent the numeric values of data in 3D chart. By default, the `valueType` of an axis is **Double**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs1" %}

## Range

The range of an axis, will be calculated automatically based on the provided data, and it can also be customized by using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#maximum) and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#interval) properties of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs2" %}

## Range padding

Padding can be applied to the minimum and maximum extremes of an axis range by using the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) property. Numeric axis supports the following types of padding.

* None
* Round
* Additional
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) is set to `None`, minimum and maximum of the axis is based on the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs3" %}

**Numeric - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) is set to **Round**, minimum and maximum will be rounded to the nearest possible value, which is divisible by interval. For example, when the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minimum) is **3.5** and the [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#interval) is **1**, then the minimum will be rounded to **3**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs4" %}

**Numeric - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) is set to **Additional**, interval of an axis will be added to the minimum and maximum of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs5" %}

**Numeric - Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) is set to **Normal**, padding is applied to the axis based on default range calculation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs6" %}

**Numeric - Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#rangepadding) is set to **Auto**, horizontal numeric axis takes **None** as padding calculation, while the vertical numeric axis takes **Normal** as padding calculation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs7" %}

## Label format

**Numeric label format**

Numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#labelformat) property. Also, it supports all globalize format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs8" %}

The following table describes the result of applying some commonly used label formats on numeric values.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format: Property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place.</td>
</tr>
</table>

## Grouping separator

To separate the y-axis labels to groups of thousands, set the [`useGroupingSeparator`](https://ej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel/#usegroupingseparator) property to **true** in the 3D chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs9" %}

## Custom label format

The axis supports custom label format using placeholder like **{value}°C**, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/numeric-axis/numeric-axis-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/numeric-axis/numeric-axis-cs10" %}