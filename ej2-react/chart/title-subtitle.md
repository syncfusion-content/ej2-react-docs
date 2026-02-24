---
layout: post
title: Title and subtitle in React Chart component | Syncfusion
description: Learn here all about Title and subtitle in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Title and subtitle
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in React Chart Component

Chart titles and subtitles help provide context for the visualized data. The title typically indicates the main subject or metric represented in the chart, while the subtitle adds supporting details such as data sources, time ranges, or explanatory notes. Both elements can be customized in terms of position, alignment, and style to align with application design requirements.

## Chart title

Add a chart title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#title) property. The title appears at the top of the chart by default and is used to describe the purpose or subject of the visualization.

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

### Title position

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

To manually position the title anywhere within the chart, use the [`x`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/chart/titleSettingsModel#y) properties.

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

### Title alignment

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

### Title wrap

Customize the title’s appearance using the `textStyle` property. Options include `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow` to control how the title is rendered within the chart area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs7" %}

## Chart subtitle

Add a subtitle to the chart using the [`subTitle`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#subtitle) property. Subtitles help provide additional context such as descriptions, notes, or supporting information related to the chart data.

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