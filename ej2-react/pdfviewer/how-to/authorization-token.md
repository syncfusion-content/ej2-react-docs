---
layout: post
title: Authorization token in React Pdfviewer component | Syncfusion
description: Learn here all about Authorization token in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Authorization token 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Authorization token in React Pdfviewer component

The PDF Viewer library allows you to include the authorization token in the PDF viewer AJAX request using the properties of the ajaxRequest header available in `AjaxRequestSettings`, and it will be included in every AJAX request send from PDF Viewer.

Here is an example of how you can use the **AjaxRequestSettings** property to include the authorization token to the PDF viewer control:

{% raw %}

```javascript

<PdfViewerComponent
  id="container"
  documentPath="PDF_Succinctly.pdf"
  serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
  ajaxRequestSettings={this.ajaxRequestSettings}
  style={{ height: '640px' }}>
</PdfViewerComponent>

// Include the Authorization token
ajaxRequestSettings = {
ajaxHeaders: [
  {
    headerName: 'Authorization',

    headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
  }
],
withCredentials: false
};

```
{% endraw %}

Find the sample [how to include authorization token](https://stackblitz.com/edit/react-4zx649-mjadzl?file=index.js)