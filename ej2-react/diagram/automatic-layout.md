---
layout: post
title: Automatic Layout in React Diagram | Syncfusion®
description: Automatically arrange nodes in the React Diagram using built-in hierarchical, organizational, flowchart, mind map, radial, and symmetric layouts.
control: Automatic layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Automatic Layout in React Diagram

The Diagram component provides comprehensive support for automatically arranging nodes in the diagram area through various layout algorithms. These automatic layouts help organize complex diagrams by positioning nodes and connectors according to predefined patterns and relationships, eliminating the need for manual positioning. To enable automatic layout in the React Diagram component, configure the `layout` property of the diagram.

```
<DiagramComponent id="diagram" layout={{ type: 'HierarchicalTree' }} />
```

## Layout Modes
The Diagram component supports multiple layout algorithms, each designed for specific use cases and data structures. Each layout mode provides unique positioning strategies and configuration options.

* [Hierarchical layout](./hierarchical-layout)
* [Complex hierarchical tree layout](./complex-layout)
* [Organization chart](./org-chart)
* [Flowchart layout](./flowchart-layout)
* [Mind map layout](./mindmap-layout)
* [Radial tree layout](./radial-layout)
* [Symmetric layout](./symmetric-layout)

## See also

* [How to create a node](./nodes)
* [How to create a connector](./connectors)
* [How to inject modules into the diagram](./module-injection)
* [How to customize the layout](./layout-customization)
