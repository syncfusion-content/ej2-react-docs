---
layout: post
title: Aggregates in React Treegrid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in React Treegrid component

Aggregate values are displayed in the TreeGrid footer and in parent row footer for child row aggregate values. It can be configured through [`aggregates`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#aggregates) property. [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#field) and [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) are the minimum properties required to represent an aggregate column.

To use the aggregate feature, you have to inject the **Aggregate** module.

By default, the aggregate value can be displayed in the treegrid footer, and footer of child rows. To show the aggregate value in one of the cells, use the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#footertemplate).

To get start quickly with aggregates functionalities, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=4Fs8mKL3DCg" %}

## Built-in aggregate types

The aggregate type should be specified in the [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) property
with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## Child aggregate

Aggregate value is calculated for child rows, and it is displayed in the parent row footer. Use the [`showChildSummary`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to render the child rows aggregate value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
