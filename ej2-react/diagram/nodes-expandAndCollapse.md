---
layout: post
title: Expand and Collapse Nodes in React Diagram | Syncfusion®
description: Show or hide hierarchical children in the React Diagram by configuring expand/collapse icons on parent nodes for interactive tree navigation.
control: Expand and collapse of nodes
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Expand and Collapse Nodes in React Diagram

The React Diagram component provides built-in support for expanding and collapsing nodes, enabling users to create hierarchical views where child nodes can be hidden or shown dynamically. This functionality is particularly useful for organizational charts, mind maps, and tree structures where managing visual complexity is essential.

The expand and collapse feature allows users to:
- Compress hierarchical views to show only root elements.
- Toggle visibility of child nodes interactively.
- Customize the appearance of expand and collapse icons.
- Control the initial state of nodes programmatically.

The following properties control the expand and collapse behavior of nodes:

* **expandIcon** - Defines the icon displayed when a node can be expanded.
* **collapseIcon** - Defines the icon displayed when a node can be collapsed.

N> Icons are only created when the node has outgoing edges (outEdges).

For detailed API information, refer to [`expandIcon`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#expandicon) and [`collapseIcon`] (https://ej2.syncfusion.com/react/documentation/api/diagram/node#collapseicon).

## Customizing expand and collapse icons

### Size and shape configuration

Both `expandIcon` and `collapseIcon` must be defined on a node before its icons can be customized.

Define the size of icons using the [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#height) properties.

The [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#shape) property of expandIcon and collapseIcon allows customization of the icon appearance. The following `shape` values are supported:

* `None`
* `ArrowDown`
* `ArrowUp`
* `ArrowLeft`
* `ArrowRight`
* `Minus`
* `Plus`
* `Template`
* `Path`

The following code example demonstrates how to create icons with various shapes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nExpandAndCollapse-cs1" %}

### Styling and appearance

Customize the visual appearance of icons using the [`borderColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#bordercolor), [`borderWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#borderwidth), and [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#fill) properties.

The corner radius can be set using the [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#cornerRadius) property of the icon.

Icons can be precisely positioned relative to node boundaries using margin, offset, horizontalAlignment, and verticalAlignment settings. While combining all four alignment properties provides maximum control, it requires careful consideration of their interactions.

For example, to align an icon to the right with a small margin:

```
expandIcon: { shape: 'ArrowDown', width: 20, height: 15, horizontalAlignment: 'Right', margin: { left: 5 } }
```

The [`iconColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#iconcolor) property can be used to set the icon's stroke/foreground color.

The following code example illustrates the customization of icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nExpandAndCollapse-cs2" %}

## Managing node expansion state

The [`isExpanded`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#isexpanded) property controls whether a node displays its child nodes. **Default value:** `true`. When set to `true`, child nodes are visible; when `false`, they are hidden.

The following example demonstrates how to configure the expansion state of nodes:

```
import { NodeModel } from '@syncfusion/ej2-react-diagrams';

let node: NodeModel = {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        //Expand state of node
        isExpanded: false,
        expandIcon: {shape: 'ArrowDown',   width: 20,
        height: 15},
        collapseIcon: {shape: 'ArrowUp',  width: 20,
        height: 15}
    }
```
