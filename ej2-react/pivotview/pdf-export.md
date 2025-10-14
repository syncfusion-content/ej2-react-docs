---
layout: post
title: Pdf export in React Pivot Table component | Syncfusion
description: Learn here all about Pdf export in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Pdf export
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# PDF export in React Pivot Table component

The React Pivot Table lets users easily export their pivot table data as a PDF document. By setting the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowpdfexport) property to **true** in the Pivot Table configuration, users can enable PDF export. Once enabled, you can use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method to generate and download the PDF file.

In the following example, an external button is used to start the PDF export process. When the user clicks the button, the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method is called so that the Pivot Table data can be saved as a PDF file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs208/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs208/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs208/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs208/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs208" %}

## Multiple pivot table exporting

The PDF export option allows users to save data from multiple Pivot Tables into a single PDF file. Each Pivot Table appears on a separate page in the exported document, making it easy to review and share information from multiple tables at once.

To export multiple Pivot Tables into a single PDF document, use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method. This method accepts the following parameters:

- `pdfExportProperties` (optional): Configures export export options for the table and chart. See the [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfexportproperties/) API reference for details.
- `isMultipleExport` (optional): Set to **true** for the first Pivot Table to create a new multi-page PDF file. For additional tables, set to **false** to add them to the same file.
- `pdfDoc` (optional): The PDF document object returned from the previous export. Use this to add more Pivot Tables to the same PDF.
- `isBlob` (optional): Set to **true** to save the PDF document as blob data.
- `exportBothTableAndChart` (optional): When the [`displayOption.view`](https://ej2.syncfusion.com/react/documentation/api/pivotview/displayOption/#view) property is set to **Both** this exports both table and chart data into a single PDF document.

**Steps to export multiple Pivot Tables:**

1. Call [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) on the first Pivot Table with `isMultipleExport` set to **true** to start the export process.
2. Once the PDF data for the first table is ready, pass it as the `pdfDoc` parameter to the next Pivot Table's [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) call with `isMultipleExport` set to **false**.
3. Repeat this process for each additional Pivot Table you want to include.

The following code example shows how clicking the Export button exports both tables to a single PDF file, with each table on its own page:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs209/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs209/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs209/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs209/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs209" %}

## Export table and chart into the same document

If you want to export both the table and the chart from the Pivot Table into a single PDF file, set the [`displayOption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/displayOptionModel/) property to **Both**. Then, when you use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method, make sure to set the `exportBothTableAndChart` option to **true**. This will include both the data table and its chart in one PDF document when you export.

The following example shows how you can set this up in your application:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs322/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs322/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs322/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs322/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs322" %}

## Customization during PDF export

PDF export provides option to customize mapping of pivot table to the exported PDF document.

### To add header and footer while exporting

When exporting data from the Pivot Table to a PDF document, you can include additional information in the header or footer. You can add text, lines, page numbers, or images to ensure your exported document includes important details, such as your organization's name or branding, and to improve readability.

To do this, you can use the [`header`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#header) or [`footer`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#footer) options in the [`PdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/). These options allow you to specify what content to display at the top or bottom of each PDF page when exporting.

#### To add a text in header/footer

You can include custom text in the header or footer of the exported PDF document. Set the [`type`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Text** in the contents array to add text. The following example shows how to add the text "Northwind Traders" to the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: "Northwind Traders",
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 }
            }
        ]
    }
}
```

#### To draw a line in header/footer

You can draw lines in the header or footer to create visual separators or decorative elements. Set the [`type`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Line** in the contents array to add line elements. The line can be styled with different dash patterns and colors.

**Supported line styles:**
* `solid` - Continuous line
* `dash` - Dashed line
* `dot` - Dotted line
* `dashdot` - Alternating dash and dot pattern
* `dashdotdot` - Dash followed by two dots pattern

The following example demonstrates how to add a solid line in the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
}
```

#### Add page number in header/footer

You can display page numbers in the header or footer using various numbering formats. Set the [`type`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderFooterContent/#type) property to **PageNumber** in the contents array to add page number elements. This helps users navigate through multi-page PDF documents easily.

**Supported page number types:**
* `LowerLatin` - Lowercase letters (a, b, c)
* `UpperLatin` - Uppercase letters (A, B, C)
* `LowerRoman` - Lowercase Roman numerals (i, ii, iii)
* `UpperRoman` - Uppercase Roman numerals (I, II, III)
* `Arabic` - Numbers (1, 2, 3)

The following example shows how to add page numbers with Arabic format in the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', // optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}
```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs210/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs210/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs210/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs210/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs210" %}

#### Add an image in header/footer

You can include images in the header or footer by providing a Base64 encoded string. Set the [`type`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Image** in the contents array to add image elements. This allows you to add logos, watermarks, or other visual elements to your PDF documents.

The following example demonstrates how to add an image to the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 20, y: 10 },
                size: { height: 100, width: 100 },
            }
        ]
    }
}
```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs327/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs327/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs327/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs327/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs327" %}

### Changing the file name while exporting

The PDF export provides an option to change the file name of the document before exporting. To change the file name, define the [`fileName`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#filename) property in the [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs211/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs211/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs211/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs211/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs211" %}

### Changing page orientation while exporting

When exporting the Pivot Table as a PDF, users can choose the page orientation of the document. By default, the PDF is exported in **Portrait** orientation. If you want to change the orientation to **Landscape**, set the [`pageOrientation`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#pageorientation) property in the [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) object. Then, pass this object as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method. This lets you select either Portrait or Landscape orientation based on your needs before saving the exported PDF.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs212/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs212/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs212/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs212/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs212" %}

### Changing page size while exporting

When exporting Pivot Table data to PDF, users can select a specific page size for the PDF document. To set the page size, define the [`pageSize`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#pagesize) property within the [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) object, and pass this object as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method.

You can choose from various page sizes, such as Letter, Note, Legal, A0, A1, A2, A3, A5, A6, A7, A8, A9, B0, B1, B2, B3, B4, B5, Archa, Archb, Archc, Archd, Arche, Flsa, HalfLetter, Letter11x17, and Ledger.

This option lets users easily adjust the PDF layout to fit their specific needs before exporting the data from the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs213/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs213/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs213/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs213/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs213" %}

### Changing document width and height while exporting

You can adjust the size of the exported PDF document by setting the [`height`](https://ej2.syncfusion.com/react/documentation/api/pivotview/beforeExportEventArgs/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/pivotview/beforeExportEventArgs/#width) options in the [`beforeExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#beforeexport) event. This allows you to specify the dimensions of the PDF before creating it.

> Note: This option is available only when [`enableVirtualization`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) is set to **true**. Also, make sure that both the `VirtualScroll` and `PDFExport` modules are added to the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs323/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs323/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs323/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs323/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs323" %}

### Customize the table column count while exporting

Users can control how many Pivot Table columns appear on each page of the exported PDF by setting the [`columnSize`](https://ej2.syncfusion.com/react/documentation/api/pivotview/beforeExportEventArgs/#columnsize) option in the [`beforeExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#beforeexport) event. This allows users to split Pivot Table columns across multiple pages when exporting large tables to PDF, making the output easier to read.

> Note: This option works only when [`enableVirtualization`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) is enabled in the Pivot Table settings. Also, make sure that both `VirtualScroll` and `PDFExport` modules are injected into the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs324/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs324/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs324/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs324/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs324" %}

### Changing the table's column width and row height while exporting

You can adjust column width and row height in the PDF document when exporting data from the Pivot Table by handling the [`onPdfCellRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#onpdfcellrender) event. To set the width of specific columns during export, use the `args.column.width` property inside this event.

For example, the **"Unit Sold"** column under **"FY 2015"** can be set to a width of **60** pixels as shown in the example below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs325/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs325/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs325/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs325/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs325" %}

Similarly, if you want to change the height of a particular row in the PDF document, you can use the `args.cell.height` property inside the same [onPdfCellRender](https://ej2.syncfusion.com/react/documentation/api/pivotview/#onpdfcellrender) event. For instance, the **"Mountain Bikes"** row under **"France"** can be set to a height of **30** pixels as shown below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs326/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs326/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs326/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs326/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs326" %}

> Note: To use this option, make sure that [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization) is set to **true**. Additionally, both `VirtualScroll` and `PDFExport` must be injected into the Pivot Table.

## Changing the pivot table style while exporting

When you export the Pivot Table as a PDF document, you can change the colors used for headers, captions, and records. To do this, use the [`theme`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#theme) property inside the [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) object. Pass this object to the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method. This allows you to adjust how the Pivot Table looks in the exported PDF.

> By default, the Material theme is applied to the exported PDF document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs214/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs214/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs214/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs214/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs214" %}

### Changing default font while exporting 

By default, the Pivot Table uses the "Helvetica" font in the exported PDF. You can change this font by setting the [`theme`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#theme) property in [`pdfExportProperties`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/). The available built-in font options are:

- Helvetica
- TimesRoman
- Courier
- Symbol
- ZapfDingbats

```typescript
import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

...

let pdfExportProperties: PdfExportProperties = {
    theme: { 
        header: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold) }, 
        caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) }, 
        record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) } 
    } 
};
```

### Adding custom font while exporting

You can also use custom fonts when exporting if you need support for languages or styles that are not available in the built-in fonts. The custom font should be in **Base64** format and applied using the **PdfTrueTypeFont** class. In the example below, the **Advent Pro** font is used, which supports the Hungarian language.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs215/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs215/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs215/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs215/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs215" %}

> Non-English alphabets can also be exported correctly when you specify a suitable font.

## Virtual Scroll Data

When working with large amounts of data in the Pivot Table, the virtual scroll option allows users to efficiently export all the table data as a complete PDF document, without any slowdown or performance issues. This method uses PivotEngine export to manage and export extensive datasets smoothly. To use this option, make sure to enable the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowpdfexport) property and use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method in the Pivot Table.

> To use PivotEngine export, inject the `PDFExport` module into the Pivot Table.
> When virtual scrolling is enabled, PivotEngine export is used automatically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs216/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs216/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs216/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs216/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs216" %}

### Repeat row headers

When exporting the Pivot Table as a PDF using the PivotEngine export option, the row headers are repeated on each page by default. This helps users easily identify rows when viewing larger tables split across multiple PDF pages.

If you want to turn off the repeated row headers in your PDF, set the [`allowRepeatHeader`](https://ej2.syncfusion.com/react/documentation/api/pivotview/beforeExportEventArgs/#allowrepeatheader) property to **false** inside the [`beforeExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#beforeexport) event. Make sure you are using the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method with the PivotEngine export.

> To use PivotEngine export, inject the `PDFExport` module in the Pivot Table.
> By default, repeating row headers is enabled in the PivotEngine export.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs217/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs217/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs217/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs217/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs217" %}

### Export all pages

The Pivot Table allows users to export the entire set of virtual data—meaning all records used to create the complete table—as a PDF document. By default, when virtual scrolling is enabled, the pivot engine will export all data. If you want to export only the data currently shown in the visible area of the Pivot Table, set the [`exportAllPages`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportallpages) property to **false**. To make use of the pivot engine export, include the `PDFExport` module in your Pivot Table.

> By default, the pivot engine export is performed automatically when virtual scrolling is enabled.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs218/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs218/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs218/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs218/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs218" %}

## Events

### PdfQueryCellInfo

The [`pdfQueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event occurs for each row and value cell while exporting the Pivot Table to a PDF. This event allows users to change the value, appearance, or other details of the current cell in the PDF file. The following parameters are available in this event:

- [`value`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfQueryCellInfoEventArgs/#value): The content displayed in the cell.
- [`column`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfQueryCellInfoEventArgs/#column): The column information for the current cell.
- [`data`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfQueryCellInfoEventArgs/#data): The complete row data for the cell.
- [`style`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfQueryCellInfoEventArgs/#style): The style properties that control how the cell looks in the PDF.

By using this event, users can easily update the cell text, apply different styles such as font or background color, or adjust other settings as needed during PDF export.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs219/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs219/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs219/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs219/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs219" %}

### PdfHeaderQueryCellInfo

The [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#pdfheaderquerycellinfo) event is triggered for each column header cell when exporting the Pivot Table to a PDF document. This event allows users to easily change values or apply styles to the column header cells in the exported PDF file.

The event provides the following parameters:

- [`cell`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderQueryCellInfoEventArgs/#cell): Gives information about the current header cell being exported.
- [`style`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfHeaderQueryCellInfoEventArgs/#style): Contains style properties that can be used to format the cell.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs220/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs220/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs220/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs220/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs220" %}

### ExportComplete

The [`exportComplete`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#exportcomplete) event is triggered after the Pivot Table data has been successfully exported to a PDF document. This event allows you to access blob stream data for further processing by setting the `isBlob` parameter to **true** when calling the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method.

The event provides the following parameters:

* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/exportCompleteEventArgs/#type) - Specifies the current export type, such as PDF, Excel, or CSV.
* [`promise`](https://ej2.syncfusion.com/react/documentation/api/pivotview/exportCompleteEventArgs/#promise) - Contains the promise object that resolves with blob data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs221/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs221/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs221/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs221/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs221" %}

## See Also

* [Excel Exporting](./excel-export)