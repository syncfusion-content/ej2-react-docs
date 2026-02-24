---
layout: post
title: Legend in React Stock chart component | Syncfusion
description: Learn here all about Legend in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Legend 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Legend in React Stock chart component

Legend provides information about the series rendered in the Stock Chart. Legend can be added to a Stock Chart by enabling the [`visible`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#visible) option in the [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings).

## Position and Alignment

By using the [`position`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#position) property, legend can be placed at `Left`, `Right`, `Top`, `Bottom` or `Custom` of the Stock Chart. The legend is positioned at the bottom of the Stock Chart, by default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs1" %}

[`Custom`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#position) position is used to position the legend anywhere in the Stock Chart using x, y coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs2" %}

<!-- markdownlint-disable MD036 -->

**Legend Alignment**

<!-- markdownlint-disable MD036 -->

The legend can be align as `Center`, `Far` or `Near` to the Stock Chart using [`alignment`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs3" %}

## Customization

To change the legend icon shape, [`legendShape`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries#legendshape-string) property in the [`series`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeries) can be used. By default legend icon shape is `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs4" %}

**Legend Size**

By default, legend takes 20% - 25% of the Stock Chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the width vertically, while placing on left or right position of the Stock Chart. The default legend size can be changed by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#height) property of the `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs5" %}

**Legend Item Size**

The size of the legend items can customized by using the [`shapeHeight`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#shapewidth) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs6" %}

## Collapsing Legend Item

By default, series name will be displayed as legend. To skip the legend for a particular series, empty string to the series name can be given.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs7" %}

## Legend Title

The title for legend can be set using [`title`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#title) property in `legendSettings`. Customize the [`fontStyle`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#fontstyle), [`size`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#size), [`fontWeight`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#fontweight), [`color`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#color), [`textAlignment`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#textalignment), [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#fontfamily), [`opacity`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#opacity) and [`textOverflow`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartFont#textoverflow) of legend title. [`titlePosition`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#titleposition) is used to set the legend position in `Top`, `Left` and `Right` position. [`maximumTitleWidth`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/legendSettings#maximumtitlewidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/legend-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/legend-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/legend-cs8" %}

>Note: To use legend feature, we need to inject `StockLegend` module into the `services`.