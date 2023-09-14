---
layout: post
title: Perform form field double click event in React Pdfviewer component | Syncfusion
description: Learn here all about Perform form field double click event in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Perform form field double click event 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Perform form field double click event in React Pdfviewer component

The PDF Viewer library allows you to trigger an event when you double click on the form field using the `formFieldDoubleClick` event.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet in the `index.js` file to add the form field double click event in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

```javascript
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
  formFieldDoubleClick={formFieldDoubleClick}
  style={{ height: '640px' }}>
</PdfViewerComponent>

function formFieldDoubleClick(args) {
    //Prints the argument value in the console window
    console.log(args);
  }
```
{% endhighlight %}

{% highlight js tabtitle="Server-Backed" %}

```javascript
<PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
  formFieldDoubleClick={formFieldDoubleClick}
  serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
  style={{ height: '640px' }}>
</PdfViewerComponent>

function formFieldDoubleClick(args) {
    //Prints the argument value in the console window
    console.log(args);
  }
```
{% endhighlight %}
{% endtabs %}