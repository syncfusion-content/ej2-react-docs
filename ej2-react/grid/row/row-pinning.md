---
layout: post
title: React Grid - Row Pinning | Syncfusion
description: Learn here all about Row Pinning in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row Pinning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Pinning in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides support for pinning specific rows at the top, ensuring important information stays visible during vertical scrolling. This feature is useful when certain rows must remain accessible for quick reference or priority viewing, regardless of user interactions.

To enable row pinning, configure the [isRowPinned](https://ej2.syncfusion.com/react/documentation/api/grid#isrowpinned) callback function. This function receives each row's data and returns `true` or `false` based on the desired pinning condition. It executes only during the initial rendering of the Grid, ensuring that each row's pinning state is determined at that stage.

Row pinning does not alter the overall content height of the Grid. The scrollable area remains fully visible, allowing smooth vertical scrolling even when multiple rows are pinned. Pinned rows appear in a fixed region above the content area, while the Grid preserves its layout and continues to allow full interaction with all other rows.

The following example pins rows with "Critical" priority and "Open" status at the top using the `isRowPinned` callback function.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs1" %}

> Pinning rows requires a primary key column to map pinned rows to their original records. Set [columns->isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) to `true` for the key column.

## Paging with row pinning

Row pinning keeps important rows visible at the top while navigating pages. Pinned rows are excluded from the page size calculation and remain fixed. For example, if [pageSettings->pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pagesettings#pagesize) is set to "10" and "2" rows are pinned, those "2" rows stay at the top while the grid displays "10" additional rows beneath them. When navigating to another page, the pinned rows remain fixed, and the next set of records is rendered below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs2" %}

## Pinned rows selection

Pinned rows can be selected like regular rows, with their selection state synchronized with corresponding data rows via the primary key. This ensures consistent behavior across all grid operations, such as paging, sorting, and filtering, whether selection is performed using the mouse, keyboard, or checkbox.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs3" %}

> The [selectionSettings->persistSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionsettings#persistselection) is automatically enabled when using the `isRowPinned` callback function.

## Filtering and sorting with pinned rows

Row pinning is fully compatible with filtering and sorting operations. When a filter is applied, both pinned and scrollable sections display only rows that meet the filter criteria, ensuring consistent results and preventing data mismatches.
 
When sorting is applied, pinned rows are reordered using the same sorting rules while remaining fixed at the top. This maintains visibility and correct positioning of pinned rows even as the remaining data is reorganized.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs4" %}

## CRUD operations with row pinning

Row pinning fully supports CRUD operations with automatic synchronization between pinned rows and their original rows. Any edit, update, or deletion is immediately reflected in both views, ensuring consistent and accurate data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs5" %}

## Dynamic row pinning

Dynamic row pinning is available through the built-in context menu, allowing quick actions pin or unpin rows. Right-click any row to access `PinRow` and `UnpinRow` options for flexible row management.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-pinning-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-pinning-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-pinning-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-pinning-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-pinning-cs6" %}

## Limitations

Row pinning is incompatible with the following features:

* Column and row spanning
* Row template
* Detail template
* Row drag and drop
* Grouping
* Aggregate
* Cell selection
* Frozen rows
* Excel and PDF export
* Adaptive UI