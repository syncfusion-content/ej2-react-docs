---
layout: post
title: Excel export in React Pivot Table component | Syncfusion
description: Learn here all about Excel export in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Excel export
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in React Pivot Table component

The Excel export feature allows you to export Pivot Table data as an Excel document for offline analysis and reporting. To enable Excel export functionality in the Pivot Table, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) property to **true**. Once enabled, use the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method to perform the Excel export operation.

> The Pivot Table component can be exported to Excel format using options available in the toolbar. For more details, [`refer`](./tool-bar) here.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs65/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs65/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs65/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs65/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs65" %}

## Multiple Pivot Table exporting

Excel exporting supports exporting multiple Pivot Tables into a single Excel file, allowing you to combine and organize data from different Pivot Tables for a unified view.

### Same WorkSheet

The Excel export provides support to export multiple Pivot Tables in the same sheet. To export in the same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport/#type) as `AppendToSheet` in [`excelExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) object. It has an option to provide blank rows between Pivot Tables, and these blank row(s) count can be defined using the [`multipleExport.blankRows`](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport/#blankrows) property.

> By default, [`multipleExport.blankRows`](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport/#blankrows) value is 5 between Pivot Tables within the same sheet.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs66/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs66/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs66/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs66/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs66" %}

### New WorkSheet

Excel export provides support to export multiple Pivot Tables into new sheets. To export in new sheets, define [`multipleExport.type`](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport/#type) as `NewSheet` in [`excelExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) object.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs67/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs67/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs67/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs67/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs67" %}

## Changing the Pivot Table style while exporting

The Excel export provides an option to change colors for headers, caption, and records in Pivot Table before exporting. To apply colors, define [`theme`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/#theme) settings in [`excelExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

> By default, material theme is applied to exported Excel document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs68/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs68/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs68/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs68/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs68" %}

## Add header and footer while exporting

The Excel export provides an option to include header and footer content for the Excel document before exporting. To add header and footer, define [`header`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/#header) and [`footer`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/#footer) properties in [`excelExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs69/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs69/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs69/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs69/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs69" %}

## Changing the file name while exporting

This option provides flexibility to specify a custom file name for your exported Excel document, making it easier to organize and identify your exported data files. The Excel export provides an option to change the file name of the document before exporting. To change the file name, define the [`fileName`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/#filename) property in the [`excelExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs70/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs70/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs70/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs70/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs70" %}

## Limitation when exporting millions of records to Excel format

Understanding this limitation helps you choose the appropriate export format based on your data size requirements and ensures optimal performance for large datasets. By default, Microsoft Excel supports only 1,048,576 records in an Excel sheet. Therefore, it is not possible to export millions of records to Excel format. You can refer to the [documentation link](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) for more details on Microsoft Excel specifications and limits. For large datasets, it is recommended to export the data in CSV (Comma-Separated Values) or other formats that can handle large datasets more efficiently than Excel.

## CSV Export

The CSV export option allows you to export Pivot Table data as a plain text CSV file, making it easy to use the data with other spreadsheet or data analysis applications. To export the Pivot Table as a CSV file, ensure that the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) property is set to **true**. Then, use the [`csvExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#csvexport) method to perform the CSV export operation.

> The Pivot Table component can be exported to CSV format using options available in the toolbar. For more details, [`refer`](./tool-bar) here.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs71/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs71/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs71/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs71/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs71" %}

## Virtual Scroll Data

Exporting virtual scroll data lets you generate a complete Excel or CSV document containing all Pivot Table data without performance issues, even with large datasets. This approach uses PivotEngine export to handle extensive data efficiently. To enable PivotEngine export in the Pivot Table, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) property and use either the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) or [`csvExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#csvexport) method.

> To use PivotEngine export, inject the `ExcelExport` module in the Pivot Table.
> PivotEngine export will be performed when virtual scrolling is enabled by default.

### Virtual Scroll Data Excel Export

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs72/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs72/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs72/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs72/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs72" %}

### Virtual Scroll Data CSV Export

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs73/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs73/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs73/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs73/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs73" %}

### Export all pages

This option gives flexibility to export either the entire dataset rendered by the Pivot Table (all pages) or just the data currently visible in the viewport. To export the entire Pivot Table data, ensure the [`exportAllPages`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportallpages) property is set to **true**. Set it to **false** to export only the visible records. This setting applies to both Excel and CSV exports.

> By default, the PivotEngine export will be performed while virtual scrolling is enabled.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs74/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs74/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs74/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs74/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs74" %}

## Events

### ExcelQueryCellInfo

The [`excelQueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#excelquerycellinfo) event is triggered during the creation of each row and value cell while exporting data to Excel. This event offers options to change the content and style of individual cells in the exported Excel document, improving the flexibility and appearance of exported reports.

The event provides the following arguments:

* [`value`](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#value) – Represents the value of the current cell in the exported Excel sheet.
* [`column`](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#column) – Provides details about the column to which the current cell belongs.
* [`data`](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#data) – Contains all data for the row that includes the current cell.
* [`style`](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#style) – Defines the style settings (such as font, color, borders) applied to the current cell.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs75/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs75/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs75/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs75/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs75" %}

### ExcelHeaderQueryCellInfo

The [`excelHeaderQueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#excelheaderquerycellinfo) event provides the ability to modify header cell appearance and content during Excel export, ensuring exported documents match specific formatting requirements or business standards. This event triggers while processing each header cell during the Excel export operation. The event contains the following parameters:

* [`cell`](https://ej2.syncfusion.com/react/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/#cell) – Contains the current cell information and properties.
* [`style`](https://ej2.syncfusion.com/react/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/#style) – Contains the style properties that can be applied to the cell.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs76/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs76/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs76/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs76/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs76" %}

### ExportComplete

The [`exportComplete`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportcomplete) event triggers after the Pivot Table data exports to an Excel or CSV document. This event enables acquiring blob stream data for further processing and customization by setting the `isBlob` parameter to **true** when calling the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method. The event includes the following parameters:

* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/exportCompleteEventArgs/#type) – Specifies the current export format such as PDF, Excel, or CSV.
* [`promise`](https://ej2.syncfusion.com/react/documentation/api/pivotview/exportCompleteEventArgs/#promise) – Contains the promise object that resolves with blob data for the exported file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs77/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs77/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs77/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs77/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs77" %}

## See Also

* [PDF Exporting](./pdf-export)
* [How to resolve the "We found a problem with some content in Excel" error message when exporting Pivot Table data to an Excel document?](https://support.syncfusion.com/kb/article/14399/how-to-resolve-the-we-found-a-problem-with-some-content-in-excel-error-message-when-exporting-pivot-table-data-to-an-excel-document)