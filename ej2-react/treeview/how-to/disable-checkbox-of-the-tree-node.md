---
layout: post
title: How to disable a checkbox on a node in React | Syncfusion
description: Disable the CheckBox on specific Syncfusion React TreeView nodes by overriding the field mapping or via the nodeTemplate.
control: Disable checkbox of the tree node 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to disable a checkbox on a node in React

You can disable the check box alone in TreeView instead of disabling the whole node. You need to include the `e-checkbox-disabled` class into the check box element using the [`drawNode`](https://ej2.syncfusion.com/react/documentation/api/treeview#drawnode) event. Please refer to the following sample to disable the check box of the tree nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/disable-checkbox-cs1" %}
