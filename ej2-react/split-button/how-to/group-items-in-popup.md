---
layout: post
title: How to group items in popup in React Split Button | Syncfusion
description: Group React Split Button popup items by integrating the ListView component as the target with grouping enabled for categorized menus.
control: Group items in popup 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to group items in popup in React Split Button

Organize React Split Button popup items into logical groups using the ListView component for templating. By leveraging ListView's grouping capabilities, you can categorize related actions into collapsible or visually distinct sections, improving usability for menus with many items.

To implement grouped items, create a ListView component with the id `listview` and assign it as the React Split Button's [`target`](https://ej2.syncfusion.com/react/documentation/api/split-button#target). For detailed ListView grouping options, see the [`ListView grouping documentation`](../../listview/grouping#grouping).

The following example demonstrates how to create grouped popup items using the ListView component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/listview-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/listview-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/listview-cs1" %}