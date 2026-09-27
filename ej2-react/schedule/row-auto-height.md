---
layout: post
title: Row Auto Height in React Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion React Scheduler timeline and month views to display all overlapping appointments.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Auto Height in React Scheduler

By default, the height of Scheduler rows in Timeline views is static. When multiple appointments overlap in the same time range, a `+n more` indicator is displayed. With row auto height enabled, the Scheduler adjusts the row height based on the number of appointments so that overlapping events are visible without using the `+n more` indicator.

To enable auto row height adjustments in Timeline views and the Month view, set the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) property to `true` (default is `false`).

> **Note:** This feature applies only to Timeline views and the calendar Month view.

The following sections show how the feature works in the supported views.

> **Tip:** Use row auto height when you want to reduce hidden appointments in dense schedules.

## Calendar month view

By default, the rows in the calendar Month view can hold only a limited number of appointments based on their height, and the remaining overlapping appointments are indicated with a `+n more` text. The following example shows how the Month view row adjusts automatically based on the number of appointments when the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs23/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs23" %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled in Timeline views, the row height adjusts automatically based on the number of overlapping events in the same time range, as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs24/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs24" %}

## Timeline views with multiple resources

The following example shows how the auto row height feature works in Timeline views with multiple resources.

> **Tip:** This is useful when each resource contains several overlapping appointments in the same time slot.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs25/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs25" %}

## Appointments occupying entire cell

When [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) is enabled, a small space may appear at the bottom of the cell after an appointment is rendered. To remove this extra space, set the [`ignoreWhitespace`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings#ignorewhitespace) property to `true` in [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings). The default value is `false`. The following example shows the whitespace below appointments removed.

> **Note:** The [`ignoreWhitespace`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings#ignorewhitespace) property applies only when [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/ignore-whitespace-cs1" %}

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings#ignorewhitespace) property applies only when the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler.

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
