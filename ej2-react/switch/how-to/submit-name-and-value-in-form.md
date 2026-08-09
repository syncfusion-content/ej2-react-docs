---
layout: post
title: How to set name and value in React Switch | Syncfusion
description: Submit the React Switch name and value in a form. Only checked and enabled Switches post data; disabled and unchecked ones are excluded.
control: Submit name and value in form 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set name and value in React Switch

Use the name attribute to group Switches for form submission. When a form containing grouped Switches is submitted, only checked and enabled Switch values are sent to the server. Disabled and unchecked Switches are excluded from form data, allowing conditional data submission based on user selections.

In the following example, USB and Wi-Fi Switches are in the checked state, while Bluetooth is disabled. Only the values of checked Switches will be submitted with the form.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/form-cs1" %}