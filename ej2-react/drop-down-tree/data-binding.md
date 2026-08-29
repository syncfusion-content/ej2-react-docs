---
layout: post
title: Data Binding in React Dropdown Tree | Syncfusion
description: Bind hierarchical, self-referential, or remote data to the React Dropdown Tree from local arrays, OData, Web API, or JSON via DataManager.
control: Dropdown Tree
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in React Dropdown Tree

The Dropdown Tree component provides flexible data binding capabilities to display hierarchical data from various sources. Data binding is essential for populating the Dropdown Tree with dynamic content and can be configured through the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#datasource) property, which is a member of the [`fields`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#fields) property. This enables seamless integration with both local data arrays and remote data services.

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#datasource) property supports an array of JavaScript objects and a `DataManager`. It also supports OData, OData V4, Web API, URL, and JSON-based services with the help of `DataManager` adaptors.

The Dropdown Tree supports load on demand (lazy loading), which optimizes performance by reducing bandwidth consumption when working with large datasets. By default, the `loadOnDemand` is set to false. When enabled through the `treeSettings` property, it loads only the first level items initially. Child items are loaded dynamically when their parent item is expanded, based on the `parentValue` or `child` field mapping.

## Local data

To bind local data to the Dropdown Tree, assign an array of JavaScript objects to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#datasource) property.

For local data binding, the Dropdown Tree uses the **value**, **text**, and **parentValue** fields to identify nodes, display text, and establish the parent-child relationship. When field mappings are not explicitly specified, the component uses default mapping fields. A local data source can also be provided as an instance of the `DataManager`. The component supports two primary local data binding methods.

* Hierarchical data

* Self-referential data

### Hierarchical data

Dropdown Tree can be populated with hierarchical data source that contains nested arrays of JSON objects. This structure represents parent-child relationships through nested object arrays rather than reference-based relationships. You can directly map the hierarchical data and the field members with corresponding key values from the hierarchical data to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#fields) property.

In the following example, **code**, **name**, and **countries** columns from the hierarchical data have been mapped to **value**, **text**, and **child** fields, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/hierarchial-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/hierarchial-data-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/hierarchial-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/hierarchial-data-cs1" %}

### Self-referential data

Dropdown Tree can be populated from self-referential data structure that contains an array of JSON objects with [`parentValue`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#parentvalue) mapping. This structure represents hierarchical relationships through parent-child references within a flat array, where each item contains a reference to its parent item.

You can directly assign the self-referential data and map all the field members with corresponding key values from self-referential data to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#fields) property.

To render the root level items, specify the parentValue as null or no need to specify the parentValue in the dataSource.

In the following example, **id**, **pid**, **hasChild**, and **name** columns from self-referential data have been mapped to **value**, **parentValue**, **hasChildren**, and **text** fields, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/self-referential-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/self-referential-data-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/self-referential-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/self-referential-data-cs1" %}

## Remote data

Dropdown Tree can also be populated from remote data services with the help of the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) control and [`Query`](https://ej2.syncfusion.com/react/documentation/data/querying) property. This approach is ideal for working with large datasets or when data needs to be fetched from external sources.

The component supports different kinds of data services such as OData, OData V4, Web API, URL, and JSON with the help of `DataManager` adaptors.

You can assign service data as an instance of `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsmodel#datasource) property. To interact with remote data source, you must provide the endpoint `url`.

The `DataManager` acts as the interface between the service endpoint and the Dropdown Tree and requires the following information to interact with the service endpoint correctly.

* `DataManager->url`: Defines the service endpoint to fetch data.

* `DataManager->adaptor`: Defines the adaptor option. By default, `ODataAdaptor` is used for remote binding.

The adaptor is responsible for processing requests and responses from the service endpoint. The `@syncfusion/ej2-data` package provides predefined adaptors for common service endpoints, including:

* `UrlAdaptor`: Used to interact with remote services and serves as the base for service-specific adaptors.

* `ODataAdaptor`: Used to interact with OData endpoints.

* `ODataV4Adaptor`: Used to interact with OData V4 endpoints.

* `WebApiAdaptor`: Used to interact with Web API endpoints that follow OData conventions.

* `WebMethodAdaptor`: Used to interact with web methods.

In the following example, `ODataV4Adaptor` is used to fetch data from the remote services. The **EmployeeID**, **FirstName**, and **EmployeeID** columns from the Employees table have been mapped to **value**, **text**, and **hasChildren** fields respectively for first level items.

The **OrderID**, **EmployeeID**, and **ShipName** columns from the orders table have been mapped to **value**, **parentValue**, and **text** fields respectively for second level items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/remote-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/remote-data-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/remote-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/remote-data-cs1" %}

## Prevent node selection

You can prevent the selection of individual tree node by using the [selectable](https://ej2.syncfusion.com/documentation/api/drop-down-tree/fieldsmodel#selectable) property. The tree node selection is not allowed when this property is disabled.

In the sample below, the [selectable](https://ej2.syncfusion.com/documentation/api/drop-down-tree/fieldsmodel#selectable) property is disabled, preventing selection for parent nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/prevent-node-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/prevent-node-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/prevent-node-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/prevent-node-cs1" %}
