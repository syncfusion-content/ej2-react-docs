---
layout: post
title: Export table and chart into the same document using toolbar in React Pivotview component | Syncfusion
description: Learn here all about how to export table and chart into the same document using toolbar in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Export table and chart into the same document using toolbar 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Export table and chart into the same document using toolbar in React Pivotview component

Even if the [displayOption.view](https://ej2.syncfusion.com/react/documentation/api/pivotview/displayOptionModel/#view) property is set to **Both** in the pivot table, you can only export either the table or the chart to the PDF document based on the current value set in the [displayOption.primary](https://ej2.syncfusion.com/react/documentation/api/pivotview/primary/) property. But, to export both the table and the chart to the same PDF document, use the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method during the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event invoke.

In the following example, the built-in export action can be restricted by setting the [`args.cancel`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#cancel) option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event, and both the table and the chart can be exported by calling the [`pdfExport`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pdfexport) method and setting the `exportBothTableAndChart` argument to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs315/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs315/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs315" %}