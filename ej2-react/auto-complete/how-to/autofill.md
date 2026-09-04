---
layout: post
title: How to enable autofill in React AutoComplete | Syncfusion
description: Enable autofill in the Syncfusion React AutoComplete so pressing the down arrow auto-completes the input to the first matching suggestion as you type.
control: Autofill 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in React AutoComplete

The React AutoComplete supports the autofill behavior with the help of the [`autofill`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#autofill) property, whose default value is `false`. Whenever you change the input value and press the down arrow key or the up arrow key, the React AutoComplete auto-completes the input with the matching item based on the typed characters. If no matches are found, the React AutoComplete does not suggest any item.

In the following sample, the `autofill` feature is demonstrated with the React AutoComplete.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs23" %}

The input field auto-fills with the first matching suggestion when you press the down arrow key or the last matching suggestion when you press the up arrow key.