---
layout: post
title: Stacked Line Chart in React Chart component | Syncfusion
description: Learn here all about Stacked Line Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Line Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Line in React Chart component

## Stacked Line

To render a stacked line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type-string) as `StackingLine` and inject `StackingLineSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs8" %}

## Series customization

The following properties can be used to customize the `stacked line` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/stackedline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/stackedline-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/stackedline-cs1" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
