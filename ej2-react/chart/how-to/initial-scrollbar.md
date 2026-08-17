---
layout: post
title: How to set initial scrollbar in React Chart | Syncfusion
description: Learn how to make the scrollbar visible on initial render of Syncfusion React Chart for zoomed chart views.
control: Initial scrollbar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set initial scrollbar in React Chart

To display the scrollbar when the chart first renders, configure the following properties:

1. Set `zoomFactor` on the x-axis to the fraction of the data that should initially be visible. For example, set it to `0.3` to display 30% of the axis range.
2. Set `enableScrollbar` to `true` in [`ZoomSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/chart/zoomsettingsmodel).
3. Set `isZoomed` to `true` on the chart's `zoomModule` in the [`load`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#load) event.

Register the [`Zoom`](https://ej2.syncfusion.com/react/documentation/api/chart/zoom) and [`ScrollBar`](https://ej2n.com/react/documentation/api/chart/scrollbarsettings) services in the chart's `<Inject services={[...]} />` array. Without these services, the scrollbar will not appear.

```
const load = (args) => {
    args.chart.zoomModule.isZoomed = true;
};
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs3" %}

## Troubleshooting

* **"The scrollbar never appears"** — `ScrollBar` and `Zoom` are missing from the chart's `<Inject services={[…]}>` array, or `enableScrollbar` is `false` in `zoomSettings`.
* **"The chart renders fully zoomed out and the scrollbar is gone"** — `isZoomed` is not being set. Confirm the `load` event handler is bound on the `<ChartComponent>` and sets `args.chart.zoomModule.isZoomed = true`.
* **"The visible window is wider or narrower than expected"** — adjust `zoomFactor` on the x-axis (a smaller value shows a smaller initial window and a longer scrollbar).

## See also

* [Getting started](../getting-started)
* [Zooming](../zooming)
* [Chart annotations](../chart-annotations)
