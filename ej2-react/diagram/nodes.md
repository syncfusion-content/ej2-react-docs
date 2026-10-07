---
layout: post
title: Nodes in React Diagram | Syncfusion®
description: Create diagram nodes in the React Diagram by defining shape, size, position, and unique IDs and adding them to the nodes collection.
control: Nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in React Diagram

Nodes are graphical objects that visually represent entities, processes, data flow, or any business logic within diagrams. They serve as the fundamental building blocks for creating flowcharts, organizational charts, network diagrams, and other visual representations. Each node can be customized with different shapes, sizes, colors, and interactive behaviors to suit specific diagram requirements.

![Node](images/node.png)

<!-- markdownlint-disable MD033 -->

## Prerequisites

Before working with nodes, ensure the diagram package is installed and the required modules are imported:

1. Install the diagram package: `npm install @syncfusion/ej2-react-diagrams`.
2. Import `DiagramComponent` (and the required modules) from `@syncfusion/ej2-react-diagrams` in your component.
3. For the initial project setup, refer to the [Getting Started](./getting-started) topic.

## Node Fundamentals

Before creating nodes, understanding their core properties helps in effective diagram development:

- **Position**: Defined by `offsetX` and `offsetY` properties for precise placement.
- **Size**: Controlled through `width` and `height` properties.
- **Identification**: Each node requires a unique `id` for runtime operations.
- **Stacking**: Nodes are layered from bottom to top based on addition order.

## Creating Nodes

### Add Nodes through Nodes Collection

To create a node, define the [`node`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#node) object and add it to the [`nodes`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeModel) collection of the diagram model. The [`id`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#id) property serves as the unique identifier for runtime operations and customization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs1" %}

N> Node IDs must begin with a letter and be unique across all shapes and connectors.

### Create Node from Data Source

Nodes can be generated automatically using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/diagram#datasource) property. Default properties for these nodes are retrieved from [`getNodeDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram#getnodedefaults) settings, and default properties for connectors are retrieved from [`getConnectorDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram#getconnectordefaults). For detailed information about data binding, refer to [`Data Binding`](./data-binding).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs5" %}

### Add Nodes from Symbol Palette

Nodes can be predefined in a symbol palette and dragged into the diagram as needed. This approach provides users with a library of reusable components. For comprehensive guidance on symbol palette integration, refer to  [`Symbol Palette`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs4" %}


### Draw Nodes Interactively

To enable interactive node drawing, activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](https://ej2.syncfusion.com/react/documentation/api/diagram#tool) property and configure the node template using the [`drawingObject`](https://ej2.syncfusion.com/react/documentation/api/diagram#drawingobject) property. The `DrawOnce` tool deactivates after a single node is drawn, while `ContinuousDraw` keeps the tool active for repeated drawing.

The following code example illustrates how to draw a rectangle at runtime using the `ContinuousDraw` tool.

N> The `drawingObject` and `tool` properties must be set within the `created` event or after the diagram is initialized to ensure the drawing tool is active.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs6" %}

## Runtime Node Operations

### Add and Remove Individual Nodes

Nodes can be dynamically added using the [`add`](https://ej2.syncfusion.com/react/documentation/api/diagram#add) method and removed using the [`remove`](https://ej2.syncfusion.com/react/documentation/api/diagram#remove) method. Both operations trigger the [`collectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#collectionchange) event, allowing for custom handling of diagram modifications.

The following code illustrates how to add a node and remove an existing node at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs2" %}

### Add Multiple Nodes Simultaneously

Collections of nodes can be efficiently added using the [`addElements`](https://ej2.syncfusion.com/react/documentation/api/diagram#addelements) method. This approach is optimal for bulk operations and triggers the `collectionChange` event for each added element.

The following code illustrates how to add nodes collection at run time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs3" %}




### Update Node Properties

Node properties can be modified at runtime with immediate visual updates. Changes take effect instantly, allowing for dynamic diagram manipulation based on user interactions or data updates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs7" %}

N> Call the [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/diagram#databind) method after property updates to ensure immediate reflection of changes.

### Clone Node at Runtime

Node cloning creates new instances with identical properties and attributes. Use the [`copy`](https://ej2.syncfusion.com/react/documentation/api/diagram#copy) and [`paste`](https://ej2.syncfusion.com/react/documentation/api/diagram#paste) methods to duplicate existing nodes programmatically.

The following code example illustrates how to clone a node at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs8" %}

## Advanced Node Integration

### Import Nodes from External Components

Custom [`dragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragenter) functionality enables conversion of elements from other components, such as tree views, into diagram nodes based on the dragged element's data properties.

## See Also

* [How to add annotations to the node.](./labels)
* [How to add ports to the node.](./ports)
* [How to enable/disable the behavior of the node.](./constraints)
* [How to add nodes to the symbol palette.](./symbol-palette)
* [How to edit the node visual interface.](./interaction#selection)
* [How to create diagram nodes using drawing tools.](./tools)
