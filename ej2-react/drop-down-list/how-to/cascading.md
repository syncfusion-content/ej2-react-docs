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

A cascading DropDownList is a series of interdependent DropDownLists where the value of one DropDownList depends on the selection in another. Configure this behavior using the [`change`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the parent DropDownList. In the change event handler, load data into the child DropDownList based on the parent's selected value.

The following example demonstrates cascading behavior using country, state, and city DropDownLists. The `dataBind` method immediately reflects property changes in the DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs31" %}
