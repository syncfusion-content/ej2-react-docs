---
layout: post
title: Working with data in React Mention component | Syncfusion
description: Learn here all about Working with data in Syncfusion React Mention component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Working with data in React Mention component

The Mention loads data from local or remote sources using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/mention/#datasource) property. It supports both `array` and `DataManager` data types.

The Mention also supports different kinds of data services such as OData V4 and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

> When binding complex data to the Mention, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

Local data can be represented in three ways as described in the following.

### Array of simple data

The Mention supports loading primitive data arrays such as strings and numbers. For primitive data, both the value and text fields represent the same data.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs2" %}

### Array of JSON data

The Mention generates list items from JSON data arrays. Map the appropriate columns to the [fields](https://ej2.syncfusion.com/react/documentation/api/mention/#fields) property.

In the following example, the `ID` and `Game` columns are mapped to the `value` and `text` fields respectively:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs4" %}

### Array of Complex data

The Mention generates list items from complex nested data. Map the appropriate nested columns to the [fields](https://ej2.syncfusion.com/react/documentation/api/mention/#fields) property.

In the following example, the `Code.ID` and `Country.Name` columns are mapped to the `value` and `text` fields respectively:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs6" %}

## Binding remote data

The Mention retrieves data from remote services using the `DataManager` component. Use the [query](https://ej2.syncfusion.com/react/documentation/api/mention/#query) property to fetch data from the database and bind it to the Mention.

### OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the `DataManager` can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [odata documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the `ODataV4Adaptor`.

The following sample displays the first 6 contacts from `Customers` table of the `Northwind` Data Service.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs8" %}

### Web API adaptor

You can use `WebApiAdaptor` to bind mention with Web API created using OData endpoint.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/working-with-data-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/working-with-data-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/working-with-data-cs10" %}

## See Also

* [Customization](./customization)
* [How to perform filtering](./filtering-data)