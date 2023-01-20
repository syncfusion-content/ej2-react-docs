---
layout: post
title: Chart axis in React Chart component | Syncfusion
description: Learn here all about Chart axis in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart axis in React Chart component

Chart typically has two axis, which are used to measure and categorize data: a horizontal or primary x axis and a vertical or primary y axis.

Vertical axis supports numerical and logarithmic scale. Horizontal axis supports
the following types of scale.

* Category
* Numeric
* DateTime
* Logarithmic

In addition to this, both vertical and horizontal axis support inversed axis.

<!-- markdownlint-disable MD036 -->
**Positioning Axis Labels**
<!-- markdownlint-disable MD036 -->

By default, category labels are placed between the ticks in an axis, this can also be placed on ticks using [`labelPlacement`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelplacement) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs7" %}

>Note: To use category axis, we need to inject `Category` module into the `services` and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#valuetype) of axis to `Category`.

<!-- markdownlint-disable MD013 -->

## Label Format

**Numeric Label Format**

Numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelformat) property. Numeric labels supports all globalize format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/double-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/double-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/double-cs1" %}

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

**Datetime Label Format**

You can format and parse the date to all globalize format using [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelformat) property in an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/datetime-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/datetime-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/datetime-cs1" %}

The following table describes the result of applying some common date time formats to the labelFormat property

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>The Date is displayed in day format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format</td>
</tr>
</table>

<!-- markdownlint-disable MD033 -->

**Custom Label Format**

Axis also supports custom label format using placeholder like {value}°C, in which the value represents the axis label. e.g 20°C.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs8" %}

## Inversed Axis

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#isinversed) to true.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs9" %}

## Common Axis Features

**Axis Title**

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#title) property to provide quick information to the user about the data plotted in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs10" %}

**Label Customization**

The [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelstyle) property of an axis provides options to customize the `color`, `font-family`, `font-size` and `font-weight` of the axis labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs11" %}