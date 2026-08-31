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

You can add **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#fields) field. This `iconCss` field creates a span in the list item with the mapped class name for styling as needed. The mapped class must be defined in your application's CSS (for example, in `index.css` or `App.css`) with the appropriate icon styles, such as a font-icon or a background image, so the span renders the intended icon.

In the following sample, icon classes are mapped with the `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/icon-css-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/icon-css-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/icon-css-cs1" %}

Each list item displays an icon based on the class mapped through the `iconCss` field.