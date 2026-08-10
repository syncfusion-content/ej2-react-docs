---
layout: post
title: How to hover multi-line tree nodes in React | Syncfusion
description: Highlight the entire multi-line row of a Syncfusion React TreeView node on hover by overriding the e-list-item hover rule.
control: Hover multi line tree node 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to hover multi-line tree nodes in React

This section demonstrates how to hover and select a multi-line tree node. Here, you can set the row height (element class: `e-fullrow`) to be the same as the row content (element class: `e-text-content`)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/multi-line-tree-cs1" %}