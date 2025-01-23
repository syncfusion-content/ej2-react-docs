---
layout: post
title: Get dynamic icon in React TreeView component | Syncfusion
description: Learn here all about Get dynamic icon in Syncfusion React TreeView component of Syncfusion Essential JS 2 and more.
control: Get dynamic icon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get dynamic icon in React TreeView component

In TreeView component, you can get the original bound data using the [`getTreeData`](https://ej2.syncfusion.com/react/documentation/api/treeview#gettreedata) method. For this method, if you pass the id of the tree node, it returns the corresponding node information, or otherwise the overall tree nodes information will be returned. You can use this method to get the bound iconCss class in the [`nodeChecking`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodechecking) event. Please refer to the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/icon-css-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/icon-css-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/icon-css-cs1" %}