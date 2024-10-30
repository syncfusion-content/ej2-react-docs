---
layout: post
title: User interactions in React Treeview component | Syncfusion
description: Learn here all about User interactions in Syncfusion React Treeview component of Syncfusion Essential JS 2 and more.
control: User interactions
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in React Treeview component

The below methods were available in TreeView, and we can walk through one by one.

* addNodes
* removeNodes
* updateNode
* refreshNode
* moveNodes

## addNodes

TreeView allows user to add the collection of TreeView nodes based on target and index position by using the `addNodes` method. You can add parent as well as the child by passing its id and target as arguments. Here, you can achieve this by using button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/user-ineractions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/user-ineractions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/user-ineractions-cs1" %}

 ## removeNodes

TreeView allows user to remove the collection of TreeView nodes by passing the array of node id by using the `removeNodes` method. You can remove parent as well as the child by passing its id value. Here, you can achieve this by using button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/user-ineractions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/user-ineractions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/user-ineractions-cs2" %}

 ## updateNode

TreeView allows user to update TreeView nodes by passing the target and the text to be shown by using the `updateNode` method. You can also need to enable the `allowEditing` property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/user-ineractions-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/user-ineractions-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/user-ineractions-cs3" %}

 ## refreshNode

TreeView allows user to refresh TreeView nodes with new changes by passing the target and the new changes to be shown by using the `refreshNode` method while using the nodeTemplate property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/user-ineractions-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/user-ineractions-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/user-ineractions-cs4" %}

 ## moveNodes

TreeView allows user to move TreeView node by passing the node to be moved, the target where to be moved, index of the moved node to be placed in target by using the `moveNodes` method. Here, you can achieve this by using button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/user-ineractions-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/user-ineractions-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/user-ineractions-cs5" %}