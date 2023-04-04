---
layout: post
title: Spline Chart in React Chart component | Syncfusion
description: Learn here all about Spline Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Spline Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Spline in React Chart component

## Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `Spline` and inject `SplineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs10" %}

## Series customization

The following properties can be used to customize the `spline` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/spline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/spline-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/spline-cs1" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
