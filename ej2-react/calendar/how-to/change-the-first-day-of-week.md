---
layout: post
title: How to change the first day of week in React Calendar | Syncfusion
description: Change the first day of the week in the React Calendar using the firstDayOfWeek property to match regional week conventions.
control: Change the first day of week 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change the first day of week in React Calendar

The Calendar provides an option to change the first day of the week using the [`firstDayOfWeek`](https://ej2.syncfusion.com/react/documentation/api/calendar#firstdayofweek) property. Days of the week are numbered 0 through 6.

| Value | Day |
| --- | --- |
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |

> By default, the first day of the week is culture-specific (for example, `Sunday` for `en-US` and `Monday` for most European cultures). Use the [`locale`](https://ej2.syncfusion.com/react/documentation/api/calendar#locale) property to switch cultures, or override the default by setting `firstDayOfWeek` explicitly.

The following example demonstrates the Calendar with `Tuesday` as the first day of the week.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs17" %}