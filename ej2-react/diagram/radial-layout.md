---
layout: post
title: Radial tree layout in React Diagram component | Syncfusion
description: Learn here all about Radial tree layout in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Radial tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Radial tree layout in React Diagram control

A Radial tree layout is a diagram that presents information in a hierarchical structure, with a central node at the core of the diagram. The central node represents the main concept or topic, and branches extend outward in a radial fashion, creating a tree-like structure. The layout [`root`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#root) property can be used to define the root node of the layout. When no root node is set, the algorithm automatically considers the node without any incoming edges (InEdges connector count of 0) as the root node. To create radial tree, the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#type) of the layout as `RadialTree`.

The RadialTree layout provides support for adding space between the nodes. The [`HorizontalSpacing`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutModel/#horizontalspacing )and [`VerticalSpacing`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutModel/#verticalspacing) properties of the layout allow you to set the space between the nodes. The arrangement results in an ever-expanding concentric arrangement with radial proximity to the root node indicating the node level in the hierarchy.


## Radial tree with DataSource

You can create a radial tree layout with DataSource. The following code example illustrates how to create a radial tree layout using a data source.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/radiallayout-cs1" %}


>Note: If you want to convert the data source into layout, you need to inject DataBinding along with RadialTree module in the diagram.


## Radial tree with nodes and connectors

You can render a radial tree layout without using DataSource. The following code demonstrates how to render a radial tree layout without using data source.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/radiallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/radiallayout-cs1" %}
 

>Note: If you want to use radial tree layout in diagram, you need to inject RadialTree in the diagram.

![Radial tree](images/RadialTree.png)