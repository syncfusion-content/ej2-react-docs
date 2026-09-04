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

You can add **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) field. The `iconCss` field renders a span with the mapped class name in each list item for styling. For example, set the `iconCss` field within the `fields` mapping, such as `fields={{ iconCss: 'icon' }}`, where `icon` is the data field that holds the icon CSS class for each item. The mapped class must be defined in your application's CSS (for example, in `index.css` or `App.css`) with the appropriate icon styles, such as a font-icon or a background image, so the span renders the intended icon.

In the following sample, icon classes are mapped using the `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/icons-cs1" %}

Each list item displays an icon based on the class mapped through the `iconCss` field.