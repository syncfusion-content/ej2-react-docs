---
layout: post
title: Print and export in React Treemap component | Syncfusion
description: Learn here all about Print and export in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Print and export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and export in React Treemap component

## Print

To use the print functionality, we should inject the `Print` module into `services` and set the [`allowPrint`](https://ej2.syncfusion.com/react/documentation/api/treemap/#allowprint) property to **true**. The rendered treemap can be printed directly from the browser by calling the method [`print`](https://ej2.syncfusion.com/react/documentation/api/treemap/#print).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/printAndExport-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/printAndExport-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/printAndExport-cs1" %}

## Export

### Image Export

To use the image export functionality, we should inject the `ImageExport` module into `services` and set the [`allowImageExport`](https://ej2.syncfusion.com/react/documentation/api/treemap/#allowimageexport) property to **true**. The rendered treemap can be exported as an image using the [`export`](https://ej2.syncfusion.com/react/documentation/api/treemap/#export) method. The method requires two parameters: image type and file name. The treemap can be exported as an image in the following formats.

* JPEG
* PNG
* SVG

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/printAndExport-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/printAndExport-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/printAndExport-cs2" %}

We can get the image file as base64 string for the JPEG and PNG formats. The treemap can be exported to image as a base64 string using the [`export`](https://ej2.syncfusion.com/react/documentation/api/treemap/#export) method. There are four parameters required: image type, file name, orientation of the exported PDF document which must be set as **null** for image export and finally **allowDownload** which should be set as **false** to return base64 string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/printAndExport-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/printAndExport-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/printAndExport-cs3" %}

### PDF Export

To use the PDF export functionality, we should inject the `PdfExport` module into `services` and set the [`allowPdfExport`](https://ej2.syncfusion.com/react/documentation/api/treemap/#allowpdfexport) property to **true**. The rendered treemap can be exported as PDF using the [`export`](https://ej2.syncfusion.com/react/documentation/api/treemap/#export) method. The [`export`](https://ej2.syncfusion.com/react/documentation/api/treemap/#export) method requires three parameters: file type, file name and orientation of the PDF document. The orientation setting is optional and **0** indicates portrait and **1** indicates landscape.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/printAndExport-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/printAndExport-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/printAndExport-cs4" %}

>The exporting of the treemap as base64 string is not supported in the PDF export.
