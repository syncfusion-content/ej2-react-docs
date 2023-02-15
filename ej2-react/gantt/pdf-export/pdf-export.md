---
layout: post
title: Pdf export in React Gantt component | Syncfusion
description: Learn here all about Pdf export in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Pdf export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in React Gantt component

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