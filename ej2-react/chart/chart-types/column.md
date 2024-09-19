---
layout: post
title: Column Chart in React Chart component | Syncfusion
description: Learn here all about Column Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Column Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Chart in React Chart component

## Column

To render a column series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Column` and inject `ColumnSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs22" %}

## Column space and width

The [`columnSpacing`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#columnwidth) properties are used to customize the space between columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs38/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs38/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs38/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs38/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs38" %}

## Grouped column

You can use the [`groupName`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#groupname) property to group the data points in the column type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/group-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/group-column-cs1" %}

## Cylindrical column chart

To render a cylindrical column chart, set the [`columnFacet`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs40/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs40/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs40/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs40/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs40" %}

## Series customization

The following properties can be used to customize the `column` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs25/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/line-cs25/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/line-cs25/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/line-cs25" %}

## See also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)