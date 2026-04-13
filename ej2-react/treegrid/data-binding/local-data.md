---
layout: post
title: Local data in React TreeGrid component | Syncfusion
description: Learn about local data binding in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Local data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Local data in React TreeGrid 

In local data binding, the datasource used to render the TreeGrid is retrieved locally within the same application.

Two types of data binding are supported by the TreeGrid:

* Hierarchical datasource binding
* Self-referential data binding (flat data)

To bind local data to the TreeGrid, assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#datasource) property. The local datasource can also be provided as an instance of the **DataManager**.

> By default, **DataManager** uses the [JsonAdaptor](https://ej2.syncfusion.com/documentation/data/adaptors/#json-adaptor/) for local data binding.

## Hierarchy datasource binding

Use the [childMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#childmapping) property to map child records in a hierarchical datasource.

The following example demonstrates how to bind hierarchical local data to the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/data-binding-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs2" %}

> Remote data binding is not supported for hierarchical data.

## Self-Referential data binding (Flat data)

The TreeGrid can be rendered from self-referential data structures by providing two fields: an ID field and a parent ID field.

* **ID Field**: Contains unique values that identify nodes. Assign its name to the [idMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#idmapping) property.
* **Parent ID Field**: Contains values that indicate parent nodes. Assign its name to the [parentIdMapping](https://ej2.syncfusion.com/react/documentation/api/treegrid/#parentidmapping) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/data-binding-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs3" %}

> The following reserved properties are used internally by the TreeGrid. Avoid using these property names in application data to prevent conflicts.

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the child records of a parent record
hasChildRecords | Indicates whether the record contains child records
hasFilteredChildRecords | Indicates whether the record contains filtered child records
expanded | Indicates whether child records are expanded
parentItem | References the parent record of a child
index | Specifies the index of the current record
level | Specifies the hierarchy level of the record
filterLevel | Specifies the hierarchy level of a filtered record
parentIdMapping | Specifies the parent ID value
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the unique ID of the parent record
checkboxState | Specifies the checkbox state of a record
isSummaryRow | Indicates that the record is a summary row
taskData | References the original data object
primaryParent | References the primary parent data

## Immutable mode 

Immutable mode in the Syncfusion TreeGrid optimizes re-rendering performance by leveraging object reference and [deep comparison](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality). During TreeGrid actions, only added or modified rows are re-rendered, and unchanged rows are preserved.

Enable this feature by setting the [`enableImmutableMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enableimmutablemode) property to `true`.

The following example demonstrates how to enable immutable mode in a React component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/immutable-mode-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/immutable-mode-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/immutable-mode-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/immutable-mode-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/immutable-mode-cs1" %}

> This feature uses the primary key value for data comparison. Ensure a column has [`isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) set to `true`.

### Limitations

The following features are not supported in immutable mode:

* Frozen rows and columns
* Row template
* Detail template
* Column reorder
* Virtualization
* Infinite scroll