---
layout: post
title: React DataManger - Cache | Syncfusion
description: Improve performance in Syncfusion React DataManager by enabling cache to avoid redundant requests for paged data.
platform: ej2-react
control: Cache 
documentation: ug
domainurl: ##DomainURL##
---

# Cache in React DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager provides the `enableCache` property, which enhances performance by reducing redundant HTTP requests for previously visited pages. When caching is enabled, the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) retrieves data from the cache instead of sending a new request, minimizing server load and improving experience.

**How it works**

* When `enableCache` property is set to "true", the DataManager generates a unique ID at initialization and uses it to store previously loaded page data in cache memory. This enables efficient data retrieval without redundant server requests.

* The cache is automatically cleared when data actions such as sorting, filtering, grouping, searching, or CRUD operations (Create, Read, Update, Delete) are performed.

* This feature is supported by all adaptors in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager, ensuring consistent caching behavior across different data sources.

The following code demonstrates how to enable caching using the `enableCache` property in the Syncfusion<sup style="font-size:70%">&reg;</sup> React DataManager:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import React from 'react';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const App = () => {
  const data = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
    enableCache: true // Enables caching to prevent repeated HTTP requests.
  });

  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" width="100" />
        <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
        <ColumnDirective field="OrderDate" headerText="Order Date" format="yMd" textAlign="Right" width="120" />
      </ColumnsDirective>
    </GridComponent>
  );
};

export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import * as React from 'react';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const App: React.FC = () => {
  const data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
    enableCache: true // Enables caching to prevent repeated HTTP requests.
  });

  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" width="100" />
        <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
        <ColumnDirective field="OrderDate" headerText="Order Date" format="yMd" textAlign="Right" width="120" />
      </ColumnsDirective>
    </GridComponent>
  );
};

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}