---
layout: post
title: Empty Points in React 3D Circular Chart | Syncfusion
description: Learn how to handle missing or zero values in the Syncfusion React 3D Circular Chart by configuring empty-point mode, fill, and border.
control: Empty points
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Empty Points in React 3D Circular Chart

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `emptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop`, and `Zero`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/code-path/empty-point/empty-point-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/code-path/empty-point/empty-point-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/preview-sample/empty-point/empty-point-cs1" %}

## Customization

A specific color for an empty point can be set by using the `fill` property in `emptyPointSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/code-path/empty-point/empty-point-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/code-path/empty-point/empty-point-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/preview-sample/empty-point/empty-point-cs2" %}