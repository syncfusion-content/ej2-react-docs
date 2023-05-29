---
layout: post
title: Data binding in React Spreadsheet component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Spreadsheet component

The Spreadsheet uses [`DataManager`](../data), which supports both RESTful JSON data services and local JavaScript object array binding to a range. The `dataSource` property can be assigned either with the instance of [`DataManager`](../data) or JavaScript object array collection.

To get start quickly with Data Binding, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=FK1OPoHIUPc" %}

> To bind data to a cell, use `cell data binding` support.

## Local data

To bind local data to the Spreadsheet, you can assign a JavaScript object array to the `dataSource` property.

Refer to the following code example for local data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/local-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/local-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/local-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/local-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs1" %}

> The local data source can also be provided as an instance of the [`DataManager`](../data). By default, [`DataManager`](../data) uses **JsonAdaptor** for local data-binding.

## Remote data

To bind remote data to the Spreadsheet control, assign service data as an instance of [`DataManager`](../data) to the `dataSource` property. To interact with remote data source, provide the service endpoint `url`.

Refer to the following code example for remote data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/remote-data-binding-cs1" %}

> By default, `DataManager` uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/remote-data-binding-cs2" %}

### Web API

You can use WebApiAdaptor to bind spreadsheet with Web API created using OData endpoint.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/remote-data-binding-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/remote-data-binding-cs3" %}

## Cell data binding

The Spreadsheet control can bind the data to individual cell in a sheet . To achive this you can use the `value` property.

Refer to the following code example for cell data binding.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/cell-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/cell-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/cell-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/cell-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/cell-data-binding-cs1" %}

> The cell data binding also supports formula, style, number format, and more.

## Dynamic data binding and Datasource change event

You can dynamically change the datasource of the spreadsheet by changing the `dataSource` property of the `range` object of the `sheet`. The `dataSourceChanged` event handler will be triggered when editing, inserting, and deleting a row in the datasource range. This event will be triggered with a parameter named `action` which indicates the `edit`, `add` and `delete` actions for the respective ones.

The following table defines the arguments of the `dataSourceChanged` event.

| Property | Type | Description |
|-----|-----|-------|
| action | string | Indicates the type of action such as `edit`, `add`, and `delete` performed in the datasource range. |
| data | object[] | Modified data for `edit` action; New data for `add` action; Deleted data for `delete` action. |
| rangeIndex | number | Specifies the range index of the datasource. |
| sheetIndex | number | Specifies the sheet index of the datasource. |

> For `add` action, the value for all the fields will be `null` in the data. In the case that you do not want the primary key field to be null which needs to be updated in the backend service, you can use `edit` action after updating the primary key field to update in the backend service. <br><br>
> For inserting a row at the end of the datasource range, you should insert a row below at the end of the range to trigger the `dataSourceChanged` event with action `add`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/dynamic-data-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/dynamic-data-binding-cs1" %}

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-ui-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://ej2.syncfusion.com/react/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Filtering](./filter)
* [Sorting](./sort)
* [Hyperlink](./link)
* [`Collaborative Editing`](use-cases/collaborative-editing)