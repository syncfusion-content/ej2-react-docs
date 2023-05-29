---
layout: post
title: Tool tip in React Gantt component | Syncfusion
description: Learn here all about Tool tip in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in React Gantt component

The Gantt component has a support to display a tooltip for various UI elements like taskbar, timeline cells, and grid cells

## Enable tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip for the following UI elements using the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Event marker

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs1" %}

> The default value of the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#showtooltip) property is `true`.

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is `true`. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs2" %}

## Cell tooltip

You can enable or disable the Grid cell tooltip using the [`columns.clipMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#clipmode) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs3" %}

### Clip mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#clipmode) property.

The following are three types of `clipMode`:

* `Clip`: Truncates the cell content when it overflows its area.
* `Ellipsis`: Displays ellipsis when content of the cell overflows its area.
* `EllipsisWithTooltip`: Displays ellipsis when content of the cell overflows its area; it displays the tooltip content when hover over ellipsis.

> NOTE
> By default, all the column's [`clipMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#clipmode) property is defined as `EllipsisWithTooltip`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt component can be customized using the [`tooltipSettings.taskbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#taskbar) property. You can map the template script element’s ID value or template string directly to this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs4" %}

### Connector line tooltip

The default connector line tooltip in the Gantt component can be customized using the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#connectorline) property. You can map the value to this property as template script element ID or template string format. The following code example shows how to use the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#connectorline) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs5" %}

### Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs6" %}

### Baseline tooltip

A baseline tooltip can be customized using the [`tooltipSettings.baseline`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs7" %}