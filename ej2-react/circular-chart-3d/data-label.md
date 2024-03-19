---
layout: post
title: Data Label in React 3D Circular Chart component | Syncfusion
description: Learn here all about data label in Syncfusion React 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Data Label
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Label in React 3D Circular Chart component

A data label refers to a label associated with specific data points. It can be added to a 3D Circular Chart series by enabling the `visible` option in the `dataLabel` property. By default, the labels will arrange themselves smartly to avoid overlapping.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs1" %}

>To use the data label feature, inject the `CircularChartDataLabel3D` module into the services.

## Positioning

Using the `position` property, we can place the data label either `inside` or `outside` the 3D Circular Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs2" %}

## Data label template

The label content can be formatted using the template option. Inside the template, placeholder text `${point.x}` and `${point.y` can be added to display the corresponding data point's x & y value. The data label template can be set using the `template` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs3" %}

## Connector line

The connector line will be visible when the data label is placed `outside` the chart. It can be customized using properties such as `color`, `width`, `length`, and `dashArray` within the `connectorStyle` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs4" %}

## Text mapping

Text from the data source can be mapped using the `name` property within the data label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs5" %}

## Format

The data label for the 3D Circular Chart can be formatted using the `format` property. You can utilize global formatting options such as 'n', 'p', and 'c'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs6" %}

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

## Customization

Individual text for the data points in the 3D Circular Chart can be customized using the `textRender` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs7" %}

## Using textRender event

You can customize the data label of a pie chart using the `textRender` event as follows to show the percentage.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs8" %}

## Using template

You can display the percentage values in the data label of a pie chart using the `template` option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/data-label/data-label-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/data-label/data-label-cs9" %}