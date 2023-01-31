---
layout: post
title: Pdf cell style customization in React Treegrid component | Syncfusion
description: Learn here all about Pdf cell style customization in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Pdf cell style customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pdf cell style customization in React Treegrid component

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid#pdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for *Duration* column in the exported document by **args.cell** and *backgroundColor* property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs2" %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `PdfExportProperties`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/pdfexport-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/pdfexport-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs3" %}

> By default, material theme is applied to exported PDF document.