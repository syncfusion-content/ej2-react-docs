---
layout: post
title: How to achieve invisible upload in React File Upload | Syncfusion
description: Start uploading files immediately after selection in the React File Upload by calling the upload method inside the selected event handler.
control: Achieve invisible upload 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to achieve invisible upload in React File Upload

Invisible upload automatically initiates React File Upload immediately after file selection, without requiring a separate upload action. Enable this behavior by handling the [selected](https://ej2.syncfusion.com/react/documentation/api/uploader#selected) event in the Uploader component.

For invisible upload to take effect, the [autoUpload](https://ej2.syncfusion.com/react/documentation/api/uploader#autoupload) property must be set to `false`. Otherwise, the Uploader automatically starts uploading right after file selection and you do not need to call the `upload` method manually. Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/invisible-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/invisible-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/invisible-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
