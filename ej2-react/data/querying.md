---
layout: post
title: React DataManager - Querying | Syncfusion
description: Learn here all about Querying in Syncfusion React DataManager for filtering, sorting, paging, searching, grouping, aggregation, projection, expand, and hierarchical data.
control: Querying 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Querying in React DataManager

The `Query` class in Syncfusion<sup style="font-size:70%">&reg;</sup> React DataManager is used to build structured queries that interact with a data source. The queries define operations such as filtering, sorting, paging, and grouping, making it easier to retrieve and manipulate data in a consistent way.

By combining DataManager with the `Query` class, data operations can be executed either locally or against a remote service, depending on the configuration. This approach ensures that data handling remains efficient and flexible across different scenarios.

Key capabilities of `Query` class:
- **Filtering**: Retrieve records that match specific conditions.
- **Sorting**: Arrange records in ascending or descending order.
- **Paging**: Limit the number of records returned at once.
- **Grouping**: Organize records into logical categories.

## Specifying resource name using `from`

The `Query` class allows defining the source from which data should be retrieved. The `from` method specifies the resource name, such as a table or endpoint, and sets the context for all subsequent query operations. Once the resource is defined, filtering, sorting, paging, and other operations can be applied seamlessly to that target source.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs17/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs17/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %} 
{% include code-snippet/data/get-started-cs17/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs17" %}

## Projection using `select`

The `select` method in the `Query` class is used to project specific fields from a data source. Instead of retrieving all columns, select allows choosing only the required fields. This reduces the amount of data returned, minimizes payload size, and improves performance by limiting unnecessary information.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs18/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs18/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs18/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs18" %}

## Loading related data with `expand`

The `expand` method in the `Query` class is used to include related records when retrieving data. This technique, known as eager loading, ensures that navigation properties are fetched along with the main dataset. By expanding relationships, hierarchical or associated data can be accessed directly using dot‑separated field notation, making complex data retrieval more efficient.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-expand-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-expand-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-expand-started-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-expand-started-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-expand-started-cs1" %}

## Sorting

The `sortBy` method in the `Query` class arranges records in "ascending" order by default, while `sortByDesc` applies "descending" order. Alternatively, the descending parameter in sortBy can be used to specify sort direction. These methods enable precise control over data ordering based on selected fields.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs19/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs19/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs19/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs19" %}

> Multi sorting can be performed by simply chaining the multiple `sortBy` methods.

## Filtering

The `where` method in the `Query` class defines filter conditions to retrieve records that match specific criteria. Multiple filters can be combined using chainable syntax, enabling precise and efficient queries for complex scenarios.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs20/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs20/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs20/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs20" %}

### Filter Operators

Filter operators are generally used to specify the filter type. The various filter operators supported by DataManager is listed below.

* greaterthan
* greaterthanorequal
* lessthan
* lessthanorequal
* equal
* notequal
* startswith
* endswith
* contains

> These filter operators are used for creating filter query using `where` method and `Predicate` class.

### Complex filter criteria using `Predicate`

The `Predicate` class enables advanced filtering by combining multiple conditions using logical operators like AND and OR. It offers a structured approach to building complex queries beyond simple chaining, supporting powerful and flexible data filtering.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs21/app/App.tsx %}
{% endhighlight %} 
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs21/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs21/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs21/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs21" %}

## Searching

The `search` method in the `Query` class  performs a global search by applying a keyword across all fields in the dataset. It retrieves records with matches in any column, enabling broad and efficient data exploration beyond field‑specific filtering.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs22/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs22/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs22/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs22" %}

> To perform a search on specific fields, provide an array of field names as the second argument to the [search](https://ej2.syncfusion.com/documentation/api/data/query/#search) method.

## Grouping

The `group` method in the `Query` class organizes records into logical categories based on specified fields. This enables hierarchical structuring of data, making it easier to aggregate and present related records together. When combined with the DataManager, grouping supports efficient data analysis and visualization.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/group-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/group-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="grouptemplate.jsx" %}
{% include code-snippet/data/group-cs1/app/groupTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="grouptemplate.tsx" %}
{% include code-snippet/data/group-cs1/app/groupTemplate.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/group-cs1/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/group-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/group-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/group-cs1" %}

> Multiple grouping can be done by simply chaining the `group` method.

## Paging

The `page` method in the `Query` class retrieves records based on a specified page index and page size. This approach divides large datasets into smaller segments, improving performance and reducing memory consumption by loading only the required portion of data at a time.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs23/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs23/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs23/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs23/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs23" %}

## Aggregation

The `aggregate` method in the `Query` class computes statistical summaries such as sum, average, count, minimum, and maximum for specified fields within a dataset. This enables concise metric derivation, supporting analytical evaluation and reporting without requiring manual calculations.

The built-in aggregate types are,

* sum
* average
* min
* max
* count
* truecount
* falsecount

{% tabs %}
{% highlight js tabtitle="aggregatetemplate.jsx" %}
{% include code-snippet/data/get-started-cs24/app/aggregateTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="aggregatetemplate.tsx" %}
{% include code-snippet/data/get-started-cs24/app/aggregateTemplate.tsx %}
{% endhighlight %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs24/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs24/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs24/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs24/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs24" %}

## Hierarchical query

The `hierarchy` method in the `Query` class constructs nested queries to represent multi‑level data relationships. This is essential for scenarios involving related datasets, where parent‑child structures need to be expressed. When combined with the `foreignKey` method, it establishes links between parent and child records, enabling complex relational operations and efficient hierarchical data retrieval.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/child-data-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/child-data-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="childtemplate.jsx" %}
{% include code-snippet/data/child-data-cs1/app/childTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="childtemplate.tsx" %}
{% include code-snippet/data/child-data-cs1/app/childTemplate.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/child-data-cs1/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/child-data-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/child-data-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/child-data-cs1" %}