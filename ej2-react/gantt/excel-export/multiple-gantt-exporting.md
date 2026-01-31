---
layout: post
title: Multiple Gantt Exporting in React Gantt Chart Component | Syncfusion
description: Learn here all about multiple gantt exporting in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Multiple gantt exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Gantt Exporting in React Gantt Chart Component

In Gantt, the Excel export provides support to export multiple Gantt data in new sheet or same sheet.

## Same sheet

The Excel export provides support to export multiple Gantt data in the same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `ExcelExportProperties`. You can also provide blank rows between exported multiple Gantt data. These blank rows count can be defined using `multipleExport.blankRows`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs3" %}

>By default, `multipleExport.blankRows` value is 5.

## New sheet

The Excel exporting provides support to export multiple Gantt in new sheet. To export in new sheet, define `multipleExport.type` as `NewSheet` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs4" %}

## Customize the Excel export

Gantt Excel export allows the users to customize the exported document based on requirement.

### Export hidden columns

In Gantt, the Excel export provides an option to export hidden columns by defining `includeHiddenColumn` as `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs5" %}

### Show or hide columns on exported Excel

In Gantt, while exporting, you can show a hidden column or hide a visible column using the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbarclick) and [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/gantt#excelexportcomplete) events.

In the `toolbarClick` event, using the `args.item.id` property, you can show or hide columns by setting the `column.visible` property to `true` or `false` respectively.

Similarly, in the excelExportComplete event, you can revert the columns visibility back to the previous state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs6" %}

### Cell formatting during export

In Gantt, you can customize the TreeGrid cells in the exported document using the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#excelquerycellinfo) event. In this event, you can format the TreeGrid cells of exported Excel and CSV documents based on the required condition.

In the following sample, the background color has been customized for `TaskID` column in the exported Excel using the `args.style` and `backColor` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs7" %}

### Theme

The Excel export also provides an option to include custom theme for exported Excel document.

To apply theme in exported Excel, define the `theme` in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs8" %}

> By default, material theme is applied to the exported Excel document.

### Add header and footer

The Excel export also allows users to include header and footer contents to the exported Excel document.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs9" %}

### File name for exported document

You can set the required file name for the exported document by defining the `fileName` property in `ExcelExportProperties`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs10" %}