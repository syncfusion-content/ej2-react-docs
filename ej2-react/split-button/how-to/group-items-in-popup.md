---
layout: post
title: Group items in popup in React Split button component | Syncfusion
description: Learn here all about Group items in popup in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Group items in popup 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group items in popup in React Split button component

Organize SplitButton popup items into logical groups using the ListView component for templating. By leveraging ListView's grouping capabilities, you can categorize related actions into collapsible or visually distinct sections, improving usability for menus with many items.

To implement grouped items, create a ListView component with the id `listview` and assign it as the SplitButton's [`target`](https://ej2.syncfusion.com/react/documentation/api/split-button#target). For detailed ListView grouping options, see the [`ListView grouping documentation`](../../listview/grouping#grouping).

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