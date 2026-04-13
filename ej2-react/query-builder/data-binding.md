---
layout: post
title: Data binding in React Query builder component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Query Builder component

The Query Builder uses DataManager to support both local JavaScript arrays and remote RESTful JSON services. Bind data using the `dataSource` property with either a DataManager instance or a JavaScript object array. Two binding methods are available:

* Local data
* Remote data

## Local data

To bind local data to the Query Builder, assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource) property. You can also provide local data as a DataManager instance.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs4" %}

> By default, DataManager uses JsonAdaptor for local data binding.

## Remote data

To bind remote data to the Query Builder, assign service data as a DataManager instance to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#datasource) property, specifying the service endpoint URL.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs5" %}

> By default, DataManager uses ODataAdaptor for remote data binding.

### Binding with OData services

[OData](https://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data APIs. Retrieve data from OData services using DataManager. Refer to the following example for remote data binding with OData:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs6/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs6" %}

### Binding with OData v4 services

OData v4 is an improved version of the OData protocol. DataManager supports OData v4 service consumption. For more details, refer to the [OData v4 specification](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 services, use ODataV4Adaptor.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs7/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs7" %}

### Web API

You can use `WebApiAdaptor` to bind query builder with Web API created using OData endpoint.



```ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { QueryBuilderComponent, ColumnsModel, RuleModel } from '@syncfusion/ej2-react-querybuilder';

function App() {
    let data = new DataManager({
        url: '/api/OrderAPI',
        adaptor: new WebApiAdaptor
    });

    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
            'label': 'EmployeeID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1
        },
        {
            'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Sales Manager'
        }]
    };

    return (
            <QueryBuilderComponent width='100%' dataSource={data} columns={columnData} rule={importRules} ></QueryBuilderComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));
```

```ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
function App() {
    let data = new DataManager({
        url: '/api/OrderAPI',
        adaptor: new WebApiAdaptor
    });
    let columnData = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'EmployeeID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Sales Manager'
            }]
    };
    return (<QueryBuilderComponent width='100%' dataSource={data} columns={columnData} rule={importRules}></QueryBuilderComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
```

## Data Manager

You can use the created conditions in DataManager through the getPredicate method. This method creates predicates which is used as conditions in DataManager. In this example given below, `getValidRules` method is used to get the valid queried data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/datamanager-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/datamanager-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/datamanager-cs1" %}

## Complex Data Binding

Complex Data Binding allows you to create subfield for columns. To implement complex data binding, either bind the complex data in nested columns or specify complex data source and separator must be given in querybuilder.

In the following sample, complex data was bound in nested columns.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/complex-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/complex-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/complex-data-binding-cs1" %}