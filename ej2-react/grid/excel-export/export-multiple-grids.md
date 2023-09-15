---
layout: post
title: Export multiple grids in React Grid component | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Export multiple grids 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in React Grid component

The Excel export provides an option to export multiple grid data in the same or different sheets of an Excel file. Each grid is identified by its unique ID. You can specify which grids to export by listing their **IDs** in the `exportGrids` property.

## Same sheet

Excel exporting provides support for exporting multiple grids on the same sheet. To export the grids in the same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#type) as **AppendToSheet** in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). It also has an option to provide blank rows between the grids. These blank rows count can be defined by using [`multipleExport.blankRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs12" %}

>By default, [`multipleExport.blankRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) value is 5.

## New sheet

Excel export functionality enables the exporting of multiple grids onto separate sheets (each grid in new sheet of excel) within the Excel file. To achieve this, you can specify  [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#type) as **NewSheet** in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs13" %}