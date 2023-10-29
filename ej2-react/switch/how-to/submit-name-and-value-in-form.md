---
layout: post
title: Submit name and value in form with React Switch Component | Syncfusion
description: Learn here all about submit name and value in form in Syncfusion Essential React Switch component, it's elements and more details.
control: Submit name and value in form 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Submit name and value in form in React Switch Component

The name attribute of the Switch is used to group Switches. When the Switches are grouped in form, the checked items value attribute will post to the server on form submit. The disabled and unchecked Switch values will not be sent to the server on form submit.

In the following code snippet, USB and Wi-Fi in the checked state, and Bluetooth is in disabled state.Values that are in checked state only be sent on form submit.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/form-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/form-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/form-cs1" %}