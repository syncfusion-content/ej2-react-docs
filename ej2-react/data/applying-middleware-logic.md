---
layout: post
title: React DataManager - Applying Middleware logic | Syncfusion
description: Use middleware logic in Syncfusion React DataManager to add authentication, validate requests, or transform responses.
platform: ej2-react
control: Applying Middleware logic
documentation: ug
domainurl: ##DomainURL##
---

# Applying Middleware logic in React DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports applying middleware logic to modify requests and responses during data processing. This capability is useful for handling tasks such as authentication, validation, logging, and transforming response data. Middleware can be applied through two methods: `applyPreRequestMiddlewares` and `applyPostRequestMiddlewares`, each serving a specific stage in the data handling workflow.

**Pre-Request Middleware**

The `applyPreRequestMiddlewares` method executes before a request is sent to the server. It enables modification of request headers, query parameters, or payloads. This is commonly used for adding authentication tokens, restructuring requests, or performing validations. The following code snippet demonstrates how to add an authorization token:

```ts

dataManager.applyPreRequestMiddlewares([
  async (context) => {
    context.request.headers['Authorization'] = 'Bearer your-access-token';
  }
]);

```

**Post-Request Middleware**

The `applyPostRequestMiddlewares` method runs after a response is received from the server but before the data is bound to a component. It allows filtering, formatting, or restructuring the response to meet application requirements. The following code snippet demonstrates how to format response data:

```ts

dataManager.applyPostRequestMiddlewares([
  async (context) => {
    context.response.result = context.response.result.map(item => ({
      id: item.Id,
      name: item.Name.toUpperCase(),
      date: new Date(item.Timestamp).toLocaleDateString()
    }));
  }
]);

```

**Supported data adaptors**

Middleware functions are supported across multiple DataManager adaptors, including the [WebApiAdaptor](./adaptors/webapi-adaptor), [ODataAdaptor](./adaptors/odatav4-adaptor), and [CustomAdaptor](./adaptors/custom-adaptor), and can be applied to both local and remote data operations. This enhances flexibility, security, and overall control of data processing.

The example demonstrates using the [UrlAdaptor](./adaptors/url-adaptor) with middleware to adjust requests and responses. Before sending a request, `applyPreRequestMiddlewares` fetches an authentication token from an external server and adds it to the request headers. If the token retrieval fails, the DataManager failure event handles the error. Likewise, `applyPostRequestMiddlewares` processes the server response before it is bound to the UI, enabling any required transformations or filtering.

{% tabs %}
{% highlight ts tabtitle="App.jsx" %}
{% raw %}

import React, { Component } from "react";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const dataManager = new DataManager({
      url: "https://services.syncfusion.com/react/production/api/UrlDataSource",
      adaptor: new UrlAdaptor(),
    }).executeQuery(new Query().take(8)).then((e) => {
      this.setState({ items: e.result });
    });

    // Method to apply middleware before sending a request to the server.
    dataManager.applyPreRequestMiddlewares = async (request) => {
      const response = await fetch("https://example.com/api/token", { // Replace with your actual endpoint. This URL is just for example purposes..
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { token: "your_token_value" };
    };
  
    dataManager.dataManagerFailure = (e) => {
      //Handle DataManager failure event.
    };

    // Method to apply middleware after receiving a response from the server.
    dataManager.applyPostRequestMiddlewares = async (response) => {
      return response;
    };

  }

  render() {
    return (
      <table id='datatable' className='e-table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((row, index) => (
            <tr key={index}>
              <td>{row.OrderID}</td>
              <td>{row.CustomerID}</td>
              <td>{row.EmployeeID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import React, { Component } from "react";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

export default class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const dataManager:DataManager = new DataManager({
      url: "https://services.syncfusion.com/react/production/api/UrlDataSource",
      adaptor: new UrlAdaptor(),
    }).executeQuery(new Query().take(8)).then((e:any) => {
      this.setState({ items: e.result });
    });
    
    // Method to apply middleware before sending a request to the server.
    dataManager.applyPreRequestMiddlewares = async (request: string | Object): Promise<object> => {
      // Fetch authentication token from an external service.
      const response = await fetch('https://example.com/api/token', { // Replace with your actual endpoint. This URL is just for example purposes.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Return the authentication token.
      return { token: "your_token_value" };
    };

    dataManager.dataManagerFailure = (e: Error) => {
      //Handle DataManager failure event.
    }

    // Method to apply middleware after receiving a response from the server.
    dataManager.applyPostRequestMiddlewares = async (response: string | Object): Promise<Object> => {
      return response;
    };
  }
  render() {
    return (
      <table id='datatable' className='e-table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((row, index) => (
            <tr key={index}>
              <td>{row.OrderID}</td>
              <td>{row.CustomerID}</td>
              <td>{row.EmployeeID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

{% endraw %}
{% endhighlight %}
{% endtabs %} 