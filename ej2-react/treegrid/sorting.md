---
layout: post
title: Sorting in React TreeGrid component | Syncfusion
description: Learn here all about Sorting in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in React TreeGrid 

Sorting arranges data in **Ascending** or **Descending** order. Click a column header to sort that column.

For multi-column sorting, press and hold CTRL and then click additional column headers. To clear sorting for a specific column in a multi-sort state, press and hold SHIFT and click that column header.

Enable sorting in the TreeGrid by setting [allowSorting](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowsorting) to true. Sorting options are configured through [sortSettings](https://ej2.syncfusion.com/react/documentation/api/treegrid/sortSettings/).

To use sorting, inject the **Sort** module in the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/sorting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/sorting-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/sorting-cs1" %}

> * Columns are sorted in ascending order by default. Clicking an already sorted column toggles the sort direction.
> * Sorting can be applied or cleared by invoking [sortByColumn](https://ej2.syncfusion.com/react/documentation/api/treegrid/#sortbycolumn) and [clearSorting](https://ej2.syncfusion.com/react/documentation/api/treegrid/#clearsorting).
> * To disable sorting for a particular column, set [columns.allowSorting](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowsorting) to **false**.

## Initial Sort

To sort at initial render, set [field](https://ej2.syncfusion.com/react/documentation/api/treegrid/sortDescriptorModel/#field) and [direction](https://ej2.syncfusion.com/react/documentation/api/treegrid/sortDescriptorModel/#direction) in [sortSettings.columns](https://ej2.syncfusion.com/react/documentation/api/treegrid/sortSettings/#columns).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/sorting-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/sorting-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/sorting-cs2" %}

## Sorting Events

During sorting, the TreeGrid triggers two events: [actionBegin](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) (before sorting starts) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) (after sorting completes). These events can be used to run custom logic.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/sorting-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/sorting-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/sorting-cs3" %}

> The `args.requestType` value indicates the current action. For sorting, `args.requestType` is **sorting**.

## Custom sort comparer

Customize the default sort behavior for a column by defining [column.sortComparer](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#sortcomparer). The comparer function follows the same pattern as [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

In the following example, a custom comparer is defined for the Category column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/sorting-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/sorting-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/sorting-cs4" %}

> The sort comparer function applies only to local data.

### Display null values at bottom

By default, null values appear at the top when sorting in descending order and at the bottom when sorting in ascending order. To always place null values at the bottom regardless of sort direction, use [column.sortComparer](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#sortcomparer). This feature is particularly useful when working with data sets where null values might need to be clearly separated from actual data entries.


The example below places null date values at the bottom of the TreeGrid when sorting the **StartDate** column in either direction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/null-date-value-cs1" %}

## Touch Interaction

On touch devices, tapping a column header sorts that column. A popup ![Multi column sorting](images/sorting.jpg) indicates multi-column sorting. For multi-column sorting, tap the popup ![Multi sorting](images/msorting.jpg), then tap additional headers.

The following image shows TreeGrid touch sorting.

<!-- markdownlint-disable MD033 -->
<img src="images/touch-sorting.jpg" alt="TreeGrid touch sorting example" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour for key capabilities. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.