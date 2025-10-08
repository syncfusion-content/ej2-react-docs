---
layout: post
title: Pdf export options in React TreeGrid | Syncfusion
description: Learn here all about Pdf export options in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# PDF export options in React TreeGrid

## Export selected records

Exporting only the selected records from the Syncfusion React TreeGrid enables generating a PDF that includes only relevant data. This feature supports focused and targeted exports.

Export selected records by setting the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) property in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event.

To export the selected records from the TreeGrid to a PDF document, follow these steps:

1. Handle the `toolbarClick` event of the TreeGrid.

2. Retrieve selected records using the [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource` property.

4. Trigger the export using the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexport) method.

The following example demonstrates how to export the selected records to a PDF document.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs5" %}

## Export hidden columns

Export hidden columns by setting `includeHiddenColumn` to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs4" %}

## Show or hide columns on exported PDF

Show a hidden column or hide a visible column during export using the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) and [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfExportComplete) events.

In the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event, when **args.item.text** is **PDF Export**, control visibility by setting the [column.visible](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#visible) property to **true** or **false**.

In the `pdfExportComplete` event, revert the visibility changes to the previous state.

In the following example, **Duration** is hidden in the TreeGrid. During export, **Duration** is shown and **StartDate** is hidden.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs5" %}

## How to change page orientation

Change page orientation to Landscape (default: Portrait) for the exported document using `PdfExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs6" %}

## How to change page size

Customize page size for the exported document using `PdfExportProperties`.

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
{% include code-snippet/treegrid/pdfexport-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs7" %}

## To customize PDF export

PDF export supports customizing the mapping of TreeGrid content to the exported PDF document.

### File name for exported document

Assign a file name for the exported document by defining the `fileName` property in `PdfExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs8" %}

### Default fonts for PDF exporting

By default, TreeGrid uses the **Helvetica** font in the exported document. Change the default font using the `PdfExportProperties.theme` property. Available default fonts:

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing the default font:

```ts

    import { PdfFontFamily, PdfFontStyle, PdfStandardFont } from '@syncfusion/ej2-pdf-export';

    ...

    const pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold)},
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    }

```

### Add custom font for PDF exporting

Customize fonts for TreeGrid header, content, and caption cells in the exported document using the `PdfExportProperties.theme` property.

In the following example, the Advent Pro font is applied to export the TreeGrid with Hungarian fonts.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="font.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs9/app/font.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="font.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs9/app/font.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs9" %}

> **PdfTrueTypeFont** accepts base 64 format of the Custom Font.

## Conditional cell formatting

Conditional cell formatting in the exported PDF enables customizing cell appearance based on values or criteria.

Implement conditional formatting using the [pdfQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfQueryCellInfo) event. Within this event, access the cell object using `args.cell` and modify properties, such as background color, based on the required conditions.

The following example demonstrates customizing the background color of the **Freight** column in the exported PDF document using the `pdfQueryCellInfo` event and the `args.cell.backgroundColor` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs2" %}

## Theme

PDF export includes support for applying a theme to the exported PDF document.

To apply a theme, define `theme` in `PdfExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs3" %}

> By default, material theme is applied to exported PDF document.