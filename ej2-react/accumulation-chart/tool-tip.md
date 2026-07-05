---
layout: post
title: Tooltip in React Accumulation chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Accumulation chart component

Tooltip for the accumulation chart can be enabled by using the [`enable`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#enable) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs13" %}

>Note:To use tooltip feature , we need to inject `AccumulationTooltip` module into the `services`.

## Header

We can specify header for the tooltip using [`header`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#header) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs14" %}

## Format

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs15" %}

## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipsettings#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```typescript
const tooltip = {
    enable: true,
    format: '${series.name}<br>${point.x} : ${point.y:n2}<br>Percentage: ${point.percentage:p1}<br>Opacity: ${series.opacity}'
};
```

In the above example, `point.y` is displayed with two decimal places, `point.percentage` is displayed in percentage format, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value or category value of the accumulation chart point.
- `point.y` – Specifies the numeric y-value of the accumulation chart point.
- `point.percentage` – Specifies the percentage contribution of the point value in the accumulation chart.
- `point.text` – Specifies the text value mapped to the point, when text mapping is configured.
- `point.tooltip` – Specifies the tooltip value mapped from the data source, when tooltip mapping is configured.
- `point.index` – Specifies the index position of the point in the accumulation chart.
- `point.color` – Specifies the fill color applied to the point.
- `point.visible` – Specifies the visibility state of the point.
- `series.name` – Specifies the name assigned to the accumulation chart series.
- `series.type` – Specifies the rendering type of the accumulation chart series, such as `Pie`, `Doughnut`, `Pyramid`, or `Funnel`.
- `series.opacity` – Specifies the opacity value applied to the accumulation chart series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the values configured in the data source and the accumulation chart series type. For example, `point.percentage` is useful for pie and doughnut charts, while `point.text` and `point.tooltip` depend on the corresponding field mappings. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

The following format types are supported:

- DateTime formats such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- Number formats such as:
  - `n2` – number with two decimal places
  - `n0` – number without decimals
  - `c2` – currency format
  - `p1` – percentage format
  - `e1` – exponential notation 

If the specified format does not match the resolved value type, the original value is displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-format/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-format/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-format" %}

## Tooltip mapping name

By default, tooltip shows information of x and y value in points. You can show more information from datasource in tooltip by using the [`tooltipMappingName`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel#tooltipmappingname) property of the tooltip. You can use the `${point.tooltip}` as place holders to display the specified tooltip content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs16" %}

## Tooltip template

Any HTML element can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#template) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs17" %}

## Fixed tooltip

By default, tooltip track the mouse movement, but you can set a fixed position for the tooltip by using the [`location`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#location) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs20" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#textstyle) property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationChartModel#highlightcolor) property can be used to change the color of the data point when hovering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs18" %}

## To customize individual tooltip

Using [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/iAccTooltipRenderEventArgs) event, you can customize a tooltip for particular point. event, you can customize a tooltip for particular point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/legend-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/legend-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/legend-cs19" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#enablehighlight) property to **true**, the hovered pie slice is highlighted, while the remaining slices are dimmed, enhancing focus and clarity.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/pie-cs41/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/pie-cs41/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/pie-cs41" %}

## Follow pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the accumulation chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.

Enable this feature by setting the [`followPointer`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipSettingsModel#followpointer) property to **true**:

```js
tooltip: { 
    enable: true, 
    followPointer: true 
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer-accumulation/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer-accumulation/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/follow-pointer-accumulation" %}