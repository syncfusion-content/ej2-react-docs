---
layout: post
title: How to show week number in React Calendar | Syncfusion
description: Display ISO week numbers in the React Calendar by enabling the weekNumber property to show the current week in each row.
control: Render the calendar with week numbers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show week number in React Calendar

Enable week numbers in the React Calendar by setting the [`weekNumber`](https://ej2.syncfusion.com/react/documentation/api/calendar#weeknumber) property to `true`. By default, week numbers are calculated using the **ISO-8601** rule, where week 1 is the week containing the first Thursday of the year.

**API**

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `weekNumber` | `Boolean` | `false` | Displays week numbers in a leading column of the React Calendar. |
| `weekRule` | `WeekRule` (`FirstDay` \| `FirstFullWeek` \| `FirstFourDayWeek`) | `FirstFourDayWeek` (ISO-8601) | Defines how the first week of the year is determined. |

The following example demonstrates the React Calendar with week numbers enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs18" %}