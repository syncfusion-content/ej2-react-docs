---
layout: post
title: Local data in React Treegrid component | Syncfusion
description: Learn here all about Local data in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Local data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Local data in React Treegrid component

In Local Data binding, data source for rendering the TreeGrid control is retrieved from the same application locally.

Two types of Data binding are possible with the TreeGrid control.

* Hierarchical Datasource binding
* Self-Referential Data binding (Flat Data)

To bind local data to the treegrid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treegrid#datasource) property. The local data source can also be provided as an instance of the **DataManager**.

> By default, **DataManager** uses [`JsonAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#json-adaptor) for local data-binding.

## Hierarchy data source binding

The [`childMapping`](https://ej2.syncfusion.com/react/documentation/api/treegrid#childMapping) property is used to map the child records in hierarchy data source.

The following code example shows you how to bind the hierarchical local data into the TreeGrid control.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs2" %}

> * Remote data binding is not supported for Hierarchy Data.

{% endtab %}

## Self-Referential data binding (Flat data)

TreeGrid is rendered from Self-Referential data structures by providing two fields, ID field and parent ID field.

* **ID Field**: This field contains unique values used to identify nodes. Its name is assigned to the [`idMapping`](https://ej2.syncfusion.com/react/documentation/api/treegrid#idMapping) property.
* **Parent ID Field**: This field contains values that indicate parent nodes. Its name is assigned to the [`parentIdMapping`](https://ej2.syncfusion.com/react/documentation/api/treegrid#parentIdMapping) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/data-binding-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/data-binding-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs3" %}

> Herewith we have provided list of reserved properties and the purpose used in TreeGrid. We recommend to avoid these reserved properties for Internal purpose(To get rid of conflicts).

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the childRecords of a parentData
hasChildRecords | Specifies whether the record contains child records
hasFilteredChildRecords | Specifies whether the record contains filtered child records
expanded | Specifies whether the child records are expanded
parentItem | Specifies the parentItem of childRecords
index | Specifies the index of current record
level | Specifies the hierarchy level of record
filterLevel | Specifies the hierarchy level of filtered record
parentIdMapping | Specifies the parentID
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the parent Unique ID of a record
checkboxState | Specifies the checkbox state of a record
isSummaryRow | Specifies the summary of a record
taskData | Specifies the main data
primaryParent | Specifies the Primary data