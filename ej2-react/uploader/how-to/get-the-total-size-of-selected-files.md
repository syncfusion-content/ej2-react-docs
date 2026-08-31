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

For example, when the user selects three files with sizes `5000`, `10000`, and `50000` bytes, the calculated total is `65000` bytes (approximately `63.48 KB` using `bytesToSize`).

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
