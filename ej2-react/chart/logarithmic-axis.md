---
layout: post
title: Logarithmic axis in React Chart component | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Logarithmic axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in React Chart component

<!-- markdownlint-disable MD033 -->

The logarithmic axis uses a logarithmic scale and is particularly useful for visualizing data that spans a wide range of values. It effectively represents datasets that include both very small values (for example, 10<sup>-6</sup>) and very large values (for example, 10<sup>6</sup>) within the same chart, improving readability and comparison.

To get start quickly with React Logarithmic Axis, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=v7ICR9tdMyI" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/log-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/log-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/log-cs1" %}

> Note: To use the logarithmic axis, inject `Logarithmic` into the `provide` option and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#valuetype) property of the axis to `Logarithmic`.

## Range

The range of the logarithmic axis is calculated automatically based on the provided data. This automatic calculation ensures that all data points are visible within the chart area. The axis range can also be customized explicitly using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/log-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/log-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/log-cs2" %}

## Logarithmic base

The logarithmic base of the axis can be customized using the [`logBase`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#logbase) property. This property determines how the axis values are distributed along the scale.  
For example, when the logarithmic base is set to `5`, the axis values follow the sequence 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, and so on.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/log-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/log-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/log-cs3" %}

## Logarithmic interval

The spacing between logarithmic axis labels can be controlled using the [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#interval) property. This property defines the step size between consecutive logarithmic values.  
For example, when the logarithmic base is `10` and the interval is set to `2`, the axis labels are placed at values such as 10<sup>2</sup>, 10<sup>4</sup>, and 10<sup>6</sup>. The default value of the interval is `1`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/log-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/log-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/log-cs4" %}