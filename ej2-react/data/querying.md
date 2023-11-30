---
layout: post
title: Querying in React Data component | Syncfusion
description: Learn here all about Querying in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
control: Querying 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Querying in React Data component

In this section, you will see in detail about how to build query using [Query](https://ej2.syncfusion.com/documentation/api/data/query/) class and consume
the data source.

## Specifying resource name using `from`

The `from` method is used to specify the resource name or table name from where the data should be retrieved.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs17/app/orders.jsx %}
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

## Projection using select

The [select](https://ej2.syncfusion.com/documentation/api/data/query/#select) method is used to select particular fields or columns from the data source.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs18/app/orders.jsx %}
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

## Eager loading navigation properties

You can use the [expand](https://ej2.syncfusion.com/documentation/api/data/query/#expand) method to eagerly load navigation properties. The navigation properties
values are accessed using appropriate field names separated by dot(.) sign.

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

You can use the [sortBy](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) method to perform sort operation in the data source. Default sorting order is **ascending**. To change the sort order, either you can specify the second argument of [sortBy](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) as **descending** or use the [sortByDesc](https://ej2.syncfusion.com/documentation/api/data/query/#sortbydesc) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs19/app/orders.jsx %}
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

You can use the [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method to build filter criteria which allows you to get reduced view of
records. The [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method can also be chained to form multiple filter criteria.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs20/app/orders.jsx %}
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

Filter operators are generally used to specify the filter type. The various filter operators supported by [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is listed below.

* greaterthan
* greaterthanorequal
* lessthan
* lessthanorequal
* equal
* notequal
* startswith
* endswith
* contains

> These filter operators are used for creating filter query using [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method and [Predicate](https://ej2.syncfusion.com/documentation/api/data/predicate/) class.

### Build complex filter criteria using `Predicate`

Sometimes chaining `where` method is not sufficient to create very complex filter criteria, in such cases we can use [Predicate](https://ej2.syncfusion.com/documentation/api/data/predicate/) class to create composite filter criteria.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs21/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs21/app/orders.jsx %}
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

You can use the [search](https://ej2.syncfusion.com/documentation/api/data/query/#search) method to create search criteria, it differs from the filter in the way that search criteria will applied to all fields in the datasource whereas filter criteria will be applied to a particular field.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs22/app/orders.jsx %}
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

> You can search particular fields by passing the field name collection in the second argument of [search](https://ej2.syncfusion.com/documentation/api/data/query/#search) method.

## Grouping

[DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allow you to group records by category. The [group](https://ej2.syncfusion.com/documentation/api/data/query/#group) method is used to add group query.

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
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/group-cs1/app/orders.jsx %}
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

You can query paged data using [page](https://ej2.syncfusion.com/documentation/api/data/query/#page) method. This allow you to query particular set of records based on the page size and index.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs23/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs23/app/orders.jsx %}
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

The [aggregate](https://ej2.syncfusion.com/documentation/api/data/query/#aggregate) method allows you to get aggregated value for a field based on the type.

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
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs24/app/orders.jsx %}
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

You can use the [hierarchy](https://ej2.syncfusion.com/documentation/api/data/query/#hierarchy) method to build nested query. The hierarchical queries are commonly required when you use foreign key binding.

The [foreignKey](https://ej2.syncfusion.com/documentation/api/data/query/#foreignkey) method is used to specify the key field of the foreign table and the second argument of the [hierarchy](https://ej2.syncfusion.com/documentation/api/data/query/#hierarchy) method accepts a selector function which selects the records from the foreign table.

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
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/child-data-cs1/app/orders.jsx %}
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