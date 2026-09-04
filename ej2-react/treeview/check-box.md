---
layout: post
title: CheckBox in React Tree View | Syncfusion
description: Show a CheckBox before each Syncfusion React TreeView node and configure tri-state parent selection with showCheckBox and autoCheck.
control: Check box 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# CheckBox in React Tree View

The React Tree View component allows you to check more than one node in React Tree View without affecting the UI's appearance by enabling the [showCheckBox](https://ej2.syncfusion.com/react/documentation/api/treeview#showcheckbox) property. When this property is enabled, checkbox appears before each React Tree View node text.

* If one of the child nodes is not in a checked state, then the parent node will be in an intermediate state.

* If all the child nodes are in checked state, then the parent node's state will also be checked.

* If a parent node is checked, then all the child nodes' state will also be checked.

By default, the checkbox state of parent and child nodes are dependent on each other. If you need independent checked state, you can achieve it using the [`autoCheck`](https://ej2.syncfusion.com/react/documentation/api/treeview#autocheck) property.

Using the [`checkedNodes`](https://ej2.syncfusion.com/react/documentation/api/treeview#checkednodes) property, you can set the nodes that need to be checked or get the ID of nodes that are currently checked in the React Tree View component.

If you need to prevent the node check action for a particular node, the [`nodeChecking`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodechecking) event can be used which is triggered before the React Tree View node is checked/unchecked. The [`nodeChecked`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodechecked) event will be triggered when the React Tree View node is checked/unchecked successfully.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/basic-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/basic-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs1" %}

## Checked nodes

You can get or set the checked nodes in React Tree View at initial rendering and dynamically by using the [checkedNodes](https://ej2.syncfusion.com/react/documentation/api/treeview#checkednodes) property. It accepts (when setting) and returns (when getting) the checked nodes as an array of node objects, from which you can read each node's `id`.

In the following example, the **New South Wales** and **Western Australia** nodes are checked at initial rendering. If any more nodes are checked, the checked nodes' IDs will be displayed in alert.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/basic-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/basic-cs2/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs2" %}

## See Also

* [How to check/uncheck the checkbox on clicking the tree node text](./how-to/check-uncheck-the-checkbox-on-clicking-the-tree-node-text)

* [How to disable the checkboxes alone in the tree nodes](./how-to/disable-checkbox-of-the-tree-node)

* [How to remove the checkbox of the parent node in React Tree View](./how-to/remove-parent-checkbox)