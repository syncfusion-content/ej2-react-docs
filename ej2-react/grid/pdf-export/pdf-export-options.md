---
layout: post
title: Pdf export options in React Grid component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export options in React Grid component

## Export current page

PDF export provides an option to export the current page into PDF. To export current page, define the [`PdfExportProperties.exportType`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#exporttype) to **CurrentPage**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs9" % }

## Export the selected records only

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelExport) methods using respective export properties..

 {% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs3" % }

## Export filtered data only

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method.

 {% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs4" % }

## Export hidden columns

PDF export provides an option to export hidden columns of Grid by defining the [`PdfExportProperties.includeHiddenColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#includehiddencolumn) as **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs10" % }

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_pdfexport**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs11" % }

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the [`PdfExportProperties.pageOrientation`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pageorientation).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs12" % }

## Change page size

Page size can be customized for the exported document using the [`PdfExportProperties.pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pagesize).
Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs13" % }

## Define file name

You can assign the file name for the exported document by defining [`fileName`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#filename) property in [`PdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs14" % }

## Font customization

### Default fonts

By default, grid uses **Helvetica** font in the exported document. You can change the default font by using [`PdfExportProperties.theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```ts

    import { PdfFontFamily, PdfFontStyle, PdfStandardFont } from '@syncfusion/ej2-pdf-export';

    ...

    const pdfExportProperties: PdfExportProperties = {
      theme: {
        caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
        header: { font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold) },
        record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
      }
    };

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using [`PdfExportProperties.theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property.

In the following example, we have used Algeria font to export the grid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs15" % }

> **PdfTrueTypeFont** accepts base 64 format of the Custom Font.