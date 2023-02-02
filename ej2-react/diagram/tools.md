---
layout: post
title: Tools in React Diagram component | Syncfusion
description: Learn here all about Tools in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Tools 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tools in React Diagram component

## Drawing tools

Drawing tool allows you to draw any kind of node/connector during runtime by clicking and dragging on the diagram page.

## Shapes

To draw a shape, set the JSON of that shape to the drawType property of the diagram and activate the drawing tool by using the [`tool`](https://ej2.syncfusion.com/react/documentation/api/diagram) property. The following code example illustrates how to draw a rectangle at runtime.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    BasicShapeModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        //JSON to create a rectangle
        let drawingshape: BasicShapeModel = {
          type: 'Basic',
          shape: 'Rectangle',
        };
        let node: NodeModel = {
          shape: drawingshape,
        };
        diagramInstance.drawingObject = node;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
      }}
      //customize the appearance of the shape
      getNodeDefaults={(obj: NodeModel) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

The following code example illustrates how to draw a path.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    PathModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created = {
            () => {
                //JSON to create a path
                let node: NodeModel = {
                    id: "Path",
                    style: {
                        fill: "#fbe172"
                    },
                    annotations: [{
                        content: "Path"
                    }],
                    shape: {
                        type: 'Path',
                        data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
                    }
                    as PathModel
                };
                diagramInstance.drawingObject = node;
                //To draw an object once, activate draw once
                diagramInstance.tool = DiagramTools.DrawOnce;
                diagramInstance.dataBind();
            }
        }
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Connectors

To draw connectors, set the JSON of the connector to the drawType property. The drawing [`tool`](https://ej2.syncfusion.com/react/documentation/api/diagram) can be activated by using the tool property. The following code example illustrates how to draw a straight line connector.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    ConnectorModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created = {
            () => {
                //JSON to create a Connector
                let connectors: ConnectorModel = {
                    id: 'connector1',
                    type: 'Straight',
                    segments: [{
                        type: "polyline"
                    }]
                }
                diagramInstance.drawingObject = connectors;
                //To draw an object once, activate draw once
                diagramInstance.tool = DiagramTools.DrawOnce;
                diagramInstance.dataBind();
            }
        }
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Text

Diagram allows you to create a textNode, when you click on the diagram page. The following code illustrates how to draw a text.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    TextModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        //JSON to create a text
        let node: NodeModel = {
        shape: {
                type: 'Text',
            }as TextModel
        };
        diagramInstance.drawingObject = node;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
      }}
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

Once you activate the TextTool, perform label editing of a node/connector.

**Polygon shape**
Diagram allows to create the polygon shape by clicking and moving the mouse at runtime on the diagram page.

The following code illustrates how to draw a polygon shape.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    BasicShapeModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created = {
            () => {
                let drawingshape: BasicShapeModel = {
                    type: 'Basic',
                    shape: 'Polygon'
                };
                //JSON to create a polygon
                let node: NodeModel = {
                    shape: drawingshape
                };
                diagramInstance.drawingObject = node;
                //To draw an object once, activate draw once
                diagramInstance.tool = DiagramTools.DrawOnce;
                diagramInstance.dataBind();
            }
        }
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Polyline Connector

Diagram allows to create the polyline segments with straight lines and angled vertices at the control points by clicking and moving the mouse at runtime on the diagram page.

The following code illustrates how to draw a polyline connector.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    ConnectorModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created = {
            () => {
                let connector: ConnectorModel = {
                    id: 'connector1',
                    type: 'Polyline'
                };
                diagramInstance.drawingObject = connector;
                //To draw an object once, activate draw once
                diagramInstance.tool = DiagramTools.DrawOnce;
                diagramInstance.dataBind();
            }
        }
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Tool selection

There are some functionalities that can be achieved by clicking and dragging on the diagram surface. They are as follows.

* Draw selection rectangle: MultipleSelect tool
* Pan the diagram: Zoom pan
* Draw nodes/connectors: DrawOnce/DrawOnce

As all the three behaviors are completely different, you can achieve only one behavior at a time based on the tool that you choose.
When more than one of those tools are applied, a tool is activated based on the precedence given in the following table.

|Precedence|Tools|Description|
|----------|-----|-----------|
|1st|ContinuesDraw|Allows you to draw the nodes or connectors continuously. Once it is activated, you cannot perform any other interaction in the diagram.|
|2nd|DrawOnce|Allows you to draw a single node or connector. Once you complete the DrawOnce action, SingleSelect, and MultipleSelect tools are automatically enabled.|
|3rd|ZoomPan|Allows you to pan the diagram. When you enable both the SingleSelect and ZoomPan tools, you can perform the basic interaction as the cursor hovers node/connector. Panning is enabled when cursor hovers the diagram.|
|4th|MultipleSelect|Allows you to select multiple nodes and connectors. When you enable both the MultipleSelect and ZoomPan tools, cursor hovers the diagram. When panning is enabled, you cannot select multiple nodes.|
|5th|SingleSelect|Allows you to select individual nodes or connectors.|
|6th|None|Disables all tools.|

Set the desired [`tool`](https://ej2.syncfusion.com/react/documentation/api/diagram) to the tool property of the diagram model. The following code illustrates how to enable Zoom pan in the diagram.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [{
       id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
        }
        {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        annotations: [{
            id: 'label2',
            content: 'End'
        }],
        shape: {
            type: 'Flow',
            shape: 'process'
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
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      tool={DiagramTools.DrawOnce | DiagramTools.ZoomPan}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

# Events

[`elementDraw`](https://ej2.syncfusion.com/react/documentation/api/diagram)  event is triggered when node or connector is drawn using drawing tool.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    ConnectorModel,
    NodeModel,
    DiagramTools,
    DiagramComponent,
    IElementDrawEventArgs
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        //JSON to create a Connector
        let connectors = {
          id: 'connector1',
          type: 'Straight',
          segments: [
            {
              type: 'Straight',
            },
          ],
        };
        diagramInstance.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
      }}
      elementDraw={() => {
        alert('Event Triggered');
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Freehand Drawing

Diagram has support for free-hand drawing to draw anything on the diagram page independently. Free-hand drawing will be enabled by using the drawingObject property and setting its value to Freehand.

The following code illustrates how to draw a freehand drawing.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    ConnectorModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        //JSON to create a Connector
        let connectors: ConnectorModel = {
          id: 'connector1',
          type: 'Freehand',
        };
        diagramInstance.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```