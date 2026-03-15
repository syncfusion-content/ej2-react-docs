---
layout: post
title: Gradient in React Accumulation chart component | Syncfusion
description: Learn here all about Gradient in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Gradient
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Gradient in React Accumulation chart control

<!-- markdownlint-disable MD038 -->

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:

- Linear gradient
- Radial gradient

## Linear gradient

A linear gradient blends colors along a straight path from a defined start point to an end point. In accumulation charts, a linear gradient can be applied either to the whole series or to each point via the pointRender event. An `linearGradient` is configured with one or more color stops.

The linear gradient properties are:

- `x1` - Horizontal start position of the gradient (0 to 1).
- `y1` - Vertical start position of the gradient (0 to 1).
- `x2` - Horizontal end position of the gradient (0 to 1).
- `y2` - Vertical end position of the gradient (0 to 1).

Properties for `gradientColorStop`:

- `offset` - Position along the gradient (0 to 100).
- `color` - Base color at the stop.
- `opacity` - Transparency (0 to 1).
- `lighten` - Adjusts lightness (positive lightens, negative darkens).
- `brighten` - Adjusts brightness (positive increases, negative decreases).

### Apply gradient to the entire series

A linear gradient may be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/preview-sample/series/chart-gradient-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/preview-sample/series/chart-gradient-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs5" %}

### Apply a gradient per point using the point render event

A diagonal linear gradient can be applied per data point using the pointRender event for a clear light-to-shadow transition.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs6" %}

## Radial gradient

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient (0 to 1).
- `cy` - Sets the normalized vertical center of the gradient (0 to 1).
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate (0 to 1).
- `fy` - Sets the normalized vertical focal point (0 to 1).
- `r` - Sets the normalized radius of the gradient circle (0 to 1).

In the `gradientColorStop`:

- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Ranges: -1 to 1.

### Apply a radial gradient to the entire series

A radial gradient can be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs7" %}

### Apply a radial gradient per point using the point render event

The following example uses a distinct color palette and an off-center radial gradient to create a clear light-to-shadow effect on each data point. The gradient is configured in pointRender, so each data point receives its own radial gradient derived from its base color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs8" %}
