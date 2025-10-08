---
layout: post
title: Adding header and footer in React TreeGrid | Syncfusion
description: Learn here all about PDF Adding header and footer in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Adding header and footer 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding header and footer in React TreeGrid

Customize header and footer content such as text, page numbers, lines, page size, and orientation.

## How to write a text in header or footer

Add text in the header or footer of the exported PDF document.

```ts

    const exportProperties: PdfExportProperties = {
        header: {
            contents: [
                {
                    position: { x: 0, y: 50 },
                    style: { textBrushColor: '#000000', fontSize: 13 },
                    type: 'Text',
                    value: "Task Details"
                }
            ],
            fromTop: 0,
            height: 130
        }
    }

```

## How to draw a line in header or footer

Add a line in the header or footer of the exported PDF document.

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

## Add page number in header or footer

Add page numbers in the header or footer of the exported PDF document.

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
                    format: 'Page {$current} of {$total}', // optional
                    pageNumberType: 'Arabic',
                    position: { x: 0, y: 25 },
                    style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' },
                    type: 'PageNumber'
                }
            ],
            fromTop: 0,
            height: 130
        }
    }

```

## Insert an image in header or footer

An image (Base64 string) can be added to the header or footer of the exported PDF document using `PdfExportProperties`.

```ts

let exportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 250 },
            }
        ]
    }
}

```

The following example illustrates PDF export customization.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="image.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs1/app/image.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="image.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs1/app/image.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs1" %}