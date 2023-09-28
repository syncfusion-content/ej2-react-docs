---
layout: post
title: Adding header and footer in React Grid component | Syncfusion
description: Learn here all about Adding header and footer in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Adding header and footer 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding header and footer in React Grid component

You can customize text, page number, line, page size and changing orientation in header and footer.

## Write a text in header and footer

You can add text either in Header or Footer of exported PDF document using [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/#pdfexportproperties).

```ts

    const exportProperties: PdfExportProperties = {
      header: {
        contents: [
            {
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 },
                type: 'Text',
                value: "Northwind Traders"
            }
        ],
        fromTop: 0,
        height: 130
      }
    }

```

## Draw a line in header and footer

you can add line either in Header or Footer of the exported PDF document.

Supported line styles:
* dash
* dot
* dashdot
* dashdotdot
* solid

```ts

    const exportProperties: PdfExportProperties = {
      header: {
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ],
        fromTop: 0,
        height: 130
      }
    }

```

## Add page number in header and footer

you can add page number either in Header or Footer of exported PDF document.

Supported page number types:
* LowerLatin - a, b, c,
* UpperLatin - A, B, C,
* LowerRoman - i, ii, iii,
* UpperRoman - I, II, III,
* Number - 1,2,3.

```ts

const exportProperties: PdfExportProperties = {
      header: {
        contents: [
            {
              /** format is optional */
              format: 'Page {$current} of {$total}',
              pageNumberType: 'Arabic',
              position: { x: 0, y: 25 },
              style: {
                fontSize: 15,
                hAlign: 'Center',
                textBrushColor: '#ffff80',
              },
              type: 'PageNumber',
            }
        ],
        fromTop: 0,
        height: 130
    }
  }

```

## Insert an image in header and footer

Image (Base64 string) can be added in the exported document in header/footer using the [PdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/).

```ts

    let exportProperties: PdfExportProperties = {
      header: {
        contents: [
            {
              position: { x: 40, y: 10 },
              size: { height: 100, width: 250 },
              src: image,
              type: 'Image'
            }
        ],
        fromTop: 0,
        height: 130
      }
    }

```

The below code illustrates the pdf export customization.

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
{% highlight js tabtitle="image.jsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/image.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="image.tsx" %}
{% include code-snippet/grid/pdf-export-cs3/app/image.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs3" %}

## Repeat column header on every page

By default, column header will be placed on the first page of the pdf document but you can display column header on every page using **repeatHeader** property of **pdfGrid**.

In the below sample, we have enabled **repeatHeader** property in [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#pdfheaderquerycellinfo) event to show the header on every page.

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