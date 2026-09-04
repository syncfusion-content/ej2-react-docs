---
layout: post
title: How to render Sidebar with TreeView in React | Syncfusion
description: Embed a Syncfusion TreeView inside the Syncfusion React Sidebar in dock state to show navigation icons that expand to full tree content.
control: Sidebar with TreeView 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render Sidebar with TreeView in React

The following example demonstrates how to render TreeView component inside the React Sidebar with dock state and how to achieve expand and collapse the functionalities simultaneously in the React Sidebar and Treeview.

On collapse, the LI elements of TreeView show icons only to represent the short sign of the hidden text content. On expand, hidden text content will be set to be visible.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/treeview-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/treeview-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/treeview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/treeview-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/sidebar/treeview-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/treeview-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/treeview-cs1" %}