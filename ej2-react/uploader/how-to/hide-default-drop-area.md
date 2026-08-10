---
layout: post
title: How to hide the default drop area in React File Upload | Syncfusion
description: Hide the default drag-and-drop area in the React File Upload by overriding the .e-upload.e-control styles to use a custom drop area.
control: Hide default drop area 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to hide the default drop area in React File Upload

Hide the default drag-and-drop area by overriding the corresponding Uploader styles. This is useful when you want to create a custom drop area or use the Uploader with alternative UI patterns. Override the following styles to hide the default drop area:

    * .e-upload.e-control
    * .e-upload .e-file-select
    * .e-upload .e-file-drop

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/hide-drop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/hide-drop-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/hide-drop-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
