---
layout: post
title: Cross hair and track ball in React Chart component | Syncfusion
description: Learn here all about Cross hair and track ball in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Cross hair and track ball 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair and track ball in React Chart component

The crosshair feature displays vertical and horizontal guide lines that intersect at the mouse or touch position, helping to identify the corresponding axis values precisely.

Crosshair lines can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) property in the `crosshair` settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs1" %}

## Tooltip for axis

Axis tooltip labels can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#enable) property of `crosshairTooltip` in the corresponding axis. This tooltip displays the current axis value at the crosshair position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#fill) and [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#textstyle) properties of `crosshairTooltip` are used to customize the background color and font style of the crosshair label.
The color and width of the crosshair lines can be customized by using the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettingsModel#line) property in the crosshair settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs3" %}

> Note: To use crosshair feature, we need to inject `Crosshair` module into the `services`.

## Snap to data
Enabling the [`snapToData`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettingsModel#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position.
By enabling the [`snapToData`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettingsModel#snaptodata) property, the crosshair snaps to the nearest data point instead of following the exact mouse position. This improves accuracy when inspecting values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs6" %}

## Trackball

The trackball feature tracks the data point closest to the mouse or touch position. A trackball marker highlights the nearest point, and the trackball tooltip displays detailed information about that point.

To use trackball feature, we need to inject `Crosshair` and `Tooltip` module into the `services`.
Trackball functionality can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) property of the crosshair to **true** and the [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettings#shared) property of the tooltip to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/trackball-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/trackball-cs1" %}

## Crosshair highlight

The [`highlightCategory`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#highlightcategory) property highlights the background of the entire category when the crosshair is moved over the chart.
The crosshair line color can be customized using the [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel#color) property within the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel) configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/crosshair-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/crosshair-cs7" %}