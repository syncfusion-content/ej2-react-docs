---
layout: post
title: Name and value in form submit in React Radio button component | Syncfusion
description: Learn here all about Name and value in form submit in Syncfusion React Radio button component of Syncfusion Essential JS 2 and more.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in React Radio button component

Use the [`name`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#name) attribute to group RadioButton components as mutually exclusive options. When grouped RadioButtons are submitted with a form, only the [`value`](https://ej2.syncfusion.com/react/documentation/api/radio-button/#value) attribute of the checked RadioButton is sent to the server—retrieved using the shared `name` attribute. RadioButtons that are disabled or unchecked do not submit their values.

In the example below, the payment method "Credit / Debit Card" is in the checked state. When the form is submitted, only this checked RadioButton's value will be sent to the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/form-cs1" %}