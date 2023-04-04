---
layout: post
title: Stacked Bar Chart in React Chart component | Syncfusion
description: Learn here all about Stacked Bar Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Bar Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Stacked Bar Charts in React Chart component

## Stacked bar

To render a stacked bar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingBar` and inject `StackingBarSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs28" %}

## Stacking Group

You can use the [`stackingGroup`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#stackinggroup) property to group the stacked bar and 100% stacked bar. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs31" %}

## Series customization

The following properties can be used to customize the `stacked bar` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs30" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
