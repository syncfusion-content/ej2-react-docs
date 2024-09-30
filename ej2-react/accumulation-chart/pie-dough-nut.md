---
layout: post
title: Pie dough nut in React Accumulation chart component | Syncfusion
description: Learn here all about Pie dough nut in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Pie dough nut 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pie dough nut in React Accumulation chart component

## Pie Chart

To render a pie series, use the series [`type`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel/#type) as `Pie` and inject the `PieSeries` module into the `services`. If the `PieSeries` module is not injected, this module will be loaded by default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs5" %}

## Radius customization

By default, radius of the pie series will be 80% of the size (minimum of chart width and height).
You can customize this using [`radius`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeries/#radius) property of the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs6" %}

## Pie Center

The center position of the pie can be changed by Center X and Center Y. By default, center value of the pie series x and y is 50%. You can customize this using [`center`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationChartModel/#center)property of the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs7" %}

## Various Radius Pie Chart

You can use radius mapping to render the slice with different [`radius`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeries/#radius) pie and also use [`border`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationChartModel/#border) , fill properties to customize the point. dataLabel is used to represent individual data and its value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs8" %}

## Doughnut Chart

To achieve a doughnut in pie series, customize the [`innerRadius`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeries/#innerradius) property of the series. By setting value greater than 0%, a doughnut will appear. The `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/doughnut-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/doughnut-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/doughnut-cs1" %}

## Start and End angles

You can customize the start and end angle of the pie series using the [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeries/#startangle) and [`endAngle`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeries/#endangle) properties. The default value of  `startAngle` is 0 degree, and `endAngle` is 360 degrees. By customizing this, you can achieve a semi pie series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/startangle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/startangle-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/startangle-cs2" %}

## Color & Text Mapping

The fill color and the text in the data source can be mapped to the chart using `pointColorMapping` in series and `name` in datalabel respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/startangle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/startangle-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/startangle-cs3" %}

## Border Radius

You can create rounded corners for each slice using the [`borderRadius`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel/#borderradius) option, giving the chart a modern and polished look.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs39/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs39/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs39" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/startangle-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/startangle-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/startangle-cs4" %}

## Hide pie or doughnut border

By default, the border will appear in the pie/doughnut chart while mouse hover on the chart. You can disable the the border by setting `enableBorderOnMouseMove` property is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/startangle-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/startangle-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/startangle-cs5" %}

## Patterns

You can apply different patterns to the pie slices using the [`applyPattern`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel/#applypattern) property in the series and the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#pointrender) event.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs40/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs40/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs40" %}

## Multi-level pie chart

You can achieve a multi-level drill down in pie and doughnut charts using [pointClick](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationChartModel/#pointclick) event. If user clicks any point in the chart, that corresponding data will be shown in the next level and so on based on point clicked.

You can also achieve drill-up (back to the initial state) by using [chartMouseClick](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationChartModel/#chartmouseclick) event. In below sample, you can drill-up by clicking back button in the center of the chart.

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/grid-visual-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/grid-visual-cs1/app/datasource.ts %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/grid-visual-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/grid-visual-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/grid-visual-cs1" %}

## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)
