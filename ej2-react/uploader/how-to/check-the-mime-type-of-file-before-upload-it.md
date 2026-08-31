---
layout: post
title: How to check the MIME type in React File Upload | Syncfusion
description: Check each file's MIME type before upload in the React File Upload using the uploading event to validate or display the file type.
control: Check the MIME type of file before uploading it 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to check the MIME type in React File Upload

Validate file types before upload by checking the MIME type using the [uploading](https://ej2.syncfusion.com/react/documentation/api/uploader#uploading) event. The file object exposes the MIME type via `args.file.type` (for example, `"image/png"` or `"application/pdf"`). The following sample demonstrates displaying the file MIME type in an alert box before the upload begins.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/mime-type-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/mime-type-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/mime-type-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
