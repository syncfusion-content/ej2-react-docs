---
layout: post
title: Data binding in React AutoComplete Component | Syncfusion
description: Learn here all about data binding in Syncfusion Essential React AutoComplete component, it's elements and more details.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React AutoComplete Component

The AutoComplete loads the data either from local data sources or remote data services using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#datasource) property .
It supports the data type of array or `DataManager`.

The AutoComplete also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item.|

> When binding complex data to the AutoComplete, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in two ways as described below.

### Array of string

The AutoComplete has support to load array of primitive data such as strings and numbers.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs2" %}

### Array of object

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#fields) property.

In the following example, `sports` column from complex data have been mapped to the `value` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs4" %}

### Array of Complex object

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#fields) property.

In the following example, `Country.Name` column from complex data have been mapped to the `value` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs5" %}

`[Functional-component]`

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

The AutoComplete supports retrieval of data from remote data services with the help of `DataManager` component. The [`Query`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#query) property is used to fetch data from the database and bind it to the AutoComplete.

The below sample displays the first 6 contacts from the `Customers` table of the `Northwind` data service.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs8" %}

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping/)
* [How to filter the bound data](./filtering/)