---
layout: post
title: Getting Started with React Diagram Component | Syncfusion®
description: Checkout and learn about getting started with Syncfusion Essential® React Diagram component, it's elements, and more.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Diagram

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram control.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Dependencies

The following list of dependencies are required to use the `Diagram` component in your application.

```javascript
|-- @syncfusion/ej2-react-diagrams
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-diagrams
    |-- @syncfusion/ej2-react-base
```

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`Node Package Manager`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `Diagram` component.

To install Diagram component, use the following command

```bash
npm install @syncfusion/ej2-react-diagrams --save
```

### Adding Style sheet to the Application

The following CSS files are available in ../node_modules/@syncfusion package folder. This can be added as reference in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-react-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```
N> To refer App.css in the application, import it in the src/App.tsx file.        `import './App.css';`


## Module Injection

The diagram component is divided into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the App. The following list describes the module names and their description.

* `BpmnDiagrams` - Inject this provider to add built-in BPMN Shapes to diagrams.
* `ConnectorBridging` - Inject this provider to add bridges to connectors.
* `ConnectorEditing` - Inject this provider to edit the segments for connector.
* `ComplexHierarchicalTree` - Inject this provider to complex hierarchical tree like structure.
* `DataBinding` - Inject this provider to populate nodes from given data source.
* `DiagramContextMenu` - Inject this provider to manipulate context menu.
* `HierarchicalTree` - Inject this provider to use hierarchical tree like structure.
* `LayoutAnimation` - Inject this provider animation to layouts.
* `MindMap` - Inject this provider to use mind map.
* `PrintAndExport` - Inject this provider to print or export the objects.
* `RadialTree` - Inject this provider to use Radial tree like structure.
* `Snapping` - Inject this provider to Snap the objects.
* `SymmetricLayout` - Inject this provider to render layout in symmetrical method.
* `UndoRedo` - Inject this provider to revert and restore the changes.
* `Ej1Serialization` - Inject this provider to load ej1 diagram json in ej2 diagram.

These modules should be injected into the diagram using the **Inject** directive.

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
  LayoutAnimation,
  DiagramContextMenu,
  ConnectorEditing,
  Ej1Serialization,
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
          LayoutAnimation,
          DiagramContextMenu,
          ConnectorEditing,
          Ej1Serialization
        ]}
      />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

### Adding Diagram component to the Application

* To include the Diagram component in application import the `DiagramComponent` from `ej2-react-diagrams` package.

* Then add the Diagram component as shown in below code example.

`[src/App.jsx]`

```ts
import './App.css';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
function App() {
  return (
    <div className="App">
        <DiagramComponent 
        id="diagram"
        width={'100%'}
        height={'500px'}></DiagramComponent>
    </div>
  );
}
export default App;

```

## Defining Basic Diagram

The below examples shows the basic diagram component which renders an empty diagram.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/initialize-cs1" %}

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

## Basic Diagram elements

* `Node`: Visualizes any graphical object using nodes, which can also be arranged and manipulated on a diagram page.
* `Connector`: Represents the relationship between two nodes. Three types of connectors provided as follows:

```

1) Orthogonal
2) Bezier
3) Straight

```
* `Port`: Acts as the connection points of node or connector and allows you to create connections with only specific points.
* `Annotation`: Shows additional information by adding text or labels on nodes and connectors.

## Flow Diagram

### Create and Add Node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/addnode-cs1" %}

### Apply shape and style to node

Syncfusion<sup style="font-size:70%">&reg;</sup> diagram control provides support to render many built-in shapes in diagram.
Please refer to [`Shapes`](shapes) to know about built-in Shapes.

The appearance of a node can be customized by changing its [`fill`](../api/diagram/shapeStyleModel/#fill-string) color, [`strokeColor`](../api/diagram/shapeStyleModel/#strokecolor-string), [`strokeWidth`](../api/diagram/shapeStyleModel/#strokewidth-number), [`borderColor`](../api/diagram/node/#borderColor-string), [`borderWidth`](../api/diagram/node/#borderWidth-number), [`strokeDashArray`](../api/diagram/shapeStyleModel/#strokeDashArray-number),  [`opacity`](../api/diagram/shapeStyleModel/#opacity-number), and [`shadow`](../api/diagram/shapeStyleModel/#shadow-number).


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/diagram/getting-started/apply-style/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/diagram/getting-started/apply-style/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/apply-style/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/apply-style" %}

### Add other flowchart nodes to the diagram

You can add multiple nodes with different shapes into diagram.

```Javascript

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    const nodes = [
        {
            id: 'Start', width: 140, height: 70, offsetX: 300, offsetY: 100,
            annotations: [{
              id: 'label1',
              content: 'Start'
            }],
            shape: { type: 'Flow', shape: 'Terminator' },
            style:{fill:'skyblue',strokeColor:'skyblue',},
        },
        {
            id: 'Process', width: 140, height: 70, offsetX: 300, offsetY: 200,
            annotations: [{
              id: 'label1',
              content: 'Process'
            }],
            shape: { type: 'Flow', shape: 'Process' },
            style:{fill:'skyblue',strokeColor:'skyblue',},
        },
        {
            id: 'Decision', width: 140, height: 70, offsetX: 300, offsetY: 300,
            annotations: [{
              id: 'label1',
              content: 'Decision'
            }],
            shape: { type: 'Flow', shape: 'Decision' },
            style:{fill:'skyblue',strokeColor:'skyblue',},
        }
    ];
    return (<DiagramComponent id="container" width={"100%"} height={"350px"} nodes={nodes}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

```

### Connect flow chart nodes

Connect these nodes by adding a connector using the [`connectors`](../api/diagram/connectorModel/) property of diagram and refer the source and target end by using the [`sourceID`](../api/diagram/connectorModel/#sourceid) and [`targetID`](../api/diagram/connectorModel/#targetid) properties.
The required nodes and connectors can be added to form a complete flow diagram.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/flowdiagram-cs1" %}
 
Default values for all [`nodes`](../api/diagram/nodemodel/) and [`connectors`](../api/diagram/connectorModel/) can be set using the [`getNodeDefaults`](../api/diagram/#getnodedefaults) and [`getConnectorDefaults`](../api/diagram/#getconnectordefaults) properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.


## Automatic Organization Chart

In ‘Flow Diagram’ section we saw how to create a diagram manually, now let us see how to create and position diagram automatically.

### Create Business object (Employee information)

Define Employee Information as JSON data. The following code example shows an employee array whose, `Name` is used as an unique identifier and `ReportingPerson` is used to identify the person to whom an employee report to, in the organization.

```ts
    const data: Object[] = [
        {
            Name: "Elizabeth",
            Role: "Director"
        },
        {
            Name: "Christina",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Yoshi",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Philip",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Yang",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Roland",
            ReportingPerson: "Yang",
            Role: "Lead"
        },
        {
            Name: "Yvonne",
            ReportingPerson: "Yang",
            Role: "Lead"
        }
    ];
```

### Map data source

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example demonstrates how to use [`dataSourceSettings`](../api/diagram/datasourcemodel/) to map [`id`](../api/diagram/dataSourceModel/#id) and [`parentId`](../api/diagram/dataSourceModel/#parentid) with the corresponding property names of employee information.

```ts

export default function App() {
  const data: Object[] = [
    {
      Name: "Elizabeth",
      Role: "Director"
    },
    {
      Name: "Christina",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Yoshi",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Philip",
      ReportingPerson: "Christina",
      Role: "Lead"
    },
    {
      Name: "Yang",
      ReportingPerson: "Elizabeth",
      Role: "Manager"
    },
    {
      Name: "Roland",
      ReportingPerson: "Yang",
      Role: "Lead"
    },
    {
      Name: "Yvonne",
      ReportingPerson: "Yang",
      Role: "Lead"
    }
  ];
  const dataSettings: object = {
    id: "Name",
    parentId: "ReportingPerson",
    dataManager: new DataManager(data as JSON[])
  }
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"350px"}
      dataSourceSettings={dataSettings}
    >
      <Inject services={[HierarchicalTree, DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

### Rendering layout with Datasource

To create an organizational chart, the [`type`](../api/diagram/layoutType/) of layout should be set as an `OrganizationalChart`. The following code example shows how DataManager is used to generate Layout based on the DataSourceSettings of the Diagram.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs1" %}


### Customize employee appearance

The following code examples indicate how to define the default appearance of nodes and connectors. The [`setNodeTemplate`](../api/diagram/#setnodetemplate) is used to update each node based on employee data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/getting-started/orgchart-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs2" %}

N> You can refer to our [React Diagram](https://www.syncfusion.com/react-components/react-diagram) feature tour page for its groundbreaking feature representations. You can also explore our [React Diagram example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/diagram/default-functionality) that shows how to render the Diagram in React.