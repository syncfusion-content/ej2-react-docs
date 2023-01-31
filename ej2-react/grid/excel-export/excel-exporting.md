---
layout: post
title: Excel exporting in React Grid component | Syncfusion
description: Learn here all about Excel exporting in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Excel exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel exporting in React Grid component

The excel export allows exporting Grid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method for exporting. To enable Excel export in the grid, set the [`allowExcelExport`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowexcelexport) as **true**.

To use excel export, You need to inject the **ExcelExport** module in grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs10" %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showspinner)/ [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidespinner) methods. You can use  [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.id** as **Grid_pdfexport** or **Grid_excelexport** we can call the [`showSpinner`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showspinner) method from grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event, We can call the [`hideSpinner`](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs1" %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting.
To export data dynamically, define the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) in [`ExcelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs11" %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property by invoking [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method. In the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed *recordcount* as *12* using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs2" %}

## See Also

* [How to export the Grid when using non english font in React Grid](https://www.syncfusion.com/forums/148193/how-to-export-the-grid-when-using-non-english-font-in-react-grid)