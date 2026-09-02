---
layout: post
title: Migration from EJ1 in React Diagram | Syncfusion®
description: Migrate EJ1 diagram JSON into the React EJ2 Diagram by injecting the EJ1 serialization module to preserve backward-compatible data structures.
control: EJ1 Migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Migration from EJ1 in React Diagram

To load EJ1 JSON data in an EJ2 diagram, follow these steps.

1. Import and inject the `EJ1SerializationModule`.
2. Load the EJ1 JSON data using the diagram `loadDiagram` method and set the second parameter to **true**. Invoke `loadDiagram` from the diagram's `created` event so it runs once the diagram is initialized.

The following code example demonstrates both steps.

```

import {
  DiagramComponent,
  EJ1SerializationModule,
  Inject,
} from "@syncfusion/ej2-react-diagrams";
function App() {
  let diagramInstance: DiagramComponent | null = null;
  function diagramCreated(): void {
    // Replace the placeholder object with your actual EJ1 JSON data.
    var ej1Data = {
      "name": "Diagram",
      "nodes": [],
      "connectors": []
    };
    // Load the EJ1 JSON and pass a boolean value as true.
    if (diagramInstance) {
      diagramInstance.loadDiagram(ej1Data, true);
    }
  }
  return (
   <DiagramComponent
      id="diagram"
      ref={diagram => { diagramInstance = diagram; }}
      width={'100%'}
      height={'600px'}
      created={diagramCreated}
    >
      <Inject services={[EJ1SerializationModule]} />
    </DiagramComponent>
  );
}

```

Render the `App` component in your application entry point using `createRoot` from `react-dom/client`.

N> If the EJ1 JSON is not rendered, ensure you have passed `true` as the second argument to `loadDiagram`; otherwise it is treated as EJ2 JSON and migration is skipped.

N> Predefined EJ1 data such as nodes/connectors without EJ1-specific properties are preserved, but features not supported by the EJ2 Diagram (for example, deprecated EJ1 node shapes or legacy connector behaviors) may require manual adjustment after loading.