---
layout: post
title: How to set the read-only in React DatePicker | Syncfusion
description: Make the React DatePicker read-only with the readOnly property so users can only pick dates from the calendar popup.
control: Set DatePicker as read-only 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set the read-only in React DatePicker

The React DatePicker can be set to read-only mode using the [`readOnly`](https://ej2.syncfusion.com/react/documentation/api/datepicker/index-default#readonly) property. When enabled, users can view and select dates from the calendar popup, but cannot directly edit the input field. This is useful for scenarios where date selection should be guided through the calendar interface only.

The following example demonstrates how to configure a read-only React DatePicker component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs18" %}