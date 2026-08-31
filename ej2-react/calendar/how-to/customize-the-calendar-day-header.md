---
layout: post
title: How to customize the day header in React Calendar | Syncfusion
description: Customize the day name format in the React Calendar header using dayHeaderFormat with Short, Narrow, Abbreviated, or Wide.
control: Customize the calendar day header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the day header in React Calendar

You can change the format of the day name displayed in the header using the [`dayHeaderFormat`](https://ej2.syncfusion.com/react/documentation/api/calendar#dayheaderformat) property. By default, the format is `Short`, which renders the abbreviated weekday name appropriate to the active [`locale`](https://ej2.syncfusion.com/react/documentation/api/calendar#locale).

**API**

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `dayHeaderFormat` | `DayHeaderFormat` (`Short` \| `Narrow` \| `Abbreviated` \| `Wide`) | `Short` | Controls how weekday names are displayed in the Calendar header. |

The following formats are supported.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Displays the locale-specific short format of the day name (for example, `Su`) in the day header. |
| `Narrow` | Displays a single character of the day name (for example, `S`) in the day header. |
| `Abbreviated` | Displays the abbreviated day name (for example, `Sun`) in the day header. |
| `Wide` | Displays the full day name (for example, `Sunday`) in the day header. |

The following example demonstrates how to set `Wide` as the `dayHeaderFormat`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/header-format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/header-format-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/header-format-cs1" %}