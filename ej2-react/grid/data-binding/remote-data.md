---
layout: post
title: Remote data in React Grid component | Syncfusion
description: Learn here all about Remote data in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Remote data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Remote data in React Grid component

To bind remote data to grid component, assign service data as an instance of **DataManager** to the
[`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property. To interact with remote data source, provide the endpoint **url**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs4" % }

> By default **DataManager** uses [`ODataAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#odata-adaptor) for remote data-binding.

## OData adaptor - Binding OData service

[OData](http://www.odata.org/documentation/odata-version-3-0/) is standardized protocol for creating and consuming data.
You can retrieve data from OData service using DataManager. You can refer to the following code example of remote Data binding using OData service.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs5" % }

## OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the **DataManager** can also retrieve and consume OData v4 services.
 For more details on OData v4 services, refer to the
 [odata documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).
To bind OData v4 service, use the [`ODataV4Adaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#odatav4-adaptor).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs6" % }

## Web API adaptor

You can use [`WebApiAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#web-api-adaptor) to bind grid with Web API created using OData endpoint.

```typescript
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    const data = new DataManager({
        adaptor: new WebApiAdaptor,
        url: '/api/OrderApi'
    });
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
    </GridComponent>

};
export default App;
```

The response object should contain properties **Items** and **Count** whose values are collection of entities and total count of the entities respectively.

The sample response object should look like below.

```json
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Remote save adaptor

You may need to perform all Grid Actions in client-side except the CRUD operations, that should be interacted with server-side to persist data. It can be achieved in Grid by using **RemoteSaveAdaptor**.

Datasource must be set to **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to server-side using **updateUrl**, **insertUrl**, **removeUrl**, **batchUrl**, **crudUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Grid.

```typescript
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Edit,  EditSettingsModel } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const dataSource = new DataManager({
        adaptor: new RemoteSaveAdaptor,
        insertUrl: '/Home/Insert',
        json: data,
        removeUrl: '/Home/Delete',
        updateUrl: '/Home/Update'
    });
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    return <GridComponent dataSource={dataSource} editSettings={editSettings} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
};
export default App;
```

The following code example describes the CRUD operations handled at server-side.

```json
    const ActionResult Update = (OrdersDetails value) =>
    {
        ...
        return Json(value);
    }
    const ActionResult Insert = (OrdersDetails value) =>
    {
        ...
        return Json(value);
    }
    const ActionResult Delete = (int key) =>
    {
        ...
        return Json(data);
    }
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. For the sake of demonstrating custom adaptor approach,
we are going to see how to add serial number for the records
by overriding the built-in response processing using **processResponse** method of the [`ODataAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#odata-adaptor).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs7" % }

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side.
 To avoid post back for every action, set the grid to load all data on initialization and make the actions process in client-side.
 To enable this behavior, use the **offline** property of **DataManager**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/data-binding-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/data-binding-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs8" % }