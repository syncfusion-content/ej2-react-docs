---
layout: post
title: Virtual scroll in React Grid component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Virtual scroll 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in React Grid component

Grid allows you to load large amount of data without performance degradation.

To use virtualization, you need to inject **VirtualScroll** module in grid.

## Row Virtualization

Row virtualization allows you to load and render rows only in content viewport.
It is an alternative way of paging in which the data will load while scrolling vertically.
To setup the row virtualization, you need to define
[`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) as **true** and
content height by [`height`](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property.

The number of records displayed in the Grid is determined implicitly by height of content area. Also you have an option to define visible number of records by [`pageSettings.pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesize)property.
The loaded data will be cached and reused when it is needed for next time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs4" % }

## Column Virtualization

Column virtualization allows you to virtualize columns. It will render columns which are in viewport.
You can scroll horizontally to view more columns.

To setup the column virtualization, set the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) and [`enableColumnVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablecolumnvirtualization) properties as **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs5" % }

> Column's [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) is required for column virtualization.
If column's width is not defined then Grid will consider its value as **200px**.

## Virtualization with Grouping

Both the row and column virtualization can be used along with grouping. At initial rendering, the virtual height of scrollbar will be set based on the total number of records and after grouping, it will be refreshed based on the grouped state(expand/collapse). While collapse the group caption row in current viewport then the next view page grouped records are shown.

> The collapsed/expanded state will persist only for local dataSource while scrolling.

## Limitations for virtual scrolling

* While using column virtual scrolling, column width should be in the pixel. Percentage values are not accepted.
* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited by the browser capability.
* Cell selection is not supported for both row and column virtual scrolling.
* Virtual scrolling is not compatible with batch editing, detail template, rowspan, colspan and hierarchy features.
* Group expand and collapse state will not be persisted.
* Since data is virtualized in grid, the aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the [`Group with Page`](./grouping/#group-with-paging) topic.
* The page size provided must be two times larger than the number of visible rows in the grid.
If the page size is failed to meet this condition then the size will be determined by grid.
* The height of the grid content is calculated using the row height and
total number of records in the data source and hence features which changes row height such as text wrapping are not supported.
If you want to increase the row height to accommodate the content then
you can specify the row height as below to ensure all the table rows are in same height.

```css
.e-grid .e-row {
    height: 2em;
}
```

* Programmatic selection using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method is not supported in virtual scrolling.