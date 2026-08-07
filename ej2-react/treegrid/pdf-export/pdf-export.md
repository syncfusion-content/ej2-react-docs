---
layout: post
title: React TreeGrid PDF Export | Syncfusion
description: Learn how to enable and use PDF export in the React TreeGrid, including showing a spinner and providing a custom data source.
control: Pdf export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# PDF Export in React TreeGrid

PDF export enables exporting TreeGrid data to a PDF document. Export by calling the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexport) method. To enable PDF export in the TreeGrid, set [allowPdfExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowpdfexport) to **true**.

For a quick start with exporting functionalities, refer to this video:
{% youtube "https://www.youtube.com/watch?v=Rz24Nk4eSEY" %}

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs10" %}

## Custom data source

PDF export supports defining a datasource dynamically before exporting. To export data dynamically, set the `dataSource` in `PdfExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs11" %}

## Exporting Custom Aggregates in TreeGrid

The TreeGrid supports exporting custom aggregates, which summarize column data, to a PDF document using the `PdfAggregateQueryCellInfo` event.

In the example, the `customAggregateFn` function computes the item count for a selected category, and the `PdfAggregateQueryCellInfo` event customizes the exported cell values in the PDF document.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs12" %}
 
> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.