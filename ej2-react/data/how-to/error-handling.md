---
layout: post
title: React DataManager - Deferred Execution and Error Handling | Syncfusion
description: Learn how to use deferred execution and error handling in Syncfusion React DataManager for robust asynchronous data operations.
platform: ej2-react
control: Deferred execution and error handling in React DataManager
documentation: ug
domainurl: ##DomainURL##
---

# Deferred Execution and Error Handling

Deferred execution and error handling is a powerful technique in asynchronous programming that efficiently manages time-consuming operations such as network requests, server data loading, and file access.

This approach enhances code readability, maintainability, and robustness by cleanly separating the logic for successful execution (`then`, `resolve`) from error handling (`catch`, `reject`). It enables seamless chaining of asynchronous tasks and ensures that errors are caught and managed gracefully, preventing unexpected application crashes.

Deferred execution and error handling rely on the following core concepts:

| Concept | Description |
|---------|-------------|
| `catch` | Handles errors or rejections that occur during the asynchronous operation. |
| `promise` | Represents the eventual completion (or failure) of an asynchronous operation and its resulting value. If it fails, it passes an error or reason to the rejection handler for appropriate processing. |
| `reject` | Indicates that the asynchronous operation has failed and passes an error or reason to the handler. |
| `resolve` | Indicates that the asynchronous operation has completed successfully and passes the result to the handler. |
| `then` | Executes the logic that runs after the asynchronous operation completes successfully. It allows chaining of further actions. |

The following sample demonstrates how to use deferred execution and error handling:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import { DataManager, Deferred, ODataV4Adaptor, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        message: '',
        messageColor: 'green',
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        const initialDeferred = new Deferred();
        this.handleResult(initialDeferred);
        this.fetchDataWithAdaptor(SERVICE_URL, new ODataV4Adaptor(), initialDeferred);
    }

    fetchDataWithAdaptor(url, adaptor, deferred) {
        const manager = new DataManager({ url, adaptor, crossDomain: true });
        manager.executeQuery(new Query())
        .then((response) => {
            if ('result' in response) {
            deferred.resolve((response).result);
            }
        })
        .catch((error) => {
            deferred.reject(error);
        });
    }

    handleResult(deferred) {
        (deferred.promise)
        .then((result) => {
            this.setState({
            items: result,
            message: '✅ Data loaded successfully',
            messageColor: 'green',
            });
        })
        .catch(() => {
            this.setState({
            items: [],
            message: '❌ Error loading data',
            messageColor: 'red',
            });
        });
    }

    onChange(args) {
        const newDeferred = new Deferred();
        const useOrders = args.checked;
        const newUrl = useOrders ? SERVICE_URL : CUSTOMER_URL;
        const newAdaptor = useOrders
        ? new ODataV4Adaptor()
        : new UrlAdaptor();
        this.handleResult(newDeferred);
        this.fetchDataWithAdaptor(newUrl, newAdaptor, newDeferred);
    }

    render() {
        const { items, message, messageColor } = this.state;
        return (
        <div>
            <div id="container">
            <label id="switch-label">Toggle Data</label>
            <SwitchComponent cssClass="handle-text" change={this.onChange} />
            </div>
            <div id="message" style={{ color: messageColor }}>{message}</div>
            <table id="datatable" className="e-table">
            <thead>
                <tr>
                <th>Order ID</th>
                <th>Customer ID</th>
                <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.OrderID}</td>
                    <td>{item.CustomerID}</td>
                    <td>{item.EmployeeID}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        );
    }
}

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}

import { DataManager, Deferred, ODataV4Adaptor, Query, UrlAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { IOrders } from './orders';

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';

interface AppState {
  items: IOrders[];
  message: string;
  messageColor: string;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
      message: '',
      messageColor: 'green',
    };
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    const initialDeferred = new Deferred();
    this.handleResult(initialDeferred);
    this.fetchDataWithAdaptor(SERVICE_URL, new ODataV4Adaptor(), initialDeferred);
  }

  private fetchDataWithAdaptor(url: string, adaptor: ODataV4Adaptor | UrlAdaptor, deferred: Deferred) {
    const manager = new DataManager({ url, adaptor, crossDomain: true });
    manager.executeQuery(new Query())
      .then((response: object) => {
        if ('result' in response) {
          deferred.resolve((response as { result: IOrders[] }).result);
        }
      })
      .catch((error: object) => {
        deferred.reject(error);
      });
  }

  private handleResult(deferred: Deferred) {
    (deferred.promise as Promise<IOrders[]>)
      .then((result: IOrders[]) => {
        this.setState({
          items: result,
          message: '✅ Data loaded successfully',
          messageColor: 'green',
        });
      })
      .catch(() => {
        this.setState({
          items: [],
          message: '❌ Error loading data',
          messageColor: 'red',
        });
      });
  }

  public onChange(args: ChangeEventArgs) {
    const newDeferred = new Deferred();
    const useOrders: boolean = args.checked as boolean;
    const newUrl: string = useOrders ? SERVICE_URL : CUSTOMER_URL;
    const newAdaptor: ODataV4Adaptor | UrlAdaptor = useOrders
      ? new ODataV4Adaptor()
      : new UrlAdaptor();
    this.handleResult(newDeferred);
    this.fetchDataWithAdaptor(newUrl, newAdaptor, newDeferred);
  }

  public render() {
    const { items, message, messageColor } = this.state;
    return (
      <div>
        <div id="container">
          <label id="switch-label">Toggle Data</label>
          <SwitchComponent cssClass="handle-text" change={this.onChange} />
        </div>
        <div id="message" style={{ color: messageColor }}>{message}</div>
        <table id="datatable" className="e-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: IOrders, index: number) => (
              <tr key={index}>
                <td>{item.OrderID}</td>
                <td>{item.CustomerID}</td>
                <td>{item.EmployeeID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/error-handling/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/error-handling" %}
