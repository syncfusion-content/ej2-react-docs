---
layout: post
title: Chart appearance in React Chart component | Syncfusion
description: Learn here all about Chart appearance in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart appearance in React Chart component

## Custom Color Palette

You can customize the default color of series or points by providing a custom color palette of your choice by using the [`palettes`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#palettes) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs4" %}

## Data Point Customization

The color of individual data point or data points within a range can be customized using the options below.

### Point Color Mapping

You can bind the color for the points from [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#datasource) for the series using [`pointColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#pointcolormapping) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs5" %}

### Range Color Mapping

You can differentiate data points based on their y values using [`rangeColorSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/rangeColorSetting/) in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs6" %}

## Point Level Customization

Marker, datalabel and fill color of each data point can be customized with [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender) and [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#textrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs1" %}

<!-- markdownlint-disable MD036 -->

## Chart Area Customization

<!-- markdownlint-disable MD036 -->

**Customize the Chart Background**

<!-- markdownlint-disable MD013 -->
Using [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#background) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#border) properties, you can change the background color and border of the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs2" %}

**Chart Margin**

You can set margin for chart from its container through [`margin`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#margin) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs3" %}

**Chart Area Customization**

Using [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAreaModel/#background) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAreaModel/border/) properties, you can change the background color and border of the chart area. Width for the chart area can be customized using [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAreaModel/width/) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs4" %}

## Animation

You can customize animation for a particular series using [`animation`](https://ej2.syncfusion.com/react/documentation/api/chart/animationModel/) property. You can enable or disable animation of the series using `enable` property, `duration` specifies the duration of an animation and `delay` allows us to start the animation at desire time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs5" %}

### Fluid Animation

Fluid animation used to animate series with updated dataSource continues animation rather than animation whole series. You can customize animation for a particular series using [`animate`] method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs6" %}

## Chart Title

Chart can be given a title using [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/chart-title-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/chart-title-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/chart-title-cs5" %}

**Title wrap**

The `textStyle` property of chart title provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/column-cs7" %}

## Chart SubTitle

Chart can be given a subtitle using [`subTitle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#subtitle) property, to show the information about the data plotted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/chart-title-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/chart-title-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/chart-title-cs6" %}

## See Also

* [Customize the series points using patterns](./how-to/#customize-the-series-points-by-using-patterns)