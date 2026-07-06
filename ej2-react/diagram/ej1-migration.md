---
layout: post
title: EJ1 migration in React Diagram component | Syncfusion®
description: Learn here all about EJ1 migration in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: EJ1 Migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## How to load EJ1 diagram in EJ2 diagram

To load EJ1 JSON data in an EJ2 diagram, follow these steps.

1.	Import and inject the EJ1SerializationModule as shown in the following code example.

```ts

import {
  Diagram,
  DiagramComponent,
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(EJ1SerializationModule);
//Initializes the symbol palette
function App() {
  return (
   <DiagramComponent
      id="diagram"
      width={'100%'}
      height={'600px'}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

```

2.	Load the EJ1 JSON data using the diagram loadDiagram method and set the second parameter to true.

```ts

function diagramCreated(){
  var diagram = document.getElementById("diagram").ej2_instances[0];
  var ej1Data = {"JSONData"};  //Replace JSONData with your EJ1 JSON data
  //Load the EJ1 JSON and pass a boolean value as true.
  diagram.loadDiagram(ej1Data, true);
  }

```