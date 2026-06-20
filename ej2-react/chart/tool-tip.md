---
layout: post
title: Tooltip in React Chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Chart component

The chart displays detailed information about a data point through a tooltip when the mouse pointer moves over the point.

<!-- markdownlint-disable MD036 -->

## Default tooltip

By default, the tooltip is not visible. You can enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) property to **true** and by injecting `Tooltip` into the `provide`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs1" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement. You can render the tooltip at a fixed position by using the [`location`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#location) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs11" %}

## Format the tooltip

By default, the tooltip displays the x- and y-values of a data point. Additional information can be shown by specifying a custom format. For example, the format `${series.name} ${point.x}` displays the series name along with the x-value of the data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual series format

Each series tooltip can be formatted separately by using the series [`tooltipFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipformat) property.

> Note: When the series [`tooltipFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipformat) property is specified, the tooltip for that series is displayed in the defined format. Otherwise, the global tooltip format is applied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Inline tooltip formatting

The tooltip content can be formatted directly within the [`format`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipsettings#format) property by adding DateTime or number format specifiers to supported tooltip tokens. This allows you to control how point and series values are displayed without using additional events.

A format specifier can be applied to a tooltip token by adding a colon (`:`) followed by the required format.

For example:

```typescript
const tooltip = {
    enable: true,
    format: '${series.name} (${series.type})<br>${point.x:MMM yyyy} : ${point.y:n2}<br>Size: ${point.size}<br>Opacity: ${series.opacity}'
};
```

In the above example, `point.x` is displayed in month-year format, `point.y` is displayed with two decimal places, `point.size` displays the size value of the data point, and `series.opacity` displays the opacity value applied to the series.

Inline formatting can be applied to the following tooltip tokens:

- `point.x` – Specifies the x-value of the data point, such as DateTime or category values.
- `point.y` – Specifies the numeric y-value of the data point.
- `point.size` – Specifies the size value of the data point, commonly used in bubble series.
- `point.high` and `point.low` – Specify the high and low values, commonly used in range and financial series.
- `point.open` and `point.close` – Specify the open and close values, commonly used in financial series.
- `point.volume` – Specifies the volume value, commonly used in financial series.
- `point.minimum` – Specifies the minimum value, commonly used in box and whisker series.
- `point.maximum` – Specifies the maximum value, commonly used in box and whisker series.
- `point.median` – Specifies the median value, commonly used in box and whisker series.
- `point.lowerQuartile` – Specifies the lower quartile value, commonly used in box and whisker series.
- `point.upperQuartile` – Specifies the upper quartile value, commonly used in box and whisker series.
- `point.outliers` – Specifies the outlier values, commonly used in box and whisker series.
- `series.name` – Specifies the name assigned to the series.
- `series.type` – Specifies the rendering type of the series, such as `Line`, `Spline`, or `Column`.
- `series.opacity` – Specifies the opacity value applied to the series. This value controls the visual transparency of the series and can be customized in the series configuration.

**Important:** The availability of point-specific tokens depends on the series type and the values configured in the data source. For example, `point.size` is applicable to bubble series, while `point.median`, `point.lowerQuartile`, and `point.upperQuartile` are applicable to box and whisker series. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

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
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs14" %}

## Tooltip template

Custom HTML content can be rendered in the tooltip by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#template) property. The `${x}` and `${y}` placeholders can be used within the template to display the x- and y-values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs4" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enablehighlight) property to **true**, all points in the hovered series are highlighted while the remaining points are dimmed. This behavior improves focus and readability during data analysis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs12" %}

## Tooltip mapping name

By default, the tooltip displays only the x- and y-values of a data point. Additional information from the data source can be shown by using the [`tooltipMappingName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipmappingname) property of the series. Use the `${point.tooltip}` placeholder in the tooltip format to display the mapped value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs5" %}

## Customize the appearance of tooltip

The appearance of the tooltip can be customized by using the following properties:
- [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fill) to set the background color
- [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#border) to configure the tooltip border
- [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#textstyle) to customize the tooltip text style
The [`highlightColor`](https://ej2.syncfusion.com/react/documentation/api/chart#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs6" %}

## Closest tooltip

The [`showNearestTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#shownearesttooltip) property displays the tooltip for the data point nearest to the pointer, even when the pointer is not directly positioned over the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-cs13" %}

## Split tooltip

The split tooltip displays a separate tooltip for each series at the same data point, making it easier to compare values across multiple series.

Enable this feature by setting the [`split`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#split) property to **true**:

```js
tooltip: { 
    enable: true, 
    split: true 
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/split-tooltip" %}

## Follow pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.

Enable this feature by setting the [`followPointer`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#followpointer) property to **true**:

```js
tooltip: { 
    enable: true, 
    followPointer: true 
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/follow-pointer" %}

## Tooltip distance

The tooltip distance property controls the spacing between the tooltip and the mouse pointer or target data point. This prevents the tooltip from overlapping with the cursor or nearby chart elements, improving readability.

Set the [`distance`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#distance) property to specify the gap in pixels:

```js
tooltip: { 
    enable: true, 
    distance: 25 
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-distance/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-distance/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-distance/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/tooltip-distance/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/tooltip-distance" %}

## See also

* [Format the Tooltip Value](./how-to/tool-tip-format)
* [Create a Table in Tooltip](./how-to/tool-tip-table)
* [Show Tooltip Template on Button Click](https://support.syncfusion.com/kb/article/21534/how-to-show-tooltip-template-on-button-click-using-react-chart)