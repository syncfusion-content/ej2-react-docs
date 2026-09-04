---
layout: post
title: How to select one child per parent in React | Syncfusion
description: Allow only one child of a given parent to be selected at a time in the Syncfusion React TreeView by listening to nodeSelected.
control: Select one child 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to select one child per parent in React

React Tree View allows both single and multiple selections. If your application needs to select one child at a time under one specific parent, refer to the following example. You can achieve this in the [`nodeSelecting`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeselecting) event of the React Tree View by clearing any previously selected sibling before the new selection is applied. The sample below also shows how to reset the selected child and re-select another sibling by holding **Ctrl** while clicking.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/select-one-child-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/select-one-child-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/select-one-child-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/select-one-child-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/select-one-child-cs1" %}