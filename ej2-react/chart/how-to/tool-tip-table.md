---
layout: post
title: How to add a table in the tooltip in React Chart | Syncfusion
description: Learn how to show a custom HTML table inside Syncfusion React Chart tooltips using the template property.
control: Tooltip table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a table in the tooltip in React Chart

To render a custom HTML table inside the tooltip, assign a JSX function reference to the `template` property of the chart's `tooltip` config. The function receives the hovered point's data and returns the JSX you want to display — including `<table>`, `<div>`, images, or any other elements you need.

You also need to register `Tooltip` in the chart's `<Inject services={[…]}>>` array; without it the tooltip never renders and the `template` callback never fires.

## Define the template function

Declare a regular React function that returns the JSX you want inside the tooltip. The function receives an `args` object whose `args.x` and `args.y` are the hovered point's x and y values. The example uses these to render a small table:

{% raw %}
```
function chartTemplate(args) {
    return (
        <div id="templateWrap">
            <table style={{ width: '100%', margin: '5px', border: '1px solid black', backgroundColor: '#00FFFF' }}>
                <tbody>
                    <tr><th colSpan={2}>Female</th></tr>
                    <tr><td>{args.x}</td><td>:</td><td>{args.y}</td></tr>
                </tbody>
            </table>
        </div>
    );
}
```
{% endraw %}

The function is plain JSX, so you can use any HTML or React constructs inside it — `<table>`, `<img>`, conditional rendering, and so on. The chart re-runs the function for every hovered point, so the values stay in sync with the data.

## Bind the function to the tooltip

Pass the function reference into the `template` property of the chart's `tooltip` config:

```
const tooltip = {
    enable: true,
    template: chartTemplate
};
```

Bind the config on the `<ChartComponent>`:

```
<ChartComponent id='charts' tooltip={tooltip} ... >
```

`enable: true` is required — without it the tooltip is disabled and the template is never used.

The complete example below wires the `chartTemplate` function, the `tooltip.template` config, and the `<ChartComponent>` together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/table-cs1" %}

## Troubleshooting

* **"The default tooltip still appears"** — `Tooltip` is missing from the chart's `<Inject services={[…]}>>` array, or `enable: true` is missing on the `tooltip` config. Both are required.
* **"The template is undefined inside the function"** — the function is being called before the chart has data, or `template` is being assigned the function's return value (`template: chartTemplate()`) instead of the function reference (`template: chartTemplate`).
* **"The table layout breaks when the chart resizes"** — fixed pixel widths inside the template do not scale. Use percentage widths (`width: '100%'`) or `maxWidth` on the inner `<table>` so it adapts.

## See also

* [Getting started](../getting-started)
* [Tooltip template](../tool-tip)
* [Data label template](data-label-template)