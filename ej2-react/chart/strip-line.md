---
layout: post
title: Strip line in React Chart | Syncfusion
description: Learn how to add horizontal, vertical, or segmented strip lines in Syncfusion React Chart to mark thresholds, ranges, or reference values.
control: Strip line
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Strip line in React Chart

The [React Charts](https://www.syncfusion.com/react-components/react-charts) component supports horizontal and vertical strip lines and provides visual guides to highlight specific ranges in the chart area. Strip lines can be added to both axes and fully customized based on visual and functional requirements. To use strip line features, inject the `StripLine` module using the `Inject` directive in the React component.

```jsx
import { ChartComponent, Inject, StripLine } from '@syncfusion/ej2-react-charts';
```

## Horizontal strip lines

Horizontal strip lines are created by adding the `stripline` configuration to the vertical axis and setting the `visible` property to `true`. They highlight horizontal ranges in the chart, and multiple strip lines can be added to the same axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs23/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs23/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs23/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs23" %}

## Vertical strip lines

Vertical strip lines are created by adding the `stripline` configuration to the horizontal axis and enabling the `visible` property. They highlight vertical regions in the chart and support multiple entries for an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs24/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs24" %}

## Customize the strip line

Strip lines can be customized to highlight specific regions more effectively:

- Use `color` to set the fill color of the strip line.
- Use `opacity` to adjust the strip line transparency.
- Use `text` to display a label on the strip line.
- Use `start` to set the beginning value of the strip line.
- Use `end` to define the ending value.
- Use `startFromOrigin` to begin the strip line from the axis origin.
- Use `size` to specify the strip line height or width (based on orientation).
- Use `border` to configure border `color`, `width`, and `dashArray`.
- Use `zIndex` to control whether the strip line appears behind or above the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs25/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs25/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs25/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs25" %}

## Customize the strip line text

Strip line text labels can be customized for readability and visual presentation:

- Use `textStyle` to set the text appearance.
- Use `rotation` to rotate the strip line text.
- Use `horizontalAlignment` and `verticalAlignment` to adjust label placement.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs26/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs26/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs26/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs26" %}

## Dash array

Dashed strip lines can be rendered using the `dashArray` property. Each number pair defines the dash length and gap length (for example, `"5,5"`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs27/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs27" %}

## Recurrence strip line

Recurring strip lines help mark repeating events across the chart axis. The following properties configure recurrence:

- `isRepeat` – Enables or disables repeating strip lines.
- `repeatEvery` – Specifies the interval at which the strip line repeats.
- `repeatUntil` – Defines the end value up to which the strip lines should repeat.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs28/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs28/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs28/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs28" %}

## Size type

The `sizeType` property determines how the strip line size is interpreted. Supported units include:

- `Auto`
- `Pixel`
- `Years`
- `Months`
- `Days`
- `Hours`
- `Minutes`
- `Seconds`

Use `Pixel` for numeric axes and the date-based units (`Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds`) for date-time axes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs29/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs29/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs29/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs29" %}

## Segment strip line

Segment strip lines highlight a specific region corresponding to another axis. This is useful for marking regions that depend on values across two dimensions.

Key properties:

- `isSegmented` – Enables segmented strip lines.
- `segmentStart` – Defines the starting point of the segment region.
- `segmentEnd` – Defines the ending point of the segment region.
- `segmentAxisName` – Specifies the associated axis for segmentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs30/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs30" %}

## See also

- [Axis customization](./axis-customization)
- [Chart annotations](./chart-annotations)