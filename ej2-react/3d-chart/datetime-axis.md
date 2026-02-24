---
layout: post
title: DateTime axis in React 3D Chart component | Syncfusion
description: Learn here all about DateTime axis in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# DateTime axis in React 3D Chart control

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs1" %}

>Note: To use datetime axis, we need to inject the `DateTime3D` module into the services and set the [`valueType`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#valuetype) of axis to **DateTime**.

## DateTime category axis

DateTime category axis is used to display the date time values with non-linear intervals. For example, the business days alone have been depicted in a week here.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs2" %}

>Note: To use datetime category axis, we need to inject `DateTimeCategory3D` module into the services and set the [`valueType`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#valuetype) of axis to **DateTimeCategory**.

### Range

Range of an axis will be calculated automatically based on the provided data. You can also customize the range of an axis using [`minimum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#minimum), [`maximum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#maximum) and [`interval`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#interval) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs3" %}

### Interval customization

Date time intervals can be customized by using the [`interval`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#interval) and [`intervalType`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#intervaltype) properties of the axis. For example, when you set `interval` as **2** and `intervalType` as **Years**, it considers 2 years as interval. Datetime axis supports following interval types,

* Auto
* Years
* Months
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs4" %}

**Applying padding to the range**

Padding can be applied to the minimum and maximum extremes of the range by using the [`rangePadding`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#rangepadding) property. Date time axis supports the following types of padding,

* None
* Round
* Additional

**DateTime - None**

When the [`rangePadding`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#rangepadding) is set to `None`, minimum and maximum of an axis is based on the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs5" %}

**DateTime - Round**

When the [`rangePadding`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value, which is divisible by interval. For example, when the minimum is **15th Jan**, interval is **1** and interval type is **Month**, then the axis minimum will be **Jan 1st**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs6" %}

**DateTime - Additional**

When the [`rangePadding`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs7" %}

## Label format

The date can be formatted and parsed to all globalize format using the [`labelFormat`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel#labelformat) property in an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs8" %}

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
<td>The Date is displayed in day format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format.</td>
</tr>
</table>

## Custom label format

Axis also supports custom label format using placeholder like {value}°C, in which the value represent the axis label e.g 20°C.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/date-time-axis/date-time-axis-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/date-time-axis/date-time-axis-cs9" %}