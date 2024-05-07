---
layout: post
title: Pie and Donut in React 3D Circular Chart component | Syncfusion
description: Learn here all about Pie and Donut in Syncfusion React 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Pie and Donut 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pie and Donut in React 3D Circular Chart component

## Pie chart

To render a pie series, inject the `PieSeries3D` into the service.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs1" %}

## Radius customization

By default, the radius of the pie series will be 80% of the size, which is the minimum of the 3D Circular Chart's width and height. You can customize this by using the `radius` property of the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs2" %}

## Various radius pie chart

You can assign different radii to each slice of the pie by fetching the radius from the data source and using it with the `radius` property in the `series`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs3" %}

## Donut chart

To achieve a donut in the pie series, customize the `innerRadius` property of the series. By setting a value greater than 0%, a donut will appear. The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs4" %}

## Text and fill color mapping

The text and the fill color from the data source can be mapped to the 3D Circular Chart using `pointColorMapping` in the series and `name` in the data label, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs5" %}

## Customization

Individual points in pie chart can be customized using the `pointRender` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/pie/pie-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/pie/pie-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie/pie-cs6" %}