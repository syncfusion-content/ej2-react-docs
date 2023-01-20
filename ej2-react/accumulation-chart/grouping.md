---
layout: post
title: Grouping in React Accumulation chart component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Accumulation chart component

You can club/group few points of the series based on [`groupTo`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationSeriesModel/#groupto) property. For example, if the club value is 11, then the points with value less than 11 is grouped together and will be showed as a single point with label `others`. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/clubpoint-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/clubpoint-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/clubpoint-cs1" %}

## Broken slice

You can visualize all points available in club/group points by clicking on the grouped point. For example, if 5 points are grouped together it will be showed as a single slice with label `others`. If we click on `others` slice it will explode and broke into 5 seperate slices.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/clubpoint-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/clubpoint-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/clubpoint-cs2" %}

## GroupMode

Slice can also be grouped based on number of points by specifying the `groupMode` to Point. For example, if the group to value is 11, accumulation chart will show 1st 11 points and will group remaining entries in the collection as a single point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/clubpoint-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/clubpoint-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/clubpoint-cs3" %}

## Customization

You can customize the grouped point and its data label using `pointRender` and `textRender` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/clubpoint-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/clubpoint-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/clubpoint-cs4" %}