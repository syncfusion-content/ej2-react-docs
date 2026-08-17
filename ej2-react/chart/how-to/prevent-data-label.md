---
layout: post
title: How to prevent data labels in React Chart | Syncfusion
description: Learn how to prevent Syncfusion React Chart data labels from showing zero values for cleaner numeric visualizations.
control: Prevent data label
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent data labels in React Chart

To stop a data label from rendering when its point's value is `0`, hook the [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart#textrender) callback on the chart and set `args.cancel`. The callback fires for every data label; gate the cancel on a check of `args.text` and `args.point.y` so only the zero values are filtered.

## Cancel the label

The `textRender` callback receives an `args` object with two relevant fields:

| Field | Meaning |
| --- | --- |
| `args.text` | The formatted label string (for example, `'0'`, `'0.0'`, `'-0'`). |
| `args.point.y` | The numeric value of the point. |

The example gates the cancel on both fields — first it checks that the formatted text is `'0'`, then it sets `args.cancel` to a boolean expression that re-checks the underlying numeric value:

```
const textRender = (args) => {
    if (args.text === '0') {
        args.cancel = args.point.y === 0;
    }
};
```

Bind the callback on the `<ChartComponent>`:

```
<ChartComponent id='charts' textRender={textRender} … >
```

The two-condition guard is deliberate: the outer `if (args.text === '0')` makes sure the rest of the callback only runs for the labels we care about, and the inner `args.point.y === 0` produces a true `boolean` for `args.cancel` rather than a stringified comparison.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs8" %}

## Troubleshooting

* **"Every data label disappears"** — the `if (args.text === '0')` guard is missing. `textRender` fires for every label; without the guard you are cancelling all of them.
* **"The zero-value label still appears"** — `args.cancel` is being set to a string (for example, `args.cancel = '0'`) instead of a boolean. Assign a boolean expression: `args.cancel = args.point.y === 0`.

## See also

* [Getting started](../getting-started)
* [Data label](../data-labels)
* [Chart annotations](../chart-annotations)