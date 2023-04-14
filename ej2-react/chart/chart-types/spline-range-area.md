---
layout: post
title: Spline Range Area Chart in React Chart component | Syncfusion
description: Learn here all about Spline Range Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Spline Range Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Spline Range Area in React Chart component

## Spline Range Area

The Spline Range Area Chart is used to display continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

To render a spline range area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `SplineRangeArea` and inject `SplineRangeAreaSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs14" %}

## Series customization

The following properties can be used to customize the `spline range area` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/splinerangearea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/splinerangearea-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/splinerangearea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
