---
layout: post
title: Timescale Customization in React Scheduler | Syncfusion
description: Learn how to customize the time slots in the Syncfusion React Scheduler to set the duration, interval, and slot count per row.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timescale Customization in React Scheduler

Time slots are the cells displayed in the Day, Week, and Work Week views of the Scheduler. In vertical views, they appear on the leftmost side, and in timeline views, they appear at the top. The [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property lets you control the duration of these slots. It includes the following sub-options:

* [`enable`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#enable) - When set to `true`, the Scheduler displays appointments against the exact time duration. When set to `false`, appointments for a day are displayed one below another, and grid lines are hidden. The default value is `true`.
* [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#interval) - Defines the time interval for the time axis, such as 1 hour or 30 minutes. The value is in minutes and defaults to 60.
* [`slotCount`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#slotcount) - Specifies how many slots are split within the given interval. It defaults to 2, so an hour is shown using two slots of 30 minutes each.

> **Note:** The maximum number of slots that can be rendered in a single day is 1000. This limit is based on the maximum `colspan` value supported by the HTML table element. This restriction applies only to the `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views.

> **Tip:** Use a smaller interval and higher slot count when you need finer time granularity.

## Setting different time slot duration

The [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#interval) and [`slotCount`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#slotcount) properties can be used together on the Scheduler to set different time slot duration which is depicted in the following code example. Here, six time slots together represents an hour.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs27/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs27/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs27" %}

## Customizing time cells using template

The [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale) property provides template options for custom rendering:

* [`majorSlotTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#majorslottemplate) - Applies a template to major time slots. The template can be a string or an HTMLElement, and the rendered content is displayed inside the time cells. Time details are available within the template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#minorslottemplate) - Applies a template to minor time slots. The template can be a string or an HTMLElement, and the rendered content is displayed inside the time cells. Time details are available within the template.

> **Tip:** Use templates when you need to display custom labels, icons, or formatting in the time grid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/timescale-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/timescale-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs2" %}

## Hide the timescale

You can enable or disable the grid lines that indicate the exact time duration in the Scheduler by setting the `enable` option within the [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property to `true` or `false`. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/timescale-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/timescale-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs3" %}

## Highlighting current date and time

By default, the Scheduler highlights the current date header in all views and shows the system time indicator in Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. To hide the current time indicator, set the [`showTimeIndicator`](https://ej2.syncfusion.com/react/documentation/api/schedule#showtimeindicator) property to `false`. The default value is `true`.

> **Note:** The time indicator is shown only in views that display a time grid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/timescale-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/timescale-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs4" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
