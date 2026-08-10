---
layout: post
title: How to get total file size in React File Upload | Syncfusion
description: Calculate the total size of all selected files in the React File Upload using the selected event to validate against server limits.
control: Get the total size of selected files 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to get total file size in React File Upload

Calculate the total size of all selected files before upload using the selected event. This enables you to validate cumulative file size against server limits or display storage information to the user. Refer to the following example to implement total file size calculation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/file-size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/file-size-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/file-size-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
