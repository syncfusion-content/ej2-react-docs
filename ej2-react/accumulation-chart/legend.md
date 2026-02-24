---
layout: post
title: Legend in React Accumulation chart component | Syncfusion
description: Learn here all about Legend in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Legend in React Accumulation chart component

As like a chart, the legend is also available for accumulation charts, which gives information about the points.
By default, the legend will be placed on the right, if the width of the chart is high or will be placed on the bottom, if the height of the chart is high. Other customization features regarding the legend element are same as the [`chart legend`](http://ej2.syncfusion.com/documentation/chart/legend.html#position-and-alignment).
Here, the legend for a point can be collapsed by giving the empty string to the x value of the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs2" %}

>Note: To use the legends feature, inject the `AccumulationLegend` using the module into the `services`.

## Position and alignment

By using the position property, you can position the legend at the `left`, `right`, `top` or `bottom` of the chart. You can also align the legend to `center`, `far` or `near` of the chart using the alignment property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs3" %}

## Legend reverse

You can reverse the order of the legend items by using the [`reverse`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettings#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-reverse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-reverse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-reverse-cs1" %}

## Legend shape

To change the legend icon shape, use the `legendShape` property in the `series`. By default, legend icon shape is `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs4" %}

## Legend size

The legend size can be changed by using the `width` and `height` properties of the `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs5" %}

## Legend item size

You can customize the size of the legend items by using the `shapeHeight` and `shapeWidth` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs6" %}

## Paging for legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. You can view the each legend item by navigating between the pages using the navigation buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs7" %}

## Legend text wrap

When the legend text exceeds the container, the text can be wrapped by using `textWrap` Property. End user can also wrap the legend text based on the `maximumLabelWidth` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs8" %}

## Enable animation

You can customize the animation while clicking legend by setting enableAnimation as true or false using `enableAnimation` property in Accumulation Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs9" %}

## Legend title

You can set title for legend using `title` property in `legendSettings`. You can also customize the `fontStyle`, `size`, `fontWeight`, `color`, `textAlignment`, `fontFamily`, `opacity` and `textOverflow` of legend title. `titlePosition` is used to set the legend position in `Top`, `Left` and `Right` position. `maximumTitleWidth` is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs10" %}

## Arrow page navigation

By default, the page number will be enabled while legend paging. Now, you can disable that page number and also you can get left and right arrows for page navigation. You have to set `false` value to `enablePages` to get this support.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs11" %}

## Legend item padding

The [`itemPadding`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettings#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs12" %}

## Legend layout

The [`layout`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettingsModel#layout) property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#legendsettings) allows you to display the legend either horizontally or vertically. By default, the [`layout`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettingsModel#layout) is set to **Auto**. The [`maximumColumns`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettingsModel#maximumcolumns) property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#legendsettings) defines the maximum number of columns that can be displayed within the available space when using the auto layout. Additionally, enabling the [`fixedWidth`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettingsModel#fixedwidth) property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#legendsettings) ensures that all legend items are displayed with equal widths. The width of each item is determined by the maximum width among the legend items.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/pie-cs42/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/pie-cs42/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/pie-cs42" %}