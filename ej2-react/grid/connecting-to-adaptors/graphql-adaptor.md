---
layout: post
title: React Grid - GraphQL Adaptor | Syncfusion
description: React Grid GraphQL adaptor supports using GraphQL endpoints, mapping queries, and configuring operations to fetch, sort, and page data from GraphQL servers.
control: GraphQL Adaptor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
 
# GraphQL in React Grid
 
The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides seamless integration with GraphQL services, enabling modern, efficient data operations through a flexible query language. This comprehensive guide demonstrates how to configure and use the GraphQL with the Syncfusion React Grid to perform server-side operations including querying, mutations, filtering, sorting, paging, and complete CRUD functionality.
 
## Understanding GraphQL
 
[GraphQL](https://graphql.org/learn/introduction/) is a query language that allows applications to request exactly the data needed, nothing more and nothing less. Unlike traditional REST APIs that return fixed data structures, GraphQL enables the client to specify the shape and content of the response.
 
Traditional REST APIs and GraphQL differ mainly in the way data is requested and returned: REST APIs expose multiple endpoints that return fixed data structures, often including unnecessary fields and requiring several requests to fetch related data, while GraphQL uses a single endpoint where queries define the exact fields needed, enabling precise responses and allowing related data to be retrieved efficiently in one request. This makes GraphQL especially useful for React Grid integration, the reason is data‑centric UI components require well‑structured and selective datasets to support efficient filtering, reduce network calls, and improve overall performance.
 
**Key GraphQL concepts:**
 
- **Queries**: A query is a request to read data. Queries do not modify data; they only retrieve it.
- **Mutations**: A mutation is a request to modify data. Mutations create, update, or delete records.
- **Resolvers**: Each query or mutation is handled by a resolver, which is a function responsible for fetching data or executing an operation. Query resolvers handle read operations, while mutation resolvers handle write operations.
- **Schema**: Defines the structure of the API. The schema describes available data types, the fields within those types, and the operations that can be executed. Query definitions specify the way data can be retrieved, and mutation definitions specify the way data can be modified.
 
### GraphQL vs REST comparison
 
Understanding the key differences between GraphQL and REST helps appreciate the benefits of using GraphQL with Syncfusion Grid:
 
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
```graphql
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

**GraphQL Protocol benefits:**

- **Precise data retrieval**: Request only the fields needed, reducing bandwidth.
- **Single request**: Fetch related data in one query instead of multiple REST calls.
- **Strong typing**: Schema provides clear contract between client and server.
- **Self-documentation**: Introspection enables automatic API documentation.
- **Rapid development**: Faster iteration with flexible queries.
- **Reduced over-fetching**: Eliminates unnecessary data transfer.
 
### GraphQLAdaptor overview
 
The `GraphQLAdaptor` is a specialized adaptor in Syncfusion's DataManager that facilitates communication between the React Grid and GraphQL servers. It automatically transforms Grid operations into GraphQL queries and mutations.
 
**How GraphQLAdaptor works:**
 
1. **Grid action**: User performs operation (filter, sort, page, edit, etc.).
2. **Query construction**: GraphQLAdaptor builds GraphQL query with variables.
3. **Server request**: POST request sent to GraphQL endpoint.
4. **Query execution**: GraphQL server processes query and executes resolvers.
5. **Response processing**: GraphQLAdaptor extracts data from response.
6. **Grid rendering**: Grid displays updated data.
 
**Adaptor workflow example:**

- **Filter**: Sends `datamanager.where` variable with filter predicates.
- **Sort**: Sends `datamanager.sorted` variable with field and direction.
- **Page**: Sends `datamanager.skip` and `datamanager.take` variables.
- **CRUD**: Executes mutations (createOrder, updateOrder, deleteOrder).
 
**Integration benefits:**

- Automatic query variable management.
- Built-in support for filtering, sorting, and paging.
- Simplified CRUD operations through mutations.
- Flexible response mapping.
- Reduced boilerplate code.

For full integration of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid with GraphQL including support for data operations (paging, sorting, filtering) and CRUD actions refer to the official [GraphQLAdaptor integration](../connecting-to-backends/graphql-nodejs-server#prerequisites) guide.