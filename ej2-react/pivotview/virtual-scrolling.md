---
layout: post
title: Virtual scrolling in React Pivot Table component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Virtual scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Virtual scrolling in React Pivot Table component

## Virtual Scrolling

Allows to load the large amounts of data without any performance degradation by rendering rows and columns only in the current content viewport. Rest of the aggregated data will be brought into viewport dynamically based on vertical or horizontal scroll position. This feature can be enabled by setting the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property to **true**.

To use the virtual scrolling feature, inject the `VirtualScroll` module in to the pivot table.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs308/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs308/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs308/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs308/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs308" %}

> The `height` and `width` properties should be set for virtual scrolling. If it is not defined then the pivot table will consider its value as `300px` and `800px` respectively.

## Virtual scrolling with single page mode

When virtual scrolling is enabled, the pivot table renders not only the current view page, but also the previous and next pages by default. This default behavior, however, can cause performance delays when dealing with a large number of rows and columns. This is because the same number of rows and columns from adjacent pages are also processed, resulting in additional computational load. This performance constraint can be avoided by setting the [allowSinglePage](https://ej2.syncfusion.com/react/documentation/api/pivotview/virtualScrollSettings/#allowSinglePage) property to **true** within the [virtualScrollSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/virtualScrollSettings/).

Enabling this property causes the pivot table to render only the rows and columns that are relevant to the current view page during virtual scrolling. This optimization significantly improves the performance of the pivot table during initial rendering and when performing UI actions such as drill up/down, sorting, filtering, and more.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/single-page-mode" %}

**Limitations for virtual scrolling**

* In virtual scrolling, the [columnWidth](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnwidth) property in [gridSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/) should be in pixels, and percentage values are not accepted.
* Resizing columns or setting width to individual columns affects the calculation used to pick the correct page on scrolling.
* Grouping, which takes additional time to splitting the raw items into the provided format.
* Date Formatting, which takes additional time to convert date format.
* Date Formatting with sorting, here additionally full date time format should be framed to perform sorting along with the provided date format which lags the performance.
* When using OLAP data, subtotals and grand totals are only displayed when measures are bound at the last position in the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows) or [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns) axis. Otherwise, the data from the pivot table will be shown without summary totals.
* Even if virtual scrolling is enabled, not only is the current view port data retrieved, but also the data for the immediate previous page and the immediate next page. As a result, when the end user scrolls slightly ahead or behind, the next or previous page data is displayed immediately without requiring a refresh. **Note:** If the pivot table's width and height are large, the loading data count in the current, previous, and next viewports (pages) will also increase, affecting performance.

## Virtual scrolling for static field list

Virtual scrolling automatically works with "Popup" field list on setting the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property in the Pivot Table to **true**. Incase of static field list, which act as a separate component, user need to enable [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property in the Pivot Table and also pass the report information to pivot table instance via the [load](https://ej2.syncfusion.com/react/documentation/api/pivotview/#load) event of the field list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs310/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs310/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs310/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs310/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs310" %}

## See also

* [Paging in Syncfusion EJ2 Typescript components](./paging)
* [Data Compression in Syncfusion EJ2 Typescript components](./data-compression)