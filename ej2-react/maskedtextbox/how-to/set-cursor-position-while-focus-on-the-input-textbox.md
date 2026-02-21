---
layout: post
title: Set cursor position while focus on the input textbox in React Maskedtextbox component | Syncfusion
description: Learn here all about Set cursor position while focus on the input textbox in Syncfusion React Maskedtextbox component of Syncfusion Essential JS 2 and more.
control: Set cursor position while focus on the input textbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set cursor position while focus on the input textbox in React Maskedtextbox component

By default, when the MaskedTextBox is focused, the entire mask is selected. You can customize this using one of the following methods:

* Setting cursor position at the start of the MaskedTextBox
* Setting cursor position at the end of the MaskedTextBox
* Setting cursor position at a specific location in the MaskedTextBox

> When a MaskedTextBox is filled with all mask characters, **selectionStart** and **selectionEnd** are set to **0** instead of the input element's value length. This is the default behavior of the HTML5 input element.

The following example demonstrates these cursor position cases using the [`focus`](https://ej2.syncfusion.com/react/documentation/api/maskedtextbox/#focus) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/cursor-position-cs1" %}