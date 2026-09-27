---
layout: post
title: Working Days and Hours in React Scheduler | Syncfusion
description: Learn how to set working days, working hours, time range, and first day of the week in the Syncfusion React Scheduler.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Working Days and Hours in React Scheduler

The Scheduler supports calendar-specific customizations, including:

* Custom time range display
* Different working hours
* Different working days
* Different first day of the week
* Show/hide weekend days
* Show week numbers
* Display current time indicator

## Set working days

By default, the Scheduler considers Monday to Friday as working days (`[1, 2, 3, 4, 5]`, where 1 = Monday, 2 = Tuesday, and so on). Days not included in this collection are treated as non-working days. When weekends are hidden, non-working days are also hidden from the layout.

The WorkWeek and Timeline WorkWeek views display only the defined working days, while other views show all days but differentiate non-working days with inactive cell colors.

> **Note:** Working/business hours highlighting applies only to the specified working days.

The following example sets Monday, Wednesday, and Friday as working days.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs33/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs33" %}

## Hiding weekend days

Use the [`showWeekend`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweekend) property (default `true`) to show or hide weekend days. It does not apply to WorkWeek view because non-working days are already excluded. Days outside the `workDays` collection are considered weekends or non-working days and are hidden when `showWeekend` is `false`.

Here, the working days are defined as [1, 3, 4, 5] in the Scheduler, and the remaining days (0, 2, 6 — Sunday, Tuesday, and Saturday) are considered non-working days. They are hidden from all views when the [`showWeekend`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweekend) property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs34/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs34" %}

## Show week numbers

Display week numbers in the header bar by setting [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) to `true` (default `false`). In Month view, week numbers appear in the first column.

> **Note:** The [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) property is not applicable to Timeline views because the equivalent [headerRows](./header-rows#display-week-numbers-in-timeline-views) property handles this requirement with additional customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs35/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs35/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs35" %}

### Different options in showing week numbers

Week numbers are calculated based on the first day of the year by default. Customize the rule with the [`weekRule`](https://ej2.syncfusion.com/react/documentation/api/schedule#weekrule) property:

- `FirstDay` — First week starts on the first day of the year.
- `FirstFourDayWeek` — First week has four or more days before the designated first day of the week.
- `FirstFullWeek` — First week starts on the first occurrence of the designated first day of the week on or after January 1.

For details, refer to [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.calendarweekrule?view=net-5.0#remarks).

> **Note:** Enable the [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) property before configuring the [`weekRule`](https://ej2.syncfusion.com/react/documentation/api/schedule#weekrule) property. The `weekRule` property also depends on the value of the `firstDayOfWeek` property.

The following example shows week numbers with the `FirstFourDayWeek` rule.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs36/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs36" %}

## Set working hours

Working hours indicate the work-hour limit within the Scheduler and are visually highlighted on work cells. Set working hours by using the [`workHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#workhours) property, which is an object type with the following sub-options:

* [`highlight`](https://helpej2.syncfusion.com/react/documentation/api/schedule/workHoursModel#highlight) – enables/disables the highlighting of work hours.
* [`start`](https://helpej2.syncfusion.com/react/documentation/api/schedule/workHoursModel#start) - sets the start time of the working/business hour of a day.
* [`end`](https://helpej2.syncfusion.com/react/documentation/api/schedule/workHoursModel#end) - sets the end time limit of the working/business hour of a day.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs37/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs37/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs37" %}

## Scheduler displaying custom hours

It is possible to display the Scheduler layout with specific time durations by hiding unwanted hours. To do so, set the start and end hours by using the [`startHour`](https://ej2.syncfusion.com/react/documentation/api/schedule#starthour) and [`endHour`](https://ej2.syncfusion.com/react/documentation/api/schedule#endhour) properties.

The following code example displays the Scheduler from 7:00 AM to 6:00 PM and hides the remaining hours in the UI.
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs38/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs38/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs38" %}

## Setting start day of the week

By default, the Scheduler uses `Sunday` as the first day of the week. To change the start day, set the [`firstDayOfWeek`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstdayofweek) property with a value from 0 to 6.

> **Note:** Sunday is denoted as 0, Monday as 1, and so on.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs39/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs39/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs39" %}

## Scroll to specific time and date

You can manually scroll to a specific time in the Scheduler by using the [`scrollTo`](https://ej2.syncfusion.com/react/documentation/api/schedule#scrollto) method, as shown in the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/event-public-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/event-public-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-public-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/event-public-cs4" %}

### How to scroll to current time on initial load

In some scenarios, you may want the Scheduler to load with the system's current time visible in the viewport. In such cases, scroll the Scheduler to a specific time based on the system time, as shown in the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs40/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs40/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs40" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)

* [To display the current time indicator](./timescale#highlighting-current-date-and-time)
* [To set different working hours dynamically](./how-to/set-different-work-hours)
* [To set different working hours for each resources](./resources#set-different-work-hours)
* [To set different working days for each resources](./resources#set-different-work-days)