---
layout: post
title: Import an excel document using file uploader in the React Spreadsheet component | Syncfusion
description: Learn here all about import an excel document using file uploader in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## Import an excel document using file uploader in ##Platform_Name## Spreadsheet component

If you explore your machine to select and upload an excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/react/documentation/api/uploader/#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/react/documentation//api/spreadsheet/#open) method to see the appropriate output.

The following code example shows how to import an excel document using file uploader in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/open-save-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/open-save-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/open-save-cs9" %}