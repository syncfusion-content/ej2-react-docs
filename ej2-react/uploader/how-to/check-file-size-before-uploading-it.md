---
layout: post
title: How to check file size before upload in React File Upload | Syncfusion
description: Check each file's size before upload in the React File Upload using the uploading event and format bytes with the bytesToSize method.
control: Check file size before uploading it 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to check file size before upload in React File Upload

Validate file sizes before upload by using the [uploading](https://ej2.syncfusion.com/react/documentation/api/uploader/#uploading) event. The file object contains the file size in bytes. Convert this size to user-friendly formats such as `KB` or `MB` using the [bytesToSize](https://ej2.syncfusion.com/react/documentation/api/uploader/#bytestosize) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/check-file-size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/check-file-size-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/check-file-size-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
