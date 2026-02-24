---
layout: post
title: Date time axis in React Chart component | Syncfusion
description: Learn here all about Date time axis in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Date time axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date time axis in React Chart component

## DateTime Axis

The DateTime axis uses a date-time scale and displays date-time values as axis labels based on the specified format. This axis type is ideal for visualizing time-based data such as trends, timelines, and time-series data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs2" %}

> Note: To use the DateTime axis, inject `DateTime` into the `services` option and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) property of the axis to `DateTime`.

## DateTimeCategory Axis

The DateTimeCategory axis is used to render date-time values with non-linear intervals. This axis type is especially useful when certain time ranges, such as weekends or holidays, need to be excluded. In the following example, only business days are displayed within a week.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs3" %}

> Note: To use the DateTimeCategory axis, inject `DateTimeCategory` into the `services` option and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) property of the axis to `DateTimeCategory`. The axis range can be controlled using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) properties.

### Range

Range for an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#maximum) and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs4" %}

### Interval customization

Date-time intervals can be customized using the [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) and [`intervalType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#intervaltype) properties of the axis. For example, when the interval is set to `2` and the interval type is set to `Years`, the axis displays labels at two-year intervals.

The DateTime axis supports the following interval types:
- Auto
- Years
- Months
- Days
- Hours
- Minutes
- Seconds

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs5" %}

**Applying padding to the range**

Padding can be applied to the minimum and maximum values of the axis range using the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property. The DateTime axis supports the following range padding types:

* None
* Round
* Additional

**DateTime – None**
When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `None`, the minimum and maximum values of the axis are calculated directly from the data values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs6" %}

**DateTime – Round**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest interval boundary. For example, if the minimum value is January 15 and the interval type is set to `Months` with an interval of `1`, the axis minimum is adjusted to January 1.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs7" %}

**DateTime – Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Additional`, an additional interval is added before the minimum and after the maximum values of the axis range to provide extra spacing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs8" %}

## Label format

Date values displayed on the DateTime axis can be formatted using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelformat) property. This property supports globalized date and time formats for clear and localized label rendering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/datetime-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/datetime-cs9" %}

The following table illustrates the output produced by applying commonly used date-time format strings to the `labelFormat` property.

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>Displays the full name of the day</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>Displays the date in month/day/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>MMM</td>
<td>Apr</td>
<td>Displays the abbreviated month name</td>
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
<td>Displays the abbreviated month name</td>
</tr>
</table>