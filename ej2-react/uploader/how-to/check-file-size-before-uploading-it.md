---
layout: post
title: Check file size before uploading it in React Uploader component | Syncfusion
description: Learn here all about Check file size before uploading it in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Check file size before uploading it 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check file size before uploading it in React Uploader component

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
