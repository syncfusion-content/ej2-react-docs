---
layout: post
title: Chart series in React Chart component | Syncfusion
description: Learn here all about Chart series in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart series 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart series in React Chart component

## Multiple Series

You can add multiple series to the chart by using [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/) property. The series are rendered in the order as it is added to the series array.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/category-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/category-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs12" %}

## Combination Series

Combination of different types like Line, column etc, can be rendered in a chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/combination-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/combination-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/combination-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/combination-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/combination-cs1" %}

>Note: Bar series cannot be combined with any other series as the axis orientation is different from other series.