---
layout: post
title: How to add a threshold line in React Chart | Syncfusion
description: Learn how to mark a y-axis threshold line on Syncfusion React Chart using striplines to highlight reference values.
control: Threshold
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a threshold line in React Chart

To mark a horizontal reference value on the chart, set the `stripLines` array on the y-axis config. Each entry draws a band between `start` and `end`; a narrow band (a fraction of a unit) reads as a single line, while a wider band highlights a region.

You also need to register `StripLine` in the chart's `<Inject services={[…]}>>` array; without it the `stripLines` array has no visible effect.

## Add the strip line

`stripLines` lives on the y-axis config. Each entry accepts the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `start` | number | The starting y value of the band. |
| `end` | number | The ending y value of the band. |
| `color` | string | The fill color of the band. Accepts a CSS color. |
| `visible` | boolean | Whether the strip line is drawn. Defaults to `true`. |
| `dashArray` | string | Stroke pattern; pass a value like `'4 2'` for a dashed line. |
| `size` | number | The band height (overrides the `end - start` range when set). |

The example draws a thin red line at `y = 15` by setting `start` and `end` 0.1 apart:

```
const primaryyAxis = {
    title: 'Runs',
    stripLines: [
        { start: 15, end: 15.1, color: '#ff512f', visible: true }
    ]
};
```

Pass the config to the chart:

```
<ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} ... >
```

The complete example below wires the `stripLines` array on the y-axis config to a thin red line at `y = 15`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs11" %}

## Troubleshooting

* **"The threshold line does not appear"** — `StripLine` is missing from the chart's `<Inject services={[…]}>>` array, or the `stripLines` array is not on the y-axis config.
* **"The band is too thick to read as a line"** — increase the gap between `start` and `end`. The example uses `0.1`; raise it to `0.5` or `1` if your y-axis range is wider.
* **"The line is hidden behind the series"** — the `color` is the same as the line series' fill. Pick a contrasting color (the example uses red `#ff512f`).
* **"The line is positioned wrong"** — the value passed to `start` and `end` is on the y-axis scale, not the data range. Make sure the threshold value falls inside `primaryYAxis.minimum` and `primaryYAxis.maximum`.

## See also

* [Getting started](../getting-started)
* [Strip line](../strip-line)
* [Chart annotations](../chart-annotations)