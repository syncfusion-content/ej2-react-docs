---
layout: post
title: How to add or remove series in React Chart | Syncfusion
description: Learn how to add or remove series dynamically in Syncfusion React Chart at runtime without re-rendering the chart.
control: Add or Remove Series
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add or remove series in React Chart

You can add or remove chart series dynamically—without re-rendering the chart—by calling the [`addSeries`](https://ej2.syncfusion.com/react/documentation/api/chart#addseries) and [`removeSeries`](https://ej2.syncfusion.com/react/documentation/api/chart#removeseries) instance methods on the `ChartComponent` reference. Both methods update the chart on the next tick without rebuilding the React tree.

Typical use cases include legend-driven series toggling, dashboard "add metric" controls, and dynamic data-source switching.

## Add or remove a series dynamically

The example below wires two `ButtonComponent` controls to an `add()` and `remove()` function that both operate on the same `chartInstance`:

* `chartInstance.addSeries([{ … }])` — pass a one-element array containing a fully-configured `SeriesModel`. The new series is appended to the existing `series` collection and the chart re-renders without rebuilding the React tree.
* `chartInstance.removeSeries(1)` — pass a zero-based index of the series to remove. Negative or out-of-range indices are ignored without throwing.

The reference to the chart is captured via a **callback ref** (`ref={chart => chartInstance = chart}`), so the buttons can invoke the instance methods from their `onClick` handlers without any extra setup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/add-series-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/add-series-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/add-series-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/add-series-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/add-series-cs1" %}

### Method signatures

```ts
chart.addSeries(series: SeriesModel | SeriesModel[]): void;
chart.removeSeries(index: number): void;
```

| Method | Argument | Type | Description |
| --- | --- | --- | --- |
| `addSeries` | `series` | `SeriesModel[]` | An array containing one or more fully-configured series objects to append to the chart. The example passes a single-element array with a `Column` series. |
| `removeSeries` | `index` | `number` | Zero-based index of the series to remove from the current `series` collection. The example removes the second series by passing `1`. |

## Troubleshooting

- **"Nothing happens when I call `addSeries` / `removeSeries`"** — the chart ref is most likely `null`. Confirm the `<ChartComponent>` element has rendered before invoking the method.
- **"I get duplicate-pointer behavior on push"** — the same `SeriesModel` reference was passed twice. Clone the object (or rebuild it) before adding it again.
- **"Removed the wrong series"** — confirm the index reflects the **current** `series` order on the chart, not the order you originally declared.

## See also

* [Getting started](../getting-started)
* [Data label](../data-labels)
* [Tooltip](../tool-tip)