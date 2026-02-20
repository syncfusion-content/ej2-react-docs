---
layout: post
title: Customize the DatePicker day header in React Datepicker component | Syncfusion
description: Learn here all about Customize the DatePicker day header in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Customize the DatePicker day header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the DatePicker day header in React Datepicker component

The day names displayed in the calendar header can be customized using the [`dayHeaderFormat`](https://ej2.syncfusion.com/react/documentation/api/datepicker#dayheaderformat) property. By default, the format is `Short`. The following formats are available:

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