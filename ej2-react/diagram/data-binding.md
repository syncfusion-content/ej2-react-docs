---
layout: post
title: Data binding in React Diagram Component | Syncfusion®
description: Learn here all about Data binding in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in React Diagram Component

The React Diagram component supports data binding to populate nodes and connectors from external data sources. This feature enables dynamic diagram creation based on structured data, making it ideal for visualizing organizational charts, flowcharts, and hierarchical data structures.

Data binding in the Diagram component works by mapping data source fields to diagram elements through the `dataSourceSettings` property. The component supports both local JSON data and remote data sources, providing flexibility for various application scenarios.

## Key Data Binding Properties

The Diagram component exposes several data-related properties that control how data is mapped to diagram elements:

* The [`dataManager`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#datamanager) property is used to define the data source either as a collection of objects or as an instance of `DataManager` that needs to be populated in the diagram.

* The [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#id) property is used to define the unique field of each JSON data.

* The [`parentId`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#parentid) property is used to defines the parent field which builds the relationship between ID and parent field.

* The [`root`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#root) property is used to define the root node for the diagram populated from the data source.

* To explore those properties, see [`DataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel).

## Data Binding Types

The Diagram component supports two primary data binding approaches:

1. **Local data binding** - Uses client-side JSON data.
2. **Remote data binding** - Fetches data from server endpoints using DataManager.

## Local Data Binding

Local data binding allows the diagram to render nodes and connectors based on client-side JSON data. This approach is ideal for static data or scenarios where the entire dataset is available on the client side.

To implement local data binding, configure the [`dataSourceSettings`]fields to map your JSON data structure to diagram elements.

The following code example illustrates how to bind local data with the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5LocalBinding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5LocalBinding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/dataBinding/es5LocalBinding-cs1" %}

## Remote Data Binding

Remote data binding enables the diagram to fetch data from server endpoints using the DataManager service. This approach is suitable for large datasets, real-time data, or when data needs to be retrieved from databases or web services.

The DataManager handles data communication, while Query objects generate the requests that DataManager processes. This architecture provides powerful data manipulation capabilities including filtering, sorting, and paging.

For comprehensive DataManager information, see the `dataSourceSettings`. The following code illustrates how to bind remote data to the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5RemoteBinding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5RemoteBinding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/dataBinding/es5RemoteBinding-cs1" %}

## CRUD operations with Data Binding

The Diagram component supports Create, Read, Update, and Delete (CRUD) operations, allowing real-time synchronization between the diagram and its data source. This functionality enables users to modify diagram elements and persist changes to the backend.

### Reading Data from Multiple Sources

The diagram can simultaneously read from two data sources: one for nodes and another for connectors. This separation provides greater flexibility when dealing with complex data relationships.

**Node Data Source Configuration:**

*  Set the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#datasource) property to define the node data collection

*Use the [`id`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#id) property to specify the unique identifier field

**Connector Data Source Configuration:**

* Configure the [`connectionDataSource`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#connectiondatasource) property for connector data.

* Set [`sourceID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#sourceid) and [`targetID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#targetid) to establish connections.

* Define connection points using [`sourcePointX`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#sourcepointx), [`sourcePointY`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#sourcepointy), [`targetPointX`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#targetpointx), and [`targetPointY`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#targetpointy)

* The dataSourceSettings connectionDataSource [`dataManager`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectionDataSourceModel#datamanager) property is used to set the data source for the connection data source items.

**Priority handling:** When both parent-child relationships in the main data source and explicit connectors in the connectionDataSource are defined, the explicit connectors take priority for rendering.

* The dataSourceSettings [`crudAction’s`](https://ej2.syncfusion.com/react/documentation/api/diagram/dataSourceModel#crudaction) [`read`](https://ej2.syncfusion.com/react/documentation/api/diagram/crudActionModel#read) property specifies the method, which is used to read the data source and its populate the nodes in the diagram.

* The connectionDataSource crudAction’s `read` specifies the method, which is used to read the data source and its populates the connectors in the diagram.

**Custom fields:** Use the [`customFields`](https://ej2.syncfusion.com/react/documentation/api/diagram/crudActionModel#customfields) property in crudAction to maintain additional information for both nodes and connectors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5connectionDataSource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5connectionDataSource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/dataBinding/es5connectionDataSource-cs1" %}

### How to Perform Editing at Runtime

* The dataSourceSettings crudAction object allows you to define the method, which is used to get the changes done in the data source defined for shapes from the client-side to the server-side.

* Similarly, the connectionDataSource crudAction object allows you to define the method, which is used to get the changes done in the data source defined for connectors from the client-side to the server-side.

#### Creating New Data (InsertData)

* The dataSourceSettings crudAction’s [`create`](https://ej2.syncfusion.com/react/documentation/api/diagram/crudActionModel#create) property specifies the method, which is used to get the nodes added from the client-side to the server-side.

* The connectionDataSource crudAction’s  `create` specifies the method, which is used to get the connectors added from the client-side to the server-side.

* The following code example illustrates how to send the newly added or inserted data from the client to server-side.

{% raw %}

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    DataBinding
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      // diagram instance for an diagram
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'550px'}
      //Configures data source for diagram
      dataSourceSettings={{
        crudAction: {
          //Url which triggers the server side AddNodes method
          create:
            'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddNodes',
        },
        connectionDataSource: {
          crudAction: {
            //Url which triggers the server side AddConnectors method
            create:
              'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddConnectors',
          },
        },
      }}
    >
      <Inject services={[DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

//Sends the inserted nodes/connectors from client side to the server side through the URL which is specified in server side.
diagramInstance.insertData();
```
{% endraw %}

## UpdateData

* The dataSourceSettings crudAction’s [`update`](https://ej2.syncfusion.com/react/documentation/api/diagram/crudActionModel#update) property specifies the method, which is used to get the modified nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s `update` specifies the method, which is used to get the modified connectors from the client-side to the server-side.

* The following code example illustrates how to send the updated data from the client to the server side.

{% raw %}

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    DataBinding
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      // diagram instance for an diagram
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'550px'}
      //Configures data source for diagram
      dataSourceSettings={{
        crudAction: {
          //Url which triggers the server side UpdateNodes method
          update:
            'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateNodes',
        },
        connectionDataSource: {
          crudAction: {
            //Url which triggers the server side UpdateConnectors method
            update:
              'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateConnectors',
          },
        },
      }}
    >
      <Inject services={[DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

//Sends the updated nodes/connectors from client side to the server side through the URL which is specified in server side.
diagramInstance.updateData();
```
{% endraw %}

## DeleteData

* The dataSourceSettings crudAction’s [`destroy`](https://ej2.syncfusion.com/react/documentation/api/diagram/crudActionModel#destroy) property specifies the method, which is used to get the deleted nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s `destroy` specifies the method, which is used to get the deleted connectors from the client-side to the server-side.

{% raw %}

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    DataBinding
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      // diagram instance for an diagram
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'550px'}
      //Configures data source for diagram
      dataSourceSettings={{
        crudAction: {
          //Url which triggers the server side DeleteNodes method
          destroy:
            'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteNodes',
        },
        connectionDataSource: {
          crudAction: {
            //Url which triggers the server side DeleteConnectors method
            destroy:
              'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteConnectors',
          },
        },
      }}
    >
      <Inject services={[DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

//Sends the deleted nodes/connectors from client side to the server side through the URL which is specified in server side.
diagramInstance.removeData();
```
{% endraw %}

## See Also

* [How to arrange the diagram nodes and connectors using varies layout](./automatic-layout)