---
layout: post
title: How to show list items with icons in React Dropdown List | Syncfusion
description: Display icons next to React Dropdown List list items by mapping an iconCss class field, which renders a styled span inside each item.
control: Icons support
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in React Dropdown List

Render **icons** in list items by mapping the [iconCss](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#fields) &nbsp;field. The `iconCss` field creates a span element in each list item with the mapped class name for custom styling.

In the following sample, icon classes are mapped to the `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/dropdownlist/icons-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/icons-cs1" %}