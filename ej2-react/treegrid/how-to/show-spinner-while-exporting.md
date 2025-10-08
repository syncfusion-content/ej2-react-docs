---
layout: post
title: Show spinner while exporting in React TreeGrid | Syncfusion
description: Learn here all about Show spinner while exporting in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Show spinner while exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show spinner while exporting in React TreeGrid

Show or hide the spinner during export operations by using the [showSpinner](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidespinner) methods. Display the spinner in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event before exporting, and hide it in the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexportcomplete) or [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexportcomplete) event after exporting.

In the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event, when **args.item.text** is **PDF Export** or **Excel Export**, call [showSpinner](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showspinner) from the TreeGrid instance.

In the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexportcomplete) or [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexportcomplete) event, call [hideSpinner](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidespinner).

The following demo renders the default spinner during TreeGrid export.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs11" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.