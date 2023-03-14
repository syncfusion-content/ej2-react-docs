---
layout: post
title: Bubble heatmap in React Heatmap chart component | Syncfusion
description: Learn here all about Bubble heatmap in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Bubble heatmap 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bubble heatmap in React Heatmap chart component

Data points represent the data source values with `gradient` or `fixed` colors in the heat map. You can customize the appearance of these data points by changing the `color` and `shape` attributes.

The data points can be represented in color fill or bubble shape by defining the [tileType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#tiletype) property.
By default, the data points are color filled with `gradient` or `fixed` and this depiction of data points is defined as `rect` in the [tileType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#tiletype) property.

The cell customizations and color mapping for `rect` tile type is defined in [appearance](./appearance/) and [palette](./palette/) sections in detail.

## Bubble attributes

The data points can be represented in the bubble along with its attributes by setting the [tileType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#tiletype) property to **Bubble**.

In bubble heat map, you can display the data points with bubble size, bubble colors, and sector attributes of the bubble.

### Bubble size

In this bubble heat map type, the size factor of the bubble is used to denote the data variations. The radius of the bubble varies according to data values.

By default, the bubble with small size denotes the data value with small magnitude and the larger bubble size denotes the data value with larger magnitude. This behavior can be inversed by using the [isInversedbubblesize](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#isinversedbubblesize) property.

To render a bubble heat map with size series, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#bubbletype) property to **Size**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs1" %}

### Bubble color

In heat map, defined with this tile type, the data points will be represented with same sized bubbles and the data value variations are represented with the bubble colors.

To represent the data points with variations in bubble colors, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#bubbletype) property to **Color**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs2" %}

### Bubble sector

In this bubble heat map type, the sector of the bubble decides the magnitude of data point. If the sector is large, then the data point value will be high.

To render the data points with bubble sector, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#bubbletype) property to **Sector**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs3" %}

### Combining size and color bubble attributes

In this bubble heat map type, you can bind the two data source fields to a single data point. Thereby, each data point represents the two data values with bubble size and bubble color attributes, where the bubble size denotes the magnitude of one data source field and the bubble color denotes the magnitude of another data source field.

To render a bubble heat map with size and color series, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings/#bubbletype) property to **SizeAndColor**.

#### Binding data for bubble heat map with size and color attributes

##### Array binding - Table

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs4" %}

##### Array binding - Cell

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs5" %}

##### JSON binding - Table

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs6" %}

##### JSON binding - Cell

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs7" %}
