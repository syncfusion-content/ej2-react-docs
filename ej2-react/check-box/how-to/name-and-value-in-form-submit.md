---
layout: post
title: React Check box component | Syncfusion
description: Learn here all about Name and value in form submit in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in React Check box component

The [`name`](https://ej2.syncfusion.com/react/documentation/api/check-box#name) attribute groups CheckBoxes in a form. When the form submits, only the values of checked CheckBoxes are sent to the server and can be retrieved using the `name` attribute. Disabled and unchecked CheckBox values are not sent on form submission.

The following example demonstrates form submission with CheckBox values. Cricket and Hockey are checked, Tennis is disabled, and Basketball is unchecked. Only the checked values are sent on form submit:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/form-cs1" %}