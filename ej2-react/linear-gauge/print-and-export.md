---
layout: post
title: Print and export in React Linear gauge component | Syncfusion
description: Learn here all about Print and export in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Print and export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in React Linear gauge component

## Print

The rendered Linear Gauge can be printed directly from the browser by calling the [`print`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#print) method. To use the print functionality, set the [`allowPrint`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#allowprint) property as **true** and inject the **Print** module into **services**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/print-and-export-cs1" %}

## Export

### Image Export

To use the image export functionality, set the [`allowImageExport`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#allowimageexport) property as **true** and inject the **ImageExport** module into **services**. The rendered Linear Gauge can be exported as an image using the [`export`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#export) method. This method requires two parameters: export type and file name. The Linear Gauge can be exported as an image with the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/print-and-export-cs2" %}

### PDF Export

To use the PDF export functionality, set the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#allowpdfexport) property as **true** and inject the **PdfExport** module into **services**. The rendered Linear Gauge can be exported as PDF using the [`export`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#export) method. The [`export`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#export) method requires three parameters: file type, file name, and orientation of the PDF document. The orientation of the PDF document can be set as **Portrait** or **Landscape**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/print-and-export-cs3" %}

### Exporting Linear Gauge as base64 string of the file

The Linear Gauge can be exported as base64 string for the JPEG, PNG and PDF formats. The rendered Linear Gauge can be exported as base64 string of the exported image or PDF document used in the [`export`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#export) method. The arguments that are required for this method is export type, file name, orientation of the exported PDF document and **allowDownload** boolean value that is set as **false** to return base64 string. The value for the orientation of the exported PDF document is set as **null** for image export and **Portrait** or **Landscape** for the PDF document.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/print-and-export-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/print-and-export-cs4" %}

>The exporting of the Linear Gauge as base64 string is not applicable for the SVG format.