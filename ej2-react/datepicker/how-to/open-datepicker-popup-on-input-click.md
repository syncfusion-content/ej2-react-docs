---
layout: post
title: Open DatePicker popup on input focus in React DatePicker | Syncfusion
description: Open the React DatePicker popup automatically when the input gains focus by calling show inside the focus event handler.
control: Open DatePicker popup on input focus 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to open DatePicker popup on input focus in React DatePicker

The DatePicker popup can be programmatically opened when the input element receives focus by calling the `show` method within the input's `focus` event handler. This approach improves user experience by immediately displaying the calendar when users interact with the input field.

The following example demonstrates opening the DatePicker popup automatically when the input field receives focus:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/open-popup-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/open-popup-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/open-popup-cs1" %}