---
layout: post
title: Calendar mode in React Schedule component | Syncfusion
description: Learn here all about Calendar mode in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Calendar mode in React Schedule component

The Scheduler supports two types of calendar modes:

* Gregorian Calendar
* Islamic Calendar

## Gregorian Calendar

By default, the Scheduler uses the Gregorian calendar, the most widely adopted solar calendar globally. The Gregorian calendar consists of 12 months, each with 28 to 31 days. Leap years, which are divisible by four, have 366 days; non-leap years contain 365 days.

## Islamic Calendar

The Islamic Calendar, also known as the Hijri or Muslim calendar, is a lunar calendar which has 12 months in a year with 354 or 355 days. Each month of this calendar denotes the birth of the new lunar cycle and therefore, each month can have 29 or 30 days depending on the visibility of the moon. Here, the odd-numbered months have 30 days and the even months have 29 days.

> The current Islamic year is 1440 AH. Usually the Gregorian calendar runs from approximately 11 September 2018 to 30 August 2019 for this 1440 AH year.

The Scheduler has a property [`calendarMode`](https://ej2.syncfusion.com/react/documentation/api/schedule#calendarmode) which is used to switch between the gregorian and islamic calendar modes. By default, it is set to `Gregorian` and to use it with Islamic calendar dates, define the `calendarMode` of Scheduler to `Islamic`. The following example depicts, how to display the Islamic calendar dates on Scheduler.

To use the Islamic calendar in Scheduler, import the `Calendar` and `Islamic` modules from the `ej2-calendars` package, and inject them using the `Calendar.Inject` method. Additionally, ensure the following CLDR data files are loaded via the `loadCldr` function, as this is necessary for multilingual and Islamic date support:

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

> For complete instructions on installing and loading CLDR data, refer to the [Internationalization guide](https://ej2.syncfusion.com/documentation/common/internationalization#installing-cldr-data) topic.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/calendar-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/calendar-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/calendar-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-mode-cs1" %}

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.
