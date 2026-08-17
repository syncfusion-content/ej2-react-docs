---
layout: post
title: How to create a live chart in React Chart | Syncfusion
description: Learn how to create a live Syncfusion React Chart that updates with new data in real time for dynamic dashboards and monitoring.
control: Live chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a live chart in React Chart

A live chart updates its series as new data arrives. The pattern is to seed an array with initial points and then, on a recurring timer (here, `setTimeout`), push a new point onto the end of the array and `shift` the oldest one off. After modifying the array, assign it to `args.chart.series[0].dataSource` so that the series receives the updated data. If updates are managed outside the chart event lifecycle, refresh the chart after changing its data source when required.

## Initialize the chart with seed data

Build a seed array before the chart first renders. The example pre-fills 50 points:

```
let series1 = [];
let value = 10;
for (let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
        value += Math.random() * 2.0;
    }
    series1[i] = { x: i, y: value };
}
```

Pass that array to the series:

```
<SeriesDirective dataSource={series1} xName='x' yName='y' type='Line' />
```

## Update the data on a timer

In the `loaded` event handler, schedule an update with `setTimeout`. During each update, append a new point, remove the oldest point, and assign the updated array to the series data source.

```
function loaded(args) {
    intervalId = setTimeout(() => {
        if (Math.random() > 0.5) {
            value += Math.random() * 2.0;
        }
        i++;
        series1.push({ x: i, y: value });
        series1.shift();
        args.chart.series[0].dataSource = series1;
    }, setTimeoutValue);
}
```

After modifying the array, assign it to `args.chart.series[0].dataSource` so that the series receives the updated data. If updates are managed outside the chart event lifecycle, refresh the chart after updating the data source when required.

## Stop the timer on unmount

Clear the pending timeout when the component unmounts so that updates do not continue after the chart is removed.

The complete example below ties the seed array, the recurring `setTimeout`, and the chart together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs5" %}

## Troubleshooting

* **The chart updates once and then stops:** Confirm that the chart raises the `loaded` event again after the series is updated. If updates are controlled independently of the chart lifecycle, use a self-scheduling `setTimeout` or `setInterval`, and cancel the timer when the component unmounts.
* **Memory usage grows over time** — Ensure that each call to `push` is paired with a call to `shift`. Keeping the array bounded prevents the chart from rendering an continuously increasing number of points.
* **Updates continue after the chart is removed** — Store the timer identifier and cancel it when the component unmounts. Use `clearTimeout` for `setTimeout` or `clearInterval` for `setInterval`.

## See also

* [Getting started](../getting-started)
* [Dynamic data update](../dynamic-data-update)
* [Chart annotations](../chart-annotations)