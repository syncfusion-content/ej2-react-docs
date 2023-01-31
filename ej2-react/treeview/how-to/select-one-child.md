---
layout: post
title: Select one child in React Treeview component | Syncfusion
description: Learn here all about Select one child in Syncfusion React Treeview component of Syncfusion Essential JS 2 and more.
control: Select one child 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select one child in React Treeview component

TreeView allows both single and multiple selections. If your application needs to select one child at a time under one specific parent, refer to the following example. Here, you can achieve this in the `nodeSelecting` event of TreeView. However, you can reset the selected child and make another selection by pressing Ctrl + selected nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/select-one-child-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/select-one-child-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/select-one-child-cs1" %}