---
layout: post
title: Axis Labels in React Chart | Syncfusion
description: Learn how to format and customize axis labels in Syncfusion React Chart with smart positioning, multilevel labels, sorting, edge placement, and label templates.
control: Axis labels
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis Labels in React Chart

To get started quickly with Axis Labels in React Charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=NLrOSKAnxes" %}

## Smart axis labels

When axis labels overlap due to limited space or dense data points, the [`labelIntersectAction`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelintersectaction) property can be used to control how the labels are rendered. This helps improve readability by automatically adjusting label visibility or orientation. The supported values are `None`, `Hide`, `Rotate45`, `Rotate90`, `Wrap`, `MultipleRows`, and `Trim`. The default value is `None`.

When setting `labelIntersectAction` as `Hide`, overlapping labels are hidden to avoid visual clutter.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs7" %}

When setting `labelIntersectAction` as `Rotate45`, the labels are rotated by 45 degrees to reduce overlap.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs8" %}

When setting `labelIntersectAction` as `Rotate90`, the labels are rotated vertically to maximize space utilization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs9" %}

## Axis labels positioning

By default, axis labels are positioned `Outside` the axis line. Labels can also be placed `Inside` the axis line using the `labelPosition` property, which is useful when optimizing space within the chart area. The supported values are `Outside` (default) and `Inside`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs10" %}

## Multilevel labels

Multiple levels of labels can be displayed on an axis using the `multiLevelLabels` property. This feature is useful for grouping related categories and improving data interpretation. The following configuration options are available:

• Categories  
• Overflow  
• Alignment  
• Text style  
• Border  

>Note: To use the multilevel label feature, we need to inject `MultiLevelLabel` module into the `services`.

```jsx
import { MultiLevelLabel } from '@syncfusion/ej2-react-charts';

<ChartComponent services={[MultiLevelLabel]}>
  {/* ... */}
</ChartComponent>
```

### Categories

Using the `categories` property, the `start`, `end`, `text`, and `maximumTextWidth` values of multilevel labels can be configured to define the label range and content. `maximumTextWidth` is specified in pixels and defaults to `100`; if the label text exceeds this width, it will be truncated.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs11" %}

### Overflow

Using the `overflow` property, multilevel labels can be configured to either `Trim` (default) or `Wrap` when the text exceeds the available space.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs12" %}

### Alignment

The `alignment` property provides options to position multilevel labels at `Far`, `Center` (default), or `Near` relative to the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs13" %}

### Text customization

The `textStyle` property of multilevel labels provides options to customize the `size` (default `'12px'`), `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs14" %}

### Border customization

Using the `border` property, the `width`, `color`, and `type` of the multilevel label border can be customized. The supported border types are:

- `Rectangle` — a simple rectangular border (default).
- `Brace` — a bracket-style border with curled ends.
- `WithoutBorder` — no border is rendered.
- `WithoutTopBorder` — bottom and side borders only.
- `WithoutTopAndBottomBorder` — only side borders are rendered.
- `CurlyBrace` — a fully curled brace on both ends.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs15" %}

## Sorting

The chart’s data source can be sorted using the `sort` method of the chart. The arguments required for the `sort` method are the chart data and a `sortField` object that specifies whether sorting is performed on the `x` or `y` field, along with an `isDescending` flag (default `false`) to sort in `ascending` or `descending` order. The method signature is:

```jsx
chart.sort(data, 'x', false); // ascending by x
chart.sort(data, 'y', true);  // descending by y
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs16" %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially outside the chart area. To avoid this, use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#edgelabelplacement) property in the axis. This property moves the label inside the chart area or hides it for better appearance. The supported values are `None`, `Shift` (default), and `Hide`. By default, the property is set to **Shift**, ensuring that labels are repositioned inside the chart area to prevent overlap. Use `Hide` to completely hide edge labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs17" %}

## Labels customization

The [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelstyle) property of an axis provides options to customize the `color`, `fontFamily`, `size`, and `fontWeight` of axis labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs18" %}

## Customizing individual labels

Specific axis label text can be customized using the `axisLabelRender` event, which allows conditional formatting or dynamic text updates during label rendering. The event provides an `args` object with properties such as `text`, `value`, `labelStyle`, and `axis`, which can be modified before the label is rendered.

```jsx
const axisLabelRender = (args) => {
  if (args.value === 50) {
    args.text = 'Custom Label';
  }
};
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs19" %}

## Trim using maximum label width

Axis labels can be trimmed when they exceed the available space using the [`enableTrim`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#enabletrim) property. The width of the labels can also be customized using the [`maximumLabelWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#maximumlabelwidth) property. The default maximum label width value is `34` (in pixels). The `maximumLabelWidth` value must be greater than `0`; setting it to `0` or a negative value will be ignored.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs20" %}

## Line break support

The line break feature is used to display long axis label text across multiple lines. In the following example, the `x` value in the data source contains long text, which is split into two lines using the `<br>` tag. The `<br>` tag must be embedded directly in the data string; HTML special characters within label text should be properly escaped to prevent rendering issues.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs21" %}

## Axis label template

The axis label template allows axis labels to be customized using HTML content. This enables conditional styling and the inclusion of dynamic elements such as icons, images, or additional contextual data. This customization is enabled by setting the template content in the [`labelTemplate`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#labeltemplate) property of the `AxisModel`. The template string supports placeholders such as `${value}` to reference axis values.

```jsx
const labelTemplate = '<div style="background:#e0f7fa;padding:2px 6px;border-radius:3px;">${value}</div>';
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/axisLabeltemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/axisLabeltemplate/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/axisLabeltemplate/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/axisLabeltemplate/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/axisLabeltemplate" %}