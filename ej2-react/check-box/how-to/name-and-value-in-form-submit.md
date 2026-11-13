---
layout: post
title: How to set name and value in React Checkbox | Syncfusion
description: Submit React Checkbox values in a form using the name attribute. Only checked values are sent; disabled and unchecked values are excluded.
control: Name and value in form submit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set name and value in React Checkbox

The [`name`](https://ej2.syncfusion.com/react/documentation/api/check-box#name) attribute groups React Checkboxes in a form. When the form submits, only the values of checked React Checkboxes are sent to the server and can be retrieved using the `name` attribute. Disabled and unchecked React Checkbox values are not sent on form submission.

The following example demonstrates form submission with React Checkbox values. Cricket and Hockey are checked, Tennis is disabled, and Basketball is unchecked. Only the checked values are sent on form submit:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/form-cs1" %}