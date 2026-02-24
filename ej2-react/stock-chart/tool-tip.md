---
layout: post
title: Tool tip in React Stock chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in React Stock chart component

<!-- markdownlint-disable MD036 -->

StockChart will display details about the points through tooltip, when the mouse is moved over the point.

## Default tooltip

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) property to true and by injecting [`Tooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel) module using `<Inject services={[Tooltip]}>`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/tool-tip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/tool-tip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/tool-tip-cs1" %}

## Format the tooltip

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/tool-tip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/tool-tip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/tool-tip-cs2" %}

## Position the tooltip

By default, the tooltip is positioned at the left side of the stock chart. You can move the tooltip along with the mouse by setting **Nearest** to the [`position`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockTooltipSettingsModel#position) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/tool-tip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/tool-tip-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/tool-tip-cs4" %}

## Customize the appearance of the tooltip

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/tool-tip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/tool-tip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/tool-tip-cs3" %}