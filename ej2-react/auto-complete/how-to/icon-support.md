---
layout: post
title: How to show list items with icons in React AutoComplete | Syncfusion
description: Add icons to Syncfusion React AutoComplete list items by mapping the iconCss field, which renders a styled span inside each suggestion.
control: Icon support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in React AutoComplete

You can render **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) field. This `iconCss` field creates a span in the list item with the mapped class name to allow styling according to your requirements.

In the following sample, icon classes are mapped with the `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/icons-cs1" %}