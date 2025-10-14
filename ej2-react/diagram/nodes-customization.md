---
layout: post
title: Appearence of a nodes in React Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Appearence of nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance of Nodes in React Diagram Component

To customize the appearance and position of nodes in the React Diagram component, refer to the video link below.

{% youtube "https://www.youtube.com/watch?v=pn02S_rwupw" %}

## Common values to the node.
The [`getNodeDefaults`](https://ej2.syncfusion.com/react/documentation/api/diagram/#getnodedefaults) property in the React Diagram control allows you to define default settings that apply to all nodes based on specific conditions or requirements. This approach ensures consistency across your diagram and reduces repetitive code.

The following code example shows how to use the getNodeDefaults function to apply common styling to all nodes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs1" %}

N> The value we set in the getNodeDefaults has the higher priority in rendering.

## Appearance

### Apply style to nodes

The appearance of a node can be customized by changing its [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#fill) color, [`strokeDashArray`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#strokedasharray), ['strokeWidth'](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#strokewidth), ['strokeColor'](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#strokecolor) and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#opacity). The [`visible`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#visible) property of the node enables or disables the visibility of the node.
 
The following code illustrates how to customize the appearance of nodes using style properties:
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs2" %}

### Apply gradient style to nodes
 
The [`gradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/gradientModel/) property of the node allows you to define and apply gradient effects to create visually appealing nodes with smooth color transitions.

The gradient stop property defines the color and position where the previous color transition ends and a new color transition starts. The gradient stop's opacity property defines the transparency level of the region.

There are two types of gradients available:

* Linear gradient
* Radial gradient

#### Linear gradient
 
* [`LinearGradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/lineargradientmodel/) defines a smooth transition between a set of colors (called stops) along a straight line. This is ideal for creating directional color effects on nodes.

A linear gradient's x1, y1, x2, y2 properties are used to define the position (relative to the node) of the rectangular region that needs to be painted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs3" %}
 
#### Radial gradient

* [`RadialGradient`](https://ej2.syncfusion.com/react/documentation/api/diagram/radialGradientModel/) defines a smooth transition between stops that radiates from a central point in a circular pattern. This creates a spotlight or glow effect on nodes.

A radial gradient's cx, cy, fx, fy properties are used to define the position (relative to the node) of the outermost or innermost circle of the radial gradient.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs4" %}

## Customize the style of node selector

### Customize the style of main node selector indicator

In the diagram, multiple nodes can be selected simultaneously. When selecting multiple nodes, a highlighter renders to indicate the selection of each node. The border style of the first node in the multiple selection can be customized using the CSS class name [`e-diagram-first-selection-indicator`].

Use the following CSS to customize the style of the main node during multiple selection:

```css

 .e-diagram-first-selection-indicator{
   stroke-width: 5px;
   stroke: red;
   stroke-dasharray: 1,1;
  } 

```

## Apply rotate angle and corner radius to nodes

Node appearance can be enhanced using rotation and corner radius properties:

- **Rotate angle**: The [`rotateAngle`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#rotateangle)property allows you to rotate nodes within the diagram. This is particularly useful when you want to represent nodes from different perspectives or angles to match your design requirements.

- **Corner radius**: The [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/basicShapeModel/#cornerradius) property allows you to round the corners of rectangular nodes in the diagram. It adds a visual styling effect to the nodes, making them appear softer and more polished.

The following code shows how to set the rotate angle and corner radius for nodes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs5" %}

## Apply shadow effect to nodes
 
Diagram provides support to add [`shadow`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#shadow) effects to nodes, which is disabled by default. Shadow effects can be enabled using the constraints property of the node to create depth and visual hierarchy in your diagrams.

The following code illustrates how to apply shadow effects to nodes:
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs6" %}
 
### Customizing shadow effects
 
The [`angle`](https://ej2.syncfusion.com/react/documentation/api/diagram/shadowModel/#angle), [`distance`](https://ej2.syncfusion.com/react/documentation/api/diagram/shadowModel/#distance), and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/shadowModel/#opacity) of the shadow can be customized using the `shadow` property of the node. These properties allow you to control the direction, positioning, and transparency of the shadow effect.

The following code example illustrates how to customize shadow properties:
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs7" %}

## Provide additional information to the node

The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#addinfo) property of the node allows you to maintain additional information with the node. You can specify either object or string values to store custom data that can be retrieved and used in your application logic.

The following code shows how to set the addInfo value:

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let addInfo: any = { type: 'Node', info: 'Rectangle Node' };
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    //Additional informations about the node.
    addInfo: addInfo,
    // Size of the node
    width: 100,
    height: 100,
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={node}
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

## Constraints

The [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#constraints) property of the node allows you to enable or disable certain behaviors of the node. This provides fine-grained control over node interactions and capabilities. For more information about node constraints, refer to the [`Node Constraints`](./constraints#node-constraints) documentation.

## Stack order

The [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#zindex) property of nodes specifies the stack order of the node. A node with a greater stack order is always rendered in front of a node with a lower stack order, allowing you to control the layering of overlapping elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nCustomization-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs8" %}

N> By default, the zIndex will be generated automatically based on the order of the diagram elements added to the diagram. The default value will be Number.MIN_VALUE.

## Pivot

Node rotation angle will be based on [`Pivot`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#pivot) values which range from 0 to 1, similar to offset values. By default, the pivot values are set to X = 0.5 and Y = 0.5, meaning rotation occurs around the center of the node.

The following table illustrates how pivot relates to offset values with node boundaries:

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node’s center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |
 
The following code illustrates how to change the `pivot` value.
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nPositioning-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nPositioning-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nPositioning-cs1" %}

## Get connected connector from node

Node has the inEdges and outEdges read-only properties. These properties allow you to identify all connectors that are connected to the node. You can then retrieve these connectors using the [`getObject`](https://ej2.syncfusion.com/react/documentation/api/diagram/#getobject) method in the diagram.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    ConnectorModel,
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    },
    {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 300,
        shape: {
            type: 'Flow',
            shape: 'Process'
        },
        annotations: [{
            content: 'var i = 0;'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    // Name of the connector
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    // ID of the source and target nodes
    sourceID: "Start",
    targetID: "Init",
    connectorSpacing: 7,
    type: 'Orthogonal'
}];
function App() {
    return (
        <DiagramComponent id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width = {
            '100%'
        }
        height = {
            '600px'
        }
        nodes = {
            nodes
        }
        connectors = {
            connectors
        }
        />
        diagramInstance.getObject(diagramInstance.nodes[0].outEdges[0]);
    )}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```
