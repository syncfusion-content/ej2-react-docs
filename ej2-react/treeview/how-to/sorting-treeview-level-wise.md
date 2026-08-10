---
layout: post
title: How to sort tree nodes by level in React | Syncfusion
description: Sort Syncfusion React TreeView nodes at each depth level by setting the sortOrder property and enabling enableSorting.
control: Sorting TreeView level wise 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to sort tree nodes by level in React

You can sort the TreeView nodes based on their level. When using the [`sortOrder`](https://ej2.syncfusion.com/react/documentation/api/treeview#sortorder) property, the whole TreeView is sorted. When you sort a particular level, you can use the following code sample. The following code sample demonstrates how to sort the parent node alone in TreeView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/sort-tree-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/sort-tree-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/sort-tree-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/sort-tree-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/sort-tree-cs1" %}