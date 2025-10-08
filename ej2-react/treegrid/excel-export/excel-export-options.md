---
layout: post
title: Excel export options in React TreeGrid | Syncfusion
description: Learn here all about Excel export options in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Excel export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in React TreeGrid

## To customize excel export

Excel export supports customizing how TreeGrid content maps to the Excel document.

### Export selected records

Export only the selected records to generate an Excel or CSV document that includes the intended subset of data. This enables focused and targeted exports.

Export selected records by setting the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) property in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event.

To export the selected records from the TreeGrid to an Excel or CSV file, follow these steps:

1. Handle the `toolbarClick` event of the TreeGrid.

2. Retrieve selected records using the [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [excelExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelExport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#csvexport) method.

The following example demonstrates exporting selected records to an Excel document when a toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs12" %}

### Export hidden columns

Export hidden columns by setting `includeHiddenColumn` to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs4" %}

### Show or hide columns on exported excel

Show a hidden column or hide a visible column during export using the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) and [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) events.

In the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event, when **args.item.text** is **Excel Export**, control visibility by setting the [column.visible](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#visible) property to **true** or **false**.

In the `excelExportComplete` event, revert the visibility to the previous state.

In the following example, the **Duration** column is hidden in the TreeGrid. During export, **Duration** is shown and **StartDate** is hidden.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs5" %}

### File name for exported document

Assign a file name for the exported document by defining the `fileName` property in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs6" %}

## Conditional cell formatting

Conditional formatting customizes cell appearance in the exported Excel document based on values or criteria.

Implement conditional formatting using the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelQueryCellInfo) event. This event triggers for each cell during export. Within the event, access the cell object using `args.cell` and modify properties such as background color according to required conditions.

The following example demonstrates customizing the background color of the Freight column in the exported Excel document using the `excelQueryCellInfo` event with `args.cell.backgroundColor`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs2" %}

## Theme

Excel export supports applying a theme to the exported Excel document.

To apply a theme, define `theme` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs3" %}

> By default, the Material theme is applied to the exported Excel document.