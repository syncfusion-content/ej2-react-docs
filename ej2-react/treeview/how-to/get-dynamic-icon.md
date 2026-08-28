---
layout: post
title: How to get a dynamic icon in React Tree View | Syncfusion
description: Resolve the iconCss of a Syncfusion React TreeView node at render time by returning a value from the nodeTemplate function.
control: Get dynamic icon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to get a dynamic icon in React Tree View

In TreeView component, you can get the original bound data using the [`getTreeData`](https://ej2.syncfusion.com/react/documentation/api/treeview#gettreedata) method. For this method, if you pass the id of the tree node, it returns the corresponding node information, or otherwise the overall tree nodes information will be returned. You can use this method to resolve the bound iconCss class for each node inside the [`nodeTemplate`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodetemplate) (or the [`drawNode`](https://ej2.syncfusion.com/react/documentation/api/treeview#drawnode) event). Please refer to the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/icon-css-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/icon-css-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/icon-css-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/icon-css-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/icon-css-cs1" %}