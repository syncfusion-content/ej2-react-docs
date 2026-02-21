---
layout: post
title: Customize Calendar component | Syncfusion
description: Learn here all about Customize the calendar day header in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Customize the calendar day header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the calendar day header in React Calendar component

You can change the format of the day displayed in the header using the [`dayHeaderFormat`](https://ej2.syncfusion.com/react/documentation/api/calendar#dayheaderformat) property. By default, the format is `Short`.

Find the possible formats below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Displays the short format of the day name (for example, `Su`) in the day header. |
| `Narrow` | Displays a single character of the day name (for example, `S`) in the day header. |
| `Abbreviated` | Displays the abbreviated day name (for example, `Sun`) in the day header. |
| `Wide` | Displays the full day name (for example, `Sunday`) in the day header. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/header-format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/header-format-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/header-format-cs1" %}