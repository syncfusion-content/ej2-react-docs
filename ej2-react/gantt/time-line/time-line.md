---
layout: post
title: Time line in React Gantt component | Syncfusion
description: Learn here all about Time line in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Time line 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Time line in React Gantt component

In the Gantt component, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour
* Day
* Week
* Month
* Year

Timescale mode in Gantt can be defined by using [`timelineViewMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineViewMode/) property and also we can define timescale mode of top tier and bottom tier by using [`topTier.unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettingsModel/#unit) and [`bottomTier.unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettingsModel/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/weektimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/weektimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/weektimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/weektimeline-cs1" %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/monthtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/monthtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/monthtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/monthtimeline-cs1" %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/yeartimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/yeartimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/yeartimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/yeartimeline-cs1" %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/daytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/daytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/daytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/daytimeline-cs1" %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/hourtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/hourtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/hourtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/hourtimeline-cs1" %}

## Week start day customization

In the Gantt component, you can customize the week start day using the [`weekStartDay`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#weekstartday) is set to 0, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/weekstartdaytimeline-cs1" %}

## Customize automatic timescale update action

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/updatetimescale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/updatetimescale-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/updatetimescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/updatetimescale-cs1" %}