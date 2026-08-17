---
layout: post
title: How to customize point colors in React Chart | Syncfusion
description: Learn how to customize individual point colors in Syncfusion React Chart series for clearer category highlighting.
control: Points customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize point colors in React Chart

To give each data point its own color (or pattern), set the [`pointColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#pointcolormapping) property on the series directive to the name of a data field whose value holds the per-point color. The chart reads that field and applies its value to each point's fill.

## Bind the property

`pointColorMapping` lives on the `<SeriesDirective>`. Pass it the name of a field that exists on every data row:

```
<SeriesDirective
    dataSource={data}
    xName="country"
    yName="gold"
    name="Gold"
    type="Column"
    pointColorMapping="color"
/>
```

In the example the data field is `"color"`. The chart looks up `data[i].color` for each point and uses the value as the per-point fill.

## Supported value formats

The values stored on the data field can be:

* A CSS color name or hex code — for example, `"red"`, `"#ff0000"`.
* A CSS color function — for example, `"rgba(0,0,0,0.5)"`.
* An SVG `url(#id)` reference — for example, `"url(#chess)"`, `"url(#cross)"`, `"url(#circle)"`. The example uses this format so each country gets a different fill pattern instead of a solid color.

The completed example is shown below:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/pattern-point-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/pattern-point-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/pattern-point-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/pattern-point-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/pattern-point-cs1" %}

## Troubleshooting

* **"Every point is the same color"** — the field name passed to `pointColorMapping` does not match any key on the data rows, or the values are all the same string. Confirm the property references a real key and the data carries distinct values.
* **"Browser console shows `Cannot read properties of undefined`"** — a data row is missing the field that `pointColorMapping` references. Make sure every row has the field, even if the value is a fallback like `"none"`.

## See also

* [Getting started](../getting-started)
* [Data markers](../data-markers)
* [Chart annotations](../chart-annotations)