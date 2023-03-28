---
layout: post
title: Validate image on drop in React Uploader component | Syncfusion
description: Learn here all about Validate image on drop in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Validate image on drop 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validate image on drop in React Uploader component

The uploader component allows you to upload all type of images by setting **image/* ** to [allowedExtensions](https://ej2.syncfusion.com/react/documentation/api/uploader/#allowedextensions) property.

By default, the behavior is working with select a file using browse button. But, this behavior doesn’t support on drag and drop the files. You can handle this behavior manually using `selected` event by filtering the file types from application.

In the following example, validated image files using images/*. You are able to drag and drop the image files with extension of PNG, JPG, BPG, GIF and TIFF to upload it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/validate-image-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/validate-image-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/validate-image-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.