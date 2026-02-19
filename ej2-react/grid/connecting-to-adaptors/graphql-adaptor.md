---
layout: post
title: React Grid - GraphQL Adaptor | Syncfusion
description: React Grid GraphQL adaptor supports using GraphQL endpoints, mapping queries, and configuring operations to fetch, sort, and page data from GraphQL servers.
control: GraphQL Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
 
# GraphQL in Syncfusion React Grid
 
The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides seamless integration with GraphQL services, enabling modern, efficient data operations through a flexible query language. This comprehensive guide demonstrates configuring and using GraphQL with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid to perform server-side operations including querying, mutations, filtering, sorting, paging, and complete CRUD functionality.
 
## Understanding GraphQL
 
[GraphQL](https://graphql.org/learn/introduction/) is a query language that allows applications to request exactly the data needed, nothing more and nothing less. Unlike traditional REST APIs that return fixed data structures, GraphQL enables the client to specify the shape and content of the response.
 
Traditional REST APIs and GraphQL differ mainly in the way data is requested and returned: REST APIs expose multiple endpoints that return fixed data structures, often including unnecessary fields and requiring several requests to fetch related data, while GraphQL uses a single endpoint where queries define the exact fields needed, enabling precise responses and allowing related data to be retrieved efficiently in one request. This makes GraphQL especially useful for React Grid integration, the reason is data‑centric UI components require well‑structured and selective datasets to support efficient filtering, reduce network calls, and improve overall performance.
 
**Key GraphQL concepts:**
 
- **Queries**: A query is a request to read data. Queries do not modify data; they only retrieve it.
- **Mutations**: A mutation is a request to modify data. Mutations create, update, or delete records.
- **Resolvers**: Each query or mutation is handled by a resolver, which is a function responsible for fetching data or executing an operation. Query resolvers handle read operations, while mutation resolvers handle write operations.
- **Schema**: Defines the structure of the API. The schema describes available data types, the fields within those types, and the operations that can be executed. Query definitions specify the way data can be retrieved, and mutation definitions specify the way data can be modified.
 
### GraphQL vs REST comparison
 
Understanding the key differences between GraphQL and REST helps appreciate the benefits of using GraphQL with Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:
 
| Aspect | REST API | GraphQL |
|--------|----------|---------|
| **Endpoints** | Multiple endpoints (/api/orders, /api/customers). | Single endpoint (/graphql). |
| **Data fetching** | Fixed data structure per endpoint. | Flexible, client specifies exact data needs. |
| **Over-fetching** | Common (gets unnecessary data). | Eliminated (requests only needed fields). |
| **Under-fetching** | Requires multiple requests. | Single request for complex data. |
| **Versioning** | Requires API versioning (v1, v2). | Schema evolution without versioning. |
| **Type system** | Not built-in | Strongly typed schema. |
| **Query format** | URL parameters | Structured query language. |
| **Real-time** | Requires separate solution. | Built-in subscriptions support. |
 
**GraphQL Query example:**

```ts
query {
  getOrders {
    result {
      OrderID
      CustomerID
      ShipCity
    }
    count
  }
}
```

**Benefits of GraphQL for Grid integration:**

- **Precise data retrieval**: Request only the fields needed, reducing bandwidth.
- **Single request**: Fetch related data in one query instead of multiple REST calls.
- **Strong typing**: Schema provides clear contract between client and server.
- **Self-documentation**: Introspection enables automatic API documentation.
- **Rapid development**: Faster iteration with flexible queries.
- **Reduced over-fetching**: Eliminates unnecessary data transfer.
 
### Integrating Syncfusion React Grid with GraphQLAdaptor
 
The `GraphQLAdaptor` is a specialized adaptor in Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager` that facilitates communication between the React Grid and GraphQL servers. It automatically transforms Grid operations into GraphQL queries and mutations.
 
**Workflow:**
 
1. **Grid action**: A data operation (filter, sort, page, edit, etc.) is triggered in the Grid.
2. **Query construction**: `GraphQLAdaptor` builds a GraphQL query with variables.
3. **Server request**: A POST request is sent to the GraphQL endpoint.
4. **Query execution**: The GraphQL server processes the query and executes resolvers.
5. **Response processing**: `GraphQLAdaptor` extracts data from the response.
6. **Grid rendering**: The Grid displays the updated data.
 
**Data operations:**

- **Filtering**: Sends `datamanager.where` variable with filter predicates.
- **Sorting**: Sends `datamanager.sorted` variable with field and direction.
- **Paging**: Sends `datamanager.skip` and `datamanager.take` variables.
- **CRUD**: Executes mutations (createOrder, updateOrder, deleteOrder).

For complete integration of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid with GraphQL, including support for data operations such as paging, sorting, filtering, and full CRUD functionality, refer to the following official guides:

- [Syncfusion React Grid with GraphQL backend in Node.js](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-backends/graphql-nodejs-server)

- [Syncfusion React Grid with Hot Chocolate GraphQL backend in ASP.NET Core]()