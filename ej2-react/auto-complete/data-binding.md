---
layout: post
title: Data Binding in React AutoComplete | Syncfusion
description: Learn how to bind the Syncfusion React AutoComplete to local arrays, remote services, or complex objects using the dataSource property and field mapping.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in React AutoComplete

The React AutoComplete component loads data from local sources or remote services using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#datasource) property. It supports an array of JSON objects or a `DataManager` instance (which can wrap arrays or remote endpoints such as OData, OData V4, and Web API services), and can parse data formats such as XML, JSON, and JSONP through DataManager adaptors.

The React AutoComplete also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of DataManager adaptors.

## Field mapping

When binding data to the React AutoComplete, map the appropriate data fields to the component's fields to ensure proper display and functionality. The following table describes the available field properties:

| Fields | Type | Description |
|------|------|-------------|
| text | `string` | Specifies the data field that holds the display text shown for each list item. |
| value | `number \| string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy | `string` | Specifies the category under which the list item has to be grouped. |
| iconCss | `string` | Specifies the icon class of each list item. |

> When binding complex data to the React AutoComplete, fields should be mapped correctly. Otherwise, the selected item remains undefined. For examples of `groupBy` and `iconCss` usage, see the [grouping](./grouping) and [templates](./templates) topics.

## Binding local data

Local data can be represented in three ways as described below.

### Array of strings

The React AutoComplete has support to load array of primitive data such as strings and numbers.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs2" %}

### Array of objects

The React AutoComplete can generate its list items through an array of flat data. For this, the appropriate data fields should be mapped to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) property. When only `value` is mapped, the same field is used for both display and the selected item value.

In the following example, the `game` field from flat data is mapped to the `value` field.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs3" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs4" %}

### Array of complex objects

The React AutoComplete can render list items from an array of nested data. For this, the appropriate data fields should be mapped to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) property using dotted notation.

In the following example, the `Country.Name` field from nested data is mapped to the `value` field.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs5" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs6" %}

## Binding remote data

The React AutoComplete supports retrieving data from remote services with the help of the `DataManager` component. The [`Query`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#query) property is used to fetch data from the database and bind it to the React AutoComplete.

The below sample uses the OData V4 service endpoint and the `ODataV4Adaptor` to fetch the first 6 customers from the `Customers` table of the `Northwind` data service.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs7" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs8" %}

> For binding to other service types, see [OData](https://ej2.syncfusion.com/react/documentation/data/data-binding), [OData V4](https://ej2.syncfusion.com/react/documentation/data/adaptors), and [Web API](https://ej2.syncfusion.com/react/documentation/data/adaptors) using the corresponding `DataManager` adaptors.

## See also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping)
* [How to filter the bound data](./filtering)