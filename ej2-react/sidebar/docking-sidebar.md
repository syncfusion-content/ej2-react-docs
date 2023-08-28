---
layout: post
title: Docking sidebar in React Sidebar component | Syncfusion
description: Learn here all about Docking sidebar in Syncfusion React Sidebar component of Syncfusion Essential JS 2 and more.
control: Docking sidebar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Docking sidebar in React Sidebar component

Dock state of the Sidebar reserves some space on the page that always remains in a visible state when the Sidebar is collapsed. It is used to show the short term of a content like icons alone instead of lengthy text. To achieve this , set [`enableDock`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#enabledock) as true along with required [`dockSize`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#docksize).

In the following sample, the list item has icon with text representation. On dock state, only icons in list will be visible to represent the hint of the hidden text content.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/dock-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/dock-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/dock-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/dock-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/dock-cs1" %}

## See Also

* [How to add sidebar navigation](./how-to/sidebar-with-treeview)