---
layout: post
title: How to add floating label in read-only TextBox in React TextBox | Syncfusion
description: Add a floating label to a React read-only TextBox so the label animates above the value when the field is populated programmatically.
control: Add floating label to read only TextBox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add floating label in read-only TextBox in React TextBox

While a read-only React TextBox prevents direct user input, you can still update its value programmatically using code. This is useful for displaying dynamic data or status information that users should not edit. The following example demonstrates how to update a read-only TextBox value and trigger the floating label behavior.

In this sample, click the update value button to populate the read-only React TextBox with a value and animate the floating label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/read-only-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/read-only-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/read-only-cs1" %}