---
layout: post
title: Filter List box Data Using TextBox component | Syncfusion
description: Filter React ListBox data with a TextBox by listening to its input event and calling the ListBox filter method to narrow items to matching text.
control: ListBox Filter
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter React ListBox Data Using TextBox Component

This example demonstrates filtering Syncfusion<sup style="font-size:70%">&reg;</sup> React ListBox data based on user input in a TextBox. Attach an input event handler to the TextBox to capture user input, then use the [`filter`](https://ej2.syncfusion.com/react/documentation/api/list-box/#filter) method to display only items matching the search text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/filter-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/filter-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/filter-listbox-cs1" %}