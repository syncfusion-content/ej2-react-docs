---
layout: post
title: Data in React Range navigator component | Syncfusion
description: Learn here all about Data in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Data in React Range navigator component

## Numeric

The numeric scale is used to represent the numeric values of data in a Range Selector. By default, the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#valuetype) of a Range Selector is **Double**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs7" %}

### Range

The minimum and the maximum of the scale will be calculated automatically based on the provided data. It can be customized by using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#interval) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs8" %}

### Label Format

The numeric labels can be formatted using the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelformat) property and it supports all the globalized formats.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs9" %}

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

### Custom Label Format

The Range Selector also supports the Custom Label formats using the placeholders such as **{value}$**, in which the value represents the axis label, e.g. 20$.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs10" %}

## Logarithmic Axis

<!-- markdownlint-disable MD033 -->

The Logarithmic supports the logarithmic scale, and it is used to visualize the data when the Range Selector has numerical values in both the lower (e.g.: 10-6) and the higher (e.g.: 106) orders of the magnitude.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs11" %}

>To use logarithmic scale, inject the `Logarithmic` module using the `RangeNavigator.Inject(Logarithmic)`
method, and then set the `valueType` to `Logarithmic`.

### Range

The minimum and the maximum of the Range Selector will be calculated automatically based on the provided data. It can be customized by using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#interval) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs12" %}

### Logarithmic Base

The Logarithmic Base can be customized using the [`logBase`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#logbase) property. The default value of this property is **10**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs13" %}

## Date-time

The Range Selector supports the DateTime scale and displays the DateTime values as labels in the specified format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs14" %}

>Date-time Range navigator supports date-time scale and displays date-time values as a labels in the specified format.

### Interval Customization

The DateTime intervals can be customized using the [`interval`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#interval) and the [`intervalType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#intervaltype) properties of the Range Selector. For example, if the [`interval`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#interval) is set to 2 and the [`intervalType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#intervaltype) is set to years, the interval will be considered to be 2 years.

DateTime supports the following interval types:
* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs15" %}

### Label Format

The [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelformat) property is used to format and parse the date to all globalize format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs16" %}

The following table shows the results of applying some common DateTime formats to the [`labelFormat`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#labelformat) property.

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