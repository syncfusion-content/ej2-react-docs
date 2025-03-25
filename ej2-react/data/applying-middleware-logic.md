---
layout: post
title: Applying Middleware logic in React Data component | Syncfusion
description: Learn here all about applying Middleware logic in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Applying Middleware logic
documentation: ug
domainurl: ##DomainURL##
---

# Applying Middleware logic in React Data control

The Syncfusion DataManager allows you to implement middleware logic in your application. It enables you to modify requests and responses before they are sent to the server or processed by the client. This is useful for tasks such as authentication, validation, logging, and response transformation. You can apply middleware using two methods: `applyPreRequestMiddlewares` and `applyPostRequestMiddlewares`. The following sections provide a detailed explanation of these methods.

**Pre-Request Middleware**

The `applyPreRequestMiddlewares` method runs before a request is sent to the backend. It allows you to modify request headers, query parameters, or payloads. This is commonly used for adding authentication tokens, restructuring requests, or validating data before it is sent. The following code snippet demonstrates how to add an authorization token:

```ts

dataManager.applyPreRequestMiddlewares([
    async (context) => {
      context.request.headers['Authorization'] = 'Bearer your-access-token';
    }
]);

```

**Post-Request Middleware**

The `applyPostRequestMiddlewares` method runs after a response is received from the server but before binding the data to a component. It allows you to modify, filter, or restructure response data as needed. The following code snippet demonstrates how to format response data:

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

**Supported Data Adaptors**

Middleware functions work with various DataManager adaptors, including [WebApiAdaptor](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/web-api-adaptor), [ODataAdaptor](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/odatav4-adaptor), and `CustomAdaptor`. They can be used for both local and remote data processing. By using middleware, you can enhance the flexibility, security, and efficiency of data handling in your applications.

The following code example demonstrates how to use Syncfusion's [UrlAdaptor](https://ej2.syncfusion.com/react/documentation/grid/connecting-to-adaptors/url-adaptor) while applying middleware logic to modify requests and responses. Before sending a request to the backend, the `applyPreRequestMiddlewares` method retrieves an authentication token from an external middleware server and adds it to the request headers. If the middleware server fails to return a valid token, the DataManager failure event is triggered to handle the error.

Similarly, the `applyPostRequestMiddlewares` method processes the response before updating the component. This ensures that any necessary modifications, such as data transformation or filtering, are applied before binding the response to the UI. These middleware methods enhance request handling, improve security, and provide better control over data processing in the applications.

{% tabs %}
{% highlight ts tabtitle="app.js" %}
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
        const response = await fetch("https://example.com/api/token", { // Replace with your actual endpoint. This URL is just for example purposes.
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

    // Method to apply middleware after receiving a response from the server
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

{% highlight ts tabtitle="app.ts" %}
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

    // Method to apply middleware after receiving a response from the server
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