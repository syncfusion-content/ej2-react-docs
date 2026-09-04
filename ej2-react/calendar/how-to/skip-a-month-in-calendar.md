---
layout: post
title: How to skip months in React Calendar | Syncfusion
description: Skip a month in the React Calendar when users click the previous or next icon using the navigated event and NavigateTo method.
control: Skip a month in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to skip months in React Calendar

The following example demonstrates how to skip a month in the React Calendar when the user clicks the previous or next icon. The sample uses the [`navigated`](https://ej2.syncfusion.com/react/documentation/api/calendar#navigated) event together with the [`NavigateTo`](https://ej2.syncfusion.com/react/documentation/api/calendar#navigateto) method to advance the React Calendar by two months at a time instead of one.

**API**

| Member | Signature / Type | Description |
| --- | --- | --- |
| [`navigated`](https://ej2.syncfusion.com/react/documentation/api/calendar#navigated) | `EventEmitter<NavigatedEventArgs>` | Triggered after the Calendar navigates to a different view or month. The event argument exposes `date` and `view` properties. |
| [`NavigateTo`](https://ej2.syncfusion.com/react/documentation/api/calendar#navigateto) | `(date: Date, view?: CalendarView) => void` | Navigates the React Calendar to the specified date, and optionally switches the view (`Month`, `Year`, or `Decade`). |

The following example demonstrates the implementation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs19" %}