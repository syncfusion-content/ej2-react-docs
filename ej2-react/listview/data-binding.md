---
layout: post
title: Data binding in React ListView component | Syncfusion
description: Learn here all about Data binding in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React ListView component

ListView provides the option to load data either from local data sources or remote data services. This can be done through the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource) property, which supports array data types or DataManager.

ListView supports different kinds of data services such as OData, OData V4, Web API and data formats like XML, JSON, JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| id | string | Specifies ID attribute of list item, mapped in dataSource. |
| text | string | Specifies list item display text field. |
| isChecked | string | Specifies checked status of list item. |
| isVisible | string | Specifies visibility state of list item. |
| enabled | string | Specifies enabled state of list item. |
| iconCss | string | Specifies the icon class of each list item which will be add before to inner text. |
| child | string | Specifies child dataSource fields. |
| tooltip | string | Specifies tooltip title text field. |
| groupBy | string | Specifies category of each list item. |
| sortBy | string | Specifies sorting field, which is used to sort the listview data. |
| htmlAttributes | string | Specifies list item html attributes field. |

> When complex data is bound to ListView, you should map the [`fields`](https://ej2.syncfusion.com/react/documentation/api/list-view/#fields) properly. Otherwise, the ListView properties remain as undefined or null.

## Bind to local data

Local data represents in two ways, which are described below.

* Array of simple data
* Array of JSON data.

### Array of simple data

ListView supports loading an array of primitive data like string and numbers. Here, both value and text field act as same.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/data-binding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/data-binding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/data-binding-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/data-binding-cs1" %}

### Array of JSON data

ListView can generate its list items from an array of complex data. To make it work properly, you should map the appropriate columns to field property.

The below example illustrates the concept of binding Array of JSON data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/data-binding-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/data-binding-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/data-binding-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/data-binding-cs2" %}

## Bind to remote data

ListView supports retrieving data from remote data services with the help of [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) component and [`Query`](https://ej2.syncfusion.com/react/documentation/data/querying) property allows fetching data and returning it to ListView from the database.

In the below sample, displays the first 6 Products from Product table of NorthWind data service.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/data-binding-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/data-binding-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/data-binding-cs3/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/data-binding-cs3" %}
