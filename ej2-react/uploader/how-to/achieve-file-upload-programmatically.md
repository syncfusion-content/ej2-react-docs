---
layout: post
title: Achieve file upload programmatically in React Uploader component | Syncfusion
description: Learn here all about Achieve file upload programmatically in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Achieve file upload programmatically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Achieve file upload programmatically in React Uploader component

Programmatic file upload enables you to trigger upload actions through code rather than user interactions. Use the [upload](https://ej2.syncfusion.com/react/documentation/api/uploader/#upload) method to initiate file uploads, and retrieve selected file data from the [getFilesData](https://ej2.syncfusion.com/react/documentation/api/uploader/#getfilesdata) public method.

* If the upload method receives specific files as arguments, only those files will be uploaded.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/dynamic-upload-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/dynamic-upload-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/dynamic-upload-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
