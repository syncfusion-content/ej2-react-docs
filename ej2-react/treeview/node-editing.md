---
layout: post
title: Node editing in React Treeview component | Syncfusion
description: Learn here all about Node editing in Syncfusion React Treeview component of Syncfusion Essential JS 2 and more.
control: Node editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Node editing in React Treeview component

The TreeView allows you to edit nodes by setting the [allowEditing](https://ej2.syncfusion.com/react/documentation/api/treeview#allowediting) property to **true**.
To directly edit the nodes in place, **double click** the TreeView node or **select** the node and press **F2** key.

When editing is completed by focus out or by pressing the **Enter** key, the modified node’s text saves automatically.
If you do not want to save the modified node’s text in TreeView node, press **Escape** key. It does not save the edited text to the TreeView node.

* Node editing can also be performed programmatically by using the [`beginEdit`](https://ej2.syncfusion.com/react/documentation/api/treeview#beginedit) method. On passing the node ID or element through this method, the edit textbox will be created for the particular node thus allowing us to edit it.

* If you need to validate or prevent editing, the [`nodeEditing`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeediting) event can be used which is triggered before the TreeView node is renamed. On successfully renaming a node the [`nodeEdited`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeedited) event will be triggered.

In the following example, the first level node’s text cannot be changed, but all other level nodes' text can be changed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs12" %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)