---
layout: post
title: Hierarchical tree layout in React Diagram component | Syncfusion
description: Learn here all about Hierarchical tree layout in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Hierarchical tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical tree layout in React Diagram control

The hierarchical tree layout arranges nodes in a tree-like structure, where the nodes in the hierarchical layout may have multiple parents. There is no need to specify the layout root.

## Hierarchical tree layout with nodes and connectors

To arrange the nodes in a hierarchical structure, specify the layout [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout/#type) as **HierarchicalTree**. The following example shows how to arrange the nodes in a hierarchical structure.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1" %}

>Note: If you want to use hierarchical tree layout in diagram, you need to inject HierarchicalTree in the diagram.

## Hierarchical layout with DataSource

You can create a hierarchical layout with data Source. The following code demonstrates how to render a Hierarchical layout using DataSource.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2" %}


>Note: If you want to convert the data source into layout, you need to inject DataBinding along with HierarchicalTree module in the diagram.

![Hierarchical tree](images/hierarchicalTree.png)
