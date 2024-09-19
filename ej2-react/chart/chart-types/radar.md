---
layout: post
title: Radar Chart in React Chart component | Syncfusion
description: Learn here all about Radar Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Radar Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Radar Charts in React Chart component

## Radar

To render a Radar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Radar` and inject `RadarSeries` module into services

### Draw Type

Similar to Polar drawType, Radar draw type property is used to change the series plotting type to line, column, area, range column, spline, scatter, stacking area and stacking column. The default value of drawType is `Line`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs9" %}

## Series customization

### Start Angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs10" %}

### Radius

You can customize the radius of the polar series using [`coefficient`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/polar-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/polar-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/polar-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/polar-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs11" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)