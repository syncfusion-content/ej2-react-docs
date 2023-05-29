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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.