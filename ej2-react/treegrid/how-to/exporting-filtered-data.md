---
layout: post
title: Exporting filtered data in React Treegrid component | Syncfusion
description: Learn here all about Exporting filtered data in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Exporting filtered data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting filtered data in React Treegrid component

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data from the filteredResult of TreeGrid filterModule and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexport) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs4" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
