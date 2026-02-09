---
layout: post
title: Adding header and footer in React Grid component | Syncfusion
description: Learn here all about Adding header and footer in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Adding header and footer 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding Header and Footer in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables customized header and footer sections to be added in exported PDF documents. This feature supports custom text, page numbers, lines, page size configuration, and orientation changes for header and footer sections.

## Adding text in header and footer

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports addition of custom text in header or footer sections of exported PDF documents.

The header section of a PDF document is positioned at the top of each page and provides a space for additional information or branding elements such as company logos, document titles, dates, or other information that repeats consistently across every page.

The footer section is positioned at the bottom of each page and serves as an area for custom text content. Common footer content includes page numbers, copyright information, and disclaimers, with footer content repeated on every page similar to the header.

To add text in the header or footer of the exported PDF document, follow these steps:

1. Access the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) of the Grid component.
2. Set the [header](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#header) or [footer](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#footer) property to a string value representing the desired text.
3. Trigger the PDF export operation.

The following code example demonstrates adding the header in the exported PDF document. 

```typescript

const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x:200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
        ]
    }

```

## Drawing line in header and footer

Line elements can be added to the header and footer sections of exported PDF documents. This feature creates clear visual separation between the header/footer and the main content, enhancing document structure and readability.

This can be achieved using the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property of the Grid. Line styles can be customized using the supported dash styles listed below:

* Dash
* Dot
* DashDot
* DashDotDot
* Solid

To add a line in the header or footer of the exported PDF document, access the `header.contents` or `footer.contents` property of the [header](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#header) or [footer](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#footer) in the `pdfExportProperties` property of the grid. 

The following code example demonstrates drawing a line in the header of the exported PDF document. 

```typescript

const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            }
        ]
    }
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
        ],
    },
}

```

## Add page number in header and footer

Page numbers can be included in the header and footer sections of exported PDF documents. This feature provides page references for better document navigation and readability.

This can be achieved using the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property of the Grid. Different page number types are supported as listed below:

* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3,
* Arabic - 1,2,3.

To add a page number in the header or footer of the exported PDF document, access the `header.contents` or `footer.contents` property of the [header](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#header) or [footer](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#footer) in the `pdfExportProperties` property of the grid. 

The following code example demonstrates adding a page number in the footer of the exported PDF document.

```typescript

 const exportProperties: PdfExportProperties = {
    footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#4169e1', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}

```

## Insert an image in header and footer

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports inclusion of images in the header and footer sections of exported PDF documents. This feature enables addition of custom logos, branding elements, or other relevant images to enhance document presentation.

Images can be represented using base64 strings in `.jpeg` format. This can be achieved using the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property of the Grid component.

To insert an image in the header or footer of the exported PDF document, follow these steps:

1. Convert the desired image to a base64 string in the `.jpeg` format.

2. Access the `pdfExportProperties` of the Grid component.

3. Set the `header.contents.src` property to the respective file of the image or the base64 string of the image.

4. Trigger the PDF export operation.

```typescript
const exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
        ]
    }
}

```

The following example demonstrates adding a header and footer to the exported grid. In the given example, lines are added in the header and footer, an image is inserted in the header, and a page number is added in the footer.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs3" %}

## Repeat column header on every page

The column header can be repeated on every page of an exported PDF document. This feature ensures that the column header remains visible and easily identifiable, even when data spans multiple pages in the exported PDF document.

By default, the column header appears only on the first page of the PDF document. Enabling the `repeatHeader` property of the "pdfGrid" object to "true" displays the column header on every page. This can be achieved using the [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#pdfheaderquerycellinfo) event of the Grid.

The following example demonstrates repeating the column header on every page of the exported PDF document using the `pdfHeaderQueryCellInfo` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs4" %}