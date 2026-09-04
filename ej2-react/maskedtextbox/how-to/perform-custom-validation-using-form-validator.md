---
layout: post
title: How to add custom validation in React Input Mask | Syncfusion
description: Add a custom validation rule to the React Input Mask using the FormValidator component to validate a mobile number format.
control: Perform custom validation using form validator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom validation in React Input Mask

To perform custom validation on the MaskedTextBox, use the FormValidator component with custom validation rules.

In the following example, the React Input Mask validates a mobile number by adding custom validation to the FormValidator's rules collection.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/masked-textbox/custom-validation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/masked-textbox/custom-validation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/custom-validation-cs1" %}