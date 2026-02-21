---
layout: post
title: Open DatePicker popup on input focus in React Datepicker component | Syncfusion
description: Learn here all about Open DatePicker popup on input focus in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Open DatePicker popup on input focus 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open DatePicker popup on input focus in React Datepicker component

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