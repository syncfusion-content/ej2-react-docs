---
layout: post
title: How to customize legend in React Chart | Syncfusion
description: Learn how to customize legend per series in Syncfusion React Chart for a more meaningful legend display.
control: Legend customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize legend in React Chart

To change the legend shape per series, hook the [`legendRender`](https://ej2.syncfusion.com/react/documentation/api/chart#legendrender) callback on the chart and assign `args.shape`. The callback fires once per legend entry and lets you pick a different shape for each one.

## Customize the shape

The `legendRender` callback receives an `args` object whose `args.text` is the series `name` and whose `args.shape` is the legend-shape string you want to use. Assign a new value to `args.shape` to override the default. The example maps two series to two different shapes:

```
const legendRender = (args) => {
    if (args.text === 'Renewable') {
        args.shape = 'Circle';
    }
    else if (args.text === 'Non-Renewable') {
        args.shape = 'Triangle';
    }
};
```

Bind the callback on the `<ChartComponent>`:

```
<ChartComponent id='charts' legendRender={legendRender} ... >
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs4" %}


## Troubleshooting

* **"The legend does not appear at all"** — `Legend` is missing from the chart's `<Inject services={[…]}>` array, or the chart has `legendSettings.visible: false`.
* **"All shapes look the same regardless of the callback"** — the `legendRender` prop is not bound on `<ChartComponent>`, or the callback assigns `args.shape` but returns before the assignment is reached. Make sure the assignment is on a code path that runs for every expected `args.text`.

## See also

* [Getting started](../getting-started)
* [Legend](../legend)
* [Chart annotations](../chart-annotations)
