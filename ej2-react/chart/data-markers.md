---
layout: post
title: Data markers in React Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Data markers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in React Chart component

Data markers are used to provide information about the data points in the series. You can add a shape to adorn each data point.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to points by enabling the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings/#visible) option of the marker property. By default, distinct markers will be enabled for each series in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs7" %}

## Shape

Markers can be assigned with different shapes such as Rectangle, Circle, Diamond, etc. using the [`shape`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings/#shape) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs8" %}

>Note : To know more about the marker shape type refer the [`shape`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings/#shape).

## Images

Apart from the shapes, you can also add custom images to mark the data point using the [`imageUrl`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettings/#imageurl) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs2" %}

## Customization

Marker's color and border can be customized using `fill` and `border` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs9" %}

## Customizing specific point

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/#pointrender-emittypeipointrendereventargs) event. The `pointRender` event allows you to change the shape, color and border for a point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs10" %}

## Fill marker with series color

Marker can be filled with the series color by setting the [`isFilled`](https://ej2.syncfusion.com/react/documentation/api/chart/markerSettingsModel/#isFilled-boolean) property to <b>true</b>.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs11" %}

## See Also

* [Customize the marker with different shape](./how-to#customize-the-marker-with-different-shape)
* [Highlight a Marker in Multicolored Line Series](https://support.syncfusion.com/kb/article/21514/how-to-highlight-a-specific-marker-in-a-multicolored-line-series-in-react-chart)