---
layout: post
title: Crosshair and Trackball in React Chart | Syncfusion
description: Learn how to add crosshair and trackball interactions to Syncfusion React Chart to inspect data points precisely with axis tooltips and highlighting.
control: Cross hair and track ball
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Crosshair and Trackball in React Chart

The crosshair feature displays vertical and horizontal guide lines that intersect at the mouse or touch position, helping to identify the corresponding axis values precisely.

> Note: To use the crosshair feature, the `Crosshair` module must be injected into the `services`.

Crosshair lines can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) property in the `crosshair` settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs1" %}

## Tooltip for axis

Axis tooltip labels can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#enable) property of `crosshairTooltip` in the corresponding axis. This tooltip displays the current axis value at the crosshair position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#fill) and [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip#textstyle) properties of `crosshairTooltip` are used to customize the background color and font style of the crosshair label.
The color and width of the crosshair lines can be customized by using the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#line) property in the crosshair settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs3" %}

## Crosshair label customization

The [`crosshairLabelRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#crosshairlabelrender) event fires before each crosshair axis label is rendered, allowing you to customize the label's appearance or content, or to prevent it from being displayed.

Event arguments:

* `text` – The label text that can be modified.
* `value` – The data value at the crosshair position.
* `axisName` – The axis identifier (e.g., `primaryXAxis`).
* `axisOrientation` – Either `Horizontal` or `Vertical`.
* `textStyle` – Font properties for the crosshair label (set on the event argument).
* `fill` – Background color of the label (set on the event argument).
* `cancel` – Set to **true** to skip rendering the label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-label-render/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-label-render/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-label-render/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-label-render/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-label-render" %}

## Snap to data

Enabling the [`snapToData`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettingsModel#snaptodata) property in the crosshair aligns it with the nearest data point instead of following the exact mouse position. This improves accuracy when inspecting values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs6" %}

## Trackball

The trackball feature tracks the data point closest to the mouse or touch position. A trackball marker highlights the nearest point, and the trackball tooltip displays detailed information about that point.

To use the trackball feature, the `Crosshair` and `Tooltip` modules must be injected into the `services`.
Trackball functionality can be enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#enable) property of the crosshair to **true** and the [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettings#shared) property of the tooltip to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/trackball-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/trackball-cs1" %}

## Crosshair highlight

The [`highlightCategory`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#highlightcategory) property highlights the background of the entire category when the crosshair is moved over the chart.

The crosshair line color can be customized using the [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#line) property within the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings#line) configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/crosshair-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/crosshair-cs7" %}