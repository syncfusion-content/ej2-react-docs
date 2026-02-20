---
layout: post
title: React DataManager - Custom headers | Syncfusion
description: Send custom HTTP headers (e.g., authentication tokens, API keys) with Syncfusion React DataManager using the headers property.
platform: ej2-react
control: Adding custom headers in React DataManager
documentation: ug
domainurl: ##DomainURL##
---

# Custom headers for React DataManager
Custom headers provide a mechanism to send additional information along with HTTP requests made by the Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager). These headers can include authentication tokens, API keys, session identifiers, or any other metadata required by the server to validate and process the request correctly.

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager supports custom headers through its `headers` property, enabling secure and flexible communication between the client application and the server. This feature is particularly useful when requests must carry additional information for authentication, authorization, or contextual processing.

Steps to integrate custom headers into DataManager requests:

1. Create a new instance of `DataManager` with the required `URL` and `adaptor`.

2. Assign the custom headers to the `headers` property of the `DataManager` instance. 

3. Trigger the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager/executequery) method to send the request to the server with the custom headers.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}

import React from 'react';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

function Row({ item }) {
  return (
    <tr>
      <td>{item.OrderID}</td>
      <td>{item.CustomerID}</td>
      <td>{item.EmployeeID}</td>
    </tr>
  );
}
const SERVICE_URI = 'https://services.syncfusion.com/react/production/api/Orders';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    const dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor(),
      headers: [{ 'syncfusion-data-manager': 'true' }],
    });
    dataManager.executeQuery(new Query()).then((e) => {
      const results = e && e.result ? e.result : [];
      this.setState({ items: results });
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <table id="datatable" className="e-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <Row key={row.OrderID} item={row} />
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

import * as React from 'react';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

interface Order {
  OrderID: number;
  CustomerID?: string;
  EmployeeID?: number;
  [key: string]: any;
}
interface AppState {
  items: Order[];
  error?: string | null;
}
function Row({ item }: { item: Order }) {
  return (
    <tr>
      <td>{item.OrderID}</td>
      <td>{item.CustomerID}</td>
      <td>{item.EmployeeID}</td>
    </tr>
  );
}
const SERVICE_URI: string = 'https://services.syncfusion.com/react/production/api/Orders';
export default class App extends React.Component<{}, AppState>{
  constructor(props: {}) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    const dataManager: DataManager = new DataManager({ 
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor(),
      headers: [{ 'syncfusion-data-manager': 'true' }], 
    });
    dataManager.executeQuery(new Query())
    .then((e: any) => {
      const results: Order[] = (e && e.result) ? e.result : [];
      this.setState({ items: results });
    });
  }
  public render() {
    const { items } = this.state;
    return (
      <table id="datatable" className="e-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <Row key={row.OrderID} item={row} />
          ))}
        </tbody>
      </table>
    );
  }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}
