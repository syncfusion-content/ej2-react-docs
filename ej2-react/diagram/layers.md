---
layout: post
title: Layers in React Diagram component | Syncfusion
description: Learn here all about Layers in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Layers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layers in React Diagram component

**Layer** is used to organize related shapes on a diagram control. A layer is a named category of shapes. By assigning shapes to different layers, you can selectively view, remove, and lock different categories of shapes.

In diagram, [Layers](https://ej2.syncfusion.com/react/documentation/api/diagram/) provide a way to change the properties of all shapes that have been assigned to that layer. The following properties can be set.

* Visible
* Lock
* Objects
* AddInfo

## Visible

The layer's [visible](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#visible-boolean) property is used to control the visibility of the elements assigned to the layer.

```ts

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        shape: {
            type: 'Path',
            data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
        },
        annotations: [{
            content: 'Path Element'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];
// initialize diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      layers={[
        {
          id: 'layer1',
          visible: true,
          objects: ['node1'],
        },
      ]}
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Lock

The layer's [lock](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#lock-boolean) property is used to prevent or allow changes to the elements dimension and position.

```ts

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        shape: {
            type: 'Path',
            data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
        },
        annotations: [{
            content: 'Path Element'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];

// initialize diagram component

function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      // Add layer
        layers = {
            [
                {
                    id: 'layer1',
                    visible: true,
                    objects: ['node1'],
                    lock: true
                },
                {
                    id: 'layer2',
                    visible: true,
                    objects: ['node2'],
                    lock: false
                }
            ]
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Objects

The layer's [objects](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#objects-string) property defines the diagram elements to the layer.

```ts

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        shape: {
            type: 'Path',
            data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
        },
        annotations: [{
            content: 'Path Element'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];
// initialize diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      layers = {
            [
                {
                    id: 'layer1',
                    visible: true,
                    objects: ['node1', 'node2']
                },
                {
                    id: 'layer2',
                    visible: true,
                    objects: ['node2'],
                }
            ]
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## AddInfo

The [`addInfo`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#addinfo-Object) property of layers allow you to maintain additional information to the layers.

The following code illustrates how to add additional information to the layers.

```ts

// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Default Shape'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        shape: {
            type: 'Path',
            data: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,' +
                '179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z'
        },
        annotations: [{
            content: 'Path Element'
        }]
    }
];
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];
let addInfo: Object = { Description: 'Layer1' };
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      layers = {
            [
                {
                    id: 'layer1',
                    visible: true,
                    objects: ['node1', 'node2'],
                    addInfo: addInfo
                },
                {
                    id: 'layer2',
                    visible: true,
                    objects: ['node2'],
                }
            ]
        }
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### Add layer at runtime

Layers can be added at runtime by using the [`addLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#addLayer) public method.

The layer's [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/layer/#id-string) property defines the ID of the layer, and its further used to find the layer at runtime and do any customization.

The following code illustrates how to add a layer.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created={() => {
        // add the layers to the existing diagram layer collection
        diagramInstance.addLayer(
          {
            id: 'newlayer',
            objects: [],
            visible: true,
            lock: false,
            zIndex: -1,
          },
          [
            {
              type: 'Straight',
              sourcePoint: {
                x: 100,
                y: 300,
              },
              targetPoint: {
                x: 200,
                y: 400,
              },
            },
          ]
        );
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### Remove layer at runtime

Layers can be removed at runtime by using the [`removeLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#removeLayer) public method.

The following code illustrates how to remove a layer.

```ts

let diagramInstance: DiagramComponent;
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
      // Add layer
      created = {
            () => {
                // remove the diagram layers
                diagram.removeLayer([diagram.model.layers[i]]);
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### moveObjects

Objects of the layers can be moved by using the [`moveObjects`](https://ej2.syncfusion.com/react/documentation/api/diagram/#moveObjects) public method.

The following code illustrates how to move objects from one layer to another layer from the diagram.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // move the objects of diagram layers
                diagram.moveObjects(['connector1'], 'layer2');
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### bringLayerForward

Layers can be moved forward at runtime by using the [`bringLayerForward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#bringLayerForward) public method.

The following code illustrates how to bring forward to layer.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // move the layer forward
                diagram.bringLayerForward('layer1');
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### sendLayerBackward

Layers can be moved backward at runtime by using the [`sendLayerBackward`](https://ej2.syncfusion.com/react/documentation/api/diagram/#sendLayerBackward) public method.

The following code illustrates how to send backward to layer.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // Send the layer backward
                diagram.sendLayerBackward('layer1');
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### cloneLayer

Layers can be cloned with its object by using the [`cloneLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#cloneLayer) public method.

The following code illustrates how to bring forward to layer.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // clone a layer with its object
                diagram.cloneLayer('layer2');
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### getActiveLayer

To get the active layers back in diagram, use the [`getActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#getActiveLayer) public method.

The following code illustrates how to bring forward to layer.

```ts
let diagramInstance: DiagramComponent;

function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // gets the active layer back
                diagram.getActiveLayer();
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

### setActiveLayer

Set the active layer by using the [`setActiveLayer`](https://ej2.syncfusion.com/react/documentation/api/diagram/#setActiveLayer) public method.

The following code illustrates how to bring forward to layer.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}
      // Add layer
      created = {
            () => {
                // set the active layer
                //@param layerName defines the name of the layer which is to be active layer
                diagram.setActiveLayer('layer2');
            }
        }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```