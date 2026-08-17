---
layout: post
title: How to format date tooltips in React Chart | Syncfusion
description: Learn how to format date and time values in Syncfusion React Chart tooltips for clearer, locale-friendly data display.
control: Tooltip format
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to format date tooltips in React Chart

You can format date and time values in a React Chart tooltip using either an inline `tooltip.format` string or the `tooltipRender` event with the `Internationalization` class. Use the inline approach for static, token-based formatting and the `tooltipRender` event for fully customized tooltip content.

To display a tooltip, set `enable` to `true` in the `tooltip` property and inject the `Tooltip` service into the chart.

## Approach 1: Format a date inline with `tooltip.format`

Add a colon (`:`) and the required DateTime format after the `point.x` token in the [`tooltip.format`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipsettingsmodel#format) property.

The `point.x` token represents the x-value of the hovered data point. When the x-axis uses `DateTime`, a DateTime format specifier can be appended directly to the token. The `point.y` token represents the corresponding numeric y-value.

**Format a date only**

```jsx
const tooltip = {
    enable: true,
    format: '${point.x:MMM dd, yyyy}'
};
```

**Format a date and the y-value together**

```jsx
const tooltip = {
    enable: true,
    format: '${point.x:MMM dd, yyyy} : ${point.y}'
};
```

**Include the series name**

```jsx
const tooltip = {
    enable: true,
    format: '${series.name}<br>${point.x:MMM dd, yyyy} : ${point.y:n2}'
};
```

Numeric format specifiers such as `n2` can also be appended to any numeric token.

### DateTime format examples

The following DateTime formats can be used with the `point.x` token:

| Format | Example output | Description |
| --- | --- | --- |
| `MMM yyyy` | `Nov 2005` | Abbreviated month and year |
| `MM/yy` | `11/05` | Numeric month and two-digit year |
| `dd MMM` | `12 Nov` | Day and abbreviated month |
| `MMM dd, yyyy` | `Nov 12, 2005` | Abbreviated month, day, and year |
| `MMMM dd, yyyy` | `November 12, 2005` | Full month, day, and year |
| `yyyy-MM-dd` | `2005-11-12` | Year, month, and day |

Choose a format that matches the precision and readability required by the chart.

### Bind the configuration

Pass the `tooltip` object to the `ChartComponent`:

```jsx
<ChartComponent
    id="charts"
    primaryXAxis={{ valueType: 'DateTime' }}
    tooltip={{
        enable: true,
        format: '${point.x:MMM dd, yyyy} : ${point.y:n2}'
    }}
>
```

The completed example is shown below:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs13" %}

## Approach 2: Format a date with the `tooltipRender` event

Use the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart#tooltiprender) callback when the tooltip text must change according to custom runtime conditions that cannot be expressed as a static format string. The callback fires before each tooltip is rendered, and assigning to `args.text` overrides the default content.

The chart needs `tooltip={{ enable: true }}` on `<ChartComponent>` - without that flag the `tooltipRender` callback never fires.

### `args` fields

The `tooltipRender` callback receives an `args` object with two relevant fields:

| Field | Meaning |
| --- | --- |
| `args.point.x` | The x value of the hovered point. For a `DateTime` x-axis this is a JavaScript `Date` object. |
| `args.text` | The string the tooltip renders. Assign to this to override the default. |

### Format the date

Create an `Internationalization` instance inside the callback, pass the point's date through `formatDate`, and assign the result to `args.text`:

```
const tooltipRender = (args) => {
    const intl = new Internationalization();
    const formattedString = intl.formatDate(new Date(args.point.x), { skeleton: 'yMd' });
    args.text = formattedString;
};
```

Bind the callback on the `<ChartComponent>`:

```
<ChartComponent id='charts'
    primaryXAxis={{ valueType: 'DateTime' }}
    tooltip={{ enable: true }}
    tooltipRender={tooltipRender}>
```

The completed example is shown below:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs12" %}

## When to use which approach

* **Use inline `tooltip.format`** for static, token-based formatting such as `${point.x:MMM dd, yyyy}` or `${point.y:n2}`. It is simpler, requires no event handler, and keeps the format string next to the chart configuration.
* **Use the `tooltipRender` event** when the tooltip text must change according to custom runtime conditions that a static format string cannot express - for example, conditional content based on the point's value, custom locale handling, or building the text from multiple sources.

## See also

* [Getting started](../getting-started)
* [Tooltip template](../tool-tip)
* [Internationalization](../internationalization)