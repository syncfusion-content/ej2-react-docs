---
layout: post
title: Exporting grid in cordova application in React Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Exporting grid in cordova application 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in React Grid component

Exporting the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid in a Cordova application. It utilizes the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#excelexportcomplete) and [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/exporting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/exporting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/exporting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/exporting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/exporting-cs1" %}

