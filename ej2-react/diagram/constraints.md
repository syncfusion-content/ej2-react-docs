---
layout: post
title: Constraints in React Diagram Component | Syncfusion®
description: Learn here all about Constraints in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Constraints 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Constraints in React Diagram Component

Constraints enable or disable specific behaviors of diagrams, nodes, and connectors. These constraints are implemented as flagged enumerations, allowing multiple behaviors to be controlled simultaneously using Bitwise operators (`&, |, ~, <<, etc.`).

To know more about Bitwise operators, refer to [`Bitwise Operations`](#bitwise-operations).

## Diagram Constraints

[`Diagram constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramConstraints/) control the overall behavior and functionality of the diagram canvas.

The following table displays the list of all diagram constraints.


| Constraints | Description |
| -------- | -------- |
|None|Disables all diagram functionalities.|
|Bridging|Enables bridging support for connectors in the diagram.|
|Undo/redo|Enables undo and redo functionality for diagram operations.|
|UserInteraction|Enables user interaction capabilities for the diagram.|
|ApiUpdate|Enables programmatic updates through API calls.|
|PageEditable|Enables editing within the page boundaries.|
|Zoom|Enables zooming functionality for the diagram.|
|PanX|Enables horizontal panning of the diagram.|
|PanY|Enables vertical panning of the diagram.|
|Pan|Enables both horizontal and vertical panning.|
|ZoomTextEdit|Enables text box zooming during text editing operations.|
|Tooltip|Enables tooltip display for diagram elements.|
|Virtualization|Enables virtualization support for large diagrams.|
|LineRouting|Enables automatic line routing for connectors.|
|Default|Enables all default constraints for the diagram.|

The following example illustrates how to disable page editing using the diagram constraints.

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      constraints={
        DiagramConstraints.Default & ~DiagramConstraints.PageEditable
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

The following example shows how to enable Bridging constraint to the default constraints of diagram.

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      constraints={
        DiagramConstraints.Default | DiagramConstraints.Bridging
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

Multiple behaviors can be added or removed from the default constraints using the Bitwise Operations in the diagram.

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      constraints={
       DiagramConstraints.Default & ~(DiagramConstraints.PageEditable|DiagramConstraints.Zoom)
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

For more information about diagram constraints, refer to [`DiagramConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramConstraints).

N> By default, the following constraints are enabled in the diagram,
<br/>* Zoom
<br/>* ApiUpdate
<br/>* PanX
<br/>* PanY
<br/>* Pan
<br/>* Undo/Redo
<br/>* PageEditable
<br/>* Default

## Node Constraints

Node constraints control the behavior and interactions available for individual nodes within the diagram.

| Constraints | Description |
| -------- | -------- |
|None|Disables all node constraints.|
|Select|Enables node selection capability.|
|Drag|Enables node dragging functionality.|
|Rotate|Enables node rotation capability.|
|Shadow|Enables shadow display for the node.|
|PointerEvents|Enables pointer event handling for the node.|
|Delete|Enables node deletion capability.|
|InConnect|Enables incoming connections to the node.|
|OutConnect|Enables outgoing connections from the node.|
|AllowDrop|Enables drop operations on the node.|
|Individual|Enables individual resize handles for the node.|
|ResizeNorthEast|Enables resizing from the northeast corner.|
|ResizeEast|Enables resizing from the east side.|
|ResizeSouthEast|Enables resizing from the southeast corner.|
|ResizeSouth|Enables resizing from the south side.|
|ResizeSouthWest|Enables resizing from the southwest corner.|
|ResizeWest|Enables resizing from the west side.|
|ResizeNorthWest|Enables resizing from the northwest corner.|
|ResizeNorth|Enables resizing from the north side.|
|AspectRatio|Maintains aspect ratio during resize operations.|
|ReadOnly|Enables read-only mode for node annotations.|
|HideThumbs|Hides all resize thumbs for the node.|
|Tooltip|Enables tooltip display for the node.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|Resize|Enables overall resize functionality for the node.|
|Inherit|Inherits interaction settings from parent objects.|
|Expandable|Enables expand/collapse functionality for the node.|
|AllowMovingOutsideLane|Allows movement outside swim lane boundaries.|
|Default|Enables all default constraints for the node.|

The following example demonstrates how to disable rotation using node constraints:

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

The following example shows how to add shadow constraint to the default node constraints:

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    constraints: NodeConstraints.Default | NodeConstraints.Shadow,
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

The following code example shows how to enable tooltip for a node:

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

Multiple behaviors can be added or removed from the default constraints using `Bitwise Operations`.

The following code example shows how to remove rotate and resize constraints from node.

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    constraints: NodeConstraints.Default &~ (NodeConstraints.Rotate | NodeConstraints.Resize),
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs1" %}

For more information about node constraints, refer to [`NodeConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints).

N>By default, the following constraints are enabled for the node,
<br/>* Select
<br/>* Drag
<br/>* Resize
<br/>* Rotate
<br/>* InConnect
<br/>* OutConnect
<br/>* PointerEvents
<br/>* ResizeNorthEast
<br/>* ResizeEast
<br/>* ResizeSouthEast
<br/>* ResizeSouth
<br/>* ResizeSouthWest
<br/>* ResizeWest
<br/>* ResizeNorthWest
<br/>* ResizeNorth
<br/>* Inherit
<br/>* Expandable
<br/>* Individual
<br/>* InheritTooltip
<br/>* Default

## Connector Constraints

Connector constraints control the behavior and interactions available for connectors within the diagram.

| Constraints | Description |
| -------- | -------- |
|None|Disables all connector constraints.|
|Select|Enables connector selection capability.|
|Delete|Enables connector deletion capability.|
|Drag|Enables connector dragging functionality.|
|DragSourceEnd|Enables dragging of the connector's source endpoint.|
|DragTargetEnd|Enables dragging of the connector's target endpoint.|
|DragSegmentThumb|Enables dragging of segment control points.|
|Interaction|Enables general interaction capabilities for the connector.|
|AllowDrop|Enables drop operations on the connector.|
|Bridging|Enables bridging functionality for the connector.|
|InheritBridging|Inherits bridging settings from parent objects.|
|BridgeObstacle|Enables the connector to act as a bridge obstacle.|
|PointerEvents|Enables pointer event handling for the connector.|
|ConnectToNearByNode|Enables automatic connection to nearby nodes.|
|ConnectToNearByPort|Enables automatic connection to nearby ports.|
|Tooltip|Enables tooltip display for the connector.|
|LineRouting|Enables line routing functionality for the connector.|
|InheritLineRouting|Inherits line routing settings from parent objects.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|ConnectToNearByElement|Enables automatic connection to nearby elements.|
|InheritSegmentThumbShape|Inherits segment thumb shape from parent objects.|
|ReadOnly|Enables read-only mode for the connector.|
|Default|Enables all default constraints for the connector.|

The following code demonstrates how to disable selection using connector constraints:

```ts
let connectors: ConnectorModel[] = [{
            id: 'connector1',
            type: 'Straight',
            sourcePoint: {
                x: 100,
                y: 100
            },
            targetPoint: {
                x: 200,
                y: 200
            },
            constraints: {
                ConnectorConstraints.Default & ~ConnectorConstraints.Select
            }];
function App() {
  return (
    <DiagramComponent id="container"
    width={700}
    height={600}
    connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```


The following example shows how to add bridging constraint to the default connector constraints:

```ts
let connectors: ConnectorModel[] = [{
            id: 'connector1',
            type: 'Straight',
            sourcePoint: {
                x: 100,
                y: 100
            },
            targetPoint: {
                x: 200,
                y: 200
            },
            constraints: {
                ConnectorConstraints.Default | ConnectorConstraints.Bridging
            }];
function App() {
  return (
    <DiagramComponent id="container"
    width={700}
    height={600}
    connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

N> To visualize connector bridging, inject the ConnectorBridging module.

The following example shows how to enable tooltip for connectors:

```ts
let connectors: ConnectorModel[] = [{
            id: 'connector1',
            type: 'Straight',
            sourcePoint: {
                x: 100,
                y: 100
            },
            targetPoint: {
                x: 200,
                y: 200
            },
            constraints: {
                ConnectorConstraints.Default | ConnectorConstraints.Tooltip
            }];
function App() {
  return (
    <DiagramComponent id="container"
    width={700}
    height={600}
    connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

The connector constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```ts
//Removing multiple constraints from default.
let connectors: ConnectorModel[] = [{
            id: 'connector1',
            type: 'Straight',
            sourcePoint: {
                x: 100,
                y: 100
            },
            targetPoint: {
                x: 200,
                y: 200
            },
            constraints: {
                ConnectorConstraints.Default &~ (ConnectorConstraints.DragSourceEnd|ConnectorConstraints.DragTargetEnd)
            }];
function App() {
  return (
    <DiagramComponent id="container"
    width={700}
    height={600}
    connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```
Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs2" %}

For more information about connector constraints, refer to [`ConnectorConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints).

N>By default, the following constraints are enabled for the connector,
<br/>* Select
<br/>* Delete
<br/>* Drag
<br/>* Interaction
<br/>* ConnectToNearByNode
<br/>* ConnectToNearByPort
<br/>* ConnectToNearByElement
<br/>* BridgeObstacle
<br/>* InheritBridging
<br/>* PointerEvents
<br/>* InheritLineRouting
<br/>* InheritTooltip
<br/>* InheritSegmentThumbShape
<br/>* Default

## Port Constraints

Port constraints control the behavior and connection capabilities of ports attached to nodes.

| Constraints | Description |
| -------- | -------- |
|None|Disables all port constraints.|
|Draw|Enables connection creation when hovering over the port.|
|Drag|Enables port dragging functionality.|
|InConnect|Enables incoming connections to the port only.|
|OutConnect|Enables outgoing connections from the port only.|
|ToolTip|Enables tooltip display for the port.|
|InheritTooltip|Inherits tooltip settings from parent objects.|
|Default|Enables all default constraints for the port.|

The following code illustrates how to disable creating connections with a port.

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    ports: [
      {
        constraints: PortConstraints.None,
      },
    ],
  },
];
```

The following code example shows how to configure port constraints to accept only incoming connections:

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    ports: [
      {   //Enable to create target connection alone.
          constraints: PortConstraints.InConnect
      },
    ],
  },
];
```

The port constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    ports: [
        {   //Enable to draw connector from port also accepts both in and out connections.
             constraints: PortConstraints.Default | PortConstraints.Draw;
        }
    ]
  },
];
```
Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs3" %}

For more information about port constraints, refer to [`PortConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints).

N> By default, the following constraints are enabled for the port,
<br/>* InConnect
<br/>* OutConnect

## Annotation Constraints

Annotation constraints control the behavior and edit ability of text annotations on nodes and connectors.

| Constraints | Description |
| -------- | -------- |
|ReadOnly|Enables read-only mode for the annotation.|
|InheritReadOnly|Inherits read-only settings from parent objects.|
|Select|Enables selection capability for the annotation.|
|Drag|Enables dragging functionality for the annotation.|
|Resize|Enables resize capability for the annotation.|
|Rotate|Enables rotation capability for the annotation.|
|Interaction|Enables general interaction capabilities for the annotation.|
|None|Disables all constraints for the annotation.|

The read-only mode for the annotation is enabled by settings ReadOnly constraints to the annotation.

The following code illustrates how to enable read-only mode for the annotations.

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    annotations: [
      {
        id: "anotation_1",
        content: "annotation",
        constraints: AnnotationConstraints.ReadOnly,
      },
    ],
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

Interactions such as select, drag, resize, and rotate can be enabled for the annotation as shown below.

```ts
let nodes: NodeModel[] = [
  {
    id: "node",
    offsetX: 100,
    offsetY: 100,
    annotations: [
      {
        id: "anotation_1",
        content: "annotation",
        constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag | AnnotationConstraints.Resize |
                AnnotationConstraints.Rotate,
      },
    ],
  },
];
function App() {
  return (
    <DiagramComponent id="container" width={700} height={600} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs4" %}

For more details about annotation constraints, refer to [`AnnotationConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationConstraints#AnnotationConstraints).

## Selector Constraints

Selector constraints control the visibility and behavior of selection handles and thumbs that appear when elements are selected.

| Constraints | Description |
| -------- | -------- |
|None|Hides all selector elements.|
|ConnectorSourceThumb|Shows or hides the connector's source thumb.|
|ConnectorTargetThumb|Shows or hides the connector's target thumb.|
|ResizeSouthEast|Shows or hides the bottom-right resize handle.|
|ResizeSouthWest|Shows or hides the bottom-left resize handle.|
|ResizeNorthEast|Shows or hides the top-right resize handle.|
|ResizeNorthWest|Shows or hides the top-left resize handle.|
|ResizeEast|Shows or hides the middle-right resize handle.|
|ResizeWest|Shows or hides the middle-left resize handle.|
|ResizeSouth|Shows or hides the bottom-center resize handle.|
|ResizeNorth|Shows or hides the top-center resize handle.|
|Rotate|Shows or hides the rotation handle.|
|UserHandle|Shows or hides custom user handles.|
|ToolTip|Shows or hides tooltips during drag, resize, and rotate operations.|
|ResizeAll|Shows or hides all resize handles.|
|All|Shows all available handles.|


The following code illustrates how to hide rotator.

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      selectedItems={{
        constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

The following code demonstrates how to hide the default tooltip during the drag, resize, and rotate operations on nodes:

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      selectedItems={{
        constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

The following code example shows how to disable the userhandle functionality for the selected item.

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      selectedItems={{
        constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs5" %}

For more information about selector constraints, refer to [`SelectorConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorConstraints).

N> By default, the following constraints are enabled for the selected items:
<br/>* Rotate
<br/>* UserHandle
<br/>* ResizeAll
<br/>* All
<br/>* ToolTip

## Snap Constraints

Snap constraints control the visibility of gridlines and enable or disable snapping functionality for precise element positioning.

The following list of snapping constraints are used to enable or disable certain features of snapping.

| Constraints | Description |
| -------- | -------- |
|None|Disables snapping for all diagram elements.|
|ShowHorizontalLines|Displays horizontal gridlines in the diagram.|
|ShowVerticalLines|Displays vertical gridlines in the diagram.|
|ShowLines|Displays both horizontal and vertical gridlines.|
|SnapToHorizontalLines|Enables snapping to horizontal gridlines only.|
|SnapToVerticalLines|Enables snapping to vertical gridlines only.|
|SnapToLines|Enables snapping to both horizontal and vertical gridlines.|
|SnapToObject|Enables snapping to other objects in the diagram.|
|All|Shows gridlines and enables all snapping functionality.|

The following code demonstrates how to show only horizontal gridlines:

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      snapSettings={{
        constraints: SnapConstraints.ShowHorizontalLines,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

The snap constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      snapSettings={{
        constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.ShowVerticalLines,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs6" %}
 
For more information about snap constraints, refer to [`SnapConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/snapConstraints).

N> By default, the following constraints are enabled for the snap functionality:
<br/>* ShowLines
<br/>* ShowVerticalLines
<br/>* ShowHorizontalLines
<br/>* SnapToLines
<br/>* SnapToHorizontalLines
<br/>* SnapToVerticalLines
<br/>* SnapToObject
<br/>* All

## Boundary Constraints

Boundary constraints define the interaction boundaries for diagram elements, controlling where users can perform operations.
The following list of constraints are used to enable or disable certain features of boundary interactions of the diagram.

| Constraints | Description |
| -------- | -------- |
|Infinity|Allows interactions at infinite height and width.|
|Diagram|Limits interactions within the diagram's height and width.|
|Page|Limits interactions within the page boundaries.|

The following code illustrates how to limit the interaction done inside a diagram within a page.

{% raw %}

```ts
function App() {
  return (
    <DiagramComponent
      id="container"
      width={700}
      height={600}
      pageSettings={{
        boundaryconstraints: "Page",
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```
{% endraw %}

Refer sample below

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/constraints/constraints-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/constraints/constraints-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/constraints/constraints-cs7" %}

For more information about boundary constraints, refer to [`BoundaryConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/boundaryConstraints).

## Inherit Behaviors

When behaviors are defined at both the specific object level (node/connector) and diagram level, inheritance options determine the actual behavior applied.

The following code example demonstrates how to inherit line bridging behavior from the diagram model:

```ts
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    constraints = {
        ConnectorConstraints.Default & ConnectorConstraints.InheritBridging
    }
}];
function App() {
return (
<DiagramComponent
id="container"
width={700}
height={600}
connectors={connectors}
constraints={DiagramConstraints.Default | DiagramConstraints.Bridging}
>
<Inject services={[ConnectorBridging]} />
</DiagramComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

## Bitwise Operations

Bitwise operations manipulate flagged enumerations to enable precise control over multiple constraint behaviors simultaneously.

### Add Operation

Use the Bitwise `|` (OR) operator to add or enable multiple values:

```ts
node.constraints = NodeConstraints.Select | NodeConstraints.Rotate;
```

This example enables both selection and rotation operations for the node.

### Remove Operation

Use the Bitwise `&~` (XOR) operator to remove or disable specific values:

```ts
node.constraints = node.constraints & ~NodeConstraints.Rotate;
```

This example disables rotation while maintaining other enabled constraints.

### Check Operation

Use the Bitwise `&` (AND) operator to verify if specific values are enabled:

```ts
if ((node.constraints & NodeConstraints.Rotate) == NodeConstraints.Rotate);
```

This example checks whether rotation constraints are enabled for a node. When the node has rotation constraints enabled, the expression returns the rotate constraint value.