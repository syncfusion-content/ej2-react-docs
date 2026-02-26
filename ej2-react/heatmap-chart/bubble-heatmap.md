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

Data points represent the data source values with **gradient** or **fixed** colors in the HeatMap. You can customize the appearance of these data points by changing the `color` and `size` attributes.

The data points can be represented in color fill or bubble shape by defining the [tileType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#tiletype) property.
By default, the data points are color filled with gradient or fixed colors and this depiction of data points is defined as `Rect` in the `tileType` property.

The cell customizations and color mapping for rect tile type is defined in [appearance](./appearance) and [palette](./palette) sections in detail.

## Bubble types

The data points can be represented in the bubble along with its attributes by setting the [tileType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#tiletype) property to **Bubble**.

In bubble HeatMap, you can display the data points with bubble size, bubble colors, and sector attributes of the bubble.

### Bubble size

In this bubble HeatMap type, the size factor of the bubble is used to denote the data variations. The radius of the bubble varies according to data values.

By default, the bubble with small size denotes the data value with small magnitude and the larger bubble size denotes the data value with larger magnitude. This behavior can be inversed by using the [isInversedBubbleSize](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#isinversedbubblesize) property.

To render a bubble HeatMap with size series, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#bubbletype) property to **Size**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/bubble-heatmap-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/bubble-heatmap-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs1" %}

### Bubble color

In HeatMap, defined with this tile type, the data points will be represented with same sized bubbles and the data value variations are represented with the bubble colors.

To represent the data points with variations in bubble colors, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#bubbletype) property to **Color**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/bubble-heatmap-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/bubble-heatmap-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs2" %}

### Bubble sector

In this bubble HeatMap type, the sector of the bubble decides the magnitude of data point. If the sector is large, then the data point value will be high.

To render the data points with bubble sector, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#bubbletype) property to **Sector**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs3" %}

### Combining size and color bubble types

In this bubble HeatMap type, size and color of the bubble represents the data value variation. To render this bubble HeatMap type, set the [bubbleType](https://ej2.syncfusion.com/react/documentation/api/heatmap/cellSettings#bubbletype) property to **SizeAndColor**.

The following examples demonstrate different data binding with the **SizeAndColor** bubble type set in the HeatMap.

<!-- markdownlint-disable MD036 -->
**Array binding**

When an array of numbers is specified as the data source, the bubble HeatMap can be rendered with different sizes and colors depending on the bound data.

<!-- markdownlint-disable MD036 -->
**Table**

The following example illustrates how to render a bubble HeatMap with different sizes and colors using array table binding.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs4" %}

<!-- markdownlint-disable MD036 -->
**Cell**

The following example illustrates how to render a bubble HeatMap with different sizes and colors using array cell binding.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs5" %}

<!-- markdownlint-disable MD036 -->
**JSON binding**

When a list of JSON objects are specified as data source, the bubble HeatMap can be rendered with different sizes and colors depending on the bound data.

<!-- markdownlint-disable MD036 -->
**Table**

The following example illustrates how to render a bubble HeatMap with different sizes and colors using JSON table binding.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs6" %}

<!-- markdownlint-disable MD036 -->
**Cell**

The following example illustrates how to render a bubble HeatMap with different sizes and colors using JSON cell binding.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs7" %}

<!-- markdownlint-disable MD036 -->
 **Binding size and color values from datasource**

The size and color of the bubbles in the **SizeAndColor** bubble HeatMap type can be customized by binding the datasource field name that holds the size and color values to the [size](https://ej2.syncfusion.com/react/documentation/api/heatmap/bubbleDataModel#size) and [color](https://ej2.syncfusion.com/react/documentation/api/heatmap/bubbleDataModel#color) properties in the [bubbleDataMapping](https://ej2.syncfusion.com/react/documentation/api/heatmap/dataModel#bubbledatamapping).

>The `bubbleDataMapping` supports only for the JSON data with cell adaptor type.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/bubble-heatmap-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/bubble-heatmap-cs8" %}
