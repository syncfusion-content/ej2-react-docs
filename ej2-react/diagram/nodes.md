---
layout: post
title: Nodes in React Diagram component | Syncfusion
description: Learn here all about Nodes in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in React Diagram component

Nodes are graphical objects used to visually represent the geometrical information, process flow, internal business procedure, entity, or any other kind of data.

![Node](images/node.png)

<!-- markdownlint-disable MD033 -->

## Create node

A node can be created and added to the diagram, either programmatically or interactively. Nodes are stacked on the diagram area from bottom to top in the order they are added.

## Add node through nodes collection

To create a node, define the [`node`](https://ej2.syncfusion.com/react/documentation/api/diagram/node) object and add that to nodes collection of the diagram model. The following code example illustrates how to add a node to the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Node-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Node-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Node-cs7" %}

## Add/Remove node at runtime

* Nodes can be added at runtime by using public method, add and can be removed at runtime by using public method,
remove. On adding node at runtime, the nodes collection is changed and the [`collectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#collectionChange--emittypecollectionchangeeventargs) event will trigger.

* The node’s ID property is used to define the name of the node and its further used to find the node at runtime and do any customization.

The following code illustrates how to add a node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5run-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5run-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5run-cs1" %}

## Add node from palette

Nodes can be predefined and added to the palette, and can be dropped into the diagram when needed. For more information
about adding nodes from symbol palette, refer to [`Symbol Palette`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel).

* Once you drag a node/connector from the palette to the diagram, the following events can be used to do your customization.
* When a symbol is dragged into diagram from symbol palette, the [`dragEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragEnter--emittypeidragentereventargs>) event gets triggered.
* When a symbol is dragged over diagram, the [`dragOver`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragOver--emittypeidragovereventargs>) event gets triggered.
* When a symbol is dragged and dropped from symbol palette to diagram area, the [`drop`](https://ej2.syncfusion.com/react/documentation/api/diagram#drop--emittypeidropeventargs>) event gets triggered.
* When a symbol is dragged outside of the diagram, the [`dragLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram#dragLeave--emittypeidragleaveeventargs>) event gets triggered.

## Create node through data source

Nodes can be generated automatically with the information provided through data source. The default properties for
these nodes are fetched from default settings. For more information about data source, refer to Data Binding.

## Draw nodes

Nodes can be interactively drawn by clicking and dragging the diagram surface by using `NodeDrawingTool`. For more
information about drawing nodes, refer to Draw Nodes.

## Position

* Position of a node is controlled by using its [`offsetX`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#offsetX-number) and [`offsetY`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#offsetY-number) properties. By default, these offset properties represent the distance between the origin of the diagram’s page and node’s center point.

* You may expect this offset values to represent the distance between page origin and node’s top-left corner instead of center. The Pivot property helps to solve this problem. Default value of node’s [`pivot`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#pivot--pointmodel) point is (0.5, 0.5), that means center of the node.

* The size of the node can be controlled by using its [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#width-number) and
[`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#height-number) properties.

* Rotation of a node is controlled by using its [`rotateAngle`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#rotateAngle-number) property.

The following table illustrates how pivot relates offset values with node boundaries.

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node’s center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |

The following code illustrates how to change the `pivot` value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5position-cs1" %}

## Flip

The diagram Provides support to flip the node. [`flip`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#flip) is performed to
give the mirrored image of the original element.
The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) is used to change the element in horizontal direction.

* VerticalFlip
[`Vertical`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) is used to change the element in vertical direction

* Both
[`Both`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) which involves both vertical and horizontal changes of the element.

The following code illustrates how to provide the mirror image of the original element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5position-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5position-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5position-cs2" %}

>Note: The flip is also applicable for group and BPMN shapes.

## Appearance

* The appearance of a node can be customized by changing its [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#fill-string) color, [`borderColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#borderColor-string), [`borderWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#borderWidth-number), [`strokeDashArray`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#strokeDashArray-number),
[`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#opacity-number), and [`shadow`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#shadow-number).

* The [`visible`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#visible-boolean) property of the node enables or disables the visibility of the node.

The following code illustrates how to customize the appearance of the shape.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Appear-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Appear-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Appear-cs1" %}

## Gradient

The [`gradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#gradient-gradientmodel) property of the node allows you to define and apply the gradient effect to that node.

The gradient stop property defines the color and a position, where the previous color transition ends and a new color transition starts.

The gradient stop’s opacity property defines the transparency level of the region.

There are two types of gradients as follows:

* Linear gradient

* Radial gradient

## Linear gradient

* [`LinearGradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#linearGradient-lineargradientmodel) defines a smooth transition between a set of colors (so-called stops) on a line.

* A linear gradient’s x1, y1, x2, y2 properties are used to define the position (relative to the node) of the rectangular region that needs to be painted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Gradient-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Gradient-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Gradient-cs1" %}

## Radial gradient

* [`RadialGradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#radialGradient-radialgradientmodel) defines a smooth transition between stops on a circle.

* A radial gradient’s cx, cy, fx, fy properties are used to define the position (relative to the node) of the outermost or the innermost circle of the radial gradient.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Gradient-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Gradient-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Gradient-cs2" %}

## Shadow

Diagram provides support to add [`shadow`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#shadow-shadowmodel) effect to a node that is disabled, by default. It can be enabled with the
constraints property of the node. The following code illustrates how to drop shadow.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5shadow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5shadow-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5shadow-cs1" %}

## Customizing shadow

The angle, distance, and opacity of the shadow can be customized with the shadow property of the node. The following code example illustrates how to customize shadow.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5shadow2-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5shadow2-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5shadow2-cs1" %}

## Icon

Diagram provides support to describe the state of the node. i.e., the node is expanded or collapsed state.

>Note: Icon can be created only when the node has outEdges.

* To explore the properties of expand and collapse icon, refer to [`expandIcon`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#expandIcon-iconshapemodel) and [`collapseIcon`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#collapseIcon-iconshapemodel).

* The expandIcon’s and collapseIcon’s shape properties allow to define the shape of the icon.

The following code example illustrates how to create an icon of various shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Icon-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Icon-cs1" %}

## Customizing expand icon

* Set the borderColor, borderWidth, and background color for an expandIcon using borderColor, borderWidth, and fill properties.

* Set a size for an expandIcon by using width and height properties.

* The expand icon can be aligned relative to the node boundaries. It has margin, offset, horizontalAlignment, and verticalAlignment settings. It is quite tricky, when all four alignments are used together but gives you more control over alignment.

* The [`iconColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#iconColor-string) property can be used to set the strokeColor of the Icon.


## Customizing collapse icon

* Set the [`borderColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#borderColor-string),
[`borderWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#borderWidth-number), background color for an collapseIcon using borderColor, borderWidth, and [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#fill-string) properties.

* Set a size for collapseIcon by using [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#width-number) and
[`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#height-number) properties.

* Like expand icon, collapse icon also can be aligned relative to the node boundaries. It has margin, offset, horizontalAlignment, and verticalAlignment settings. It is quite tricky, when all four alignments are used together but gives you more control over alignment.

* The [`iconColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel#iconColor-string) property can be used to set the strokeColor of the Icon.

## Interaction

Diagram provides support to drag, resize, or rotate the node interactively. For more information about editing a node at runtime, refer to Edit Nodes.

## Constraints

The constraints property of the node allows you to enable/disable certain features. For more information about node constraints, refer to [`Node Constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/node#constraints-nodeconstraints).

## Custom properties

The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram#addInfo-object) property of the node allows to maintain additional information to the node.

## Stack order

The nodes z-order property specifies the stack order of the node. A node with greater stack order is always in front of a node with a lower stack order.

## Data flow

Node has the InEdges and OutEdges read-only property. In this property, you can find what are all the connectors that are connected to the node, and then you can find these connectors by using the [`getObject`](https://ej2.syncfusion.com/react/documentation/api/diagram#getObject) method in the diagram.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
let node: NodeModel[] = [{
    id: 'node1',
    // Position of the node
    offsetX: 450,
    offsetY: 100,
    // Size of the node
    width: 80,
    height: 50,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    },
    {
    id: 'node2',
    // Position of the node
    offsetX: 350,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
        },
    },
    {
    id: 'node3',
    // Position of the node
    offsetX: 450,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
        },
    },
    {
    id: 'node4',
    // Position of the node
    offsetX: 550,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
        },
}];
let connector: ConnectorModel[] = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Orthogonal'
    },
    {
    id: 'connector2',
    sourceID: 'node1',
    targetID: 'node3',
    type: 'Orthogonal'
    },
    {
    id: 'connector3',
    sourceID: 'node1',
    targetID: 'node4',
    type: 'Orthogonal'
    }];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      connectors = {connector}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

## See Also

* [How to add annotations to the node](./labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to edit the node visual interface](./interaction#selection)
* [How to create diagram nodes using drawing tools](./tools)
