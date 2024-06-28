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

The Excel export allows Pivot Table data to be exported as Excel document. To enable Excel export in the pivot table, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) property in [`PivotView`](https://ej2.syncfusion.com/react/documentation/api/pivotview) to **true**. Once the API is set, user needs to call the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method for exporting on external button click.

> The pivot table component can be exported to Excel format using options available in the toolbar. For more details [`refer`](./tool-bar) here.

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

## Multiple pivot table exporting

The Excel export provides an option to export multiple pivot table data in the same Excel file.

### Same WorkSheet

The Excel export provides support to export multiple pivot tables in same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `excelExportProperties`. It has an option to provide blank rows between pivot tables and these blank row(s) count can be defined using the`multipleExport.blankRows` property.

>By default, `multipleExport.blankRows` value is 5 between pivot tables within the same sheet.

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

Excel export provides support to export multiple pivot tables into new sheets. To export in new sheets, define  `multipleExport.type` as `NewSheet` in `excelExportProperties`.

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

## Changing the pivot table style while exporting

The Excel export provides an option to change colors for headers, caption and records in pivot table before exporting. In-order to apply colors, define **theme** settings in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

> By default, material theme will be applied to the pivot table during Excel exporting.

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

The Excel export provides an option to include header and footer content for the excel document before exporting. In-order to add header and footer, define **header** and **footer** properties in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

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

The Excel export provides an option to change file name of the document before exporting. In-order to change the file name, define **fileName** property in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method.

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

By default, Microsoft Excel supports only 1,048,576 records in an Excel sheet. Hence, it is not possible to export millions of records to Excel. You can refer to the [documentation link](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) for more details on Microsoft Excel specifications and limits. Therefore, it is suggested to export the data in CSV (Comma-Separated Values) or other formats that can handle large datasets more efficiently than Excel.

## CSV Export

The Excel export allows pivot table data to be exported in **CSV** file format as well. To enable CSV export in the pivot table, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) property in [`PivotView`](https://ej2.syncfusion.com/react/documentation/api/pivotview) as **true**. Once the API is set, user needs to call the [`csvExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#csvexport) method for exporting on external button click.

> The pivot table component can be exported to CSV format using options available in the toolbar. For more details [`refer`](./tool-bar) here.

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

You can export the pivot table virtual scroll data as Excel/CSV document by using PivotEngine export without any performance degradation. To enable PivotEngine export in the pivot table, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowexcelexport) as true. You need to use the `exportToExcel` method for PivotEngine export.

> To use PivotEngine export, You need to inject the `ExcelExport` module in pivot table.
> PivotEngine export will be performed while enabling virtual scrolling by default.

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

The pivot engine exports the entire virtual data of the pivot table (i.e. the data that contains all of the records used to render the complete pivot table) as an Excel/CSV document. To export just the current viewport of the pivot table, set the [`exportAllPages`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportallpages) property to **false**. To use the pivot engine export, add the `ExcelExport` module into the pivot table.

> By default, the pivot engine export will be performed while virtual scrolling is enabled.

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

The event `excelQueryCellInfo` triggers while framing each row and value cell during Excel export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `value` - It holds the cell value.
* `column` -  It holds column information for the current cell.
* `data` - It holds the entire row data across the current cell.
* `style`  - It holds the style properties for the cell.

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

The event `excelHeaderQueryCellInfo` triggers on framing each header cell during Excel export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `cell` - It holds the current cell information.
* `style`  -  It holds the style properties for the cell.

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

The event [`exportComplete`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportcomplete) is triggered after the pivot table data has been exported to a Excel/CSV document. You can use this event to acquire blob stream data for further customization and processing at your end by passing the `isBlob` parameter as **true** when using the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#excelexport) method. It has the following parameters:

* `type` - It holds the current export type such as PDF, Excel, and CSV.
* `promise` - It holds the promise object for blob data.

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