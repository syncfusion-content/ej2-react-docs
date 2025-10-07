---
layout: post
title: Excel export in React TreeGrid | Syncfusion
description: Learn here all about Excel export in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Excel export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in React TreeGrid

Excel export enables exporting TreeGrid data to an Excel document. Export by calling the [excelExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexport) method. To enable Excel export in the TreeGrid, set [allowExcelExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowexcelexport) to **true**.

For Excel export, inject the **ExcelExport** module in the TreeGrid.

For a quick start with exporting functionalities, refer to the following video:
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

Persist the collapsed state in the exported document by setting `isCollapsedStatePersist` to true in the `TreeGridExcelExportProperties` parameter of the [excelExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexport) method.

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

Excel export supports defining a data source dynamically before exporting. To export data dynamically, set the `dataSource` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs9" %}

## Exporting Custom Aggregates in TreeGrid  

The TreeGrid supports exporting custom aggregates, which summarize column data, to an Excel document using the `ExcelAggregateQueryCellInfo` event.  

In the example, the `customAggregateFn` function computes the item count for a selected category, and the `ExcelAggregateQueryCellInfo` event customizes the exported cell values in the Excel document.

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

Additional parameters can be sent to the server during export to include extra information or customize the export process.

This can be achieved using the [query](https://ej2.syncfusion.com/react/documentation/api/treegrid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event. Within the `query` property, invoke the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method to append parameters to the request.

The following example demonstrates passing additional parameters during Excel export within the `toolbarClick` event. In this example, the parameter **recordcount** with value **12** is added using `addParams` and displayed as a message.

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
 
> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.