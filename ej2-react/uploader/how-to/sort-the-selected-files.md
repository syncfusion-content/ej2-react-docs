---
layout: post
title: How to sort the selected files in React File Upload | Syncfusion
description: Sort the selected file list in a custom order in the React File Upload by reordering the files inside the selected event handler.
control: Sort the selected files 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to sort the selected files in React File Upload

Sort the selected file list in a custom order using the [selected](https://ej2.syncfusion.com/react/documentation/api/uploader#selected) event. Inside the `selected` handler, reorder `args.filesData` (for example, with `Array.prototype.sort`) and assign the reordered array to `args.modifiedFilesData` so the Uploader picks up the new order. The following example demonstrates how to implement custom sorting for the file list in the Uploader component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/sorting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/sorting-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/sorting-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
