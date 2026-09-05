---
layout: post
title: React Grid Server Data Persistence | Syncfusion
description: Learn how to persist React Data Grid changes to a server, send CRUD requests, handle server responses, and synchronize data using adaptors.
control: Persisting data in server 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Server Data Persistence in React Data Grid

The [Data Grid](https://www.syncfusion.com/react-components/react-data-grid) component allows data edited within the grid to be persisted in a database using RESTful web services. All CRUD (Create, Read, Update, Delete) operations within the grid are handled by the [DataManager](../../data), which can bind server-side data and send updates to the server. This capability is Essential<sup style="font-size:70%">&reg;</sup> for maintaining data integrity and ensuring that changes made in the UI are reflected in the backend.

Syncfusion<sup style="font-size:70%">&reg;</sup> provides multiple adaptors to handle different server protocols and APIs, enabling smooth integration with RESTful services. Below are the various adaptors you can use to persist data in the React Data Grid component.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

## URL adaptor

The [UrlAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#url-adaptor) is the base adaptor that facilitates communication between remote data services and the UI component. It allows seamless data binding and interaction with custom API services or any remote service through URLs. The UrlAdaptor is particularly useful when a custom API service has unique logic for handling data and CRUD operations.

- For configuration details and examples, refer to the [URL adaptor Documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor).
- For CRUD examples, see [UrlAdaptor CRUD operations](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor#handling-crud-operations).

## Remote Save adaptor

The [RemoteSaveAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors/remote-save-adaptor)  in the Data Grid component allows grid actions such as sorting, filtering, searching, and paging to be performed primarily on the client side, while handling CRUD operations (updating, inserting, and removing data) on the server side for data persistence. This approach optimizes performance by minimizing unnecessary server interactions.

For further details on configuration, refer to the [Remote Save Adaptor Documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/remote-save-adaptor)

## OData V4 adaptor

The [ODataV4Adaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#odatav4-adaptor) in the Data Grid Component facilitates seamless integration with OData V4 services, allowing for efficient data fetching and manipulation. CRUD operations can be performed using the ODataV4Adaptor in the React Data Grid component.

- For configuration details and examples, refer to the [OData V4 Adaptor Documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor).
- For CRUD examples, see [OData V4 Adaptor CRUD operations](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor#handling-crud-operations).

## Web API adaptor

The [WebApiAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#web-api-adaptor) extends the capabilities of the ODataAdaptor and is designed to interact with Web APIs created with OData endpoints. This adaptor ensures seamless communication between the React Data Grid and OData-based Web APIs, enabling efficient data retrieval and manipulation.

- For configuration details and examples, refer to the [Web API Adaptor documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/webapi-adaptor).
- For CRUD examples, see [Web API Adaptor CRUD operations](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/webapi-adaptor#crud-operations).

## GraphQL adaptor

The [GraphQLAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#graphql-adaptor) enables the Data Grid to communicate with GraphQL services and perform CRUD operations through GraphQL queries and mutations. It supports efficient data retrieval by allowing applications to request only the required data from the server.

Refer to the [GraphQL Adaptor documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/graphql-adaptor) for setup details, advanced features, and examples.

## Web Method adaptor

The [WebMethodAdaptor](https://ej2.syncfusion.com/react/documentation/data/adaptors#webmethod-adaptor) facilitates data binding from remote services using web methods. This adaptor sends query parameters encapsulated within an object named value, allowing efficient communication between the client-side application and the server.

- For configuration, refer to [Web Method Adaptor documentation](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor).
- For CRUD examples, see [Web API Adaptor CRUD operations](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-method-adaptor#handling-crud-operations).
