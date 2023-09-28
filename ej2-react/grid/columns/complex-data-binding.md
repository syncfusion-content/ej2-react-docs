---
layout: post
title: Complex data binding in React Grid component | Syncfusion
description: Learn here all about Complex data binding in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Complex data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Complex data binding in React Grid component

You can achieve complex data binding in the grid by using the dot(.) operator in the [column.field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/complex-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs1" %}

For OData and ODataV4 adaptors, you need to add [expand](https://ej2.syncfusion.com/documentation/api/data/query/#expand) query to the [query](https://ej2.syncfusion.com/react/documentation/api/grid/#query) property (of Grid), to eager load the complex data.

```ts
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  const data: DataManager = new DataManager({
    adaptor: new ODataAdaptor,
    crossDomain: true,
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
  });
  const query = new Query().expand('Employee');
  return <GridComponent dataSource={data} query={query} height={315} allowPaging={true}>
    <Inject services={[Page]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='Employee.City' headerText='City Name' width='150' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;
```