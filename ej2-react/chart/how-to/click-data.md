---
layout: post
title: How to handle point click in React Chart | Syncfusion
description: Learn how to handle point-click events on Syncfusion React Chart and read the clicked data point values in your app.
control: Click data
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to handle point click in React Chart

You can read the clicked data point of a chart series by listening for the [`pointClick`](https://ej2.syncfusion.com/react/documentation/api/chart/inde x-default#pointclick) event. The event works for every series type (column, line, area, pie, scatter, etc.) and exposes the clicked point, the owning series, and the original mouse event on the [`IPointEventArgs`](https://ej2.syncfusion.com/react/documentation/api/chart/ipointeventargs) object passed to the handler.

Common use cases include drill-down navigation, displaying tooltips/legends outside the chart, triggering remote data fetches, and acting as an action link from data points.

## Handle a point click

Bind the `pointClick` event in your React component and read `args.point`, `args.series`, and `args.seriesIndex` to identify the clicked data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs1" %}

### Event argument shape

The `pointClick` handler receives an `IPointEventArgs` object with the following most useful properties:

| Property | Type | Description |
| --- | --- | --- |
| `point.x` | `number` &#124; `string` &#124; `Date` | The x value of the clicked point (matches the data type bound to the axis). |
| `point.y` | `number` | The y value of the clicked point. |
| `point.poitIndex` | `number` | Zero-based index of the clicked point within its series. |
| `series` | `SeriesModel` | Reference to the full series object that contains the clicked point. |
| `seriesIndex` | `number` | Zero-based index of the owning series within the chart's `series` collection. |
| `name` | `string` | Name of the clicked series. |
| `cancel` | `boolean` | Set to `true` in the handler to cancel the built-in click action (for series such as pie/doughnut, where applicable). |

## Troubleshooting

- **"My handler runs but `args.point` is `undefined`"** — the click hit a non-data area (axis, legend, margin). Wrap the handler body with a null-check for `args.point`.
- **"The wrong point fires"** — confirm you are reading `args.point.y`, not `args.point.data` (which is the raw source object). Use `args.seriesIndex` if you have multiple series rendered.

## See also

* [Getting started](../getting-started)