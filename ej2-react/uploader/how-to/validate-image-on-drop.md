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

Restrict file uploads to image types only by setting **image/** to the [allowedExtensions](https://ej2.syncfusion.com/react/documentation/api/uploader/#allowedextensions) property.

The allowedExtensions property works with the browse button but does not validate files during drag-and-drop operations. Handle drag-and-drop validation manually using the `selected` event to filter file types at the client level.

The following example validates image files (PNG, JPG, BMP, GIF, and TIFF) during both browse and drag-and-drop interactions:

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