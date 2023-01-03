---
layout: post
title: Grouping in React Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Grouping 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Grid component

The Grid has options to group records by dragging and dropping the column header to the group drop area.
When grouping is applied, grid records are organized into a hierarchical structure to facilitate easier expansion and collapse of records.

To enable grouping in the grid, set the [`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) as true.
Grouping options can be configured through the [`groupSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/).

To Group, inject **Group** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs2" % }

> * You can group and ungroup columns by using the [`groupColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#groupcolumn) and [`ungroupColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#ungroupcolumn) methods.
> * To disable grouping for a particular column, set the [`columns.allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowgrouping) to **false**.

## Initial group

To apply group at initial rendering, set the column field name in the [`groupSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettingsModel/#columns).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs3" % }

## Hide drop area

To avoid ungrouping or further grouping of a column after initial column
grouping, define the [`groupSettings.showDropArea`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#showdroparea) as **false**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs4" % }

## Group with paging

On grouping columns with paging feature, the aggregated information and total items are displayed based on the current page.
The grid does not consider aggregated information and total items from other pages.
To get additional details (aggregated information and total items) from other pages, set the [`groupSettings.disablePageWiseAggregates`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#disablepagewiseaggregates) to false.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action; one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns will be grouped by the data or value present for the particular row. To group numeric or datetime column based on the mentioned format, you have to enable the
[`enableGroupByFormat`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#enablegroupbyformat) property of the corresponding grid columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs5" % }

## Grouping events

During the group action, the grid component triggers two events. The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event triggers before the group action starts and the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event triggers after the group action is completed. Using these events you can perform any action.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs6" % }

> [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) retrieves current action name.
For example in grouping, the [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) value is **grouping**.

## Collapse by external button

You can collapse the selected group from an external button by invoking [`expandCollapseRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#expandcollapserows) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs7" % }

## See Also

* [Exporting grouped records](../excel-export/excel-export-options/#exporting-grouped-records)
* [Is there a way to include the template in the Group summary in React Grid?](https://www.syncfusion.com/forums/150662/is-there-a-way-to-include-the-template-in-the-group-summary-in-react-grid)
* [How to customize the grouping row data in React Grid](https://www.syncfusion.com/forums/151019/how-to-customize-the-grouping-row-data-in-react-grid)