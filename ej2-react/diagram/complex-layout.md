---
layout: post
title: Complex Hierarchical Tree Layout in React Diagram | Syncfusion®
description: Use the ComplexHierarchicalTree layout in the React Diagram to arrange nodes with multiple parents for matrix organizations and dotted-line reporting.
control: Complex hierarchical tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Complex Hierarchical Tree Layout in React Diagram

Complex hierarchical tree layout arranges nodes in a tree-like structure where child nodes can have multiple parent nodes, creating interconnected relationships beyond traditional single-parent hierarchies. This layout type is ideal for organizational charts with dotted-line relationships, project dependencies, or any structure where entities report to multiple authorities. This layout extends the standard hierarchical tree layout to support these complex relationships.

To create a complex hierarchical tree, set the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#type) property of layout to **ComplexHierarchicalTree**.

N> To render the complex hierarchical tree layout, you must inject the `ComplexHierarchicalTree` module into the `DiagramComponent` by adding `<Inject services={[ComplexHierarchicalTree]} />` inside the component.

## Complex Hierarchical Tree Layout with Nodes and Connectors

This example demonstrates how to create a complex hierarchical tree layout by manually defining nodes and connectors. The layout automatically positions nodes based on their hierarchical relationships while handling multiple parent-child connections.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/complexhiertree-cs1" %}


## Complex Hierarchical Tree Layout with DataSource

When working with large datasets, binding the layout to a data source provides better maintainability and dynamic content management. The following example shows how to create a complex hierarchical tree using a data source configuration.

N> In the data source, entries that do not reference any other node are treated as root nodes. To define multiple root nodes, add more such top-level entries as shown below.

```
[
  { "id": "root1", "name": "CEO" },
  { "id": "root2", "name": "CTO" },
  { "id": "node1", "name": "Manager A","parent": ["root1", "root2"] }
]
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/complexhiertree-cs2" %}


![Complex hierarchical tree layout](images/complex-2.png)

N> In Diagram layouts, all root nodes will always render at the same level. This default behavior cannot be changed to render different trees at distinct levels.


## Line Distribution

Line distribution prevents connector overlap by controlling how multiple connectors from a single parent node are positioned. Without line distribution, connectors may overlap and create visual confusion in complex layouts. The [`connectionPointOrigin`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#connectionpointorigin) property of layout is used to enable or disable the line distribution in layout.

The `connectionPointOrigin` property accepts the following values:

- **SamePoint** (default): Connectors connect at the same point in the layout.
- **DifferentPoint**: Connectors connect at different points in the layout.

The following code example illustrates how to create a complex hierarchical tree with line distribution.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/complexhiertree-cs3" %}


N> If you want to use line distribution in diagram layout, you need to inject the `LineDistribution` module by adding `<Inject services={[LineDistribution]} />` inside the `DiagramComponent`.

![Different point](images/complex-diffPoint.png)


## Linear Arrangement

Linear arrangement is used to linearly arrange the child nodes in layout, which means the parent node is placed in the center corresponding to its children. Use the [`arrangement`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#arrangement) property to control this feature:

The `arrangement` property accepts the following values:

- **Nonlinear** (default): Child nodes are arranged based on available space.
- **Linear**: Child nodes are arranged in a straight line with the parent centered.

When line distribution is enabled, linear arrangement is also activated by default.

N> If you want to use linear arrangement in the diagram layout, you need to inject the `LineDistribution` module. Linear arrangement is applicable only to the complex hierarchical tree layout.

The following code illustrates how to allow a linear arrangement in diagram layout.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/complexhiertree-cs4" %}


## Enable Routing for Layout

In complex diagrams with intricate parent-child relationships, connectors may pass through or overlap with nodes, making the diagram difficult to read. Routing functionality automatically calculates connector paths that avoid intersecting with nodes and other obstacles.

Set the [`enableRouting`](https://ej2.syncfusion.com/react/documentation/api/diagram/layoutmodel#enablerouting) property to **true** to activate intelligent connector routing.

The following example shows how to enable routing in the layout:


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/complexhiertree-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/complexhiertree-cs5" %}

## Best Practices

- Use data source binding for dynamic content and better maintainability.
- Enable line distribution when dealing with nodes that have multiple connections.
- Consider enabling routing for complex layouts to improve visual clarity.
- Test layout performance with large datasets and optimize as needed.
- Ensure proper module injection for advanced features like line distribution.

## Troubleshooting

| Issue | Possible Cause | Suggested Fix |
|-------|----------------|---------------|
| Layout is not applied to the diagram | Required layout module (for example, `ComplexHierarchicalTree`) is not injected. | Add `<Inject services={[ComplexHierarchicalTree]} />` inside the `DiagramComponent`. |
| Connectors overlap or render at the same point | `connectionPointOrigin` is set to **SamePoint** (default) with multiple connectors. | Set `connectionPointOrigin: ConnectionPointOrigin.DifferentPoint` in the layout configuration. |
| Linear arrangement has no effect | `LineDistribution` module is not injected. | Add `<Inject services={[LineDistribution]} />` inside the `DiagramComponent`. |
| Connectors pass through other nodes | Routing is disabled. | Set `enableRouting: true` in the layout configuration. |
| Nodes are not arranged hierarchically when using a data source | Data entries are not correctly linked via the parent reference. | Ensure each non-root node references the `id` of its parent in the configured field. |