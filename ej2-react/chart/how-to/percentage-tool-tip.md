---
layout: post
title: How to show percentage in pie tooltip in React Chart | Syncfusion
description: Learn how to show each point's percentage share in the Syncfusion React Chart pie tooltip for clearer comparison.
control: Percentage tooltip
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show percentage in pie tooltip in React Chart

To show each slice's percentage share in a pie tooltip, hook the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart#tooltiprender) callback on the chart and assign the formatted string to `args.text`. The callback fires once per hovered slice.

You also need to register `PieSeries` and `AccumulationTooltip` inside `<Inject services={[…]}>>`, and enable tooltips on the chart with `tooltip={{ enable: true }}`; without that flag, the `tooltipRender` callback never fires.

## Calculate and assign the percentage

The `tooltipRender` callback receives an `args` object. Two fields are useful here:

| Field | Meaning |
| --- | --- |
| `args.point.y` | The numeric value of the hovered slice. |
| `args.series.sumOfPoints` | The sum of all slice values in the series. |

Divide `args.point.y` by `args.series.sumOfPoints` and multiply by `100` to get the slice's percentage share. Assign the formatted string to `args.text`; that string is what the tooltip renders:

```
const tooltipRender = (args) => {
    const value = (args.point.y / args.series.sumOfPoints) * 100;
    args.text = `${args.point.x} ${Math.ceil(value)}%`;
};
```

Bind the callback on the `<AccumulationChartComponent>`:

```
<AccumulationChartComponent id='charts' tooltip={{ enable: true }} tooltipRender={tooltipRender}>
```

The complete example is shown below:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs7" %}

## Troubleshooting

* **"The tooltip shows the raw value instead of a percentage"** — the `tooltipRender` callback is not bound on `<AccumulationChartComponent>`, or `tooltip={{ enable: true }}` is missing. Both are required for the callback to fire.
* **"The tooltip shows `NaN%` for every slice"** — `args.series.sumOfPoints` is `0`. Either populate the data source with non-zero values or guard the division.
* **"The slices do not add up to exactly 100%"** — the example uses `Math.ceil`, which rounds up. Switch to `Math.round` if you need exact totals.

## See also

* [Getting started](../getting-started)
* [Tooltip template](../tool-tip)
* [Accumulation chart pie/doughnut](../../accumulation-chart/pie-dough-nut)