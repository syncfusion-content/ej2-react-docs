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

You can restrict drag and drop so that files are only allowed under folders. To prevent specific source nodes from being dragged, use the [`nodeDragStart`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragstart) event. To restrict the target drop behavior, use the [`nodeDragStop`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragging) events of the TreeView.

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