---
layout: post
title: Virtual scrolling in React Pivot Table component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Virtual scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtual Scrolling in React Pivot Table Component

## Virtual Scrolling

Virtual scrolling enables efficient handling of large datasets by rendering only the rows and columns visible in the current viewport. This approach prevents performance degradation when working with substantial amounts of data, as content refreshes dynamically during vertical or horizontal scrolling. This feature can be enabled by setting the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property to **true**.

N> The Virtualization and [Paging](./paging.md) features in the Pivot Table should not be enabled simultaneously. You can use either feature at a time, but not both together, as they are designed to handle data rendering differently and may conflict when used together.

To use the virtual scrolling feature, inject the `VirtualScroll` module into the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs308/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs308/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs308" %}

> The `height` and `width` properties should be set for virtual scrolling. If it is not defined, then the Pivot Table will consider its value as `300px` and `800px` respectively.

## Virtual Scrolling with Single Page Mode

When virtual scrolling is enabled, the Pivot Table renders not only the current view page but also the adjacent previous and next pages by default. While this approach supports smooth navigation, it can increase computational load and reduce performance when working with extensive datasets, as additional rows and columns from surrounding pages are processed.

To optimize performance, set the [allowSinglePage](https://ej2.syncfusion.com/react/documentation/api/pivotview/virtualScrollSettings/#allowSinglePage) property to **true** within the [virtualScrollSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/virtualScrollSettings/). Enabling this property ensures that only the rows and columns for the current view page are rendered during virtual scrolling. This significantly enhances the performance of the Pivot Table, especially during initial rendering and user actions such as drilling up, drilling down, sorting, filtering, and more.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/single-page-mode/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/single-page-mode" %}

## Limitations for Virtual Scrolling

* In virtual scrolling, the [columnWidth](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnwidth) property in [gridSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/) should be in pixels, and percentage values are not accepted.
* Features such as auto fit, column resizing, text wrapping, and setting specific column widths through events can dynamically affect the row height and column width in the Pivot Table at runtime. However, these changes are not considered in the scroller calculations, particularly with large datasets. This can lead to performance issues and problems with UI functionality during scrolling. Therefore, it is not recommended to use these features alongside virtualization in the Pivot Table.
* Grouping, which takes additional time to split the raw items into the provided format.
* Date Formatting, which takes additional time to convert date format.
* Date Formatting with sorting, here additionally full date time format should be framed to perform sorting along with the provided date format, which lags the performance.
* When using OLAP data, subtotals and grand totals are only displayed when measures are bound at the last position in the [rows](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#rows) or [columns](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#columns) axis. Otherwise, the data from the Pivot Table will be shown without summary totals.
* Even if virtual scrolling is enabled, not only is the current viewport data retrieved, but also the data for the immediate previous page and the immediate next page. As a result, when the end user scrolls slightly ahead or behind, the next or previous page data is displayed immediately without requiring a refresh. **Note:** If the Pivot Table's width and height are large, the loading data count in the current, previous, and next viewport (pages) will also increase, affecting performance.

## Virtual Scrolling for Static Field List

Virtual scrolling works automatically with "Popup" field lists when you set the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property in the Pivot Table to **true**. However, when using a static field list (displayed as a separate component), you need to connect both components manually.

Here's how to make virtual scrolling work with a static field list:

1. Enable virtual scrolling in the Pivot Table component by setting the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) property to **true**, which improves performance for large datasets.
2. Connect the PivotFieldList component to the Pivot Table component using the [load](https://ej2.syncfusion.com/react/documentation/api/pivotview/#load) event.
3. Ensure synchronization between the Pivot Table and field list by updating the Pivot Table’s report configuration with the field list’s report configuration during the [load](https://ej2.syncfusion.com/react/documentation/api/pivotview/#load) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs310/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs310/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs310" %}

## See Also

* [Paging in Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 Typescript components](./paging)
* [Data Compression in Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 Typescript components](./data-compression)