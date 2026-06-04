---
layout: post
title: React Grid – Cordova Export Support | Syncfusion
description: React Grid Cordova export explains techniques to export grid data from hybrid Cordova apps, handling files and platform constraints for mobile exports.
platform: ej2-react
control: Exporting grid in cordova application 
documentation: ug
domainurl: ##DomainURL##
---

# Cordova Grid Export in React Grid Component

Exporting the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid in a Cordova application is useful when data needs to be generated and saved as Excel or PDF files for reporting or offline access. Since Cordova does not support direct file downloads, exporting must be handled through Blob streams. This is achieved by using the grid's export methods along with the export-complete events to access the generated Blob.

The example below demonstrates how to export the React Grid in a Cordova environment. It uses the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#excelexportcomplete) and [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexportcomplete) events to obtain the Blob stream for Excel and PDF exports. The `exportBlob` function then creates a downloadable link for the exported file.

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

