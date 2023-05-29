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

The excel export provides an option to export multiple grid data in the same excel file.

## Same sheet

The excel export provides support to export multiple grids in same sheet.
To export in same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#type) as **AppendToSheet** in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).
It have an option to provide blank rows between grids. These blank rows count can be defined by using the [`multipleExport.blankRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows).

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

Excel exporting provides support to export multiple grids in new sheet.
To export in new sheet, define  [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#type) as **NewSheet** in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

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