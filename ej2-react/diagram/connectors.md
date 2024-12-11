---
layout: post
title: Connectors in React Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Connectors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in React Diagram component

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/), refer to [`Connector Properties`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/). The [`id`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connectorModel/#id) property of a connector is used to define its unique identifier and can later be used to find the connector at runtime for customization.

```ts
let connectors = [{
        // id of the connector
        id: "connector1",
        sourcePoint: {x: 100, y: 100 },
        targetPoint: { x: 200,y: 200 }
    }];
```
N> Note: There should not be any white-spaces in the ID string while setting the ID.

## Add connectors through connectors collection

The [`sourcePoint`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#sourcepoint) and [`targetPoint`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#targetpoint) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectors-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectors-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectors-cs1" %}

## Add/remove connector at runtime

Connectors can be added at runtime by using public method, [`add`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#add) and can be removed at runtime by using public method, [`remove`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#remove).

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsatruntime-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsatruntime-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsatruntime-cs1" %}

## Add collection of connectors at runtime

The collection of connectors can be dynamically added using [`addElements`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#addelements) method.Each time an element is added to the diagram canvas, the [`collectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#collectionchange) event will be triggered.

The following code illustrates how to add connectors collection at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectoraddatRunTime-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectoraddatRunTime-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectoraddatRunTime-cs2" %}

## Add Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

The following code example illustrates how to add connectors in palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorfrompalette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorfrompalette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorfrompalette-cs1" %}

## Draw connectors

Connectors can be interactively drawn by clicking and dragging the diagram surface.

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#tool) property and you need to set the `connector` object by using the [`drawingObject`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#drawingobject) property.

The following code example illustrates how to draw a connector at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectordrawTool-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectordrawTool-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectordrawTool-cs1" %}

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsupdate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsupdate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsupdate-cs1" %}

## Clone connector at runtime

Cloning a connector creates a new connector instance with identical properties and attributes.

The following code example illustrates how to clone a connector

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorClone-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorClone-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorClone-cs1" %}

## Get Connector defaults

Get Connector defaults helps to define default properties of the connector. It is triggered when the diagram is initialized. In this event, you can customize the connector properties.

The following code example explains how to customize the connector using [`getConnectorDefaults`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#getconnectordefaults).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5getConnectordefaults-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5getConnectordefaults-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5getConnectordefaults-cs1" %}

## Connections

### Connection with nodes

* The [`sourceID`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#sourceid) and [`targetID`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#targetid) properties allow to define the nodes to be connected.

* The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs1" %}

* When you remove NodeConstraints [`InConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeConstraints) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 100,
        //Disable InConnect constraints
        constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
    }
];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Connections with ports

The [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#sourceportid) and [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#targetportid) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsport-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsport-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsport-cs1" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#targetportid).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsportupdate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Connectorsportupdate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Connectorsportupdate-cs1" %}

* When you set PortConstraints to [`InConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](https://ej2.syncfusion.com/react/documentation/api/diagram/portConstraints), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ConnectorModel,
    NodeModel,
    BasicShapeModel,
    PointPortModel,
    Diagram,
    DiagramComponent,
    PortVisibility
} from "@syncfusion/ej2-react-diagrams";
let port1: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
        }
    port1.shape = 'Circle';
    port1.id = 'nodeportnew';
    //Enable portConstraints Inconnect
    port1.constraints = PortConstraints.InConnect;
    let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 150,
        ports: [port1]
    },
];
function App() {
  return (
    <DiagramComponent id="container" width={900} height={900} nodes={nodes} />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it.Routing adjusts the geometry of connectors to prevent them from overlapping with any nearby nodes in their path. This feature can be activated by adding the LineRouting constraints property to the diagram.

* Dependency LineRouting module should be injected to the application as the following code snippet.

    ```ts

     import { Diagram,  LineRouting } from "@syncfusion/ej2-react-diagrams";
     /**
     * Injecting the automatic line routing module.
      */
     Diagram.Inject(LineRouting);
   ```

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

    ```ts
     /**
     *  Initialize the Diagram
     */
       <DiagramComponent constraints={DiagramConstraints.Default | DiagramConstraints.LineRouting} />
    ```

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsLineRouting-cs1" %}

The following image illustrates how the connector automatically re-routes the segments.  

![LineRouting GIF](images/lineRouting.GIF.gif)

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#constraints) property of the connector like the following code snippet.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsLineRoutingDisabled-cs1" %}

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)