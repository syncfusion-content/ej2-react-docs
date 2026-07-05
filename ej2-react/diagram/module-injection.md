---
layout: post
title: Module Injection in React Diagram Component | Syncfusion®
description: Learn how to use module injection in the Syncfusion® React Diagram component and enable additional features.
control: Module injection
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Module Injection in React Diagram Component

The [React Diagram](https://www.syncfusion.com/react-components/react-diagram) component is divided into feature-based modules. To enable a specific feature, inject the corresponding service into the Diagram component. For basic diagram functionality, modules are not required. Additional modules are used to enable advanced features such as layouts, data binding, and BPMN.

## Available Modules

The following table lists commonly used modules and their purposes:

* `BpmnDiagrams` - Inject this provider to add built-in BPMN Shapes to diagrams.
* `ConnectorBridging` - Inject this provider to add bridges to connectors.
* `ConnectorEditing` - Inject this provider to edit the segments for connectors.
* `ComplexHierarchicalTree` - Inject this provider to use complex hierarchical tree-like structures.
* `DataBinding` - Inject this provider to populate nodes from given data source.
<<<<<<< HEAD
* `DiagramCollaboration` - Inject this provider to enable real-time collaborative editing features.
=======
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
* `DiagramContextMenu` - Inject this provider to manipulate context menu.
* `HierarchicalTree` - Inject this provider to use hierarchical tree-like structures.
* `LayoutAnimation` - Inject this provider to add animation to layouts.
* `MindMap` - Inject this provider to use mind map layouts.
* `PrintAndExport` - Inject this provider to print or export the objects.
* `RadialTree` - Inject this provider to use radial tree-like structures.
* `Snapping` - Inject this provider to snap the objects.
* `SymmetricLayout` - Inject this provider to render layouts in symmetrical method.
* `UndoRedo` - Inject this provider to revert and restore the changes.
* `Ej1Serialization` - Inject this provider to load ej1 diagram json in ej2 diagram.
<<<<<<< HEAD
* `LineRouting` - Inject this provider to route connectors automatically and avoid overlapping.
* `AvoidLineOverlapping` - Inject this provider to prevent connector lines from overlapping.
* `LineDistribution` - Inject this provider to distribute connector lines evenly.
* `FlowchartLayout` - Inject this provider to use flowchart-style layouts.
* `ImportAndExportVisio` - Inject this provider to import and export Visio diagrams.
=======
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f

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
<<<<<<< HEAD
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
=======
  LayoutAnimation,
  DiagramContextMenu,
  ConnectorEditing,
  Ej1Serialization,
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
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
<<<<<<< HEAD
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
=======
          LayoutAnimation,
          DiagramContextMenu,
          ConnectorEditing,
          Ej1Serialization
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
        ]}
      />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```