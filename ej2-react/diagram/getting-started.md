---
layout: post
title: Getting started with React Diagram component | Syncfusion
description:  Checkout and learn about Getting started with React Diagram component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram control.

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

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```
    npm install -g create-react-app
   ```

* To setup basic `React` sample use following commands.

    ```
    create-react-app quickstart --scripts-version=react-scripts-ts
    cd quickstart
   ```

### Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`Node Package Manager`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `Diagram` component.

To install Diagram component, use the following command

```bash
npm install @syncfusion/ej2-react-diagrams –save
```

### Adding Style sheet to the Application

Add Diagram component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-diagrams/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

### Adding Diagram component to the Application

* To include the Diagram component in application import the `DiagramComponent` from `ej2-react-diagrams` package.

* Then add the Diagram component as shown in below code example.

`[src/index.tsx]`

```ts
import * as React from "react";
import "./App.css";
// import the DiagramComponent
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
  return (
    <DiagramComponent id="container" />
  );
}
```

### Run the application

Now run the `npm start` command in the console, it will run your application and open the browser window.

```
npm start
```

The below examples shows the basic Diagram component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/getting-started/initialize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/initialize-cs1" %}

## Module Injection

The diagram component is divided into individual feature-wise modules. In order to use a particular feature, inject the required module. The following list describes the module names and their description.

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

These modules should be imported and injected into the Diagram component using `Diagram.Inject` method as follows.

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
  ConnectorEditing
} from "@syncfusion/ej2-react-diagrams";

export default function App() {
  return (
    <DiagramComponent id="container">
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
          ConnectorEditing
        ]}
      />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
```

## Flow Diagram

### Create and Add Node

Create and add a `node` (JSON data) with specific position, size, label, and shape.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/getting-started/addnode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/addnode-cs1" %}

### Connect two Nodes with a Connector

Add two node to the diagram as shown in the previous example. Connect these nodes by adding a connector using the `connector` property and refer the source and target end by using the `sourceNode` and `targetNode` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/getting-started/connectnode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/connectnode-cs1" %}

Default values for all `nodes` and `connectors` can be set using the `getNodeDefaults` and `getConnectorDefaults` properties, respectively. For example, if all nodes have the same width and height, such properties can be moved into `getNodeDefaults`.

### Complete Flow Diagram

Similarly we can add required nodes and connectors to form a complete flow diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/getting-started/flowdiagram-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/flowdiagram-cs1" %}

## Automatic Organization Chart

In ‘Flow Diagram’ section we saw how to create a diagram manually, now let us see how to create and position diagram automatically.

### Business object (Employee information)

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

You can configure the above "Employee Information" with diagram, so that the nodes and connectors are automatically generated using the mapping properties. The following code example show how `dataSourceSettings` is used to map ID and parent with property name identifiers for employee information.

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

### Visualize employee

Following code examples indicate how to define the default appearance of node and connector using default settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/getting-started/orgchart-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/getting-started/orgchart-cs1" %}

> You can refer to our [React Diagram](https://www.syncfusion.com/react-ui-components/react-diagram) feature tour page for its groundbreaking feature representations. You can also explore our [React Diagram example](https://ej2.syncfusion.com/react/demos/#/material/diagram/default-functionality) that shows how to render the Diagram in React.