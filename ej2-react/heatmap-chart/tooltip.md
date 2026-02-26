---
layout: post
title: Tooltip in React Heatmap chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Heatmap chart component

Tooltip is used to provide the details of the heatmap cell, and this can be displayed, while hovering the cursor over the cell or performing tap action in touch devices.

## Default tooltip

You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/react/documentation/api/heatmap#showtooltip)  property to **true** and injecting the `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/tooltip-cs1" %}

## Tooltip template

In heatmap, you can customize the tooltip using the [tooltipRender](https://ej2.syncfusion.com/react/documentation/api/heatmap#tooltiprender) client side event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/tooltip-cs2" %}

## Customize the appearance of Tooltip

The  [fill](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#fill) and [border](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#border) properties are used to customize the background color and border of the Tooltip respectively. The [textStyle](https://ej2.syncfusion.com/react/documentation/api/heatmap/tooltipSettings#textStyle) property in the Tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/tooltip-cs3" %}

>Note: To use tooltip feature, we need to inject `Tooltip` module into the `services`.
