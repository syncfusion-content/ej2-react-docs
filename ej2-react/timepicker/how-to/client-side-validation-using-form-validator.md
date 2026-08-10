---
layout: post
title: How to validate using the FormValidator in React TimePicker | Syncfusion
description: Validate the React TimePicker input client-side by integrating the FormValidator with custom error messages and required-field rules.
control: Client side validation using form validator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to validate using the FormValidator in React TimePicker

The TimePicker component can be integrated with the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator/) to validate time input. The FormValidator allows you to customize error messages and control validation behavior for each field.

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
