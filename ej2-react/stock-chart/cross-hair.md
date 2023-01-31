---
layout: post
title: Cross hair in React Stock chart component | Syncfusion
description: Learn here all about Cross hair in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Cross hair 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair in React Stock chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/cross-hair-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/cross-hair-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/cross-hair-cs1" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltipModel/#enable)property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/cross-hair-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/cross-hair-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/cross-hair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip/#fill) and [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairTooltip/#textstyle)property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/react/documentation/api/chart/crosshairSettings/#line) property in the crosshair.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/cross-hair-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/cross-hair-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/cross-hair-cs3" %}

>Note: To use crosshair feature, we need to inject `Crosshair` module `<Inject services={[Crosshair]}>` method.