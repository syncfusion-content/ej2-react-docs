---
layout: post
title: Annotation in React Accumulation chart component | Syncfusion
description: Learn here all about Annotation in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in React Accumulation chart component

The annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

By using the <code>content</code> option of annotation property, you can specify the Id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/accumulation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/accumulation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/accumulation-cs1" %}

*Note: To use annotation feature in accumulation chart, we need to inject `AccumulationAnnotation` module into the `services`

## Region

The annotation can be placed with respect to either `Series` or `Chart`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/accumulation-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/accumulation-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/accumulation-cs2" %}

## Co-ordinate Units

Specifies the coordinate units of an annotation either in `Pixel` or `Point`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/accumulation-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/accumulation-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/accumulation-cs3" %}

## Alignment

The annotations can be moved vertically and horizontally from its default position by using `verticalAlignment` or `horizontalAlignment` properties. The verticalAlignment property takes value as `Top`, `Bottom` or `Middle` and the horizontalAlignment property takes value as `Near`, `Far` or `Center`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/accumulation-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/accumulation-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/accumulation-cs4" %}
