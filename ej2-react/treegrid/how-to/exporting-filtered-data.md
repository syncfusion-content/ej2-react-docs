---
layout: post
title: React TreeGrid Filtered Data Export | Syncfusion
description: Learn how to export filtered data in the React TreeGrid, including specifying filtered results using PdfExportProperties for exporting.
control: Exporting filtered data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting Filtered Data in React TreeGrid

Export filtered data by defining the resulting dataset in [PdfExportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the following PDF export demo, filtered data is obtained from the TreeGrid `filterModule.filteredResult`, assigned to [PdfExportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/#datasource), and then passed to the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexport) method.

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

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.