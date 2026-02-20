---
layout: post
title: Autofill in React AutoComplete component | Syncfusion
description: Learn here all about Autofill in Syncfusion React AutoComplete component of Syncfusion Essential JS 2 and more.
control: Autofill 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Autofill in React AutoComplete component

The React AutoComplete supports autofill behavior with the help of the [`autofill`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#autofill) property. Whenever you change the input value and press the down arrow key, the AutoComplete will autocomplete your data by matching the typed character. If no matches are found, the AutoComplete does not suggest any item.

In the following sample, the `autofill` feature is demonstrated with the AutoComplete.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs23" %}