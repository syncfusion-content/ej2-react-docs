---
layout: post
title: Excel export in React Gantt component | Syncfusion
description: Learn here all about Excel export in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Excel export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in React Gantt component

Gantt supports client-side exporting, which allows you to export its data to the Excel and CSV formats. Use the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/gantt/#excelexport) and [`csvExport`](https://ej2.syncfusion.com/react/documentation/api/gantt/#csvexport) methods for exporting. To enable Excel export in the Gantt, set the [`allowExcelExport`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowexcelexport) to true.

To export data to Excel and CSV, inject the `ExcelExport` module in Gantt.

To get start quickly with Excel exporting and to know its functionalities, you can check on this video

{% youtube "https://www.youtube.com/watch?v=y-FfHD02-s0&t=299s" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/excel-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/excel-export-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/excel-export-cs2" %}