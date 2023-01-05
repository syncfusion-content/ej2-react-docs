---
layout: post
title: Excel export options in React Grid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Excel export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in React Grid component

The excel export provides an option to customize mapping of the grid to excel document.

## Export current page

The excel export provides an option to export the current page into excel. To export current page, define [`exportType`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#exporttype) to **CurrentPage**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs4/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs4/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs4" % }

## Export the selected records only

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelExport) methods using respective export properties..

 {% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs1" % }

## Export hidden columns

The excel export provides an option to export hidden columns of grid by defining [`ExcelExportProperties.includeHiddenColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#includehiddencolumn) as **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs5/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs5/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs5" % }

## Show or hide columns

You can show a hidden column or hide a visible column while printing the grid using [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) and [`ExcelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_excelexport**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs6/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs6/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs6" % }

## Export with filter options

The excel export provides an option to export with filter option in excel by defining `enableFilter` as **true** . It requires the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to be true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs7/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs7/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs7" % }

## Exporting grouped records

The excel export provides outline option for grouped records which hides the detailed data for better viewing.
In grid, we have provided the outline option for the exported document when the data are grouped.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs8/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs8/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs8/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs8" % }

## Define file name

You can assign the file name for the exported document by defining `fileName` property in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs9/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs9/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs9/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs9" % }