---
layout: post
title: Client side validation in React Timepicker component | Syncfusion
description: Learn here all about Client side validation using form validator in Syncfusion React Timepicker component of Syncfusion Essential JS 2 and more.
control: Client side validation using form validator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Client side validation using form validator in React Timepicker component

To achieve the client side validation in a TimePicker component by using [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator/). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In the following example, the required field validation is implemented by mapping the name attribute value to the rules property. It validates the TimePicker component and displays the validation message when the textbox value is empty, during form post back or focus out.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/validation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/validation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/validation-cs1" %}
