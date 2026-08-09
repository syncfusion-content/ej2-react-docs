---
layout: post
title: How to show icons in React MultiSelect Dropdown | Syncfusion
description: Show list items with icons in the React MultiSelect Dropdown by mapping the iconCss data field, which renders a styled span inside each item for custom rendering.
control: Icons support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show icons in React MultiSelect Dropdown

You can render **icons** to the list items by mapping the [iconCss](https://ej2.syncfusion.com/react/documentation/api/multi-select/#fields) &nbsp;field. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/icon-css-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/icon-css-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/icon-css-cs1" %}