---
layout: post
title: Gauge print and export in React Circular gauge component | Syncfusion
description: Learn here all about Gauge print and export in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge print and export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Gauge print and export in React Circular gauge component

## Print

To use the print functionality, we should inject the `Print` module into `services` and set the [`allowPrint`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#allowprint) property to **true**. The rendered circular gauge can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#print).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-print-and-export-cs1" %}

## Export

### Image Export

To use the image export functionality, we should inject the `ImageExport` module into `services` and set the [`allowImageExport`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#allowimageexport) property to **true**. The rendered circular gauge can be exported as an image using the [`export`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#export) method. The method requires two parameters: image type and file name. The circular gauge can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-print-and-export-cs2" %}

We can get the image file as base64 string for the JPEG and PNG formats. The circular gauge can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-print-and-export-cs3" %}

### PDF Export

To use the PDF export functionality, we should inject the `PdfExport` module into `services` and set the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#allowpdfexport) property to **true**. The rendered circular gauge can be exported as PDF using the [`export`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#export) method. The [`export`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and "0" indicates portrait and "1" indicates landscape.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-print-and-export-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-print-and-export-cs4" %}

>Note: The exporting of the circular gauge as base64 string is not supported in the PDF export.