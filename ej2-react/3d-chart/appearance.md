---
layout: post
title: Appearance in React 3D Chart component | Syncfusion
description: Learn here all about appearance in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React 3D Chart control

## Custom color palette

The default color of series or points can be customized by providing a custom color palette of your choice by using the [`palettes`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#palettes) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs1" %}

## Data point customization

The color of an individual data point can be customized using the below options.

### Point color mapping

The color for the points can be bound from the [`dataSource`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#datasource) for the series by utilizing the [`pointColorMapping`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#pointcolormapping) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs2" %}

## Point level customization

The data label and fill color of each data point can be customized using the [`pointRender`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/i3DPointRenderEventArgs) and [`textRender`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/i3DTextRenderEventArgs) events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs3" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

<!-- markdownlint-disable MD036 -->

**Customize the chart background**

The background color and border of the 3D chart can be customized using the [`background`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#background) and [`border`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#border) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs4" %}

**Chart margin**

The 3D chart's margin can be set from its container using the [`margin`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#margin) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs5" %}

## Animation

To customize the animation for a particular series, the [`animation`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/series3DModel#animation) property can be used. It can be enabled or disabled by using the [`enable`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/animationModel#enable) property. The [`duration`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/animationModel#duration) property specifies the duration of an animation and the [`delay`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/animationModel#delay) property allows us to start the animation at desire time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs6" %}

## Chart rotation

The 3D chart can be rotated by using the [`enableRotation`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#enablerotation) property in the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs7" %}

## Title

The 3D chart can be given a title by using [`title`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs8" %}

### Title position

By using the [`position`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#position) property in [`titleStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#titlestyle), the [`title`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#title) can be positioned at left, right, top or bottom of the 3D chart. The title is positioned at the top of the 3D chart, by default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs9" %}

The custom option is used to position the title anywhere in the 3D chart using [`x`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#x) and [`y`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#y) coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs10" %}

### Title alignment

The title can be aligned to the near, far, or center of the 3D chart by using the [`textAlignment`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#textalignment) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs11" %}

### Title customization

The [`titleStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/chart3DModel#titlestyle) property of the 3D chart title provides options to customize the title by using the following properties.

* [`size`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#size) - Specifies the size of the title.
* [`color`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#color) - Specifies the color for the title. 
* [`fontFamily`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#fontfamily) - Specifies the font family for the title.
* [`fontWeight`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#fontweight) - Specifies the font weight of the title.
* [`fontStyle`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#fontstyle) - Specifies the font style for the title.
* [`opacity`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#opacity) - Specifies the opacity for the color of the title.
* [`textAlignment`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#textalignment) - Specifies the alignment of the title.
* [`textOverflow`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/titleSettingsModel#textoverflow) - Specifies the overflow of the title.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/appearance/appearance-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/appearance/appearance-cs12" %}