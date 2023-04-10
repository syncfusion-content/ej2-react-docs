---
layout: post
title: Bubble in React Chart component | Syncfusion
description: Learn here all about Bubble Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Bubble Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bubble in React Chart component

## Scatter

To render a scatter series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Scatter` and inject `ScatterSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs32" %}

## Series customization

The following properties can be used to customize the `scatter` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [Fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [shape](https://ej2.syncfusion.com/react/documentation/api/chart/chartShape/) - Specifies the shape of the scatter series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/scatter-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/scatter-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/scatter-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)