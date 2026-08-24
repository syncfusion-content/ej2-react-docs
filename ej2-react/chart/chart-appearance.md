---
layout: post
title: Chart Appearance in React Chart | Syncfusion
description: Learn how to style Syncfusion React Chart with custom color palettes, point and range color mapping, chart area customization, and animation options.
control: Chart appearance
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart Appearance in React Chart

## Custom color palette

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#palettes) property. The `palettes` property accepts an array of color strings that the chart applies in order to each series or point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs4" %}

## Data point customization

The color of individual data point or data points within a range can be customized using the options below.

### Point color mapping

You can bind a color for each point from the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/series#datasource) of the series using the [`pointColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/series#pointcolormapping) property. Each value in the mapped field is read as a valid CSS color string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs5" %}

### Range color mapping

You can differentiate data points based on their y values using [`rangeColorSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/rangeColorSetting) in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs6" %}

## Point level customization

Marker, data label, and fill color of individual data points can be customized using the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#pointrender) and [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#textrender) events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs1" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

### Customize the chart background

<!-- markdownlint-disable MD013 -->
Use the [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#background) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#border) properties on the chart to change its background color and border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs2" %}

### Chart margin

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#margin) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs3" %}

### Plot area appearance

To customize the plotting region (chart area), use the `chartArea` properties: [`background`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAreaModel#background) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/chartareamodel#border) change the chart area's appearance. You can additionally set the plot area's [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/chartareamodel#width) and height to adjust its size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs4" %}

### Chart area margin

You can customize the space between the chart area and its chart container through the [`margin`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAreaModel#margin) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs19" %}

## Animation

Customize animation for a series using the [`animation`](https://ej2.syncfusion.com/react/documentation/api/chart/animationModel) property. Use `enable` to turn animation on or off; `duration` controls the animation length, and `delay` sets when the animation starts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs5" %}

### Fluid animation

Fluid animation is used to animate a series when its `dataSource` is updated, so the animation continues from the previous state rather than re-animating the whole series. You can customize animation for a particular series by calling the chart's [`animate`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#animate) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs6" %}


## See also

* [Customize the series points using patterns](./how-to/points-customization)