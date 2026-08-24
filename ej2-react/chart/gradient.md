---
layout: post
title: Gradient in React Chart | Syncfusion
description: Learn how to apply linear and radial gradient fills to Syncfusion React Chart series for richer visual styling.
control: Gradient
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Gradient in React Chart

<!-- markdownlint-disable MD036 -->

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:
- Linear gradient
- Radial gradient

Gradients can be applied to:
- Series
- Trendlines
- Technical Indicators

## Linear gradient

A linear gradient blends colors along a straight path from a defined start point to an end point. Configure it by adding `linearGradient` inside the target element (Series, Trendlines or Indicators) and define one or more color stops that control how colors transition across the gradient. Set the start and end positions of the gradient using `x1`, `y1`, `x2` and `y2` properties. The gradient color stop values such as `offset`, `color`, `opacity`, `lighten` and `brighten` are set using the `gradientColorStop` property.

The basic structure of a `linearGradient` is shown below.

```ts
{
  linearGradient: {
    x1: 0, y1: 0, x2: 1, y2: 0,
    gradientColorStops: [
      { offset: 0, color: '#f6dcd0', opacity: 1 },
      { offset: 1, color: '#a04836', opacity: 1 }
    ]
  }
}
```

In the `linearGradient`:
- `x1` - Sets the horizontal start position of the gradient (0 to 1). Default: `0`.
- `y1` - Sets the vertical start position of the gradient (0 to 1). Default: `0`.
- `x2` - Sets the horizontal end position of the gradient (0 to 1). Default: `1`.
- `y2` - Sets the vertical end position of the gradient (0 to 1). Default: `0`.

In the `gradientColorStop`:
- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Range: -1 to 1.

### Series

Apply a linear gradient to a series by adding `linearGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs1" %}

### Trendlines

Apply a linear gradient to a trendline by adding `linearGradient` inside the target Trendline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs2" %}

### Technical Indicators

Apply a linear gradient to a technical indicator by adding `linearGradient` inside the target Indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs3" %}

## Radial gradient

A radial gradient blends colors outward from a central point, creating a circular or elliptical color progression. Configure it by adding `radialGradient` inside the target element (Series, Trendline, or Indicator) and define one or more color stops to control how colors transition from the center to the outer edge. Set the gradient’s center, optional focal point, and radius using `radialGradient` properties. The color stop values such as `offset`, `color`, `opacity`, `lighten`, and `brighten` are set using the `gradientColorStop` property.

The basic structure of a `radialGradient` is shown below.

```ts
{
  radialGradient: {
    cx: 0.5, cy: 0.5, fx: 0.5, fy: 0.5, r: 0.5,
    gradientColorStops: [
      { offset: 0, color: '#f6dcd0', opacity: 1 },
      { offset: 1, color: '#a04836', opacity: 1 }
    ]
  }
}
```

In the `radialGradient`:

- `cx` - Sets the normalized horizontal center of the gradient (0 to 1). Default: `0.5`.
- `cy` - Sets the normalized vertical center of the gradient (0 to 1). Default: `0.5`.
- `fx` - Sets the normalized horizontal focal point from which the gradient appears to originate (0 to 1). Default: same as `cx`.
- `fy` - Sets the normalized vertical focal point (0 to 1). Default: same as `cy`.
- `r` - Sets the normalized radius of the gradient circle (0 to 1). Default: `0.5`.

In the `gradientColorStop`:

- `offset` - Specifies the position of the color stop along the gradient (0 to 100).
- `color` - Sets the color at the stop.
- `opacity` - Defines the transparency of the stop (0 to 1).
- `lighten` - Adjusts lightness at the stop. Positive values lighten the color. Range: 0 to 1.
- `brighten` - Adjusts brightness at the stop. Positive values increase brightness; negative values decrease it. Range: -1 to 1.

### Series

Apply a radial gradient to a series by adding `radialGradient` inside the target Series. The same gradient is applied to the series markers, legend symbol and tooltip marker for visual consistency.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs4" %}

### Trendlines

Apply a radial gradient to a trendline by adding `radialGradient` inside the target Trendline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs9" %}

### Technical Indicators

Apply a radial gradient to a technical indicator by adding `radialGradient` inside the target Indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/chart-gradient-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/chart-gradient-cs10" %}

## See also

* [Series linearGradient API](https://ej2.syncfusion.com/react/documentation/api/chart/series#lineargradient)
* [Series radialGradient API](https://ej2.syncfusion.com/react/documentation/api/chart/series#radialgradient)
* [Trendlines](https://ej2.syncfusion.com/react/documentation/chart/trend-lines)
* [Technical indicators](https://ej2.syncfusion.com/react/documentation/chart/technical-indicators)
* [Chart series](https://ej2.syncfusion.com/react/documentation/chart/chart-series)
