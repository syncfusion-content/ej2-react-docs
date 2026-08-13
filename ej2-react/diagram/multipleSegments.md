---
layout: post
title: Multiple Segments in React Diagram | Syncfusion®
description: Chain multiple Straight, Orthogonal, or Bezier segments together in the React Diagram to route connectors around obstacles with custom paths.
control: Multiple segments 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Segments for Connectors
Connectors in the React Diagram component can be composed of multiple segments to create complex routing paths between nodes. Multiple segments allow you to define precise connection routes that navigate around obstacles or follow specific pathways in your diagram layout.

## Understanding connector segments
A connector segment represents a portion of the connector's path. By combining multiple segments, you can create connectors that change direction multiple times, forming L-shape and Z-shape connectors, or more complex routing patterns. Each segment can have different properties and behaviors depending on the segment type used.

## Create multiple segments
Multiple segments can be defined sequentially to form a complete connector path. To create a connector with multiple segments, define and add the segments to the [`segments`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#segments) collection.
The following example demonstrates how to create a connector with multiple segments that forms a custom routing path:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5multipleSegment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5multipleSegment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5multipleSegment-cs1" %}

## Undo/Redo support for connector segments

The Diagram control provides comprehensive undo and redo functionality for all connector segment operations. You can revert or reapply changes programmatically using the [`undo`](https://ej2.syncfusion.com/react/documentation/api/diagram#undo) and [`redo`](https://ej2.syncfusion.com/react/documentation/api/diagram#redo) methods. This includes reversible actions such as dragging, resizing, and rotating source or target nodes, as well as modifying segment points and endpoints.

Key undo/redo capabilities include:

* Modifying and adjusting segment points.
* Changing connector endpoints between nodes or ports.
* Adding, removing, or reordering segments.
* Performing node operations that affect connected segments.

This functionality ensures consistent editing behavior across all connector types and interactions, enabling users to experiment with complex routing configurations while retaining the ability to revert changes.

The following example demonstrates undo and redo functionality for connector segments:


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/connectors-segundo/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/connectors-segundo/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/connectors/connectors-segundo" %}

## See also

* [Connector Straight](connector-straight)
* [Connector Orthogonal](connector-orthogonal)
* [Connector Bezier](connector-bezier)
