---
layout: post
title: How to display numeric keypad in React MaskedTextBox | Syncfusion
description: Open the numeric keypad on mobile devices in the React MaskedTextBox by setting the type property to tel instead of the default alphanumeric.
control: Display numeric keypad when focus on mobile devices 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to display numeric keypad on mobile in React MaskedTextBox

By default, when the MaskedTextBox is focused, an alphanumeric keypad is displayed on mobile devices. To display only a numeric keypad, set the `type` property to `tel`. The following example shows how to enable the numeric keypad in the MaskedTextBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/masked-textbox/cursor-position-any-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/masked-textbox/cursor-position-any-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/cursor-position-any-cs1" %}