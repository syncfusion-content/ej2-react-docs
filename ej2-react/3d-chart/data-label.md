---
layout: post
title: Data labels in React 3D Chart component | Syncfusion
description: Learn here all about data labels in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in React 3D Chart control

Data labels are fields that includes information about the sample point connected to an output.

Data label can be added to a chart series by enabling the [`visible`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#visible) option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs1" %}

>Note: To use data label feature, we need to inject `DataLabel3D` module into the services.

## Position

The [`position`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#position) property is used to place the label either on `Top`, `Middle`, or `Bottom`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs2" %}

## Template

Label content can be formatted by using the template option. Inside the template, the placeholder text `${point.x}` and `${point.y}` can be added to display corresponding data points x & y value. Using [`template`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#template) property, the data label template can be set.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs3" %}

## Text mapping

Text from the data source can be mapped using [`name`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#name) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs4" %}

## Format

Data label for the chart can be formatted using [`format`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#format) property. The global formatting options can be used as 'n', 'p', and 'c'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs5" %}

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

[`margin`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/dataLabelStyleModel/#margin) for data label can be applied by using [`left`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/marginModel/#left), [`right`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/marginModel/#right), [`bottom`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/marginModel/#bottom) and [`top`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/marginModel/#top) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs6" %}

## Customization

The `stroke` and `border` of data label can be customized using [`fill`](../api/chart3d/dataLabelStyleModel/#fill) and [`border`](../api/chart3d/dataLabelStyleModel/#border) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs7" %}

## Customizing specific point

Specific label can be customized by using [`textRender`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/i3DTextRenderEventArgs/) event.  The `textRender` event allows you to change the text for the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/data-label/data-label-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/data-label/data-label-cs8" %}