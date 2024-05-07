---
layout: post
title: Tooltip in React 3D Circular Chart component | Syncfusion
description: Learn here all about tooltip in Syncfusion React 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React 3D Circular Chart component

The 3D Circular Chart will display details about the points through a tooltip, when the mouse is moved over a specific point. By default, the tooltip is not visible. It can be enabled by using the `enable` property in `tooltip` to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs1" %}

>To use data label feature, we need to inject `CircularChartTooltip3D` module into the services.

## Header

You can specify a header for the tooltip by using the `header` property in `tooltip`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs2" %}

## Format

By default, the tooltip shows information about the x and y values in points. Additionally, more information can be displayed in the tooltip by using the `format` property. For example, the format `${series.name} : ${point.x}` shows the series name and the point's x value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs3" %}

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the `template` property in the tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs4" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement, but it can be set to a fixed position using the `location` property in `tooltip`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs5" %}

## Customization

The `fill` and `border` properties are used to customize the background color and border of the tooltip, respectively. The `textStyle` property in the tooltip is used to customize the font of the tooltip text. Additionally, the `highlightColor` property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs6" %}

## Customization of individual tooltip

Using the `tooltipRender` event, you can customize tooltip values for a particular point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/tooltip/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/tooltip/tooltip-cs7" %}