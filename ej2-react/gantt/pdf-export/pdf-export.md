---
layout: post
title: Pdf export in React Gantt component | Syncfusion
description: Learn here all about Pdf export in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export

## Pdf export in React Gantt component

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

To get start quickly with PDF exporting and to know its functionalities, you can check on this video

{% youtube "https://www.youtube.com/watch?v=y-FfHD02-s0" %}

>Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/pdf-export-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/pdf-export-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs14" %}

## Exporting Gantt data as a blob object

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

To export the Gantt chart data as a blob object, follow these steps:

step 1: pdfExport fourth argument set as `true`.

step 2: Then , `pdfExpComplete` return as blob object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-blobdata-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-blobdata-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-blobdata-cs1" %}

## Single page exporting in gantt


In Gantt, we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width by setting [`isFitToWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using [`chartWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/single-page/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/single-page/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/single-page/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/single-page" %}

## Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/#hyperlink) and [image](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

>Note: PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/single-page/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/single-page/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/single-page/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/single-page" %}