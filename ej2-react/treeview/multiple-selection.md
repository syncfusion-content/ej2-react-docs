---
layout: post
title: Multiple selection in React Treeview component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion React Treeview component of Syncfusion Essential JS 2 and more.
control: Multiple selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in React Treeview component

Selection provides an interactive support and highlights the node that you select. Selection can be done through simple mouse down or keyboard interaction.

The TreeView also supports selection of multiple nodes by setting [allowMultiSelection](https://ej2.syncfusion.com/react/documentation/api/treeview#allowmultiselection) to **true**.

To multi-select, press and hold **CTRL** key and click the desired nodes. To select range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following example, the `allowMultiSelection` property is enabled.

> Multi selection is not applicable through touch interactions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs10" %}

## Selected nodes

You can get or set the selected nodes in TreeView at initial rendering and dynamically by using the [selectedNodes](https://ej2.syncfusion.com/react/documentation/api/treeview#selectednodes) property. It will return the selected node’s ID as an array.

* The [`nodeselecting`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeselecting) event is triggered before a node is selected/unselected which can be used to prevent the selection.

* The [`nodeSelected`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeselected) event is triggered once a node is successfully selected/unselected.

In the following example, **New South Wales** and **Western Australia** nodes are selected at initial rendering. When a node is selected, the selected node’s ID is displayed in alert.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs11" %}

## See Also

* [How to hover and select the multiple line tree nodes](./how-to/hover-multi-line-tree-node/)

* [How to select only one child at a time, out of one specific parent](./how-to/select-one-child/)