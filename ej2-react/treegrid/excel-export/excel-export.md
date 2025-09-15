---
layout: post
title: Excel export in React Treegrid component | Syncfusion
description: Learn here all about Excel export in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in React Treegrid component

The excel export allows exporting TreeGrid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexport) method for exporting. To enable Excel export in the treegrid, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowexcelexport) as **true**.

To use excel export, You need to inject the **ExcelExport** module in treegrid.

To get start quickly with exporting functionalities, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=Rz24Nk4eSEY" %}

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs7" %}

## Persist collapsed state

You can persist the collapsed state in the exported document by defining `isCollapsedStatePersist` property as true in `TreeGridExcelExportProperties` parameter of [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexport) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs8" %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs9" %}

## Exporting Custom Aggregates in Tree Grid  
The Tree Grid enables exporting custom aggregates, which summarize column data, to an Excel document using the `ExcelAggregateQueryCellInfo` event.  

In the provided example, the `customAggregateFn` function computes the item count for a selected category, while the `ExcelAggregateQueryCellInfo` event customizes the exported cell values in the Excel document.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs10" %}

## Passing additional parameters to the server when exporting

Passing additional parameters to the server when exporting data in the Syncfusion React TreeGrid involves providing flexibility to include extra information or customize the export process based on specific requirements.

You can achieve this by utilizing the [query](https://ej2.syncfusion.com/react/documentation/api/treegrid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event. Within the query property, you can invoke the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams)  method to add parameters to the request.

The following example demonstrates how to pass additional parameters to the server when Excel exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically **recordcount** as **12**, are passed using the `addParams` method and displayed as a message.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs7" %}
 
> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.