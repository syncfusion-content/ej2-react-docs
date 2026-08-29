---
layout: post
title: How to auto-hide expand/collapse icons in React | Syncfusion
description: Hide the expand and collapse icons on Syncfusion React TreeView leaf nodes that have no children, via CSS rules.
control: Auto hide show expand collapse icon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to auto-hide expand/collapse icons in React

You can hide the expand and collapse icons by default and reveal them by hovering the mouse over TreeView. The icons are again hidden once the mouse leaves the TreeView. Refer to the following code sample to toggle the visibility of the expand/collapse icons based on hover.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/auto-hide-icons-cs1" %}