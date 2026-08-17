---
layout: post
title: How to add a footer in React Chart | Syncfusion
description: Learn how to add a footer to Syncfusion React Chart using custom HTML annotations on the chart area.
control: Footer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a footer in React Chart

You can place any HTML element on the chart in a desired position by using [`Annotations`](https://ej2.syncfusion.com/react/documentation/api/chart/index-default#annotations). A footer is just one common use case; the same approach also works for watermarks, custom titles, or any HTML layer drawn over the plot area.

## Add the annotation

The `content` option of `AnnotationDirective` is a JSX function reference, not the `id` string of a DOM element. Define a regular React function returning the JSX you want displayed, then pass that function as `content`:

```
const content = chartTemplate;
function chartTemplate() {
    return (<div className='template'>
        <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a>
    </div>);
}
```

Each annotation is then declared as an `<AnnotationDirective>` child of `<AnnotationsDirective>` inside `<ChartComponent>`.

## Choose the coordinate system

The example declares two annotations: one inside the plot area (a watermark) and one near the chart edge (the footer). They differ only in `coordinateUnits`:

| Coordinate unit | Use case | Meaning of `x` and `y` |
| --- | --- | --- |
| `'Pixel'` | Positioning an annotation at a visual location within the selected annotation region. | Pixel offsets from the region’s coordinate origin. |
| `'Point'` | Attaching an annotation to a data location. | Values interpreted by the associated x-axis and y-axis. Their types must match the axis configurations. |

The complete example below declares one annotation in `Pixel` mode (the footer at `x={440}`, `y={600}`) and one in `Point` mode (the watermark at `x='Wed'`, `y={20}`) so both patterns are visible at once.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs2" %}


## Troubleshooting

* **"Annotation does not render at all"** — `ChartAnnotation` is missing from the `<Inject services={[…]}>` array, or the `AnnotationsDirective` is placed outside `<ChartComponent>`.
* **"The annotation is offset by exactly the chart's left/top margins"** — you are using `coordinateUnits='Pixel'` but the chart has a legend or title pushing the plot area over. Switch to `'Point'` (and pass data values), or recompute the pixel values after layout settles.
* **"Multiple annotations overlap or stack on top of each other"** — the example uses two `AnnotationDirective` entries with different `x`/`y`. Make sure each has its own `(x, y)` pair and that they do not coincide.
* **"The annotation is configured but not visible"**: Confirm that its pixel coordinates fall within the selected annotation region. For example, `y={600}` will not be visible when the chart or region is shorter than 600 pixels.

## See also

* [Chart annotations](../chart-annotations)
* [Getting started](../getting-started)
* [Title and subtitle](../title-subtitle)
