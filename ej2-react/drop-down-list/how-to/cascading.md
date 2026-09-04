---
layout: post
title: How to configure cascading in React Dropdown List | Syncfusion
description: Build dependent React dropdowns where child lists load from parent selections, demonstrating country, state, and city filtering.
control: Cascading
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in React Dropdown List

A cascading React Dropdown List is a series of interdependent React Dropdown Lists where the value of one React Dropdown List depends on the selection in another. Configure this behavior using the [`change`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the parent React Dropdown List. In the change event handler, load data into the child React Dropdown List based on the parent's selected value.

The following example demonstrates cascading behavior using country, state, and city React Dropdown Lists. The `dataBind` method immediately reflects property changes in the React Dropdown List.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs31" %}
