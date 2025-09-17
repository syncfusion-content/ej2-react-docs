---
layout: post
title: Excel export options in React Treegrid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in React Treegrid component

## To customize excel export

The excel export provides an option to customize mapping of the treegrid to excel document.

### Export selected records

Exporting only the selected records from the TreeGrid allows generating Excel or CSV document that include only the desired data from the TreeGrid. This feature provides the flexibility to export specific records that are relevant to the needs, enabling more focused and targeted Excel or CSV exports.

To export only the selected records by utilizing the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties/) property in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event.

To export the selected records from the TreeGrid to a Excel or CSV file, you can follow these steps:

1. Handle the `toolbarClick` event of the TreeGrid.

2. Retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [excelExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelExport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#csvexport) method.

The following example demonstrates how to export the selected records to a Excel document when a toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs12" %}

### Export hidden columns

The excel export provides an option to export hidden columns of treegrid by defining `includeHiddenColumn` as **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs4" %}

### Show or hide columns on exported excel

You can show a hidden column or hide a visible column while printing the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) events.

In the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid#toolbarclick) event, based on **args.item.text** as **Excel Export**. We can show or hide columns by setting [`column.visible`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#visible) property to *true* or *false* respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have *Duration* as a hidden column in the treegrid. While exporting, we have changed *Duration* to visible column and *StartDate* as hidden column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs5" %}

### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs6" %}

## Conditional cell formatting

When exporting data from the TreeGrid, you have an option to conditionally format the cells in the exported Excel document. This allows you to customize the appearance of specific cells based on their values or other criteria.

To achieve this feature, you need to use the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelQueryCellInfo) event of the TreeGrid. This event is triggered for each cell during the export process to Excel. Within this event, you can access the cell object using the **args.cell** property and modify its properties, such as the background color, based on your desired conditions.

The following example demonstrate how to customize the background color of the Freight column in the exported Excel document using the **args.cell**  and **backgroundColor** properties of the `excelQueryCellInfo` event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs2" %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the `theme` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/excel-export-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/excel-export-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs3" %}

>By default, material theme is applied to exported excel document.