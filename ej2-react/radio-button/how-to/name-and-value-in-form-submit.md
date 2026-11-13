---
layout: post
title: How to set name and value in React Radio Button | Syncfusion
description: Group React Radio Buttons as mutually exclusive options with the name attribute. Only the checked value is submitted; disabled and unchecked are excluded.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set name and value in React Radio Button

Use the [`name`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#name) attribute to group React Radio Button components as mutually exclusive options. When grouped React Radio Buttons are submitted with a form, only the [`value`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#value) attribute of the checked React Radio Button is sent to the server—retrieved using the shared `name` attribute. React Radio Buttons that are disabled or unchecked do not submit their values.

In the example below, the payment method "Credit / Debit Card" is in the checked state. When the form is submitted, only this checked React Radio Button's value will be sent to the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/form-cs1" %}