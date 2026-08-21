---
layout: post
title: Hierarchical Tree Layout in React Diagram | Syncfusion®
description: Apply the Hierarchical Tree layout in the React Diagram to auto-arrange parent-child nodes from manual data or a data source for matrix-style orgs.
control: Hierarchical tree layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical Tree Layout in React Diagram

The hierarchical tree layout arranges nodes in a clear parent-child structure. It is suitable for organizational charts, directory structures, and similar hierarchies. The relationship between nodes is defined through connectors or data source fields such as `parentId`, so an explicit root node is not required.

**Hierarchical Tree Layout Output:**

![Hierarchical tree layout showing nodes arranged in a single parent-child hierarchy](images/hierarchicalTree.png)

## Hierarchical Tree Layout with Nodes and Connectors

To arrange nodes in a hierarchical structure, specify the layout [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/layout#type) as **HierarchicalTree**. This approach provides full control over node and connector definitions while leveraging automatic positioning.

N> Before proceeding, ensure that the `@syncfusion/ej2-react-diagrams` package is installed and that the `DiagramComponent`, `Inject` (from `@syncfusion/ej2-react-diagrams`), and the required layout modules are imported in your project.

N> The **HierarchicalTree** module must be injected into the diagram using the `Inject` component, for example: `<Inject services={[HierarchicalTree]} />`. Without this injection, the hierarchical tree layout will not be applied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs1" %}

## Hierarchical Layout with DataSource

For data-driven scenarios, hierarchical layout can be created using a DataSource, which automatically generates nodes and connectors based on the data relationships. This approach reduces the need to define each node and connector manually, making it well suited for larger datasets that may change over time.

N> When using a DataSource, configure `dataSourceSettings` with the `id` and `parentId` fields so the layout can resolve parent-child relationships. Without these fields, the generated nodes cannot be linked into a hierarchical structure.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout/hierarchicallayout-cs2" %}

N> When using DataSource for layout generation, both DataBinding and HierarchicalTree modules must be injected into the diagram.

## Troubleshooting

If the hierarchical tree layout does not render as expected, check the following common pitfalls:

- **Nodes are not arranged hierarchically or appear overlapping:** Verify that the `HierarchicalTree` module is injected via `Inject` and `layout.type` is set to `"HierarchicalTree"`.
- **Diagram appears blank when using DataSource:** Ensure that `dataSourceSettings` is configured with valid `id` and `parentId` values so the layout can resolve parent-child relationships.
- **Data-driven nodes are not generated:** Confirm that the `DataBinding` module is injected in addition to `HierarchicalTree` when using a DataSource.
- **Connectors are missing between nodes:** Check that connectors are defined (or that `parentId` values resolve correctly in the data source) so the layout can link related nodes.

