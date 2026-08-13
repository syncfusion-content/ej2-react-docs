---
layout: post
title: Interaction in React Diagram | Syncfusion®
description: Select, click, drag, resize, and rotate React Diagram elements; group selection and selector-based bulk edits are supported out of the box.
control: Interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Interaction in React Diagram

## Selection

Selector provides a visual representation of selected elements. It behaves like a container and allows you to update the size, position, and rotation angle of the selected elements through interaction and programmatically. Single or multiple elements can be selected at a time.

## Single selection

An element can be selected by clicking that element. During single click, all previously selected items are cleared. The following image shows how the selected elements are visually represented.

![Single Selection](images/single-select.gif)

While selecting the diagram elements, the [`selectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#selectionchange) event and [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram#click) event are triggered. These events enable you to customize the selected elements as needed.

### Selecting a group

When a child element of any group is clicked, its contained group is selected instead of the child element. With consecutive clicks on the selected element, selection is changed from top to bottom in the hierarchy of parent group to its children.

## Multiple selection

Multiple elements can be selected with the following ways:

### Ctrl+Click

During single click, any existing item in the selection list will be cleared, and only the item clicked recently is there in the selection list. To avoid clearing the old selected item, the Ctrl key must be held down when clicking.

### Rubber band selection

Clicking and dragging in the diagram area allows you to create a rectangular region. The elements covered within this rectangular region will be selected when you release the mouse button.

In rubber band selection, you can set the selection of items by region using the following modes:

- CompleteIntersect: Selects items that are fully covered within the rectangular selection region.
- PartialIntersect: Selects items that are partially covered within the rectangular selection region.

This can be configured with the [`rubberBandSelectionMode`](https://ej2.syncfusion.com/react/documentation/api/diagram/rubberBandSelectionMode).

![Multiple Rubberband Selection](images/multiselect_Highlight.gif)

## Select/Unselect elements using API

The [`select`](https://ej2.syncfusion.com/react/documentation/api/diagram#select) and [`clearSelection`](https://ej2.syncfusion.com/react/documentation/api/diagram#clearselection) methods are used to dynamically select or clear the selection of elements at runtime. The following code example demonstrates how these methods can be utilized to select or clear the selection of elements.

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';

let diagramInstance: DiagramComponent;
let nodes = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
  }
]
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      created={() => {
            //Select a specified collection of nodes and connectors in the diagram
            diagramInstance.select([diagramInstance.nodes[0]]);
            //Removes all elements from the selection list, clearing the current selection.
            diagramInstance.clearSelection();
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```
### Get selected items

You can get the current selected items from the [`nodes`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorModel#nodes) and [`connectors`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectormodel#connectors) collection of the [`selectedItems`](https://ej2.syncfusion.com/react/documentation/api/diagram#selecteditems) property of the diagram model.

```
import { DiagramComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-react-diagrams';

let diagramInstance: DiagramComponent;
let selectedNodes: NodeModel[];
let selectedConnector: ConnectorModel[];
let nodes = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
  }
];
let connectors = [
  {
    id: 'connector1',
    sourcePoint: {x: 150, y:150},
    targetPoint: {x: 250, y:250},
  }
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      created={() => {
        //Select a node and a connector in the diagram
        diagramInstance.select([diagramInstance.nodes[0]]);
        //Get the current selected items after the diagram is initialized
        selectedNodes = diagramInstance.selectedItems.nodes;
        selectedConnector = diagramInstance.selectedItems.connectors;
        console.log('selected Nodes length:' , selectedNodes.length);
        console.log('selected Connectors length:' , selectedConnector.length);

      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### Toggle selection

The [`canToggleSelection`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorModel#cantoggleselection) property determines whether the selection state of a diagram element should toggle with a mouse click at runtime. By default, this property is set to false. In the following example, the node can be selected with the first click and unselected with the second click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/interaction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/interaction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/interaction/interaction-cs1" %}

## Select entire elements in diagram programmatically

The client-side method [`selectAll`](https://ej2.syncfusion.com/react/documentation/api/diagram#selectall) used to select all the elements such as nodes/connectors in the diagram. Refer to the following link which shows how to use [`selectAll`](https://ej2.syncfusion.com/react/documentation/api/diagram#selectall) method on the diagram.

```
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      created={() => {
        //Select a specified collection of nodes and connectors in the diagram
        diagramInstance.selectAll();
      }}
    />
  );
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);

```

You can also use the CTRL+A keys to select all nodes and connectors in the diagram.

## Drag

* An object can be dragged by clicking and dragging it. When multiple elements are selected, dragging any one of the selected elements move every selected element.
* When you drag the elements in the diagram, the [`positionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#positionchange) event gets triggered, allowing you to customize the behavior in this event.

![Drag](images/drag.gif)

## Resize

* Selector is surrounded by eight thumbs. When dragging these thumbs, selected items can be resized.
* When one corner of the selector is dragged, opposite corner is in a static position.
* When a node is resized, the [`sizeChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#sizechange) event gets triggered.

![Resize](images/resize.gif)

N>  While dragging and resizing, the objects are snapped towards the nearest objects to make better alignments.

### Aspect ratio

Maintaining the aspect ratio in a diagram means that when you resize a node by dragging its corner, both its width and height adjust proportionally. Aspect ratio constraints can be applied by configuring the [`NodeConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeconstraints) property and enabling the `NodeConstraints.AspectRatio` constraint on the node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/interaction-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/interaction-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/interaction/interaction-cs2" %}

## Customize the resize-thumb size

You can change the size of the node resize thumb and the connector end point handle by using the [`handleSize`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorModel#handlesize) property of the `selectedItems`. 
The appearance such as fill, stroke, and stroke width of the node resize thumb and connector end point handle can be customized by overriding the e-diagram-resize-handle and e-diagram-endpoint-handle classes respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/interaction-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/interaction-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/interaction/interaction-cs3" %}

## Rotate

* A rotate handler is placed above the selector. Clicking and dragging the handler in a circular direction leads to rotating the node.
* The node is rotated with reference to the static pivot point.
* Pivot thumb (thumb at the middle of the node) appears while rotating the node to represent the static point.

![rotate](images/rotate.gif)

### Customize rotate handle position

The position of the rotate handle can be adjusted by modifying the pivot point of the node using the [`pivot`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeModel#pivot) property. By default, the pivot point is set to (0.5, 0.5). The following example shows how to render the rotate handle at the left top corner of the node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/es5Node-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/es5Node-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/nodes/es5Node-cs4" %}

![Node interaction](./images/node-interactions.gif)

## Connection editing

Each segment of a selected connector is editable with some specific handles/thumbs.

N> For connector editing, you have to inject the [`ConnectorEditing`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorEditing) module.


### Drag connector end points

Source and target points of the selected connectors are represented with two handles. Clicking and dragging those handles help you to adjust the source and target points.

![Drag End Point Handles](images/connector-end-point.gif)

Dragging the connector end points triggers the following events for customization:

When the connector source point is changed, the [`sourcePointChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#sourcepointchange) event gets triggered.
When the connector target point is changed, the [`targetPointChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#targetpointchange) event gets triggered.
When you connect connector with ports/node or disconnect from it, the [`connectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#connectionchange) event gets triggered.

### Straight segment editing

The end point of each straight segment is represented by a thumb that allows you to edit the segment. You can insert any number of new segments into a straight line by clicking while holding the Shift and Ctrl keys (Ctrl+Shift+Click).

![Straight Segment Editing Addition](images/straight-segment-add.gif)

Straight segments can be removed by clicking the segment end point while holding the Ctrl and Shift keys (Ctrl+Shift+Click).

![Straight Segment Editing Remove](images/straight-segment-remove.gif)

### Orthogonal segment editing

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging it.
* When necessary, some segments are added or removed automatically, when dragging the segment. This is to maintain proper routing of orthogonality between segments.

![orthogonal Segment Edit](images/orthogonal-segment-edit.gif)

### Bezier segment editing

Bezier segment thumbs allow you to adjust the segments by clicking and dragging them.

#### Bezier Control Points

Bezier segments are annotated with two thumbs representing the control points. These control points can be adjusted by clicking and dragging the control thumbs. Dragging the control point changes the angle and distance of the points from the segment point, modifying the curve.

![Bezier Segment Thumb](images/bezier-segement-thumb.gif)

## Restrict Interaction in Negative Axis Area

The Diagram component includes a built-in option to restrict user interactions within the negative axis region—areas defined by negative X or Y coordinates. By enabling the `RestrictNegativeAxisDragDrop` constraint, the following interactions are prevented:

* **Dragging**: Diagram elements cannot be dragged into areas with negative coordinates.
* **Resizing**: The size of diagram objects cannot be adjusted to extend into the negative axis.
* **Dropping Symbols**: Symbols from the palette cannot be dropped in the negative region.

```
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
  },
];

/**
 * Prevent diagram interactions in the negative region
 */
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      constraints={
        DiagramConstraints.Default | DiagramConstraints.RestrictNegativeAxisDragDrop
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

![negativeAxisRestrict](./images/negativeAxisRestrict.gif)

N> A symbol dragged from the palette will only be added to the diagram if it’s fully positioned within the positive coordinate space.

## User handles

User handles are used to add some frequently used commands around the selector. To create user handles, define and add them to the [`userHandles`](https://ej2.syncfusion.com/react/documentation/api/diagram/selectorModel#userhandles) collection of the [`selectedItems`](https://ej2.syncfusion.com/react/documentation/api/diagram#selecteditems) property. The name property of user handle is used to define the name of the user handle and its further used to find the user handle at runtime and do any customization.

The following events are triggered when interacting with a user handle:

[`click`](https://ej2.syncfusion.com/react/documentation/api/diagram#click) - Triggered when the user handle is clicked.
[`onUserHandleMouseEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#onuserhandlemouseenter) - Triggered when the mouse enters the user handle region.
[`onUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram#onuserhandlemousedown) - Triggered when the mouse is pressed down on the user handle.
[`onUserHandleMouseUp`](https://ej2.syncfusion.com/react/documentation/api/diagram#onuserhandlemouseup) - Triggered when the mouse is released on the user handle.
[`onUserHandleMouseLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram#onuserhandlemouseleave) - Triggered when the mouse leaves the user handle region.

For more information, refer to the [`user handle events`](./user-handle#user-handle-events).

## Fixed user handle

Fixed user handles are used to perform specific actions when interacted with. Unlike regular user handles, [`fixedUserHandles`](https://ej2.syncfusion.com/react/documentation/api/diagram/fixedUserHandleClickEventArgs#fixeduserhandle) are defined within the node/connector object, allowing different fixed user handles to be added to different nodes.

The following events are triggered when interacting with a fixed user handle:

* [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram#click) - Triggered when the fixed user handle is clicked.
* [`onFixedUserHandleMouseEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram#onfixeduserhandlemouseenter) - Triggered when the mouse enters the fixed user handle region.
* [`onFixedUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram#onfixeduserhandlemousedown) - Triggered when the mouse is pressed down on the fixed user handle.
* [`onFixedUserHandleMouseUp`](https://ej2.syncfusion.com/react/documentation/api/diagram#onfixeduserhandlemouseup) - Triggered when the mouse is released on the fixed user handle.
* [`onFixedUserHandleMouseLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram#onfixeduserhandlemouseleave) - Triggered when the mouse leaves the fixed user handle region.
* [`fixedUserHandleClick`](https://ej2.syncfusion.com/react/documentation/api/diagram#fixeduserhandleclick) - Triggered when the fixed user handle is clicked.

For more information, refer to the [`fixed user handle events`](./user-handle#fixed-user-handle-events).

## Determining mouse button clicks

The diagram component can determine which mouse button was clicked. For example, when the right mouse button is clicked, the click event will specify that the right button was clicked. This is handled through the mouse [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram#click) event, which provides details about whether the left or right button was clicked.

| Notification | Description |
|----------------|--------------|
| Left | When the left mouse button is clicked, left is notified  |
| Middle | When the mouse wheel is clicked, middle is notified |
| Right | When the right mouse button is clicked, right is notified |

```
import { DiagramComponent, IClickEventArgs } from '@syncfusion/ej2-react-diagrams';

let diagramInstance: DiagramComponent;
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      click={(args: IClickEventArgs) => {
        //Obtains the button clicked
        let button = args.button;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```


## Allow drop

The diagram supports dropping a node or connector onto another node or connector. To determine the target where the node or connector is dropped, you need to enable the [`allowDrop`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints) constraint in the node's or connector's constraints property. This setting enables a highlighter to indicate potential drop targets when dragging any node or connector over another one. Upon dropping the node or connector, the [`drop`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDropEventArgs) event is triggered to indicate which element was dropped over which other element.

```
import { DiagramComponent, NodeConstraints, NodeModel } from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
  },
  {
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 300,
    offsetY: 100,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
  },
];

// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      drop={(args) => {
        // Perform custom actions when an element is dropped onto another
        console.log('Dropped element');
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Zoom pan

When a large diagram is loaded, only certain portion of the diagram is visible. The remaining portions are clipped. Clipped portions can be explored by scrolling the scrollbars or panning the diagram. You can zoom in or out on the diagram by using Ctrl + mouse wheel. When the diagram is zoomed or panned, the [`scrollChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#scrollchange) event gets triggered.

|  Pan Status  | Description|
|--------------|---------|
| Start | When the mouse is clicked and dragged the status is notified as start.|
| Progress | When the mouse is in motion the status is notified as progress.|
| Completed | When panning is stopped the status is notified with completed.|

![Zoom Pan](images/Zoom-pan.gif)

## Keyboard

Diagram provides support to interact with the elements with key gestures. By default, some in-built commands are bound with a relevant set of key combinations.

The following table illustrates those commands with the associated key values.

| Shortcut Key | Command | Description|
|--------------|---------|------------|
| Ctrl + A | `selectAll` | Select all nodes/connectors in the diagram.|
| Ctrl + C | `copy` | Copy the diagram selected elements.|
| Ctrl + V | `paste` | Pastes the copied elements.|
| Ctrl + X | `cut` | Cuts the selected elements.|
| Ctrl + Z | `undo` | Reverses the last editing action performed on the diagram.|
| Ctrl + Y | `redo` | Restores the last editing action when no other actions have occurred since the last undo on the diagram.|
| Delete | `delete` | Deletes the selected elements.|
| Ctrl/Shift + Click on object |  | Multiple selection (Selector binds all selected nodes/connectors).|
| Up Arrow | `nudge("up")` | `nudgeUp`: Moves the selected elements towards up by one pixel.|
| Down Arrow | `nudge("down")` | `nudgeDown`: Moves the selected elements towards down by one pixel.|
| Left Arrow | `nudge("left")` | `nudgeLeft`: Moves the selected elements towards left by one pixel.|
| Right Arrow | `nudge("right")` | `nudgeRight`: Moves the selected elements towards right by one pixel.|
| Ctrl + MouseWheel | `zoom` | Zoom (Zoom in/Zoom out the diagram).|
| F2 | `startLabelEditing` | Starts to edit the label of selected element.|
| Esc | `endLabelEditing` | Sets the label mode as view and stops editing.|
| Tab | `tabToFocus` | Select the diagram element based on the rendering order when using the "Tab" key.|
| Shift + Tab | `goToPreviousObject` | This command is employed to shift the selection to the preceding object based on the z-order.|
| Ctrl + B | `bold` | Toggle bold formatting for the selected text.|
| Ctrl + I | `italic` | Toggle italic formatting for the selected text.|
| Ctrl + U | `underline` | Toggle underline formatting for the selected text.|
| Ctrl + D | `duplicate` | Duplicate a selected shape.|
| Ctrl + G | `group` | Group together multiple selected shapes, allowing them to be treated as a single shape.|
| Ctrl + Shift + U | `unGroup` | Ungroup shapes within a previously grouped selection.|
| Ctrl + R | `rotateClockwise` | Rotate the selected nodes clockwise.|
| Ctrl + L | `rotateAntiClockwise` | Rotate the selected nodes counterclockwise.|
| Ctrl + H | `flipHorizontal` | Flip the selected elements horizontally.|
| Ctrl + J | `flipVertical` | Flip the selected elements vertically.|
| Ctrl + 1 | `pointerTool` | Activate the pointer tool.|
| Ctrl + 2 | `textTool` | Activate the text tool.|
| Ctrl + 3 | `connectorTool` | Activate the connector tool.|
| Ctrl + 5 | `freeformTool` | Activate the freeform tool.|
| Ctrl + 6 | `lineTool` | Activate the polyline tool.|
| Ctrl + + | `zoomIn` | Zoom in the diagram.|
| Ctrl + - | `zoomOut` | Zoom out the diagram.|
| Shift + Up Arrow | `up` | Moves the selected elements up by 5 pixels.|
| Shift + Down Arrow | `down` | Moves the selected elements down by 5 pixels.|
| Shift + Left Arrow | `left` | Moves the selected elements left by 5 pixels.|
| Shift + Right Arrow | `right` | Moves the selected elements right by 5 pixels.|
| Ctrl + Shift + L | `alignTextLeft` | Align the selected text to the left.|
| Ctrl + Shift + C | `centerTextHorizontally` | Center the selected text horizontally.|
| Ctrl + Shift + R | `alignTextRight` | Align the selected text to the right.|
| Ctrl + Shift + J | `justifyTextHorizontally` | Justify the selected text, aligning it to both the left and right margins.|
| Ctrl + Shift + E | `topAlignTextVertically` | Align the selected text to the top vertically.|
| Ctrl + Shift + M | `centerTextVertically` | Center the selected text vertically.|
| Ctrl + Shift + V | `bottomAlignTextVertically` | Align the selected text to the bottom vertically.|
| Ctrl + Shift + B | `sendToBack` | Send the selected shape backward in the stacking order, making it appear behind other shapes.|
| Ctrl + Shift + F | `bringToFront` | Bring the selected shape forward in the stacking order, making it appear in front of other shapes.|
| Ctrl + [ | `sendBackward` | Move the selected shape one step backward in the layer order.|
| Ctrl + ] | `bringForward` | Move the selected shape one step forward in the layer order.|

## See Also

* [How to create diagram nodes using drawing tools](./tools#shapes)
* [How to create diagram connectors using drawing tools](./tools#connectors )
* [How to disable the diagram interaction](./tools)
* [How to control the diagram history](./undo-redo)
* [How to create overview control to the diagram](./overview)
