---
layout: post
title: How to restrict drag and drop for tree nodes | Syncfusion
description: Prevent dragging specific Syncfusion React TreeView nodes by canceling the nodeDragStart event based on node attributes.
control: Restrict the drag and drop for particular tree nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict drag and drop for tree nodes

You can able to restrict to drag and drop files under folder only. These can be achieved by using [`nodeDragStop`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragging) event of TreeView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/restrict-drag-drop-cs1" %}