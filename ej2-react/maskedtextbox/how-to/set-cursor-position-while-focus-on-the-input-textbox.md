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

By default, on focusing the MaskedTextBox the entire mask gets selected. You can customize by using any one of the following methods:

* Setting cursor position at the start of the MaskedTextBox.
* Setting cursor position at the end of the MaskedTextBox.
* Setting cursor at the specified position in the MaskedTextBox.

> The **selectionStart** and **selectionEnd** set to **0** instead of the input element value's length, when we focus on a MaskedTextBox control filled with all mask characters. This is the default behavior of the HTML 5 input element.

Following is an example that demonstrates the above cases to set cursor position in the MaskedTextBox using [`focus`](https://ej2.syncfusion.com/react/documentation/api/maskedtextbox#focus) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/masked-textbox/cursor-position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/cursor-position-cs1" %}