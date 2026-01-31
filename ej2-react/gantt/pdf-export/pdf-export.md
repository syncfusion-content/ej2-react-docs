---
layout: post
title: Pdf export in React Gantt Chart component | Syncfusion
description: Learn here all about Pdf export in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export

## Pdf export in React Gantt Chart component

PDF export allows exporting Gantt data to PDF document. You need to use the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [allowPdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowpdfexport) to true.

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

## Indicators in PDF exporting 

The PDF export functionality allows users to export Gantt charts enriched with dynamic indicators and accompanying images.
These indicators, represented by images,can be effortlessly defined using the  [base64](https://ej2.syncfusion.com/react/documentation/api/gantt/iIndicator#base64) encoding value in the data object of datasource.This data object field should be mapped to indiactor property of [task fields](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields#indicators).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/pdf-export-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/pdf-export-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs16" %}

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

In Gantt, we have provided support to export the Gantt Chart component where each rows are auto-fit to the PDF document page width by setting `isFitToWidth` as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using `chartWidth` and `gridWidth` by defining it as percentage in string.

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

## Multiple gantt exporting in React Gantt Chart component

PDF export provides an option for exporting multiple Gantt to same file. In this exported document, each Gantt will be exported to a new page of the document in same file.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-multiple-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-multiple-export-cs1" %}

## Applying Themes in PDF Export

PDF export provides an option to include theme for the exported PDF document.
To apply theme in exported PDF, define the [theme](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties#theme) in [pdfExportProperties](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfExportProperties/).
The available themes are:

* Material
* Fabric
* Bootstrap
* Bootstrap 4

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/pdf-export-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/pdf-export-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs12" %}