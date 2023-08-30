---
layout: post
title: Show spinner while exporting in React Treegrid component | Syncfusion
description: Learn here all about Show spinner while exporting in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Show spinner while exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show spinner while exporting in React Treegrid component

You can show/ hide spinner component while exporting the treegrid using [`showSpinner`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showspinner)/ [`hideSpinner`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidespinner) methods. You can use  [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event, based on the parameter **args.item.text** as **PDF Export** or **Excel Export** we can call the [`showSpinner`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showspinner) method from grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#excelexportcomplete) event, We can call the [`hideSpinner`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the treegrid.

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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.