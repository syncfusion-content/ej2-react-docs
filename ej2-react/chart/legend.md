---
layout: post
title: Legend in React Chart component | Syncfusion
description: Learn here all about Legend in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Legend in React Chart component

Legend provides information about the series rendered in the chart.

To get start quickly with Legends in React Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=7VYeN4W_wMc" %}

## Position and Alignment

By using the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#position) property, you can position the legend at left, right, top or bottom of the chart. The legend is positioned at the bottom of the chart, by default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs13" %}

Custom position helps you to position the legend anywhere in the chart using x, y coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs14" %}

## Legend Reverse

You can reverse the order of the legend items by using the [`reverse`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/legend-reverse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/legend-reverse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/legend-reverse-cs1" %}

<!-- markdownlint-disable MD036 -->

**Legend Alignment**

<!-- markdownlint-disable MD036 -->

You can align the legend as `center`, `far` or `near` to the chart using [`alignment`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs15" %}

## Customization

To change the legend icon shape, you can use [`legendShape`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#legendshape) property in the [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/series/). By default legend icon shape is `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs16" %}

### Legend Size

By default, legend takes 20% - 25% of the chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the chart's width vertically, when placed on left or right position of the chart. You can change this default legend size by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#height) property of the `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs17" %}

### Legend Item Size

You can customize the size of the legend items by using the [`shapeHeight`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#shapewidth) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs18" %}

### Paging for Legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view each legend items by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs1" %}

### Legend Text Wrap

When the legend text exceeds the container, the text can be wrapped by using  [`textWrap`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#textwrap) Property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#maximumlabelwidth) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs19" %}

### Set the label color based on series color

You can set the legend label color based on series color by using chart's [loaded](https://ej2.syncfusion.com/react/documentation/api/chart/#loaded) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs20" %}

## Series Selection on Legend

By default, legend click enables you to collapse the series visibility.  On other hand, if you need to select a series through legend click, disable the [`toggleVisibility`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#togglevisibility).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs21" %}

## Enable Animation

You can customize the animation while clicking legend by setting enableAnimation as true or false using `enableAnimation` property in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs22" %}

## Collapsing Legend Item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs23" %}

## Legend Title

You can set title for legend using `title` property in `legendSettings`. You can also customize the `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity` and `textOverflow` of legend title. `titlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `maximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs2" %}

## Arrow Page Navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `enablePages` to get this support.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs3" %}

## Legend Item Padding

The [`itemPadding`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/legend-cs4" %}

>Note: To use legend feature, we need to inject `Legend` module into the `services`.

## See Also

* [Customize each shape in legend](./how-to/#customize-each-shape-in-legend)
