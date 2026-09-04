---
layout: post
title: How to get all child nodes in React Tree View | Syncfusion
description: Retrieve every descendant node of a Syncfusion React TreeView parent by traversing the nodes collection or calling getTreeData.
control: Get all child nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to get all child nodes in React Tree View

This section demonstrates how to get the child nodes from a corresponding parent ID. Using the [`getNode`](https://ej2.syncfusion.com/react/documentation/api/treeview#getnode) method, you can get the node details of React Tree View, and then access its `child` array to read the entire list of immediate children. Use [`getTreeData`](https://ej2.syncfusion.com/react/documentation/api/treeview#gettreedata) when you also need the descendants further down the hierarchy. Please refer to the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/get-child-nodes-cs1" %}