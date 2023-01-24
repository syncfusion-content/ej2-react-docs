---
layout: post
title: Legend in React Treemap component | Syncfusion
description: Learn here all about Legend in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Legend in React Treemap component

Legend is used to provide valuable information for interpreting what the TreeMap displays. The legends can be represented in various colors, shapes or other identifiers based on the data.

## Position and alignment

Legend position is used to place legend in various positions. Based on the legend position, the legend item will be aligned. For example, if the position is top or bottom, the legend items are placed by rows. If the position is left or right, the legend items are placed by columns.

The following options are available to customize the legend position:

* Top
* Bottom
* Left
* Right
* Float

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs1" %}

Legend Alignment is used to align the legend items in specific location. The following options are available to customize the legend alignment:

* Near
* Center
* Far

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs2" %}

## Legend mode

The TreeMap control supports two different types of legend rendering modes such as `Default` and `Interactive`.

<!-- markdownlint-disable MD036 -->

### Default mode

In default mode, the legends have symbols with legend labels that are used to identify the items in the TreeMap.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs3" %}

<!-- markdownlint-disable MD036 -->

### Interactive mode

The legends can be made interactive with an arrow mark that indicates exact range color in the legend when the mouse hovers on the TreeMap item. Enable this option by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#mode) property in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/) to **Interactive**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs4" %}

## Legend size

Customize the legend size by modifying the [`height`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#width) properties in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/). It accepts values in both percentage and pixel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs5" %}

### Paging support

TreeMap support legend paging, if the legend items cannot be placed within the provided [`height`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#width) of the legend.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs6" %}

## Legend for items excluded from color mapping

Based on the mapping ranges in the data source, get the excluded ranges from the color mapping, and show the legend with the excluded range values that are bound to the specific legend.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs7" %}

## Hide desired legend items

To enable or disable the desired legend item for each color mapping, set the [`showLegend`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping/#showlegend) property to **true** in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs8" %}

## Hide legend items based data source value

To enable or disable the legend visibility for each item through the data source, bind the appropriate data source field name to [`showLegendPath`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#showlegendpath) property in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs9" %}

## Bind legend item text from data source

To show the legend item text from the data source, bind the property name from data source to the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#valuepath) property in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs10" %}

## Hide duplicate legend items

To enable or disable the duplicate legend items, set the [`removeDuplicateLegend`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/#removeduplicatelegend) property to **true** in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/legendSettings/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/legend-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/legend-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/legend-cs11" %}
