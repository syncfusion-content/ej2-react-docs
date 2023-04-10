---
layout: post
title: Hilo Chart in React Chart component | Syncfusion
description: Learn here all about Hilo Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Hilo Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hilo Charts in React Chart component

## Hilo

To render a Hilo series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Hilo` and inject `HiloSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hilo-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hilo-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hilo-cs1" %}

## Series customization

The following properties can be used to customize the `hilo` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string).

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)