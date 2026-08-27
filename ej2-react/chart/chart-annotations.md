---
layout: post
title: Chart Annotations in React Chart | Syncfusion
description: Learn how to add HTML annotations to Syncfusion React Chart with custom positioning, regions, and coordinate units.
control: Chart annotations
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart Annotations in React Chart

Chart annotations let you highlight specific areas of the chart by overlaying text, shapes, images, or custom HTML elements directly inside the chart area. Use annotations to emphasize trends, mark thresholds, call out key data points, or display additional context such as watermarks and footers.

> Note: To use the annotation feature, inject the `ChartAnnotation` module into the chart `services`.

## Getting started

Annotations are added through the [`annotations`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#annotations) option, which accepts an array of [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/chart/annotationDirective) items wrapped in [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/chart/annotationsDirective). Use the [`content`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAnnotationSettingsModel#content) property to specify what is rendered—either a string (rendered as text) or a function/element (rendered as custom HTML).

In addition to `content`, the following properties control placement:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | `string` \| `number` | `0` | Horizontal position. A string matches a category value; a number is interpreted in pixels (default) or data values (when `coordinateUnits` is `Point`). |
| `y` | `number` | `0` | Vertical position. Interpreted in pixels or data values based on `coordinateUnits`. |
| `region` | `'Chart'` \| `'Series'` | `'Chart'` | Reference space for the `x` and `y` values. |
| `coordinateUnits` | `'Pixel'` \| `'Point'` | `'Pixel'` | Unit used to interpret `x` and `y`. |

The following example adds a simple text annotation over a column series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs3" %}

## Region

Use the `region` property to choose the reference space for the annotation's `x` and `y` values:

- **`Chart`** (default) – `x` and `y` are positioned relative to the overall chart area. The annotation stays fixed as the data changes.
- **`Series`** – `x` and `y` are positioned relative to a specific series. When `coordinateUnits` is `Point`, `x` is matched to a data point on the series.

The following example uses `region: 'Series'` with `coordinateUnits: 'Point'` to anchor the annotation to the `Japan` data point of the column series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs4" %}

## Coordinate Units

Use the `coordinateUnits` property to choose how the annotation's `x` and `y` values are interpreted:

- **`Pixel`** (default) – `x` and `y` are treated as fixed pixel offsets from the top-left corner of the chart area. The annotation does not move with the data.
- **`Point`** – `x` and `y` are treated as data values on the chart axes. `x` matches an axis value (a category name for category axes, a numeric value for numeric/datetime axes) and `y` matches a series value. The annotation moves with the data.

The following example renders a custom HTML annotation at a fixed pixel location on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/line-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/line-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/line-cs5" %}

## Customization

The `ChartAnnotationSettingsModel` exposes additional properties to align and style annotations. The commonly used ones are:

- `horizontalAlignment` – `'Near'`, `'Center'`, or `'Far'`. Aligns the annotation horizontally relative to its anchor point.
- `verticalAlignment` – `'Top'`, `'Middle'`, or `'Bottom'`. Aligns the annotation vertically relative to its anchor point.
- `offset` – `{ x: number, y: number }`. Shifts the annotation from its anchor point in pixels.
- `opacity` – `number` between `0` and `1`. Sets the opacity of the annotation.

The following snippet customizes an annotation with alignment, offset, and opacity:

{% raw %}

```
<AnnotationDirective
  content='Target'
  coordinateUnits='Point'
  x='Japan'
  y={75}
  horizontalAlignment='Center'
  verticalAlignment='Middle'
  offset={{ x: 0, y: -10 }}
  opacity={0.85}>
</AnnotationDirective>
```
{% endraw %}

See the [ChartAnnotationSettingsModel API reference](https://ej2.syncfusion.com/react/documentation/api/chart/chartAnnotationSettingsModel) for the full list of properties.

## Multiple annotations

Add multiple annotations to the same chart by including more than one `AnnotationDirective` inside `AnnotationsDirective`. Each annotation can use its own `x`, `y`, `region`, `content`, and styling.

```
<AnnotationsDirective>
  <AnnotationDirective
    content='70 Gold Medals'
    region='Series'
    coordinateUnits='Point'
    x='Japan'
    y={75}>
  </AnnotationDirective>
  <AnnotationDirective
    content='Watermark'
    region='Chart'
    coordinateUnits='Pixel'
    x={20}
    y={20}
    opacity={0.4}>
  </AnnotationDirective>
</AnnotationsDirective>
```

## See Also

* [Show total stacking values in data label](./how-to/stacking-total)
* [Create footer and watermark for chart](./how-to/footer)
* [ChartAnnotationSettingsModel API reference](https://ej2.syncfusion.com/react/documentation/api/chart/chartAnnotationSettingsModel)