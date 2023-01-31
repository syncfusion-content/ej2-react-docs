---
layout: post
title: Data labels in React Chart component | Syncfusion
description: Learn here all about Data labels in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Data labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in React Chart component

Data label can be added to a chart series by enabling the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings/#visible)option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs1" %}

>Note: To use data label feature, we need to inject `DataLabel` module into the `services`.

## Position

Using [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings/#position) property, you can place the label either on `Top`, `Middle`,`Bottom` or `Outer` (outer is applicable for column and bar type series).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel1-cs1" %}

>Note: The position `Outer` is applicable for column and bar type series.

## Data Label Template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text `${point.x}` and `${point.x}` to display corresponding data points x & y value. Using [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings/#template) property, you can set data label template in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-template-cs1" %}

## Text Mapping

Text from the data source can be mapped using `name` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs2" %}

## Format

Data label for the chart can be formatted using [`format`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings/#format) property. You can use the global formatting options, such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs3" %}
<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
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
    <td>The number is rounded to 2 decimal places.</td>
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
    <td>$1000.0</td>
    <td>The currency symbol is appended to number and number is rounded to 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>The currency symbol is appended to number and number is rounded to 2 decimal place.</td>
  </tr>
</table>

## Margin

`margin` for data label can be applied to using `left`, `right`, `bottom` and `top` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs4" %}

## DataLabel Rotation

Using `angle` property, you can rotate the data label by its given angle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs1" %}

## Customization

`stroke` and `border` of data label can be customized using `fill` and `border` properties. Rounded corners can be customized using `rx` and `ry` properties. The data label can be customized by using the `color`, `fontFamily`, `fontWeight`, `size` properties in the `font` property of the data label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs5" %}

>Note: `rx` and `ry` properties requires `border` values not to be null.

## Customizing Specific Point

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender) and [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#textrender/) event. `pointRender` event allows you to change the shape, color and border for a point, whereas the `textRender` event allows you to change the text for the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel1-cs2" %}

## Show percentage based on each series points

You can calculate the percentage value based on the sum for each series using the `seriesRender` and `textRender` events in the chart. In `seriesRender` calculate the sum of each series y values and In `textRender` calculate percentage value based on the sum value and modify the text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs6" %}

## See Also

* [Show total stacking values in data label](./how-to/#show-the-total-value-for-stacking-series-in-data-label)
* [Prevent the data label when the data value is 0](./how-to/#prevent-the-data-label-when-the-data-value-is-0)
