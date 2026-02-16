---
layout: post
title: Adaptors in React Data component | Syncfusion
description: Learn here all about Adaptors in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
control: Adaptors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adaptors in React Data component

Each data source or remote service uses different way in accepting request and sending back the response. `DataManager` cannot anticipate every way a data source
works. To tackle this problem the `DataManager` uses the adaptor concept to communicate with particular data source.

For local data sources, the role of the data adaptor is to query the JavaScript object array based on the `Query` object and manipulate them.

When comes with remote datasource, the data adaptor is used to send the request that the server can understand and process the server response.

The adaptor can be assigned using the `adaptor` property of the
`DataManager`.

## Json adaptor

`JsonAdaptor` is used to query and manipulate JavaScript object array.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs1/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs1/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs1" %}

## Url adaptor

`UrlAdaptor` act as the base adaptor for interacting with remote data services. Most of the built-in adaptors are derived from the `UrlAdaptor`.

```ts
import { DataManager, Query, ReturnOption, UrlAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.syncfusion.com/react/production/api/UrlDataSource';

    new DataManager({
        adaptor: new UrlAdaptor,
        url: SERVICE_URI
    }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
        // e.result will contain the records
    });

```

`UrlAdaptor` expects response as a JSON object with properties `result` and `count` which contains the collection of entities and the total number of records respectively.

The sample response object should be as follows,

```
{
    "result": [{..}, {..}, {..}, ...],
    "count": 67
}
```

## OData adaptor

[OData](http://www.odata.org/documentation/odata-version-3-0/) is standardized protocol for creating and consuming data. You can retrieve data from OData service using `DataManager`. The `ODataAdaptor` helps you to interact with OData service. You can refer to the following code example of remote Data binding using OData service.

```ts
import { DataManager, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.odata.org/V3/Northwind/Northwind.svc/Orders/';

    new DataManager({
        adaptor: new ODataAdaptor,
        url: SERVICE_URI
    }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
        // e.result will contain the records
    });

```

`ODataAdaptor` expects JSON response from the server and the response object should contain properties `Items` ,`Result` and `Count` whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```
{
    Result: [{..}, {..}, {..}, ...],
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

> By default, `ODataAdaptor` is used by `DataManager`.

## ODataV4 adaptor

The ODataV4 is an improved version of OData protocols and the `DataManager` can also retrieve and consume OData v4 services. For more details on OData v4 Services, refer the [odata documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html). You can use the `ODataV4Adaptor` to interact with ODataV4 service.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs3/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs3/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs3/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs3/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs3" %}

## Web API adaptor

You can use the `WepApiAdaptor` to interact with Web API created with OData endpoint. The `WebApiAdaptor` is extended from the `ODataAdaptor`. Hence to use `WebApiAdaptor`, the endpoint should understand the OData formatted queries send along with request.

To enable OData query option for Web API, please refer to the [documentation](https://docs.microsoft.com/en-us/aspnet/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options)

```ts
import { DataManager, Query, ReturnOption, WebApiAdaptor } from '@syncfusion/ej2-data';

    const SERVICE_URI: string = 'https://services.syncfusion.com/react/production/api/orders';

    new DataManager({
        adaptor: new WebApiAdaptor,
        url: SERVICE_URI
    }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
        // e.result will contain the records
    });
```

`WebApiAdaptor` expects JSON response from the server and the response object should contain properties `Items` and `Count` whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## WebMethod Adaptor

The `WebMethodAdaptor` is used to bind data source from remote services and code behind methods. It can be enabled in Grid using Adaptor property of DataManager as `WebMethodAdaptor`.

For every operations, an Fetch post will be send to the specified data service.

```ts

import { DataManager, Query, ReturnOption, WebMethodAdaptor } from '@syncfusion/ej2-data';

    const SERVICE_URI: string = 'http://controller.com/api';

    new DataManager({
        adaptor: new WebMethodAdaptor,
        url: SERVICE_URI
    }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
        // e.result will contain the records
    });

```

`WebMethodAdaptor` expects JSON response from the server and the response object should contain properties `result` and `count` whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830
}
```

> The controller method's data parameter name must be `value`.

## GraphQL Adaptor

The `GraphQLAdaptor` provides an option to retrieve data from the GraphQL server. It performs CRUD and data operations such as paging, sorting, filtering etc by sending the required arguments to the server.

You can provide the GraphQL query string by using the `query` property of the `GraphQLAdaptor`. Since, the `GraphQLAdaptor` is extended from the `UrlAdaptor`, it expects response as a JSON object with properties `result` and `count` which contains the collection of entities and the total number of records respectively. The GraphQL response should be returned in JSON format like { "data": { ... }} with query name as field, you need to set the `result` and `count` properties to map the response.

```ts
import { DataManager, Query, GraphQLAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'http://controller.com/actions';

new DataManager({
        url: SERVICE_URI, adaptor: new GraphQLAdaptor({
        response: {
            result: 'getOrders.OrderData',
            count: 'getOrders.OrderCount'
        },
        query: `query getOrders($datamanager: String) {
            getOrders(datamanager: $datamanager) {
                OrderCount,
                OrderData{OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry}
             }
    }`
    })
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });
```

The Schema for the GraphQL server is

```ts

input OrderInput {
  OrderID: Int!
  CustomerID: String!
  EmployeeID: Int!
  ShipCity: String!
  ShipCountry: String!
}

type Order {
  OrderID: Int!
  CustomerID: String!
  EmployeeID: Int!
  ShipCity: String!
  ShipCountry: String!
}

type ReturnType {
  getOrders: [Order]
  count: Int
}

type Query {
  getOrders(datamanager: String): ReturnType
}
type Mutation {
  createOrder(value: OrderInput): Order!
  updateOrder(key: Int!, keyColumn: String, value: OrderInput): Order
  deleteOrder(key: Int!, keyColumn: String, value: OrderInput): Order!
}
```

The resolver for the corresponding action is

```ts
import { data } from "./db";

const resolvers = {
  Query: {
    getOrders: (parent, { datamanager }, context, info) => {
      if (datamanager.search) {
        // Perform searching
      }
      if (datamanager.sorted) {
        // Perform sorting
      }
      if (datamanager.where) {
        // Perform filtering
      }
      if (datamanager.search) {
        // Perform search
      }
      if (datamanager.skip && datamanager.take) {
        // Perform Paging
      }
      return { OrderData: data, OrderCount: data.length };
    }
  },
  Mutation: {
    createOrder: (parent, { value }, context, info) => {
      // Perform Insert
      return value;
    },
    updateOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Update
      return value;
    },
    deleteOrder: (parent, { key, keyColumn, value }, context, info) => {
      // Perform Delete
      return value;
    },
  }
};

export default resolvers;

```

The query parameters will be send in a string format which contains the below details.

| Parameters       | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `RequiresCounts` | If it is `true` then the total count of records will be included in response. |
| `Skip`           | Holds the number of records to skip.                                          |
| `Take`           | Holds the number of records to take.                                          |
| `Sorted`         | Contains details about current sorted column and its direction.               |
| `Where`          | Contains details about current filter column name and its constraints.        |
| `Group`          | Contains details about current Grouped column names.                          |

### Performing CRUD action with GraphQLAdaptor

You can perform the CRUD actions by returning the mutation queries inside the `getMutation` method based on the action.

```ts
import { DataManager, Query, GraphQLAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'http://controller.com/actions';

new DataManager({
        url: SERVICE_URI, adaptor: new GraphQLAdaptor({
        response: {
            result: 'getOrders.getOrders',
            count: 'getOrders.count'
        },
        query: `query getOrders($datamanager: String) {
            getOrders(datamanager: $datamanager) {
                count,
                getOrders{OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry}
             }
    }`,
    getMutation: function (action): string {
            if (action === 'insert') {
                return `mutation CreateOrderMutation($value: OrderInput!){
                                        createOrder(value: $value){
                                            OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                                    }}`;
            }
            if (action === 'update') {
                return `mutation Update($key: ID!, $keyColumn: String,$value: OrderInput){
                            updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                            }
                            }`;
            } else {
                return `mutation Remove($key: ID!, $keyColumn: String, $value: OrderInput){
                    deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
                                OrderID, CustomerID, EmployeeID, ShipCity, ShipCountry
                            }
                            }`;
            }
        }
    })
    }).executeQuery(new Query().take(8)).then((e) => {
        //e.result will contain the records
    });

```

## Writing custom adaptor

Sometimes the built-in adaptors does not meet your requirement. In such cases you can create your own adaptor.

To create and use custom adaptor, please refer to the below steps.

* Select an built-in adaptor which will act as base class for your custom adaptor.
* Override the desired method to achieve your requirement.
* Assign the custom adaptor to the `adaptor` property of `DataManager`.

For the sake of demonstrating custom adaptor approach, we are going to see how to add serial number for the records by overriding the built-in response processing using `processResponse` method of the `ODataV4Adaptor`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/getting-started-cs1/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/getting-started-cs1/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/getting-started-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/getting-started-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight js tabtitle="serialnoadaptor.jsx" %}
{% include code-snippet/data/getting-started-cs1/app/serialNoAdaptor.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="serialnoadaptor.tsx" %}
{% include code-snippet/data/getting-started-cs1/app/serialNoAdaptor.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/getting-started-cs1" %}
