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

Multiple series can be added to a chart by using the [`series`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel) property. Each series represents a distinct set of data, and all configured series are rendered in the same chart area for easy comparison.
The series are rendered in the same order in which they are defined in the `series` collection. This ordering determines the visual stacking of series when multiple series overlap.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs12" %}

## Combination Series

A combination chart allows different series types, such as Line and Column, to be rendered together in a single chart. This is useful for comparing multiple datasets that have different visual representation requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/combination-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/combination-cs1" %}

> Note: Bar series cannot be combined with other series types because their axis orientation differs from other series.