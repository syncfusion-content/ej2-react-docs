---
layout: post
title: Prevent nullable input in numerictextbox in React Numerictextbox component | Syncfusion
description: Learn here all about Prevent nullable input in numerictextbox in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Prevent nullable input in numerictextbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent nullable input in NumericTextBox in React

By default, the NumericTextBox value can be set to null when the input is cleared. For applications requiring a value to always be present, use the following sample to enforce a non-null value and prevent users from creating empty NumericTextBox inputs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/nullable-input-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/nullable-input-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/nullable-input-cs1" %}
