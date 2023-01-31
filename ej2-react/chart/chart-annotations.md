---
layout: post
title: Chart annotations in React Chart component | Syncfusion
description: Learn here all about Chart annotations in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart annotations 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart annotations in React Chart component

Annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

You can add annotations to the chart by using the <code>annotations</code> option. By using the [`content`](https://ej2.syncfusion.com/react/documentation/api/chart/chartAnnotationSettingsModel/#content) option of annotation object, you can specify the id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs3" %}

>Note: To use annotation feature in chart, we need to inject `ChartAnnotation` module into the `services`.

## Region

Annotations can be placed either with respect to `Series` or `Chart`. by default, it will placed with respect to `Chart`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs4" %}

## Co-ordinate Units

Specified the coordinates units of the annotation either `Pixel` or `Point`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs5" %}

* [Show total stacking values in data label](./how-to/#show-the-total-value-for-stacking-series-in-data-label)
* [Create footer and watermark for chart](./how-to/#create-footer-and-watermark-for-chart)