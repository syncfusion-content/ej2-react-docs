---
layout: post
title: Add or Remove the value programatically on read only TextBox in React TextBox component | Syncfusion
description: Learn here all about Add or Remove the value programatically on read only TextBox in React TextBox component of Syncfusion Essential JS 2 and more.
control: Add floating label to read only TextBox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add or remove value programmatically in a read-only TextBox in React TextBox component

While a read-only TextBox prevents direct user input, you can still update its value programmatically using code. This is useful for displaying dynamic data or status information that users should not edit. The following example demonstrates how to update a read-only TextBox value and trigger the floating label behavior.

In this sample, click the update value button to populate the read-only TextBox with a value and animate the floating label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/read-only-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/read-only-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/read-only-cs1" %}