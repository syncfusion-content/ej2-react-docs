---
layout: post
title: React Grid - Modules | Syncfusion
description: React Grid module explains the modular architecture, available modules, and how to import and configure them so applications load only needed features.
control: Module 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modules in React Grid component

Syncfusion React Grid modules help optimize your application’s bundle size by including only the features you need. To enable a specific Grid feature, import and inject the corresponding Feature Module into your Grid configuration. The available Grid Feature Modules include:

| Feature | Module | Description |
|--------|--------|-------------|
| [Paging](./paging) | `Page` | Inject this module to use paging feature. |
| [Sorting](./sorting) | `Sort` | Inject this module to use sorting feature. |
| [Filtering](./filtering/filtering) | `Filter` | Inject this module to use filtering feature. |
| [Grouping](./grouping/grouping) | `Group` | Inject this module to use grouping feature. |
| [Lazy Load Grouping](./grouping/lazy-load-grouping) | `LazyLoadGroup` | Inject this module to use lazy load grouping feature. |
| [Editing](./editing/edit) | `Edit` | Inject this module to use editing feature. |
| [Aggregates](./aggregates/aggregates) | `Aggregate` | Inject this module to use aggregate feature. |
| [Column Chooser](./columns/column-chooser) | `ColumnChooser` | Inject this module to use column chooser feature. |
| [Column Menu](./columns/column-menu) | `ColumnMenu` | Inject this module to use column menu feature. |
| [Command Column](./editing/command-column-editing) | `CommandColumn` | Inject this module to use command column feature. |
| [Context Menu](./context-menu) | `ContextMenu` | Inject this module to use context menu feature. |
| [Detail Row](./row/detail-template) | `DetailRow` | Inject this module to use detail template feature. |
| [Foreign Key](./columns/foreign-key-column) | `ForeignKey` | Inject this module to use foreign key feature. |
| [Resize](./columns/column-resizing) | `Resize` | Inject this module to use resize feature. |
| [Reordering](./columns/column-reorder) | `Reorder` | Inject this module to use reorder feature. |
| [Row Drag and Drop](./row/row-drag-and-drop) | `RowDD` | Inject this module to use row drag and drop feature. |
| [Virtual Scrolling](./scrolling/virtual-scrolling) | `VirtualScroll` | Inject this module to use virtual scrolling feature. |
| [Infinite Scrolling](./scrolling/infinite-scrolling) | `InfiniteScroll` | Inject this module to use infinite scrolling feature. |
| [Toolbar](./tool-bar/tool-bar) | `Toolbar` | Inject this module to use toolbar feature. |
| [Excel Export](./excel-export/excel-exporting) | `ExcelExport` | Inject this module to use excel export feature. |
| [PDF Export](./pdf-export/pdf-export) | `PdfExport` | Inject this module to use PDF export feature. |

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-react-grids` and injecting them into the grid component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/getting-started-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/getting-started-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/getting-started-cs5" %}