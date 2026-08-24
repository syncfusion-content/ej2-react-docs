---
layout: post
title: Numeric axis in React Chart | Syncfusion
description: Learn how to configure a numeric axis in Syncfusion React Chart to plot continuous numeric values with a defined range and interval.
control: Numeric axis
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Numeric axis in React Chart

The numeric axis is used to represent numeric values in a chart. By default, the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) of an axis is set to `Double`, which is suitable for displaying continuous numerical data.

> Before you begin, ensure the Syncfusion React Chart is installed and configured in your project. For setup steps, see the [Getting Started for React](getting-started) documentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs3" %}

## Range

The range of the axis is calculated automatically based on the provided data. You can also customize the visible range by using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) properties of the `AxisModel`. To control the lower bound separately, use the [`startFromZero`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#startfromzero) property, and to derive evenly spaced intervals, use [`desiredIntervals`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#desiredintervals).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs4" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the axis range by using the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property. The default value is `Auto`. The numeric axis supports the following padding options:

* None
* Round
* Additional
* Normal
* Auto

### Numeric - Auto (default)

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Auto`, the horizontal numeric axis uses `None` as padding, while the vertical numeric axis uses `Normal` padding. The orientation is determined by whether the axis is the `primaryXAxis` or `primaryYAxis`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs9" %}

### Numeric - None

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `None`, the minimum and maximum values of the axis are derived directly from the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs5" %}

### Numeric - Round

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest values divisible by the interval. For example, with a data minimum of 3 and an interval of 5, the axis minimum is rounded to 5, and with a data maximum of 17, the axis maximum is rounded to 20.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs6" %}

### Numeric - Additional

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Additional`, one interval is added to both the minimum and maximum values of the axis range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs7" %}

### Numeric - Normal

When the [`rangePadding`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rangepadding) property is set to `Normal`, padding is applied to the axis by adding a default percentage of the range to both ends so that data points are not flush against the plot edges.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs8" %}

## Label Format

Numeric axis labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelformat) property. This property supports all [Globalize](https://github.com/globalizejs/globalize) numeric formats. The format applied is also affected by the chart's `locale`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs10" %}

The following table shows examples of commonly used numeric label formats and their corresponding outputs.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>Rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>Rounded to 2 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>Rounded to 3 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>Converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>Converted to percentage with 2 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>Converted to percentage with 3 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>Currency format with 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>Currency format with 2 decimal places</td>
</tr>
</table>

## Grouping Separator

To separate groups of thousands in numeric labels, enable the [`useGroupingSeparator`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#usegroupingseparator) property on the `Chart` (a chart-level `ChartModel` property, not an axis property). The separator character is determined by the chart's `locale`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs11" %}

## Custom Label Format

The numeric axis also supports custom label formats by using the `{value}` placeholder within the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelformat) string, where `{value}` is replaced with the actual numeric axis label. For example, `labelFormat: '{value}°C'` displays the value `20` as `20°C`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/double-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/double-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/double-cs12" %}

## See also

* [Category axis](category-axis)
* [DateTime axis](date-time-axis)
* [Logarithmic axis](logarithmic-axis)
* [Axis customization](axis-customization)
* [Axis labels](axis-labels)