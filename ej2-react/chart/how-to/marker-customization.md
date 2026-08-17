---
layout: post
title: How to customize marker shape in React Chart | Syncfusion
description: Learn how to customize marker shape per data point in Syncfusion React Chart series for richer visual cues.
control: Marker customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize marker shape in React Chart

To set a different marker shape for every data point in a series, hook the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart#pointrender) callback on the chart and assign `args.shape` based on the data point. The callback fires once per data point and lets you pick a different shape for each one.

## Customize the shape per data point

The `pointRender` callback receives an `args` object whose `args.point` describes the current data point (for example, `args.point.index`, `args.point.x`, `args.point.y`). Assign a value to `args.shape` to override the default for that point. The example uses an array indexed by `args.point.index`:

```
const pointRender = (args) => {
    const shapes = ['Diamond', 'Circle', 'Rectangle', 'Line', 'Triangle', 'Rectangle'];
    args.shape = shapes[args.point.index];
};
```

Bind the callback on the `<ChartComponent>`:

```
<ChartComponent id='charts' pointRender={pointRender} ... >
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs6" %}

## Troubleshooting

* **"All markers look the same regardless of the callback"** — `pointRender` is not bound on `<ChartComponent>`, or the `marker.visible` flag is `false`. Both are required: the callback must be wired up, and the marker must be visible.
* **"The same shape repeats for all data points"** — the callback is reading from the same data field for every point (for example, always `args.point.x`). Use `args.point.index` to vary the shape, or any other field that differs between points.
* **"Performance degrades on large series"** — `pointRender` fires for every data point. For very long series, prefer setting `marker.shape` once on the series instead of overriding per point.

## See also

* [Getting started](../getting-started)
* [Data markers](../data-markers)
* [Chart annotations](../chart-annotations)