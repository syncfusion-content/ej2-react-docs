---
layout: post
title: Stacked Step Area Chart in React Chart component | Syncfusion
description: Learn here all about Stacked Step Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Step Area Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked step area Chart in React Chart component

## Stacked step area

To render the Stacked step area series, use the series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#type) as a `StackedStepArea` and inject the `StackedStepAreaSeries` module using the `Chart.Inject(StackedStepAreaSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/stackedsteparea-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/stackedsteparea-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/stackedsteparea-cs" %}

## Series customization

The following properties can be used to customize the `stacked step area` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [step](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#step) – Specifies the position of the step for the series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/stackedsteparea-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/stackedsteparea-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/stackedsteparea-cs1" %}

## See also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
