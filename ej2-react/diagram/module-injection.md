---
layout: post
title: Module Injection in React Diagram | Syncfusion®
description: Inject feature modules into the React Diagram to enable BPMN shapes, layouts, undo/redo, flowchart, Visio I/O, and real-time collaboration.
control: Module injection
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Module Injection in React Diagram

The Diagram component is divided into feature-based modules. To enable a specific feature, inject the corresponding service into the Diagram component. For basic diagram functionality, modules are not required. Additional modules are used to enable advanced features such as layouts, data binding, and BPMN.

## Available Modules

The following list shows commonly used modules and their purposes:

* `AvoidLineOverlapping` - Inject this provider to prevent connector lines from overlapping.
* `BpmnDiagrams` - Inject this provider to add built-in BPMN Shapes to diagrams.
* `ComplexHierarchicalTree` - Inject this provider to use complex hierarchical tree-like structures.
* `ConnectorBridging` - Inject this provider to add bridges to connectors.
* `ConnectorEditing` - Inject this provider to edit the segments for connectors.
* `DataBinding` - Inject this provider to populate nodes from given data source.
* `DiagramCollaboration` - Inject this provider to enable real-time collaborative editing features.
* `DiagramContextMenu` - Inject this provider to manipulate context menu.
* `Ej1Serialization` - Inject this provider to load ej1 diagram json in ej2 diagram.
* `FlowchartLayout` - Inject this provider to use flowchart-style layouts.
* `HierarchicalTree` - Inject this provider to use hierarchical tree-like structures.
* `ImportAndExportVisio` - Inject this provider to import and export Visio diagrams.
* `LayoutAnimation` - Inject this provider to add animation to layouts.
* `LineDistribution` - Inject this provider to distribute connector lines evenly.
* `LineRouting` - Inject this provider to route connectors automatically and avoid overlapping.
* `MindMap` - Inject this provider to use mind map layouts.
* `PrintAndExport` - Inject this provider to print or export the objects.
* `RadialTree` - Inject this provider to use radial tree-like structures.
* `Snapping` - Inject this provider to snap objects to grid lines during interaction.
* `SymmetricLayout` - Inject this provider to render layouts symmetrically.
* `UndoRedo` - Inject this provider to undo and redo changes.

## Inject Modules into Diagram

Inject the required modules using the `Inject` directive as shown below:

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  DiagramComponent,
  HierarchicalTree,
  MindMap,
  RadialTree,
  ComplexHierarchicalTree,
  DataBinding,
  Snapping,
  PrintAndExport,
  BpmnDiagrams,
  SymmetricLayout,
  ConnectorBridging,
  UndoRedo,
  DiagramCollaboration,
  LayoutAnimation,
  DiagramContextMenu,
  LineRouting,
  AvoidLineOverlapping,
  ConnectorEditing,
  LineDistribution,
  Ej1Serialization,
  FlowchartLayout,
  ImportAndExportVisio,
  Inject
} from "@syncfusion/ej2-react-diagrams";

export default function App() {
  return (
    <DiagramComponent id="diagram" width={1000} height={500}>
      <Inject
        services={[
          HierarchicalTree,
          MindMap,
          RadialTree,
          ComplexHierarchicalTree,
          DataBinding,
          Snapping,
          PrintAndExport,
          BpmnDiagrams,
          SymmetricLayout,
          ConnectorBridging,
          UndoRedo,
          DiagramCollaboration,
          LayoutAnimation,
          DiagramContextMenu,
          LineRouting,
          AvoidLineOverlapping,
          ConnectorEditing,
          LineDistribution,
          Ej1Serialization,
          FlowchartLayout,
          ImportAndExportVisio
        ]}
      />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```