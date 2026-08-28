---
layout: post
title: Data Binding in React Dropdown List | Syncfusion
description: Bind local arrays, JSON objects, or remote OData and Web API sources to the React Dropdown List using dataSource and DataManager adaptors.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in React Dropdown List

The DropDownList loads data from local sources or remote services using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#datasource) property. It supports both `array` and `DataManager` data types.

The component also supports various data services including OData, OData V4, and Web API, with support for XML, JSON, and JSONP formats through `DataManager` adaptors.

| Field | Type | Description |
|------|------|-------------|
| text | `string` | Specifies the display text of each list item. |
| value | `number or string` | Specifies the hidden data value mapped to each list item; should be unique. |
| groupBy | `string` | Specifies the category under which the list item has to be grouped. |
| iconCss | `string` | Specifies the icon class of each list item. |
| disabled | `boolean` | Specifies whether the item is disabled and cannot be selected. |

## Binding local data

The DropDownList can bind to local data in three forms: arrays of primitive values, arrays of objects, and arrays of nested objects. Use [fields](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#fields) when the source is an array of objects so `text`, `value`, and other display properties can be resolved.

### Array of primitive data

The DropDownList supports loading arrays of primitive data such as strings and numbers. In this case, the value and text fields are derived from the same item.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs8" %}

### Array of objects

The DropDownList generates list items from arrays of objects. Map the appropriate columns to the [fields](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#fields) property.

In the following example, the `Id` column is mapped to the `value` field and the `Game` column is mapped to the `text` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs10" %}

### Array of complex data

The DropDownList generates list items from arrays of complex objects by mapping nested properties to the [fields](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#fields) property.

In the following example, `Code.Id` is mapped to the `value` field and `Country.Name` is mapped to the `text` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs12" %}

## Binding remote data

The DropDownList supports retrieval of data from remote data services with the help of the `DataManager` component. The [Query](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#query) property is used to fetch data from the database and bind it to the DropDownList.

The following sample displays the first 6 contacts from the “Customers” table of the `Northwind` Data Service.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

  {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs14" %}

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping)
* [How to filter the bound data](./filtering)
* [How to get the count of the data when using remote data](./how-to/remote-data-bind)
* [How to achieve cascading](./how-to/cascading)
* [How to add item in between the options](./how-to/add-item)
* [How to remove an item](./how-to/remove-item)
* [How to preselect the items in dropdownlist](./how-to/multiple-cascading)