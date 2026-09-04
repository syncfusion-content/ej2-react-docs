---
layout: post
title: Islamic Calendar in React Calendar | Syncfusion
description: Display the Islamic (Hijri) calendar in the React Calendar by enabling calendarMode and injecting the Islamic module.
control: Islamic calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Islamic Calendar in React Calendar

In addition to the Gregorian calendar, the React Calendar control supports the Islamic (Hijri) React Calendar. An Islamic year has 354 or 355 days across 12 months in a `lunar` cycle. To learn more, refer to the [Islamic calendar](https://en.wikipedia.org/wiki/Islamic_calendar).

The React Calendar supports Gregorian features such as `min`/`max` date, week numbers, first day of the week, multi-selection, RTL, `start`/`depth` views, localization, and date highlighting/customization in Islamic mode.

By default, the React Calendar uses **Gregorian** mode. Enable Islamic mode by setting the `calendarMode` property to `Islamic` and injecting the `Islamic` module using the `Inject` directive from `@syncfusion/ej2-react-calendars`.

**API**

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `calendarMode` | `CalendarMode` (`Gregorian` \| `Islamic`) | `Gregorian` | Switches the React Calendar between Gregorian and Islamic modes. |

```js
import { Islamic } from '@syncfusion/ej2-react-calendars';
```


The following example demonstrates how to display the Islamic Calendar (Hijri React Calendar).

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
