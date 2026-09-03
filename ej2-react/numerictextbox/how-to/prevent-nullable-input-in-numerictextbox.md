---
layout: post
title: How to prevent nullable input in React Numeric TextBox | Syncfusion
description: Enforce a non-null value in the React Numeric TextBox by preventing users from clearing the input on the value change event.
control: Prevent nullable input in numerictextbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent nullable input in React Numeric TextBox

By default, the React NumericTextBox value can be set to null when the input is cleared. For applications requiring a value to always be present, use the following sample to enforce a non-null value and prevent users from creating empty React Numeric TextBox inputs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/nullable-input-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/nullable-input-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/nullable-input-cs1" %}
