---
layout: post
title: How to set cursor position in React MaskedTextBox | Syncfusion
description: Customize cursor position in the React MaskedTextBox on focus to start, end, or a specific location in the masked input.
control: Set cursor position while focus on the input textbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set cursor position in React MaskedTextBox

By default, when the MaskedTextBox is focused, the entire mask is selected. You can customize this using one of the following methods:

* Setting cursor position at the start of the MaskedTextBox
* Setting cursor position at the end of the MaskedTextBox
* Setting cursor position at a specific location in the MaskedTextBox

> When a MaskedTextBox is filled with all mask characters, **selectionStart** and **selectionEnd** are set to **0** instead of the input element's value length. This is the default behavior of the HTML5 input element.

The following example demonstrates these cursor position cases using the [`focus`](https://ej2.syncfusion.com/react/documentation/api/maskedtextbox#focus) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/cursor-position-cs1" %}