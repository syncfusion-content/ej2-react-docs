---
layout: post
title: Axis customization in React Stock chart component | Syncfusion
description: Learn here all about Axis customization in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Axis customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in React Stock chart component

## Axis Crossing

An axis can be positioned in the Stock Chart area using [`crossesAt`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#crossesat) and [`crossesInAxis`] (https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#crossesinaxis) properties. The [`crossesAt`] (https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#crossesat) property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected with the vertical axis or vice-versa, and the [`crossesInAxis`] (https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#crossesinaxis) property specifies the axis name with which the axis line has to be crossed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs1" %}

## Title

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#title) property to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#titlestyle) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs2" %}

## Tick Lines Customization

You can customize the  `width`, `color` and `size` of the minor and major tick lines, using [`majorTickLines`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#minorticklines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs3" %}

## Grid Lines Customization

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#minorgridlines) properties in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs4" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the Stock Chart. Series can be associated with this [`axis`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel) , by mapping with axis's unique name.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs5" %}

## Inversed Axis

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#isinversed) to true.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs6" %}

## Opposed Position

To place an axis opposite from its original position, set [`opposedPosition`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#opposedposition) property of the axis to true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-customization-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-customization-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-customization-cs7" %}
