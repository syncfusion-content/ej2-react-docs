---
layout: post
title: Constraints in React Diagram component | Syncfusion
description: Learn here all about Constraints in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Constraints 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Constraints in React Diagram component

Constraints are used to enable/disable certain behaviors of the diagram, nodes and connectors. Constraints are provided as flagged enumerations, so that multiple behaviors can be enabled/disabled using Bitwise operators (&, |, ~, <<, etc.).

To know more about Bitwise operators, refer to [`Bitwise Operations`](#bitwise-operations).

## Diagram constraints

Diagram constraints allow to enable or disable the following behaviors:

* Page editing
* Bridging
* Zoom and pan
* Undo/redo
* Tooltip

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

For more information about diagram constraints, refer to [`DiagramConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramConstraints/).

## Node constraints

Node constraints allows to enable or disable the following behaviors of node. They are as follows:

* Selection
* Deletion
* Drag
* Resize
* Rotate
* Connect
* Shadow
* Tooltip

The following example illustrates how to disable rotation using the node constraints.

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

For more information about node constraints, refer to [`NodeConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints/).

## Connector constraints

Connector constraints allow to enable or disable certain behaviors of connectors.

* Selection
* Deletion
* Drag
* Segment editing
* Tooltip
* Bridging

The following code illustrates how to disable selection by using connector constraints.

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

For more information about connector constraints, refer to [`ConnectorConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints/).

## Port constraints

You can enable or disable certain behaviors of port. They are as follows:

* Connect
* ConnectOnDrag

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

For more information about port constraints, refer to [`PortConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints/).

## Annotation constraints

You can enable or disable read-only mode for the annotations by using the annotation constraints.

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

For more details about annotation constraints, refer to [`AnnotationConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/annotationConstraints#AnnotationConstraints/).

## Selector constraints

Selector visually represents the selected elements with certain editable thumbs. The visibility of the thumbs can be controlled with selector constraints. The part of selector is categorized as follows:

* Resizer
* Rotator
* User handles

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

For more information about selector constraints, refer to [`SelectorConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorConstraints/).

## Snap constraints

Snap constraints control the visibility of gridlines and enable/disable snapping. Snap constraints allow to set the following behaviors.

* Show only horizontal or vertical gridlines.
* Show both horizontal and vertical gridlines.
* Snap to either horizontal or vertical gridlines.
* Snap to both horizontal and vertical gridlines.

The following code illustrates how to show only horizontal gridlines.

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

For more information about snap constraints, refer to [`SnapConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/snapConstraints/).

## Boundary constraints

Boundary constraints defines a boundary for the diagram inside which the interaction should be done. Boundary constraints allow to set the following behaviors.

* Infinite boundary
* Diagram sized boundary
* Page sized boundary

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

For more information about selector constraints, refer to [`BoundaryConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/boundaryConstraints/).

## Inherit behaviors

Some of the behaviors can be defined through both the specific object (node/connector) and diagram. When the behaviors are contradictorily defined through both, the actual behavior is set through inherit options.

The following code example illustrates how to inherit the line bridging behavior from the diagram model.

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

## Bitwise operations

Bitwise operations are used to manipulate the flagged enumerations [enum]. In this section, Bitwise operations are illustrated by using node constraints. The same is applicable while working with node constraints, connector constraints, or port constraints.

## Add operation

You can add or enable multiple values at a time by using Bitwise ‘|’ (OR) operator.

```ts
node.constraints = NodeConstraints.Select | NodeConstraints.Rotate;
```

In the previous example, you can do both the selection and rotation operation.

## Remove Operation

You can remove or disable values by using Bitwise ‘&~’ (XOR) operator.

```ts
node.constraints = node.constraints & ~NodeConstraints.Rotate;
```

In the previous example, rotation is disabled but other constraints are enabled.

## Check operation

You can check any value by using Bitwise ‘&’ (AND) operator.

```ts
if ((node.constraints & NodeConstraints.Rotate) == NodeConstraints.Rotate);
```

In the previous example, check whether the rotate constraints are enabled in a node. When node constraints have rotate constraints, the expression returns a rotate constraint.
