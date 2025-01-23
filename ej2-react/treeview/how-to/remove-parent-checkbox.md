---
layout: post
title: Remove parent checkbox in React TreeView component | Syncfusion
description: Learn here all about Remove parent checkbox in Syncfusion React TreeView component of Syncfusion Essential JS 2 and more.
control: Remove parent checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remove parent checkbox in React TreeView component

By enabling the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/treeview#showcheckbox) property, you can render check box before each node of TreeView. However, some application needs to render check box in child nodes alone. In such case, you can remove the check box of the parent node by customizing the CSS.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/remove-parent-checkbox-cs1" %}