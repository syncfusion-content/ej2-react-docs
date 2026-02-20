---
layout: post
title: Maintain trailing zeros in numerictextbox in React Numerictextbox component | Syncfusion
description: Learn here all about Maintain trailing zeros in numerictextbox in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Maintain trailing zeros in numerictextbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Maintain trailing zeros in NumericTextBox in React

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