---
layout: post
title: Filter List box Data Using TextBox component | Syncfusion
description: Learn here all about Filter List box Data Using TextBox component in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: ListBox Filter
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to Filter ListBox Data Using TextBox Component

This example demonstrates how to filter Syncfusion ListBox data based on input from a TextBox. Bind an input event listener to the TextBox to capture user input and filter the items in the ListBox. Within the event handler, use the [`filter`](https://ej2.syncfusion.com/react/documentation/api/list-box/#filter) method to update the ListBox items, ensuring that only those matching the input text are included.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/filter-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/filter-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/filter-listbox-cs1" %}