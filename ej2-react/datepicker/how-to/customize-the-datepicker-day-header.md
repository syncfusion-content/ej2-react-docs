---
layout: post
title: How to customize the day header in React DatePicker | Syncfusion
description: Customize the React DatePicker day header format with dayHeaderFormat using Short, Narrow, Abbreviated, or Wide name styles.
control: Customize the DatePicker day header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the day header in React DatePicker

The day names displayed in the calendar header can be customized using the [`dayHeaderFormat`](https://ej2.syncfusion.com/react/documentation/api/datepicker/index-default#dayheaderformat) property. By default, the format is `Short`. The following formats are available:

| **Name** | **Description** |
|------|---------------------|
| `Short` | Displays the short format of day names (e.g., `Su`) in the header. |
| `Narrow` | Displays a single character representation of day names (e.g., `S`) in the header. |
| `Abbreviated` | Displays the abbreviated format of day names (e.g., `Sun`) in the header. |
| `Wide` | Displays the full format of day names (e.g., `Sunday`) in the header. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/header-format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/header-format-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/header-format-cs1" %}