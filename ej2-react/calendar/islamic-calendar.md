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

In addition to the Gregorian calendar, the Calendar control supports the Islamic (Hijri) calendar. The Islamic calendar is a `lunar calendar` consisting of 12 months in a year of 354 or 355 days. To learn more, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Islamic_calendar).

The Calendar supports Gregorian features such as min/max date, week numbers, start day of the week, multi selection, RTL, start/depth views, localization, and date highlighting/customization.

By default, the calendar uses **Gregorian** mode. Enable Islamic mode by setting the `calendarMode` property to `Islamic` and injecting the `Islamic` module into the Calendar using the `Inject` directive from `@syncfusion/ej2-react-calendars` as shown below.

```jsx
import { Islamic } from '@syncfusion/ej2-react-calendars';
```


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
