---
layout: post
title: Exporting hierarchy grid in React Grid component | Syncfusion
description: Learn here all about Exporting hierarchy grid in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Exporting hierarchy grid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting hierarchy grid in React Grid component

The grid have an option to export the hierarchy grid to excel document. By default, grid will exports the visible child grids in expanded state. you can change the exporting option by using the **ExcelExportProperties.hierarchyExportMode** property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the visible child grids in expanded state. |
| All      | Exports the all the child grids in expanded state. |
| None     | Exports the child grids in collapse state. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/excel-export-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/excel-export-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/excel-export-cs14" % }

## Limitations

Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested levels and if it exceeds more than seven levels then the document will be exported without outline option. Please refer the [Microsoft Limitation](https://docs.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations)