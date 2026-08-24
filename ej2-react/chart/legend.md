---
layout: post
title: Legend in React Chart | Syncfusion
description: Learn how to add and customize the legend in Syncfusion React Chart to identify series, control position, and toggle series visibility.
control: Legend
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Legend in React Chart

The legend provides information about the series rendered in the chart and helps users identify each series by its color, shape, or style.

Watch this video to get started quickly with legends in React Charts:

{% youtube "https://www.youtube.com/watch?v=7VYeN4W_wMc" %}

## Position and alignment

Use the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#position) property to place the legend at the left, right, top, or bottom of the chart. By default, it is placed at the bottom.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs13" %}

Custom positioning allows you to place the legend anywhere in the chart using `x` and `y` coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs14" %}

## Legend reverse

Use the [`reverse`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#reverse) property to reverse the order of legend items. By default, the legend item for the first series is placed first.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-reverse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-reverse-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-reverse-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-reverse-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-reverse-cs1" %}

<!-- markdownlint-disable MD036 -->

### Legend alignment

<!-- markdownlint-disable MD036 -->

Align the legend to `center`, `far`, or `near` using the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs15" %}

## Customization

To change the legend icon shape, use the [`legendShape`](https://ej2.syncfusion.com/react/documentation/api/chart/series#legendshape) property in the [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/series). By default, the legend icon shape is the `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs16" %}

### Legend size

By default, the legend occupies approximately 20%–25% of the chart height when positioned at the top or bottom, and 20%–25% of the chart width when positioned at the left or right. Customize the default size using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#height) properties of `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs17" %}

### Legend item size

Customize the size of legend items using the [`shapeHeight`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#shapeheight) and [`shapeWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#shapewidth) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs18" %}

### Paging for legend

Paging is enabled automatically when legend items exceed the legend bounds. Navigate between pages using the provided navigation buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs1" %}

### Legend text wrap

When legend text exceeds the container, enable wrapping using the [`textWrap`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#textwrap) property. Wrapping can also be controlled using the [`maximumLabelWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#maximumlabelwidth) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs19" %}

### Legend text color
 
Change the legend text color by setting the [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#color) property within the [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#textstyle) of `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs5" %}

### Set the label color based on series color

Set the legend label color based on the series color by using the chart’s [`loaded`](https://ej2.syncfusion.com/react/documentation/api/chart#loaded) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs20" %}

## Series selection on legend

By default, clicking a legend item toggles the visibility of its series. To select a series through a legend click, disable [`toggleVisibility`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#togglevisibility).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs21" %}

## Enable animation

Enable or disable animation during legend interactions by setting the [`enableAnimation`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#enableanimation) property of `legendSettings` to `true` or `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs22" %}

## Hiding a legend item

By default, the series name is displayed as a legend item. To hide a legend item for a particular series, set the series name to an empty string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs23/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs23/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs23/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs23" %}

## Legend title

Set a title for the legend using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#title) property in `legendSettings`. The title can be customized using [`fontStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#fontstyle), [`size`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#size), [`fontWeight`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#fontweight), [`color`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#color), [`textAlignment`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#textalignment), [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#fontfamily), [`opacity`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#opacity), and [`textOverflow`](https://ej2.syncfusion.com/react/documentation/api/chart/fontModel#textoverflow). Use [`titlePosition`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#titleposition) to place the title at `Top`, `Left`, or `Right`. The [`maximumTitleWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#maximumtitlewidth) property sets the width of the legend title and defaults to `100px`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs2" %}

## Arrow page navigation

When legend paging is enabled, page numbers are shown by default. To display only left and right arrows for navigation, set [`enablePages`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#enablepages) to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs3" %}

## Legend item padding

Use the [`itemPadding`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#itempadding) property to adjust the spacing between legend items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs4" %}

## Legend layout

The [`layout`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#layout) property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart#legendsettings) displays the legend horizontally or vertically. By default, [`layout`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#layout) is set to **Auto**. The [`maximumColumns`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#maximumcolumns) property defines the maximum number of columns that can be displayed within the available space when using auto layout. Enabling the [`fixedWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel#fixedwidth) property ensures that all legend items have equal widths, determined by the maximum item width.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs6" %}

## Legend template

Legend templates allow you to replace default legend icons and text with custom HTML for each series. This enables branded styles, richer content (icons, multi-line text, badges), improved readability, and localization.

You can customize the legend items by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel) property of [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettingsModel). Legend interactions (click to toggle series) remain unless [`toggleVisibility`](https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings#togglevisibility) is set to false. Templates work with all legend positions, alignments, and paging.

Inside the template, the legend item data is available through the template context, where you can access the series `name`, `shape`, and the underlying `point` data. Use these fields to render branded icons, multi-line labels, or badges for each series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/legend-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/legend-cs7" %}

> Note: To use legend features, inject the `Legend` module into the chart's `services` using `<Inject services={[Legend]} />` alongside the `ChartComponent`. For example:
>
> ```tsx
> import { ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
> ```
>
> ```tsx
> <ChartComponent>
>   <Inject services={[Legend]} />
>   <SeriesCollectionDirective>
>     <SeriesDirective ... />
>   </SeriesCollectionDirective>
> </ChartComponent>
> ```

## See Also

* [Add Custom Legend Using SVG](https://support.syncfusion.com/kb/article/21530/how-to-add-custom-legend-using-svg-in-react-chart)