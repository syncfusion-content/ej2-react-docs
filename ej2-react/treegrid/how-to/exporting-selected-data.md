---
layout: post
title: Exporting selected data in React Treegrid component | Syncfusion
description: Learn here all about Exporting selected data in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Exporting selected data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting selected data in React Treegrid component

You can export the selected records data by passing it to [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties/) or [`ExcelExportProperties.dataSource`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) property in the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event.

In the below exporting demo, we can get the selected records using [`getSelectedRecords`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrecords) method and pass the selected data to [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexport) or [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelExport) methods using respective export properties..

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs5" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.