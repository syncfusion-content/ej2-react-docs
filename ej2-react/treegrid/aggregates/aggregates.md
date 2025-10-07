---
layout: post
title: Aggregates in React TreeGrid | Syncfusion
description: Learn here all about Aggregates in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Aggregates
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in React TreeGrid

Aggregate values are displayed in the TreeGrid footer and in the parent row footer for child row aggregates. Configure aggregates using the [aggregates](https://ej2.syncfusion.com/react/documentation/api/treegrid/#aggregates) property. The [field](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#field) and [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) properties are the minimum requirements to define an aggregate column.

To use aggregates, inject the **Aggregate** module.

By default, aggregate values can be shown in the TreeGrid footer and in child row footers. To display an aggregate inside a cell, use the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#footertemplate).

The following video provides a quick start for aggregate functionalities:
{% youtube "https://www.youtube.com/watch?v=4Fs8mKL3DCg" %}

## Built-in aggregate types

Specify the aggregate type in the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateRowModel/#type) property to configure an aggregate column.

The built-in aggregates are:
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be configured for a single aggregate column by setting the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateRowModel/#type) property with an array of types.  
> * Multiple types for a column are supported only when at least one aggregate template is used.

## Child aggregate

Aggregate values for child rows are calculated and displayed in the parent row footer. Use the [showChildSummary](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to render child row aggregate values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs1" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for feature highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.