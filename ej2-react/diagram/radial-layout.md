---
layout: post
title: Radial tree layout in React Diagram Component | Syncfusion®
description: Learn here all about Radial tree layout in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Radial tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Radial Tree Layout in React Diagram Component

A radial tree layout is a specialized diagram that presents hierarchical information with a central node at the core, surrounded by branches extending outward in a circular, tree-like structure. This layout is particularly effective for visualizing organizational charts, family trees, mind maps, and network relationships where understanding the relationship distance from a central concept is important.

The central node represents the main concept or topic, with child nodes arranged in concentric circles based on their hierarchical level. The layout [`root`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#root)property can be used to define the root node of the layout. When no root node is specified, the algorithm automatically identifies the node without any incoming edges (InEdges connector count of 0) as the root node. To create a radial tree, set the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#type) of the layout to **RadialTree**.

The RadialTree layout provides comprehensive support for controlling node spacing and arrangement. The [`HorizontalSpacing`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutModel/#horizontalspacing )and [`VerticalSpacing`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutModel/#verticalspacing) properties allow precise control over the space between nodes, measured in pixels. The arrangement creates an expanding concentric pattern where radial proximity to the root node indicates the hierarchical level.

## Radial Tree with DataSource

Creating a radial tree layout with a data source provides automatic node generation and connection management. This approach is ideal when working with structured data objects that define hierarchical relationships.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/radiallayout-cs1" %}


>Note: When converting a data source into a radial layout, inject both DataBinding and RadialTree modules in the diagram component.


## Radial Tree with Nodes and Connectors

For scenarios requiring manual control over node creation and positioning, the radial tree layout can be applied to explicitly defined nodes and connectors. This approach offers greater flexibility for custom node styling and specific layout requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/radiallayout-cs1" %}
 

>Note: To use radial tree layout functionality, inject the RadialTree module in the diagram component.

![Radial tree](images/RadialTree.png)