---
layout: post
title: How to custom search in React AutoComplete | Syncfusion
description: Highlight matched characters in the Syncfusion React AutoComplete suggestion list using the highlight property and a custom e-highlight CSS class.
control: Custom search 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to custom search in React AutoComplete

The AutoComplete has built-in support to highlight the searched characters on suggested list items when the [`highlight`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#highlight) property is enabled.

In the following sample, the matched character in the suggestion list is customized using the `e-highlight` class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/highlight-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/highlight-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/highlight-cs1" %}