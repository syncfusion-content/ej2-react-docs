---
layout: post
title: User interaction in React Sparkline component | Syncfusion
description: Learn here all about User interaction in Syncfusion React Sparkline component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in React Sparkline component

Sparkline has two user interaction features: tooltip and tracker line.

## Sparkline tooltip

The Sparkline provides additional information through a tooltip that appears on hover over the chart. You can enable the tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinetooltipsettingsmodel#visible) property to `true` in [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#tooltipsettings) and injecting the `SparklineTooltip` module into the `services`. The [`format`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinetooltipsettingsmodel#format) property uses placeholders such as `${XValue}` and `${YValue}` to render data fields in the tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/code-path/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/code-path/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/code-path/getting-started-cs3" %}

### Tooltip customization

The fill color, text styles, format, and border of the tooltip can be customized. The following code example shows customization of tooltip's fill color and text style.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/user-interaction-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/user-interaction-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs2" %}

 ### Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`] property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```typescript
const tooltipSettings = {
    visible: true,
    format: '${x:MMM yyyy} : ${y:n2}'
}
```

In the above example, `x` is displayed in month-year format and `y` is displayed with two decimal places.

Inline formatting can be applied to the following tooltip tokens:

- `${x}` or `${x:MMM yyyy}` – Specifies the x-value of the Sparkline data point, such as DateTime or category values.
- `${y}` or `${y:n2}` – Specifies the numeric y-value of the Sparkline data point.

**Important:** DateTime formatting is applied when the resolved value is a Date object, and number formatting is applied when the resolved value is numeric. 

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimals
  - `c2` – currency format
  - `p1` – percentage format

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/user-interaction-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/user-interaction-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs5" %}

### Tooltip template

Sparkline tooltip has template support. By using tooltip template, you can customize tooltips. The following code example shows more customization options provided to  `sparkline-tooltip` css class that is used in tooltip template div. Using this template, images also can be added to tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/user-interaction-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/user-interaction-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs3" %}

## Track line

The track line tracks data points that are closer to the mouse position or touch contact.

To enable track lines for sparkline, specify the `visible` option of  `trackLineSettings` to true. Based on theme, tracker color will be changed. The default value of tracker color is black.

To use track line in sparkline, inject the `SparklineTooltip` module to sparkline using the inject method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/user-interaction-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/user-interaction-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs4" %}