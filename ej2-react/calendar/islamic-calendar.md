---
layout: post
title: Islamic calendar in React Calendar component | Syncfusion
description: Learn here all about Islamic calendar in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Islamic calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Islamic calendar in React Calendar component

In addition to the Gregorian calendar, the Calendar control supports displaying the Islamic calendar (Hijri calendar). **Islamic calendar** or **Hijri calendar** is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To know more about Islamic calendar, please refer this [wikipedia](https://en.wikipedia.org/wiki/Islamic_calendar).

Also, it consists of all Gregorian calendar functionalities as like min and max date, week number, start day of the week, multi selection, enable RTL, start and depth view, localization, highlight and customize the specific dates.

By default, calendar mode is in **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic**. Also, need to import and injecting the `Islamic` module into the Calendar using the `Inject` directive from `ej2-react-calendars` as shown below.

> import { Islamic } from '@syncfusion/ej2-react-calendars';

By default, calendar mode is in **Gregorian**. You can enable the Islamic mode by setting the **calendarMode** as **Islamic** and injecting the `Islamic` module into the Calendar using the `Inject` directive.

The following example demonstrates how to display the Islamic Calendar (Hijri Calendar).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/islamic-calendar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/islamic-calendar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/islamic-calendar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/islamic-calendar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/islamic-calendar-cs2" %}
