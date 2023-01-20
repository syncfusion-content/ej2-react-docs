---
layout: post
title: Empty points in React Accumulation chart component | Syncfusion
description: Learn here all about Empty points in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Empty points 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in React Accumulation chart component

The data points those uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and not plotted in the chart. You can customize those points, using the `emptyPointSettings` property in series. The default mode of the empty point is `Gap`. Other supported modes are `Average` and `Zero`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs2" %}

## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings` and the border for an empty point can be set by using the `border` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/pie-cs3" %}