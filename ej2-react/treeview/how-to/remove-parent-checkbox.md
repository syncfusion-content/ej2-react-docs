---
layout: post
title: How to remove the parent checkbox in React | Syncfusion
description: Hide the CheckBox on parent Syncfusion React TreeView nodes so only leaf nodes display a CheckBox via the showCheckBox field mapping.
control: Remove parent checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to remove the parent checkbox in React

By enabling the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/treeview#showcheckbox) property, you can render check box before each node of React Tree View. However, some application needs to render check box in child nodes alone. In such case, you can remove the check box of the parent node by customizing the CSS.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/style.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/remove-parent-checkbox-cs1" %}
