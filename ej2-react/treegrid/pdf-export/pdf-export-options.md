---
layout: post
title: Pdf export options in React Treegrid component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export options in React Treegrid component

## Export hidden columns

PDF export provides an option to export hidden columns of TreeGrid by defining the `includeHiddenColumn` as **true**.

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

You can show a hidden column or hide a visible column while exporting the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid#toolbarclick) and [`pdfExportComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid#pdfExportComplete) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid#toolbarclick) event, based on **args.item.text** as **PDF Export**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have *Duration* as a hidden column in the treegrid. While exporting, we have changed *Duration* to visible column and *StartDate* as hidden column.

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

Page orientation can be changed Landscape(Default Portrait) for the exported document using the `PdfExportProperties`.

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

Page size can be customized for the exported document using the `PdfExportProperties`.

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

PDF export provides an option to customize mapping of treegrid to exported PDF document.

### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in `PdfExportProperties`

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

By default, treegrid uses **Helvetica** font in the exported document. You can change the default font by using `PdfExportProperties.theme` property. The available default fonts are,

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
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold)},
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    }

```

### Add custom font for PDF exporting

You can change the default font of TreeGrid header, content and caption cells in the exported document by using `PdfExportProperties.theme` property.

In the following example, we have used Advent Pro font to export the treegrid with Hungarian fonts.

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