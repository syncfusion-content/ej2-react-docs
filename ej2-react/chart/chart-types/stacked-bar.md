---
layout: post
title: 100% Stacked Bar Chart in React Chart component | Syncfusion
description: Learn here all about 100% Stacked Bar Area Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked Bar Chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# 100% Stacked Bar Charts in React Chart component

## 100% Stacked Bar

To render a 100% stacked bar series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `StackingBar100` and inject `StackingBarSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/line-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/line-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/line-cs29" %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

* [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#fill-string).
* [dashArray](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [border](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/react/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/100-stackedbar-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/100-stackedbar-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/100-stackedbar-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
