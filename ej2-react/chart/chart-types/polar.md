---
layout: post
title: Polar Chart in React Chart component | Syncfusion
description: Learn here all about Polar Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Polar Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Polar Charts in React Chart component

## Polar Chart

To render a polar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Polar` and inject `PolarSeries` module into services

To get start quickly with React Polar and Radar Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6kn9dCOla0c" %}

## Draw Types

Polar drawType property is used to change the series plotting type to line, column, area, range column,spline, scatter, stacking area and stacking column. The default value of drawType is `Line`.

## Line

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `Line` and inject `LineSeries` into services.

[`isClosed`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#isclosed) property specifies whether to join start and end point of a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

### Spline

To render a spline draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `Spline` and inject `SplineSeries` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs2" %}

## Area

To render a spline draw type in polar axis, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `Area` and inject `AreaSeries` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs3" %}

## Stacked Area

To render a stacked area draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `StackingArea` and inject `StackingAreaSeries` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs4" %}

### Column

To render a spline draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `Column` and inject `ColumnSeries` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs5" %}

### Stacked Column

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `StackingColumn` and inject `StackingColumnSeries` into services.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs6" %}

### Range Column

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `RangeColumn`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs7" %}

### Scatter

To render a scatter draw type, use series [`DrawType`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#drawtype) as `Scatter` and inject `ScatterSeries` module into the service.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs8" %}

## Series customization

### Start Angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs1" %}

### Radius

You can customize the radius of the polar series using [`coefficient`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/polar-cs2" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)