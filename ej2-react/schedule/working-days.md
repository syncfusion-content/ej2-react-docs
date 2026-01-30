---
layout: post
title: Working days in React Schedule component | Syncfusion
description: Learn here all about Working days in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Working days in React Schedule component

The Scheduler supports calendar-specific customizations, including:

* Custom time range display
* Different working hours
* Different working days
* Different first day of the week
* Show/hide weekend days
* Show week numbers
* Display current time indicator

## Set working days

By default, the Scheduler considers Monday to Friday as working days (`[1, 2, 3, 4, 5]`, where 1 = Monday, 2 = Tuesday, etc.). Days not in this collection are treated as non-working days. When weekends are hidden, non-working days are also hidden from the layout.

The WorkWeek and Timeline WorkWeek views display only the defined working days, while other views show all days but differentiate non-working days with inactive cell colors.

> Working/business hours highlighting applies only to the specified working days.

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

Use the [`showWeekend`](https://ej2.syncfusion.com/react/documentation/api/schedule/viewsModel#showweekend) property (default `true`) to show or hide weekend days. It does not apply to WorkWeek view (non-working days are already excluded). Days outside the `workDays` collection are considered weekends/non-working and hidden when `showWeekend` is `false`.

Here, the working days are defined as [1, 3, 4, 5] on Scheduler and therefore the remaining days (0, 2, 6 – Sunday, Tuesday and Saturday) are considered as non-working or weekend days and will be hidden from all the views when [`showWeekend`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweekend) property is set to `false`.

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

> The [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) property is not applicable on Timeline views, as it has the equivalent [headerRows](./header-rows#display-week-numbers-in-timeline-views) property to handle such requirement with additional customizations.

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

For details, refer to [this link](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.calendarweekrule?view=net-5.0#remarks)


**Note**: Enable [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) property to configure the [`weekRule`](https://ej2.syncfusion.com/react/documentation/api/schedule#weekrule) property. Also, the weekRule property depends on the value of the `firstDayOfWeek` property

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

Working hours indicates the work hour limit within the Scheduler, which is visually highlighted with an active color on work cells. The working hours can be set on Scheduler using the [`workHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#workhours) property which is of object type and includes the following sub-options,

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

It is possible to display the event Scheduler layout with specific time durations by hiding the unwanted hours. To do so, set the start and end hour for the Scheduler using the [`startHour`](https://ej2.syncfusion.com/react/documentation/api/schedule#starthour) and [`endHour`](https://ej2.syncfusion.com/react/documentation/api/schedule#endhour) properties respectively.

The following code example displays the Scheduler starting from the time range 7.00 AM to 6.00 PM and the remaining hours are hidden on the UI.
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

By default, Scheduler defaults to `Sunday` as its first day of a week. To change the Scheduler's start day of a week with different day, set the [`firstDayOfWeek`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstdayofweek) property with the values ranging from 0 to 6.

> Here, Sunday is always denoted as 0, Monday as 1 and so on.


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

You can manually scroll to a specific time on Scheduler by making use of the [`scrollTo`](https://ej2.syncfusion.com/react/documentation/api/schedule#scrollto) method as depicted in the following code example.

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

There are scenarios where you may need to load the Scheduler displaying the system's current time on the currently visible view port area. In such cases, the Scheduler needs to be scrolled to a specific time based on the system's current time which is depicted in the following code example.

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

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.

## See Also

* [To display the current time indicator](./timescale#highlighting-current-date-and-time)
* [To set different working hours dynamically](./how-to/set-different-work-hours)
* [To set different working hours for each resources](./resources#set-different-work-hours)
* [To set different working days for each resources](./resources#set-different-work-days)