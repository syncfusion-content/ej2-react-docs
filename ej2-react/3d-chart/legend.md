---
layout: post
title: Legend in React 3D Chart component | Syncfusion
description: Learn here all about legend in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Legend in React 3D Chart control

<!-- markdownlint-disable MD036 -->

Legend provides information about the series rendered in the 3D chart.

## Position and alignment

By using the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#position) property, the legend can be positioned at left, right, top or bottom of the 3D chart. The legend is positioned at the bottom of the 3D chart, by default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs1" %}

The custom position helps you to position the legend anywhere in the 3D chart using x and y coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs2" %}

### Legend reverse

The order of the legend items can be reversed by using the [`reverse`](https://ej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#reverse) property. By default, legend for the first series in the collection will be placed first.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs3" %}

### Legend alignment

The legend can be aligned at near, far or center to the 3D chart using the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#alignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs4" %}

## Legend customization

To change the legend icon shape, [`legendShape`](https://ej2.syncfusion.com/react/documentation/api/chart3d/series3DModel/#legendshape) property in the [`series`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3dmodel/) can be used. By default, the legend icon shape is `seriesType`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs5" %}

### Legend size

By default, legend takes 20% - 25% of the 3D chart's height horizontally, when it is placed on top or bottom position and 20% - 25% of the 3D chart's width vertically, when it is placed on left or right position. You can change this default legend size by using the [`height`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#height) and [`width`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#width) properties of the `legendSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs6" %}

### Legend item size

The size of the legend items can be customised by using the [`shapeHeight`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#shapeheight) and [`shapeWidth`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#shapewidth) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs7" %}

### Paging for legend

Paging will be enabled by default, when the legend items exceeds the legend bounds. Each legend items can be viewed by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs8" %}

### Legend text wrap

When the legend text exceeds the container, the text can be wrapped by using the [`textWrap`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#textwrap) property. End user can also wrap the legend text based on the [`maximumLabelWidth`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#maximumlabelwidth) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs9" %}

## Series selection through legend

By default, you can collapse the series visibility by clicking the legend. On the other hand, turn off the [`toggleVisibility`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#togglevisibility) property if you must use a legend click to choose a series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs10" %}

## Collapsing legend item

By default, series name will be displayed as legend. To skip the legend for a particular series, you can give empty string to the series name.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs11" %}

## Legend title

You can set title for legend using [`title`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#title) property in [`legendSettings`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel). The [`size`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#size), [`color`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#color), [`opacity`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#opacity), [`fontStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#fontstyle), [`fontWeight`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#fontweight), [`fontFamily`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#fontfamily), [`textAlignment`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#textalignment), and [`textOverflow`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/fontModel/#textoverflow) of legend title can be customized by using the [`titleStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#titlestyle) property in [`legendSettings`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel). The [`titlePosition`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#titleposition) is used to set the legend position in `Top`, `Left` and `Right` position. The [`maximumTitleWidth`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#maximumtitlewidth) is used to set the width of the legend title. By default, it will be `100px`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs12" %}

## Arrow page navigation

The page number will always be visible while using legend paging. It is now possible to disable the page number and enable page navigation with the left and right arrows. The [`enablePages`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#enablepages) property needs to be set to **false** in order to render the arrow page navigation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs13" %}

## Legend item padding

The [`itemPadding`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/legendSettingsModel/#itempadding) property can be used to adjust the space between the legend items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/legend/legend-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/legend/legend-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/legend/legend-cs14" %}

>Note: To use the legend feature, we need to inject the `Legend3D` module into the services.