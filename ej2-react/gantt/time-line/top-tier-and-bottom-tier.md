---
layout: post
title: Top tier and bottom tier in React Gantt component | Syncfusion
description: Learn here all about Top tier and bottom tier in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Top tier and bottom tier 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Top tier and bottom tier in React Gantt component

Gantt component contains two tier layout in timeline, we can customize the top tier and bottom tier using [`topTier`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#toptier) and [`bottomTier`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#bottomtier) properties. Timeline tier's unit can be defined by using [`unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#unit) property and [`format`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#format) property was used to define date format of timeline cell and [`count`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#count) property was used to define how many unit will be combined as single cell and [`formatter`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#formatter) property was used to define custom method to format the date value of timeline cell.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/timeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/timeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs1" %}

## Combining timeline cells

In Gantt, timeline cells in top tier and bottom tier can be combined with number of timeline units, this can be acheived by using [`topTier.count`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#count) and [`bottomTier.count`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#count) properties. Please refer the below sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/combinetimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/combinetimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/combinetimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/combinetimeline-cs1" %}

## Format value of timeline cell

In the Gantt component, you can format the value of top and bottom timeline cells using the standard date format string or the custom formatter method. This can be done using the [`topTier.format`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#format), [`topTier.formatter`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#formatter), [`bottomTier.format`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#format) and [`bottomTier.formatter`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#formatter) properties. The following example shows how to use the formatter method for timeline cells.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/formattimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/formattimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/formattimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/formattimeline-cs1" %}

## Timeline cell width

In the Gantt component, you can define the width value of timeline cell using the [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#timelineunitsize) property. This value will be set to the bottom timeline cell, and the width value of top timeline cell will be calculated automatically based on bottom tier cell width using the [`topTier.unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#unit) and [`timelineSettings.timelineUnitSize`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#timelineunitsize) properties. Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/timelineWidth-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/timelineWidth-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timelineWidth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timelineWidth-cs1" %}