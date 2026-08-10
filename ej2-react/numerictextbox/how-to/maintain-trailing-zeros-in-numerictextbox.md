---
layout: post
title: How to maintain trailing zeros in React NumericTextBox | Syncfusion
description: Preserve trailing zeros in the React NumericTextBox on focus for currency or precision display by overriding the default focus behavior.
control: Maintain trailing zeros in numerictextbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to maintain trailing zeros in React NumericTextBox

By default, the NumericTextBox removes trailing zeros when the component receives focus (to allow easy editing of numeric values). However, when you need to preserve trailing zeros for currency formatting or precision display, use the following sample to maintain trailing zeros while focusing the NumericTextBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/trailing-zeros-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/trailing-zeros-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/trailing-zeros-cs1" %}