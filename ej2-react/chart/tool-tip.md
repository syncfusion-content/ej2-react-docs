---
layout: post
title: Tooltip in React Chart | Syncfusion
description: Learn how to enable tooltips in Syncfusion React Chart with custom formats, HTML templates, highlighting, fixed position, and follow-pointer behavior.
control: Tooltip
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Chart

The chart displays detailed information about a data point through a tooltip when the mouse pointer moves over the point.

> Note: The examples in this section assume that the `@syncfusion/ej2-react-charts` package is installed. Import `ChartComponent`, `SeriesCollectionDirective`, `SeriesDirective`, and `Inject` from the package, and add `Tooltip` to the `services` array of `Inject`. For setup details, see [Getting started with React Chart](https://ej2.syncfusion.com/react/documentation/chart/getting-started).

<!-- markdownlint-disable MD036 -->

## Default Tooltip

By default, the tooltip is disabled. Enable it by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) property to **true** on the `tooltip` settings and by adding the `Tooltip` module to the `services` array of `Inject`, as shown in the following example:

```
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip } from '@syncfusion/ej2-react-charts';

const tooltip = { enable: true };

<ChartComponent tooltip={tooltip}>
    <Inject services={[Tooltip]} />
    <SeriesCollectionDirective>
        <SeriesDirective />
    </SeriesCollectionDirective>
</ChartComponent>
```

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

## Fixed Tooltip

By default, the tooltip tracks the mouse movement. Use the [`location`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#location) property to render the tooltip at a fixed position. The `location` property accepts an object with `x` and `y` pixel offsets measured from the chart's top-left corner:

```js
const tooltip = {
    enable: true,
    location: { x: 120, y: 20 }
};
```

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

## Format the Tooltip

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

## Individual Series Format

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

## Inline Tooltip Formatting

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

### Supported Tokens

The following tokens can be combined with a format specifier:

| Token | Description | Series type |
| --- | --- | --- |
| `point.x` | x-value of the data point (DateTime or category). | All |
| `point.y` | Numeric y-value of the data point. | All |
| `point.size` | Size value of the data point. | Bubble |
| `point.high`, `point.low` | High and low values. | Range, financial |
| `point.open`, `point.close` | Open and close values. | Financial |
| `point.volume` | Volume value. | Financial |
| `point.minimum`, `point.maximum` | Minimum and maximum values. | Box and whisker |
| `point.median` | Median value. | Box and whisker |
| `point.lowerQuartile`, `point.upperQuartile` | Lower and upper quartile values. | Box and whisker |
| `point.outliers` | Outlier values. | Box and whisker |
| `series.name` | Name assigned to the series (string). | All |
| `series.type` | Rendering type of the series (string). | All |
| `series.opacity` | Opacity value configured in the series settings. | All |

> **Important:** The availability of point-specific tokens depends on the series type and the values configured in the data source. The `series.name` and `series.type` tokens return string values, so DateTime or number formatting is not applied to these tokens.

### Supported Format Types

The following format types can be appended after the colon (`:`) for any numeric or DateTime token:

- **DateTime formats** such as `MMM yyyy`, `MM:yy`, and `dd MMM`
- **Number formats** such as:
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

## Tooltip Template

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

## Series Highlight on Tooltip

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

## Tooltip Mapping Name

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

## Tooltip Header

Use the [`header`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#header) property to display a title at the top of the tooltip. The value can be a static string or a placeholder such as `${point.x}` that is resolved per data point.

```js
const tooltip = {
    enable: true,
    header: '${point.x}',
    format: '${series.name} : ${point.y}'
};
```

## Shared Tooltip

The [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#shared) property merges the values of all visible series for the hovered x-value into a single tooltip. This is useful for comparing multiple series at a specific point. To render one tooltip per series instead, use the [`split`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#split) property described in [Split Tooltip](#split-tooltip).

```js
const tooltip = {
    enable: true,
    shared: true
};
```

## Tooltip Animation

The [`duration`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#duration) property controls the duration (in milliseconds) of the tooltip's open and close animations. The default is `500`.

```js
const tooltip = {
    enable: true,
    duration: 1000
};
```

Use the [`fadeInDuration`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fadeinduration) and [`fadeOutDuration`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fadeoutduration) properties to configure the fade-in and fade-out durations independently.

## Customize the Appearance of Tooltip

The appearance of the tooltip can be customized by using the following properties:
- [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fill) to set the background color
- [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#border) to configure the tooltip border
- [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#textstyle) to customize the tooltip text style
- [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#opacity) to set the opacity of the tooltip background (value between `0` and `1`)

The [`highlightColor`](https://ej2.syncfusion.com/react/documentation/api/chart#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction. To enable the highlight effect itself, see [Series Highlight on Tooltip](#series-highlight-on-tooltip).

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

## Closest Tooltip

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

## Split Tooltip

The split tooltip displays a separate tooltip for each series at the same data point, making it easier to compare values across multiple series. Use [`split`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#split) to render one tooltip per series; use [`shared`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#shared) to merge all series for the current x-value into a single tooltip.

Enable the split tooltip by setting the `split` property to **true**:

```js
const tooltip = {
    enable: true,
    split: true
};
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/split-tooltip/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/split-tooltip" %}

## Follow Pointer

The follow pointer feature enables the tooltip to follow the mouse cursor or touch pointer as users interact with the chart. This provides a more dynamic and intuitive experience by keeping the tooltip close to the user's point of interaction.

Enable this feature by setting the [`followPointer`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#followpointer) property to **true**:

```js
const tooltip = {
    enable: true,
    followPointer: true
};
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/user-interaction/follow-pointer/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/user-interaction/follow-pointer" %}

## Tooltip Distance

The tooltip distance property controls the spacing between the tooltip and the mouse pointer or target data point. This prevents the tooltip from overlapping with the cursor or nearby chart elements, improving readability.

Set the [`distance`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#distance) property to specify the gap in pixels:

```js
const tooltip = {
    enable: true,
    distance: 25
};
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
* [Chart accessibility](https://ej2.syncfusion.com/react/documentation/chart/accessibility)
* [Cross-hair and trackball](https://ej2.syncfusion.com/react/documentation/chart/cross-hair-and-track-ball)