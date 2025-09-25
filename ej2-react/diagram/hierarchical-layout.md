---
layout: post
title: Hierarchical tree layout in React Diagram Component | Syncfusion®
description: Learn here all about Hierarchical tree layout in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Hierarchical tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical Tree Layout in React Diagram Component

The hierarchical tree layout arranges nodes in a tree-like structure where nodes can have multiple parent nodes, creating complex organizational relationships. Unlike traditional tree structures with single parent-child relationships, this layout supports scenarios such as matrix organizations, project dependencies, or any structure where entities report to multiple authorities. The layout automatically determines positioning without requiring a specified root node.

## Hierarchical Tree Layout with Nodes and Connectors

To arrange nodes in a hierarchical structure, specify the layout [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#type) as **HierarchicalTree**. This approach provides full control over node and connector definitions while leveraging automatic positioning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1" %}

>Note: The HierarchicalTree module must be injected into the diagram to use hierarchical tree layout functionality.

## Hierarchical Layout with DataSource

For data-driven scenarios, hierarchical layout can be created using a DataSource, which automatically generates nodes and connectors based on the data relationships. This approach is more efficient for large datasets and dynamic content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2" %}


>Note: When using DataSource for layout generation, both DataBinding and HierarchicalTree modules must be injected into the diagram.

![Hierarchical tree layout showing nodes with multiple parent relationships](images/hierarchicalTree.png)
