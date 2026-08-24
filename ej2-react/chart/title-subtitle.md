---
layout: post
title: Title and subtitle in React Chart | Syncfusion
description: Learn how to add a title, subtitle, and custom text to Syncfusion React Chart with options for alignment, font, and background styling.
control: Title and subtitle
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Title and subtitle in React Chart

Chart titles and subtitles provide context for the visualized data. The title indicates the main subject or metric represented in the chart, while the subtitle adds supporting details such as data sources, time ranges, or explanatory notes. Customize both elements in terms of position, alignment, and style to match your application's design.

> Note: The examples in this section assume that the `@syncfusion/ej2-react-charts` package is installed and that `ChartComponent`, `SeriesCollectionDirective`, `SeriesDirective`, and `Inject` are imported. For setup details, see [Getting started with React Chart](https://ej2.syncfusion.com/react/documentation/chart/getting-started).

## Chart Title

Add a chart title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#title) property. By default, the title is rendered at the top of the chart and represents the value assigned to the `title` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/chart-title-cs5" %}

### Title Position

Use the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#position) property within [`titleStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#titlestyle) to place the title at the left, right, top, or bottom of the chart. The default position is at the top.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/chart-title-cs7" %}

To position the title anywhere within the chart, use the [`x`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#y) properties. These values are pixel offsets from the chart area and override the `position` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/chart-title-cs8" %}

### Title Alignment

Align the chart title to the near, center, or far side of the chart using the [`textAlignment`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textalignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/chart-title-cs9" %}

### Title Text Style

Customize the title's appearance using the [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textstyle) property. Options include `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, and `opacity` to control the title's font and color.

```jsx
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend } from '@syncfusion/ej2-react-charts';

const titleStyle = {
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'regular',
    color: '#E27F2D',
    size: '24px'
};

<ChartComponent id='charts' title='Sales by Region' titleStyle={titleStyle}>
    <Inject services={[ColumnSeries, Category, Legend]} />
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='region' yName='sales' type='Column' />
    </SeriesCollectionDirective>
</ChartComponent>
```

### Long Title Handling

For long titles, control wrapping and overflow with the following [`titleStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#titlestyle) properties:

- [`maximumTitleWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#maximumtitlewidth) – Sets the maximum width (in pixels) for the title before wrapping or truncation applies. The default is `null` (no limit).
- [`textOverflow`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textoverflow) – Specifies how overflowing text is rendered. Supported values are `Wrap` (default) and `Trim`.
- [`textWrap`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textwrap) – Controls line-break behavior when `textOverflow` is `Wrap`. Supported values are `Normal`, `BreakWord`, and `AnyWhere`.

```js
const titleStyle = {
    textOverflow: 'Trim',
    maximumTitleWidth: 250
};
```

## Chart Subtitle

Add a subtitle to the chart using the [`subTitle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#subtitle) property. Subtitles provide additional context such as descriptions, notes, or supporting information related to the chart data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/chart-title-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/chart-title-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/chart-title-cs6" %}

Customize the subtitle's appearance, position, and alignment using [`subTitleStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#subtitlestyle). The subtitle supports the same `textStyle`, `position`, `textAlignment`, `x`, `y`, `maximumTitleWidth`, `textOverflow`, and `textWrap` properties as the title.

### Subtitle Position

Use the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#position) property within [`subTitleStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#subtitlestyle) to place the subtitle at the top, bottom, left, or right of the chart. The default position is at the top, directly below the title.

```jsx
const subTitleStyle = { position: 'Bottom' };
```

### Subtitle Alignment

Align the subtitle to the near, center, or far side of the chart using the [`textAlignment`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textalignment) property within `subTitleStyle`.

```jsx
const subTitleStyle = { position: 'Top', textAlignment: 'Center' };
```

### Subtitle Text Style

Customize the subtitle's appearance using the [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#textstyle) property of `subTitleStyle`. It accepts the same `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, and `opacity` options as the title.

```jsx
const subTitleStyle = {
    textStyle: {
        fontFamily: 'Arial',
        fontStyle: 'italic',
        fontWeight: 'regular',
        color: '#E27F2D',
        size: '14px'
    }
};
```

### Subtitle Template

For complete control over the subtitle markup, use the [`subTitleTemplate`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#subtitletemplate) property to supply a custom HTML string. The template can include inline styles or a reference to a CSS class defined in the application.

```jsx
<ChartComponent
    id='charts'
    title='Sales by Region'
    subTitle='FY 2025'
    subTitleTemplate='<div class="chart-subtitle">FY 2025 <span class="badge">Updated</span></div>'
>
</ChartComponent>
```

## See also

* [Chart dimensions](https://ej2.syncfusion.com/react/documentation/chart/chart-dimensions)
* [Chart appearance](https://ej2.syncfusion.com/react/documentation/chart/chart-appearance)
* [Legend](https://ej2.syncfusion.com/react/documentation/chart/legend)
* [Accessibility](https://ej2.syncfusion.com/react/documentation/chart/accessibility)
* [Getting started with React Chart](https://ej2.syncfusion.com/react/documentation/chart/getting-started)