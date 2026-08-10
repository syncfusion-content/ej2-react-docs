---
layout: post
title: Paging in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table paginates rows and columns using pageSettings to navigate large datasets efficiently.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Pivot Table

Paging divides the Pivot Table data into manageable pages so the component can render large datasets efficiently. The row axis (members of the row fields) and the column axis (members of the column and value fields) are paginated independently. Users navigate rows and columns page by page using the built-in pager UI or custom controls.

To enable paging, set the [`enablePaging`](https://ej2.syncfusion.com/react/documentation/api/pivotview#enablepaging) property to **true** (type `boolean`, default `false`).

Paging can be configured at initial render using the [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagesettings) property, which accepts the following options:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| [`currentRowPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#currentrowpage) | `number` | `1` | The current row page number to display. |
| [`currentColumnPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#currentcolumnpage) | `number` | `1` | The current column page number to display. |
| [`rowPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#rowpagesize) | `number` | `10` | The number of records displayed on each page of the row axis. |
| [`columnPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#columnpagesize) | `number` | `5` | The number of records displayed on each page of the column axis. |

N> The [Virtualization](./virtual-scrolling) and Paging features in the Pivot Table should not be enabled simultaneously. You can use either feature at a time, but not both together, as they are designed to handle data rendering differently and may conflict when used together.

## Pager UI

When paging is enabled, a built-in pager UI appears at the bottom of the Pivot Table by default. The UI provides navigation buttons, a page-input box, and dropdowns for changing the page size on each axis.

You can change the position, visibility, compact view, and template of the row and column pagers using the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) property. The available sub-properties are summarized below:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | [`PagerPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerposition) | `Bottom` | Places the pager UI at the `Top` or `Bottom` of the Pivot Table. |
| `isInversed` | `boolean` | `false` | When `true`, swaps the column pager to the left and the row pager to the right. |
| `enableCompactView` | `boolean` | `false` | When `true`, shows only the previous and next navigation buttons. |
| `showRowPager` | `boolean` | `true` | Shows or hides the row pager. |
| `showColumnPager` | `boolean` | `true` | Shows or hides the column pager. |
| `showRowPageSize` | `boolean` | `true` | Shows or hides the "Rows per page" dropdown. |
| `showColumnPageSize` | `boolean` | `true` | Shows or hides the "Columns per page" dropdown. |
| `rowPageSizes` | `number[]` | `[10, 50, 100, 200]` | The list of page sizes offered in the "Rows per page" dropdown. |
| `columnPageSizes` | `number[]` | `[5, 10, 20, 50, 100]` | The list of page sizes offered in the "Columns per page" dropdown. |
| `template` | `string` | `''` | The ID of an HTML element that replaces the built-in pager UI. |

> In order to see and use the pager UI, inject the `Pager` module into the Pivot Table. The `Pager` module is shipped with the `@syncfusion/ej2-react-pivotview` package, so no additional package install is required:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs201/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs201/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs201" %}

### Show pager UI at top or bottom

The Pivot Table component lets you place the pager UI at the top or bottom of the Pivot Table by setting the [`position`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#position) property within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. By default the pager UI appears at the bottom; set `position` to `'Top'` to place it above the Pivot Table.

The following example demonstrates how to configure the pager UI to appear at the top of the Pivot Table:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs202/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs202/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs202" %}

### Inverse pager

By default, the row pager appears on the left side of the pager UI and the column pager on the right. To swap these positions, set the [`isInversed`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#isinversed) property to **true** within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs203/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs203/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs203" %}

### Compact view

The Pivot Table provides a compact view for the pager UI, displaying only the previous and next navigation buttons to minimize the interface. To enable the compact view, set the [`enableCompactView`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#enablecompactview) property to **true** within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. This streamlined layout focuses on essential navigation controls, which is ideal for layouts requiring a simplified paging experience.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs204/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs204/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs204" %}

### Show or hide paging option

The Pivot Table allows you to control the visibility of the row and column pagers in the pager UI using the [`showRowPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#showrowpager) and [`showColumnPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#showcolumnpager) properties within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. By default, both row and column pagers are visible in the pager UI. To hide either the row pager or the column pager, set the corresponding property to **false**. This allows you to display only the necessary navigation controls based on your layout requirements.

The following code demonstrates how to hide the row pager by setting the [`showRowPager`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#showrowpager) property to **false**:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs205/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs205/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs205" %}

### Show or hide page size

The Pivot Table allows you to control the visibility of the "Rows per page" and "Columns per page" dropdowns in the pager UI using the [`showRowPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#showrowpagesize) and [`showColumnPageSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#showcolumnpagesize) properties within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. These dropdowns display a list of predefined or user-defined page sizes, enabling you to adjust the number of rows or columns displayed per page at runtime. By default, both dropdowns are visible in the pager UI. To hide either the "Rows per page" or "Columns per page" dropdown, set the corresponding property to **false**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs206/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs206/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs206" %}

### Customize page size

The Pivot Table allows you to specify a list of page sizes for the "Rows per page" and "Columns per page" dropdowns in the pager UI using the [`rowPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#rowpagesizes) and [`columnPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#columnpagesizes) properties within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. By default, the "Rows per page" dropdown includes page sizes of 10, 50, 100, and 200, while the "Columns per page" dropdown includes page sizes of 5, 10, 20, 50, and 100. To define a different set of page sizes, assign an array of numbers to the [`rowPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#rowpagesizes) or [`columnPageSizes`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#columnpagesizes) properties.

The following example sets the "Rows per page" dropdown with page sizes of 10, 20, 30, 40, and 50, and the "Columns per page" dropdown with page sizes of 5, 10, 15, 20, and 30:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs207/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs207/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs207" %}

### Template

The Pivot Table allows you to define a custom layout for the pager UI using the [`template`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#template) property within the [`pagerSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagersettings) configuration. By default, the pager UI displays built-in navigation controls. To replace these with custom HTML elements, assign the ID of the custom elements to the [`template`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#template) property. This enables you to create a unique pager interface that aligns with your application’s design requirements.

The custom template element must exist in the DOM. Add the following to your `public/index.html` (or equivalent):

```html
<div id="row-pager-template"></div>
<div id="column-pager-template"></div>
```

The following example shows how to create a custom template for both row and column pagers. The HTML element IDs are assigned to the [`template`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pagerSettings#template) property. Then, during the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#databound) event, the standalone Syncfusion [`Pager`](https://ej2.syncfusion.com/react/documentation/pager/getting-started) control from `@syncfusion/ej2-react-pagers` is appended to the designated HTML elements. You can configure the pager by setting properties like [`pageSize`](https://ej2.syncfusion.com/react/documentation/api/pager#pagesize), [`totalRecordsCount`](https://ej2.syncfusion.com/react/documentation/api/pager#totalrecordscount), and [`currentPage`](https://ej2.syncfusion.com/react/documentation/api/pager#currentpage). When you click on a custom row or column pager, the [`currentRowPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#currentrowpage) and [`currentColumnPage`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pageSettings#currentcolumnpage) properties in [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview#pagesettings) are updated, enabling navigation with the custom pager.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/pagingTemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pagingTemplate-cs1" %}

## See Also

* [Virtual Scrolling](./virtual-scrolling)
* [Getting Started](./getting-started)