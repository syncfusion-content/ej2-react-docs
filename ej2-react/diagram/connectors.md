---
layout: post
title: Connectors in React Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Connectors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in React Diagram component

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector), refer to [`Connector Properties`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector).

## Add connectors through connectors collection

The [`sourcePoint`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourcepoint) and [`targetPoint`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetpoint) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectors-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectors-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectors-cs1" %}

## Add connector at runtime

Connectors can be added at runtime by using public method, `diagram.add` and can be removed at runtime by using public method, `diagram.remove`.

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsatruntime-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsatruntime-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsatruntime-cs1" %}

## Add collection of connectors at runtime

* The collection of connectors can be dynamically added using 'addElements' method.Each time an element is added to the diagram canvas, the 'collectionChange' event will be triggered.

The following code illustrates how to add a connectors collection at runtime.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectoraddatRunTime-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors/es5ConnectoraddatRunTime-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/es5ConnectoraddatRunTime-cs2" %}

## Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

For more information about adding connectors from symbol palette, refer to `Symbol Palette`.

## Draw connectors

Connectors can be interactively drawn by clicking and dragging on the diagram surface by using `drawingObject`.

For more information about drawing connectors, refer to [`Draw Connectors`](https://ej2.syncfusion.com/react/documentation/api/diagram/#drawingobject).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsupdate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsupdate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsupdate-cs1" %}

## Connect nodes

* The [`sourceID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourceid) and [`targetID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetid) properties allow to define the nodes to be connected.
* The [`connectorSpacing`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#connectorSpacing) property allows you to define the distance between the source node and the connector. It is the minimum distance the connector will re-rout or the new segment will create.

* The following code example illustrates how to connect two nodes.

      {% tabs %}
      {% highlight js tabtitle="index.jsx" %}
      {% include code-snippet/diagram/connectors/es5ConnectNode-cs1/app/index.jsx %}
      {% endhighlight %}
      {% highlight ts tabtitle="index.tsx" %}
      {% include code-snippet/diagram/connectors/es5ConnectNode-cs1/app/index.tsx %}
      {% endhighlight %}
      {% endtabs %}

     {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs1" %}

* When you remove NodeConstraints [`InConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 100,
        //Disable InConnect constraints
        constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
    }
];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Connections with ports

The [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourceportid) and [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetportid) properties allow to create connections between some specific points of source/target nodes.
The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsport-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsport-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsport-cs1" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetportid).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsportupdate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsportupdate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsportupdate-cs1" %}

* When you set PortConstraints to [`InConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ConnectorModel,
    NodeModel,
    BasicShapeModel,
    PointPortModel,
    Diagram,
    DiagramComponent,
    PortVisibility
} from "@syncfusion/ej2-react-diagrams";
let port1: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
        }
    port1.shape = 'Circle';
    port1.id = 'nodeportnew';
    //Enable portConstraints Inconnect
    port1.constraints = PortConstraints.InConnect;
let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 150,
        ports: [port1]
    },
];
function App() {
  return (
    <DiagramComponent id="container" width={900} height={900} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

## Segments

The path of the connector is defined with a collection of segments. There are three types of segments.

## Straight

To create a straight line, specify the [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#segments) collection and need to specify [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegments-cs1" %}

The [`point`](https://ej2.syncfusion.com/react/documentation/api/diagram/straightSegment#point) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1" %}

## Orthogonal

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/segments) as orthogonal to create a default orthogonal segment and need to specify [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#type-Segments). The following code example illustrates how to create a default orthogonal segment.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The property [`maxSegmentThumb`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#maxSegmentThumb) is used to limit the segment thumb in the connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1" %}

The [`length`](https://ej2.syncfusion.com/react/documentation/api/diagram/orthogonalSegment) and [`direction`](https://ej2.syncfusion.com/react/documentation/api/diagram/orthogonalSegment) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1" %}

>Note: You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrates how orthogonal segments are re-routed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector has a number of segments in between the source and the target point. The segments are rendered with the default shape rhombus. Now, the option has been provided to change the segment thumb shape using the [`segmentThumbShape`](https://ej2.syncfusion.com/react/documentation/api/diagram#segmentThumbShape-SegmentThumbShapes) property. The predefined shapes provided are as follows:
* Rhombus
* Square
* Rectangle
* Ellipse
* Arrow
* Diamond
* OpenArrow
* Circle
* Fletch
* OpenFetch
* IndentedArrow
* OutdentedArrow
* DoubleArrow

 You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1" %}

![Segment Thumb Shape](./images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

.e-diagram-endpoint-handle {
    fill: rgb(126, 190, 219);
    stroke: #24039e;
    stroke-width: 3px;
   }

```

## Bezier

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](https://ej2.syncfusion.com/react/documentation/api/diagram/segments) is set as `bezier` and need to specify [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default bezier segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezier-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezier-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezier-cs1" %}

The [`point1`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSegment#point1) and [`point2`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSegment#point2) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1" %}

The [`vector1`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSegment#vector1) and [`vector2`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSegment#vector2) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1" %}

## Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,ConnectorModel,ConnectorEditing,ConnectorConstraints
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let nodes: NodeModel[] = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }]
},
{
    id: 'End',
    offsetX: 450,
    offsetY: 200,
    annotations: [{ content: 'End' }]
}];
let connectors: ConnectorModel[] = [{
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: { shape: 'None' },
    // ID of the source and target nodes
    sourceID: "Start",
    targetID: "End",
    type: 'Bezier'
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.constraints =
          ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

Also, the intermediate point of two adjacent bezier segments can be edited interactively based on the bezierSettings.segmentEditOrientation property of the connector class.

### How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings.smoothness property of the connector class.

| BezierSmoothness value | Description |
|-------- | -------- |
| SymmetricDistance| Both control points of adjacent segments will be at the same distance when any one of them is editing. |
| SymmetricAngle | Both control points of adjacent segments will be at the same angle when any one of them is editing. |
| Default | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. |
| None | Segment’s control points are interacted independently from each other. |

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,ConnectorModel,ConnectorEditing,ConnectorConstraints
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let nodes: NodeModel[] = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }],
    ports: [{
        id: 'StartPort',
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 1, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
},
{
    id: 'End',
    offsetX: 450,
    offsetY: 200,
    annotations: [{ content: 'End' }],
    ports: [{
        id: 'EndPort',
        visibility: PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 0, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
}];
let connectors: ConnectorModel[] = [{
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: { shape: 'None' },
    // ID of the source and target nodes
    sourceID: "Start",
    sourcePortID: "StartPort",
    targetID: "End",
    targetPortID: "EndPort",
    type: 'Bezier',

    // Configuring settings for bezier interactions
    bezierSettings = { smoothness: BezierSmoothness.SymmetricAngle }
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.constraints =
          ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

Also, the visibility of control points can be controlled using the bezierSettings.controlPointsVisibility property of the connector class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1" %}

## Decorator

* Starting and ending points of a connector can be decorated with some customizable shapes like arrows, circles, diamond, or path. The connection end points can be decorated with the [`sourceDecorator`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourcedecorator) and [`targetDecorator`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetdecorator) properties of the connector.

* The [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/decoratorShapes) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the [shape](https://ej2.syncfusion.com/react/documentation/api/diagram/decoratorShapes) property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use [`pathData`](https://ej2.syncfusion.com/react/documentation/api/diagram/decorator#pathdata) property. Similarly, to create custom shape for target decorator, use [`pathData`](https://ej2.syncfusion.com/react/documentation/api/diagram/decorator#pathData) property.

* The following code example illustrates how to create decorators of various shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsDecorator-cs1" %}

## Padding

Padding is used to leave the space between the Connector's end point and the object to where it is connected.

* The [`sourcePadding`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourcepadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetpadding) property of connector defines space between the end point and the target node of the connector.

* The following code example illustrates how to leave space between the connection end points and source and target nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs2" %}

## Hit padding

* The [`hitPadding`](../api/diagram/connector#hitpadding) property enables you to define the clickable area around the connector path.The default value for hitPadding is 10.

* The following code example illustrates how to specify hit padding for connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorHitPadding-cs1" %}

## Flip

The diagram Provides support to flip the connector. The [`flip`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#flip) is performed to give the mirrored image of the original element.
The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) is used to interchange the connector source and target x points.

* VerticalFlip
[`Vertical`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) is used to interchange the connector source and target y points.

* Both
[`Both`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection) is used to interchange the source point as target point and target point as source point

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs3" %}

 >Note: The flip is not applicable when the connectors connect in nodes

## Bridging

Line bridging creates a bridge for lines to smartly cross over the other lines, at points of intersection. By default, [`bridgeDirection`](https://ej2.syncfusion.com/react/documentation/api/diagram#bridgeDirection) is set to top. Depending upon the direction given bridging direction appears.
Bridging can be enabled/disabled either with the `connector.constraints` or `diagram.constraints`. The following code example illustrates how to enable line bridging.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBridging-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBridging-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBridging-cs1" %}
>Note: You need to inject connector bridging module into the diagram.

The [`bridgeSpace`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#bridgespace-number) property of connectors can be used to define the width for line bridging.

Limitation: Bezier segments do not support bridging.

## Corner radius

Corner radius allows to create connectors with rounded corners. The radius of the rounded corner is set with the [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#cornerradius) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsCornerRadius-cs1" %}

## Appearance

* The connector’s [`strokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokewidth), [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokecolor), [`strokeDashArray`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokedasharray), and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#opacity) properties are used to customize the appearance of the connector segments.

* The [`visible`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#visible-boolean) property of the connector enables or disables the visibility of connector.

* Default values for all the `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

## Segment appearance

The following code example illustrates how to customize the segment appearance.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsAppearance-cs1" %}

## Decorator appearance

* The source decorator’s [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokewidth), and [`strokeDashArray`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokedasharray) properties are used to customize the color, width, and appearance of the decorator.

* To set the border stroke color, stroke width, and stroke dash array for the target decorator, use [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokewidth), and [`strokeDashArray`](https://ej2.syncfusion.com/react/documentation/api/diagram/strokeStyle#strokedasharray).

* To set the size for source and target decorator, use width and height property.

The following code example illustrates how to customize the appearance of the decorator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsDecAppearance-cs1" %}

## Interaction

* Diagram allows to edit the connectors at runtime. To edit the connector segments at runtime, refer to [`Connection Editing`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorEditing).

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. The following screenshot illustrates how the connector automatically re-routes the segments.  

* Dependency LineRouting module should be injected to the application as the following code snippet.

    ```ts

     import { Diagram,  LineRouting } from "@syncfusion/ej2-react-diagrams";
     /**
     * Injecting the automatic line routing module.
      */
     Diagram.Inject(LineRouting);
   ```

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

    ```ts
     /**
     *  Initialize the Diagram
     */
       <DiagramComponent constraints={DiagramConstraints.Default | DiagramConstraints.LineRouting} />
    ```

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1" %}

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#constraints-ConnectorConstraints) property of the connector like the following code snippet.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1" %}

## Constraints

* The [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#constraints) property of connector allows to enable/disable certain features of connectors.

* To enable or disable the constraints, refer [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints).

The following code illustrates how to disable selection.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsConstraints-cs1" %}

## Custom properties

* The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#addinfo) property of connectors allow you to maintain additional information to the connectors.

```ts

let connectors: ConnectorModel[] = [{
    id: 'connector1',
    // Defines the information about the connector
    addInfo: 'centralconnector',
    type: 'Straight',
    sourceID: 'Transaction',
    targetID: 'Verification'
}];

```

## Stack order

The connectors [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#zindex) property specifies the stack order of the connector. A connector with greater stack order is always in front of a connector with a lower stack order.

The following code illustrates how to render connector based on the stack order.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5zindex-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5zindex-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5zindex-cs1" %}

## Line Routing

Line Routing is used to avoid the overlapping of nodes and connectors. Connectors are the most important elements of a diagram used to show the flow and relationship between shapes in the flowcharts, organizational charts, and hierarchy diagrams. Line Routing provides the flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it.

>Note: You need to inject line routing module into the diagram. Line routing is applicable only for orthogonal segment of connector.

The following code illustrates how the automatic line routing is enabled for diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorLineRouting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorLineRouting-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorLineRouting-cs1" %}

## Enable Connector Splitting

The connectors are used to create a link between two points, ports, or nodes to represent the relationship between them. Split the connector between two nodes when dropping a new node onto an existing connector and create a connection between the new node and existing nodes by setting the [`enableConnectorSplit`](https://ej2.syncfusion.com/react/documentation/api/diagram/enableConnectorSplit) as true. The default value of the [`enableConnectorSplit`](https://ej2.syncfusion.com/react/documentation/api/diagram/enableConnectorSplit) is false.

The following code illustrates how to split the connector and create a connection with new node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorSplit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorSplit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorSplit-cs1" %}

![Enable Connector Split](./images/EnableSplit.gif)

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)