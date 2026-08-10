---
layout: post
title: How to submit form in React Button Group | Syncfusion
description: Submit radio and checkbox React Button Group values in a form using the name attribute. Disabled buttons do not submit their values.
control: Form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to submit form in React Button Group

The `name` attribute groups radio and checkbox type buttons in a form. When the form submits, the value of the checked button is sent to the server and can be retrieved using the `name` attribute. Disabled buttons do not send their values on form submission.

The following example demonstrates a radio type ButtonGroup with the "Male" option initially checked. When the form is submitted, the checked button's value is sent to the server:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/form-cs1" %}